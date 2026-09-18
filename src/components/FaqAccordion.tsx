"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/content";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-verde/10 border-t border-b border-verde/10">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.pergunta}>
            <button
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-title text-lg">{item.pergunta}</span>
              <span className="text-bronze text-xl shrink-0">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <p className="pb-5 text-sm text-cinza leading-relaxed max-w-2xl">
                {item.resposta}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
