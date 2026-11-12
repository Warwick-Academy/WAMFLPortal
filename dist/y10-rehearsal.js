const Y10_REHEARSAL = [
  ['repeat', 'Écoute', 'Listen',
    'Écoute et suis les mots.', 'Listen and follow the words.'],
  ['y10-chunks', 'Groupes de mots', 'Chunks',
    'Lis le groupe. Écoute, puis répète à voix haute.', 'Read the chunk. Listen, then repeat it aloud.'],
  ['y10-initials', 'Initiales', 'Initials',
    'Dis tout le texte avec les premières lettres. Clique sur une lettre pour entendre le mot.',
    'Say the whole answer using the first letters. Click a letter to hear the word.'],
  ['y10-choose', 'Écoute et choisis', 'Listen and choose',
    'Écoute le groupe suivant. Trouve-le et clique dessus pour l’ajouter à ton texte.',
    'Listen to the next chunk. Find it and click it to add it to your text.'],
  ['y10-dictation', 'Écoute et écris', 'Listen and type',
    'Écoute le groupe de mots. Tape ce que tu entends en français.',
    'Listen to the chunk. Type what you hear in French.'],
  ['y10-remember', 'Souviens-toi de la suite', 'Remember what comes next',
    'Dis le groupe suivant de mémoire. Puis trouve-le et clique dessus. Si tu entends un bip, essaie encore.',
    'Say the next chunk from memory. Then find it and click it. If you hear a buzz, try again.'],
  ['y10-translate', 'De l’anglais au français', 'English to French',
    'Lis le groupe de mots en anglais. Tape-le en français.',
    'Read the chunk in English. Type it in French.'],
  ['y10-chunk-cues', 'Un mot par groupe', 'One word per chunk',
    'Choisis un mot dans chaque groupe. Puis dis tout ton texte avec ces mots.',
    'Choose one word from each chunk. Then say your whole answer using those words.'],
  ['y10-disappear', 'Mots qui disparaissent', 'Disappearing words',
    'Lis ton texte à voix haute. Clique sur un mot pour l’entendre et le cacher. Redis le texte. Recommence.',
    'Read your answer aloud. Click a word to hear it and hide it. Say the answer again. Repeat.'],
  ['y10-sentence-cues', 'Un mot par phrase', 'One word per sentence',
    'Choisis un mot dans chaque phrase. Puis dis tout ton texte avec ces mots.',
    'Choose one word from each sentence. Then say your whole answer using those words.'],
];

const SPANISH_REHEARSAL_COPY = {
  repeat: ['Escucha', 'Escucha y sigue las palabras.'],
  'y10-chunks': ['Grupos de palabras', 'Lee el grupo. Escúchalo y repítelo en voz alta.'],
  'y10-initials': ['Iniciales', 'Di todo el texto con las primeras letras. Haz clic en una letra para escuchar la palabra.'],
  'y10-choose': ['Escucha y elige', 'Escucha el siguiente grupo. Búscalo y haz clic para añadirlo a tu texto.'],
  'y10-dictation': ['Escucha y escribe', 'Escucha el grupo y escribe lo que oyes en español.'],
  'y10-remember': ['Recuerda lo que sigue', 'Di el siguiente grupo de memoria. Búscalo y haz clic. Si oyes un pitido, inténtalo otra vez.'],
  'y10-translate': ['Del inglés al español', 'Lee el grupo en inglés. Escríbelo en español.'],
  'y10-chunk-cues': ['Una palabra por grupo', 'Elige una palabra de cada grupo. Después, di todo el texto con esas palabras.'],
  'y10-disappear': ['Palabras que desaparecen', 'Lee el texto en voz alta. Haz clic en una palabra para oírla y ocultarla. Vuelve a decir el texto.'],
  'y10-sentence-cues': ['Una palabra por frase', 'Elige una palabra de cada frase. Después, di todo el texto con esas palabras.'],
};

const y10Rehearsals = new Map();
let y10AudioContext;

function isRehearsalMode(step) {
  return YEAR_TEN ? Y10_REHEARSAL.some(([id]) => id === step) : PRACTICE_STAGES.includes(step);
}

function y10Vocabulary() {
  const support = yearTenSupport().flatMap(([, ...slots]) => slots.flatMap(([, ...pairs]) => pairs));
  return [...support, ...yearTenConnectives()];
}

