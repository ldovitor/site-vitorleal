"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Clicar num link para a rota em que você já está não navega nem rola —
  // aqui forçamos a rolagem pro topo nesse caso (ex.: "Início" com a página
  // já rolada pra baixo).
  const scrollToTopIfSameRoute = (href: string) => (e: React.MouseEvent) => {
    if (href === pathname) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-areia/95 backdrop-blur border-b border-verde/10">
      <div className="container-site flex items-center justify-between h-20">
        <Link
          href="/"
          onClick={scrollToTopIfSameRoute("/")}
          className="font-title text-xl md:text-2xl text-verde"
        >
          Dr. Vitor Leal
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={scrollToTopIfSameRoute(link.href)}
              className="text-sm text-verde hover:text-bronze transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex btn-primary text-sm"
        >
          Agendar avaliação
        </a>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Abrir menu"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-px bg-verde" />
          <span className="w-6 h-px bg-verde" />
          <span className="w-6 h-px bg-verde" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-verde/10 bg-areia">
          <nav className="container-site flex flex-col py-4 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-verde"
                onClick={(e) => {
                  setOpen(false);
                  scrollToTopIfSameRoute(link.href)(e);
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm mt-2"
              onClick={() => setOpen(false)}
            >
              Agendar avaliação
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
