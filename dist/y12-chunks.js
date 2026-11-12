function clauseChunks(text){return text.split(/(?<=[,;:.!?…\n])\s+|(?=\b(?:parce que|même si|bien que|ce qui|ce que|alors que|tandis que|mais|pourtant|donc|cependant|en revanche|par conséquent|(?<!même )(?<!comme )si|quand|lorsque)\b)/giu).map(t=>t.trim()).filter(Boolean)}

const CHUNK_DETERMINERS = new Set('le la les un une des du ce cet cette ces chaque quelques plusieurs tout toute tous toutes'.split(' '));
const CHUNK_POSSESSIVES = new Set('mon ma mes ton ta tes son sa ses notre nos votre vos leur leurs'.split(' '));
const CHUNK_PRONOUNS = new Set('je tu il elle on nous vous ils elles me te se en y ça cela'.split(' '));
const CHUNK_VERB_PREFIXES = new Set('ne me te se le la les lui leur nous vous y en'.split(' '));
const CHUNK_NEGATION = new Set(['pas', 'jamais', 'plus', 'rien', 'guère']);
const CHUNK_VERB_ADVERBS = new Set([...BETWEEN_VERB_WORDS, 'presque', 'absolument', 'très', 'rarement', 'totalement', 'certainement', 'peut-être']);
const CHUNK_EXTRA_VERBS = new Map([
  ['avoir', 'aie aies ait ayons ayez aient avoir eu'],
  ['être', 'sois soit soyons soyez soient être été'],
  ['aller', 'aille ailles aillent'],
  ['pouvoir', 'puisse puisses puissions puissiez puissent'],
  ['encourager', 'encourage encourages encourageons encouragez encouragent'],
  ['entourer', 'entoure entoures entourons entourez entourent'],
].flatMap(([verb, forms]) => forms.split(' ').map(form => [form, verb])));
const CHUNK_FINITE_ENDING = /\p{L}{3,}(?:aient|ais|ait|erons|eront|erait|irait|eraient|iraient)$/u;
const CHUNK_MODAL_VERBS = new Set(['aller', 'pouvoir', 'vouloir', 'devoir']);
const CHUNK_PARTICIPLE_ENDING = /\p{L}{2,}(?:é|ée|és|ées|i|ie|is|ies|u|ue|us|ues)$/u;
const CHUNK_SUBJECT_INTRODUCERS = new Set('que quand lorsque si puisque quoique dont où comme car'.split(' '));
const CHUNK_PUNCTUATION = /[,:;.!?…]$/u;
const CHUNK_PREPOSITIONS = new Set('à au aux de du des avec dans sur sous chez entre pour sans dès par vers depuis pendant contre'.split(' '));
const CHUNK_CONJUNCTIONS = new Set('et ou mais puis ni car'.split(' '));
const CHUNK_DEGREE = new Set('très assez trop plutôt moins plus tellement'.split(' '));
const CHUNK_ADJECTIVES = /^(?:bons?|bonnes?|mauvaises?|mauvais|grands?|grandes?|petits?|petites?|nombreux|nombreuses|nouvelles?|nouveaux|beaux|belles?|différentes?|différents?|vrais?|vraies?|meilleurs?|meilleures?)$/u;
const CHUNK_INFINITIVE = /^(?:[a-zà-ÿ]+(?:er|ir|re)|être|avoir)$/u;
const CHUNK_DEPENDENT_LINKS = new Set(['parce que', 'même si', 'comme si', 'bien que', 'alors que', 'tandis que', 'pour que']);
const CHUNK_EXPRESSIONS = [
  'grâce à', 'à cause de', 'au lieu de', 'en train de', 'tendance à', 'eu tendance à',
  'à force de', 'à propos de', 'à partir de', 'afin de', 'au fil de', 'au sein de',
  'par rapport à', 'en raison de', 'en fonction de', 'malgré tout', 'tout en',
  ...CHUNK_DEPENDENT_LINKS, 'en revanche', 'par conséquent', 'ce qui', 'ce que', 'de plus en plus',
  'ce dont', 'ce à quoi', 'en fait', 'en effet', 'par exemple', 'tout à fait',
  'petit à petit', 'de temps en temps', 'à mon avis', 'en ce qui concerne',
  'faire partie de', 'fais partie de', 'fait partie de', 'faisait partie de',
  'rendre compte', 'rends compte', 'rendu compte', 'prise de conscience',
  'à l’aise', "à l'aise", 'sens à l’aise', "sens à l'aise", 'confiance en',
].map(expression => expression.split(' '));