function y10Sentences(text) {
  return text.split(/\r?\n/u).flatMap(line => {
    if (typeof Intl.Segmenter === 'function') {
      return Array.from(new Intl.Segmenter(studyLanguage, {granularity: 'sentence'}).segment(line), item => item.segment);
    }
    return line.split(/(?<=[.!?…])\s+/u);
  }).map(line => line.trim()).filter(line => practiceWords(line).length);
}

function y10RehearsalState() {
  const text = draft().revision;
  if (y10Rehearsals.get(current)?.text !== text) {
    const vocabulary = y10Vocabulary().map(([french, english]) => [practiceCheckValue(french), english]);
    const phrases = [...new Set(vocabulary.map(([french]) => french))]
      .map(french => french.split(' ')).filter(words => words.length > 1)
      .sort((a, b) => b.length - a.length);
    const sentences = y10Sentences(text);
    y10Rehearsals.set(current, {
      text, sentences, vocabulary: new Map(vocabulary),
      chunks: sentences.flatMap(sentence => shortPhraseGroups(sentence, phrases, studyLanguage)),
      stages: new Map(),
    });
  }
  return y10Rehearsals.get(current);
}

function y10StageState(rehearsal) {
  if (!rehearsal.stages.has(mode)) {
    rehearsal.stages.set(mode, {picked: [], cues: new Map(), hidden: new Set(), order: null, heard: false, feedback: ''});
  }
  return rehearsal.stages.get(mode);
}

function y10WordMarkup(text, wordMarkup) {
  let end = 0;
  let html = '';
  for (const [index, match] of Array.from(text.matchAll(PRACTICE_WORD)).entries()) {
    html += esc(text.slice(end, match.index)) + wordMarkup(match[0], index, match.index);
    end = match.index + match[0].length;
  }
  return html + esc(text.slice(end));
}

function y10Listen(text) {
  return `<div class="y10-rehearsal-text" data-y10-highlight>${y10WordMarkup(text, (word, _, start) =>
    `<span data-y10-offset="${start}">${esc(word)}</span>`)}</div>
    <div class="actions"><button data-y10-play>▶ ${gcseText('Écouter / Listen','Escuchar')}</button><button data-action="stop">${gcseText('Arrêter / Stop','Parar')}</button></div>
    <p class="muted" data-y10-audio-status role="status"></p>`;
}

function y10Pager(count) {
  return `<div class="actions practice-pager">
    <button data-action="prev" ${part === 0 ? 'disabled' : ''}>← ${gcseText('Précédent / Back','Anterior')}</button>
    <span class="muted">${part + 1} / ${count}</span>
    <button data-action="next" ${part >= count - 1 ? 'disabled' : ''}>${gcseText('Suivant / Next','Siguiente')} →</button>
  </div>`;
}

function y10Shuffle(chunks) {
  const order = chunks.map((_, index) => index);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  if (order.every((index, position) => chunks[index] === chunks[position])) {
    const different = order.findIndex(index => chunks[index] !== chunks[order[0]]);
    if (different > 0) [order[0], order[different]] = [order[different], order[0]];
  }
  return order;
}

function y10OrderBoard(chunks, stage, remember) {
  stage.order ??= y10Shuffle(chunks);
  const built = stage.picked.map(index => chunks[index]).join(' ');
  const awaitingAudio = !remember && !stage.heard;
  return `<div class="practice-reorder-layout">
    <div>
      ${!remember && stage.picked.length < chunks.length
        ? `<div class="actions"><button data-y10-listen-next>▶ ${gcseText('Écouter le groupe suivant / Listen to the next chunk','Escuchar el siguiente grupo')}</button></div><p class="muted" data-y10-audio-status role="status"></p>` : ''}
      <div class="practice-word-bank" aria-label="${gcseText('Groupes de mots / Chunks','Grupos de palabras')}">${stage.order.map(index =>
        `<button data-y10-pick="${index}" ${awaitingAudio || stage.picked.includes(index) ? 'disabled' : ''}>${esc(chunks[index])}</button>`).join('')}</div>
      <p class="practice-feedback" role="status">${esc(stage.feedback)}</p>
    </div>
    <aside class="practice-reorder-progress" aria-label="${gcseText('Mon texte / My text','Mi texto')}">
      <h3>${gcseText('Mon texte <span lang="en">/ My text</span>','Mi texto')}</h3>
      <p>${esc(built || '…')}</p>
      <div class="actions">
        ${!remember && stage.picked.length === chunks.length ? `<button data-y10-read-built>▶ ${gcseText('Écouter mon texte / Listen to my text','Escuchar mi texto')}</button>` : ''}
        ${built ? y10ResetButton() : ''}
      </div>
    </aside>
  </div>`;
}

