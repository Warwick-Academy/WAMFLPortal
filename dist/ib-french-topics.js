const IB_FRENCH_TOPICS = [
  {
    title: 'Identités',
    question: 'Qui suis-je ? Comment suis-je perçu(e) par les autres ?',
    subtopics: [
      { title: 'Styles de vie, sous-cultures, valeurs et croyances', activity: 'y12', activityLabel: 'Styles de vie' },
      { title: 'Santé et bien-être' },
      { title: 'Langue et identité' },
    ],
  },
  {
    title: 'Expériences',
    question: 'Comment nos expériences nous façonnent-elles ?',
    subtopics: [
      { title: 'Loisirs et vacances' },
      { title: 'Migration et récits de vie' },
      { title: 'Rites de passage, coutumes et traditions' },
    ],
  },
  {
    title: 'Ingéniosité humaine',
    question: 'Comment la créativité et l’innovation influencent-elles notre monde ?',
    subtopics: [
      { title: 'Technologie et innovation scientifique' },
      { title: 'Communication et médias' },
      { title: 'Divertissement et expression artistique' },
    ],
  },
  {
    title: 'Organisation sociale',
    question: 'Comment les gens vivent-ils ensemble en société ?',
    subtopics: [
      { title: 'Communauté et engagement social' },
      { title: 'Éducation et travail' },
      { title: 'Relations sociales' },
    ],
  },
  {
    title: 'Partage de la planète',
    question: 'Quels défis mondiaux devons-nous relever ensemble ?',
    subtopics: [
      { title: 'Paix et conflits' },
      { title: 'Droits de l’homme, égalité et justice sociale' },
      { title: 'Environnement, mondialisation et durabilité' },
    ],
  },
];

function showIbFrenchTopics(topic) {
  const heading = document.getElementById('ib-french-heading');
  const question = document.getElementById('ib-french-question');
  const back = document.getElementById('ib-french-back');
  const grid = document.getElementById('ib-french-grid');
  heading.textContent = topic ? topic.title : 'Choisis un thème';
  question.textContent = topic?.question ?? '';
  question.hidden = !topic;
  back.textContent = topic ? '← Thèmes' : '← Cours';
  back.onclick = () => topic ? showIbFrenchTopics() : show('years');

  const items = topic ? topic.subtopics : IB_FRENCH_TOPICS;
  grid.replaceChildren(...items.map(item => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'tile assessment';
    const title = document.createElement('strong');
    title.textContent = item.title;
    button.append(title);
    if (!topic) {
      button.onclick = () => showIbFrenchTopics(item);
    } else {
      const status = document.createElement('span');
      status.className = 'tag';
      status.textContent = item.activity ? item.activityLabel + ' →' : 'À venir';
      button.append(status);
      button.disabled = !item.activity;
      if (item.activity) button.onclick = () => openAssessment(item.activity);
    }
    return button;
  }));

  show('ib-french-topics');
  heading.focus({preventScroll: true});
}
