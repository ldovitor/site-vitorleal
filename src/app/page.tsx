import Image from "next/image";
import Link from "next/link";
import ProtocoloTimeline from "@/components/ProtocoloTimeline";
import FaqAccordion from "@/components/FaqAccordion";
import CtaFinal from "@/components/CtaFinal";
import {
  CASOS_CLINICOS,
  TRATAMENTOS,
  WHATSAPP_LINK,
  REVIEWS,
  GOOGLE_REVIEWS_URL,
  GOOGLE_REVIEWS_COUNT,
} from "@/lib/content";
import { BLOG_POSTS } from "@/lib/blog";

export default function Home() {
  const casosDestaque = CASOS_CLINICOS.filter((c) => c.destaque).slice(0, 3);
  const postsRecentes = BLOG_POSTS.slice(-3).reverse();

  return (
    <>
      {/* HERO — Opção 1 do copy (ainda pendente de escolha final). Foto ao lado, em
          caixa de tamanho contido: o arquivo hero-dr-vitor-pb.jpg é só 640x640px,
          então esticá-lo em tela cheia (versão anterior) deixava a imagem borrada. */}
      <section className="section pt-12 md:pt-20">
        <div className="container-site grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl leading-[1.1] mb-6">
              Cada sorriso começa com um diagnóstico, não com uma promessa.
            </h1>
            <p className="text-base md:text-lg text-cinza leading-relaxed mb-8 max-w-md">
              Reabilitação oral e estética dental planejadas para devolver função e
              naturalidade — com a precisão de quem estuda cada caso antes de tratar.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Agendar avaliação
              </a>
              <Link href="/sobre#protocolo-leal" className="btn-secondary">
                Conhecer o Protocolo Leal
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto md:max-w-none overflow-hidden rounded-lg bg-bege">
              <Image
                src="/images/site/hero-dr-vitor-pb.jpg"
                alt="Dr. Vitor Leal em atendimento"
                fill
                priority
                className="object-cover grayscale"
                sizes="(max-width: 768px) 384px, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* APRESENTAÇÃO */}
      <section className="section bg-areia">
        <div className="container-site max-w-2xl mx-auto text-center">
          <p className="text-xl md:text-2xl leading-relaxed">
            Sou o Dr. Vitor Leal, cirurgião-dentista (CRO-SC 20602), especializado em
            reabilitação oral e estética dental. Antes de qualquer tratamento, existe um
            diagnóstico completo e um plano construído para a sua boca — não um
            procedimento padrão aplicado a todo paciente. Sigo um raciocínio próprio para
            isso, que chamo de{" "}
            <Link href="/sobre#protocolo-leal" className="text-bronze underline decoration-bronze/40">
              Protocolo Leal de Reabilitação Planejada
            </Link>
            .
          </p>
        </div>
      </section>

      {/* TRATAMENTOS */}
      <section className="section bg-bege">
        <div className="container-site">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl mb-3">Tratamentos</h2>
            <p className="text-cinza">
              Cada tratamento parte da mesma pergunta: o que o seu caso precisa para
              funcionar bem e parecer natural? A resposta segue o Protocolo Leal de
              Reabilitação Planejada.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                titulo: "Estética Dental",
                texto:
                  "Para quem quer um sorriso mais harmônico sem abrir mão da naturalidade: laminados cerâmicos, facetas em resina, clareamento e restaurações estéticas.",
                href: "/tratamentos/estetica-dental",
              },
              {
                titulo: "Reabilitação Oral",
                texto:
                  "Para casos que envolvem função e estrutura, com planejamento mais complexo: reabilitação com próteses, recuperação de mordida e mastigação.",
                href: "/tratamentos/reabilitacao-oral",
              },
              {
                titulo: "Implantes",
                texto:
                  "Para dentes perdidos ou comprometidos: implantes unitários, próteses sobre implante e reabilitações mais extensas.",
                href: "/tratamentos/implantes-dentarios",
              },
            ].map((card) => (
              <Link
                key={card.titulo}
                href={card.href}
                className="block bg-areia rounded-lg p-8 hover:shadow-sm transition-shadow"
              >
                <h3 className="text-xl mb-3">{card.titulo}</h3>
                <p className="text-sm text-cinza leading-relaxed mb-4">{card.texto}</p>
                <span className="text-sm text-bronze">Saiba mais →</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/tratamentos" className="btn-secondary">
              Ver todos os tratamentos
            </Link>
          </div>
        </div>
      </section>

      {/* DIFERENCIAL — Protocolo Leal */}
      <section className="section">
        <div className="container-site">
          <div className="max-w-xl mb-14">
            <h2 className="text-3xl mb-3">O Protocolo Leal de Reabilitação Planejada</h2>
            <p className="text-cinza">
              Todo tratamento passa pelas mesmas quatro etapas — é o processo que aplico
              a cada paciente, sem atalhos.
            </p>
          </div>
          <ProtocoloTimeline />
        </div>
      </section>

      {/* CASOS CLÍNICOS — prévia */}
      <section className="section bg-areia">
        <div className="container-site">
          <div className="max-w-xl mb-12">
            <p className="text-sm text-bronze mb-2">Casos Clínicos</p>
            <h2 className="text-3xl mb-3">Planejamento que se vê no resultado</h2>
            <p className="text-cinza">
              Cada caso tem um raciocínio por trás — o problema identificado, o plano
              construído dentro do Protocolo Leal e o motivo de cada decisão clínica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {casosDestaque.map((caso) => (
              <Link
                key={caso.id}
                href={`/casos-clinicos#${caso.id}`}
                className="group block"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden bg-bege mb-4">
                  <Image
                    src={caso.imagens[caso.imagens.length - 1]}
                    alt={caso.titulo}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="font-title text-lg">{caso.titulo}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/casos-clinicos" className="btn-secondary">
              Ver casos clínicos
            </Link>
          </div>
        </div>
      </section>

      {/* SOBRE — resumo */}
      <section className="section bg-bege">
        <div className="container-site grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-areia">
            <Image
              src="/images/site/sobre-dr-vitor-retrato.jpg"
              alt="Dr. Vitor Leal"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl mb-5">Sobre o Dr. Vitor Leal</h2>
            <p className="text-cinza leading-relaxed mb-6">
              Formado pela Uniavan, com especialização em Dentística Restauradora pelo
              IOA Style e mais de 5 anos dedicados à dentística e reabilitação oral, o Dr.
              Vitor Leal é sócio da Clínica Ortoface, em Itajaí/SC, onde aplica o
              Protocolo Leal de Reabilitação Planejada em cada caso — sempre com o
              objetivo de devolver função e naturalidade, não apenas &quot;trocar&quot; a
              aparência de um sorriso.
            </p>
            <Link href="/sobre" className="btn-secondary">
              Conhecer o Dr. Vitor Leal
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG — prévia */}
      <section className="section">
        <div className="container-site">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl mb-3">Do blog</h2>
            <p className="text-cinza">
              Respostas a dúvidas que aparecem com frequência na avaliação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {postsRecentes.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-bege rounded-lg p-8 hover:shadow-sm transition-shadow"
              >
                <p className="text-xs text-bronze mb-3">{post.dataExibicao}</p>
                <h3 className="text-lg mb-3">{post.title}</h3>
                <p className="text-sm text-cinza leading-relaxed mb-4">{post.resumo}</p>
                <span className="text-sm text-bronze">Ler artigo →</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/blog" className="btn-secondary">
              Ver todos os artigos
            </Link>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="section">
        <div className="container-site text-center">
          <h2 className="text-3xl mb-3">O que dizem os pacientes</h2>
          <p className="text-cinza text-sm mb-10">{GOOGLE_REVIEWS_COUNT} avaliações no Google</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {REVIEWS.map((review) => (
              <div key={review.autor} className="rounded-lg border border-verde/10 bg-bege/40 p-6">
                <p className="text-cinza text-sm leading-relaxed mb-4">&ldquo;{review.texto}&rdquo;</p>
                <p className="text-sm text-verde font-medium">{review.autor}</p>
                <p className="text-xs text-bronze">Avaliação no Google</p>
              </div>
            ))}
          </div>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex mt-10"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="section bg-areia">
        <div className="container-site grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-bege">
            <Image
              src="/images/site/fachada-dia.jpg"
              alt="Fachada da Clínica Ortoface"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl mb-5">Localização</h2>
            <p className="text-cinza leading-relaxed mb-2">
              Atendimento em Itajaí, com pacientes de Balneário Camboriú e Camboriú.
            </p>
            <p className="text-cinza leading-relaxed">Rua Lauro Müller, 757 — Itajaí/SC</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-bege">
        <div className="container-site max-w-2xl mx-auto">
          <h2 className="text-3xl mb-10 text-center">Perguntas frequentes</h2>
          <FaqAccordion />
        </div>
      </section>

      <CtaFinal />
    </>
  );
}
