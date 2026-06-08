import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SubSolutionGrid from "@/components/SubSolutionGrid";

// metadata, Termal Testler sayfasının arama motoru başlık ve açıklamasını tanımlar.
export const metadata: Metadata = {
  title: "Termal Testler | AKYA Group",
  description:
    "AKYA Group, veri merkezleri ve kritik tesislerde sıcaklık haritalama, hava akışı analizi ve soğutma performansı değerlendirme hizmetleri sunar.",
  keywords: [
    "termal test",
    "veri merkezi termal analiz",
    "sıcaklık haritalama",
    "hava akışı analizi",
    "soğutma optimizasyonu",
    "kritik tesis mühendisliği",
  ],
};

// serviceCards, termal değerlendirme sürecindeki dört temel hizmet alanını içerir.
const serviceCards = [
  {
    title: "Sıcaklık Haritalama",
    description: "Kritik alanlardaki sıcaklık dağılımını ölçerek sıcak noktaları ve zamana bağlı değişimleri görünür hale getiririz.",
    items: [
      "Rack önü ve arkası sıcaklık ölçümleri",
      "Oda içi sıcaklık dağılımı analizi",
      "Sıcak nokta tespiti",
      "Zaman bazlı sıcaklık değişimi değerlendirmesi",
    ],
  },
  {
    title: "Hava Akışı Değerlendirmesi",
    description: "Soğuk ve sıcak hava yollarını inceleyerek kayıpları, geri dönüşleri ve kısa devre hava akışlarını belirleriz.",
    items: [
      "Soğuk hava dağılımı kontrolü",
      "Sıcak hava geri dönüşü analizi",
      "Kısa devre hava akışı tespiti",
      "Containment verimliliği değerlendirmesi",
    ],
  },
  {
    title: "Soğutma Performansı Analizi",
    description: "Soğutma altyapısının mevcut yükü karşılama kabiliyetini ve enerji verimliliğini teknik verilerle değerlendiririz.",
    items: [
      "Klima kapasite yeterliliği kontrolü",
      "Rack yoğunluğuna göre değerlendirme",
      "Döşeme, kanal ve menfez etkisi analizi",
      "Enerji verimliliği iyileştirme önerileri",
    ],
  },
  {
    title: "Teknik Raporlama",
    description: "Ölçüm sonuçlarını risk seviyeleri ve uygulanabilir iyileştirme adımlarıyla birlikte karar destek raporuna dönüştürürüz.",
    items: [
      "Ölçüm noktaları ve sonuç tabloları",
      "Termal risklerin sınıflandırılması",
      "İyileştirme önerileri",
      "Yönetici özeti ve teknik ekler",
    ],
  },
];

// processSteps, saha incelemesinden aksiyon planına uzanan termal test sürecini açıklar.
const processSteps = [
  {
    number: "01",
    title: "Saha İncelemesi",
    text: "Mevcut alan, ekipman yerleşimi, yük yoğunluğu ve soğutma altyapısı birlikte incelenir.",
  },
  {
    number: "02",
    title: "Test Planı",
    text: "Kritik bölgeler, ölçüm noktaları, çalışma koşulları ve uygulanacak test senaryosu belirlenir.",
  },
  {
    number: "03",
    title: "Ölçüm",
    text: "Sıcaklık dağılımı ve hava akışı verileri operasyon koşulları altında kontrollü şekilde toplanır.",
  },
  {
    number: "04",
    title: "Değerlendirme",
    text: "Bulgular analiz edilir; sıcak noktalar, hava akışı problemleri ve termal riskler sınıflandırılır.",
  },
  {
    number: "05",
    title: "Aksiyon Planı",
    text: "Optimizasyon önerileri, uygulama öncelikleri ve izlenebilir teknik sonuçlar raporlanır.",
  },
];

// reasons, AKYA'nın termal test hizmetindeki ölçüm ve mühendislik yaklaşımını özetler.
const reasons = [
  {
    title: "Ölçüm Odaklı Yaklaşım",
    text: "Termal performansı varsayımlar yerine sahadan toplanan sıcaklık ve hava akışı verileriyle değerlendiririz.",
  },
  {
    title: "Teknik Raporlama",
    text: "Her bulguyu ölçüm noktası, risk seviyesi, teknik açıklama ve önerilen aksiyonla ilişkilendiririz.",
  },
  {
    title: "Operasyonel Süreklilik",
    text: "Test senaryolarını kritik tesisin çalışma düzenini ve kesintisiz operasyon gereksinimlerini dikkate alarak planlarız.",
  },
  {
    title: "Soğutma Optimizasyonu",
    text: "Hava dağılımı, kapasite kullanımı ve ekipman yoğunluğunu birlikte değerlendirerek uygulanabilir iyileştirmeler sunarız.",
  },
];

