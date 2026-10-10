import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // O otimizador de imagem on-demand desta versão do Next (16.3.5) está
    // devolvendo o arquivo errado para algumas URLs em teste local (bug
    // reproduzido e isolado nesta sessão — não é falha nos arquivos em si).
    // Desativado por segurança até investigar/atualizar; as fotos já são
    // exportadas em tamanho razoável, então o impacto de performance é
    // pequeno por enquanto.
    unoptimized: true,
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
