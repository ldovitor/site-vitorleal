import Image from "next/image";
import type { Metadata } from "next";
import CtaFinal from "@/components/CtaFinal";
import BeforeAfterHover from "@/components/BeforeAfterHover";
import { CASOS_CLINICOS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Casos Clínicos de Reabilitação Oral | Dr. Vitor Leal — Itajaí",
  description:
    "Casos reais de reabilitação oral e estética dental, com autorização de uso em marketing, documentados dentro do Protocolo Leal de Reabilitação Planejada.",
  alternates: {
    canonical: "/casos-clinicos",
  },
};

export default function CasosClinicosPage() {
  const destaque = CASOS_CLINICOS.filter((c) => c.destaque);
  const galeria = CASOS_CLINICOS.filter((c) => !c.destaque);

  return (
    <>
      <section className="section pt-16">
        <div className="container-site max-w-2xl">
          <h1 className="text-4xl mb-5">Casos Clínicos</h1>
          <p className="text-cinza leading-relaxed">
            Cada caso tem um raciocínio por trás — o problema identificado, o plano
            construído dentro do Protocolo Leal e o motivo de cada decisão clínica.
            Autorização de uso em marketing confirmada para todos os casos abaixo.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-site space-y-20">
          {destaque.map((caso, i) => (
            <div
              key={caso.id}
              id={caso.id}
              className="grid md:grid-cols-2 gap-8 md:gap-14 items-center scroll-mt-24"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                {caso.id === "caso-b" ? (
                  // Retrato de rosto inteiro, antes/depois de verdade — crossfade ao passar o mouse.
                  <BeforeAfterHover
                    antes={caso.imagens[0]}
                    depois={caso.imagens[1]}
                    alt={caso.titulo}
                  />
                ) : (
                  <div className={`grid ${caso.imagens.length > 1 ? "grid-cols-2 gap-3" : ""}`}>
                    {caso.imagens.map((img) => (
                      <div key={img} className="relative aspect-square rounded-lg overflow-hidden bg-bege">
                        <Image src={img} alt={caso.titulo} fill className="object-cover" sizes="50vw" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <p className="text-sm text-bronze mb-2">Caso em destaque</p>
                <h2 className="text-2xl mb-4">{caso.titulo}</h2>
                <p className="text-cinza leading-relaxed mb-4">{caso.desafio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-bege">
        <div className="container-site">
          <h2 className="text-2xl mb-8">Outros casos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galeria.map((caso) => (
              <div key={caso.id}>
                <div className="relative aspect-square rounded-lg overflow-hidden bg-areia mb-3">
                  <Image
                    src={caso.imagens[0]}
                    alt={caso.titulo}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <p className="text-sm text-cinza">{caso.desafio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
