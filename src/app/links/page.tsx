import type { Metadata } from "next";
import Image from "next/image";
import { WHATSAPP_LINK, SOCIAL_LINKS, GOOGLE_REVIEWS_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Links — Dr. Vitor Leal | Clínica Ortoface",
  description:
    "Agende sua avaliação, acesse o site e encontre a Clínica Ortoface, em Itajaí/SC.",
  alternates: {
    canonical: "/links",
  },
};

type LinkItem = {
  label: string;
  href: string;
  icon: "whatsapp" | "site" | "instagram" | "google" | "blog";
};

const LINKS: LinkItem[] = [
  { label: "Agendar no WhatsApp", href: WHATSAPP_LINK, icon: "whatsapp" },
  { label: "Visitar o site", href: "/", icon: "site" },
  { label: "Dúvidas sobre tratamentos (blog)", href: "/blog", icon: "blog" },
  { label: "Ver no Instagram", href: SOCIAL_LINKS.instagram, icon: "instagram" },
  { label: "Avaliações no Google", href: GOOGLE_REVIEWS_URL, icon: "google" },
];

function Icon({ name }: { name: LinkItem["icon"] }) {
  switch (name) {
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
          <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 0 0 3.85 1h.003a7.94 7.94 0 0 0 5.55-13.58ZM12.05 18.4a6.56 6.56 0 0 1-3.36-.92l-.24-.14-2.5.66.67-2.44-.16-.25a6.6 6.6 0 1 1 12.24-3.5 6.56 6.56 0 0 1-6.65 6.6Zm3.6-4.93c-.2-.1-1.17-.58-1.35-.64-.18-.07-.32-.1-.45.1-.13.2-.51.64-.63.77-.11.13-.23.15-.43.05a5.4 5.4 0 0 1-2.7-2.36c-.2-.35.2-.32.58-1.08.06-.13.03-.24-.02-.34-.05-.1-.45-1.08-.61-1.48-.16-.39-.33-.33-.45-.34h-.38a.74.74 0 0 0-.53.25 2.24 2.24 0 0 0-.7 1.67c0 .98.71 1.93.81 2.06.1.13 1.4 2.13 3.38 2.99.47.2.84.32 1.13.42.47.15.9.13 1.24.08.38-.06 1.17-.48 1.33-.94.17-.46.17-.85.12-.94-.05-.09-.18-.14-.38-.24Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.256 1.216.6 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.248.637.415 1.363.465 2.428.05 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.217 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772 4.9 4.9 0 0 1-1.772 1.153c-.637.248-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.217-2.428-.465a4.9 4.9 0 0 1-1.772-1.153 4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.01 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.065.217-1.79.465-2.428A4.9 4.9 0 0 1 3.678 3.678 4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.363-.415 2.428-.465C8.944 2.01 9.283 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5ZM18.5 6.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" />
        </svg>
      );
    case "site":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 shrink-0"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.4 2.5 3.7 5.7 3.7 9s-1.3 6.5-3.7 9c-2.4-2.5-3.7-5.7-3.7-9S9.6 5.5 12 3Z" />
        </svg>
      );
    case "blog":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 shrink-0"
        >
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
          <path d="M4 21.5A2.5 2.5 0 0 1 6.5 19H20" />
        </svg>
      );
    case "google":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
          <path d="M12 2.5l2.9 6.1 6.6.7-4.9 4.6 1.3 6.6L12 17.6l-5.9 3.1 1.3-6.6-4.9-4.6 6.6-.7L12 2.5Z" />
        </svg>
      );
  }
}

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center px-5 py-14">
      <div className="w-full max-w-sm flex flex-col items-center">
        <div className="relative w-28 h-28 rounded-full overflow-hidden ring-2 ring-areia/20">
          <Image
            src="/images/site/hero-dr-vitor-pb.jpg"
            alt="Dr. Vitor Leal"
            fill
            sizes="112px"
            className="object-cover"
            priority
          />
        </div>

        <h1 className="mt-5 font-title text-2xl text-areia text-center">Dr. Vitor Leal</h1>
        <p className="mt-1 text-sm text-areia/70 text-center">Clínica Ortoface · Itajaí/SC</p>

        <nav className="mt-8 w-full flex flex-col gap-3">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full bg-areia text-verde rounded-xl px-5 py-4 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Icon name={link.icon} />
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-8 w-full rounded-xl overflow-hidden border border-areia/15">
          <iframe
            src="https://www.google.com/maps?q=Rua+Lauro+M%C3%BCller%2C+757+-+Fazenda%2C+Itaja%C3%AD+-+SC%2C+88301-401&output=embed"
            width="100%"
            height="200"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Clínica Ortoface"
          />
        </div>
        <p className="mt-3 text-xs text-areia/50 text-center">
          Rua Lauro Müller, 757 — Fazenda, Itajaí/SC
        </p>

        <p className="mt-10 text-[11px] text-areia/40 text-center">
          © {new Date().getFullYear()} Dr. Vitor Leal — CRO-SC 20602
        </p>
      </div>
    </main>
  );
}
