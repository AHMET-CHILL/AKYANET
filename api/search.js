import { readFileSync } from "node:fs";
import { join } from "node:path";

let cachedIndex;

function normalize(value) {
  return String(value || "").toLocaleLowerCase("tr-TR");
}

function loadIndex() {
  if (cachedIndex) return cachedIndex;
  const filePath = join(process.cwd(), "src", "projects-data.json");
  const data = JSON.parse(readFileSync(filePath, "utf8"));

  cachedIndex = [
    {
      title: "Ana Sayfa",
      type: "Sayfa",
      category: "AKYA Energy",
      url: "/",
      excerpt: "AKYA Energy enerji altyapıları, çevresel teknolojiler, sensör sistemleri ve endüstriyel yazılım alanlarında ürün odaklı Ar-Ge projeleri geliştirir.",
    },
    {
      title: "Projeler",
      type: "Sayfa",
      category: "Proje portföyü",
      url: "/projeler/",
      excerpt: "Enerji, çevre, sensör ve yazılım disiplinlerini bir araya getiren AKYA Energy proje listesi.",
    },
    {
      title: "Teknoloji Alanları",
      type: "Sayfa",
      category: "Teknoloji mimarisi",
      url: "/teknoloji-alanlari/",
      excerpt: "Akıllı enerji, çevresel teknolojiler, ileri sensörler, yapay zeka ve yenilenebilir otonom sistemler.",
    },
    ...data.categories.map((item) => ({
      title: item.title,
      type: "Teknoloji Alanı",
      category: "Teknoloji Alanları",
      url: `/teknoloji-alanlari/${item.slug}/`,
      excerpt: item.text,
    })),
    ...data.projects.map((item) => ({
      title: item.title,
      type: "Proje",
      category: item.category,
      url: item.url,
      excerpt: `${item.card} ${item.tagline} ${item.overview}`,
    })),
  ];

  return cachedIndex;
}

export default function handler(request, response) {
  const query = normalize(request.query?.q).trim();
  if (query.length < 2) {
    response.status(200).json({ results: [] });
    return;
  }

  const results = loadIndex()
    .map((item) => {
      const haystack = normalize([item.title, item.type, item.category, item.excerpt].join(" "));
      const score = haystack.includes(query) ? (normalize(item.title).includes(query) ? 2 : 1) : 0;
      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, "tr-TR"))
    .slice(0, 12)
    .map(({ score, ...item }) => item);

  response.status(200).json({ results });
}
