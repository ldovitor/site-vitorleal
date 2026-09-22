import Image from "next/image";

type Props = {
  antes: string;
  depois: string;
  alt: string;
};

/**
 * Foto "antes" com crossfade suave para "depois" ao passar o mouse
 * (ou ao segurar o toque, no mobile) — puramente em CSS, sem JS.
 */
export default function BeforeAfterHover({ antes, depois, alt }: Props) {
  return (
    <div className="group relative aspect-square rounded-lg overflow-hidden bg-bege">
      <Image src={antes} alt={`${alt} — antes`} fill className="object-cover" sizes="50vw" />
      <Image
        src={depois}
        alt={`${alt} — depois`}
        fill
        className="object-cover absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-active:opacity-100"
        sizes="50vw"
      />
      <span className="absolute bottom-3 left-3 text-xs tracking-wide uppercase bg-verde/75 text-areia px-2 py-1 rounded transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0">
        Antes
      </span>
      <span className="absolute bottom-3 left-3 text-xs tracking-wide uppercase bg-terracota text-verde px-2 py-1 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100">
        Depois
      </span>
    </div>
  );
}
