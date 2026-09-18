import { WHATSAPP_LINK } from "@/lib/content";

export default function CtaFinal() {
  return (
    <section className="bg-verde text-areia">
      <div className="container-site section text-center">
        <h2 className="text-3xl md:text-4xl mb-4">O primeiro passo é sempre uma avaliação</h2>
        <p className="text-areia/75 mb-8 max-w-xl mx-auto">
          Antes de decidir qualquer tratamento, vale entender o seu caso com calma.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-terracota text-verde rounded-lg px-8 py-4 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Agendar avaliação
        </a>
      </div>
    </section>
  );
}
