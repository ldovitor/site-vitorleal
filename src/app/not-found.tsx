import Link from "next/link";
import type { Metadata } from "next";
import { WHATSAPP_LINK } from "@/lib/content";

export const metadata: Metadata = {
  title: "Página não encontrada | Dr. Vitor Leal",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="section pt-24 text-center">
      <div className="container-site max-w-lg">
        <p className="text-sm text-bronze mb-4">Erro 404</p>
        <h1 className="text-4xl mb-5">Essa página não existe</h1>
        <p className="text-cinza leading-relaxed mb-8">
          O link pode estar desatualizado, ou o endereço foi digitado errado. Vamos te
          levar de volta pra onde você provavelmente queria ir.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            Voltar ao início
          </Link>
          <Link href="/tratamentos" className="btn-secondary">
            Ver tratamentos
          </Link>
        </div>
        <p className="text-sm text-cinza mt-8">
          Ou fala direto com a gente pelo{" "}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-bronze underline">
            WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  );
}
