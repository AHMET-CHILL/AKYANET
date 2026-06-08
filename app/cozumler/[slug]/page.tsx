import { notFound } from "next/navigation";
import InnerPageShell from "@/components/InnerPageShell";
import { solutionPages } from "@/lib/site-data";

// generateStaticParams, tüm çözüm detay sayfalarını build aşamasında statik üretir.
export function generateStaticParams() {
  return solutionPages.map((page) => ({ slug: page.slug }));
}

// generateMetadata, her çözüm sayfası için başlık ve açıklama bilgisini oluşturur.
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = solutionPages.find((item) => item.slug === slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} | Akya Dijital Dönüşüm`,
    description: page.summary,
  };
}

// SolutionDetailPage, seçilen çözüm başlığına ait detay içeriğini render eder.
export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = solutionPages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <InnerPageShell eyebrow={page.group} title={page.title} description={page.summary} image={page.image}>
      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Yaklaşım</p>
            <h2 className="mb-6 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Ölçülebilir, güvenli ve sürdürülebilir teslimat</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">{page.intro}</p>
          </div>
          <div className="border-l-4 border-metallic-gold bg-slate-gray p-8">
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Problem Alanı</p>
            <p className="font-body-lg text-body-lg text-on-surface-variant">{page.challenge}</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-gray px-margin-mobile py-24 md:px-margin-desktop">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Çıktılar</p>
          <h2 className="mb-10 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Proje sonunda hedeflenen kazanımlar</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {page.outcomes.map((outcome) => (
              <div className="border-l-4 border-metallic-gold bg-white p-6 shadow-sm" key={outcome}>
                <p className="font-label-caps text-label-caps uppercase text-deep-navy">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Kapsam</p>
          <h2 className="mb-10 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Bu başlık altında ele aldığımız işler</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {page.capabilities.map((capability) => (
              <article className="bg-slate-gray p-6" key={capability}>
                <h3 className="font-headline-sm text-headline-sm text-deep-navy">{capability}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep-navy px-margin-mobile py-24 text-surface-container-lowest md:px-margin-desktop">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Teslim Modeli</p>
            <h2 className="mb-8 font-headline-lg text-4xl uppercase md:text-headline-lg">Analizden aksiyon planına net ilerleyen süreç</h2>
            <div className="space-y-5">
              {page.deliverySteps.map((step, index) => (
                <div className="flex gap-4" key={step}>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-metallic-gold font-label-caps text-label-caps text-deep-navy">{index + 1}</span>
                  <p className="pt-1 text-primary-fixed-dim">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 p-8">
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Kullanım Senaryoları</p>
            <ul className="space-y-4">
              {page.useCases.map((useCase) => (
                <li className="border-b border-white/10 pb-4 text-lg text-surface-container-lowest" key={useCase}>
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Raporlanabilir Değer</p>
          <h2 className="mb-10 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Yönetim ve saha ekipleri için somut çıktılar</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {page.proofPoints.map((proofPoint) => (
              <article className="border border-outline-variant p-6" key={proofPoint}>
                <h3 className="font-headline-sm text-headline-sm text-deep-navy">{proofPoint}</h3>
              </article>
            ))}
          </div>
          <a className="mt-12 inline-flex bg-deep-navy px-8 py-4 font-label-caps text-label-caps font-bold text-surface-container-lowest transition-colors hover:bg-metallic-gold hover:text-deep-navy" href="/iletisim">
            Bu Başlık İçin Görüşelim
          </a>
        </div>
      </section>
    </InnerPageShell>
  );
}
