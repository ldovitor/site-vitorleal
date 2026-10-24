import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Teste (24/10/2026): otimizador de imagem do Next 16.4.3 ligado de novo.
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Fotos do site ficam em cache no navegador por 30 dias (o Google PageSpeed
  // apontava cache curto). Se uma foto for trocada mantendo o mesmo nome, ela
  // pode demorar até 30 dias para atualizar para quem já visitou: prefira nomes novos.
  async headers() {
    return [
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