// ThermalTestsPage, briefte tanımlanan bağımsız Termal Testler çözüm sayfasını oluşturur.
export default function ThermalTestsPage() {
  return (
    <main className="bg-background">
      <Navbar />

      <section className="relative flex min-h-[620px] items-end overflow-hidden px-margin-mobile pb-14 pt-28 md:min-h-[760px] md:px-margin-desktop md:pb-28 md:pt-36">
        <img
          alt="Kritik tesiste termal ölçüm ve teknik inceleme"
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero-thermal-tests.jpg"
        />
        <div className="absolute inset-0 bg-deep-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-deep-navy/35" />
        <div className="relative z-10 mx-auto w-full max-w-container-max text-surface-container-lowest">
          <p className="mb-4 font-label-caps text-label-caps uppercase text-metallic-gold">Kritik Tesis Mühendisliği</p>
          <h1 className="max-w-5xl font-display-lg text-[38px] font-extrabold uppercase leading-[1.08] md:text-display-lg">
            Termal Testler
          </h1>
          <p className="mt-6 max-w-3xl font-body-lg text-body-lg text-primary-fixed-dim">
            Veri merkezleri ve kritik tesislerde sıcaklık dağılımını, hava akışını ve soğutma performansını ölçüm odaklı mühendislik yaklaşımıyla değerlendiriyoruz.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              className="bg-metallic-gold px-8 py-4 text-center font-label-caps text-label-caps font-bold uppercase text-deep-navy transition-colors hover:bg-white"
              href="/iletisim"
            >
              Projenizi Değerlendirelim
            </a>
            <a
              className="border border-white px-8 py-4 text-center font-label-caps text-label-caps font-bold uppercase text-white transition-colors hover:border-metallic-gold hover:text-metallic-gold"
              href="/iletisim"
            >
              İletişime Geçin
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Termal Performans</p>
            <h2 className="font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
              Kritik tesislerin termal davranışını görünür hale getiriyoruz
            </h2>
          </div>
          <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
            <p>
              Kritik tesislerde termal performans yalnızca konfor veya ekipman sıcaklığı konusu değildir; süreklilik, enerji verimliliği ve operasyonel güvenilirlik doğrudan termal davranışa bağlıdır.
            </p>
            <p>
              AKYA Group; veri merkezi, teknik oda, kontrol odası ve yüksek yoğunluklu ekipman alanlarında termal test, sıcaklık haritalama, hava akışı değerlendirmesi ve soğutma optimizasyonu hizmetleri sunar.
            </p>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="bg-slate-gray px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Hizmet Kapsamı</p>
          <h2 className="mb-12 max-w-4xl font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
            Ölçümden optimizasyona bütünleşik değerlendirme
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((service) => (
              <article className="border-t-4 border-metallic-gold bg-white p-7 shadow-sm" key={service.title}>
                <h3 className="mb-4 font-headline-sm text-headline-sm uppercase text-deep-navy">{service.title}</h3>
                <p className="mb-6 text-on-surface-variant">{service.description}</p>
                <ul className="space-y-3 border-t border-outline-variant pt-5 text-sm text-on-surface-variant">
                  {service.items.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-metallic-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep-navy px-margin-mobile py-24 text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Çalışma Yaklaşımımız</p>
          <h2 className="mb-14 max-w-4xl font-headline-lg text-4xl uppercase md:text-headline-lg">
            Sahadan toplanan veriyi uygulanabilir aksiyona dönüştürüyoruz
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-0">
            {processSteps.map((step) => (
              <article className="border-l border-white/15 pl-6 md:min-h-[260px] md:pr-6" key={step.number}>
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
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Neden AKYA?</p>
          <h2 className="mb-12 max-w-4xl font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
            Ölçüm, mühendislik ve operasyon aynı değerlendirmede buluşur
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {reasons.map((reason) => (
              <article className="border-l-4 border-metallic-gold bg-slate-gray p-8" key={reason.title}>
                <h3 className="mb-4 font-headline-sm text-headline-sm uppercase text-deep-navy">{reason.title}</h3>
                <p className="text-on-surface-variant">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SubSolutionGrid parentSlug="termal-testler" />

      <section className="bg-deep-navy px-margin-mobile py-24 text-center text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Termal Değerlendirme</p>
          <h2 className="font-headline-lg text-4xl uppercase md:text-headline-lg">
            Kritik tesisinizin termal performansını birlikte değerlendirelim
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body-lg text-body-lg text-primary-fixed-dim">
            Sıcaklık dağılımını, hava akışını ve soğutma altyapısını ölçerek riskleri görünür, iyileştirme adımlarını uygulanabilir hale getirelim.
          </p>
          <a
            className="mt-10 inline-flex bg-metallic-gold px-9 py-4 font-label-caps text-label-caps font-bold uppercase text-deep-navy transition-colors hover:bg-white"
            href="/iletisim"
          >
            Projenizi Değerlendirelim
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
