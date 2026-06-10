import type { MetadataRoute } from "next";
import { referenceProjects } from "@/lib/reference-project-data";
import { sectorPages } from "@/lib/sector-data";
import { solutionPages } from "@/lib/site-data";
import { subSolutions } from "@/lib/sub-solutions";
import { technicalInsights } from "@/lib/technical-insights";
import { verimetContent } from "@/lib/verimet-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.akya.net";

const staticRoutes = [
  "",
  "/cozumler",
  "/sektorler",
  "/referanslar",
  "/referanslar/tamamlanan",
  "/referanslar/devam-eden",
  "/hakkimizda",
  "/iletisim",
  "/teknik-icgoruler",
];

// sitemap, statik ve veri kaynağından üretilen tüm indekslenebilir sayfaları Google'a sunar.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...solutionPages.map((solution) => `/cozumler/${solution.slug}`),
    ...subSolutions.map((solution) => `/cozumler/${solution.parentSlug}/${solution.slug}`),
    verimetContent.href,
    ...sectorPages.map((sector) => `/sektorler/${sector.slug}`),
    ...referenceProjects.map((project) => `/referanslar/${project.status}/${project.slug}`),
    ...technicalInsights.map((insight) => `/teknik-icgoruler/${insight.slug}`),
  ];

  return [...new Set(routes)].map((route) => ({
    url: new URL(route || "/", siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").filter(Boolean).length === 1 ? 0.8 : 0.7,
  }));
}
