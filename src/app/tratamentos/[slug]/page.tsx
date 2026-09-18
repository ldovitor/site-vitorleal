import { notFound } from "next/navigation";
import CtaFinal from "@/components/CtaFinal";
import { TRATAMENTOS, WHATSAPP_LINK } from "@/lib/content";

export function generateStaticParams() {
  return TRATAMENTOS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata(props: PageProps<"/tratamentos/[slug]">) {
  const { slug } = await props.params;
  const tratamento = TRATAMENTOS.find((t) => t.slug === slug);
  if (!tratamento) return {};
  return {
    title: tratamento.title,
  };
}

const ETAPAS = [
  { chave: "problema", numero: null, titulo: "Por que isso incomoda" },
  { chave: "diagnostico", numero: "01", titulo: "Diagnóstico" },
  { chave: "planejamento", numero: "02", titulo: "Planejamento" },
  { chave: "execucao", numero: "03", titulo: "Execução" },
  { chave: "resultado", numero: "04", titulo: "Resultado / Acompanhamento" },
] as const;

export default async function TratamentoPage(props: PageProps<"/tratamentos/[slug]">) {
  const { slug } = await props.params;
  const tratamento = TRATAMENTOS.find((t) => t.slug === slug);
  if (!tratamento) notFound();

  return (
    <>
      <section className="section pt-16 bg-bege">
        <div className="container-site max-w-2xl">
          <p className="text-sm text-bronze mb-3">{tratamento.categoria}</p>
          <h1 className="text-4xl mb-4">{tratamento.nome}</h1>
          {!tratamento.completo && (
            <p className="text-sm text-cinza italic">
              Página em desenvolvimento — já segue a estrutura de quatro etapas do
              Protocolo Leal; o copy completo entra na próxima revisão de conteúdo.
            </p>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container-site max-w-2xl space-y-12">
          {ETAPAS.map((etapa) => (
            <div key={etapa.chave}>
              <div className="flex items-baseline gap-3 mb-2">
                {etapa.numero && (
                  <span className="font-title text-bronze text-lg">{etapa.numero}</span>
                )}
                <h2 className="text-2xl">{etapa.titulo}</h2>
              </div>
              <p className="text-cinza leading-relaxed">{tratamento[etapa.chave]}</p>
            </div>
          ))}

          <div className="pt-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {tratamento.cta}
            </a>
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
