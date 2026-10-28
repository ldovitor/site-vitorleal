"use client";

import { useState } from "react";

const ENDERECO = "Rua Lauro Müller, 757 - Fazenda, Itajaí - SC, 88301-401";
const MAPA_INCORPORADO = `https://www.google.com/maps?q=${encodeURIComponent(ENDERECO)}&output=embed`;
const MAPA_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ENDERECO)}`;

// O quadro do Google só é carregado depois do clique: antes disso nenhum dado
// do visitante vai para o Google (LGPD, art. 7, I; ver .lgpd/gaps.md, G1).
export default function MapaSobClique({ titulo }: { titulo: string }) {
  const [aberto, setAberto] = useState(false);

  if (aberto) {
    return (
      <iframe
        src={MAPA_INCORPORADO}
        className="w-full h-full border-0 block"
        referrerPolicy="no-referrer-when-downgrade"
        title={titulo}
      />
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-bege px-4 text-center">
      <p className="text-sm text-cinza">Rua Lauro Müller, 757 — Itajaí/SC</p>
      <button
        type="button"
        onClick={() => setAberto(true)}
        className="rounded bg-verde px-4 py-2 text-sm text-white"
      >
        Ver mapa
      </button>
      <p className="text-xs text-cinza">
        Ao abrir, o Google recebe dados da sua visita.{" "}
        <a href={MAPA_LINK} target="_blank" rel="noopener noreferrer" className="underline">
          Abrir no Google Maps
        </a>
      </p>
    </div>
  );
}
