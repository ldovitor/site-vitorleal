import Link from "next/link";

const BASE_URL = "https://www.odontologiavitorleal.com.br";

type Item = { nome: string; href?: string };

export default function Breadcrumbs({ itens }: { itens: Item[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itens.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.nome,
      ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Você está em" className="text-sm text-cinza mb-4">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {itens.map((item, i) => (
            <li key={item.nome} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-bronze transition-colors">
                  {item.nome}
                </Link>
              ) : (
                <span aria-current="page" className="text-verde">
                  {item.nome}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
