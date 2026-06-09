import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getSubSolutionsByParent, type SubSolution } from "@/lib/sub-solutions";

// SubSolutionPageLayout, bütün alt çözüm sayfalarının ortak ve tutarlı sunum yapısını oluşturur.
export default function SubSolutionPageLayout({ solution }: { solution: SubSolution }) {
  const relatedSolutions = getSubSolutionsByParent(solution.parentSlug)
    .filter((item) => item.slug !== solution.slug)
    .slice(0, 3);

  return (
    <main className="bg-background">
      <Navbar />

      <section className="relative flex min-h-[620px] items-end overflow-hidden px-margin-mobile pb-16 pt-32 text-white md:px-margin-desktop md:pb-24 md:pt-44">
        <img alt={solution.image.alt} className="absolute inset-0 h-full w-full object-cover" src={solution.image.hero} />
        <div className="absolute inset-0 bg-deep-navy/80" />
        <div className="relative z-10 mx-auto w-full max-w-container-max">
          <nav aria-label="Sayfa yolu" className="mb-10 flex flex-wrap gap-2 text-sm text-primary-fixed-dim">
            <Link className="hover:text-white" href="/">Ana Sayfa</Link>
            <span>/</span>
            <Link className="hover:text-white" href="/cozumler">Çözümler</Link>
            <span>/</span>
            <Link className="hover:text-white" href={`/cozumler/${solution.parentSlug}`}>{solution.parentTitle}</Link>
            <span>/</span>
            <span className="text-white">{solution.title}</span>
          </nav>
          <p className="mb-4 font-label-caps text-label-caps uppercase text-metallic-gold">{solution.parentTitle}</p>
          <h1 className="max-w-5xl font-display-lg text-[40px] font-extrabold uppercase leading-[1.08] md:text-display-lg">
            {solution.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-primary-fixed-dim">
            {solution.heroSubtitle ?? solution.summary}
          </p>
          <Link
            className="mt-9 inline-flex bg-metallic-gold px-8 py-4 font-label-caps text-label-caps font-bold uppercase text-deep-navy transition-colors hover:bg-white"
            href="/iletisim"
          >
            Teklif / Bilgi Al
          </Link>
        </div>
      </section>

      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Çözüm Tanımı</p>
            <h2 className="font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Saha ihtiyacına göre tasarlanan bütünleşik yapı</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-on-surface-variant">
            {(solution.introduction ?? [
              solution.summary,
              "AKYA Group, bu çözümü mevcut altyapı, operasyon hedefleri ve büyüme planlarıyla birlikte değerlendirir; tasarımdan entegrasyona ve raporlamaya kadar ölçülebilir bir uygulama yaklaşımı kurar.",
            ]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="bg-slate-gray px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Hizmet ve Ürün Kapsamı</p>
          <h2 className="mb-12 max-w-4xl font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
            Proje kapsamını oluşturan çalışma alanları
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {solution.scopeTitles.map((title, index) => (
              <article className="border-t-4 border-metallic-gold bg-white p-7 shadow-sm" key={title}>
                <span className="font-label-caps text-xs text-metallic-gold">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mb-4 mt-5 font-headline-sm text-xl uppercase text-deep-navy">{title}</h3>
                <p className="text-sm leading-6 text-on-surface-variant">{solution.scopeItems[index]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {solution.deliverables && solution.deliverables.length > 0 ? (
        <section className="bg-deep-navy px-margin-mobile py-24 text-white md:px-margin-desktop md:py-section-padding">
          <div className="mx-auto max-w-container-max">
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Teslim Çıktıları</p>
            <h2 className="mb-12 max-w-4xl font-headline-lg text-4xl uppercase md:text-headline-lg">
              Projeyi izlenebilir ve uygulanabilir hale getiren dokümanlar
            </h2>
            <div className="grid grid-cols-1 gap-px bg-white/15 md:grid-cols-2 lg:grid-cols-4">
              {solution.deliverables.map((deliverable, index) => (
                <article className="min-h-40 bg-deep-navy p-7" key={deliverable}>
                  <span className="font-label-caps text-xs text-metallic-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-5 font-semibold leading-7 text-white">{deliverable}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Kullanım Alanları</p>
            <h2 className="mb-9 font-headline-lg text-4xl uppercase text-deep-navy">Farklı tesis tiplerine uyarlanabilir</h2>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {solution.useCases.map((item) => (
                <li className="border-l-4 border-metallic-gold bg-slate-gray p-5 font-semibold text-deep-navy" key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Teknik Entegrasyonlar</p>
            <h2 className="mb-9 font-headline-lg text-4xl uppercase text-deep-navy">Mevcut sistemlerle birlikte çalışır</h2>
            <div className="flex flex-wrap gap-3">
              {solution.integrations.map((integration) => (
                <span className="border border-outline-variant px-5 py-3 font-semibold text-deep-navy" key={integration}>{integration}</span>
              ))}
          </div>
          </div>
        </div>
      </section>

      <section className="bg-deep-navy px-margin-mobile py-24 text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden">
            <img alt={solution.image.alt} className="aspect-[4/3] h-full w-full object-cover opacity-75" src={solution.image.hero} />
          </div>
          <div>
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Mühendislik Yaklaşımı</p>
            <h2 className="font-headline-lg text-4xl uppercase md:text-headline-lg">Veriyi uygulanabilir teknik kararlara dönüştürüyoruz</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-primary-fixed-dim">
              Saha keşfi, ihtiyaç analizi, entegrasyon tasarımı ve performans raporlamasını aynı çalışma modeli içinde ele alarak sürdürülebilir bir çözüm kuruyoruz.
            </p>
          </div>
        </div>
      </section>

      {relatedSolutions.length > 0 && (
        <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
          <div className="mx-auto max-w-container-max">
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">İlgili Çözümler</p>
            <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <h2 className="max-w-3xl font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Aynı çözüm ailesindeki diğer başlıklar</h2>
              <Link className="font-label-caps text-label-caps uppercase text-metallic-gold" href={`/cozumler/${solution.parentSlug}`}>
                {solution.parentTitle} sayfasına dön
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedSolutions.map((related) => (
                <Link
                  className="group border-t-4 border-metallic-gold bg-slate-gray p-7 transition-transform duration-300 hover:-translate-y-1"
                  href={`/cozumler/${related.parentSlug}/${related.slug}`}
                  key={related.slug}
                >
                  <h3 className="font-headline-sm text-xl uppercase text-deep-navy">{related.title}</h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-on-surface-variant">{related.summary}</p>
                  <span className="mt-7 inline-block font-label-caps text-label-caps uppercase text-metallic-gold">Detayları İncele</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-deep-navy px-margin-mobile py-24 text-center text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Projeniz İçin</p>
          <h2 className="font-headline-lg text-4xl uppercase md:text-headline-lg">Bu çözümü projenize uyarlayalım</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-fixed-dim">
            {solution.ctaText ?? "Saha ihtiyacınızı, mevcut altyapınızı ve hedeflerinizi birlikte değerlendirerek uygulanabilir çözüm kapsamını oluşturalım."}
          </p>
          <Link className="mt-10 inline-flex bg-metallic-gold px-9 py-4 font-label-caps text-label-caps font-bold uppercase text-deep-navy hover:bg-white" href="/iletisim">
            AKYA Group ile İletişime Geçin
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
