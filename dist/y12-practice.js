const PRACTICE_STAGES = [
  'repeat', 'reorder', 'dictation', 'initials', 'chunk-first', 'clause-initials',
  'type-initials', 'clause-first', 'clause-english', 'clause-keyword', 'solo',
];
const PRACTICE_WORD = /[\p{L}\p{N}][\p{L}\p{M}\p{N}]*(?:[’'\-‐‑][\p{L}\p{M}\p{N}]+)*/gu;
const PRACTICE_INSTRUCTIONS = {
  repeat: 'Écoute, répète chaque groupe, puis reprends les groupes ensemble.',
  reorder: 'Remets les mots de la proposition dans l’ordre, puis dis-la à voix haute. Les propositions réussies s’ajoutent à ton texte.',
  dictation: 'Écoute la proposition. Tape ce que tu entends, vérifie, puis dis-la à voix haute.',
  initials: 'Redis chaque groupe à partir des initiales. Clique sur une lettre pour entendre le mot.',
  'chunk-first': 'Redis chaque groupe à partir de son premier mot.',
  'clause-initials': 'Redis chaque proposition d’une traite. Clique sur une lettre pour entendre le mot.',
  'type-initials': 'Tape la proposition à partir des initiales, vérifie, puis dis-la à voix haute.',
  'clause-first': 'Redis chaque proposition à partir de son premier mot.',
  'clause-english': 'Retrouve le français à voix haute à partir du sens en anglais.',
  'clause-keyword': 'Redis chaque proposition à partir d’un seul mot clé.',
  solo: 'Écoute la question et donne ta réponse complète à voix haute.',
};
let reorderExercise;
let englishTranslator;
const englishCueJobs = new Map();

function practiceClauses(text) {
  const clauses = [];
  let opening = '';
  for (const clause of clauseChunks(text.replace(/\s*\r?\n\s*/gu, '\n '))) {
    const unit = opening + clause;
    if (wordCount(unit) < 5 && /[,;:]$/u.test(unit) &&
        !reviewWords(unit).some(({value}) => chunkVerbForm(value).finite)) {
      opening = unit + ' ';
    } else {
      clauses.push(unit);
      opening = '';
    }
  }
  if (opening) clauses.push(opening.trim());
  return clauses;
}

function practiceWords(text) {
  return text.match(PRACTICE_WORD) || [];
}

function practiceCheckValue(text) {
  return practiceWords(text.normalize('NFC').replace(/[’]/gu, "'")).join(' ').toLocaleLowerCase(studyLanguage);
}

function practicePager(label, count) {
  return `<div class="actions practice-pager">
    <button data-action="prev" ${part === 0 ? 'disabled' : ''}>← Précédent</button>
    <span class="muted">${label} ${part + 1} / ${count}</span>
    <button data-action="next" ${part === count - 1 ? 'disabled' : ''}>Suivant →</button>
  </div>`;
}

function practiceCueGrid(units, label, cue) {
  return `<ol class="practice-cue-grid" aria-label="${label}">${units.map((unit, index) =>
    `<li><span class="muted">${index + 1}</span><div>${cue(unit, index)}</div></li>`).join('')}</ol>`;
}

function practiceClauseCue(clause, d = draft()) {
  const entries = d.clauseCues;
  return Array.isArray(entries) ? entries.find(entry => entry?.clause === clause) || {} : {};
}

function practiceKeyword(clause, index, count) {
  const manual = draft().cues.split(/\n/u).map(cue => cue.trim()).filter(Boolean);
  if (manual.length === count && practiceWords(manual[index]).length === 1) return manual[index];
  const words = practiceWords(clause);
  const vocabulary = new Set(reviewVocabulary().flatMap(practiceWords).map(word => word.toLocaleLowerCase('fr')));
  return words.find(word => vocabulary.has(word.toLocaleLowerCase('fr')) && !REVIEW_STOP.has(word.toLocaleLowerCase('fr'))) ||
    words.filter(word => word.length > 3 && !REVIEW_STOP.has(word.toLocaleLowerCase('fr')) &&
      !chunkVerbForm(word.toLocaleLowerCase('fr')).finite).sort((a, b) => b.length - a.length)[0] ||
    words.at(-1) || clause;
}

function savePracticeEnglish(d, clause, english) {
  const entries = Array.isArray(d.clauseCues) ? d.clauseCues : [];
  d.clauseCues = entries.filter(entry => entry?.clause !== clause);
  d.clauseCues.push({clause, english});
  save();
}

function practiceEnglish(clause) {
  const cue = practiceClauseCue(clause).english;
  const prompt = cue ? `<div class="focus" lang="en">${esc(cue)}</div>` : typeof Translator !== 'undefined'
    ? `<div data-english-translation>
      <button data-prepare-english>Afficher l’indice en anglais</button>
      <p class="muted" role="status"></p>
    </div>`
    : '<p class="muted">La traduction sur cet appareil est indisponible. Ouvre l’activité dans une version récente de Chrome ou Edge sur ordinateur, utilise un indice préparé ou passe à l’étape suivante.</p>';
  return `${prompt}
    <details class="simple-details"><summary>${cue ? 'Modifier l’indice' : 'Ajouter un indice préparé'}</summary>
      <p lang="fr">${esc(clause)}</p>
      <form data-clause-cue="english"><label for="clause-cue">Indice en anglais</label>
        <input id="clause-cue" name="cue" type="text" lang="en" value="${esc(cue || '')}" required>
        <button type="submit">Enregistrer</button>
      </form>
    </details>`;
}

function translatePracticeClause(clause) {
  if (!englishCueJobs.has(clause)) {
    englishTranslator ??= Translator.create({sourceLanguage: studyLanguage, targetLanguage: 'en'}).catch(error => {
      englishTranslator = undefined;
      throw error;
    });
    const job = englishTranslator.then(translator => translator.translate(clause))
      .finally(() => englishCueJobs.delete(clause));
    englishCueJobs.set(clause, job);
  }
  return englishCueJobs.get(clause);
}

function bindPracticeEnglish(container, clause) {
  const button = container.querySelector('[data-prepare-english]');
  const status = container.querySelector('[role="status"]');
  const d = draft();
  async function prepare() {
    if (button.disabled) return;
    button.disabled = true;
    status.textContent = 'Préparation de l’indice sur cet appareil. Le premier téléchargement peut prendre un moment.';
    try {
      const english = (await translatePracticeClause(clause)).trim();
      if (!english) throw new Error('Empty translation');
      if (!practiceClauseCue(clause, d).english) savePracticeEnglish(d, clause, english);
      if (container.isConnected) render();
    } catch {
      button.disabled = false;
      status.textContent = 'La traduction sur cet appareil est indisponible. Réessaie, utilise un indice préparé ou passe à l’étape suivante.';
    }
  }
  button.onclick = prepare;
  if (englishTranslator || navigator.userActivation?.isActive) prepare();
}

function practiceReorder(group) {
  if (reorderExercise?.group === group && reorderExercise.question === current && reorderExercise.part === part) return reorderExercise;
  const words = practiceWords(group);
  const order = words.map((_, index) => index);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const original = words.join(' ');
  if (order.map(index => words[index]).join(' ') === original) {
    const different = order.findIndex(index => words[index] !== words[order[0]]);
    if (different > 0) [order[0], order[different]] = [order[different], order[0]];
  }
  reorderExercise = {group, question: current, part, words, order, picked: []};
  return reorderExercise;
}

function practiceOrderBoard(group) {
  const {words, order, picked} = practiceReorder(group);
  return `<div class="practice-word-bank" aria-label="Mots à choisir">${order.map(index =>
    `<button data-pick-word="${index}" ${picked.includes(index) ? 'disabled' : ''}>${esc(words[index])}</button>`).join('')}</div>
    <div class="practice-word-bank practice-picked" aria-label="Mon ordre">${picked.length ? picked.map(index =>
      `<button data-return-word="${index}" aria-label="Retirer ${esc(words[index])}">${esc(words[index])}</button>`).join('')
      : '<span class="muted">Choisis le premier mot.</span>'}</div>
    <button data-check-order ${picked.length !== words.length ? 'disabled' : ''}>Vérifier</button>
    <div class="practice-feedback" role="status"></div>`;
}

function practiceCompletedText(clauses, completed = []) {
  return clauses.map((clause, index) => completed.includes(index)
    ? (index > 0 && !completed.includes(index - 1) ? '… ' : '') + clause
    : '').filter(Boolean).join(' ');
}

function practiceFeedback(value, target, container) {
  const correct = practiceCheckValue(value) === practiceCheckValue(target);
  container.textContent = correct ? 'C’est exact. Dis-le maintenant à voix haute.' : 'Compare avec ta réponse et réessaie.';
  if (!correct) {
    const answer = document.createElement('p');
    answer.textContent = target;
    container.append(answer);
  }
  return correct;
}

function bindPracticeStage() {
  const card = document.querySelector('[data-practice-card]');
  if (!card) return;
  const clauses = practiceClauses(draft().revision);
  const clause = clauses[part];
  const orderBoard = card.querySelector('[data-order-board]');
  if (orderBoard) {
    orderBoard.onclick = event => {
      const button = event.target.closest('button');
      if (!button) return;
      const exercise = reorderExercise;
      if (button.hasAttribute('data-check-order')) {
        const correct = practiceFeedback(exercise.picked.map(index => exercise.words[index]).join(' '),
          exercise.group, orderBoard.querySelector('.practice-feedback'));
        if (correct) {
          const d = draft();
          d.reorderCompleted ??= [];
          if (!d.reorderCompleted.includes(part)) {
            d.reorderCompleted.push(part);
            save();
            card.querySelector('[data-reorder-progress]').textContent = practiceCompletedText(clauses, d.reorderCompleted);
          }
        }
        return;
      }
      if (button.hasAttribute('data-pick-word')) exercise.picked.push(+button.dataset.pickWord);
      if (button.hasAttribute('data-return-word')) exercise.picked = exercise.picked.filter(index => index !== +button.dataset.returnWord);
      orderBoard.innerHTML = practiceOrderBoard(exercise.group);
      orderBoard.querySelector('button:not(:disabled)')?.focus({preventScroll: true});
    };
  }

  const typing = card.querySelector('[data-practice-typing]');
  if (typing) typing.onsubmit = event => {
    event.preventDefault();
    practiceFeedback(typing.elements.response.value, clause, typing.querySelector('.practice-feedback'));
  };
  const listen = card.querySelector('[data-listen-clause]');
  if (listen) listen.onclick = () => speak(clause);

  const cue = card.querySelector('[data-clause-cue]');
  if (cue) cue.onsubmit = event => {
    event.preventDefault();
    const value = cue.elements.cue.value.trim();
    if (!value) return;
    savePracticeEnglish(draft(), clause, value);
    render();
    $('practice-instruction')?.focus({preventScroll: true});
  };
  const english = card.querySelector('[data-english-translation]');
  if (english) bindPracticeEnglish(english, clause);
}

function simplePractice() {
  const d = draft();
  const isPilot = current === PILOT_QUESTION;
  if (!d.revision.trim()) return `<section class="simple-card card">
    ${simpleHeading()}<p>${YEAR_TEN ? 'Écris ta réponse pour commencer.' : 'Prépare ta version retravaillée.'}</p>
    <button class="primary" data-mode="${YEAR_TEN ? 'edit' : isPilot ? 'review' : 'revise'}">${YEAR_TEN ? 'Écrire ma réponse' : 'Améliorer ma réponse'}</button>
  </section>`;

  const chunks = practiceChunks();
  const clauses = practiceClauses(d.revision);
  wordTokens = [];
  const step = PRACTICE_STAGES.indexOf(mode);
  const units = mode === 'repeat' ? chunks : clauses;
  part = Math.min(Math.max(0, part), units.length - 1);
  const unit = units[part];
  const first = text => esc(practiceWords(text)[0] || text);
  const initials = text => `<div class="initials">${initialMarkup(text)}</div>`;
  let body;
  switch (mode) {
    case 'repeat':
      body = `<div class="focus">${esc(unit)}</div><button data-action="repeat-part">▶ Écouter deux fois</button>${practicePager('Groupe', units.length)}`;
      break;
    case 'reorder':
      body = `<div class="practice-reorder-layout">
        <div><div data-order-board>${practiceOrderBoard(unit)}</div>${practicePager('Proposition', units.length)}</div>
        <aside class="practice-reorder-progress" aria-label="Mon texte reconstitué">
          <h3>Mon texte reconstitué</h3>
          <p data-reorder-progress aria-live="polite">${esc(practiceCompletedText(clauses, d.reorderCompleted) || 'Les propositions apparaissent ici quand tu les réussis.')}</p>
        </aside>
      </div>`;
      break;
    case 'dictation':
    case 'type-initials':
      body = `${mode === 'dictation' ? '<button data-listen-clause>▶ Écouter la proposition</button>' : initials(unit)}
        <form data-practice-typing><label class="field-label" for="practice-response">Ma réponse</label>
          <textarea id="practice-response" name="response" rows="2" lang="fr" autocomplete="off" spellcheck="false" required></textarea>
          <button type="submit">Vérifier</button><div class="practice-feedback" role="status"></div>
        </form>${practicePager('Proposition', units.length)}`;
      break;
    case 'initials':
    case 'chunk-first':
      body = practiceCueGrid(chunks, 'Groupes', mode === 'initials' ? initials : first);
      break;
    case 'clause-initials':
    case 'clause-first':
      body = practiceCueGrid(clauses, 'Propositions', mode === 'clause-initials' ? initials : first);
      break;
    case 'clause-english':
      body = practiceEnglish(unit) + practicePager('Proposition', units.length);
      break;
    case 'clause-keyword':
      body = practiceCueGrid(clauses, 'Propositions', (clause, index) => esc(practiceKeyword(clause, index, clauses.length)));
      break;
    case 'solo':
      body = `${revealMarkup()}<label class="check"><input type="checkbox" data-memorised ${d.memorised ? 'checked' : ''}> Je peux répondre sans texte ni audio.</label>`;
      break;
  }

  return `<section class="simple-card card" data-practice-card>
    ${simpleHeading()}
    <div class="actions"><button data-action="listen-question">▶ Écouter la question</button></div>
    <p class="muted practice-stage-count">Étape ${step + 1} / ${PRACTICE_STAGES.length}</p>
    <p id="practice-instruction" tabindex="-1">${PRACTICE_INSTRUCTIONS[mode]}</p>
    ${body}
    <div class="actions practice-controls">
      ${step > 0 ? `<button data-mode="${PRACTICE_STAGES[step - 1]}">Plus d’aide</button>` : ''}
      ${mode === 'solo' ? `<button class="primary" data-mode="select">${YEAR_TEN ? 'Revenir à mes réponses' : 'Revenir à mes questions'}</button>` :
        `<button class="primary" data-mode="${PRACTICE_STAGES[step + 1]}">Moins d’aide →</button>`}
    </div>
    ${mode === 'clause-keyword' ? `<details class="simple-details"><summary>Ajuster mes mots clés</summary>
      <label class="field-label" for="practice-keywords">Mes mots clés</label>
      <p class="muted">Écris un seul mot par ligne, dans l’ordre des propositions (${clauses.length} en tout).</p>
      <textarea id="practice-keywords" data-draft="cues" rows="3">${esc(d.cues)}</textarea>
      <div class="actions"><button data-action="apply-keywords">Appliquer</button></div>
    </details>` : ''}
  </section>`;
}
