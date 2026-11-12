const REVIEW_CARDS = [
  ['present', 'Présent', 'Relis le sujet et la terminaison. Ce temps convient-il à ton opinion ou à une habitude actuelle ?'],
  ['past', 'Passé composé', 'Vérifie l’auxiliaire et le participe passé, puis l’accord s’il est nécessaire.'],
  ['imperfect', 'Imparfait', 'Vérifie que tu décris un contexte, une habitude ou un état passé.'],
  ['conditional', 'Conditionnel', 'Vérifie la formation et le sens. Dans une hypothèse avec si, relis les temps des deux propositions.'],
  ['future', 'Futur', 'Vérifie que la forme exprime un projet ou une conséquence à venir.'],
  ['other', 'Autres formes verbales', 'Vérifie le déclencheur du subjonctif ou l’ordre des événements au plus-que-parfait.'],
  ['topic', 'Vocabulaire du sujet', 'Garde les mots précis qui servent ton idée. Tu peux ajouter d’autres exemples de ton brouillon.'],
  ['repeated', 'Répétitions à examiner', 'Garde les répétitions utiles. Si un mot revient sans apporter de précision, essaie de le varier ou de reformuler.'],
  ['complex', 'Structures complexes', 'Vérifie la phrase entière. Une relative, une concession ou une hypothèse doit clarifier le lien entre tes idées.'],
  ['idioms', 'Expressions idiomatiques', 'Vérifie le sens, la préposition et le contexte de chaque expression.']
];

const REVIEW_VERBS = {
  être: ['suis es est sommes êtes sont', 'ét', 'ser', 'été'],
  avoir: ['ai as a avons avez ont', 'av', 'aur', 'eu'],
  aller: ['vais vas va allons allez vont', 'all', 'ir', 'allé'],
  faire: ['fais fais fait faisons faites font', 'fais', 'fer', 'fait'],
  pouvoir: ['peux peux peut pouvons pouvez peuvent', 'pouv', 'pourr', 'pu'],
  vouloir: ['veux veux veut voulons voulez veulent', 'voul', 'voudr', 'voulu'],
  devoir: ['dois dois doit devons devez doivent', 'dev', 'devr', 'dû'],
  savoir: ['sais sais sait savons savez savent', 'sav', 'saur', 'su'],
  prendre: ['prends prends prend prenons prenez prennent', 'pren', 'prendr', 'pris'],
  apprendre: ['apprends apprends apprend apprenons apprenez apprennent', 'appren', 'apprendr', 'appris'],
  comprendre: ['comprends comprends comprend comprenons comprenez comprennent', 'compren', 'comprendr', 'compris'],
  venir: ['viens viens vient venons venez viennent', 'ven', 'viendr', 'venu'],
  devenir: ['deviens deviens devient devenons devenez deviennent', 'deven', 'deviendr', 'devenu'],
  mettre: ['mets mets met mettons mettez mettent', 'mett', 'mettr', 'mis'],
  voir: ['vois vois voit voyons voyez voient', 'voy', 'verr', 'vu'],
  dire: ['dis dis dit disons dites disent', 'dis', 'dir', 'dit'],
  lire: ['lis lis lit lisons lisez lisent', 'lis', 'lir', 'lu'],
  choisir: ['choisis choisis choisit choisissons choisissez choisissent', 'choisiss', 'choisir', 'choisi'],
  finir: ['finis finis finit finissons finissez finissent', 'finiss', 'finir', 'fini'],
  vivre: ['vis vis vit vivons vivez vivent', 'viv', 'vivr', 'vécu'],
  ressentir: ['ressens ressens ressent ressentons ressentez ressentent', 'ressent', 'ressentir', 'ressenti'],
  réfléchir: ['réfléchis réfléchis réfléchit réfléchissons réfléchissez réfléchissent', 'réfléchiss', 'réfléchir', 'réfléchi'],
  sentir: ['sens sens sent sentons sentez sentent', 'sent', 'sentir', 'senti'],
  sortir: ['sors sors sort sortons sortez sortent', 'sort', 'sortir', 'sorti'],
  partir: ['pars pars part partons partez partent', 'part', 'partir', 'parti'],
  découvrir: ['découvre découvres découvre découvrons découvrez découvrent', 'découvr', 'découvrir', 'découvert'],
  grandir: ['grandis grandis grandit grandissons grandissez grandissent', 'grandiss', 'grandir', 'grandi'],
  falloir: ['faut', 'fall', 'faudr', 'fallu'],
  manger: ['mange manges mange mangeons mangez mangent', 'mang', 'manger', 'mangé'],
  acheter: ['achète achètes achète achetons achetez achètent', 'achet', 'achèter', 'acheté'],
  préférer: ['préfère préfères préfère préférons préférez préfèrent', 'préfér', 'préférer', 'préféré']
};
const REVIEW_REGULAR = 'aimer parler penser expliquer donner porter habiter rester arriver entrer rentrer retourner passer trouver montrer accepter refuser aider ajouter souhaiter écouter éviter travailler développer respecter partager influencer sembler présenter participer porter juger adapter comparer consommer gaspiller changer pratiquer compter utiliser étudier observer regretter demander proposer regarder'.split(' ').map(verb => verb.slice(0, -2));
const REVIEW_ENDINGS = {
  imperfect: ['ais','ais','ait','ions','iez','aient'],
  conditional: ['ais','ais','ait','ions','iez','aient'],
  future: ['ai','as','a','ons','ez','ont']
};
const VERB_FORMS = {present:new Map(), imperfect:new Map(), conditional:new Map(), future:new Map()};
const PARTICIPLES = new Map();