function y10Cues(units, stage) {
  return `<ol class="practice-cue-grid y10-cue-grid">${units.map((unit, i) => {
    const words = practiceWords(unit);
    const picked = stage.cues.get(i);
    return `<li><div class="practice-word-bank">${picked === undefined
      ? words.map((word, j) => `<button data-y10-cue="${i}" data-y10-word="${j}">${esc(word)}</button>`).join('')
      : `<button class="y10-kept-word" data-y10-clear-cue="${i}" aria-label="${esc(words[picked])} · ${gcseText('Modifier le mot / Change word','Cambiar la palabra')}">${esc(words[picked])}</button>`}</div></li>`;
  }).join('')}</ol>
  ${stage.cues.size ? y10ResetButton() : ''}`;
}

function y10ResetButton() {
  return `<button data-y10-reset>${gcseText('Recommencer / Start again','Empezar de nuevo')}</button>`;
}

function y10EnglishExercise(unit, rehearsal) {
  const french = practiceCheckValue(unit);
  const vocabulary = rehearsal.vocabulary;
  let cue = practiceClauseCue(unit).english || vocabulary.get(french);
  if (!cue && french.startsWith('si ')) {
    const condition = vocabulary.get(french.slice(3));
    if (condition) cue = `If ${condition}`;
  }
  if (cue) return y10Typing(`<div class="focus y10-translation-prompt" lang="en">${esc(cue)}</div>`);
  const translate = typeof Translator !== 'undefined';
  return `<div class="focus y10-translation-prompt">
    ${translate ? `<button data-y10-translate>${gcseText('Afficher l’anglais / Show English','Mostrar en inglés')}</button><p class="muted" data-y10-translation-status role="status"></p>`
      : `<p class="muted">${gcseText('Ajoute le sens en anglais pour continuer. <span lang="en">Add the English meaning to continue.</span>','Añade el significado en inglés para continuar.')}</p>`}
    <details ${translate ? '' : 'open'}>
      <summary>${gcseText('Ajouter un indice / Add a cue','Añadir una pista')}</summary>
      <p class="y10-cue-source" lang="${studyLanguage}">${esc(unit)}</p>
      <form data-y10-manual-cue>
        <label for="y10-cue-input">${gcseText('Sens en anglais / English meaning','Significado en inglés')}</label>
        <input id="y10-cue-input" name="cue" type="text" lang="en" required>
        <button type="submit">${gcseText('Enregistrer / Save','Guardar')}</button>
      </form>
    </details>
  </div>`;
}

function y10Typing(prompt) {
  return `${prompt}<form data-y10-typing>
    <label class="field-label" for="y10-typed">${gcseText('Ma réponse / My answer','Mi respuesta')}</label>
    <textarea id="y10-typed" name="response" rows="2" lang="${studyLanguage}" autocomplete="off" spellcheck="false" required></textarea>
    <button type="submit">${gcseText('Vérifier / Check','Comprobar')}</button>
    <div class="practice-feedback" role="status"></div>
  </form>`;
}

