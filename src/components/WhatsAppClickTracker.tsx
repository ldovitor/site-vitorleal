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
    // Anúncios: o endereço de destino traz um código de campanha (ex.: ?ref=GP1).
    // Guardamos na sessão e levamos para a mensagem do WhatsApp, para a recepção
    // ligar o paciente ao anúncio no OrtoClean mesmo que ele navegue por outras páginas.
    try {
      const codigo = new URLSearchParams(window.location.search).get("ref");
      if (codigo && /^[A-Za-z]{2}\d{1,3}$/.test(codigo)) {
        sessionStorage.setItem("ref_anuncio", codigo.toUpperCase());
      }
    } catch {
      // sem sessionStorage: segue sem o código
    }

    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.('a[href*="wa.me"]') as HTMLAnchorElement | null;
      if (target) {
        // Acrescenta à mensagem a página de origem (ex.: "Ref: site/blog/x"), para a
        // recepção ligar o contato ao canal "Site" no OrtoClean.
        try {
          const url = new URL(target.href);
          const texto = url.searchParams.get("text") ?? "";
          if (texto && !texto.includes("Ref: site")) {
            const pagina = window.location.pathname.replace(/\/$/, "");
            let anuncio = "";
            try {
              const codigo = sessionStorage.getItem("ref_anuncio");
              if (codigo && /^[A-Z]{2}\d{1,3}$/.test(codigo)) anuncio = ` (ref. ${codigo})`;
            } catch {
              // sem sessionStorage
            }
            url.searchParams.set("text", `${texto} (Ref: site${pagina})${anuncio}`);
            target.href = url.toString();
          }
        } catch {
          // mantém o link original
        }
      }
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
