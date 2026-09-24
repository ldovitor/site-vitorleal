export const WHATSAPP_NUMBER = "5547996401067";
export const WHATSAPP_MESSAGE = "Olá! Vim pelo site e gostaria de agendar uma avaliação.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/ortofaceclinica_/",
  facebook: "https://www.facebook.com/clinicaortofaceitajai/",
};

// Place ID real da Clínica Ortoface no Google (extraído do widget de avaliações
// já em uso no site antigo, odontologiavitorleal.com.br).
export const GOOGLE_PLACE_ID = "ChIJY5uG6FzN2JQRfZM1OcRyp_U";
export const GOOGLE_REVIEWS_URL = `https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`;
export const GOOGLE_REVIEWS_COUNT = 58;

// Avaliações reais de pacientes no Google, copiadas do site atual (mesma fonte;
// texto e nomes exatamente como publicados publicamente). Enquanto não conectamos
// um widget ao vivo (ex.: Trustindex, que exige conta própria para este domínio),
// esta lista fica estática — precisa ser atualizada manualmente de tempos em tempos.
export const REVIEWS = [
  {
    autor: "Lucas da Silva Pereira",
    texto:
      "Indico tranquilamente. Ambiente limpo e organizado. O Vitor é um dentista muito atencioso, e de extrema confiança. Clínica odontológica de autoridade na cidade de Itajaí-SC!",
  },
  {
    autor: "Berenice Piccoli",
    texto: "Fui muito bem atendida pelo Dr. Vitor na Ortoface em Itajaí. Profissional muito qualificado e competente.",
  },
  {
    autor: "Izabelle Coelho de Souza",
    texto:
      "Tive uma ótima experiência como paciente do Dr. Vitor!! Recomendo muito pra quem preza por bom atendimento e serviço especializado.",
  },
  {
    autor: "Ronaldo Maciel",
    texto: "Atendimento excelente, qualidade impecável das lentes, só tenho à agradecer.",
  },
  {
    autor: "Canaã",
    texto: "Excepcional o atendimento do Doutor Vitor, me ajudou a perder o medo de ir ao dentista. Super recomendo!",
  },
  {
    autor: "João Paulo",
    texto: "Ótimo ambiente e atendimento impecável, recomendo muito!",
  },
];

export const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/tratamentos", label: "Tratamentos" },
  { href: "/casos-clinicos", label: "Casos Clínicos" },
  { href: "/estrutura", label: "Estrutura" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
  { href: "/faq-contato", label: "FAQ / Contato" },
];

export const PROTOCOLO_ETAPAS = [
  {
    numero: "01",
    titulo: "Diagnóstico individualizado",
    texto:
      "Cada boca é analisada isoladamente, sem protocolo padrão aplicado a todos os pacientes.",
  },
  {
    numero: "02",
    titulo: "Planejamento",
    texto:
      "Você entende o resultado esperado antes de começar o tratamento, não depois; cada caso é documentado e fotografado para acompanhar a evolução.",
  },
  {
    numero: "03",
    titulo: "Execução com preservação",
    texto:
      "Prioridade em manter o máximo de estrutura dental natural, intervindo apenas onde é necessário.",
  },
  {
    numero: "04",
    titulo: "Acompanhamento",
    texto: "O plano é revisado etapa a etapa, com ajustes quando necessário.",
  },
];

export type Tratamento = {
  slug: string;
  nome: string;
  categoria: "Estética Dental" | "Reabilitação Oral" | "Implantes";
  resumoCard: string;
  title: string;
  problema: string;
  diagnostico: string;
  planejamento: string;
  execucao: string;
  resultado: string;
  cta: string;
  completo: boolean;
};

