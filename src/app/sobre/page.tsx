import Image from "next/image";
import type { Metadata } from "next";
import ProtocoloTimeline from "@/components/ProtocoloTimeline";
import CtaFinal from "@/components/CtaFinal";

export const metadata: Metadata = {
  title: "Sobre o Dr. Vitor Leal | Dentista em Itajaí e Balneário Camboriú",
  description:
    "Cirurgião-dentista CRO-SC 20602, formado pela Uniavan, especialista em Dentística Restauradora, sócio da Clínica Ortoface em Itajaí/SC.",
};

export default function SobrePage() {
  return (
    <>
      <section className="section">
        <div className="container-site grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-20">
          <div>
            <h1 className="text-4xl mb-5">Dr. Vitor Leal</h1>
            <p className="text-cinza leading-relaxed">
              Cirurgião-dentista, CRO-SC 20602 — especializado em reabilitação oral e
              estética dental.
            </p>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-bege">
            <Image
              src="/images/site/sobre-dr-vitor-retrato.jpg"
              alt="Dr. Vitor Leal"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="container-site max-w-2xl space-y-6 text-cinza leading-relaxed">
          <p>
            Sou cirurgião-dentista, formado em Odontologia pela Uniavan, com registro
            CRO-SC 20602. Atuo há mais de 5 anos especializado em dentística e
            reabilitação oral, e sou sócio da Clínica Ortoface, em Itajaí/SC, ao lado do
            Dr. Claudio Piccoli — especialista em ortodontia. Na Ortoface, mantemos uma
            estrutura pensada para planejamento de precisão: scanner intraoral e
            radiografia digital, que permitem enxergar cada caso com detalhe antes de
            qualquer decisão clínica.
          </p>
          <p>
            Minha atuação é concentrada em reabilitação oral e estética dental — áreas
            que, na minha visão, não deveriam ser tratadas separadamente: um sorriso
            funciona bem e parece natural quando os dois lados são pensados juntos, desde
            o início.
          </p>
          <p>
            Tenho especialização em Dentística Restauradora pelo IOA Style, além de
            aperfeiçoamento em Facetas em Resina Composta e atualização em Laminados
            Cerâmicos. Mas técnica e curso, sozinhos, não definem um bom resultado — o que
            define é o raciocínio clínico aplicado a cada caso. Foi esse raciocínio que
            organizei no Protocolo Leal de Reabilitação Planejada: entender o que motivou
            o problema, planejar a solução com calma, executar preservando o máximo da
            estrutura natural, e acompanhar de perto o resultado.
          </p>
          <p>
            Trabalho para pacientes que valorizam esse processo — que preferem entender o
            plano antes de decidir, e que buscam resultado natural, não uma transformação
            que &quot;grita&quot; que foi feita. Cada consulta começa com diagnóstico, não
            com uma lista de procedimentos.
          </p>

          {/* Parágrafo pessoal — esboço, ver site-vitorleal-copy-home-sobre-faq.md para nota de contexto */}
          <p>
            O que me atrai na reabilitação oral e na estética dental é o desafio de unir
            as duas coisas ao mesmo tempo: devolver função a uma boca que não funciona
            bem, e fazer isso de um jeito que pareça natural, não &quot;consertado&quot;.
            É um tipo de trabalho que pede paciência — com o diagnóstico, com o
            planejamento, e com o próprio paciente, que muitas vezes chega inseguro sobre
            o resultado. Gosto especialmente dos casos que exigem esse cuidado maior,
            porque é neles que o planejamento faz mais diferença.
          </p>
          <p>
            Na Ortoface, ao lado do Dr. Claudio Piccoli, tenho a estrutura para trabalhar
            assim com calma — do diagnóstico ao acompanhamento. E foi observando esse
            processo se repetir, caso após caso, que organizei o que hoje chamo de
            Protocolo Leal de Reabilitação Planejada: não é uma fórmula pronta, é a forma
            como aprendi que um bom resultado acontece — devagar, com escuta, sem pular
            etapas.
          </p>
        </div>
      </section>

      {/* Credenciais */}
      <section className="section bg-bege">
        <div className="container-site max-w-2xl">
          <h2 className="text-2xl mb-6">Formação e credenciais</h2>
          <ul className="space-y-3 text-cinza">
            <li>CRO-SC 20602</li>
            <li>Graduação em Odontologia — Uniavan</li>
            <li>Especialização em Dentística Restauradora — IOA Style</li>
            <li>Aperfeiçoamento em Facetas em Resina Composta</li>
            <li>Atualização em Laminados Cerâmicos</li>
            <li>Sócio da Clínica Ortoface, Itajaí/SC</li>
          </ul>
        </div>
      </section>

      {/* Protocolo Leal detalhado */}
      <section id="protocolo-leal" className="section scroll-mt-24">
        <div className="container-site">
          <div className="max-w-xl mb-14">
            <h2 className="text-3xl mb-3">O Protocolo Leal de Reabilitação Planejada</h2>
            <p className="text-cinza">
              O processo que aplico a cada paciente, sem atalhos — do diagnóstico ao
              acompanhamento.
            </p>
          </div>
          <ProtocoloTimeline />
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
