"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
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
        });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
