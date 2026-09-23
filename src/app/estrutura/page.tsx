import Image from "next/image";
import type { Metadata } from "next";
import CtaFinal from "@/components/CtaFinal";

export const metadata: Metadata = {
  title: "Estrutura da Clínica Ortoface | Itajaí/SC",
  description:
    "Conheça o espaço da Clínica Ortoface em Itajaí/SC: consultórios, recepção e entrada — a estrutura pensada para o seu atendimento.",
  alternates: {
    canonical: "/estrutura",
  },
};

const FOTOS = [
  { src: "/images/estrutura/consultorio-1.jpg", alt: "Consultório odontológico da Clínica Ortoface", width: 1366, height: 581 },
  { src: "/images/estrutura/recepcao.jpg", alt: "Recepção da Clínica Ortoface", width: 382, height: 510 },
  { src: "/images/estrutura/sala-espera.jpg", alt: "Sala de espera da Clínica Ortoface", width: 382, height: 510 },
  { src: "/images/estrutura/consultorio-2.jpg", alt: "Consultório odontológico da Clínica Ortoface", width: 1366, height: 573 },
  { src: "/images/estrutura/escada.jpg", alt: "Escada interna da Clínica Ortoface", width: 382, height: 510 },
  { src: "/images/estrutura/fachada-entrada.jpg", alt: "Entrada da Clínica Ortoface, em Itajaí/SC", width: 382, height: 510 },
];

export default function EstruturaPage() {
  return (
    <>
      <section className="section pt-16">
        <div className="container-site max-w-2xl">
          <h1 className="text-4xl mb-5">Estrutura da Ortoface</h1>
          <p className="text-cinza leading-relaxed">
            O ambiente pensado pra você se sentir bem antes mesmo do atendimento
            começar — recepção, sala de espera e consultórios equipados para
            planejamento de precisão.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-site">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
            {FOTOS.map((foto) => (
              <div key={foto.src} className="break-inside-avoid rounded-lg overflow-hidden bg-bege">
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  width={foto.width}
                  height={foto.height}
                  className="w-full h-auto"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
