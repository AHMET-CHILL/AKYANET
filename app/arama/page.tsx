import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { searchSite } from "@/lib/search-data";

export const metadata: Metadata = {
  title: "Site İçi Arama | AKYA Group",
  description: "AKYA Group çözümleri, sektörleri, projeleri, referansları ve teknik içerikleri içinde arama yapın.",
  robots: {
    index: false,
    follow: true,
  },
};

type SearchPageProps = {
  searchParams: Promise<{ q?: string | string[] }>;
};

// SearchPage, URL sorgusunu site indeksinde arar ve eşleşen sayfaları listeler.
export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = Array.isArray(params.q) ? params.q[0] ?? "" : params.q ?? "";
  const results = searchSite(query);

  return (
    <main className="bg-background">
      <Navbar />

      <section className="bg-deep-navy px-margin-mobile pb-16 pt-36 text-white md:px-margin-desktop md:pb-20 md:pt-44">
        <div className="mx-auto max-w-container-max">
          <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Site İçi Arama</p>
          <h1 className="mt-4 font-display-lg text-[42px] font-extrabold uppercase leading-[1.08] md:text-display-lg">
            Aradığınız içeriği bulun
          </h1>
          <form action="/arama" className="mt-9 flex max-w-3xl border border-white/30 bg-white/10" method="get" role="search">
            <label className="sr-only" htmlFor="search-page-input">Site içinde ara</label>
            <input
              autoFocus
              className="min-w-0 flex-1 bg-transparent px-5 py-4 text-white outline-none placeholder:text-white/60"
              defaultValue={query}
              id="search-page-input"
              name="q"
              placeholder="Örn. SCADA, veri merkezi, RTÜK..."
              type="search"
            />
            <button className="shrink-0 bg-metallic-gold px-6 font-label-caps text-xs font-bold uppercase text-deep-navy hover:bg-white" type="submit">
              Ara
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white px-margin-mobile py-20 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          {!query.trim() ? (
            <EmptyState
              description="Çözümler, sektörler, referanslar ve teknik içerikler içinde aramak için bir kelime yazın."
              title="Arama kelimesi bekleniyor"
            />
          ) : results.length === 0 ? (
            <EmptyState
              description="Farklı veya daha kısa bir kelime kullanarak yeniden arama yapabilirsiniz."
              title={`“${query}” için sonuç bulunamadı`}
            />
          ) : (
            <>
              <p className="mb-10 text-on-surface-variant">
                <strong className="text-deep-navy">“{query}”</strong> için {results.length} sonuç bulundu.
              </p>
              <div className="grid grid-cols-1 gap-px bg-outline-variant">
                {results.map((result) => (
                  <Link
                    className="group grid gap-4 bg-white p-7 transition-colors hover:bg-slate-gray md:grid-cols-[190px_1fr_auto] md:items-center"
                    href={result.href}
                    key={`${result.href}-${result.title}`}
                  >
                    <span className="font-label-caps text-xs uppercase text-metallic-gold">{result.category}</span>
                    <span>
                      <strong className="block font-headline-sm text-xl uppercase text-deep-navy group-hover:text-metallic-gold">{result.title}</strong>
                      <span className="mt-2 block text-sm leading-6 text-on-surface-variant">{result.description}</span>
                    </span>
                    <span className="font-label-caps text-xs uppercase text-deep-navy">Sayfaya Git</span>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

// EmptyState, boş sorgu ve sonuç bulunamayan aramalar için ortak bilgilendirme alanını oluşturur.
function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-l-4 border-metallic-gold bg-slate-gray p-8">
      <h2 className="font-headline-sm text-2xl uppercase text-deep-navy">{title}</h2>
      <p className="mt-4 text-on-surface-variant">{description}</p>
    </div>
  );
}
