import type { Metadata } from "next";
import Footer from "@/components/Footer";
import InsightArchive from "@/components/InsightArchive";
import Navbar from "@/components/Navbar";

// metadata, Teknik İçgörüler arşiv sayfasının arama motoru bilgilerini tanımlar.
export const metadata: Metadata = {
  title: "Teknik İçgörüler | AKYA Group",
  description:
    "AKYA Group'un veri merkezi, DCIM, zayıf akım, test, analiz ve sürdürülebilirlik alanlarındaki teknik değerlendirmeleri.",
};

// TechnicalInsightsPage, tüm teknik içerikleri filtrelenebilir bir arşiv görünümünde sunar.
export default function TechnicalInsightsPage() {
  return (
    <main className="bg-background">
      <Navbar />

      <section className="bg-deep-navy px-margin-mobile pb-20 pt-44 text-white md:px-margin-desktop md:pb-24 md:pt-52">
        <div className="mx-auto max-w-container-max">
          <p className="mb-4 font-label-caps text-label-caps uppercase text-metallic-gold">AKYA Group</p>
          <h1 className="max-w-5xl font-display-lg text-[38px] font-extrabold uppercase leading-[1.08] md:text-display-lg">
            Teknik İçgörüler
          </h1>
          <p className="mt-6 max-w-3xl font-body-lg text-body-lg text-primary-fixed-dim">
            Veri merkezi, dijital altyapı, test, analiz ve sürdürülebilirlik alanlarında teknik değerlendirmeler, uygulama notları ve mühendislik içerikleri.
          </p>
        </div>
      </section>

      <section className="bg-slate-gray px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <InsightArchive />
        </div>
      </section>

      <section className="bg-deep-navy px-margin-mobile py-24 text-center text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Teknik Görüşme</p>
          <h2 className="font-headline-lg text-4xl uppercase md:text-headline-lg">
            Tesisinizin ihtiyaçlarını birlikte değerlendirelim
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body-lg text-body-lg text-primary-fixed-dim">
            Kritik altyapınız için ölçülebilir, uygulanabilir ve sürdürülebilir bir mühendislik yaklaşımı oluşturalım.
          </p>
          <a
            className="mt-10 inline-flex bg-metallic-gold px-9 py-4 font-label-caps text-label-caps font-bold uppercase text-deep-navy transition-colors hover:bg-white"
            href="/iletisim"
          >
            İletişime Geçin
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
