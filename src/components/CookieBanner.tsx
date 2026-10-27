"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CHAVE = "cookies_escolha";
export const EVENTO_ABRIR_COOKIES = "abrir-preferencias-cookies";

// Liga a medição (Google Analytics e anúncios) só depois do "Aceitar".
// O padrão, definido no layout antes de qualquer medição, é tudo negado.
function concederMedicao() {
  window.gtag?.("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  });
}

function negarMedicao() {
  window.gtag?.("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export default function CookieBanner() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    // Lê a escolha guardada depois da montagem (evita diferença com o HTML do servidor).
    const leitura = setTimeout(() => {
      try {
        const salva = localStorage.getItem(CHAVE);
        if (salva === "aceito") concederMedicao();
        else if (salva !== "recusado") setVisivel(true);
      } catch {
        // sem armazenamento local: pergunta a cada visita e não mede
        setVisivel(true);
      }
    }, 0);
    const reabrir = () => setVisivel(true);
    window.addEventListener(EVENTO_ABRIR_COOKIES, reabrir);
    return () => {
      clearTimeout(leitura);
      window.removeEventListener(EVENTO_ABRIR_COOKIES, reabrir);
    };
  }, []);

  function escolher(aceitou: boolean) {
    try {
      localStorage.setItem(CHAVE, aceitou ? "aceito" : "recusado");
    } catch {
      // segue sem guardar a escolha
    }
    if (aceitou) concederMedicao();
    else negarMedicao();
    setVisivel(false);
  }

  if (!visivel) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 bg-areia border-t border-verde/20 shadow-lg"
    >
      <div className="container-site py-4 flex flex-col md:flex-row md:items-center gap-4 justify-between">
        <p className="text-sm text-verde/90 max-w-3xl">
          Usamos cookies para medir o uso do site e dos nossos anúncios. A escolha é sua: o
          site funciona do mesmo jeito se você recusar. Saiba mais na{" "}
          <Link href="/politica-de-privacidade" className="underline">
            política de privacidade
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button type="button" className="btn-secondary" onClick={() => escolher(false)}>
            Recusar
          </button>
          <button type="button" className="btn-primary" onClick={() => escolher(true)}>
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
