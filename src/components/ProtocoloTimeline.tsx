import { PROTOCOLO_ETAPAS } from "@/lib/content";

export default function ProtocoloTimeline({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-8 md:grid-cols-4 md:gap-6">
      {PROTOCOLO_ETAPAS.map((etapa, i) => (
        <div key={etapa.numero} className="relative">
          {i < PROTOCOLO_ETAPAS.length - 1 && (
            <div className="hidden md:block absolute top-4 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-bronze/40" />
          )}
          <div className="flex md:flex-col md:items-start items-center gap-4 md:gap-3">
            <span className="font-title text-2xl text-bronze shrink-0">{etapa.numero}</span>
            <div>
              <p className="font-title text-lg mb-1">{etapa.titulo}</p>
              {!compact && (
                <p className="text-sm text-cinza leading-relaxed">{etapa.texto}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
