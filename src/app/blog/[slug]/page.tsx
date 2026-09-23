import { notFound } from "next/navigation";
import Link from "next/link";
import CtaFinal from "@/components/CtaFinal";
import { BLOG_POSTS } from "@/lib/blog";
import { TRATAMENTOS, WHATSAPP_LINK } from "@/lib/content";

const BASE_URL = "https://site-vitorleal.vercel.app";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Dr. Vitor Leal`,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const tratamento = TRATAMENTOS.find((t) => t.slug === post.tratamentoRelacionado);
  const relacionados = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.dataISO,
    dateModified: post.dataISO,
    author: {
      "@type": "Person",
      name: "Dr. Vitor Leal",
      jobTitle: "Cirurgião-dentista",
    },
    publisher: {
      "@type": "Organization",
      name: "Clínica Ortoface",
    },
    mainEntityOfPage: `${BASE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="section pt-16 bg-bege">
        <div className="container-site max-w-2xl">
          <p className="text-sm text-bronze mb-3">{post.dataExibicao}</p>
          <h1 className="text-4xl mb-4">{post.title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container-site max-w-2xl space-y-6 text-cinza leading-relaxed">
          <p className="text-lg text-verde font-medium leading-relaxed">
            {post.respostaDireta}
          </p>

          <div className="bg-bege rounded-lg p-6">
            <p className="text-sm font-medium text-verde mb-3">Resumo rápido</p>
            <ul className="space-y-2">
              {post.resumoRapido.map((item, i) => (
                <li key={i} className="text-sm flex gap-2">
                  <span className="text-bronze shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {post.corpo.map((bloco, i) => (
            <div key={i} className="space-y-4">
              {bloco.titulo && <h2 className="text-2xl text-verde pt-2">{bloco.titulo}</h2>}
              {bloco.paragrafos.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
              {bloco.lista && (
                <ul className="space-y-2 list-disc pl-5">
                  {bloco.lista.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {post.tabela && (
            <div className="pt-2">
              <p className="text-sm font-medium text-verde mb-3">{post.tabela.titulo}</p>
              <div className="overflow-x-auto rounded-lg border border-verde/10">
                <table className="w-full text-sm">
                  <thead className="bg-bege">
                    <tr>
                      {post.tabela.colunas.map((col) => (
                        <th key={col} className="text-left font-medium text-verde px-4 py-3">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {post.tabela.linhas.map((linha, i) => (
                      <tr key={i} className="border-t border-verde/10">
                        {linha.map((cel, j) => (
                          <td key={j} className="px-4 py-3 align-top">
                            {cel}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="pt-6 flex flex-wrap gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Agendar avaliação
            </a>
            {tratamento && (
              <Link href={`/tratamentos/${tratamento.slug}`} className="btn-secondary">
                Saiba mais sobre {tratamento.nome}
              </Link>
            )}
          </div>
        </div>
      </section>

      {relacionados.length > 0 && (
        <section className="section pt-0">
          <div className="container-site max-w-2xl">
            <h2 className="text-xl mb-6">Outros artigos</h2>
            <div className="space-y-4">
              {relacionados.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="block group">
                  <p className="text-verde group-hover:text-bronze transition-colors">{p.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaFinal />
    </>
  );
}
