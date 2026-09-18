"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-areia/95 backdrop-blur border-b border-verde/10">
      <div className="container-site flex items-center justify-between h-20">
        <Link href="/" className="font-title text-xl md:text-2xl text-verde">
          Dr. Vitor Leal
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-verde hover:text-bronze transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/faq-contato" className="hidden md:inline-flex btn-primary text-sm">
          Agendar avaliação
        </Link>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Abrir menu"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-px bg-verde" />
          <span className="w-6 h-px bg-verde" />
          <span className="w-6 h-px bg-verde" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-verde/10 bg-areia">
          <nav className="container-site flex flex-col py-4 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-verde"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/faq-contato" className="btn-primary text-sm mt-2" onClick={() => setOpen(false)}>
              Agendar avaliação
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
