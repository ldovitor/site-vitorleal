import type { MetadataRoute } from "next";
import { TRATAMENTOS } from "@/lib/content";

const BASE_URL = "https://site-vitorleal.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { route: "", priority: 1 },
    { route: "/tratamentos", priority: 0.9 },
    { route: "/casos-clinicos", priority: 0.8 },
    { route: "/sobre", priority: 0.7 },
    { route: "/faq-contato", priority: 0.7 },
    { route: "/politica-de-privacidade", priority: 0.2 },
  ].map(({ route, priority }) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    priority,
  }));

  const treatmentRoutes = TRATAMENTOS.map((tratamento) => ({
    url: `${BASE_URL}/tratamentos/${tratamento.slug}`,
    lastModified: new Date(),
    priority: 0.85,
  }));

  return [...staticRoutes, ...treatmentRoutes];
}