export const TRATAMENTOS: Tratamento[] = [
  {
    slug: "laminados-ceramicos",
    nome: "Laminados Cerâmicos",
    categoria: "Estética Dental",
    resumoCard:
      "Lentes de contato dental sob medida, com o mínimo desgaste necessário à estrutura natural.",
    title: "Laminados Cerâmicos em Itajaí e Balneário Camboriú | Dr. Vitor Leal",
    problema:
      "Dentes desalinhados, com cor irregular ou pequenas imperfeições podem incomodar mesmo quando a saúde bucal está em dia. Muita gente adia esse tratamento por medo do resultado parecer artificial.",
    diagnostico:
      "A indicação de laminados cerâmicos parte de uma análise da proporção, cor e estrutura dos seus dentes — não é uma decisão só estética, é uma decisão técnica sobre o que o seu sorriso precisa.",
    planejamento:
      "Antes de qualquer preparo, o resultado é planejado: formato, tamanho e tom são definidos com base no seu rosto e nos seus dentes, não em um padrão genérico.",
    execucao:
      "Os laminados são confeccionados sob medida e aplicados com o mínimo desgaste necessário à estrutura dental — a prioridade é sempre preservar o dente natural.",
    resultado:
      "Um sorriso mais uniforme e harmônico, com aparência natural — porque o planejamento respeitou a proporção da sua própria boca, não impôs um padrão externo.",
    cta: "Agendar avaliação para laminados cerâmicos",
    completo: true,
  },
  {
    slug: "implantes-dentarios",
    nome: "Implantes Dentários",
    categoria: "Implantes",
    resumoCard:
      "Planejamento cirúrgico detalhado para devolver função de mastigação e um sorriso completo.",
    title: "Implantes Dentários em Itajaí e Balneário Camboriú | Dr. Vitor Leal",
    problema:
      "A perda de um ou mais dentes afeta a mastigação, a fala e, com o tempo, a estrutura óssea da região — além do impacto estético.",
    diagnostico:
      "Cada caso de implante exige análise da estrutura óssea, da mordida e do histórico clínico do paciente — é isso que define o planejamento cirúrgico e o tipo de prótese indicada.",
    planejamento:
      "O posicionamento do implante é planejado para devolver função real de mastigação, não só preencher o espaço — pensando também no resultado estético da prótese final.",
    execucao:
      "Implantes unitários, próteses sobre implante ou reabilitações mais extensas, conforme a necessidade identificada na avaliação — sempre com acompanhamento das etapas de cicatrização.",
    resultado:
      "Função mastigatória restabelecida e um sorriso completo novamente, com previsibilidade porque cada etapa foi planejada antes da cirurgia.",
    cta: "Agendar avaliação para implantes",
    completo: true,
  },
  {
    slug: "reabilitacao-oral",
    nome: "Reabilitação Oral",
    categoria: "Reabilitação Oral",
    resumoCard:
      "Para casos que envolvem função e estrutura, com planejamento mais complexo e etapas claras.",
    title: "Reabilitação Oral em Itajaí e Balneário Camboriú | Dr. Vitor Leal",
    problema:
      "Casos mais complexos — perda de múltiplos dentes, desgaste extenso, alterações de mordida — não se resolvem com um procedimento isolado. Exigem um plano que olhe para a boca inteira.",
    diagnostico:
      "A reabilitação oral começa com um diagnóstico amplo: função mastigatória, estrutura óssea, estética e saúde bucal geral são avaliadas em conjunto.",
    planejamento:
      "O plano de reabilitação é construído em etapas, com prazos e prioridades claras — você entende a sequência do tratamento antes de começar.",
    execucao:
      "Combinação de próteses, implantes e/ou tratamentos restauradores, de acordo com o que cada caso exige — sempre com o objetivo de recuperar função e estética juntas.",
    resultado:
      "Mastigação restabelecida, estrutura preservada onde possível, e um sorriso funcional e natural — o resultado de um plano pensado para o seu caso específico, não um protocolo genérico.",
    cta: "Agendar avaliação para reabilitação oral",
    completo: true,
  },
  {
    slug: "facetas-resina",
    nome: "Facetas em Resina Composta",
    categoria: "Estética Dental",
    resumoCard:
      "Alternativa mais conservadora aos laminados cerâmicos, reversível e com menor desgaste.",
    title: "Facetas em Resina Composta em Itajaí | Dr. Vitor Leal",
    problema:
      "Pequenas imperfeições, desgastes ou desalinhamentos leves — casos em que uma correção mais conservadora já resolve.",
    diagnostico:
      "Avaliação de proporção, cor e estrutura para entender se a resina composta atende ao que o caso precisa, sem a necessidade de um laminado cerâmico.",
    planejamento:
      "O formato, o volume e o tom são definidos antes de qualquer aplicação, com base no seu rosto e na proporção natural dos seus dentes — o objetivo é uma correção discreta, não um sorriso \"novo\".",
    execucao:
      "A resina é aplicada diretamente sobre o dente, em camadas, e esculpida à mão durante a própria consulta — sem necessidade de laboratório, o que costuma tornar o processo mais rápido que o do laminado cerâmico.",
    resultado:
      "Um sorriso mais uniforme, com uma técnica reversível e de menor desgaste — vale lembrar que a resina pede mais manutenção ao longo do tempo do que a cerâmica, e isso é conversado na avaliação para você decidir com essa informação em mãos.",
    cta: "Agendar avaliação para facetas em resina",
    completo: true,
  },
  {
    slug: "proteses",
    nome: "Próteses",
    categoria: "Reabilitação Oral",
    resumoCard:
      "Prótese removível, fixa ou sobre implante — a indicação certa para cada caso, explicada em linguagem simples.",
    title: "Próteses Dentárias em Itajaí | Dr. Vitor Leal",
    problema:
      "Perda dentária parcial ou total, com impacto direto na fala e na mastigação.",
    diagnostico:
      "A avaliação considera os dentes remanescentes, a estrutura óssea, a saúde da gengiva e a mordida — é esse conjunto que indica o tipo de prótese adequado: removível, fixa ou sobre implante.",
    planejamento:
      "O tipo de prótese é definido a partir do diagnóstico, não por preferência isolada — parcial ou total, fixa, removível ou sobre implante, sempre pensando em função e naturalidade do resultado.",
    execucao:
      "Moldagem, provas e ajustes antes da instalação definitiva — cada etapa confirma o encaixe, a mordida e a fala antes de fechar o caso.",
    resultado:
      "Função de mastigação e fala restabelecida. Algum estranhamento nos primeiros dias de adaptação é esperado; incômodo que persiste depois desse período costuma indicar que um ajuste é necessário, por isso o acompanhamento faz parte do tratamento.",
    cta: "Agendar avaliação para próteses",
    completo: true,
  },
  {
    slug: "estetica-dental",
    nome: "Estética Dental",
    categoria: "Estética Dental",
    resumoCard:
      "Clareamento e restaurações estéticas — o ponto de partida para quem ainda está decidindo qual tratamento precisa.",
    title: "Estética Dental em Itajaí | Dr. Vitor Leal",
    problema:
      "Quem busca um sorriso mais harmônico, mas ainda não sabe exatamente qual procedimento é o indicado para o seu caso.",
    diagnostico:
      "A avaliação parte do que te incomoda — cor, formato, desgaste ou alinhamento — para indicar a solução mais simples que resolve, sem partir direto para o procedimento mais complexo.",
    planejamento:
      "Nem todo caso de estética dental pede o mesmo caminho: às vezes um clareamento resolve, em outros a indicação caminha para facetas ou laminados. Esse direcionamento é definido na avaliação, não antes dela.",
    execucao:
      "Pode envolver clareamento dental supervisionado, restaurações estéticas pontuais, ou o encaminhamento para um dos outros tratamentos do Protocolo Leal, conforme o que o diagnóstico apontar.",
    resultado:
      "Um sorriso mais harmônico e clareza sobre qual foi o caminho certo para o seu caso — em vez de um procedimento escolhido antes de entender o que realmente era necessário.",
    cta: "Agendar avaliação",
    completo: true,
  },
];

