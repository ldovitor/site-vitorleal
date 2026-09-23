import type { Tratamento } from "./content";

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  dataISO: string;
  dataExibicao: string;
  resumo: string;
  respostaDireta: string;
  corpo: { titulo?: string; paragrafos: string[] }[];
  tratamentoRelacionado?: Tratamento["slug"];
};

// Conteúdo de blog — rascunho inicial escrito para cobrir buscas de cauda longa
// (ex.: "faceta de resina dói", "quanto tempo dura lente de contato dental").
// Revisar clinicamente com o Dr. Vitor antes de considerar definitivo: nenhum
// preço, prazo exato ou taxa de sucesso é afirmado — tudo fica condicionado à
// avaliação, seguindo o mesmo padrão do restante do site.
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
          "Hábitos do dia a dia também pesam: hábito de roer unha, usar os dentes como ferramenta, ou bruxismo não tratado podem reduzir a vida útil de qualquer restauração, cerâmica ou não.",
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
    corpo: [
      {
        paragrafos: [
          "É comum chegar à avaliação já com essa dúvida: faceta em resina ou laminado cerâmico? Os dois resolvem problemas parecidos — pequenas imperfeições, desalinhamento leve, cor irregular — mas de formas diferentes, e a escolha não é só estética.",
        ],
      },
      {
        titulo: "Facetas em resina composta",
        paragrafos: [
          "São feitas diretamente sobre o dente, no próprio consultório, com resina composta esculpida à mão. É uma alternativa mais conservadora e reversível aos laminados cerâmicos, com menor desgaste — geralmente indicada para correções mais pontuais.",
        ],
      },
      {
        titulo: "Laminados cerâmicos",
        paragrafos: [
          "São confeccionados sob medida fora do consultório e cimentados depois, com um preparo mais específico do dente. Tendem a manter cor e forma de maneira mais estável ao longo do tempo, o que costuma pesar na indicação para casos mais amplos ou exigentes.",
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
    corpo: [
      {
        paragrafos: [
          "Implante dentário costuma gerar mais dúvidas do que outros tratamentos, provavelmente porque envolve uma cirurgia. Entender as etapas gerais ajuda a chegar com menos ansiedade na avaliação — mas vale lembrar que cada caso tem seu próprio plano.",
        ],
      },
      {
        titulo: "1. Diagnóstico",
        paragrafos: [
          "Antes de qualquer cirurgia, é preciso entender a estrutura óssea da região, a mordida e o histórico clínico. É esse diagnóstico que define se o implante é indicado, e como ele deve ser planejado.",
        ],
      },
      {
        titulo: "2. Planejamento e cirurgia",
        paragrafos: [
          "O posicionamento do implante é planejado para devolver função de mastigação real — não só preencher o espaço do dente perdido — pensando também no resultado estético da prótese final.",
        ],
      },
      {
        titulo: "3. Cicatrização",
        paragrafos: [
          "Depois da cirurgia, existe um período de cicatrização em que o implante se integra ao osso. Esse prazo varia de pessoa para pessoa, e é acompanhado de perto antes de seguir para a próxima etapa.",
        ],
      },
      {
        titulo: "4. Prótese final",
        paragrafos: [
          "Só depois da cicatrização confirmada é que a prótese final — unitária, sobre implante, ou uma reabilitação mais ampla, conforme o caso — é instalada.",
        ],
      },
    ],
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
        titulo: "Por que isso é avaliado antes",
        paragrafos: [
          "Antes de indicar clareamento ou qualquer outro tratamento estético, a avaliação identifica a causa do escurecimento — é isso que define se o clareamento resolve, ou se o seu caso pede outro caminho dentro da estética dental.",
        ],
      },
    ],
    tratamentoRelacionado: "estetica-dental",
  },
];
