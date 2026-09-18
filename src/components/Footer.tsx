import Link from "next/link";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-verde text-areia">
      <div className="container-site py-16 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-title text-xl mb-3">Dr. Vitor Leal</p>
          <p className="text-sm text-areia/70 leading-relaxed">
            Cirurgião-dentista, CRO-SC 20602. Reabilitação oral e estética dental em
            Itajaí, atendendo também Balneário Camboriú e Camboriú.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium mb-3 text-areia/90">Navegação</p>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-areia/70 hover:text-areia">
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
        </div>
      </div>

      <div className="border-t border-areia/10">
        <div className="container-site py-6 text-xs text-areia/50 flex flex-wrap gap-x-4 gap-y-2 justify-between">
          <span>© {new Date().getFullYear()} Dr. Vitor Leal — CRO-SC 20602. Todos os direitos reservados.</span>
          <Link href="/politica-de-privacidade" className="hover:text-areia">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