export const FAQ_ITEMS = [
  {
    pergunta: "O que é o Protocolo Leal de Reabilitação Planejada?",
    resposta:
      "É o processo que aplico a todo paciente: diagnóstico individualizado, planejamento do resultado antes de qualquer procedimento, execução com o máximo de preservação da estrutura dental, e acompanhamento das etapas seguintes.",
  },
  {
    pergunta: "Vou ficar com aparência de sorriso artificial?",
    resposta:
      "Não é esse o objetivo. Cada plano é construído a partir das suas proporções e da sua estrutura — o resultado busca parecer natural, não \"trocado\".",
  },
  {
    pergunta: "Quanto tempo leva um tratamento de reabilitação oral?",
    resposta:
      "Varia por caso. Na avaliação inicial, você recebe um plano com etapas e prazos definidos para a sua situação específica.",
  },
  {
    pergunta: "Como sei qual tratamento eu preciso?",
    resposta:
      "É exatamente para isso que existe a avaliação: um diagnóstico completo antes de qualquer indicação de tratamento.",
  },
  {
    pergunta: "Laminados cerâmicos desgastam o dente?",
    resposta:
      "O planejamento prioriza preservar ao máximo a estrutura natural — o desgaste, quando necessário, é mínimo e calculado caso a caso.",
  },
  {
    pergunta: "Implantes dentários são definitivos?",
    resposta:
      "Com os cuidados adequados, têm alta durabilidade. Isso é avaliado e explicado individualmente na consulta.",
  },
  {
    pergunta: "Como funciona a primeira consulta?",
    resposta:
      "Avaliação clínica completa, conversa sobre o que te incomoda e o que você espera, e a partir daí o plano de tratamento é apresentado dentro do Protocolo Leal.",
  },
  {
    pergunta: "Lentes de contato dental doem?",
    resposta:
      "O procedimento é feito com anestesia local, então não costuma doer durante. Alguma sensibilidade nos dias seguintes é possível e normal — é acompanhada de perto no seu retorno.",
  },
  {
    pergunta: "Implante dentário dói muito?",
    resposta:
      "A cirurgia em si é feita com anestesia. É comum algum desconforto no pós-operatório imediato, controlado com a orientação passada após o procedimento — cada caso é acompanhado de perto nesse período.",
  },
  {
    pergunta: "Quanto custa fazer lentes de contato dental ou implante?",
    resposta:
      "O valor varia conforme o que o seu caso precisa — número de dentes, complexidade, material. Por isso não trabalhamos com tabela fixa: o valor é apresentado depois da avaliação, junto com o plano de tratamento.",
  },
  {
    pergunta: "Prótese dentária incomoda no dia a dia?",
    resposta:
      "Algum estranhamento nos primeiros dias é esperado, especialmente ao falar e mastigar. Incômodo constante depois desse período de adaptação não é normal, e costuma indicar que um ajuste é necessário — por isso o acompanhamento faz parte do tratamento.",
  },
  {
    pergunta: "Existe atendimento de urgência?",
    resposta:
      "Para dor ou urgência odontológica, o mais rápido é chamar diretamente pelo WhatsApp — respondemos por ali para entender a situação e orientar os próximos passos.",
  },
];

