import type { Metadata } from "next";

const BASE_URL = "https://www.odontologiavitorleal.com.br";
const IMAGEM = "/images/site/fachada-dia.jpg";

// O Next troca o bloco inteiro de openGraph/twitter da página; sem isto, o cartão de
// compartilhamento herdaria o título e o endereço da página inicial.
export function metaPagina({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: `${BASE_URL}${path}`,
      siteName: "Dr. Vitor Leal — Clínica Ortoface",
      title,
      description,
      images: [
        {
          url: IMAGEM,
          width: 1200,
          height: 630,
          alt: "Fachada da Clínica Ortoface, em Itajaí/SC",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [IMAGEM],
    },
  };
}
