const SPANISH_IGCSE_PRACTICE = [{
  id: 'A1',
  title: 'A1 · Life in the town and rural life',
  store: 'atelier-igcse-es-a1-v1',
  questions: SPANISH_IGCSE_TOPICS[0].subtopics.find(item => item.code === 'A1').questions.map((item, index) => ({
    ...item, id: 301 + index, core: index + 1,
  })),
}];

const SPANISH_IGCSE_CONNECTIVES = [
  ['y', 'and'], ['pero', 'but'], ['porque', 'because'], ['también', 'also'],
  ['sin embargo,', 'however'], ['por eso', 'so / for that reason'],
  ['por ejemplo,', 'for example'], ['además,', 'in addition'], ['aunque', 'although'],
  ['antes', 'before'], ['ahora', 'now'], ['en el futuro', 'in the future'],
];

const SPANISH_IGCSE_VOCABULARY = {
  301: [
    ['Decir dónde vives',
      ['Lugar', ['vivo en las Bermudas', 'I live in Bermuda'], ['vivo en Warwick', 'I live in Warwick'],
        ['vivo cerca del mar', 'I live near the sea'], ['vivo en un barrio tranquilo', 'I live in a quiet neighbourhood'],
        ['a las afueras de la ciudad', 'on the outskirts of town']],
      ['Descripción', ['hay muchas zonas verdes', 'there are lots of green spaces'],
        ['mi casa está cerca del colegio', 'my house is near school'], ['conozco a mis vecinos', 'I know my neighbours']]],
    ['Decir desde cuándo',
      ['Duración', ['desde hace tres años', 'for three years'], ['desde que nací', 'since I was born'],
        ['toda mi vida', 'all my life'], ['hace dos años que vivo aquí', 'I’ve lived here for two years']],
      ['Un detalle', ['antes vivía en otro barrio', 'I used to live in another neighbourhood'],
        ['me mudé con mi familia', 'I moved with my family']]],
  ],
  302: [
    ['Explicar lo mejor',
      ['Ventajas', ['las playas son preciosas', 'the beaches are beautiful'], ['la gente es amable', 'people are friendly'],
        ['puedo nadar en el mar', 'I can swim in the sea'], ['todo está bastante cerca', 'everything is fairly close'],
        ['hay mucho que hacer al aire libre', 'there is plenty to do outdoors']]],
    ['Explicar lo peor',
      ['Inconvenientes', ['la vida es cara', 'life is expensive'], ['hay mucho tráfico', 'there is a lot of traffic'],
        ['hay pocas tiendas', 'there are few shops'], ['a veces me aburro', 'I sometimes get bored'],
        ['no siempre es fácil desplazarse', 'getting around isn’t always easy']],
      ['Para comparar', ['por un lado', 'on the one hand'], ['por otro lado', 'on the other hand']]],
  ],
  303: [
    ['Describir cómo era antes',
      ['Imperfecto', ['antes era más tranquilo', 'it used to be quieter'], ['había menos tráfico', 'there was less traffic'],
        ['había más espacios verdes', 'there were more green spaces'], ['las tiendas eran más pequeñas', 'the shops were smaller'],
        ['jugaba en la calle', 'I used to play in the street']]],
    ['Explicar qué ha cambiado',
      ['Cambios', ['ha cambiado mucho', 'it has changed a lot'], ['han construido más casas', 'they have built more houses'],
        ['han abierto tiendas nuevas', 'new shops have opened'], ['el transporte ha mejorado', 'transport has improved'],
        ['ahora hay más gente', 'there are more people now'], ['no ha cambiado mucho', 'it hasn’t changed much']]],
  ],
  304: [
    ['Imaginar dónde vivirías',
      ['Lugares', ['me gustaría vivir en España', 'I’d like to live in Spain'], ['preferiría vivir en una ciudad pequeña', 'I’d prefer to live in a small town'],
        ['quisiera quedarme en las Bermudas', 'I’d like to stay in Bermuda'], ['cerca de mi familia', 'near my family'],
        ['en el campo', 'in the countryside'], ['en el extranjero', 'abroad']]],
    ['Dar tus razones',
      ['Razones', ['para conocer otra cultura', 'to get to know another culture'], ['para estar cerca de la naturaleza', 'to be close to nature'],
        ['habría más oportunidades', 'there would be more opportunities'], ['podría viajar más', 'I could travel more'],
        ['me sentiría como en casa', 'I would feel at home']]],
  ],
  305: [
    ['Proponer un cambio',
      ['Condicional', ['pondría más autobuses', 'I’d provide more buses'], ['crearía más carriles bici', 'I’d create more cycle lanes'],
        ['construiría un centro deportivo', 'I’d build a sports centre'], ['plantaría más árboles', 'I’d plant more trees'],
        ['mejoraría los parques', 'I’d improve the parks']]],
    ['Explicar el resultado',
      ['Ventajas', ['habría menos contaminación', 'there would be less pollution'], ['sería más fácil ir al colegio', 'it would be easier to get to school'],
        ['los jóvenes tendrían más opciones', 'young people would have more options'], ['la gente podría moverse a pie', 'people could get around on foot'],
        ['para reducir el tráfico', 'to reduce traffic']]],
  ],
};

const SPANISH_IGCSE_LEVEL_UP = {
  301: [
    ['Llevo… viviendo aquí.', 'I’ve been living here for…', 'Pon una duración después de «llevo».', [
      ['Llevo tres años viviendo aquí.', 'I’ve been living here for three years.'],
    ]],
    ['Lo que más me gusta de donde vivo es…', 'What I like most about where I live is…', 'Añade un detalle concreto.'],
  ],
  302: [
    ['Aunque vivir aquí sea caro, …', 'Although living here may be expensive, …', 'Usa «sea», el subjuntivo de «ser», y añade una ventaja.', [
      ['Aunque vivir aquí sea caro, me encanta estar cerca del mar.', 'Although living here may be expensive, I love being near the sea.'],
      ['Aunque el transporte sea lento, prefiero tomar el autobús.', 'Although transport may be slow, I prefer taking the bus.'],
    ]],
    ['Por un lado…, pero por otro lado…', 'On the one hand…, but on the other hand…', 'Da una ventaja y un inconveniente.'],
  ],
  303: [
    ['Antes había…, mientras que ahora…', 'There used to be…, whereas now…', 'Usa el imperfecto para antes y el presente para ahora.'],
    ['Lo que más ha cambiado es…', 'What has changed most is…', 'Nombra un cambio concreto y explica su efecto.'],
  ],
  304: [
    ['Si tuviera la oportunidad, me mudaría a…', 'If I had the chance, I’d move to…', 'Combina «tuviera» con el condicional «me mudaría».'],
    ['Me gustaría vivir en un lugar donde pueda…', 'I’d like to live somewhere where I can…', 'Usa «pueda», el subjuntivo de «poder», y añade un infinitivo.', [
      ['pueda estar cerca de mi familia', 'I can be close to my family'],
      ['pueda desplazarme a pie', 'I can get around on foot'],
    ]],
  ],
  305: [
    ['Si pudiera cambiar una cosa, …', 'If I could change one thing, …', 'Después de la coma, usa el condicional.', [
      ['pondría más autobuses', 'I would provide more buses'],
      ['crearía más zonas verdes', 'I would create more green spaces'],
    ]],
    ['Esto permitiría que…', 'This would allow…', 'Añade un sujeto y un verbo en imperfecto de subjuntivo.', [
      ['los jóvenes se desplazaran con más facilidad', 'young people to get around more easily'],
      ['las familias tuvieran más espacios para jugar', 'families to have more spaces to play'],
    ]],
  ],
};
