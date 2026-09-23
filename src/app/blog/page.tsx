import Link from "next/link";
import type { Metadata } from "next";
import CtaFinal from "@/components/CtaFinal";
import { BLOG_POSTS } from "@/lib/blog";
import { TRATAMENTOS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog | Dúvidas sobre Tratamentos Dentários — Dr. Vitor Leal",
  description:
    "Respostas a dúvidas comuns sobre lentes de contato dental, implantes, próteses, reabilitação oral e clareamento, por Dr. Vitor Leal (CRO-SC 20602), em Itajaí/SC.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <section className="section pt-16">
        <div className="container-site max-w-2xl">
          <h1 className="text-4xl mb-5">Blog</h1>
          <p className="text-cinza leading-relaxed">
            Respostas a dúvidas que aparecem com frequência na avaliação — para quem
            quer entender antes de decidir.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-site grid md:grid-cols-2 gap-6">
          {BLOG_POSTS.slice()
            .reverse()
            .map((post) => {
              const tratamento = TRATAMENTOS.find((t) => t.slug === post.tratamentoRelacionado);
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-bege rounded-lg p-8 hover:shadow-sm transition-shadow"
                >
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-bronze mb-3">
                    {tratamento && (
                      <span className="uppercase tracking-wide font-medium">{tratamento.categoria}</span>
                    )}
                    <span aria-hidden="true">·</span>
                    <span>{post.dataExibicao}</span>
                  </div>
                  <h2 className="text-xl mb-3">{post.title}</h2>
                  <p className="text-sm text-cinza leading-relaxed mb-4">{post.resumo}</p>
                  <span className="text-sm text-bronze">Ler artigo →</span>
                </Link>
              );
            })}
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