function addReviewVerb(infinitive, present, imperfect, future, participle) {
  const forms = {
    present: present.split(' '),
    imperfect: REVIEW_ENDINGS.imperfect.map(end => imperfect + (imperfect.endsWith('g') && end.startsWith('a') ? 'e' : '') + end),
    conditional: REVIEW_ENDINGS.conditional.map(end => future + end),
    future: REVIEW_ENDINGS.future.map(end => future + end)
  };
  for (const [kind, items] of Object.entries(forms)) {
    for (const item of items) VERB_FORMS[kind].set(item, infinitive);
  }
  const feminine = participle === 'pris' ? 'prise' : participle === 'appris' ? 'apprise' : participle === 'compris' ? 'comprise' :
    participle === 'mis' ? 'mise' : participle === 'fait' ? 'faite' : participle === 'dit' ? 'dite' :
    participle === 'découvert' ? 'découverte' : participle === 'dû' ? 'due' : participle + 'e';
  for (const form of [participle, participle + 's', feminine, feminine + 's']) PARTICIPLES.set(form, infinitive);
}
for (const [infinitive, forms] of Object.entries(REVIEW_VERBS)) addReviewVerb(infinitive, ...forms);
for (const stem of REVIEW_REGULAR) {
  addReviewVerb(stem + 'er', ['e','es','e','ons','ez','ent'].map(end => stem + (stem.endsWith('g') && end === 'ons' ? 'e' : '') + end).join(' '), stem, stem + 'er', stem + 'é');
}

