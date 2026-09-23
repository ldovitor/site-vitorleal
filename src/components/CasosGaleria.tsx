"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { CasoClinico } from "@/lib/content";

export default function CasosGaleria({ casos }: { casos: CasoClinico[] }) {
  const [abertoId, setAbertoId] = useState<string | null>(null);
  const casoAberto = casos.find((c) => c.id === abertoId) ?? null;

  useEffect(() => {
    if (!casoAberto) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbertoId(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [casoAberto]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {casos.map((caso) => (
          <button
            key={caso.id}
            type="button"
            onClick={() => setAbertoId(caso.id)}
            className="group text-left"
            aria-label={`Ampliar foto: ${caso.titulo}`}
          >
            <div className="relative aspect-square rounded-lg overflow-hidden bg-areia mb-3">
              <Image
                src={caso.imagens[0]}
                alt={caso.titulo}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <p className="text-sm text-cinza">{caso.desafio}</p>
          </button>
        ))}
      </div>

      {casoAberto && (
        <div
          className="fixed inset-0 z-[60] bg-verde/90 flex items-center justify-center p-4 md:p-10"
          onClick={() => setAbertoId(null)}
        >
          <button
            type="button"
            onClick={() => setAbertoId(null)}
            aria-label="Fechar"
            className="absolute top-5 right-5 text-areia text-3xl leading-none w-10 h-10 flex items-center justify-center rounded-full hover:bg-areia/10 transition-colors"
          >
            ×
          </button>
          <div
            className="relative w-full max-w-2xl aspect-square rounded-lg overflow-hidden bg-verde"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={casoAberto.imagens[0]}
              alt={casoAberto.titulo}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="absolute bottom-6 left-0 right-0 text-center text-areia/85 text-sm px-6">
            {casoAberto.desafio}
          </p>
        </div>
      )}
    </>
  );
}
