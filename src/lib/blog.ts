import type { Tratamento } from "./content";

export type Referencia = {
  autores: string;
  titulo: string;
  revista: string;
  ano: string;
  volume: string;
  doi: string;
  pmid: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription: string;
  dataISO: string;
  dataExibicao: string;
  resumo: string;
  respostaDireta: string;
  resumoRapido: string[];
  corpo: { titulo?: string; paragrafos: string[]; lista?: string[] }[];
  tabela?: { titulo: string; colunas: string[]; linhas: string[][] };
  referencias?: Referencia[];
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
    referencias: [
      { autores: "Klein P, Spitznagel FA, Zembic A, et al.", titulo: "Survival and Complication Rates of Feldspathic, Leucite-Reinforced, Lithium Disilicate and Zirconia Ceramic Laminate Veneers: A Systematic Review and Meta-Analysis.", revista: "J Esthet Restor Dent", ano: "2024", volume: "37(3):601-619", doi: "10.1111/jerd.13351", pmid: "39523553" },
      { autores: "Ferrairo BM, de Azevedo-Silva LJ, Minim PR, et al.", titulo: "Biomechanical consideration in tooth-supported glass-ceramic restorations: A systematic review and meta-analysis of survival rates and irreparable failures.", revista: "J Prosthet Dent", ano: "2024", volume: "132(5):879.e1-879.e13", doi: "10.1016/j.prosdent.2024.05.007", pmid: "38849264" },
    ],
    title: "Quanto tempo dura uma lente de contato dental (laminado cerâmico)?",
    metaTitle: "Quanto tempo dura a lente de contato dental?",
    metaDescription:
      "Entenda a durabilidade real de uma lente de contato dental (laminado cerâmico), o que influencia esse prazo e como cuidar do resultado.",
    dataISO: "2026-09-01",
    dataExibicao: "1 de setembro de 2026",
    resumo: "A durabilidade de uma lente de contato dental depende menos do material e mais do planejamento por trás dela.",
    respostaDireta:
      "De forma geral, laminados cerâmicos bem indicados e bem cuidados duram muitos anos — mas o prazo exato varia de paciente para paciente, por isso não existe um número único válido para todo mundo.",
    resumoRapido: [
      "A durabilidade depende do planejamento, do preparo do dente e da escolha do material, avaliados caso a caso.",
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
          "Revisões sistemáticas indexadas no PubMed, que reúnem estudos clínicos com acompanhamento de vários anos, descrevem o desempenho de laminados cerâmicos em grupos de pacientes. Elas observam que o tipo de cerâmica pode influenciar a frequência de complicações e que ainda há poucos dados de longo prazo sobre laminados de zircônia. Por isso o material é escolhido caso a caso, na avaliação.",
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
          "Os estudos científicos descrevem resultados de grupos de pacientes, e não preveem o que acontecerá em um caso individual; por isso a avaliação clínica é o que define a indicação.",
        ],
      },
      {
        titulo: "A cerâmica pode lascar?",
        paragrafos: [
          "Pode acontecer, como em qualquer restauração, e o tipo de cerâmica pode influenciar a frequência de complicações. Hábitos como roer unha e ranger os dentes podem sobrecarregar a restauração, e o profissional avalia, caso a caso, se há necessidade de proteção. Se notar qualquer alteração, avise a clínica para avaliação.",
        ],
      },
    ],
    tratamentoRelacionado: "laminados-ceramicos",
  },
  {
    slug: "faceta-em-resina-ou-laminado-ceramico-qual-a-diferenca",
    referencias: [
      { autores: "Lim TW, Tan SK, Li KY, Burrow MF.", titulo: "Survival and complication rates of resin composite laminate veneers: a systematic review and meta-analysis.", revista: "J Evid Based Dent Pract", ano: "2023", volume: "23(4):101911", doi: "10.1016/j.jebdp.2023.101911", pmid: "38035903" },
      { autores: "Klein P, Spitznagel FA, Zembic A, et al.", titulo: "Survival and Complication Rates of Feldspathic, Leucite-Reinforced, Lithium Disilicate and Zirconia Ceramic Laminate Veneers: A Systematic Review and Meta-Analysis.", revista: "J Esthet Restor Dent", ano: "2024", volume: "37(3):601-619", doi: "10.1111/jerd.13351", pmid: "39523553" },
    ],
    title: "Faceta (laminado) em resina ou cerâmico: qual a diferença?",
    metaDescription:
      "Faceta em resina composta (também chamada de laminado em resina) e laminado cerâmico atendem a necessidades parecidas de formas diferentes. Entenda quando cada um é indicado.",
    dataISO: "2026-09-08",
    dataExibicao: "8 de setembro de 2026",
    resumo: "A indicação de cada material depende do que o seu caso precisa, e não de uma escolha isolada.",
    respostaDireta:
      "A faceta em resina composta é feita diretamente no consultório, é mais conservadora e reversível; o laminado cerâmico é confeccionado sob medida em laboratório, exige um preparo mais específico e costuma ser indicado para casos que pedem mais estabilidade de cor e forma a longo prazo.",
    resumoRapido: [
      "Resina composta: feita na hora, no consultório, mais conservadora e reversível.",
      "Laminado cerâmico: feito em laboratório, preparo mais específico, mais estável a longo prazo.",
      "O material da faceta (resina ou cerâmica) influencia a aparência ao longo do tempo; a escolha é feita na avaliação.",
      "A escolha certa depende do diagnóstico, não de preferência isolada por material.",
    ],
    corpo: [
      {
        paragrafos: [
          "É comum chegar à avaliação já com essa dúvida: faceta em resina (também chamada de laminado em resina) ou laminado cerâmico? Os dois atendem a necessidades parecidas — pequenas imperfeições, desalinhamento leve, cor irregular — mas de formas diferentes, e a escolha não é só estética.",
        ],
      },
      {
        titulo: "Facetas em resina composta",
        paragrafos: [
          "São feitas diretamente sobre o dente, no próprio consultório, com resina composta esculpida à mão. É uma alternativa mais conservadora e reversível aos laminados cerâmicos, com menor desgaste — geralmente indicada para correções mais pontuais.",
          "Uma revisão sistemática com meta-análise indexada no PubMed (Lim, 2023) descreve o desempenho dos laminados em resina composta em grupos de pacientes. Ela aponta que as complicações mais relatadas são de superfície, cor e pigmentação nas bordas, e que, em geral, são consideradas clinicamente aceitáveis, com ou sem nova intervenção. Também mostra que o número de estudos disponíveis é pequeno.",
        ],
      },
      {
        titulo: "Laminados cerâmicos",
        paragrafos: [
          "São confeccionados sob medida fora do consultório e cimentados depois, com um preparo mais específico do dente. Tendem a manter cor e forma de maneira mais estável ao longo do tempo, o que costuma pesar na indicação para casos mais amplos ou exigentes.",
          "Uma meta-análise indexada no PubMed (Klein, 2024) reuniu estudos de laminados cerâmicos com acompanhamento de longo prazo. Para os laminados de zircônia, os dados de longo prazo ainda são limitados.",
        ],
      },
      {
        titulo: "Diferenças na prática",
        paragrafos: [],
        lista: [
          "Tempo de confecção: resina é feita na consulta; cerâmica passa por laboratório e leva mais de uma sessão",
          "Reversibilidade: a resina costuma poder ser removida ou refeita com mais facilidade; na cerâmica, quando há desgaste do dente, ele não pode ser desfeito",
          "Manchas e desgaste: resina e cerâmica se comportam de formas diferentes; o dentista explica essas diferenças e avalia a indicação no seu caso",
          "Reparo: em resina, pequenas correções muitas vezes podem ser feitas na própria peça; em cerâmica, o caminho depende do tamanho do dano e é definido na avaliação",
        ],
      },
      {
        titulo: "Como decidir",
        paragrafos: [
          "Essa decisão não deveria ser tomada antes de um diagnóstico — é exatamente o que a avaliação esclarece: entender a estrutura do seu dente, a proporção do seu sorriso e o que o seu caso realmente precisa, antes de indicar um caminho.",
          "Os estudos científicos descrevem resultados de grupos de pacientes e não preveem o que acontecerá em um caso individual. Por isso a escolha entre resina e cerâmica é definida na avaliação clínica, considerando o seu caso.",
        ],
      },
    ],
    tratamentoRelacionado: "facetas-resina",
  },
  {
    slug: "como-funciona-o-implante-dentario-passo-a-passo",
    referencias: [
      { autores: "Shetty U, Sharma A, Mhatre S, Srichand R, Joshi M, Trivedi M.", titulo: "Comparative Evaluation of Titanium Versus Zirconia Implants for Their Clinical Outcomes: An Overview of Reviews.", revista: "Cureus", ano: "2026", volume: "18(5):e108219", doi: "10.7759/cureus.108219", pmid: "42245850" },
    ],
    title: "Como funciona o implante dentário, do diagnóstico à cicatrização",
    metaTitle: "Como funciona o implante dentário, passo a passo",
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
          "O posicionamento do implante é planejado pensando na função de mastigação — e não só em preencher o espaço do dente perdido — e também no resultado estético da prótese final. A cirurgia em si costuma ser feita em consultório, com anestesia local.",
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
          "Estudos científicos descrevem resultados de grupos de pacientes e não permitem prever o que acontecerá em um caso individual; o plano e o acompanhamento são definidos na avaliação clínica.",
        ],
      },
      {
        titulo: "Quando um enxerto ósseo entra no plano",
        paragrafos: [
          "Quando um dente foi perdido há muito tempo, é comum que o osso da região tenha reabsorvido parte do seu volume. Nesses casos, um enxerto ósseo — prévio ou junto com o implante — pode ser necessário para oferecer uma base adequada ao implante. Isso é identificado já no diagnóstico, e entra no plano de tratamento desde o início, não como uma surpresa no meio do caminho.",
        ],
      },
      {
        titulo: "Titânio ou zircônia?",
        paragrafos: [
          "Os implantes podem ser de titânio ou de zircônia. Uma revisão de revisões indexada no PubMed (Shetty, 2026) compara os dois materiais: descreve o titânio como padrão de previsibilidade de longo prazo e a zircônia como alternativa em casos de maior exigência estética. A escolha do material, quando há opção, é definida na avaliação, junto com o diagnóstico.",
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
    referencias: [
      { autores: "Pinheiro MA, Meira IA, Magno MB, Maia LC, Rodrigues Garcia RC.", titulo: "Masticatory function improvement with the use of mandibular single-implant overdentures in edentulous subjects: a systematic literature review.", revista: "Minerva Stomatol", ano: "2020", volume: "69(4):256-268", doi: "10.23736/S0026-4970.20.04327-7", pmid: "32945635" },
      { autores: "Sharka R, Abed H, Hector M.", titulo: "Oral health-related quality of life and satisfaction of edentulous patients using conventional complete dentures and implant-retained overdentures: An umbrella systematic review.", revista: "Gerodontology", ano: "2019", volume: "36(3):195-204", doi: "10.1111/ger.12399", pmid: "30875108" },
      { autores: "Egido Moreno S, Ayuso Montero R, Schemel Suárez M, Roca-Umbert JV, Izquierdo Gómez K, López López J.", titulo: "Evaluation of the quality of life and satisfaction in patients using complete dentures versus mandibular overdentures. Systematic review and meta-analysis.", revista: "Clin Exp Dent Res", ano: "2020", volume: "7(2):231-241", doi: "10.1002/cre2.347", pmid: "33205918" },
    ],
    title: "Prótese dentária incomoda no dia a dia? O que esperar da adaptação",
    metaTitle: "Prótese dentária incomoda? O que esperar da adaptação",
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
          "Dor persistente, feridas recorrentes ou dificuldade de mastigar semanas depois da instalação não são \"normais de se acostumar\" — geralmente indicam que algum ajuste pontual é necessário, e o acompanhamento serve exatamente para fazer esse ajuste.",
        ],
      },
      {
        titulo: "Tipos de prótese e o que muda no conforto",
        paragrafos: [
          "Prótese fixa (cimentada ou sobre implante) a sensação varia de pessoa para pessoa e de acordo com o tipo de prótese; isso é avaliado no planejamento. Prótese removível pede mais adaptação de fala e mastigação no início, mas é uma opção indicada em vários casos. A escolha entre elas não é isolada: depende do que o seu caso precisa, definido na avaliação.",
        ],
      },
      {
        titulo: "O que ajuda a acelerar a adaptação",
        paragrafos: [],
        lista: [
          "Começar com alimentos mais macios e ir aumentando a consistência aos poucos",
          "Mastigar dos dois lados da boca, não só de um",
          "Praticar a fala em voz alta nos primeiros dias, se notar dificuldade",
          "Manter as consultas de ajuste — pequenos incômodos ajustados cedo podem evitar desconforto maior depois",
        ],
      },
      {
        titulo: "O que dizem os estudos",
        paragrafos: [
          "Uma revisão guarda-chuva (Sharka, 2019) e uma meta-análise (Egido Moreno, 2020), indexadas no PubMed, compararam dentaduras convencionais com sobredentaduras apoiadas em implantes em pessoas sem dentes. Em média, os estudos descrevem maior satisfação e conforto com a sobredentadura. A meta-análise não encontrou diferença na estética e observou pior higiene com a sobredentadura. A capacidade de adaptação de cada pessoa e fatores financeiros influenciam a tolerância às duas opções. A qualidade da evidência varia entre os estudos. Por isso, quando a prótese incomoda, o primeiro passo é avaliar o caso, e não trocar de tipo de tratamento por conta própria.",
        ],
      },
      {
        titulo: "O papel do planejamento",
        paragrafos: [
          "Prótese removível, fixa ou sobre implante — a indicação certa para cada caso é o que mais influencia o conforto no dia a dia. É por isso que essa decisão parte de uma avaliação, e não de uma escolha genérica.",
          "Os estudos científicos descrevem resultados de grupos de pacientes e não permitem prever o que acontecerá em um caso individual; a avaliação clínica é que define o caminho.",
        ],
      },
    ],
    tratamentoRelacionado: "proteses",
  },
  {
    slug: "quanto-tempo-demora-uma-reabilitacao-oral-completa",
    referencias: [
      { autores: "Jiang X, Zhou W, Wu Y, Wang F.", titulo: "Clinical Outcomes of Immediate Implant Loading with Fixed Prostheses in Edentulous Maxillae: A Systematic Review.", revista: "Int J Oral Maxillofac Implants", ano: "2021", volume: "36(3):503-519", doi: "10.11607/jomi.8509", pmid: "34115065" },
      { autores: "Lan R, Gul M, Jiang X, Wu Y, Wang F.", titulo: "Long-Term Comprehensive Results of Four-Implant-Supported Overdentures and Fixed Complete Dentures: A Systematic Review and Meta-analysis.", revista: "Int J Oral Maxillofac Implants", ano: "2025", volume: "40(6):751-765", doi: "10.11607/jomi.11175", pmid: "40279380" },
      { autores: "Tomar S, Agnihotri N, Vhanmane G.", titulo: "Prosthetic complications of implant-supported complete arch prostheses: An umbrella review of systematic reviews.", revista: "J Prosthet Dent", ano: "2026", volume: "136(1):52-59", doi: "10.1016/j.prosdent.2026.03.013", pmid: "41927400" },
    ],
    title: "Quanto tempo demora uma reabilitação oral completa?",
    metaDescription:
      "Reabilitação oral completa é um processo em etapas, não um procedimento único. Entenda o que influencia o prazo total do tratamento.",
    dataISO: "2026-09-23",
    dataExibicao: "23 de setembro de 2026",
    resumo: "Não existe um prazo padrão — existe um plano em etapas, construído para o seu caso.",
    respostaDireta:
      "Reabilitação oral completa não tem um prazo fixo: o tempo total depende de quantos dentes e estruturas estão envolvidos, e de quais tratamentos combinados (implantes, próteses, restaurações) o caso exige — por isso o plano é construído em etapas, com prazos definidos na avaliação.",
    resumoRapido: [
      "Não existe prazo padrão — o tempo depende da extensão e da combinação de tratamentos envolvidos.",
      "Casos com implante têm o período de cicatrização como parte natural do cronograma.",
      "O plano é dividido em fases, com prioridades claras desde o início.",
      "O acompanhamento entre as fases permite ajustar o plano ao longo do tratamento.",
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
        titulo: "Carga imediata: uma possibilidade, não uma regra",
        paragrafos: [
          "Em alguns casos selecionados, é possível instalar uma prótese fixa sobre os implantes sem esperar o período habitual de cicatrização, o que é chamado de carga imediata. Uma revisão sistemática com meta-análise indexada no PubMed (Jiang, 2021), sobre a maxila sem dentes, não encontrou diferença significativa de sobrevivência dos implantes entre a carga imediata e a convencional, mas aponta cautela pela falta de ensaios clínicos randomizados e descreve a carga imediata como alternativa quando seguidos critérios adequados de inclusão e exclusão. Se esse caminho é possível no seu caso é definido na avaliação.",
        ],
      },
      {
        titulo: "O que os estudos descrevem sobre o acompanhamento",
        paragrafos: [
          "Revisões indexadas no PubMed descrevem resultados de próteses sobre implantes com acompanhamento de pelo menos cinco anos. Na maxila, Lan (2025) comparou a sobredentadura sobre 4 implantes com a prótese total fixa: as duas tiveram resultados previsíveis a médio prazo; a prótese fixa teve maior sobrevivência de implantes e de prótese, e a sobredentadura teve menos perda óssea aos 5 anos e mais complicações. Tomar (2026), em revisão de próteses totais fixas sobre implantes, descreve que o material e o desenho da prótese influenciam o padrão de complicações, e que usar 4 ou 6 implantes não alterou a sobrevivência. Por isso, a Clínica Ortoface inclui o acompanhamento depois da fase principal no plano.",
        ],
      },
      {
        titulo: "Como isso é comunicado no seu caso",
        paragrafos: [
          "Em vez de prometer um prazo genérico, o plano é construído em etapas, com prioridades claras, para que você entenda a sequência do tratamento antes de começar, não durante.",
          "Os estudos científicos descrevem resultados de grupos de pacientes e não permitem prever o que acontecerá em um caso individual; o plano é definido na avaliação clínica.",
        ],
      },
    ],
    tratamentoRelacionado: "reabilitacao-oral",
  },
  {
    slug: "clareamento-dental-quem-pode-fazer",
    referencias: [
      { autores: "Cordeiro DCF, Ñaupari-Villasante R, Condolo LC, et al.", titulo: "What is the optimal concentration of carbamide peroxide for at-home bleaching? A systematic review and network meta-analysis.", revista: "Jpn Dent Sci Rev", ano: "2025", volume: "61:250-263", doi: "10.1016/j.jdsr.2025.10.001", pmid: "41244666" },
    ],
    title: "Clareamento dental convencional: o que é e quem pode fazer?",
    metaDescription:
      "O que é clareamento dental convencional? Veja quando costuma funcionar bem e quando pode não bastar. Dr. Vitor Leal, CRO-SC 20602, em Itajaí/SC.",
    dataISO: "2026-09-23",
    dataExibicao: "23 de setembro de 2026",
    resumo: "O clareamento pode ser uma opção para alguns tipos de escurecimento, mas não é indicado para todos os casos.",
    respostaDireta:
      "Em geral, o clareamento dental convencional é considerado quando o escurecimento é causado por manchas superficiais, como alimentos, bebidas ou fumo, mas a indicação depende da avaliação do dentista; manchas de origem interna ao dente — por trauma ou por certos medicamentos, por exemplo — podem responder menos, e às vezes pedem outra abordagem.",
    resumoRapido: [
      "Costuma ser considerado para escurecimento por hábitos (café, vinho, cigarro) e envelhecimento natural do esmalte.",
      "Manchas de origem interna (trauma, alguns medicamentos) podem responder menos ao clareamento convencional.",
      "Sensibilidade nos dias seguintes é comum e costuma passar — é acompanhada no seu retorno.",
      "Evitar alimentos e bebidas muito pigmentados nos primeiros dias ajuda a manter o resultado.",
    ],
    corpo: [
      {
        paragrafos: [
          "O clareamento dental convencional é, muitas vezes, o primeiro tratamento que vem à cabeça de quem quer um sorriso mais uniforme — e faz sentido: quando indicado após avaliação, costuma ser considerado um procedimento conservador. Mas nem todo tipo de escurecimento responde da mesma forma.",
        ],
      },
      {
        titulo: "Quando o clareamento costuma ser considerado",
        paragrafos: [
          "Escurecimento causado por hábitos do dia a dia — café, vinho, cigarro — ou pelo envelhecimento natural do esmalte costuma ser um caso em que o clareamento é considerado, após a avaliação.",
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
        titulo: "O que dizem os estudos sobre sensibilidade",
        paragrafos: [
          "Uma revisão sistemática com meta-análise em rede (Cordeiro, 2025, Jpn Dent Sci Rev; localizada no PubMed) analisou o clareamento caseiro com peróxido de carbamida. Os autores concluem que concentrações menores reduzem o risco de sensibilidade, e que a eficácia seria comparável à de concentrações maiores. Esse último ponto depende da medida de cor usada: em uma das medidas não houve diferença entre as concentrações, e em outra houve. A maioria dos estudos incluídos tinha risco de viés alto, então os resultados devem ser lidos com cautela. Eles descrevem grupos de pacientes e não valem automaticamente para o clareamento feito no consultório. A concentração e o método são definidos pelo dentista, na avaliação.",
        ],
      },
      {
        titulo: "Por que isso é avaliado antes",
        paragrafos: [
          "Antes de indicar clareamento ou qualquer outro tratamento estético, a avaliação identifica a causa do escurecimento — é isso que define se o clareamento é indicado, ou se o seu caso pede outro caminho dentro da estética dental.",
          "Os estudos científicos descrevem resultados de grupos de pacientes e não permitem prever o que acontecerá em um caso individual; a indicação é definida na avaliação clínica.",
        ],
      },
    ],
    tratamentoRelacionado: "estetica-dental",
  },
  {
    slug: "implante-dentario-imediato-quando-e-indicado",
    referencias: [
      { autores: "Campi M, Leitão-Almeida B, Pereira M, et al.", titulo: "Immediate implant placement in damaged extraction sockets: a systematic review and meta-analysis of randomized controlled trials.", revista: "Quintessence Int", ano: "2025", volume: "56(1):34-45", doi: "10.3290/j.qi.b5768294", pmid: "39351790" },
    ],
    title: "Implante imediato: quando pode ser feito junto da extração?",
    metaDescription:
      "Implante imediato é aquele instalado no mesmo procedimento da extração do dente. Entenda de que depende e por que nem todo caso é indicado.",
    dataISO: "2026-10-20",
    dataExibicao: "20 de outubro de 2026",
    resumo: "Em alguns casos é possível; em outros, esperar a cicatrização faz parte do planejamento.",
    respostaDireta:
      "Em alguns casos é possível instalar o implante junto com a extração do dente, mas depende das condições do osso, da gengiva e da região — por isso só a avaliação, com exames de imagem, mostra se o seu caso permite ou se é indicado esperar a cicatrização antes.",
    resumoRapido: [
      "Implante imediato é o instalado no mesmo procedimento da extração do dente.",
      "Depende da quantidade e da qualidade do osso, do estado da gengiva e da ausência de infecção ativa na região.",
      "Quando não é indicado, o caminho costuma ser extrair, deixar cicatrizar e instalar o implante depois.",
      "A prótese final, em geral, só entra depois que o implante se integra ao osso.",
      "A decisão é tomada na avaliação, com exame clínico e de imagem.",
    ],
    corpo: [
      {
        paragrafos: [
          "Quem precisa extrair um dente costuma perguntar se é possível instalar o implante junto com a extração, sem etapa de espera. A resposta honesta é: às vezes sim, às vezes não — e o que decide isso é o estado da região, não a vontade do paciente.",
        ],
      },
      {
        titulo: "O que é o implante imediato",
        paragrafos: [
          "É o implante instalado no mesmo procedimento em que o dente é removido, aproveitando o espaço deixado pela raiz. A ideia é reduzir etapas, mas isso só é considerado quando as condições da região permitem.",
        ],
      },
      {
        titulo: "De que depende",
        paragrafos: ["De forma geral, o profissional avalia:"],
        lista: [
          "Se há osso suficiente, com boa qualidade, para dar estabilidade ao implante",
          "O estado da gengiva ao redor do dente",
          "Se existe infecção ativa na região (o que costuma exigir tratar antes)",
          "A posição do dente e a forma como você morde",
          "Condições de saúde geral e hábitos, como o cigarro",
        ],
      },
      {
        titulo: "Quando esperar costuma ser indicado",
        paragrafos: [
          "Se há infecção, perda importante de osso ou pouca estrutura de apoio, instalar o implante junto com a extração pode aumentar o risco. Nesses casos, o mais comum é extrair o dente, deixar a região cicatrizar (e, se for preciso, fazer um enxerto) e só então instalar o implante. Esperar não é atraso: é parte do planejamento.",
        ],
      },
      {
        titulo: "E o dente provisório e a prótese final",
        paragrafos: [
          "Mesmo no implante imediato, a prótese final em geral só é feita depois que o implante se integra ao osso. Se um dente provisório é possível ou não, e como ele é feito, também depende do seu caso.",
        ],
      },
      {
        titulo: "O que dizem os estudos",
        paragrafos: [
          "Uma revisão sistemática com meta-análise de ensaios clínicos randomizados (Campi et al., 2025, Quintessence International; indexada no PubMed) analisou o implante imediato em alvéolos com defeito ósseo vestibular. Os autores descrevem resultados clínicos e radiográficos comparáveis aos dos métodos tradicionais no curto prazo, mas com poucos estudos disponíveis. Destacam que a regeneração óssea foi essencial, que o implante imediato exige critérios rigorosos de indicação e que não foi possível avaliar a face vestibular por radiografia. Esses resultados descrevem grupos de pacientes e não permitem prever o que acontecerá em um caso individual; a indicação é definida na avaliação clínica.",
        ],
      },
      {
        titulo: "Como saber se o seu caso permite",
        paragrafos: [
          "Só a avaliação responde: exame clínico e exames de imagem mostram a condição do osso e da região, e a partir deles o plano é definido. Chegando à avaliação com essa dúvida, você já ajuda a orientar a conversa.",
        ],
      },
    ],
    tratamentoRelacionado: "implantes-dentarios",
  },
];
