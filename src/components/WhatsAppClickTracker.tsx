"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Descobre de qual parte da página saiu o clique, para o relatório mostrar
// qual botão realmente traz conversas (e não só em qual página).
function origemDoClique(link: Element): string {
  if (link.closest("header")) return "cabecalho";
  if (link.closest("footer")) return "rodape";
  if (link.getAttribute("aria-label") === "Falar no WhatsApp") return "botao_flutuante";
  if (link.closest("nav")) return "menu";
  return "conteudo";
}

// Ouve cliques em qualquer link de WhatsApp (header, rodapé, botão flutuante,
// CTAs) e dispara um evento no GA4 — sem precisar instrumentar cada botão
// individualmente, já que todos linkam pra wa.me.
export default function WhatsAppClickTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.('a[href*="wa.me"]');
      if (target && typeof window.gtag === "function") {
        window.gtag("event", "whatsapp_click", {
          event_category: "engagement",
          event_label: window.location.pathname,
          click_location: origemDoClique(target),
          link_text: (target.textContent ?? "").trim().slice(0, 60) || "icone",
        });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
