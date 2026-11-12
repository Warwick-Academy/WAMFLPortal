(() => {
  const configuredLanguage = document.currentScript.dataset.language;
  const language = configuredLanguage === 'page' ? document.documentElement.lang : configuredLanguage;
  const accents = {
    fr: 'à â ç é è ê ë î ï ô ù û ü ÿ',
    es: 'á é í ó ú ü ñ',
  }[language];
  if (!accents) return;

  const fields = new WeakSet();
  const accentTargets = new WeakMap();

  function addAccentBars() {
    for (const field of document.querySelectorAll('textarea, input[data-field], input[data-name]')) {
      if (fields.has(field) || field.readOnly || field.disabled ||
          (field.tagName === 'INPUT' && field.type !== 'text') ||
          ['numeric', 'decimal'].includes(field.inputMode) ||
          field.lang === 'en' || field.dataset.field?.endsWith('English')) continue;
      fields.add(field);

      const bar = document.createElement('div');
      bar.className = 'accent-bar';
      bar.setAttribute('role', 'group');
      bar.setAttribute('aria-label', language === 'es' ? 'Caracteres españoles' : 'Caractères français');
      for (const letter of accents.split(' ')) {
        const key = document.createElement('button');
        key.type = 'button';
        key.dataset.accent = letter;
        key.textContent = letter;
        bar.append(key);
      }
      accentTargets.set(bar, field);

      const label = field.closest('label');
      if (label) {
        const group = document.createElement('div');
        group.className = 'accent-field';
        label.before(group);
        group.append(bar, label);
      } else {
        field.before(bar);
      }
    }
  }

  function insert(field, text, isVocabulary) {
    if (!field || field.disabled || field.readOnly) return;
    const start = field.selectionStart ?? field.value.length;
    const end = field.selectionEnd ?? start;
    const previous = field.value[start - 1];
    const next = field.value[end];
    const before = isVocabulary && previous && !/[\s’'(«-]/u.test(previous) && !/^[,.;:?!]/u.test(text) ? ' ' : '';
    const after = isVocabulary && next && !/[\s’',.;:?!»)\-]/u.test(next) ? ' ' : '';
    field.focus({preventScroll: true});
    field.setRangeText(before + text + after, start, end, 'end');
    const caret = start + before.length + text.length;
    field.setSelectionRange(caret, caret);
    field.dispatchEvent(new Event('input', {bubbles: true}));

    // The younger-year activities save on change and redraw the form.
    if (field.dataset.field && field.onchange) {
      field.dispatchEvent(new Event('change', {bubbles: true}));
      const replacement = document.querySelector(`input[data-field="${CSS.escape(field.dataset.field)}"]`);
      if (replacement && replacement !== field) {
        replacement.focus({preventScroll: true});
        replacement.setSelectionRange(caret, caret);
      }
    }
  }

  const keySelector = 'button[data-accent], button[data-insert-vocab]';
  document.addEventListener('pointerdown', event => {
    if (event.target.closest(keySelector)) event.preventDefault();
  });
  document.addEventListener('click', event => {
    const key = event.target.closest(keySelector);
    if (!key) return;
    const vocab = key.dataset.insertVocab;
    const field = vocab === undefined ? accentTargets.get(key.closest('.accent-bar')) : document.getElementById('answer');
    insert(field, vocab ?? key.dataset.accent, vocab !== undefined);
  });

  addAccentBars();
  new MutationObserver(addAccentBars).observe(document.body, {childList: true, subtree: true});
})();