const REVIEW_STRUCTURES = [
  ['Hypothèse', /(?<!même )(?<!comme )\bsi\s+(?:j[’']|je |tu |il |elle |on |nous |vous |ils |elles )[^.!?]{3,100}/giu],
  ['Concession', /\b(?:bien que|même si|quoique)\s+[^.!?,;]{3,72}/giu],
  ['Condition ou but', /\b(?:à condition que|pour que)\s+[^.!?,;]{3,72}/giu],
  ['Contraste', /\b(?:tandis que|alors que)\s+[^.!?,;]{3,72}/giu],
  ['Mise en relief ou relative', /\b(?:ce (?:qui|que|dont)|dont|c[’']est [^.!?,;]{2,30} que)\s+[^.!?,;]{3,72}/giu],
  ['Cause ou conséquence', /\b(?:parce que|puisque|si bien que|de sorte que)\s+[^.!?,;]{3,72}/giu],
  ['Gérondif', /\ben\s+(?:écoutant|parlant|faisant|prenant|choisissant|changeant|partageant|restant|observant|comparant|évitant|achetant|consommant|regardant)\b/giu],
  ['Subordonnée introduite par que', /\b(?:il faut|il faudrait|je veux|j[’']aimerais|je souhaite|je ne pense pas) que\s+[^.!?,;]{3,72}/giu],
  ['Infinitif passé', /\baprès (?:avoir|être|s[’']être)\s+\p{L}+/giu]
];
const REVIEW_IDIOMS = [
  /\b(?:me |te |se |nous |vous )?sen(?:tir|s|t|tons|tez|tent|tais|tait|tent) bien dans (?:ma|ta|sa|notre|votre|leur) peau\b/giu,
  /\b(?:prendre|prends|prend|prenons|prennent|pris|prenais) du recul\b/giu,
  /\b(?:avoir|ai|as|a|avons|ont|avais|avait) tendance à\b/giu,
  /\b(?:rester|reste|restes|restent|resté[e]?) fidèle à\b/giu,
  /\b(?:trouver|trouve|trouves|trouvent|trouvé[e]?) (?:ma|ta|sa|notre|votre|leur) place\b/giu,
  /\b(?:changer|change|changes|changent|changé[e]?) (?:d[’']avis|de regard)\b/giu,
  /\b(?:se |me |te |nous |vous )remet(?:tre|s|tons|tent)? en question\b/giu,
  /\b(?:avoir|ai|as|a|avons|ont) (?:les pieds sur terre|(?:mon|ton|son|notre|votre|leur) mot à dire)\b/giu,
  /\b(?:prendre|prends|prend|pris) conscience de\b/giu,
  /\b(?:tenir|tiens|tient) à (?:mes|tes|ses|nos|vos|leurs) valeurs\b/giu,
  /\b(?:mettre|mets|met|mis) l[’']accent sur\b/giu,
  /\b(?:se |me |te )donne(?:r|s|nt)? bonne conscience\b/giu,
  /\bà force de\b/giu,
  /\bde peur de\b/giu,
  /\bd[’']un côté\b/giu,
  /\bd[’']un autre côté\b/giu
];

const REVIEW_STOP = new Set('avec pour dans sans mais très plus moins tout tous toute toutes même cette comme donc alors aussi encore lorsque quand selon ainsi cela ceci ceux elles leur leurs nous vous autre autres entre avant après depuis parce puis que qui quoi dont elle ils une les des du aux sur est sont être était étaient été avoir avais avait ai aux ses mes tes son mon ton nos vos ces cet ce ça il on je tu ne pas par mal bien fait faire peut peux ont ans jour jours chez grâce où là chaque parce quelques parfois souvent toujours jamais vraiment beaucoup surtout plutôt enfin seulement'.split(' '));
const BETWEEN_VERB_WORDS = new Set('pas jamais plus déjà souvent beaucoup bien mal vraiment encore toujours enfin aussi seulement vite récemment parfois tout simplement dûment moins rien'.split(' '));
const ETRE_MOVEMENT = new Set('aller venir devenir arriver entrer rentrer retourner rester partir sortir'.split(' '));
const REFLEXIVE = new Set(['m','t','s','me','te','se','nous','vous']);

function reviewWords(text) {
  return Array.from(text.matchAll(/\p{L}[\p{L}\p{M}]*/gu), m => ({
    value:m[0].toLocaleLowerCase('fr'), start:m.index, end:m.index + m[0].length
  }));
}

function collectVerbExamples(text, add) {
  const words = reviewWords(text);
  const compoundTenses = {present:'past', imperfect:'other', conditional:'conditional', future:'future'};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const kind = Object.keys(VERB_FORMS).find(key => VERB_FORMS[key].has(word.value));
    if (!kind) continue;
    const verb = VERB_FORMS[kind].get(word.value);
    let j = i + 1;
    while (j < words.length && j <= i + 3 && BETWEEN_VERB_WORDS.has(words[j].value)) j++;
    const next = words[j];
    let start = i && /^[’'\s]+$/u.test(text.slice(words[i-1].end, word.start)) &&
      /^(?:j|je|tu|il|elle|on|nous|vous|ils|elles|m|t|s|me|te|se)$/.test(words[i-1].value) ? words[i-1].start : word.start;
    const previous = words[i-1]?.value;
    const beforePrevious = words[i-2]?.value;
    const hasSubject = /^(?:j|je|tu|il|elle|on|nous|vous|ils|elles)$/.test(beforePrevious || '');
    if (/^(?:un|une|le|la|les|du|des|mon|ma|mes|son|sa|ses|ce|cette)$/.test(previous || '') &&
        !hasSubject && !REFLEXIVE.has(beforePrevious)) continue;
    if (i >= 2 && /^(?:ne|n)$/.test(previous) && hasSubject &&
        /^[’'\s]+$/u.test(text.slice(words[i-2].end, word.start).replace(/\bne?\b/iu,''))) {
      start = words[i-2].start;
    }
    const connected = next && !/[.!?;:,\n]/u.test(text.slice(word.end, next.start));
    const pp = connected && PARTICIPLES.get(next.value);
    const reflexive = i && REFLEXIVE.has(words[i-1].value);
    if (pp && (verb === 'avoir' || (verb === 'être' && (reflexive || ETRE_MOVEMENT.has(pp))))) {
      add(compoundTenses[kind], text.slice(start,next.end), kind === 'imperfect' ? 'Plus-que-parfait possible' : '');
      i = j;
    } else if (connected && verb === 'aller' && kind === 'present' &&
        (next.value in REVIEW_VERBS || REVIEW_REGULAR.some(stem => stem + 'er' === next.value))) {
      add('future', text.slice(start,next.end),'Futur proche possible');
      i = j;
    } else {
      add(kind,text.slice(start,word.end));
    }
  }
}

function reviewDraft(text, vocabulary) {
  const results = Object.fromEntries(REVIEW_CARDS.map(([key]) => [key,[]]));
  const add = (key, quote, detail = '') => {
    const value = quote.trim();
    if (value && !results[key].some(item => item.quote.toLocaleLowerCase('fr') === value.toLocaleLowerCase('fr'))) {
      results[key].push({quote:value,detail});
    }
  };
  collectVerbExamples(text, add);
  for (const [name,pattern] of REVIEW_STRUCTURES) {
    for (const m of text.matchAll(pattern)) add('complex',m[0],name);
  }
  for (const m of text.matchAll(/\b(?:bien que|pour que|à condition que|il faut que|je souhaite que|je ne pense pas que)\s+(?:j[’']|je |tu |il |elle |on |nous |vous |ils |elles )(?:ne\s+|n[’'])?(?:sois|soit|soyons|soyez|soient|aie|aies|ait|ayons|ayez|aient|puisse|puisses|puissions|puissiez|puissent|fasse|fasses|fassions|fassiez|fassent|aille|ailles|allions|alliez|aillent)\b/giu)) add('other',m[0],'Subjonctif possible');
  for (const pattern of REVIEW_IDIOMS) {
    for (const m of text.matchAll(pattern)) add('idioms',m[0]);
  }
  for (const phrase of vocabulary) {
    const stem = phrase.replace(/^(?:les|le|la|un|une|des)\s+|^l[’']/iu,'');
    const escaped = stem.replace(/[.*+?^$\x7b\x7d()|[\]\\]/g,'\\$&').replace(/[’']/g,"[’']");
    const pattern = new RegExp('(?<!\\p{L})'+escaped+'(?!\\p{L})','iu');
    const match = text.match(pattern);
    if (match) add('topic',match[0],phrase);
  }
  const frequency = new Map();
  for (const {value} of reviewWords(text)) {
    if (value.length < 4 || REVIEW_STOP.has(value)) continue;
    frequency.set(value,(frequency.get(value)||0)+1);
  }
  for (const [word,count] of [...frequency].filter(([,count]) => count > 1).sort((a,b) => b[1]-a[1])) {
    add('repeated',word,count + ' occurrences');
  }
  for (const expression of ['je pense que','à mon avis','je trouve que','il y a']) {
    const count = [...text.matchAll(new RegExp('\\b'+expression+'\\b','giu'))].length;
    if (count > 1) add('repeated',expression,count + ' occurrences');
  }
  return results;
}
