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
};

export default nextConfig;
