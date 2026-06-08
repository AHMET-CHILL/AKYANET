import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { findSectorBySlug, sectorPages } from "@/lib/sector-data";
import { solutionPages } from "@/lib/site-data";
import { technicalInsights } from "@/lib/technical-insights";

type SectorDetailPageProps = {
  params: Promise<{ slug: string }>;
};

// processSteps, tüm sektörlerde kullanılan ortak AKYA mühendislik yaklaşımını tanımlar.
const processSteps = [
  { number: "01", title: "Analiz", text: "Mevcut altyapı, operasyon koşulları, ihtiyaçlar ve teknik riskler değerlendirilir." },
  { number: "02", title: "Tasarım", text: "Sektörün süreklilik, güvenlik ve kapasite gereksinimlerine uygun çözüm mimarisi hazırlanır." },
  { number: "03", title: "Test", text: "Saha ölçümleri ve doğrulama çalışmalarıyla performans ve riskler görünür hale getirilir." },
  { number: "04", title: "Entegrasyon", text: "İzleme, alarm, raporlama ve yönetim sistemleri operasyon süreçlerine bağlanır." },
  { number: "05", title: "Optimizasyon", text: "Toplanan verilerle performans, kaynak kullanımı ve operasyonel süreklilik geliştirilir." },
];

// generateStaticParams, tüm sektör detay sayfalarının build sırasında oluşturulmasını sağlar.
export function generateStaticParams() {
  return sectorPages.map((sector) => ({ slug: sector.slug }));
}

// generateMetadata, her sektör sayfası için içerikten SEO başlığı ve açıklaması üretir.
export async function generateMetadata({ params }: SectorDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sector = findSectorBySlug(slug);

  if (!sector) {
    return { title: "Sektör Bulunamadı | AKYA Group" };
  }

  return {
    title: `${sector.title} | AKYA Group`,
    description: sector.description,
  };
}

// SectorDetailPage, ortak şablon üzerinden seçilen sektörün çözümlerini ve yaklaşımını sunar.
export default async function SectorDetailPage({ params }: SectorDetailPageProps) {
  const { slug } = await params;
  const sector = findSectorBySlug(slug);

  if (!sector) {
    notFound();
  }

  const relatedSolutions = sector.solutions
    .map((solutionSlug) => solutionPages.find((solution) => solution.slug === solutionSlug))
    .filter((solution): solution is (typeof solutionPages)[number] => Boolean(solution));
  const relatedInsights = technicalInsights.slice(0, 3);

  return (
    <main className="bg-background">
      <Navbar />

      <section className="relative flex min-h-[620px] items-end overflow-hidden px-margin-mobile pb-14 pt-28 md:min-h-[760px] md:px-margin-desktop md:pb-28 md:pt-36">
        <img alt={`${sector.title} sektörünü temsil eden teknik tesis`} className="absolute inset-0 h-full w-full object-cover" src={sector.image} />
        <div className="absolute inset-0 bg-deep-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-deep-navy/35" />
        <div className="relative z-10 mx-auto w-full max-w-container-max text-white">
          <p className="mb-4 font-label-caps text-label-caps uppercase text-metallic-gold">{sector.group}</p>
          <h1 className="max-w-5xl font-display-lg text-[38px] font-extrabold uppercase leading-[1.08] md:text-display-lg">{sector.title}</h1>
          <p className="mt-6 max-w-3xl font-body-lg text-body-lg text-primary-fixed-dim">{sector.description}</p>
          <a
            className="mt-10 inline-flex bg-metallic-gold px-8 py-4 font-label-caps text-label-caps font-bold uppercase text-deep-navy transition-colors hover:bg-white"
            href="/iletisim"
          >
            Projenizi Değerlendirelim
          </a>
        </div>
      </section>

      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Sektörel Yaklaşım</p>
            <h2 className="font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Operasyon koşullarına uygun mühendislik</h2>
          </div>
          <p className="font-body-lg text-body-lg leading-8 text-on-surface-variant">{sector.introduction}</p>
        </div>
      </section>

      <section className="bg-slate-gray px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">İlgili Çözümler</p>
          <h2 className="mb-12 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Bu sektörde sunduğumuz çözümler</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedSolutions.map((solution) => (
              <a className="group border-t-4 border-metallic-gold bg-white p-7" href={`/cozumler/${solution.slug}`} key={solution.slug}>
                <p className="mb-4 text-[12px] font-bold uppercase text-metallic-gold">{solution.group}</p>
                <h3 className="font-headline-sm text-xl uppercase text-deep-navy transition-colors group-hover:text-metallic-gold">{solution.title}</h3>
                <p className="mt-4 line-clamp-3 leading-7 text-on-surface-variant">{solution.summary}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep-navy px-margin-mobile py-24 text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Çalışma Yaklaşımımız</p>
          <h2 className="mb-14 max-w-4xl font-headline-lg text-4xl uppercase md:text-headline-lg">Analizden optimizasyona kontrollü süreç</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-0">
            {processSteps.map((step) => (
              <article className="border-l border-white/15 pl-6 md:min-h-[220px] md:pr-6" key={step.number}>
                <span className="font-display-lg text-4xl font-bold text-metallic-gold">{step.number}</span>
                <h3 className="mb-4 mt-5 font-headline-sm text-xl uppercase">{step.title}</h3>
                <p className="text-sm leading-6 text-primary-fixed-dim">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Teknik İçgörüler</p>
          <h2 className="mb-10 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Sektörle ilişkili değerlendirmeler</h2>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {relatedInsights.map((insight) => (
              <a className="group bg-slate-gray p-7" href={`/teknik-icgoruler/${insight.slug}`} key={insight.slug}>
                <p className="text-[12px] font-bold uppercase text-metallic-gold">{insight.category}</p>
                <h3 className="mt-4 font-headline-sm text-xl uppercase leading-tight text-deep-navy transition-colors group-hover:text-metallic-gold">{insight.title}</h3>
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-on-surface-variant">{insight.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep-navy px-margin-mobile py-24 text-center text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-headline-lg text-4xl uppercase md:text-headline-lg">Sektörünüz için doğru altyapıyı birlikte planlayalım</h2>
          <p className="mx-auto mt-6 max-w-2xl text-primary-fixed-dim">İhtiyaçlarınızı, risklerinizi ve gelişim hedeflerinizi ölçülebilir bir mühendislik planına dönüştürelim.</p>
          <a className="mt-10 inline-flex bg-metallic-gold px-9 py-4 font-label-caps text-label-caps font-bold uppercase text-deep-navy hover:bg-white" href="/iletisim">
            İletişime Geçin
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
