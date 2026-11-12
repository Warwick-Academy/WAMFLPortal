const COMMON_FICHE = {
  101: [
    ['Identité','ce qui me définit le plus, c’est…','les valeurs','what defines me most is…','values'],
    ['Influence','j’ai appris l’importance de… grâce à…','l’éducation','I learnt the importance of… thanks to…','upbringing'],
    ['Nuance','même si j’ai hérité de certaines valeurs, …','les origines','even though I inherited certain values, …','roots']
  ],
  102: [
    ['Opinion','on peut faire partie d’un groupe tout en…','le sentiment d’appartenance','you can belong to a group while…','a sense of belonging'],
    ['Concession','bien que mes amis ne soient pas toujours d’accord avec moi, je…','l’entraide','although my friends don’t always agree with me, I…','mutual support'],
    ['Hypothèse','si je devais renoncer à mes valeurs, je préférerais prendre mes distances plutôt que de…','la pression du groupe','if I had to give up my values, I would rather distance myself than…','peer pressure']
  ],
  103: [
    ['Avant','avant de rejoindre ce groupe, je pensais que…','un préjugé','before joining that group, I thought that…','a preconceived idea'],
    ['Déclic','ce qui m’a poussé(e) à remettre en question ce que je tenais pour acquis, c’est…','un déclic','what made me question what I took for granted was…','a turning point'],
    ['Bilan','si je n’avais pas fait partie de ce groupe, je n’aurais sans doute jamais pris conscience de…','une prise de conscience','if I hadn’t been part of that group, I would probably never have become aware of…','a realisation']
  ]
};

function commonFiche() {
  const rows = COMMON_FICHE[current];
  const q = question();
  return `<section class="oral-fiche" aria-label="Fiche d’aide à l’oral">
    <h3><span>${String(q.core).padStart(2,'0')}</span>${esc(q.text)}</h3>
    <div class="oral-fiche-columns">
      <div class="oral-fiche-phrases">
        <h4>Tournures à réutiliser</h4>
        ${rows.map(([label,phrase,,gloss])=>`<div class="oral-fiche-phrase">
          <strong>${esc(label)}</strong><div>${esc(phrase)}<small lang="en">${esc(gloss)}</small></div>
        </div>`).join('')}
      </div>
      <div class="oral-fiche-vocab">
        <h4>Vocabulaire clé</h4>
        ${rows.map(([, ,word,,gloss])=>`<div><strong>${esc(word)}</strong><small lang="en">${esc(gloss)}</small></div>`).join('')}
      </div>
    </div>
  </section>`;
}

function commonAid() {
  return `<details class="simple-details"><summary>Aide</summary>${commonFiche()}</details>`;
}

function reviewVocabulary() {
  if (YEAR_TEN) return yearTenSupport().flatMap(([, ...slots]) => slots.flatMap(([, ...chunks]) => chunks.map(([french]) => french)));
  return (STYLES_SUPPORT[current] || COMMON_FICHE[current] || []).map(row => row[2]);
}

function ficheSupport() {
  const rows = STYLES_SUPPORT[current];
  if (!rows) return '';
  return `<details open><summary>Tournures de la fiche</summary>
    <p>Choisis une ou deux tournures et complète-les avec tes propres idées.</p>
    ${rows.map(([use, french, , english]) => `<div class="model"><strong>${esc(use)}</strong><br>${esc(french)}<br><small>${esc(english)}</small></div>`).join('')}
    </details><details open><summary>Vocabulaire du sujet</summary>
    <ul>${rows.map(([, , french, , english]) => `<li><strong>${esc(french)}</strong><br><small>${esc(english)}</small></li>`).join('')}</ul>
    </details>`;
}

