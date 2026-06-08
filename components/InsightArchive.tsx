"use client";

import { useMemo, useState } from "react";
import { insightCategories, technicalInsights } from "@/lib/technical-insights";

// InsightArchive, kategori seçimine göre teknik içgörü kartlarını istemci tarafında filtreler.
export default function InsightArchive() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  // filteredInsights, seçili kategoriye uyan içerikleri gereksiz yeniden hesaplamadan üretir.
  const filteredInsights = useMemo(() => {
    if (activeCategory === "Tümü") {
      return technicalInsights;
    }

    if (activeCategory === "Karbon Analizi") {
      return technicalInsights.filter(
        (insight) => insight.category === "Karbon Analizi" || insight.category === "Sürdürülebilirlik",
      );
    }

    return technicalInsights.filter((insight) => insight.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <div className="mb-12 flex flex-wrap gap-2" aria-label="Teknik içgörü kategorileri">
        {insightCategories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              aria-pressed={isActive}
              className={`border px-5 py-3 font-label-caps text-[12px] font-bold uppercase transition-colors ${
                isActive
                  ? "border-metallic-gold bg-metallic-gold text-deep-navy"
                  : "border-outline-variant bg-white text-deep-navy hover:border-metallic-gold"
              }`}
              key={category}
              onClick={() => setActiveCategory(category)}
              type="button"
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredInsights.map((insight) => (
          <article className="group flex min-h-[510px] flex-col bg-white" key={insight.slug}>
            <div className="h-60 overflow-hidden">
              <img
                alt={insight.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={insight.image}
              />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-bold uppercase">
                <span className="text-metallic-gold">{insight.category}</span>
                <span className="text-on-surface-variant">{insight.date}</span>
              </div>
              <h2 className="mb-4 font-headline-sm text-xl uppercase leading-tight text-deep-navy">{insight.title}</h2>
              <p className="mb-7 line-clamp-3 text-sm leading-6 text-on-surface-variant">{insight.excerpt}</p>
              <a
                className="mt-auto font-label-caps text-label-caps font-bold text-deep-navy transition-colors hover:text-metallic-gold"
                href={`/teknik-icgoruler/${insight.slug}`}
              >
                Detayları Oku
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