function y10Rehearsal() {
  const rehearsal = y10RehearsalState();
  const {text, chunks, sentences} = rehearsal;
  if (!chunks.length) return `<section class="simple-card card">${simpleHeading()}
    <p>${gcseText('Écris ta réponse pour commencer. <span lang="en">Write your answer to begin.</span>','Escribe tu respuesta para empezar.')}</p>
    <button class="primary" data-mode="edit">${gcseText('Écrire ma réponse / Write my answer','Escribir mi respuesta')}</button></section>`;

  const stage = y10StageState(rehearsal);
  const step = Y10_REHEARSAL.findIndex(([id]) => id === mode);
  const [, frenchTitle, englishTitle, frenchInstruction, englishInstruction] = Y10_REHEARSAL[step];
  const [spanishTitle, spanishInstruction] = SPANISH_REHEARSAL_COPY[mode];
  part = Math.max(0, Math.min(part, chunks.length - 1));
  const unit = chunks[part];
  wordTokens = [];
  let body;
  switch (mode) {
    case 'repeat':
      body = y10Listen(text);
      break;
    case 'y10-chunks':
      body = y10Listen(unit) + y10Pager(chunks.length);
      break;
    case 'y10-initials':
      body = `<div class="initials y10-rehearsal-text">${initialMarkup(text)}</div>`;
      break;
    case 'y10-choose':
    case 'y10-remember':
      body = y10OrderBoard(chunks, stage, mode === 'y10-remember');
      break;
    case 'y10-dictation':
      body = y10Typing(`<button type="button" data-y10-play>▶ ${gcseText('Écouter / Listen','Escuchar')}</button>`) + y10Pager(chunks.length);
      break;
    case 'y10-translate':
      body = y10EnglishExercise(unit, rehearsal) + y10Pager(chunks.length);
      break;
    case 'y10-chunk-cues':
    case 'y10-sentence-cues':
      body = y10Cues(mode === 'y10-chunk-cues' ? chunks : sentences, stage);
      break;
    case 'y10-disappear':
      body = `<div class="y10-rehearsal-text">${y10WordMarkup(text, (word, index) => stage.hidden.has(index)
        ? '–' : `<button data-y10-hide="${index}">${esc(word)}</button>`)}</div>
        ${stage.hidden.size ? y10ResetButton() : ''}`;
      break;
  }
  return `<section class="simple-card card" data-y10-rehearsal>
    ${simpleHeading()}
    <p class="muted practice-stage-count">${gcseText('Étape / Step','Etapa')} ${step + 1} / ${Y10_REHEARSAL.length}</p>
    <h3 id="practice-instruction" tabindex="-1">${gcseText(`${frenchTitle} <span lang="en">/ ${englishTitle}</span>`,spanishTitle)}</h3>
    <p class="y10-instructions">${gcseText(`${frenchInstruction}<br><span lang="en">${englishInstruction}</span>`,spanishInstruction)}</p>
    ${body}
    <div class="actions practice-controls">
      ${step > 0 ? `<button data-mode="${Y10_REHEARSAL[step - 1][0]}">${gcseText('Plus d’aide / More help','Más ayuda')}</button>` : ''}
      ${step < Y10_REHEARSAL.length - 1
        ? `<button class="primary" data-mode="${Y10_REHEARSAL[step + 1][0]}">${gcseText('Moins d’aide / Less help','Menos ayuda')} →</button>`
        : `<label class="check"><input type="checkbox" data-memorised ${draft().memorised ? 'checked' : ''}> ${gcseText('Je peux le dire seul(e). <span lang="en">I can say it on my own.</span>','Puedo decirlo sin ayuda.')}</label>`}
    </div>
  </section>`;
}

function y10PlayText(card, text) {
  const spans = Array.from(card.querySelectorAll('[data-y10-offset]'));
  const status = card.querySelector('[data-y10-audio-status]');
  let active;
  let tracked = false;
  if (status) status.textContent = '';
  speak(text, false, {
    rate: .75,
    boundary(event) {
      if (event.name === 'sentence') return;
      const word = spans.find(span => {
        const offset = Number(span.dataset.y10Offset);
        return event.charIndex >= offset && event.charIndex < offset + span.textContent.length;
      });
      if (!word) return;
      tracked = true;
      active?.removeAttribute('data-y10-speaking');
      active = word;
      active.setAttribute('data-y10-speaking', '');
    },
    finish(event) {
      active?.removeAttribute('data-y10-speaking');
      if (!status || !card.isConnected) return;
      if (event?.type === 'error') status.textContent = gcseText('Audio indisponible · Audio unavailable','Audio no disponible');
      else if (spans.length > 1 && !tracked) status.textContent =
        gcseText('Cette voix ne peut pas surligner les mots. · This voice cannot highlight individual words.','Esta voz no puede resaltar las palabras.');
    },
  });
}

async function y10Buzz() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  try {
    y10AudioContext ??= new AudioContext();
    if (y10AudioContext.state === 'suspended') await y10AudioContext.resume();
    const oscillator = y10AudioContext.createOscillator();
    const volume = y10AudioContext.createGain();
    const now = y10AudioContext.currentTime;
    oscillator.type = 'triangle';
    oscillator.frequency.value = 130;
    volume.gain.setValueAtTime(.12, now);
    volume.gain.exponentialRampToValueAtTime(.001, now + .18);
    oscillator.connect(volume).connect(y10AudioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + .18);
  } catch {
    // The visible retry message also works when sound is unavailable.
  }
}

