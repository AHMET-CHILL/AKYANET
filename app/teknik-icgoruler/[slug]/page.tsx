import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { findInsightBySlug, technicalInsights } from "@/lib/technical-insights";

type InsightDetailPageProps = {
  params: Promise<{ slug: string }>;
};

// generateStaticParams, tüm teknik içgörü detaylarının build sırasında statik olarak üretilmesini sağlar.
export function generateStaticParams() {
  return technicalInsights.map((insight) => ({ slug: insight.slug }));
}

// generateMetadata, her teknik içgörü için başlık ve açıklamayı içerikten üretir.
export async function generateMetadata({ params }: InsightDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = findInsightBySlug(slug);

  if (!insight) {
    return { title: "Teknik İçgörü Bulunamadı | AKYA Group" };
  }

  return {
    title: `${insight.title} | AKYA Group`,
    description: insight.excerpt,
  };
}

// InsightDetailPage, seçilen içgörüyü teknik makale düzeninde sunar.
export default async function InsightDetailPage({ params }: InsightDetailPageProps) {
  const { slug } = await params;
  const insight = findInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  const relatedInsights = technicalInsights
    .filter((item) => item.slug !== insight.slug)
    .slice(0, 3);

  return (
    <main className="bg-background">
      <Navbar />

      <article>
        <header className="bg-deep-navy px-margin-mobile pb-16 pt-44 text-white md:px-margin-desktop md:pb-20 md:pt-52">
          <div className="mx-auto max-w-container-max">
            <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-label-caps text-[12px] font-bold uppercase">
              <span className="text-metallic-gold">{insight.category}</span>
              <span className="text-primary-fixed-dim">{insight.date}</span>
            </div>
            <h1 className="max-w-5xl font-display-lg text-4xl font-extrabold uppercase leading-tight md:text-6xl">
              {insight.title}
            </h1>
            <p className="mt-7 max-w-3xl font-body-lg text-body-lg text-primary-fixed-dim">{insight.introduction}</p>
          </div>
        </header>

        <div className="bg-deep-navy px-margin-mobile pb-16 md:px-margin-desktop md:pb-24">
          <div className="mx-auto h-[320px] max-w-container-max overflow-hidden md:h-[540px]">
            <img alt={insight.alt} className="h-full w-full object-cover" src={insight.image} />
          </div>
        </div>

        <div className="bg-white px-margin-mobile py-20 md:px-margin-desktop md:py-section-padding">
          <div className="mx-auto grid max-w-container-max grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="max-w-3xl space-y-16">
              {insight.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="mb-6 font-headline-lg text-3xl uppercase text-deep-navy md:text-4xl">{section.title}</h2>
                  <div className="space-y-5 font-body-lg text-body-lg leading-8 text-on-surface-variant">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.points && (
                    <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {section.points.map((point) => (
                        <li className="border-l-4 border-metallic-gold bg-slate-gray p-4 text-sm font-semibold text-deep-navy" key={point}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <aside className="h-fit border-t-4 border-metallic-gold bg-slate-gray p-7 lg:sticky lg:top-32">
              <p className="mb-4 font-label-caps text-label-caps uppercase text-metallic-gold">Teknik Not</p>
              <p className="leading-7 text-on-surface-variant">{insight.note}</p>
              <a
                className="mt-8 inline-flex border-b-2 border-deep-navy pb-1 font-label-caps text-label-caps font-bold uppercase text-deep-navy transition-colors hover:border-metallic-gold hover:text-metallic-gold"
                href="/teknik-icgoruler"
              >
                İçgörülere Dön
              </a>
            </aside>
          </div>
        </div>
      </article>

      <section className="bg-slate-gray px-margin-mobile py-20 md:px-margin-desktop md:py-24">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Okumaya Devam Edin</p>
          <h2 className="mb-10 font-headline-lg text-3xl uppercase text-deep-navy md:text-4xl">Benzer Teknik İçgörüler</h2>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {relatedInsights.map((item) => (
              <a className="group bg-white" href={`/teknik-icgoruler/${item.slug}`} key={item.slug}>
                <div className="h-44 overflow-hidden">
                  <img alt={item.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={item.image} />
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase text-metallic-gold">{item.category}</span>
                  <h3 className="mt-3 font-headline-sm text-lg uppercase leading-tight text-deep-navy">{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
