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
          Esta política explica como a Clínica Ortoface e o Dr. Vitor Leal (cirurgião-dentista,
          CRO-SC 20602), em Itajaí/SC, tratam dados pessoais, conforme a Lei Geral de
          Proteção de Dados (Lei 13.709/2018, LGPD).
        </p>

        <h2 className="text-2xl text-verde pt-2">Quem somos (controlador)</h2>
        <p>
          Clínica Ortoface, Rua Lauro Müller, 757, Itajaí/SC. Responsável técnico: Dr. Vitor
          Leal, cirurgião-dentista, CRO-SC 20602.
        </p>

        <h2 className="text-2xl text-verde pt-2">Encarregado pelo tratamento de dados</h2>
        <p>
          Dr. Vitor Leal, CRO-SC 20602. Contato: WhatsApp (47) 99640-1067 e e-mail{" "}
          <a href="mailto:ldo.vitor@gmail.com" className="underline">
            ldo.vitor@gmail.com
          </a>
          .
        </p>

        <h2 className="text-2xl text-verde pt-2">
          Quais dados tratamos, para quê e com que base
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Você fala conosco pelo WhatsApp ou pelo site.</strong> Tratamos nome,
            telefone, mensagem, a página do site de onde você veio, o código da campanha e
            se você veio de um anúncio. Usamos para responder e agendar, a pedido seu
            (procedimentos preliminares a contrato, art. 7, V, da LGPD).
          </li>
          <li>
            <strong>Você é paciente.</strong> Tratamos identificação, contato, histórico de
            saúde, exames e imagens do tratamento, orçamentos e pagamentos, para cuidar da
            sua saúde e manter o prontuário (tutela da saúde, art. 11, II, “f”, e
            obrigações legais).
          </li>
          <li>
            <strong>Você usa o site.</strong> Medimos páginas vistas, cidade aproximada, tipo
            de aparelho e cliques nos botões de WhatsApp, para entender quais conteúdos
            ajudam. Os cookies de medição do Google Analytics só são gravados se você clicar
            em “Aceitar” (consentimento, art. 7, I). Você pode mudar a escolha a qualquer
            momento em “Preferências de cookies”, no rodapé.
          </li>
          <li>
            <strong>Mapa de localização.</strong> O mapa do Google só é carregado quando você
            clica em “Ver mapa” (consentimento). Até lá, o Google não recebe dados do mapa.
          </li>
          <li>
            <strong>Mensagens como pedido de avaliação ou parabéns.</strong> Usamos primeiro
            nome, telefone e data de nascimento para manter o relacionamento (legítimo
            interesse, art. 7, IX). Se não quiser receber, avise e deixamos de enviar.
          </li>
          <li>
            <strong>Fotos e vídeos de tratamento em redes sociais.</strong> Só com o seu
            consentimento específico, por termo assinado (art. 11, I), que pode ser retirado
            a qualquer momento.
          </li>
        </ul>
        <p>Não vendemos dados e não tomamos decisões automatizadas sobre você.</p>

        <h2 className="text-2xl text-verde pt-2">Com quem compartilhamos</h2>
        <p>
          Com fornecedores que nos ajudam a atender, como operadores: o sistema de gestão da
          clínica (OrtoClean), WhatsApp e Instagram (Meta), Google (Analytics, Maps e
          Anúncios), a hospedagem do site (Vercel), ferramentas de apoio e organização do
          atendimento e laboratórios, no mínimo necessário para o seu tratamento. Os dados
          de atendimento ficam sob sigilo profissional.
        </p>

        <h2 className="text-2xl text-verde pt-2">Transferência para fora do Brasil</h2>
        <p>
          Alguns fornecedores ficam fora do Brasil, como nos Estados Unidos e na França. A
          transferência é feita com as garantias previstas na LGPD (arts. 33 a 36).
        </p>

        <h2 className="text-2xl text-verde pt-2">Por quanto tempo guardamos</h2>
        <p>
          Prontuário: no mínimo 20 anos a partir do último registro, prazo que a clínica
          adota com base na Lei 13.787/2018 e nas orientações do Conselho Federal de
          Odontologia. Contato de quem não virou paciente: até 12 meses. Dados de medição do
          site: 14 meses.
        </p>

        <h2 className="text-2xl text-verde pt-2">Seus direitos (art. 18)</h2>
        <p>
          Você pode pedir confirmação do tratamento, acesso, correção, anonimização ou
          eliminação do que não for necessário, portabilidade, informação sobre
          compartilhamento e sobre a possibilidade de não consentir, e revogação do
          consentimento. Peça pelo contato do encarregado; respondemos em até 15 dias. Você
          também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).
        </p>

        <h2 className="text-2xl text-verde pt-2">Segurança</h2>
        <p>
          Usamos acesso por senha, restrição de quem vê o prontuário, cópias de segurança e
          protocolo para incidentes. Se ocorrer incidente que possa lhe causar risco
          relevante, avisamos você e a ANPD nos prazos da lei.
        </p>

        <h2 className="text-2xl text-verde pt-2">Crianças e adolescentes</h2>
        <p>O tratamento de menores é feito com consentimento de um responsável legal.</p>

        <p className="text-sm">Última atualização: outubro de 2026. Versão 2.</p>
      </div>
    </section>
  );
}