function chunkVerbForm(word) {
  const bare = word.replace(/^(?:(?:j|n|m|t|s|l|c|qu)[’'])+/u, '');
  const verb = VERB_FORMS.present.get(bare) || VERB_FORMS.imperfect.get(bare) ||
    VERB_FORMS.conditional.get(bare) || VERB_FORMS.future.get(bare) || CHUNK_EXTRA_VERBS.get(bare) ||
    (Object.hasOwn(REVIEW_VERBS, bare) ? bare : undefined);
  return {bare, verb, finite: Boolean(verb && bare !== verb && bare !== 'eu' && bare !== 'été') || CHUNK_FINITE_ENDING.test(bare)};
}

function protectVerbGroups(words, clean, costs) {
  const forms = clean.map(chunkVerbForm);
  const relative = clean.findIndex(word => word === 'qui' || word === 'que' || word === 'dont');
  const startsWithSubject = CHUNK_DETERMINERS.has(clean[0]) || CHUNK_POSSESSIVES.has(clean[0]) || /^l[’']/u.test(clean[0]);
  const firstFinite = forms.findIndex(form => form.finite);
  let lastFinite = -1;
  for (const [index, {bare, verb, finite}] of forms.entries()) {
    if (finite) {
      let verbStart = index;
      while (CHUNK_VERB_PREFIXES.has(clean[verbStart - 1]) || /^n[’']/u.test(clean[verbStart - 1])) verbStart--;
      let subjectStart = verbStart;
      if (!/^(?:j[’']|c[’']|qu[’'])/u.test(clean[index])) {
        // Keep short subjects attached and allow a breath after a longer noun phrase.
        for (let left = index - 1; left >= 0; left--) {
          const word = clean[left];
          if (CHUNK_PUNCTUATION.test(words[left]) || CHUNK_SUBJECT_INTRODUCERS.has(word) || forms[left].finite) break;
          if (CHUNK_CONJUNCTIONS.has(word) && (word !== 'et' || lastFinite >= 0)) break;
          costs[left + 1] = Infinity;
          subjectStart = left;
          if (word === 'qui' || (CHUNK_PRONOUNS.has(word) && !CHUNK_VERB_PREFIXES.has(word))) break;
          const determiner = CHUNK_DETERMINERS.has(word) || CHUNK_POSSESSIVES.has(word) || /^l[’']/u.test(word);
          const complement = /^(?:du|des|d[’'])/u.test(word) || /^(?:de|du|des)$/u.test(clean[left - 1]);
          const coordinated = clean[left - 1] === 'et' && lastFinite < 0;
          if (determiner && !complement && !coordinated && left < verbStart) break;
        }
      }

      if (verbStart - subjectStart >= 5) costs[verbStart] = -5;
      if (startsWithSubject && relative > 0 && lastFinite > relative && firstFinite === lastFinite &&
          !words.slice(0, index).some(word => CHUNK_PUNCTUATION.test(word))) {
        // In a long subject, give the relative and the main verb room to breathe.
        costs[relative] = -5;
        costs[verbStart] = -5;
      }
      const negative = clean.slice(verbStart, index + 1).some(word => word === 'ne' || /^n[’']/u.test(word));
      if (negative && CHUNK_NEGATION.has(clean[index + 1]) && !CHUNK_PUNCTUATION.test(words[index])) costs[index + 1] = Infinity;
    }
    if (finite) lastFinite = index;

    const compound = verb === 'avoir' || verb === 'être';
    if (!compound && !CHUNK_MODAL_VERBS.has(verb || PARTICIPLES.get(bare))) continue;
    let end = index + 1;
    while (end < clean.length && !CHUNK_PUNCTUATION.test(words[end - 1])) {
      if (CHUNK_VERB_ADVERBS.has(clean[end]) || CHUNK_VERB_PREFIXES.has(clean[end])) end++;
      else if (clean[end] === 'sans' && clean[end + 1] === 'doute') end += 2;
      else break;
    }
    if (end === clean.length || CHUNK_PUNCTUATION.test(words[end - 1])) continue;
    const target = forms[end].bare;
    const matches = compound
      ? PARTICIPLES.has(target) || CHUNK_PARTICIPLE_ENDING.test(target) || /^(?:été|eu|dit|dits|dites|ouvert|offert|mort|né)[es]*$/u.test(target)
      : CHUNK_INFINITIVE.test(target);
    if (matches) {
      for (let cut = index + 1; cut <= end; cut++) costs[cut] = Infinity;
    }
  }
}

function chunkBoundaries(words, vocabulary = []) {
  const clean = words.map(word => word.toLocaleLowerCase('fr').replace(/^[«“(\[]+|[»”)\],:;.!?…]+$/gu, ''));
  const costs = Array(words.length + 1).fill(0);
  for (let cut = 1; cut < words.length; cut++) {
    const [previous, before, after, next] = [clean[cut - 2], clean[cut - 1], clean[cut], clean[cut + 1]];
    if (CHUNK_PUNCTUATION.test(words[cut - 1])) {
      costs[cut] = -4;
    } else if (CHUNK_DETERMINERS.has(before) || CHUNK_POSSESSIVES.has(before) ||
        CHUNK_CONJUNCTIONS.has(before) || CHUNK_PRONOUNS.has(before) ||
        CHUNK_SUBJECT_INTRODUCERS.has(before) || before === 'qui' ||
        CHUNK_DEGREE.has(before) ||
        (CHUNK_ADJECTIVES.test(before) && (CHUNK_DETERMINERS.has(previous) || CHUNK_POSSESSIVES.has(previous) || previous === 'de'))) {
      costs[cut] = Infinity;
    } else if (before === 'à' && CHUNK_INFINITIVE.test(after)) {
      costs[cut] = -2;
    } else if (CHUNK_PREPOSITIONS.has(before)) {
      costs[cut] = 8;
    } else if (CHUNK_CONJUNCTIONS.has(after)) {
      costs[cut] = -4;
    } else if (CHUNK_POSSESSIVES.has(after) || (after === 'de' && CHUNK_ADJECTIVES.test(next))) {
      costs[cut] = -3;
    } else if (/^(?:(?:me|te|se|y|en)$|[mts][’'])/u.test(after) &&
        (CHUNK_DETERMINERS.has(previous) || CHUNK_POSSESSIVES.has(previous))) {
      costs[cut] = 3;
    } else if (CHUNK_PRONOUNS.has(after) || /^(?:j|m|s|t|n)[’']/u.test(after)) {
      costs[cut] = -1.5;
    }
  }

  protectVerbGroups(words, clean, costs);

  for (let start = 0; start < clean.length; start++) {
    for (const expression of CHUNK_EXPRESSIONS) {
      if (!expression.every((word, offset) => clean[start + offset] === word)) continue;
      const end = start + expression.length;
      for (let cut = start + 1; cut < end; cut++) costs[cut] = Infinity;
      if (end < clean.length && CHUNK_DEPENDENT_LINKS.has(expression.join(' '))) costs[end] = Infinity;
      if (start && costs[start] !== Infinity) costs[start] = Math.min(costs[start], -6);
    }
  }
  return protectVocabularyBoundaries(words, clean, costs, vocabulary);
}

function protectVocabularyBoundaries(words, clean, costs, vocabulary) {
  if (!vocabulary.length) return costs;
  const normalized = clean.map(word => word.replaceAll('’', "'"));
  for (let start = 0; start < clean.length; start++) {
    const phrase = vocabulary.find(phrase => phrase.every((word, offset) =>
      normalized[start + offset] === word && (offset === 0 || !CHUNK_PUNCTUATION.test(words[start + offset - 1]))));
    if (!phrase) continue;
    const end = start + phrase.length;
    for (let cut = start + 1; cut < end; cut++) costs[cut] = Infinity;
    for (const cut of [start, end]) {
      if (cut > 0 && cut < clean.length && costs[cut] !== Infinity) costs[cut] = Math.min(costs[cut], -7);
    }
    start = end - 1;
  }
  return costs;
}

const SPANISH_CHUNK_LINKS = new Set(
  'a al ante bajo con contra de del desde durante en entre hacia hasta para por según sin sobre tras el la los las un una unos unas mi mis tu tus su sus nuestro nuestra nuestros nuestras este esta estos estas ese esa esos esas y e o u ni que si aunque porque cuando mientras como donde me te se nos os lo le les no yo tú él ella nosotros vosotros ellos ellas usted ustedes'.split(' ')
);
const SPANISH_CHUNK_AUXILIARIES = new Set('he has ha hemos habéis han había habías habíamos habían habría habríais habrían'.split(' '));

function spanishChunkBoundaries(words, vocabulary) {
  const clean = words.map(word => word.toLocaleLowerCase('es').replace(/^[¿¡«“(\[]+|[»”)\],:;.!?…]+$/gu, ''));
  const costs = Array(words.length + 1).fill(0);
  for (let cut = 1; cut < words.length; cut++) {
    const before = clean[cut - 1];
    const after = clean[cut];
    if (CHUNK_PUNCTUATION.test(words[cut - 1])) costs[cut] = -5;
    else if (SPANISH_CHUNK_LINKS.has(before) || SPANISH_CHUNK_AUXILIARIES.has(before)) costs[cut] = Infinity;
    else if (/^(?:y|pero|porque|aunque|para|mientras|cuando|desde)$/u.test(after)) costs[cut] = -3;
  }
  return protectVocabularyBoundaries(words, clean, costs, vocabulary);
}

function shortPhraseGroups(phrase, vocabulary = [], language = 'fr') {
  const words = phrase.match(/\S+(?:[ \t]+[?!:;,…]+(?=\s|$))?/gu) || [];
  if (!words.length) return [];

  // Five words is a target. Extend to the next boundary when a phrase needs more room.
  const boundaries = language === 'es' ? spanishChunkBoundaries(words, vocabulary) : chunkBoundaries(words, vocabulary);
  const costs = Array(words.length + 1).fill(Infinity);
  const nextCuts = Array(words.length);
  costs[words.length] = 0;
  for (let start = words.length - 1; start >= 0; start--) {
    for (let end = start + 1; end <= words.length; end++) {
      if (boundaries[end] === Infinity) continue;
      const size = end - start;
      const lengthCost = size === 1 ? 8 : 1 + 0.45 * (size - 3.5) ** 2;
      const cost = lengthCost + boundaries[end] + costs[end];
      if (cost < costs[start]) {
        costs[start] = cost;
        nextCuts[start] = end;
      }
      if (size >= 5) break;
    }
  }
  const groups = [];
  for (let start = 0; start < words.length; start = nextCuts[start]) {
    groups.push(words.slice(start, nextCuts[start]).join(' '));
  }
  return groups;
}

function suggestChunks(text) {
  return clauseChunks(text).flatMap(phrase => shortPhraseGroups(phrase));
}