function toolbars() {
  const workflow = [['select','Mes questions'], ['edit','1. Brouillon'], ['review','2. Analyser'], ['revise','3. Retravailler']];
  workflow.push(['repeat', '4. M’entraîner']);
  const buttons = tabs => tabs.map(([id,label]) => `<button data-mode="${id}" class="${mode===id || (id==='repeat' && PRACTICE_STAGES.includes(mode)) ? 'active' : ''}"${mode===id || (id==='repeat' && PRACTICE_STAGES.includes(mode)) ? ' aria-current="step"' : ''}>${label}</button>`).join('');
  $('toolbar').innerHTML = `<div class="step-row" aria-label="Préparer ma réponse">${buttons(workflow)}<button data-action="print">Imprimer</button><span class="status" id="save-status">Enregistré sur cet appareil</span></div>`;
}

function editing() {
  const d = draft();
  const common = CORE_IDS.includes(current);
  return `<div class="${common?'common-answer':'answer-layout'}"><section class="card">
    <span class="badge">1. Brouillon · ${esc(questionLabel())}</span>
    <h2>${esc(question().text)}</h2>
    ${common?commonFiche():corePlanning()}
    <label class="field-label" for="answer">Mon premier brouillon</label>
    <textarea id="answer" class="answer" data-draft="answer" placeholder="Réponds directement, explique ton idée et donne un exemple précis.">${esc(d.answer)}</textarea>
    <div class="word-count" id="word-count">${wordCount(d.answer)} mots</div>
    <div class="actions"><button data-action="listen-draft">▶ Écouter mon brouillon</button><button class="primary" data-mode="review">Analyser mon brouillon →</button></div>
  </section>${common?'':helpPanel()}</div>`;
}

function analysisPage() {
  const d = draft();
  if (!d.answer.trim()) return `<section class="card"><h2>${esc(question().text)}</h2>
    <p>Écris un premier brouillon pour pouvoir l’analyser.</p><button class="primary" data-mode="edit">Rédiger mon brouillon</button></section>`;
  const vocab = reviewVocabulary();
  const evidence = reviewDraft(d.answer, vocab);
  return `<section class="card">
    <span class="badge">2. Analyser · ${esc(questionLabel())}</span>
    <h2>${esc(question().text)}</h2>
    <h3>Mon brouillon à relire</h3>
    <div class="draft-excerpt">${esc(d.answer)}</div>
    <h3 class="section-title">A · Langue</h3>
    <p>Les extraits repérés sont des pistes. Vérifie chaque forme dans sa phrase avant de retenir un exemple. Ajoute aussi tes propres exemples ou corrections.</p>
    ${reviewEvidenceCards(evidence,d)}
    <h3 class="section-title">B2 · Message</h3>
    ${checks.filter(([key])=>['content','example','culture'].includes(key)).map(([key,label])=>`
      <label class="check"><input type="checkbox" data-check="${key}" ${d.checks[key]?'checked':''}><span>${esc(label)}</span></label>`).join('')}
    <p class="muted">La prononciation et l’intonation (A), ainsi que la compréhension et l’interaction (C), se vérifient à l’oral. Ce bilan porte sur ton texte et ne donne pas de note.</p>
    <label class="field-label" for="targets">Mes deux priorités pour la réécriture</label>
    <textarea id="targets" data-draft="targets" rows="2" placeholder="Par exemple, préciser mon exemple et vérifier mes accords.">${esc(d.targets)}</textarea>
    <div class="actions"><button data-mode="edit">Revenir au brouillon</button><button class="primary" data-mode="revise">Retravailler ma réponse →</button></div>
  </section>`;
}

function draftChangedSinceRevision(d) {
  return d.answer.trim() && typeof d.revisionSource === 'string' && d.revisionSource !== d.answer;
}

function updateRevision(d, text) {
  if (d.revision !== text) delete d.reorderCompleted;
  d.revision = text;
  d.revisionSource = d.answer;
  d.memorised = false;
}

