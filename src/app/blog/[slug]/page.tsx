import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CtaFinal from "@/components/CtaFinal";
import { BLOG_POSTS } from "@/lib/blog";
import { TRATAMENTOS, WHATSAPP_LINK } from "@/lib/content";

const BASE_URL = "https://site-vitorleal.vercel.app";

function estimateReadingMinutes(post: (typeof BLOG_POSTS)[number]) {
  const texto = [
    post.respostaDireta,
    ...post.resumoRapido,
    ...post.corpo.flatMap((b) => [...b.paragrafos, ...(b.lista ?? [])]),
  ].join(" ");
  const palavras = texto.trim().split(/\s+/).length;
  return Math.max(1, Math.round(palavras / 180));
}

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
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const tratamento = TRATAMENTOS.find((t) => t.slug === post.tratamentoRelacionado);
  const relacionados = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const minutosLeitura = estimateReadingMinutes(post);

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
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-bronze mb-3">
            {tratamento && (
              <span className="uppercase tracking-wide font-medium">{tratamento.categoria}</span>
            )}
            <span aria-hidden="true">·</span>
            <span>{post.dataExibicao}</span>
            <span aria-hidden="true">·</span>
            <span>{minutosLeitura} min de leitura</span>
          </div>
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

          <p className="text-xs text-cinza/70 italic">
            Conteúdo informativo, não substitui uma avaliação odontológica presencial —
            cada caso é diferente.
          </p>

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

          <div className="flex items-center gap-4 pt-8 border-t border-verde/10">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-bege shrink-0">
              <Image
                src="/images/site/sobre-dr-vitor-retrato.jpg"
                alt="Dr. Vitor Leal"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="text-sm">
              <Link href="/sobre" className="text-verde font-medium hover:text-bronze transition-colors">
                Dr. Vitor Leal
              </Link>
              <p className="text-cinza">Cirurgião-dentista, CRO-SC 20602 — sócio da Clínica Ortoface, Itajaí/SC.</p>
            </div>
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
