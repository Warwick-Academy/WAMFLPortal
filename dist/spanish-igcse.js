function showSpanishIgcse(topic, subtopic) {
  const practice = subtopic && SPANISH_IGCSE_PRACTICE.find(section => section.id === subtopic.code);
  if (practice) {
    document.querySelector('.practicebar .crumb').textContent = 'IGCSE Spanish / ' + practice.title;
    const back = document.getElementById('practiceBack');
    back.textContent = '← ' + topic.code + ' · ' + topic.title;
    back.onclick = () => showSpanishIgcse(topic);
    const frame = document.getElementById('activity');
    frame.title = 'Práctica oral de español';
    frame.removeAttribute('srcdoc');
    frame.src = 'y12-styles.html?spanish=' + encodeURIComponent(practice.id);
    show('practice');
    return;
  }
  const heading = document.getElementById('spanish-igcse-heading');
  const trail = document.getElementById('spanish-igcse-trail');
  const back = document.getElementById('spanish-igcse-back');
  const body = document.getElementById('spanish-igcse-content');
  const label = item => item.code + ' · ' + item.title;
  document.getElementById('spanish-igcse-bilan').hidden = Boolean(topic);

  trail.textContent = subtopic ? 'IGCSE Spanish / ' + label(topic) : 'IGCSE Spanish';
  heading.textContent = subtopic ? label(subtopic) : topic ? label(topic) : 'Speaking topics';
  back.textContent = subtopic ? '← ' + label(topic) : topic ? '← Topics A–E' : '← Courses';
  back.onclick = () => {
    if (subtopic) showSpanishIgcse(topic);
    else if (topic) showSpanishIgcse();
    else show('years');
  };

  if (subtopic) {
    const list = document.createElement('ol');
    list.className = 'spanish-igcse-questions';
    list.lang = 'es';
    list.append(...subtopic.questions.map(({text, hint}) => {
      const question = document.createElement('li');
      question.textContent = text;
      if (hint) {
        const note = document.createElement('small');
        note.textContent = hint;
        question.append(note);
      }
      return question;
    }));
    body.replaceChildren(list);
  } else {
    const grid = document.createElement('div');
    grid.className = 'grid speaking-grid';
    const options = topic ? topic.subtopics : SPANISH_IGCSE_TOPICS;
    grid.append(...options.map(item => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'tile assessment';
      const title = document.createElement('strong');
      title.textContent = label(item);
      button.append(title);
      button.onclick = () => topic ? showSpanishIgcse(topic, item) : showSpanishIgcse(item);
      return button;
    }));
    body.replaceChildren(grid);
  }

  show('spanish-igcse');
  heading.focus({preventScroll: true});
}
