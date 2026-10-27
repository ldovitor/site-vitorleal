import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Dr. Vitor Leal",
  robots: { index: false },
  alternates: {
    canonical: "/politica-de-privacidade",
  },
};

export default function PoliticaPrivacidadePage() {
  return (
    <section className="section pt-16">
      <div className="container-site max-w-2xl space-y-6 text-cinza leading-relaxed">
        <h1 className="text-4xl mb-4 text-verde">Política de Privacidade</h1>
        <p>
          Esta política explica como o site do Dr. Vitor Leal (cirurgião-dentista, CRO-SC
          20602) e da Clínica Ortoface, em Itajaí/SC, trata dados pessoais, conforme a Lei
          Geral de Proteção de Dados (Lei 13.709/2018, LGPD).
        </p>
        <h2 className="text-2xl text-verde pt-2">Quais dados coletamos</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Contato pelo WhatsApp:</strong> ao clicar em um botão de WhatsApp, a
            conversa acontece no aplicativo. Recebemos seu nome, telefone e o conteúdo da
            mensagem que você enviar, além da página do site de onde você veio (indicada na
            própria mensagem).
          </li>
          <li>
            <strong>Uso do site:</strong> usamos o Google Analytics para medir visitas
            (páginas vistas, cidade aproximada, tipo de aparelho e cliques nos botões de
            WhatsApp). Essas informações são estatísticas e usam cookies do Google, que só são ativados depois que você clica em “Aceitar” no aviso de cookies do site. Você pode mudar a escolha a qualquer momento em “Preferências de cookies”, no rodapé.
          </li>
        </ul>
        <h2 className="text-2xl text-verde pt-2">Para que usamos</h2>
        <p>
          Responder ao seu contato, agendar e organizar o atendimento, e entender quais
          conteúdos do site ajudam as pessoas. Não vendemos dados e não os usamos para
          decisões automatizadas.
        </p>
        <h2 className="text-2xl text-verde pt-2">Com quem compartilhamos</h2>
        <p>
          Com os serviços que operam o site e o atendimento: Google (Analytics e Maps),
          WhatsApp (Meta) e a hospedagem do site (Vercel). Se você se tornar paciente, os
          dados do atendimento ficam no sistema de gestão da clínica, sob sigilo
          profissional.
        </p>
        <h2 className="text-2xl text-verde pt-2">Por quanto tempo guardamos</h2>
        <p>
          Pelo tempo necessário para cumprir a finalidade e as obrigações legais e
          regulatórias (inclusive a guarda de prontuário, quando há tratamento).
        </p>
        <h2 className="text-2xl text-verde pt-2">Seus direitos</h2>
        <p>
          Você pode pedir confirmação de que tratamos seus dados, acesso, correção,
          anonimização ou eliminação, informação sobre compartilhamento e revogação do
          consentimento, nos termos do art. 18 da LGPD. Para isso, fale com a clínica pelo
          WhatsApp (47) 99640-1067.
        </p>
        <p className="text-sm">Última atualização: outubro de 2026.</p>
      </div>
    </section>
  );
}
