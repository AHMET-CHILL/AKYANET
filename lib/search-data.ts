import { projects } from "@/lib/project-data";
import { references } from "@/lib/reference-data";
import { sectorPages } from "@/lib/sector-data";
import { solutionPages } from "@/lib/site-data";
import { subSolutions } from "@/lib/sub-solutions";
import { technicalInsights } from "@/lib/technical-insights";

// SearchItem, site içi aramada listelenebilen ortak sonuç modelini tanımlar.
export type SearchItem = {
  category: string;
  title: string;
  description: string;
  href: string;
  keywords: string[];
};

const staticPages: SearchItem[] = [
  {
    category: "Kurumsal",
    title: "Ana Sayfa",
    description: "AKYA Group dijital altyapı, kritik tesis ve sürdürülebilirlik çözümleri.",
    href: "/",
    keywords: ["akya", "dijital dönüşüm", "ana sayfa"],
  },
  {
    category: "Kurumsal",
    title: "Hakkımızda",
    description: "AKYA Group'un mühendislik yaklaşımı, uzmanlığı ve kurumsal yapısı.",
    href: "/hakkimizda",
    keywords: ["şirket", "kurumsal", "hakkımızda"],
  },
  {
    category: "Kurumsal",
    title: "İletişim",
    description: "Proje talepleri, iletişim bilgileri, adres ve iletişim formu.",
    href: "/iletisim",
    keywords: ["iletişim", "adres", "telefon", "e-posta", "teklif"],
  },
  {
    category: "İçerik",
    title: "Teknik İçgörüler",
    description: "Veri merkezi ve kritik tesis mühendisliği hakkında teknik içerikler.",
    href: "/teknik-icgoruler",
    keywords: ["makale", "teknik", "içgörü", "bilgi"],
  },
];

// searchItems, aranabilir tüm site içeriklerini tek, statik bir indeks altında birleştirir.
export const searchItems: SearchItem[] = [
  ...staticPages,
  ...solutionPages.map((solution) => ({
    category: "Çözüm",
    title: solution.title,
    description: solution.summary,
    href: `/cozumler/${solution.slug}`,
    keywords: [solution.group, ...solution.outcomes, ...solution.capabilities, ...solution.useCases],
  })),
  ...subSolutions.map((solution) => ({
    category: solution.parentTitle,
    title: solution.title,
    description: solution.summary,
    href: `/cozumler/${solution.parentSlug}/${solution.slug}`,
    keywords: [...solution.scopeTitles, ...solution.scopeItems, ...solution.integrations, ...solution.useCases],
  })),
  ...sectorPages.map((sector) => ({
    category: "Sektör",
    title: sector.title,
    description: sector.description,
    href: `/sektorler/${sector.slug}`,
    keywords: [sector.group, sector.introduction, ...sector.solutions],
  })),
  ...projects.map((project) => ({
    category: project.statusLabel,
    title: project.title,
    description: project.summary,
    href: `/projeler/${project.status}/${project.slug}`,
    keywords: [...project.tags, ...project.scope, ...project.approach, ...project.values],
  })),
  ...technicalInsights.map((insight) => ({
    category: "Teknik İçgörü",
    title: insight.title,
    description: insight.excerpt,
    href: `/teknik-icgoruler/${insight.slug}`,
    keywords: [insight.category, insight.introduction, insight.note],
  })),
  ...references.map((reference) => ({
    category: "Referans",
    title: reference.shortName,
    description: reference.description,
    href: reference.projectHref,
    keywords: [reference.name, reference.projectLabel, reference.statusLabel],
  })),
];

// normalizeSearchText, Türkçe karakter ve büyük/küçük harf farklarını arama karşılaştırması için sadeleştirir.
export function normalizeSearchText(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// searchSite, sorgudaki bütün kelimeleri içerikte arar ve en güçlü eşleşmeleri önce döndürür.
export function searchSite(query: string) {
  const normalizedQuery = normalizeSearchText(query);
  const terms = normalizedQuery.split(" ").filter((term) => term.length > 1);

  if (terms.length === 0) {
    return [];
  }

  return searchItems
    .map((item) => {
      const title = normalizeSearchText(item.title);
      const category = normalizeSearchText(item.category);
      const content = normalizeSearchText([item.title, item.category, item.description, ...item.keywords].join(" "));

      if (!terms.every((term) => content.includes(term))) {
        return null;
      }

      const score = terms.reduce((total, term) => {
        if (title === term) return total + 12;
        if (title.startsWith(term)) return total + 8;
        if (title.includes(term)) return total + 6;
        if (category.includes(term)) return total + 3;
        return total + 1;
      }, 0);

      return { ...item, score };
    })
    .filter((item): item is SearchItem & { score: number } => item !== null)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, "tr"));
}
