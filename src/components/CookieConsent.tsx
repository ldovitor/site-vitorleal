"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-E88S3QJLRX";
const STORAGE_KEY = "cookie-consent";

const EVENTO = "cookie-consent-change";
let memoria: string | null = null; // usado se o navegador bloquear o armazenamento

function assinar(callback: () => void) {
  window.addEventListener(EVENTO, callback);
  return () => window.removeEventListener(EVENTO, callback);
}

function lerEscolha(): string {
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? memoria ?? "nenhuma";
  } catch {
    return memoria ?? "nenhuma";
  }
}

// O Google Analytics só é carregado depois que o visitante aceita. Quem recusa
// (ou ainda não escolheu) não envia nenhum dado ao Analytics.
export default function CookieConsent() {
  const escolha = useSyncExternalStore(assinar, lerEscolha, () => "servidor");
  const pronto = escolha !== "servidor";
  const consent = escolha === "granted" ? "granted" : escolha === "denied" ? "denied" : null;

  function escolher(valor: "granted" | "denied") {
    memoria = valor;
    try {
      window.localStorage.setItem(STORAGE_KEY, valor);
    } catch {
      // segue só em memória
    }
    window.dispatchEvent(new Event(EVENTO));
  }

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}
      {pronto && consent === null && (
        <div
          role="dialog"
          aria-label="Aviso de cookies"
          className="fixed inset-x-0 bottom-0 z-50 bg-verde text-areia p-4 shadow-lg"
        >
          <div className="mx-auto flex max-w-3xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm">
              Usamos cookies para entender como o site é usado. Veja a{" "}
              <Link href="/politica-de-privacidade" className="underline">
                Política de Privacidade
              </Link>
              .
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => escolher("denied")}
                className="rounded border border-areia px-4 py-2 text-sm"
              >
                Recusar
              </button>
              <button
                type="button"
                onClick={() => escolher("granted")}
                className="rounded bg-areia px-4 py-2 text-sm text-verde"
              >
                Aceitar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
