import Link from "next/link";
import { getSubSolutionsByParent } from "@/lib/sub-solutions";

// SubSolutionGrid, ilgili ana çözümün alt ürünlerini responsive kart düzeninde listeler.
export default function SubSolutionGrid({ parentSlug }: { parentSlug: string }) {
  const solutions = getSubSolutionsByParent(parentSlug);

  if (solutions.length === 0) {
    return null;
  }

  return (
    <section className="bg-slate-gray px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
      <div className="mx-auto max-w-container-max">
        <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Alt Çözümler ve Ürünler</p>
        <h2 className="max-w-4xl font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
          Bu çözüm alanında sunduğumuz teknoloji ve ürün başlıkları
        </h2>
        <p className="mt-6 max-w-3xl text-on-surface-variant">
          AKYA Group; yazılım, donanım, izleme, raporlama ve saha teknolojilerini proje ihtiyacına göre bütünleşik bir yapıda ele alır.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution, index) => (
            <article
              className="group flex min-h-[280px] flex-col border-t-4 border-metallic-gold bg-white p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              key={solution.slug}
            >
              <span className="font-label-caps text-xs text-metallic-gold">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 font-headline-sm text-xl uppercase text-deep-navy">{solution.title}</h3>
              <p className="mt-4 line-clamp-3 text-sm leading-6 text-on-surface-variant">{solution.summary}</p>
              <Link
                className="mt-auto pt-8 font-label-caps text-label-caps uppercase text-metallic-gold transition-colors group-hover:text-deep-navy"
                href={`/cozumler/${solution.parentSlug}/${solution.slug}`}
              >
                Detayları İncele
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
