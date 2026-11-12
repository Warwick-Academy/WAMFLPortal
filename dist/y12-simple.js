const PILOT_QUESTION = 101;

function resumeQuestion(id) {
  current = id;
  const d = draft();
  const saved = id === PILOT_QUESTION ? d.pilotStep : d.practiceStep;
  if (YEAR_TEN) {
    const next = mode === 'edit' ? 'edit' : isRehearsalMode(saved) ? saved : 'repeat';
    setMode(next, true);
    return;
  }
  const savedStep = saved === 'cues' ? 'clause-keyword' : saved;
  const allowed = id === PILOT_QUESTION ? ['edit', 'review', ...PRACTICE_STAGES] : PRACTICE_STAGES;
  setMode(allowed.includes(savedStep) ? savedStep : id === PILOT_QUESTION && d.revision.trim() ? 'review' : 'edit', true);
}

function questionProgress(id) {
  const d = draft(id);
  if (d.memorised) return 'Prêt(e) sans texte';
  if (d.revision.trim() && PRACTICE_STAGES.includes(id === PILOT_QUESTION ? d.pilotStep : d.practiceStep)) return 'Entraînement en cours';
  if (d.revision.trim()) return 'Version retravaillée';
  return d.answer.trim() ? 'Brouillon enregistré' : 'À préparer';
}

function questionListButton(id) {
  return `<button class="question-link" data-core="${id}">
    <span><small>${esc(questionLabel(id))}</small><strong>${esc(question(id).text)}</strong></span>
    <span class="question-progress">${questionProgress(id)} <span aria-hidden="true">→</span></span>
  </button>`;
}

function questionList() {
  const choices = choiceIds();
  return `<section class="simple-card card">
    <h2>Mes questions</h2>
    <h3>Questions communes</h3>
    <div class="question-links">${CORE_IDS.map(questionListButton).join('')}</div>
    ${choices.length ? `<h3 class="section-title">Mes choix</h3><div class="question-links">${choices.map(questionListButton).join('')}</div>` : ''}
    <details id="choose-questions" class="simple-details"${chooserOpen?' open':''}>
      <summary>${choices.length===5?'Modifier mes cinq choix':'Choisir mes cinq questions'} · ${choices.length}/5</summary>
      <div class="bank-head"><input type="text" id="search" placeholder="Rechercher une question ou un numéro" aria-label="Rechercher une question" value="${esc(search)}"></div>
      <div class="bank" id="bank">${bankItems()}</div>
    </details>
    <div class="actions">${answered().length ? '<button class="primary" data-mode="random">Réviser mes questions</button>' : ''}</div>
    <details class="simple-details"><summary>Imprimer mes réponses</summary>
      <label class="field-label" for="student-name">Prénom / nom</label>
      <input type="text" id="student-name" data-name value="${esc(state.name)}">
      <div class="actions"><button data-action="print">Imprimer</button></div>
    </details>
  </section>`;
}

function simpleToolbar() {
  if (mode === 'select') return '<span class="status" id="save-status">Enregistré sur cet appareil</span>';
  if (mode === 'random') return '<button data-mode="select">← Mes questions</button>';
  const step = isRehearsalMode(mode) ? 'repeat' : mode;
  const tabs = YEAR_TEN ? [['edit',gcseText('1. Écrire','1. Escribir')],['repeat',gcseText('2. S’entraîner','2. Practicar')]]
    : [['edit','1. Écrire'],['review','2. Améliorer'],['repeat','3. S’entraîner']];
  return `${YEAR_TEN ? '' : '<button data-mode="select">← Mes questions</button>'}
    <div class="simple-steps" aria-label="${gcseText('Étapes','Etapas')}">
      ${tabs.map(([id,label]) =>
        `<button data-mode="${id}"${step===id?' class="active" aria-current="step"':''}>${label}</button>`).join('')}
    </div>
    <span class="status" id="save-status">${gcseText('Enregistré sur cet appareil','Guardado en este dispositivo')}</span>`;
}

function simpleHeading() {
  const q = question();
  const topics = YEAR_TEN && (current === Y10_FAMILY || current === Y10_FRIENDSHIP) ? `<div class="actions" role="group" aria-label="Choisir le sujet de la question ${q.core}">
    <button data-y10-topic="${Y10_FAMILY}" aria-pressed="${current === Y10_FAMILY}">La famille</button>
    <button data-y10-topic="${Y10_FRIENDSHIP}" aria-pressed="${current === Y10_FRIENDSHIP}">L’amitié</button>
  </div>` : '';
  return `<span class="badge">${esc(questionLabel())}</span><h2>${esc(q.text)}</h2>${topics}`;
}

