function readBilanThemes(sections = Y10_CONVERSATION_THEMES) {
  return sections.flatMap(({title, store, questions}) => {
    const drafts = readBilanDrafts(store);
    const responses = questions.flatMap(({id, core, text}) => {
      const answer = drafts?.[id]?.answer;
      return typeof answer === 'string' && answer.trim()
        ? [{question: `${core}. ${text}`, answer: answer.trim()}] : [];
    });
    return responses.length ? [{title, responses}] : [];
  });
}

function readBilanDrafts(store) {
  try {
    return JSON.parse(localStorage.getItem(store) || 'null')?.drafts;
  } catch {
    return undefined;
  }
}

function wrapBilanLine(text, font, size, width) {
  const fits = value => font.widthOfTextAtSize(value, size) <= width;
  const lines = [];
  let line = '';
  for (let word of text.trim().split(/\s+/u)) {
    const joined = line ? `${line} ${word}` : word;
    if (fits(joined)) {
      line = joined;
      continue;
    }
    if (line) lines.push(line);
    line = '';
    while (!fits(word)) {
      let end = 1;
      while (end < word.length && fits(word.slice(0, end + 1))) end++;
      lines.push(word.slice(0, end));
      word = word.slice(end);
    }
    line = word;
  }
  return [...lines, line];
}

async function makeBilanPdf(student, themes, {PDFDocument, StandardFonts}, title = 'Bilan · General Conversation') {
  const pdf = await PDFDocument.create();
  const regular = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const supported = new Set(regular.getCharacterSet());
  const content = [student, ...themes.flatMap(({title, responses}) =>
    [title, ...responses.flatMap(({question, answer}) => [question, answer])])];
  if (content.some(text => [...text.normalize('NFC')].some(char =>
    !/\s/u.test(char) && !supported.has(char.codePointAt(0))))) return null;

  const margin = 48;
  const width = 612;
  const height = 792;
  let page;
  let y;
  function newPage() {
    page = pdf.addPage([width, height]);
    y = height - margin;
  }
  function write(text, size, font = regular, gap = 0) {
    const leading = size * 1.4;
    for (const paragraph of text.normalize('NFC').split(/\r\n?|\n/u)) {
      for (const line of wrapBilanLine(paragraph, font, size, width - margin * 2)) {
        if (y - size < margin) newPage();
        if (line) page.drawText(line, {x: margin, y: y - size, size, font});
        y -= leading;
      }
    }
    y -= gap;
  }

  pdf.setTitle(title);
  pdf.setAuthor(student);
  newPage();
  write(title, 20, bold, 5);
  write(student, 13, regular, 16);
  for (const {title, responses} of themes) {
    if (y - margin < 85) newPage();
    write(title, 15, bold, 7);
    for (const {question, answer} of responses) {
      if (y - margin < 65) newPage();
      write(question, 11, bold, 3);
      write(answer, 11, regular, 11);
    }
  }
  return pdf.save();
}

function makePrintableBilan(student, themes, title = 'Bilan · General Conversation', language = 'fr') {
  const escape = text => text.replace(/[&<>]/gu, char => ({'&': '&amp;', '<': '&lt;', '>': '&gt;'})[char]);
  return `<!doctype html><html lang="${language}"><meta charset="utf-8"><title>${escape(title)}</title>
    <style>
      body{max-width:720px;margin:32px auto;padding:0 16px;font:16px/1.5 system-ui,sans-serif;color:#172b42}
      h1,h2,h3{break-after:avoid}h1{font-size:25px}h2{font-size:20px}h3{font-size:16px;margin-bottom:4px}
      .answer{margin-top:0;white-space:pre-wrap;overflow-wrap:anywhere}
      @media print{body{margin:0;max-width:none;padding:0;color:black}}
    </style><body><h1>${escape(title)}</h1><p>${escape(student)}</p>
    ${themes.map(({title, responses}) => `<section><h2>${escape(title)}</h2>
      ${responses.map(({question, answer}) => `<h3>${escape(question)}</h3><p class="answer">${escape(answer)}</p>`).join('')}
    </section>`).join('')}</body></html>`;
}

function bindBilanForm(bilanForm, sections, copy) {
  bilanForm.addEventListener('submit', async event => {
    event.preventDefault();
    const field = bilanForm.elements.student;
    const button = bilanForm.querySelector('button');
    const status = bilanForm.querySelector('[role="status"]');
    const student = field.value.trim();
    if (!student) {
      status.textContent = copy.missingName;
      field.focus();
      return;
    }
    if (button.disabled) return;

    button.disabled = true;
    status.textContent = '';
    try {
      const themes = readBilanThemes(sections);
      if (!themes.length) {
        status.textContent = copy.noAnswers;
        return;
      }
      const pdf = await makeBilanPdf(student, themes, await import('./vendor/pdf-lib.mjs'), copy.title);
      const blob = pdf
        ? new Blob([pdf], {type: 'application/pdf'})
        : new Blob([makePrintableBilan(student, themes, copy.title, copy.language)], {type: 'text/html;charset=utf-8'});
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const name = student.replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/gu, '') || copy.student;
      link.download = `${copy.filename}-${name}.${pdf ? 'pdf' : 'html'}`;
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60_000);
      if (!pdf) status.textContent = copy.printHelp;
    } catch {
      status.textContent = copy.failed;
    } finally {
      button.disabled = false;
    }
  });
}

bindBilanForm(document.getElementById('y10-bilan'), Y10_CONVERSATION_THEMES, {
  language: 'fr',
  title: 'Bilan · General Conversation',
  filename: 'bilan',
  student: 'élève',
  missingName: 'Indique ton nom et ton prénom.',
  noAnswers: 'Écris au moins une réponse avant de télécharger ton bilan.',
  printHelp: 'Ouvre le fichier téléchargé pour l’imprimer ou l’enregistrer en PDF.',
  failed: 'Le téléchargement a échoué. Réessaie dans un instant.',
});

bindBilanForm(document.getElementById('spanish-igcse-bilan'), SPANISH_IGCSE_PRACTICE, {
  language: 'es',
  title: 'Mis respuestas · IGCSE Spanish',
  filename: 'respuestas',
  student: 'estudiante',
  missingName: 'Escribe tu nombre y apellido.',
  noAnswers: 'Escribe al menos una respuesta antes de descargarla.',
  printHelp: 'Abre el archivo para imprimirlo o guardarlo como PDF.',
  failed: 'No se pudo descargar el archivo. Inténtalo otra vez.',
});
