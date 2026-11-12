const Y10_FAMILY = 201;
const Y10_FRIENDSHIP = 203;
const Y10_TIME = 202;
const Y10_QUESTIONS = [
  {id: 204, core: 1, topic: 'relationships', text: 'Tu t’entends avec ta famille ?'},
  {id: 205, core: 2, topic: 'values', text: 'Quelles sont tes valeurs ou devises préférées ?'},
  {id: 206, core: 3, topic: 'bestFriend', text: 'Parle-moi de ton meilleur ami ou de ta meilleure amie. Comment l’as-tu rencontré(e) ?'},
  {id: 207, core: 4, topic: 'ideal', text: 'Comment serait ton ami idéal, ton amie idéale ou ta famille idéale ?'},
  {id: 208, core: 5, topic: 'preferences', text: 'Préfères-tu passer du temps en famille ou entre amis ? Pourquoi ?'},
  {id: 209, core: 6, topic: 'pastBirthday', text: 'Qu’est-ce que tu as fait l’année dernière pour fêter ton anniversaire ?'},
  {id: 210, core: 7, topic: 'futureBirthday', text: 'Qu’est-ce que tu vas faire cette année pour fêter ton anniversaire ?'},
  {id: Y10_FAMILY, core: 8, topic: 'family', text: 'Est-ce que la famille est importante pour toi ?'},
  {id: Y10_FRIENDSHIP, core: 8, topic: 'friendship', text: 'Est-ce que l’amitié est importante pour toi ?'},
  {id: Y10_TIME, core: 9, topic: 'time', text: 'Si tu avais plus de temps, que ferais-tu de différent ?'},
];
const Y10_WELLBEING_QUESTIONS = [
  {id: 220, core: 1, topic: 'hobbies', text: 'Quels sont tes passe-temps ?'},
  {id: 221, core: 2, topic: 'childhood-hobbies', text: 'Tes passe-temps ont-ils changé par rapport à quand tu étais un enfant ?'},
  {id: 222, core: 3, topic: 'next-weekend', text: 'Qu’est-ce que tu vas faire avec tes copains le week-end prochain ?'},
  {id: 223, core: 4, topic: 'ideal-day', text: 'Si tu avais le choix, comment serait ta journée idéale ?'},
  {id: 224, core: 5, topic: 'last-weekend', text: 'Qu’est-ce que tu as fait le week-end dernier ? C’était bien ?'},
  {id: 225, core: 6, topic: 'ideal-routine', text: 'Décris ta routine quotidienne idéale.'},
  {id: 226, core: 7, topic: 'wake-up', text: 'Es-tu plus quelqu’un qui se réveille toujours très tôt ou préfères-tu te réveiller plus tard le matin et pourquoi ?'},
  {id: 227, core: 8, topic: 'body-confidence', text: 'Parle-moi de l’importance de se sentir bien dans sa peau.'},
  {id: 228, core: 9, topic: 'balanced-diet', text: 'Pourquoi est-il important de bien manger ?'},
  {id: 229, core: 10, topic: 'sport-and-wellbeing', text: 'Que penses-tu du sport et du bien-être ?'},
];
const Y10_NEIGHBOURHOOD_QUESTIONS = [
  {id: 230, core: 1, topic: 'local-area', text: 'Comment est ta ville ou ton quartier ? Comment était ton quartier quand tu étais plus jeune ?'},
  {id: 231, core: 2, topic: 'local-pros-cons', text: 'Quels sont les avantages et les inconvénients de vivre dans ta région ?'},
  {id: 232, core: 3, topic: 'local-changes', text: 'Si tu pouvais changer un aspect de ta ville, que changerais-tu et pourquoi ?'},
  {id: 233, core: 4, topic: 'town-or-country', text: 'Préfères-tu vivre à la campagne ou en ville ? Pourquoi ?'},
  {id: 234, core: 5, topic: 'local-shops', text: 'Quels types de magasins y a-t-il près de chez toi ? Qu’as-tu acheté récemment ?'},
  {id: 235, core: 6, topic: 'local-transport', text: 'Quels sont les moyens de transport les plus pratiques dans ta ville ?'},
  {id: 236, core: 7, topic: 'compare-transport', text: 'À ton avis, les transports en commun sont-ils plus efficaces en France qu’aux Bermudes ?'},
  {id: 237, core: 8, topic: 'future-home', text: 'Où aimerais-tu habiter à l’avenir et pourquoi ?'},
  {id: 238, core: 9, topic: 'environment-problem', text: 'Selon toi, quel est le plus grand problème environnemental ?'},
  {id: 239, core: 10, topic: 'environment-actions', text: 'Qu’est-ce que tu fais pour protéger l’environnement ? Est-ce que tu recycles souvent ?'},
];
const Y10_MEDIA_QUESTIONS = [
  {id: 240, core: 1, topic: 'online-leisure', text: 'Que fais-tu en ligne pendant ton temps libre ?'},
  {id: 241, core: 2, topic: 'social-media', text: 'Quels sont les avantages et les inconvénients des réseaux sociaux ?'},
  {id: 242, core: 3, topic: 'phone-time', text: 'Penses-tu que les jeunes passent trop de temps sur leurs portables ?'},
  {id: 243, core: 4, topic: 'past-technology', text: 'Comment as-tu utilisé la technologie hier soir / le week-end dernier ?'},
  {id: 244, core: 5, topic: 'day-without-phone', text: 'As-tu déjà essayé d’arrêter d’utiliser ton téléphone pendant un jour ? Comment était l’expérience ?'},
  {id: 245, core: 6, topic: 'music', text: 'Quel genre de musique aimes-tu ?'},
  {id: 246, core: 7, topic: 'recent-television', text: 'Qu’est-ce que tu as regardé à la télé récemment ?'},
  {id: 247, core: 8, topic: 'week-without-phone', text: 'Si tu n’avais pas accès à ton téléphone pendant une semaine, que ferais-tu ?'},
  {id: 248, core: 9, topic: 'student-app', text: 'Si tu pouvais créer une appli utile pour les élèves francophones, que proposerais-tu ?'},
];
const Y10_STUDYING_QUESTIONS = [
  {id: 250, core: 1, topic: 'school-description', text: 'Parle-moi de ton collège / décris ton collège.'},
  {id: 251, core: 2, topic: 'school-routine', text: 'Parle-moi de ta routine journalière pendant une semaine typique.'},
  {id: 252, core: 3, topic: 'school-subjects', text: 'Parle-moi des matières que tu étudies.'},
  {id: 253, core: 4, topic: 'ideal-school', text: 'Comment serait ton école idéale ?'},
  {id: 254, core: 5, topic: 'education-value', text: 'L’éducation, c’est important pour toi ?'},
  {id: 255, core: 6, topic: 'school-rules', text: 'Parle-moi du règlement dans ton collège.'},
  {id: 256, core: 7, topic: 'describe-uniform', text: 'Décris ton uniforme scolaire. Qu’est-ce que tu aimerais porter au collège / comment serait ton uniforme idéal ?'},
  {id: 257, core: 8, topic: 'uniform-pros-cons', text: 'Quels sont les avantages et les inconvénients de porter un uniforme ?'},
  {id: 258, core: 9, topic: 'school-plans', text: 'Qu’est-ce que tu vas faire à l’école demain / après les examens ?'},
  {id: 259, core: 10, topic: 'further-study', text: 'Qu’est-ce que tu veux étudier après le lycée et pourquoi veux-tu étudier ça ?'},
];
const Y10_TRAVEL_QUESTIONS = [
  {id: 260, core: 1, topic: 'active-or-relaxing', text: 'Préfères-tu les vacances actives ou relaxantes ? Pourquoi ?'},
  {id: 261, core: 2, topic: 'ideal-holiday', text: 'Si tu gagnais le loto, où passerais-tu les vacances ? / Décris tes vacances idéales.'},
  {id: 262, core: 3, topic: 'accommodation', text: 'Tu préfères loger dans un hôtel ou dans un camping ? Pourquoi ?'},
  {id: 263, core: 4, topic: 'travel-abroad', text: 'Selon toi, quels sont les avantages de voyager à l’étranger ?'},
  {id: 264, core: 5, topic: 'last-holiday', text: 'Qu’est-ce que tu as fait en vacances l’année dernière et avec qui ?'},
  {id: 265, core: 6, topic: 'holiday-weather', text: 'Quel temps faisait-il pendant tes dernières vacances ?'},
  {id: 266, core: 7, topic: 'visit-france', text: 'Est-ce que tu voudrais visiter la France ? Pourquoi (pas) ?'},
  {id: 267, core: 8, topic: 'next-holiday', text: 'L’année prochaine, où vas-tu passer les vacances ?'},
  {id: 268, core: 9, topic: 'travel-transport', text: 'Quel est ton moyen de transport préféré ? Pourquoi ?'},
  {id: 269, core: 10, topic: 'sustainable-tourism', text: 'Comment les touristes peuvent-ils protéger l’environnement quand ils voyagent ?'},
];
const Y10_CONVERSATION_THEMES = [
  { id: 'y10', title: 'My personal world', store: 'atelier-y10-oral-v1', questions: Y10_QUESTIONS },
  { id: 'y10-wellbeing', title: 'Lifestyles and wellbeing', store: 'atelier-y10-wellbeing-v1', questions: Y10_WELLBEING_QUESTIONS },
  { id: 'y10-neighbourhood', title: 'My neighbourhood', store: 'atelier-y10-neighbourhood-v1', questions: Y10_NEIGHBOURHOOD_QUESTIONS },
  { id: 'y10-media', title: 'Media and technology', store: 'atelier-y10-media-v1', questions: Y10_MEDIA_QUESTIONS },
  { id: 'y10-studying', title: 'Studying and my future', store: 'atelier-y10-studying-v1', questions: Y10_STUDYING_QUESTIONS },
  { id: 'y10-travel', title: 'Travel and tourism', store: 'atelier-y10-travel-v1', questions: Y10_TRAVEL_QUESTIONS },
];
