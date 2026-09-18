import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Dr. Vitor Leal",
  robots: { index: false },
};

export default function PoliticaPrivacidadePage() {
  return (
    <section className="section pt-16">
      <div className="container-site max-w-2xl space-y-6 text-cinza leading-relaxed">
        <h1 className="text-4xl mb-4 text-verde">Política de Privacidade</h1>
        <p className="text-sm italic">
          [Rascunho estrutural — texto final a redigir conforme a LGPD antes da
          publicação. Este site coleta dados via WhatsApp/formulário de contato e usa
          Google Analytics.]
        </p>
        <p>
          Esta página descreverá quais dados são coletados (nome, telefone, mensagens
          enviadas via WhatsApp ou formulário), a finalidade do uso (agendamento e
          contato relacionado a tratamentos odontológicos), o tempo de retenção, e os
          direitos do titular dos dados conforme a Lei Geral de Proteção de Dados
          (LGPD).
        </p>
        <p>Ferramentas de terceiros usadas no site: Google Analytics, Trustindex (avaliações do Google), WhatsApp.</p>
      </div>
    </section>
  );
}
