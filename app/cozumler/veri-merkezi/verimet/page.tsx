import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { VERIMET_LOGO_PATH, verimetContent } from "@/lib/verimet-data";

export const metadata: Metadata = {
  title: "Verimet Akıllı PDU Çözümleri | AKYA Group",
  description:
    "Verimet markalı PDU çözümleriyle veri merkezlerinde kabinet bazlı güç dağıtımı, enerji izleme ve operasyonel görünürlük sağlayan ürün yaklaşımı.",
  alternates: {
    canonical: "/cozumler/veri-merkezi/verimet",
  },
};

// VerimetPage, Verimet PDU ürün ailesini veri merkezi mühendisliği bağlamında tanıtır.
export default function VerimetPage() {
  return (
    <main className="bg-background">
      <Navbar />

      <section className="relative overflow-hidden bg-deep-navy px-margin-mobile pb-20 pt-36 text-white md:px-margin-desktop md:pb-28 md:pt-48">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(115deg,transparent_15%,#1C4560_55%,transparent_90%)]" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-container-max items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <nav aria-label="Sayfa yolu" className="mb-10 flex flex-wrap gap-2 text-sm text-primary-fixed-dim">
              <Link className="hover:text-white" href="/">Ana Sayfa</Link>
              <span>/</span>
              <Link className="hover:text-white" href="/cozumler">Çözümler</Link>
              <span>/</span>
              <Link className="hover:text-white" href="/cozumler/veri-merkezi">Veri Merkezi</Link>
              <span>/</span>
              <span className="text-white">Verimet</span>
            </nav>
            <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Veri Merkezi Markası</p>
            <h1 className="mt-4 max-w-4xl font-display-lg text-[40px] font-extrabold uppercase leading-[1.08] md:text-display-lg">
              {verimetContent.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-primary-fixed-dim">{verimetContent.heroDescription}</p>
            <Link
              className="mt-9 inline-flex bg-metallic-gold px-8 py-4 font-label-caps text-label-caps font-bold uppercase text-deep-navy transition-colors hover:bg-white"
              href="/iletisim"
            >
              Teklif / Bilgi Al
            </Link>
          </div>

          <div className="flex min-h-56 items-center justify-center border border-white/10 bg-white/[0.04] p-8 sm:p-12">
            <img alt="Verimet" className="h-auto w-full max-w-[340px] object-contain" src={VERIMET_LOGO_PATH} />
          </div>
        </div>
      </section>

      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Verimet Nedir?</p>
            <h2 className="mt-3 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
              Rack seviyesinde görünür güç dağıtımı
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-on-surface-variant">
            <p>
              Verimet, veri merkezi operasyonlarında rack seviyesinde güç dağıtımı, yük takibi ve enerji izleme ihtiyaçlarına
              yönelik konumlanan PDU ürün grubudur. AKYA Group&apos;un veri merkezi mühendisliği, enerji altyapısı ve DCIM
              yaklaşımıyla birlikte kullanılarak kritik tesislerde daha görünür ve yönetilebilir bir güç dağıtım yapısı
              oluşturulmasına katkı sağlar.
            </p>
            <p>
              Veri merkezlerinde PDU sistemleri yalnızca enerji dağıtan pasif ekipmanlar değildir. Kabinet bazlı yüklerin
              izlenmesi, enerji tüketiminin değerlendirilmesi, kapasite planlaması ve alarm yönetimi gibi operasyonel
              süreçlerde önemli bir görünürlük katmanı sağlar.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-gray px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Temel Yetenekler</p>
          <h2 className="mb-12 mt-3 max-w-4xl font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
            Enerjiyi ölçülebilir operasyon verisine dönüştüren yapı
          </h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {verimetContent.capabilities.map((capability, index) => (
              <article className="min-h-48 border-t-4 border-metallic-gold bg-white p-7 shadow-sm" key={capability}>
                <span className="font-label-caps text-xs text-metallic-gold">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-6 font-semibold leading-7 text-deep-navy">{capability}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Ürün Ailesi</p>
          <h2 className="mb-12 mt-3 max-w-4xl font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
            Proje ihtiyacına göre şekillenen PDU kategorileri
          </h2>
          <div className="grid gap-px bg-outline-variant md:grid-cols-2 lg:grid-cols-5">
            {verimetContent.products.map((product) => (
              <article className="min-h-64 bg-white p-7" key={product.title}>
                <h3 className="font-headline-sm text-xl uppercase text-deep-navy">{product.title}</h3>
                <p className="mt-5 text-sm leading-6 text-on-surface-variant">{product.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep-navy px-margin-mobile py-24 text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Entegrasyon ve İzleme</p>
            <h2 className="mt-3 font-headline-lg text-4xl uppercase md:text-headline-lg">
              Güç dağıtım verisini merkezi sistemlere taşıyın
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-fixed-dim">
              Verimet PDU çözümleri DCIM, BMS, SCADA, enerji izleme ve alarm yönetimi altyapılarıyla birlikte
              kurgulandığında güç dağıtım verileri operasyon ekipleri için anlamlı göstergelere dönüşür. Bu yaklaşım yeni
              kabinet ekleme, kapasite artırımı, bakım ve arıza müdahale süreçlerinin daha izlenebilir yönetilmesini destekler.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {verimetContent.integrations.map((integration) => (
              <span className="border border-white/25 px-5 py-3 font-semibold text-white" key={integration}>
                {integration}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-margin-mobile py-24 text-center md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-4xl">
          <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Projeniz İçin</p>
          <h2 className="mt-3 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
            Veri merkezi projeniz için Verimet PDU çözümlerini birlikte değerlendirelim
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-on-surface-variant">
            Rack seviyesinde güç dağıtımını, enerji görünürlüğünü ve mevcut izleme altyapınızla entegrasyon ihtiyaçlarını
            birlikte planlayalım.
          </p>
          <Link
            className="mt-10 inline-flex bg-metallic-gold px-9 py-4 font-label-caps text-label-caps font-bold uppercase text-deep-navy transition-colors hover:bg-deep-navy hover:text-white"
            href="/iletisim"
          >
            İletişime Geç
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
