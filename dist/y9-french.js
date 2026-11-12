const YEAR_NINE_FRENCH = (() => {
  const pairs = {};
  const input = (key, label, initial) => [key, label, 'text', initial];
  const select = (key, label, options) => {
    pairs[key] = new Map(options);
    return [key, label, 'select', options.map(([fr]) => fr).join('|')];
  };
  const openSelect = (key, label, options) => select(key, label, [...options, ['Other','']]);
  const numbers = (start, end) =>
    Array.from({length: end - start + 1}, (_, i) => [String(start + i), String(start + i)]);
  const months = [
    ['janvier','January'], ['février','February'], ['mars','March'],
    ['avril','April'], ['mai','May'], ['juin','June'], ['juillet','July'], ['août','August'],
    ['septembre','September'], ['octobre','October'], ['novembre','November'], ['décembre','December'],
  ];
  const qualities = [
    ['sympathique','nice'], ['drôle','funny'], ['timide','shy'], ['sportif','sporty'],
    ['sportive','sporty'], ['bavard','chatty'], ['bavarde','chatty'], ['gentil','kind'], ['gentille','kind'],
  ];
  const adjectives = [
    ['passionnant','exciting'], ['super','great'], ['difficile','difficult'],
    ['facile','easy'], ['bon pour la santé','good for your health'],
  ];
  const reasons = [
    ['j’adore ça','I love it'], ['j’aime passer du temps avec mes amis','I like spending time with my friends'],
    ['je me passionne pour le sport','I’m passionate about sport'], ['c’est mon passe-temps préféré','it’s my favourite hobby'],
  ];
  const connectors = [['parce que','because'], ['car','because'], ['puisque','since']];
  const pets = [['un chien','a dog'], ['un chat','a cat'], ['un lapin','a rabbit'], ['un hamster','a hamster'], ['un poisson','a fish']];
  const noExtra = ['',''];
  const familyOptions = [
    ['ma mère','my mum'], ['mon père','my dad'],
    ['mon grand frère','my older brother'], ['mon petit frère','my younger brother'],
    ['ma grande sœur','my older sister'], ['ma petite sœur','my younger sister'],
    ['mon frère jumeau','my twin brother'], ['ma sœur jumelle','my twin sister'],
    ['mon frère','my brother'], ['ma sœur','my sister'], ['mes deux frères','my two brothers'],
    ['ma grand-mère','my grandma'], ['mon grand-père','my grandad'],
    ['ma belle-mère','my stepmum'], ['mon beau-père','my stepdad'],
    ['ma tante','my aunt'], ['mon oncle','my uncle'],
    ['mon cousin','my cousin'], ['ma cousine','my cousin'],
  ];
  const previousFamilyChoices = {
    'mes parents, ma sœur et moi': ['ma mère','mon père','ma sœur'],
    'ma mère, mon frère et moi': ['ma mère','mon frère'],
    'mon père et moi': ['mon père'],
    'mes parents et moi': ['ma mère','mon père'],
    'mes parents, mes deux frères et moi': ['ma mère','mon père','mes deux frères'],
    '': [],
  };
  const familySelection = d => Array.isArray(d.familyPeople)
    ? d.familyPeople
    : previousFamilyChoices[d.familyMembers] ?? previousFamilyChoices['mes parents, ma sœur et moi'];

  function familyChecklist(label, d, escape) {
    const selected = familySelection(d);
    return `<fieldset class="family-checklist">
      <legend>${escape(label)}</legend>
      <div class="family-people">${familyOptions.map(([fr]) =>
        `<label lang="fr"><input type="checkbox" data-family-person value="${escape(fr)}"${selected.includes(fr) ? ' checked' : ''}> ${escape(fr)}</label>`
      ).join('')}</div>
    </fieldset>`;
  }

  function familyChunk(d) {
    const people = familyOptions.filter(([fr]) => familySelection(d).includes(fr));
    const extra = d.familyExtra.trim();
    if (extra) people.push([extra, d.familyExtraEnglish.trim() || 'my other relatives']);
    if (!people.length) return null;
    const joinWith = (members, conjunction, me) => members.join(', ') + ' ' + conjunction + ' ' + me;
    return {
      fr: 'Il y a ' + joinWith(people.map(([fr]) => fr), 'et', 'moi') + '.',
      en: 'That’s ' + joinWith(people.map(([,en]) => en), 'and', 'me') + '.',
    };
  }

  const groups = [
    {
      question: 'Comment tu t’appelles ? Comment ça s’écrit ?',
      fields: [input('first','First name','Alex'),input('nickname','What your friends call you','')],
    },
    {
      question: 'Il y a combien de personnes dans ta famille ?',
      fields: [
        select('familySize','Number of people',numbers(4,12).concat(numbers(1,3))),
        ['familyPeople','Who is in your family?', 'checklist', ''],
        input('familyExtra','Anyone else? (in French)',''),
        input('familyExtraEnglish','English meaning for Guided',''),
        select('getAlong','How do you get on?',[
          ['Je m’entends bien','I get on well'], ['Je m’entends mieux','I get on better'], ['Je ne m’entends pas bien','I don’t get on well'],
        ]),
        select('relative','With whom?',[
          ['avec ma sœur','with my sister'], ['avec mon frère','with my brother'], ['avec ma mère','with my mother'],
          ['avec mon père','with my father'], ['avec mes parents','with my parents'],
        ]),
      ],
    },
    {
      question: 'Tu as quel âge ? C’est quand ton anniversaire ?',
      fields: [
        select('age','Your age',numbers(13,18).concat(numbers(11,12))),
        select('birthdayDay','Birthday day',numbers(1,31)),
        select('birthdayMonth','Birthday month',months),
        select('birthdayFeeling','How do you feel about it?',[noExtra,
          ['J’ai hâte de fêter mon anniversaire','I’m looking forward to celebrating my birthday'],
          ['Je n’ai pas envie de fêter mon anniversaire','I don’t feel like celebrating my birthday'],
        ]),
      ],
    },
    {
      question: 'Comment s’appellent tes frères et sœurs ?',
      fields: [
        select('siblings','Brothers and sisters',[
          ['Ma sœur s’appelle','My sister is called'], ['Mon frère s’appelle','My brother is called'],
          ['Mes frères et sœurs s’appellent','My brothers and sisters are called'],
          ['Ma sœur aînée s’appelle','My older sister is called'], ['Mon frère cadet s’appelle','My younger brother is called'],
          ['Ma sœur jumelle s’appelle','My twin sister is called'], ['Mon frère jumeau s’appelle','My twin brother is called'],
          ['Je suis fils unique','I’m an only child'], ['Je suis fille unique','I’m an only child'],
        ]),
        input('siblingNames','Name(s), if applicable','Camille'),
      ],
    },
    {
      question: 'Tu as un animal domestique ?',
      fields: [
        select('pet','Pet you have',[...pets,['aucun animal','no pet']]),
        select('pastPet','Pet you used to have',[noExtra,...pets]),
        select('futurePet','Pet you will have or would like',[noExtra,...pets]),
        select('petFutureForm','Future or wish',[['j’aurai','I will have'],['j’aimerais avoir','I would like to have']]),
      ],
    },
    {
      question: 'Tu es comment ? Fais-moi une description d’un(e) de tes ami(e)s.',
      fields: [
        select('intensity','How much?',[
          ['plutôt','rather'], ['vraiment','really'], ['assez','quite'], ['un peu','a little'], ['trop','too'],
        ]),
        select('self','An adjective for you',qualities),
        select('selfExtension','Add a contrast',[noExtra,
          ['Je ne suis jamais en retard','I’m never late'],
          ['Je ne suis ni timide ni bavard','I’m neither shy nor chatty'],
          ['Je ne suis ni timide ni bavarde','I’m neither shy nor chatty'],
          ['J’aimerais être plus sportif','I’d like to be sportier'],
          ['J’aimerais être plus sportive','I’d like to be sportier'],
        ]),
        select('friend','Who are you describing?',[['Mon ami','My friend'],['Mon amie','My friend']]),
        input('friendName','Friend’s name',''),
        select('friendQuality','An adjective for your friend',qualities),
        select('friendExtension','Add a detail about your friend',[noExtra,
          ['Il a tendance à beaucoup parler','He tends to talk a lot'], ['Elle a tendance à beaucoup parler','She tends to talk a lot'],
          ['Il n’est jamais en retard','He’s never late'], ['Elle n’est jamais en retard','She’s never late'],
        ]),
      ],
    },
    {
      question: 'Qu’est-ce que tu fais avec tes amis après le collège ?',
      fields: [openSelect('afterSchool','What you normally do',[
        ['on bavarde','we chat'], ['on prend le bus','we take the bus'],
        ['on va chez Lindos pour acheter des collations','we go to Lindos to buy snacks'],
        ['on va au club de foot','we go to football club'], ['on va au club de volley','we go to volleyball club'],
        ['on va au club de netball','we go to netball club'], ['on va au club de cricket','we go to cricket club'],
        ['je ne fais rien de spécial et je rentre chez moi','I don’t do anything special and I go home'],
      ])],
    },
    {
      question: 'Qu’est-ce que tu vas faire samedi prochain ? Pourquoi ?',
      fields: [
        openSelect('nextSaturday','Next Saturday’s activity',[
          ['aller en ville','go into town'], ['faire du vélo','go cycling'],
          ['passer du temps avec mes amis','spend time with my friends'], ['jouer au foot','play football'],
          ['nager','go swimming'], ['faire de la voile','go sailing'],
          ['regarder un film sur Netflix','watch a film on Netflix'], ['surfer sur Internet','surf the internet'],
        ]),
        select('futureOpinion','What will it be like?',adjectives),
        select('futureConnector','Link your reason',connectors),
        openSelect('futureReason','Why?',reasons),
      ],
    },
    {
      question: 'Qu’est-ce que tu as fait avec tes amis le week-end dernier ?',
      fields: [
        openSelect('lastWeekendPlace','Where did you go?',[
          ['à Hamilton','to Hamilton'], ['à la plage','to the beach'], ['au stade','to the stadium'],
          ['chez mon ami','to my friend’s house'], ['chez mon amie','to my friend’s house'],
        ]),
        select('went','Form of “I went”',[['Je suis allé','I went'],['Je suis allée','I went']]),
        openSelect('pastSport','What did you play?',[
          ['au foot','football'], ['au squash','squash'], ['au cricket','cricket'], ['au rugby','rugby'], noExtra,
        ]),
        select('pastOpinion','What was it like?',adjectives),
        select('pastConnector','Link your reason',connectors),
        openSelect('pastReason','Why?',reasons),
      ],
    },
  ];

  function chunks(d, questionIndex, numberWord) {
    const result = [];
    const add = (fr,en) => result.push({fr,en});
    const french = key => d[key] === 'Other' ? (d[key + 'Custom']?.trim() || '…') : d[key];
    const english = key => d[key] === 'Other'
      ? (d[key + 'English']?.trim() || '…')
      : (pairs[key].get(d[key]) ?? '…');
    const choice = (key, punctuation = '') => add(french(key) + punctuation, english(key) + punctuation);
    const name = key => d[key].trim() || '…';
    switch (questionIndex) {
      case 0: {
        add('Je m’appelle ' + name('first') + '.', 'My name is ' + name('first') + '.');
        const spelling = [...name('first').toUpperCase()].filter(letter => /[\p{L}-]/u.test(letter)).join(' – ') || '…';
        add('Ça s’écrit ' + spelling + '.', 'It’s spelt ' + spelling + '.');
        if (d.nickname.trim()) add('Mes amis m’appellent ' + name('nickname') + '.', 'My friends call me ' + name('nickname') + '.');
        break;
      }
      case 1: {
        add('Dans ma famille, il y a ' + numberWord(d.familySize) + ' personne' + (d.familySize === '1' ? '' : 's') + '.',
            'In my family, there ' + (d.familySize === '1' ? 'is one person.' : 'are ' + d.familySize + ' people.'));
        const family = familyChunk(d);
        if (family) result.push(family);
        choice('getAlong');
        choice('relative','.');
        break;
      }
      case 2:
        add('J’ai ' + numberWord(d.age) + ' ans.', 'I’m ' + d.age + ' years old.');
        add('J’aurai ' + numberWord(Number(d.age) + 1) + ' ans', 'I’ll be ' + (Number(d.age) + 1));
        add('le ' + (d.birthdayDay === '1' ? 'premier' : numberWord(d.birthdayDay)) + ' ' + d.birthdayMonth + '.',
            'on ' + d.birthdayDay + ' ' + english('birthdayMonth') + '.');
        if (d.birthdayFeeling) choice('birthdayFeeling','.');
        break;
      case 3:
        if (d.siblings.startsWith('Je suis')) {
          add('Je n’ai ni frère ni sœur.', 'I don’t have any brothers or sisters.');
          choice('siblings','.');
        } else {
          add(d.siblings + ' ' + name('siblingNames') + '.', english('siblings') + ' ' + name('siblingNames') + '.');
        }
        break;
      case 4:
        if (d.pet === 'aucun animal') add('Je n’ai pas d’animal chez moi.', 'I don’t have a pet at home.');
        else add('Oui, j’ai ' + d.pet + '.', 'Yes, I have ' + english('pet') + '.');
        if (d.pastPet) add('Avant, j’avais ' + d.pastPet + '.', 'I used to have ' + english('pastPet') + '.');
        if (d.futurePet) add('Dans l’avenir, ' + d.petFutureForm + ' ' + d.futurePet + '.',
          'In the future, ' + english('petFutureForm') + ' ' + english('futurePet') + '.');
        break;
      case 5:
        add('Je suis ' + d.intensity + ' ' + d.self + '.', 'I’m ' + english('intensity') + ' ' + english('self') + '.');
        if (d.selfExtension) choice('selfExtension','.');
        add([d.friend,d.friendName.trim(),'est assez',d.friendQuality].filter(Boolean).join(' ') + '.',
          [english('friend'),d.friendName.trim(),'is quite',english('friendQuality')].filter(Boolean).join(' ') + '.');
        if (d.friendExtension) choice('friendExtension','.');
        break;
      case 6:
        add('Normalement,', 'Normally,');
        choice('afterSchool','.');
        break;
      case 7:
        add('Samedi prochain, je vais', 'Next Saturday, I’m going to');
        choice('nextSaturday','.');
        add('Je pense que ce sera ' + d.futureOpinion, 'I think it’ll be ' + english('futureOpinion'));
        add(d.futureConnector + ' ' + french('futureReason') + '.', english('futureConnector') + ' ' + english('futureReason') + '.');
        break;
      case 8:
        add('Le week-end dernier,', 'Last weekend,');
        add(d.went.toLowerCase() + ' ' + french('lastWeekendPlace') + '.', 'I went ' + english('lastWeekendPlace') + '.');
        if (d.pastSport) add('J’ai joué ' + french('pastSport') + '.', 'I played ' + english('pastSport') + '.');
        add('Je pense que c’était ' + d.pastOpinion, 'I think it was ' + english('pastOpinion'));
        add(d.pastConnector + ' ' + french('pastReason') + '.', english('pastConnector') + ' ' + english('pastReason') + '.');
        break;
    }
    return result;
  }

  return {groups,chunks,familyChecklist};
})();
