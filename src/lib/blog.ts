import type { Tratamento } from "./content";

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  dataISO: string;
  dataExibicao: string;
  resumo: string;
  respostaDireta: string;
  resumoRapido: string[];
  corpo: { titulo?: string; paragrafos: string[]; lista?: string[] }[];
  tabela?: { titulo: string; colunas: string[]; linhas: string[][] };
  tratamentoRelacionado?: Tratamento["slug"];
};

// Conteúdo de blog — rascunho inicial escrito para cobrir buscas de cauda longa
// (ex.: "faceta de resina dói", "quanto tempo dura lente de contato dental").
// Revisar clinicamente com o Dr. Vitor antes de considerar definitivo: prazos e
// faixas de tempo são as referências gerais mais comuns em material educativo
// odontológico, não promessas — tudo fica condicionado à avaliação, seguindo o
// mesmo padrão do restante do site.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "quanto-tempo-dura-lente-de-contato-dental",
    title: "Quanto tempo dura uma lente de contato dental (laminado cerâmico)?",
    metaDescription:
      "Entenda a durabilidade real de uma lente de contato dental (laminado cerâmico), o que influencia esse prazo e como cuidar do resultado.",
    dataISO: "2026-09-01",
    dataExibicao: "1 de setembro de 2026",
    resumo: "A durabilidade de uma lente de contato dental depende menos do material e mais do planejamento por trás dela.",
    respostaDireta:
      "De forma geral, laminados cerâmicos bem indicados e bem cuidados duram muitos anos — mas o prazo exato varia de paciente para paciente, por isso não existe um número único válido para todo mundo.",
    resumoRapido: [
      "A durabilidade depende mais do planejamento e do preparo do dente do que do material em si.",
      "Hábitos como roer unha, usar os dentes como ferramenta ou bruxismo não tratado reduzem a vida útil.",
      "Sinais de alerta — sensibilidade nova, trinca visível, borda solta — merecem avaliação, não espera.",
      "Manutenção regular com o dentista prolonga o resultado tanto quanto os cuidados em casa.",
    ],
    corpo: [
      {
        paragrafos: [
          "É uma das primeiras perguntas de quem considera lentes de contato dental: quanto tempo isso dura? A resposta honesta é que depende de mais coisas do que o material da lente em si — depende de como ela foi planejada, de como o dente foi preparado, e dos hábitos do paciente depois.",
        ],
      },
      {
        titulo: "O que mais influencia a durabilidade",
        paragrafos: [
          "Cerâmica é um material resistente, mas a durabilidade de uma lente de contato dental está muito ligada ao planejamento: proporção, espessura e o quanto de estrutura natural foi preservada no preparo. É por isso que, no Protocolo Leal, o resultado é planejado antes de qualquer desgaste — preservar o dente natural ao máximo tende a favorecer a durabilidade a longo prazo.",
          "Hábitos do dia a dia também pesam: roer unha, usar os dentes como ferramenta (abrir embalagem, morder objetos) ou bruxismo não tratado podem reduzir a vida útil de qualquer restauração, cerâmica ou não — nesses casos, uma placa de proteção noturna costuma ser parte do plano.",
        ],
      },
      {
        titulo: "Sinais de que vale reavaliar",
        paragrafos: ["Alguns sinais merecem uma consulta, mesmo sem dor:"],
        lista: [
          "Sensibilidade nova ao frio ou ao doce, num dente que não tinha isso antes",
          "Trinca, lasca ou borda que ficou áspera ao passar a língua",
          "Alteração perceptível de cor em relação aos dentes vizinhos",
          "Sensação de que a lente está \"solta\" ou se move",
        ],
      },
      {
        titulo: "Manutenção que ajuda a prolongar o resultado",
        paragrafos: [
          "Escovação e fio dental do jeito de sempre, sem produtos abrasivos demais, e as consultas de rotina — é nelas que pequenos desgastes ou o início de um problema são identificados antes de virar algo maior.",
        ],
      },
      {
        titulo: "Como isso é avaliado no seu caso",
        paragrafos: [
          "Na avaliação, o diagnóstico considera sua mordida, seus hábitos e a estrutura dos seus dentes antes de indicar laminados cerâmicos — é parte do que define se esse é o tratamento certo para o seu caso, e não outro.",
        ],
      },
    ],
    tratamentoRelacionado: "laminados-ceramicos",
  },
  {
    slug: "faceta-em-resina-ou-laminado-ceramico-qual-a-diferenca",
    title: "Faceta em resina ou laminado cerâmico: qual a diferença?",
    metaDescription:
      "Faceta em resina composta e laminado cerâmico resolvem problemas parecidos de formas diferentes. Entenda quando cada um é indicado.",
    dataISO: "2026-09-08",
    dataExibicao: "8 de setembro de 2026",
    resumo: "Nenhum dos dois é \"melhor\" de forma absoluta — a indicação certa depende do que o seu caso precisa.",
    respostaDireta:
      "A faceta em resina composta é feita diretamente no consultório, é mais conservadora e reversível; o laminado cerâmico é confeccionado sob medida em laboratório, exige um preparo mais específico e costuma ser indicado para casos que pedem mais estabilidade de cor e forma a longo prazo.",
    resumoRapido: [
      "Resina composta: feita na hora, no consultório, mais conservadora e reversível.",
      "Laminado cerâmico: feito em laboratório, preparo mais específico, mais estável a longo prazo.",
      "Resina tende a pigmentar um pouco mais com o tempo (café, vinho); cerâmica resiste melhor a manchas.",
      "A escolha certa depende do diagnóstico, não de preferência isolada por material.",
    ],
    corpo: [
      {
        paragrafos: [
          "É comum chegar à avaliação já com essa dúvida: faceta em resina ou laminado cerâmico? Os dois resolvem problemas parecidos — pequenas imperfeições, desalinhamento leve, cor irregular — mas de formas diferentes, e a escolha não é só estética.",
        ],
      },
      {
        titulo: "Facetas em resina composta",
        paragrafos: [
          "São feitas diretamente sobre o dente, no próprio consultório, com resina composta esculpida à mão. É uma alternativa mais conservadora e reversível aos laminados cerâmicos, com menor desgaste — geralmente indicada para correções mais pontuais, e o resultado sai no mesmo dia.",
        ],
      },
      {
        titulo: "Laminados cerâmicos",
        paragrafos: [
          "São confeccionados sob medida fora do consultório e cimentados depois, com um preparo mais específico do dente. Tendem a manter cor e forma de maneira mais estável ao longo do tempo, o que costuma pesar na indicação para casos mais amplos ou exigentes.",
        ],
      },
      {
        titulo: "Diferenças na prática",
        paragrafos: [],
        lista: [
          "Tempo de confecção: resina é feita na consulta; cerâmica passa por laboratório e leva mais de uma sessão",
          "Reversibilidade: resina pode ser removida/refeita com mais facilidade; cerâmica é uma decisão mais definitiva",
          "Resistência a manchas: cerâmica costuma manter a cor original por mais tempo",
          "Reparo: uma lasca em resina costuma ser reparada na mesma peça; em cerâmica, geralmente é trocada",
        ],
      },
      {
        titulo: "Como decidir",
        paragrafos: [
          "Essa decisão não deveria ser tomada antes de um diagnóstico — é exatamente o que a avaliação resolve: entender a estrutura do seu dente, a proporção do seu sorriso e o que o seu caso realmente precisa, antes de indicar um caminho.",
        ],
      },
    ],
    tratamentoRelacionado: "facetas-resina",
  },
  {
    slug: "como-funciona-o-implante-dentario-passo-a-passo",
    title: "Como funciona o implante dentário, do diagnóstico à cicatrização",
    metaDescription:
      "Um passo a passo geral de como funciona o processo de implante dentário: diagnóstico, cirurgia, cicatrização e prótese final.",
    dataISO: "2026-09-15",
    dataExibicao: "15 de setembro de 2026",
    resumo: "Entender as etapas do processo ajuda a chegar com menos ansiedade na avaliação.",
    respostaDireta:
      "De forma geral, o processo passa por diagnóstico com imagem (radiografia ou tomografia), cirurgia de instalação do implante, um período de cicatrização/integração ao osso, e só depois a instalação da prótese final — o tempo total varia de caso para caso.",
    resumoRapido: [
      "Diagnóstico com imagem (radiografia ou tomografia) para mapear osso e planejar a posição do implante.",
      "Cirurgia de instalação, geralmente feita com anestesia local em consultório.",
      "Cicatrização/osseointegração: o implante se integra ao osso antes da prótese final.",
      "Quando falta osso, um enxerto pode ser necessário antes ou junto do implante.",
      "Cuidados simples no pós-operatório imediato ajudam bastante na recuperação.",
    ],
    corpo: [
      {
        paragrafos: [
          "Implante dentário costuma gerar mais dúvidas do que outros tratamentos, provavelmente porque envolve uma cirurgia. Entender as etapas gerais ajuda a chegar com menos ansiedade na avaliação — mas vale lembrar que cada caso tem seu próprio plano, com seus próprios prazos.",
        ],
      },
      {
        titulo: "1. Diagnóstico",
        paragrafos: [
          "Antes de qualquer cirurgia, é preciso entender a estrutura óssea da região, a mordida e o histórico clínico, geralmente com auxílio de radiografia ou tomografia. É esse diagnóstico que define se o implante é indicado, e como ele deve ser planejado.",
        ],
      },
      {
        titulo: "2. Planejamento e cirurgia",
        paragrafos: [
          "O posicionamento do implante é planejado para devolver função de mastigação real — não só preencher o espaço do dente perdido — pensando também no resultado estético da prótese final. A cirurgia em si costuma ser feita em consultório, com anestesia local.",
        ],
      },
      {
        titulo: "3. Cicatrização (osseointegração)",
        paragrafos: [
          "Depois da cirurgia, existe um período em que o implante se integra ao osso — é esse processo biológico que dá estabilidade ao implante para receber a prótese depois. Esse prazo varia de pessoa para pessoa e é acompanhado de perto antes de seguir para a próxima etapa.",
        ],
      },
      {
        titulo: "4. Prótese final",
        paragrafos: [
          "Só depois da cicatrização confirmada é que a prótese final — unitária, sobre implante, ou uma reabilitação mais ampla, conforme o caso — é planejada e instalada.",
        ],
      },
      {
        titulo: "Quando um enxerto ósseo entra no plano",
        paragrafos: [
          "Quando um dente foi perdido há muito tempo, é comum que o osso da região tenha reabsorvido parte do seu volume. Nesses casos, um enxerto ósseo — prévio ou junto com o implante — pode ser necessário para garantir uma base segura. Isso é identificado já no diagnóstico, e entra no plano de tratamento desde o início, não como uma surpresa no meio do caminho.",
        ],
      },
      {
        titulo: "Cuidados no pós-operatório imediato",
        paragrafos: ["Alguns cuidados simples ajudam bastante na recuperação dos primeiros dias:"],
        lista: [
          "Repouso relativo nas primeiras 48 horas, evitando esforço físico intenso",
          "Compressa fria do lado de fora do rosto, para ajudar a reduzir inchaço",
          "Alimentação mais pastosa e fria no primeiro dia",
          "Higiene bucal cuidadosa, sem pressionar a região operada",
          "Evitar cigarro e álcool durante a fase de cicatrização",
        ],
      },
    ],
    tabela: {
      titulo: "Visão geral das etapas (referência geral — seu plano pode variar)",
      colunas: ["Etapa", "O que acontece"],
      linhas: [
        ["Diagnóstico", "Exames de imagem, avaliação óssea e planejamento da posição do implante"],
        ["Cirurgia", "Instalação do implante, geralmente em consultório, com anestesia local"],
        ["Cicatrização", "Integração do implante ao osso — acompanhada de perto antes da próxima etapa"],
        ["Prótese final", "Confecção e instalação da prótese sobre o implante já integrado"],
      ],
    },
    tratamentoRelacionado: "implantes-dentarios",
  },
  {
    slug: "protese-dentaria-incomoda-no-dia-a-dia",
    title: "Prótese dentária incomoda no dia a dia? O que esperar da adaptação",
    metaDescription:
      "Uma prótese dentária bem planejada não deveria atrapalhar sua rotina. Entenda o que é normal no período de adaptação e o que não é.",
    dataISO: "2026-09-22",
    dataExibicao: "22 de setembro de 2026",
    resumo: "Algum estranhamento nos primeiros dias é esperado — incômodo constante depois disso, não.",
    respostaDireta:
      "É normal sentir algum estranhamento nos primeiros dias com uma prótese nova, especialmente ao falar e mastigar; o que não é esperado é um incômodo constante depois do período inicial de adaptação — isso costuma indicar que algum ajuste é necessário.",
    resumoRapido: [
      "Estranhamento nos primeiros dias (fala, mastigação) é esperado.",
      "Dor persistente, feridas recorrentes ou dificuldade semanas depois não são normais — pedem ajuste.",
      "Prótese removível, fixa ou sobre implante têm níveis de adaptação diferentes.",
      "Pequenos hábitos no início (mastigar dos dois lados, ler em voz alta) ajudam a acelerar a adaptação.",
    ],
    corpo: [
      {
        paragrafos: [
          "Essa é uma preocupação comum, especialmente de quem nunca usou prótese antes: vou conseguir viver normalmente com isso? A resposta depende muito do tipo de prótese e de como ela foi planejada — mas existe uma diferença importante entre o estranhamento inicial normal e um incômodo que não deveria continuar.",
        ],
      },
      {
        titulo: "O que é esperado no início",
        paragrafos: [
          "Nos primeiros dias, é comum notar a prótese ao falar ou mastigar — é uma peça nova na boca, e a adaptação leva um tempo. Esse período costuma ser acompanhado de perto justamente para ajustar o que for preciso.",
        ],
      },
      {
        titulo: "O que não é esperado",
        paragrafos: [
          "Dor persistente, feridas recorrentes ou dificuldade de mastigar semanas depois da instalação não são \"normais de se acostumar\" — geralmente indicam que algum ajuste pontual é necessário, e o acompanhamento serve exatamente para resolver isso.",
        ],
      },
      {
        titulo: "Tipos de prótese e o que muda no conforto",
        paragrafos: [
          "Prótese fixa (cimentada ou sobre implante) costuma ter uma sensação mais próxima do dente natural. Prótese removível pede mais adaptação de fala e mastigação no início, mas é a opção correta para vários casos. Nenhuma é \"melhor\" de forma isolada — o que muda é a indicação certa para o que o seu caso precisa.",
        ],
      },
      {
        titulo: "O que ajuda a acelerar a adaptação",
        paragrafos: [],
        lista: [
          "Começar com alimentos mais macios e ir aumentando a consistência aos poucos",
          "Mastigar dos dois lados da boca, não só de um",
          "Praticar a fala em voz alta nos primeiros dias, se notar dificuldade",
          "Manter as consultas de ajuste — pequenos incômodos resolvidos cedo evitam desconforto maior depois",
        ],
      },
      {
        titulo: "O papel do planejamento",
        paragrafos: [
          "Prótese removível, fixa ou sobre implante — a indicação certa para cada caso é o que mais influencia o conforto no dia a dia. É por isso que essa decisão parte de uma avaliação, e não de uma escolha genérica.",
        ],
      },
    ],
    tratamentoRelacionado: "proteses",
  },
  {
    slug: "quanto-tempo-demora-uma-reabilitacao-oral-completa",
    title: "Quanto tempo demora uma reabilitação oral completa?",
    metaDescription:
      "Reabilitação oral completa é um processo em etapas, não um procedimento único. Entenda o que influencia o prazo total do tratamento.",
    dataISO: "2026-09-29",
    dataExibicao: "29 de setembro de 2026",
    resumo: "Não existe um prazo padrão — existe um plano em etapas, construído para o seu caso.",
    respostaDireta:
      "Reabilitação oral completa não tem um prazo fixo: o tempo total depende de quantos dentes e estruturas estão envolvidos, e de quais tratamentos combinados (implantes, próteses, restaurações) o caso exige — por isso o plano é construído em etapas, com prazos definidos na avaliação.",
    resumoRapido: [
      "Não existe prazo padrão — o tempo depende da extensão e da combinação de tratamentos envolvidos.",
      "Casos com implante têm o período de cicatrização como parte natural do cronograma.",
      "O plano é dividido em fases, com prioridades claras desde o início.",
      "Acompanhamento entre as fases é o que garante que o resultado final funcione como esperado.",
    ],
    corpo: [
      {
        paragrafos: [
          "Reabilitação oral é, por definição, um tratamento para casos mais amplos — perda de múltiplos dentes, desgaste extenso, alterações de mordida. Justamente por isso, não existe um número de semanas ou meses que sirva para todo mundo.",
        ],
      },
      {
        titulo: "Por que o prazo varia tanto",
        paragrafos: [
          "O tempo total depende de quantos dentes e estruturas estão envolvidos, se o caso exige implantes (que têm seu próprio período de cicatrização), próteses, ou tratamentos restauradores — e da ordem em que essas etapas precisam acontecer.",
        ],
      },
      {
        titulo: "Como as fases costumam se organizar",
        paragrafos: [
          "De forma geral, um caso de reabilitação passa por uma fase de diagnóstico e planejamento, uma fase cirúrgica/restauradora (que pode ter mais de uma etapa, dependendo do que for necessário) e uma fase de acompanhamento e ajustes finos, até o resultado se estabilizar.",
        ],
      },
      {
        titulo: "O que pode alongar o cronograma",
        paragrafos: [],
        lista: [
          "Necessidade de tratar problemas de saúde bucal antes de começar (cáries, gengiva)",
          "Casos que envolvem enxerto ósseo antes de implantes",
          "Número de dentes e arcos envolvidos",
          "Tempo de cicatrização individual, que varia de pessoa para pessoa",
        ],
      },
      {
        titulo: "Como isso é comunicado no seu caso",
        paragrafos: [
          "O diferencial não é prometer um prazo genérico — é construir um plano em etapas, com prioridades claras, para que você entenda a sequência do tratamento antes de começar, não durante.",
        ],
      },
    ],
    tratamentoRelacionado: "reabilitacao-oral",
  },
  {
    slug: "clareamento-dental-quem-pode-fazer",
    title: "Clareamento dental: quem pode fazer e o que esperar do resultado",
    metaDescription:
      "Nem todo escurecimento dental responde da mesma forma ao clareamento. Entenda quem costuma se beneficiar e como o resultado é avaliado.",
    dataISO: "2026-10-06",
    dataExibicao: "6 de outubro de 2026",
    resumo: "Clareamento funciona bem para a maioria — mas não é a resposta para todo tipo de escurecimento dental.",
    respostaDireta:
      "O clareamento dental costuma funcionar bem para escurecimento causado por hábitos (café, cigarro, envelhecimento natural do esmalte), mas manchas de origem interna ao dente — por trauma ou por certos medicamentos, por exemplo — podem responder menos, e às vezes pedem outra abordagem.",
    resumoRapido: [
      "Funciona bem para escurecimento por hábitos (café, vinho, cigarro) e envelhecimento natural do esmalte.",
      "Manchas de origem interna (trauma, alguns medicamentos) podem responder menos ao clareamento convencional.",
      "Sensibilidade nos dias seguintes é comum e costuma passar — é acompanhada no seu retorno.",
      "Evitar alimentos e bebidas muito pigmentados nos primeiros dias ajuda a manter o resultado.",
    ],
    corpo: [
      {
        paragrafos: [
          "Clareamento é, muitas vezes, o primeiro tratamento que vem à cabeça de quem quer um sorriso mais uniforme — e faz sentido: é um dos procedimentos mais conservadores que existem. Mas nem todo tipo de escurecimento responde da mesma forma.",
        ],
      },
      {
        titulo: "Quando costuma funcionar bem",
        paragrafos: [
          "Escurecimento causado por hábitos do dia a dia — café, vinho, cigarro — ou pelo envelhecimento natural do esmalte costuma responder bem ao clareamento.",
        ],
      },
      {
        titulo: "Quando pode não ser suficiente",
        paragrafos: [
          "Manchas de origem interna ao dente, causadas por trauma antigo ou por alguns medicamentos usados na infância, por exemplo, podem responder menos ao clareamento convencional — nesses casos, outra abordagem estética pode ser mais indicada.",
        ],
      },
      {
        titulo: "Tipos de clareamento",
        paragrafos: [
          "De forma geral, existe o clareamento feito em consultório (mais concentrado, com acompanhamento direto) e o supervisionado para casa, com moldeira feita sob medida. A indicação entre um e outro — ou uma combinação dos dois — depende do seu caso e do resultado esperado.",
        ],
      },
      {
        titulo: "Cuidados depois do clareamento",
        paragrafos: [],
        lista: [
          "Alguma sensibilidade ao frio nos primeiros dias é comum e costuma passar sozinha",
          "Evitar alimentos e bebidas muito pigmentados (café, vinho, molho de tomate) nos primeiros dias",
          "Manter a escovação e o fio dental normalmente",
          "Relatar sensibilidade que persista além do esperado no seu retorno",
        ],
      },
      {
        titulo: "Por que isso é avaliado antes",
        paragrafos: [
          "Antes de indicar clareamento ou qualquer outro tratamento estético, a avaliação identifica a causa do escurecimento — é isso que define se o clareamento resolve, ou se o seu caso pede outro caminho dentro da estética dental.",
        ],
      },
    ],
    tratamentoRelacionado: "estetica-dental",
  },
];
