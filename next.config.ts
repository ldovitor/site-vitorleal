import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Teste (24/10/2026): otimizador de imagem do Next 16.4.3 ligado de novo.
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Fotos do site ficam em cache no navegador por 30 dias (o Google PageSpeed
  // apontava cache curto). Se uma foto for trocada mantendo o mesmo nome, ela
  // pode demorar até 30 dias para atualizar para quem já visitou: prefira nomes novos.
  // Endereço antigo do artigo sobre implante imediato (mudou em 27/10/2026): 301 para não perder
  // a indexação do Google nem os links já compartilhados.
  async redirects() {
    return [
      {
        source: "/blog/implante-dentario-imediato-mesmo-dia-da-extracao",
        destination: "/blog/implante-dentario-imediato-quando-e-indicado",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
};

export default nextConfig;
