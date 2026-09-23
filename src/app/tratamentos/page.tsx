import Link from "next/link";
import type { Metadata } from "next";
import CtaFinal from "@/components/CtaFinal";
import { TRATAMENTOS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tratamentos Odontológicos em Itajaí e Balneário Camboriú | Dr. Vitor Leal",
  description:
    "Estética dental, reabilitação oral e implantes em Itajaí e Balneário Camboriú, planejados dentro do Protocolo Leal de Reabilitação Planejada.",
};

const CATEGORIAS = ["Estética Dental", "Reabilitação Oral", "Implantes"] as const;

export default function TratamentosPage() {
  return (
    <>
      <section className="section pt-16">
        <div className="container-site max-w-2xl">
          <h1 className="text-4xl mb-5">Tratamentos</h1>
          <p className="text-cinza leading-relaxed">
            Cada tratamento parte da mesma pergunta: o que o seu caso precisa para
            funcionar bem e parecer natural? Todos seguem o mesmo raciocínio — o
            Protocolo Leal de Reabilitação Planejada.
          </p>
        </div>
      </section>

      {CATEGORIAS.map((categoria, i) => (
        <section key={categoria} className={`section pt-0 ${i === 0 ? "" : ""}`}>
          <div className="container-site">
            <h2 className="text-2xl mb-6">{categoria}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {TRATAMENTOS.filter((t) => t.categoria === categoria).map((t) => (
                <Link
                  key={t.slug}
                  href={`/tratamentos/${t.slug}`}
                  className="block bg-bege rounded-lg p-8 hover:shadow-sm transition-shadow"
                >
                  <h3 className="text-xl mb-3">{t.nome}</h3>
                  <p className="text-sm text-cinza leading-relaxed mb-4">{t.resumoCard}</p>
                  <span className="text-sm text-bronze">
                    {t.completo ? "Ver tratamento →" : "Em desenvolvimento →"}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaFinal />
    </>
  );
}