function bindY10Rehearsal() {
  const card = document.querySelector('[data-y10-rehearsal]');
  if (!card) return;
  const rehearsal = y10RehearsalState();
  const {text, chunks} = rehearsal;
  const stage = y10StageState(rehearsal);
  const unit = chunks[part];
  const select = selector => card.querySelector(selector);
  function bindClick(selector, action) {
    card.querySelectorAll(selector).forEach(button => {
      button.onclick = () => action(button);
    });
  }
  bindClick('[data-y10-play]', () => y10PlayText(card, mode === 'repeat' ? text : unit));
  bindClick('[data-y10-listen-next]', () => {
    stage.heard = true;
    card.querySelectorAll('[data-y10-pick]').forEach(button => {
      button.disabled = stage.picked.includes(Number(button.dataset.y10Pick));
    });
    y10PlayText(card, chunks[stage.picked.length]);
  });
  bindClick('[data-y10-read-built]', () => speak(stage.picked.map(index => chunks[index]).join(' ')));
  bindClick('[data-y10-pick]', button => {
    if (mode === 'y10-choose' && !stage.heard) return;
    const index = Number(button.dataset.y10Pick);
    if (chunks[index] !== chunks[stage.picked.length]) {
      stage.feedback = gcseText('Essaie encore. · Try again.','Inténtalo otra vez.');
      select('.practice-feedback').textContent = stage.feedback;
      if (mode === 'y10-remember') y10Buzz();
      return;
    }
    stage.picked.push(index);
    stage.heard = false;
    stage.feedback = stage.picked.length === chunks.length
      ? gcseText('Bravo ! Dis le texte à voix haute. · Well done! Say the whole answer aloud.','¡Muy bien! Di todo el texto en voz alta.') : '';
    render();
    document.querySelector('[data-y10-listen-next]')?.focus({preventScroll: true});
  });
  bindClick('[data-y10-reset]', () => {
    rehearsal.stages.delete(mode);
    stopSpeech();
    render();
  });
  bindClick('[data-y10-cue]', button => {
    stage.cues.set(Number(button.dataset.y10Cue), Number(button.dataset.y10Word));
    render();
  });
  bindClick('[data-y10-clear-cue]', button => {
    stage.cues.delete(Number(button.dataset.y10ClearCue));
    render();
  });
  const words = practiceWords(text);
  bindClick('[data-y10-hide]', button => {
    const index = Number(button.dataset.y10Hide);
    stage.hidden.add(index);
    render();
    speak(words[index]);
  });
  const typing = select('[data-y10-typing]');
  if (typing) typing.onsubmit = event => {
    event.preventDefault();
    const feedback = typing.querySelector('[role="status"]');
    const correct = practiceCheckValue(typing.elements.response.value) === practiceCheckValue(unit);
    feedback.textContent = correct ? gcseText('Bravo ! Dis-le à voix haute. · Well done! Say it aloud.','¡Muy bien! Dilo en voz alta.')
      : gcseText('Compare avec ton texte, puis réessaie. · Compare with your text, then try again.','Compara con tu texto e inténtalo otra vez.');
    if (!correct) {
      const original = document.createElement('p');
      original.textContent = unit;
      feedback.append(original);
    }
  };
  const manualCue = select('[data-y10-manual-cue]');
  if (manualCue) manualCue.onsubmit = event => {
    event.preventDefault();
    const english = manualCue.elements.cue.value.trim();
    if (!english) return;
    savePracticeEnglish(draft(), unit, english);
    render();
    $('y10-typed')?.focus();
  };
  const translate = select('[data-y10-translate]');
  if (!translate) return;
  async function prepareEnglish() {
    if (translate.disabled) return;
    const target = draft();
    const status = select('[data-y10-translation-status]');
    translate.disabled = true;
    status.textContent = gcseText('Un instant… · One moment…','Un momento…');
    try {
      const english = (await translatePracticeClause(unit)).trim();
      if (!english) throw new Error('Empty translation');
      if (!practiceClauseCue(unit, target).english) savePracticeEnglish(target, unit, english);
      if (card.isConnected) {
        render();
        $('y10-typed')?.focus();
      }
    } catch {
      translate.disabled = false;
      status.textContent = gcseText('Ajoute un indice en anglais. · Add an English cue.','Añade una pista en inglés.');
      select('details').open = true;
    }
  }
  translate.onclick = prepareEnglish;
  if (englishTranslator || navigator.userActivation?.isActive) prepareEnglish();
}