function revisionPage() {
  const d = draft();
  const revision = draftChangedSinceRevision(d) ? d.answer : d.revision;
  const common = CORE_IDS.includes(current);
  return `<div class="${common?'common-answer':'answer-layout'}"><section class="card">
    <span class="badge">3. Retravailler · ${esc(questionLabel())}</span>
    <h2>${esc(question().text)}</h2>
    ${common?commonAid():''}
    ${d.targets.trim()?`<h3>Mes priorités</h3><div class="draft-excerpt">${esc(d.targets)}</div>`:''}
    <details><summary>Comparer avec mon premier brouillon</summary><div class="draft-excerpt">${esc(d.answer || 'Brouillon à rédiger.')}</div></details>
    ${!revision.trim()&&d.answer.trim()?'<button data-action="copy-draft">Partir de mon brouillon</button>':''}
    <label class="field-label" for="revision">Ma réponse retravaillée</label>
    <textarea id="revision" class="answer" data-draft="revision" placeholder="Colle ta version corrigée ou retravaille ton brouillon ici.">${esc(revision)}</textarea>
    <div class="word-count" id="word-count">${wordCount(revision)} mots</div>
    <div class="actions"><button data-action="listen-answer">▶ Écouter ma réponse</button><button data-action="stop">Arrêter</button></div>
    <label class="field-label" for="cues">Mes repères</label>
    <p class="muted">Note les idées ou expressions qui te rappelleront la suite, une par ligne.</p>
    <textarea id="cues" data-draft="cues" placeholder="Mon avis&#10;Un exemple&#10;Une nuance">${esc(d.cues)}</textarea>
    <div class="actions"><button data-mode="review">Revoir mon analyse</button><button class="primary" data-mode="repeat">M’entraîner avec cette version →</button></div>
  </section>${common?'':helpPanel()}</div>`;
}

function bindWriting() {
  if (YEAR_TEN) document.querySelectorAll('[data-y10-topic]').forEach(button => button.onclick = () => {
    const id = Number(button.dataset.y10Topic);
    if (id === current) return;
    state.y10FirstQuestion = id;
    resumeQuestion(id);
    if (mode === 'edit') save();
    document.querySelector('[data-y10-topic][aria-pressed="true"]')?.focus();
  });
  document.querySelectorAll('[data-draft]').forEach(el => el.oninput = () => {
    const key = el.dataset.draft;
    const d = draft();
    if (key === 'answer' && el.value !== d.answer && d.revision.trim()) {
      d.revisionSource ??= d.answer;
      d.memorised = false;
    }
    if (key === 'revision') updateRevision(d, el.value);
    else d[key] = el.value;
    if (key === 'answer' || key === 'revision') $('word-count').textContent = wordCount(el.value) + gcseText(' mots', ' palabras');
    save();
  });
  document.querySelectorAll('[data-review]').forEach(el => el.oninput = () => {
    draft().review[el.dataset.review] = el.value;
    save();
  });
  document.querySelectorAll('[data-keep]').forEach(button => button.onclick = () => {
    const field = $('review-' + button.dataset.keep);
    const quote = '« ' + button.dataset.excerpt + ' »';
    if (!field.value.includes(quote)) {
      field.value = [field.value.trim(), quote].filter(Boolean).join('\n');
      field.oninput();
    }
    field.focus();
  });
  document.querySelectorAll('[data-memorised]').forEach(el => el.onchange = () => {
    draft().memorised = el.checked;
    save();
    render();
  });
}

function reviewEvidenceCards(evidence,d) {
  return `<div class="review-grid">${REVIEW_CARDS.map(([key,label,prompt]) => `
      <section class="review-card">
        <h3>${esc(label)}</h3><p class="muted">${esc(prompt)}</p>
        <ul class="evidence">${evidence[key].length ? evidence[key].map(({quote,detail})=>`
          <li><button type="button" data-keep="${key}" data-excerpt="${esc(quote)}" aria-label="Ajouter ${esc(quote)} à mes exemples">« ${esc(quote)} » <span aria-hidden="true">＋</span></button>${detail ? `<small>${esc(detail)}</small>` : ''}</li>`).join('') : '<li class="muted">Aucun exemple repéré. Tu peux ajouter le tien.</li>'}</ul>
        <label class="field-label" for="review-${key}">Mes exemples vérifiés et mes corrections</label>
        <textarea id="review-${key}" data-review="${key}" rows="2" placeholder="Ajoute un extrait et explique ce que tu gardes ou corriges.">${esc(d.review[key]||'')}</textarea>
      </section>`).join('')}</div>`;
}
