import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WHATSAPP_NUMBER } from "@/lib/content";

const BASE_URL = "https://site-vitorleal.vercel.app";
const SITE_TITLE = "Dr. Vitor Leal | Clínica Ortoface — Reabilitação Oral em Itajaí";
const SITE_DESCRIPTION =
  "Cirurgião-dentista CRO-SC 20602, sócio da Clínica Ortoface. Reabilitação oral, laminados cerâmicos e implantes dentários em Itajaí e Balneário Camboriú, com o Protocolo Leal de Reabilitação Planejada.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Dr. Vitor Leal — Clínica Ortoface",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/site/fachada-dia.jpg",
        width: 1200,
        height: 630,
        alt: "Fachada da Clínica Ortoface, em Itajaí/SC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/site/fachada-dia.jpg"],
  },
};

const dentistJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dr. Vitor Leal — Clínica Ortoface",
  alternateName: "Clínica Ortoface",
  image: `${BASE_URL}/images/site/fachada-dia.jpg`,
  url: BASE_URL,
  telephone: `+${WHATSAPP_NUMBER}`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Lauro Müller, 757 — Fazenda",
    addressLocality: "Itajaí",
    addressRegion: "SC",
    postalCode: "88301-401",
    addressCountry: "BR",
  },
  areaServed: ["Itajaí", "Balneário Camboriú", "Camboriú"],
  medicalSpecialty: "Dentistry",
  founder: {
    "@type": "Person",
    name: "Dr. Vitor Leal",
    jobTitle: "Cirurgião-dentista",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-areia text-verde">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
