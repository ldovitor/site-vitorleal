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
        <p>
          <strong>Controlador dos dados:</strong> Dr. Vitor Leal, cirurgião-dentista
          (CRO-SC 20602), e Clínica Ortoface, Rua Lauro Müller, 757, Itajaí/SC. Contato para
          assuntos de privacidade: WhatsApp (47) 99640-1067.
        </p>
        <h2 className="text-2xl text-verde pt-2">Quais dados coletamos</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Contato pelo WhatsApp:</strong> ao clicar em um botão de WhatsApp, a
            conversa acontece no aplicativo. Recebemos seu nome, telefone e o conteúdo da
            mensagem que você enviar. Quando a mensagem já vem preenchida, ela inclui no
            final uma indicação da página do site de onde você veio (por exemplo, &quot;Ref:
            site/blog&quot;), que você pode apagar antes de enviar.
          </li>
          <li>
            <strong>Uso do site:</strong> usamos o Google Analytics para medir visitas
            (páginas vistas, cidade aproximada, tipo de aparelho e cliques nos botões de
            WhatsApp). Essas informações são estatísticas. O Analytics só é ativado se você
            clicar em &quot;Aceitar&quot; no aviso de cookies; se recusar, nada é enviado a ele. O
            Google grava cookies no seu navegador para isso, e você pode apagá-los nas
            configurações do navegador a qualquer momento. O site funciona normalmente com
            ou sem o aceite. Os mapas do Google exibidos em algumas páginas
            também podem gravar cookies.
          </li>
        </ul>
        <p>
          Mensagens de WhatsApp podem conter dados de saúde, que são dados sensíveis. Por
          isso, pedimos que não envie exames, fotos ou detalhes clínicos pelo chat antes de
          ser atendido; combinamos isso na consulta.
        </p>
        <h2 className="text-2xl text-verde pt-2">Para que usamos e em que base legal</h2>
        <p>
          Responder ao seu contato, agendar e organizar o atendimento (a pedido seu), cumprir
          obrigações legais e regulatórias, como a guarda de prontuário, e entender quais
          conteúdos do site ajudam as pessoas (interesse em melhorar o site). Não vendemos
          seus dados pessoais.
        </p>
        <h2 className="text-2xl text-verde pt-2">Com quem compartilhamos</h2>
        <p>
          Com os serviços que operam o site e o atendimento: Google (Analytics e Maps),
          WhatsApp (Meta) e a hospedagem do site (Vercel). Alguns desses serviços podem
          processar dados em servidores fora do Brasil, conforme as políticas de cada
          empresa. Se você se tornar paciente, os dados do atendimento ficam no sistema de
          gestão da clínica, sob sigilo profissional.
        </p>
        <h2 className="text-2xl text-verde pt-2">Por quanto tempo guardamos</h2>
        <p>
          Mensagens de contato que não viram atendimento são apagadas quando deixam de ser
          necessárias. Dados de pacientes ficam no prontuário pelo prazo exigido pela
          legislação e pelas normas do conselho de odontologia.
        </p>
        <h2 className="text-2xl text-verde pt-2">Seus direitos</h2>
        <p>
          Você pode pedir confirmação de que tratamos seus dados, acesso, correção,
          anonimização, bloqueio ou eliminação, portabilidade, informação sobre
          compartilhamento e revogação do consentimento, nos termos do art. 18 da LGPD. Para
          isso, fale com a clínica pelo WhatsApp (47) 99640-1067. Você também pode reclamar à
          Autoridade Nacional de Proteção de Dados (ANPD).
        </p>
        <p>
          Este site não se destina a menores de 18 anos sem o acompanhamento de um
          responsável.
        </p>
        <p className="text-sm">Última atualização: outubro de 2026.</p>
      </div>
    </section>
  );
}