export type CasoClinico = {
  id: string;
  titulo: string;
  destaque: boolean;
  imagens: string[];
  desafio: string;
  aprendizado?: string;
  // Categoria confirmada com o Dr. Vitor — usada para agrupar casos nas páginas de tratamento.
  categoria?: Tratamento["categoria"];
};

// O campo `aprendizado` é rationale interno (por que o caso entrou no portfólio),
// não copy voltada ao paciente — não renderizar publicamente sem reescrever antes.
export const CASOS_CLINICOS: CasoClinico[] = [
  {
    id: "caso-a",
    titulo: "Reabilitação de sorriso sem dentes visíveis",
    destaque: true,
    categoria: "Reabilitação Oral",
    imagens: ["/images/casos/caso-a-idosaA-boca.jpg", "/images/casos/caso-a-idosaA-labios.jpg"],
    desafio:
      "A paciente chegou sem dentes visíveis ao sorrir, o que afetava função e confiança no dia a dia.",
    aprendizado:
      "Mostra por que planejamento vem antes de execução — o resultado é proporção e função, não só \"dentes novos\".",
  },
  {
    id: "caso-b",
    titulo: "Retrato de reabilitação completa",
    destaque: true,
    categoria: "Reabilitação Oral",
    imagens: ["/images/casos/caso-b-idosaB-antes.jpg", "/images/casos/caso-b-idosaB-depois.jpg"],
    desafio:
      "Paciente sem dentes à mostra no sorriso, documentada em retrato de rosto inteiro — o material mais completo do lote para mostrar impacto real na expressão, não só na boca.",
    aprendizado:
      "Reforça que o objetivo final é a naturalidade da expressão, não apenas os dentes isoladamente.",
  },
  {
    id: "caso-c",
    titulo: "Reabilitação de arco comprometido",
    destaque: true,
    categoria: "Reabilitação Oral",
    imagens: ["/images/casos/caso-c-homem-rosto.jpg"],
    desafio:
      "Dentes muito desgastados e comprometidos, afetando estética e função visivelmente.",
    aprendizado:
      "Um dos casos mais representativos do Protocolo Leal — reconstrução de função por trás do sorriso, não só estética.",
  },
  {
    id: "caso-d",
    titulo: "Correção pontual",
    destaque: true,
    categoria: "Estética Dental",
    imagens: ["/images/casos/caso-d-pontual-boca.jpg"],
    desafio: "Dente frontal lascado/manchado, incômodo estético mesmo sendo um caso pontual.",
    aprendizado:
      "Mostra que nem todo caso precisa de reabilitação ampla — reforça o hook \"o que o seu caso realmente precisa\".",
  },
  {
    id: "caso-e",
    titulo: "Reabilitação completa do sorriso",
    destaque: false,
    categoria: "Reabilitação Oral",
    imagens: ["/images/casos/caso-e-homem-rosto.jpg"],
    desafio: "Dentes desgastados e com espaçamento, impacto direto na expressão.",
  },
  {
    id: "caso-f",
    titulo: "Reabilitação de arco comprometido",
    destaque: false,
    categoria: "Reabilitação Oral",
    imagens: ["/images/casos/caso-f-homem-careca-rosto.jpg"],
    desafio: "Dentes quebrados e faltando, impacto direto na expressão e na mastigação.",
  },
  {
    id: "caso-g",
    titulo: "Correção de alinhamento",
    destaque: false,
    categoria: "Estética Dental",
    imagens: ["/images/casos/caso-g-boca.jpg"],
    desafio: "Espaçamento entre os dentes frontais, incômodo estético mesmo com boa saúde bucal.",
  },
  {
    id: "caso-h",
    titulo: "Correção de alinhamento",
    destaque: false,
    categoria: "Estética Dental",
    imagens: ["/images/casos/caso-h-boca.jpg"],
    desafio: "Dentes desalinhados e com espaçamento visível.",
  },
  {
    id: "caso-i",
    titulo: "Correção de desgaste",
    destaque: false,
    categoria: "Estética Dental",
    imagens: ["/images/casos/caso-j-boca.jpg"],
    desafio: "Desgaste visível na região frontal, corrigido com planejamento conservador.",
  },
];
