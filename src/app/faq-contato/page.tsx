import Image from "next/image";
import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import { WHATSAPP_LINK } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ e Contato | Dr. Vitor Leal",
  description:
    "Perguntas frequentes, WhatsApp e localização do consultório do Dr. Vitor Leal em Itajaí/SC.",
};

export default function FaqContatoPage() {
  return (
    <>
      <section className="section pt-16">
        <div className="container-site max-w-2xl">
          <h1 className="text-4xl mb-5">Perguntas frequentes</h1>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-site max-w-2xl">
          <FaqAccordion />
        </div>
      </section>

      <section className="section bg-bege">
        <div className="container-site grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h2 className="text-2xl mb-5">Contato</h2>
            <p className="text-cinza leading-relaxed mb-6">
              O canal principal é o WhatsApp — é por ali que a avaliação é agendada e
              suas dúvidas são respondidas diretamente.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Falar no WhatsApp
            </a>

            <div className="mt-10 space-y-1 text-cinza">
              <p className="font-medium text-verde">Endereço</p>
              <p>Rua Lauro Müller, 757 — Fazenda, Itajaí/SC</p>
              <p className="text-sm">Atendemos também pacientes de Balneário Camboriú e Camboriú.</p>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-areia">
            <Image
              src="/images/site/fachada-noite.jpg"
              alt="Fachada da Clínica Ortoface à noite"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <div className="w-full aspect-[16/6] rounded-lg bg-bege flex items-center justify-center text-cinza text-sm">
            Mapa incorporado (Google Maps embed) — a conectar
          </div>
        </div>
      </section>
    </>
  );
}
