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

          {post.corpo.map((bloco, i) => (
            <div key={i} className="space-y-4">
              {bloco.titulo && <h2 className="text-2xl text-verde pt-2">{bloco.titulo}</h2>}
              {bloco.paragrafos.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          ))}

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

      <CtaFinal />
    </>
  );
}
