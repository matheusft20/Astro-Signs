export interface ZodiacSignInfo {
  sign: string;
  dateRange: string;
  element: string;
  rulingPlanet: string;
  description: string;
  compatibility: string[];
}

const zodiacSigns: ZodiacSignInfo[] = [
  {
    sign: 'Áries',
    dateRange: '21 de Março - 19 de Abril',
    element: 'Fogo',
    rulingPlanet: 'Marte',
    description: 'Áries é um líder apaixonado, motivado e confiante que constrói comunidade com sua disposição alegre e determinação incansável. Sem complicações e direto em sua abordagem, frequentemente se frustra com detalhes exaustivos e nuances desnecessárias.',
    compatibility: ['Leão', 'Sagitário', 'Gêmeos', 'Aquário']
  },
  {
    sign: 'Touro',
    dateRange: '20 de Abril - 20 de Maio',
    element: 'Terra',
    rulingPlanet: 'Vênus',
    description: 'Touro é um signo da terra representado pelo touro. Como seu animal espiritual celestial, os taurinos gostam de relaxar em ambientes serenos e bucólicos, rodeados por sons suaves, aromas calmantes e sabores suculentos. São pessoas estáveis, confiáveis e valorizam a estabilidade.',
    compatibility: ['Virgem', 'Capricórnio', 'Câncer', 'Peixes']
  },
  {
    sign: 'Gêmeos',
    dateRange: '21 de Maio - 20 de Junho',
    element: 'Ar',
    rulingPlanet: 'Mercúrio',
    description: 'Gêmeos é expressivo e perspicaz, representando duas personalidades diferentes em uma, e você nunca saberá qual delas irá encontrar. São sociáveis, comunicativos e prontos para diversão, com tendência a ficar repentinamente sérios, pensativos e inquietos.',
    compatibility: ['Libra', 'Aquário', 'Áries', 'Leão']
  },
  {
    sign: 'Câncer',
    dateRange: '21 de Junho - 22 de Julho',
    element: 'Água',
    rulingPlanet: 'Lua',
    description: 'Câncer é um signo cardinal de água. Representado pelo caranguejo, este crustáceo oceânico move-se perfeitamente entre o mar e a costa, representando a capacidade de Câncer de existir tanto no reino emocional quanto no material. São altamente intuitivos e suas habilidades psíquicas se manifestam em espaços tangíveis.',
    compatibility: ['Escorpião', 'Peixes', 'Touro', 'Virgem']
  },
  {
    sign: 'Leão',
    dateRange: '23 de Julho - 22 de Agosto',
    element: 'Fogo',
    rulingPlanet: 'Sol',
    description: 'Leão é celebrado como o signo dramático, criativo e real do zodíaco. Os leoninos são apaixonados, leais e notoriamente dramáticos. São ferozmente orgulhosos e confiantes. Adoram ser o centro das atenções e são líderes naturais.',
    compatibility: ['Áries', 'Sagitário', 'Gêmeos', 'Libra']
  },
  {
    sign: 'Virgem',
    dateRange: '23 de Agosto - 22 de Setembro',
    element: 'Terra',
    rulingPlanet: 'Mercúrio',
    description: 'Virgem é um signo da terra historicamente representado pela deusa do trigo e da agricultura. Este signo da terra é prático, analítico e tem uma forte atenção aos detalhes. Os virginianos são lógicos, práticos e sistemáticos em sua abordagem da vida.',
    compatibility: ['Touro', 'Capricórnio', 'Câncer', 'Escorpião']
  },
  {
    sign: 'Libra',
    dateRange: '23 de Setembro - 22 de Outubro',
    element: 'Ar',
    rulingPlanet: 'Vênus',
    description: 'Libra é um signo do ar representado pela balança, o único objeto inanimado do zodíaco. São obcecados por simetria e se esforçam para criar equilíbrio em todas as áreas da vida. São charmosos, diplomáticos e sociáveis, valorizando a harmonia e a justiça.',
    compatibility: ['Gêmeos', 'Aquário', 'Leão', 'Sagitário']
  },
  {
    sign: 'Escorpião',
    dateRange: '23 de Outubro - 21 de Novembro',
    element: 'Água',
    rulingPlanet: 'Plutão, Marte',
    description: 'Escorpião é um dos signos mais incompreendidos do zodíaco. Por causa de sua incrível paixão e poder, Escorpião é frequentemente confundido com um signo de fogo. Na verdade, é um signo de água que deriva sua força do reino psíquico e emocional. São complexos, secretos e transformadores.',
    compatibility: ['Câncer', 'Peixes', 'Virgem', 'Capricórnio']
  },
  {
    sign: 'Sagitário',
    dateRange: '22 de Novembro - 21 de Dezembro',
    element: 'Fogo',
    rulingPlanet: 'Júpiter',
    description: 'Sagitário é representado pelo arqueiro, e estes arqueiros estão sempre em busca de conhecimento. São otimistas, amantes da liberdade e intelectuais. São apaixonados por viagens, filosofia, religião e educação.',
    compatibility: ['Áries', 'Leão', 'Libra', 'Aquário']
  },
  {
    sign: 'Capricórnio',
    dateRange: '22 de Dezembro - 19 de Janeiro',
    element: 'Terra',
    rulingPlanet: 'Saturno',
    description: 'Capricórnio está escalando a montanha direto para o topo e sabe que paciência, perseverança e dedicação é o único caminho para escalar. São ambiciosos, determinados, materialistas e fortes. Conhecem o valor do dinheiro e são práticos e aterrados.',
    compatibility: ['Touro', 'Virgem', 'Escorpião', 'Peixes']
  },
  {
    sign: 'Aquário',
    dateRange: '20 de Janeiro - 18 de Fevereiro',
    element: 'Ar',
    rulingPlanet: 'Urano, Saturno',
    description: 'Aquário é representado pelo portador de água, o curandeiro místico que concede água, ou vida, à terra. São pensadores revolucionários, progressistas, originais e independentes. São pensadores profundos e altamente intelectuais que adoram lutar por causas que ajudam a humanidade.',
    compatibility: ['Gêmeos', 'Libra', 'Áries', 'Sagitário']
  },
  {
    sign: 'Peixes',
    dateRange: '19 de Fevereiro - 20 de Março',
    element: 'Água',
    rulingPlanet: 'Netuno, Júpiter',
    description: 'Peixes é o signo mais intuitivo, sensível e empático de todo o zodíaco — e isso porque é o último dos últimos. Peixes absorveu todas as lições — as alegrias e as dores, as esperanças e os medos — aprendidas por todos os outros signos. São sonhadores e espiritualistas, profundamente compassivos e empáticos.',
    compatibility: ['Câncer', 'Escorpião', 'Touro', 'Capricórnio']
  }
];

export function findZodiacSign(birthDate: Date): ZodiacSignInfo {
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();
  
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return zodiacSigns.find(sign => sign.sign === 'Aquário')!;
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return zodiacSigns.find(sign => sign.sign === 'Peixes')!;
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return zodiacSigns.find(sign => sign.sign === 'Áries')!;
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return zodiacSigns.find(sign => sign.sign === 'Touro')!;
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return zodiacSigns.find(sign => sign.sign === 'Gêmeos')!;
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return zodiacSigns.find(sign => sign.sign === 'Câncer')!;
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return zodiacSigns.find(sign => sign.sign === 'Leão')!;
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return zodiacSigns.find(sign => sign.sign === 'Virgem')!;
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return zodiacSigns.find(sign => sign.sign === 'Libra')!;
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return zodiacSigns.find(sign => sign.sign === 'Escorpião')!;
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return zodiacSigns.find(sign => sign.sign === 'Sagitário')!;
  } else {
    return zodiacSigns.find(sign => sign.sign === 'Capricórnio')!;
  }
}