function yearTenWriting() {
  const d = draft();
  return `<div class="y10-writing"><section class="card">
    ${simpleHeading()}
    ${current === Y10_TIME ? yearTenSiGuide() : ''}
    <label class="field-label" for="answer">${gcseText('Ma réponse','Mi respuesta')}</label>
    <textarea id="answer" class="answer simple-answer" data-draft="answer" placeholder="${gcseText('Écris ta réponse en français.','Escribe tu respuesta en español.')}">${esc(d.answer)}</textarea>
    <div class="word-count" id="word-count">${wordCount(d.answer)} ${gcseText('mots','palabras')}</div>
    <div class="actions"><button class="primary" data-mode="repeat">${gcseText('M’entraîner','Practicar')} →</button></div>
  </section><div>${yearTenLevelUp()}${yearTenFiche()}</div></div>`;
}

function simpleDraft() {
  const d = draft();
  return `<section class="simple-card card">
    ${simpleHeading()}
    ${commonFiche()}
    <label class="field-label" for="answer">Mon premier brouillon</label>
    <textarea id="answer" class="answer simple-answer" data-draft="answer" placeholder="Réponds à la question avec tes propres idées.">${esc(d.answer)}</textarea>
    <div class="word-count" id="word-count">${wordCount(d.answer)} mots</div>
    <div class="actions"><button class="primary" data-mode="review">Améliorer ma réponse →</button></div>
  </section>`;
}

function simpleReview() {
  const d = draft();
  const revision = draftChangedSinceRevision(d) ? d.answer : d.revision || d.answer;
  if (!d.answer.trim() && !d.revision.trim()) return `<section class="simple-card card">
    ${simpleHeading()}<p>Écris d’abord ton brouillon.</p><button class="primary" data-mode="edit">Écrire mon brouillon</button>
  </section>`;
  const evidence = reviewDraft(d.answer, reviewVocabulary());
  const examples = ['complex','idioms','repeated','past','imperfect','conditional','future','other','present','topic']
    .filter(key => evidence[key].length)
    .slice(0,3)
    .map(key => ({label:REVIEW_CARDS.find(card => card[0]===key)[1], ...evidence[key][0]}));
  return `<section class="simple-card card">
    ${simpleHeading()}
    <div class="quick-review">
      <section><h3>Langue</h3>
        <p>Vérifie les pistes repérées dans leur phrase.</p>
        ${examples.length ? `<ul>${examples.map(item => `<li><strong>${esc(item.label)}</strong> · « ${esc(item.quote)} »${item.detail ? ` <small>(${esc(item.detail)})</small>` : ''}</li>`).join('')}</ul>` : '<p>Relis tes verbes, tes accords et le choix de tes mots.</p>'}
      </section>
      <section><h3>Message</h3>${checks.filter(([key])=>['content','example'].includes(key)).map(([key,label])=>`
        <label class="check"><input type="checkbox" data-check="${key}" ${d.checks[key]?'checked':''}>${esc(label)}</label>`).join('')}</section>
    </div>
    <details class="simple-details"><summary>Voir le détail</summary>${reviewEvidenceCards(evidence,d)}</details>
    <label class="field-label" for="targets">Mes deux priorités</label>
    <textarea id="targets" data-draft="targets" rows="2" placeholder="1. …&#10;2. …">${esc(d.targets)}</textarea>
    <details class="simple-details"><summary>Voir mon brouillon</summary><div class="draft-excerpt">${esc(d.answer)}</div>
      ${d.answer.trim() && revision !== d.answer ? '<button data-action="copy-draft">Repartir de mon brouillon</button>' : ''}
    </details>
    <label class="field-label" for="revision">Ma réponse retravaillée</label>
    <textarea id="revision" class="answer simple-answer" data-draft="revision">${esc(revision)}</textarea>
    <div class="word-count" id="word-count">${wordCount(revision)} mots</div>
    <div class="actions"><button class="primary" data-mode="repeat">M’entraîner →</button></div>
  </section>`;
}
