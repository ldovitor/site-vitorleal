"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, WHATSAPP_LINK, SOCIAL_LINKS } from "@/lib/content";

export default function Footer() {
  const pathname = usePathname();

  // Mesmo caso do Header: clicar num link para a rota atual não navega nem
  // rola — força a rolagem pro topo (ex.: "Início" no rodapé, página rolada).
  const scrollToTopIfSameRoute = (href: string) => (e: React.MouseEvent) => {
    if (href === pathname) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-verde text-areia">
      <div className="container-site py-16 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-title text-xl mb-3">Dr. Vitor Leal</p>
          <p className="text-sm text-areia/70 leading-relaxed">
            Cirurgião-dentista, CRO-SC 20602 — sócio da Clínica Ortoface. Reabilitação
            oral e estética dental em Itajaí, atendendo também Balneário Camboriú e
            Camboriú.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium mb-3 text-areia/90">Navegação</p>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={scrollToTopIfSameRoute(link.href)}
                  className="text-sm text-areia/70 hover:text-areia"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium mb-3 text-areia/90">Contato</p>
          <p className="text-sm text-areia/70 leading-relaxed mb-2">
            Rua Lauro Müller, 757 — Itajaí/SC
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-terracota hover:underline"
          >
            Falar no WhatsApp
          </a>

          <div className="flex gap-4 mt-5">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Clínica Ortoface"
              className="text-areia/70 hover:text-areia transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.256 1.216.6 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.248.637.415 1.363.465 2.428.05 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.217 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772 4.9 4.9 0 0 1-1.772 1.153c-.637.248-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.217-2.428-.465a4.9 4.9 0 0 1-1.772-1.153 4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.01 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.065.217-1.79.465-2.428A4.9 4.9 0 0 1 3.678 3.678 4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.363-.415 2.428-.465C8.944 2.01 9.283 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5ZM18.5 6.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Clínica Ortoface"
              className="text-areia/70 hover:text-areia transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M13.5 21v-8h2.67l.4-3.1h-3.07V8.1c0-.9.25-1.5 1.53-1.5h1.64V3.8c-.28-.04-1.25-.12-2.38-.12-2.36 0-3.97 1.44-3.97 4.08v2.28H7.66v3.1h2.66v8h3.18Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-areia/10">
        <div className="container-site py-6 text-xs text-areia/50 flex flex-wrap gap-x-4 gap-y-2 justify-between">
          <span>© {new Date().getFullYear()} Dr. Vitor Leal — CRO-SC 20602. Todos os direitos reservados.</span>
          <Link
            href="/politica-de-privacidade"
            onClick={scrollToTopIfSameRoute("/politica-de-privacidade")}
            className="hover:text-areia"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
