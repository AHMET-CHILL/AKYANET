import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SubSolutionGrid from "@/components/SubSolutionGrid";

// metadata, Basınç Testleri sayfasının arama motoru başlık ve açıklamasını tanımlar.
export const metadata: Metadata = {
  title: "Basınç Testleri | AKYA Group",
  description:
    "AKYA Group, kritik tesislerde oda sızdırmazlığı, basınç farkı analizi ve containment performansı değerlendirme hizmetleri sunar.",
  keywords: [
    "basınç testi",
    "oda sızdırmazlık testi",
    "veri merkezi containment",
    "basınç farkı analizi",
    "kritik tesis testi",
    "hava kaçağı analizi",
  ],
};

// serviceCards, basınç performansı değerlendirmesindeki dört temel hizmet alanını içerir.
const serviceCards = [
  {
    title: "Oda Sızdırmazlığı",
    description: "Kritik hacimlerdeki hava kaçaklarını ve fiziksel sızdırmazlık zayıflıklarını ölçüm odaklı olarak değerlendiririz.",
    items: [
      "Kritik hacimlerde hava kaçağı kontrolü",
      "Kapı ve geçiş noktalarının incelenmesi",
      "Kablo tavası ve penetrasyon kontrolü",
      "Sızdırmazlık iyileştirme önerileri",
    ],
  },
  {
    title: "Basınç Farkı Analizi",
    description: "Alanlar arasındaki basınç ilişkisini ve havalandırma sistemlerinin işletme koşullarına etkisini ölçeriz.",
    items: [
      "Alanlar arası basınç farkı ölçümü",
      "Pozitif ve negatif basınç senaryoları",
      "HVAC ve havalandırma etkileri",
      "İşletme koşullarına göre risk analizi",
    ],
  },
  {
    title: "Containment Performansı",
    description: "Soğuk ve sıcak koridor kapama sistemlerinin hava yönetimi ve soğutma verimliliği üzerindeki etkisini inceleriz.",
    items: [
      "Koridor basınç davranışı",
      "Hava kaçaklarının tespiti",
      "Panel ve kapı performansı",
      "Soğutma verimliliği etkisi",
    ],
  },
  {
    title: "Teknik Raporlama",
    description: "Ölçüm bulgularını risk öncelikleri ve sahada uygulanabilir iyileştirme adımlarıyla birlikte raporlarız.",
    items: [
      "Ölçüm metodolojisi",
      "Test sonuçları ve bulgular",
      "Risk önceliklendirmesi",
      "Uygulanabilir aksiyon listesi",
    ],
  },
];

// processSteps, test sınırlarının belirlenmesinden teknik rapor teslimine kadar izlenen süreci açıklar.
const processSteps = [
  {
    number: "01",
    title: "Saha İncelemesi",
    text: "Test edilecek hacim, fiziksel sınırlar, geçiş noktaları ve mevcut hava yönetimi altyapısı incelenir.",
  },
  {
    number: "02",
    title: "Test Senaryosu",
    text: "Basınç ölçüm noktaları, işletme koşulları ve uygulanacak pozitif veya negatif basınç senaryoları hazırlanır.",
  },
  {
    number: "03",
    title: "Ölçüm",
    text: "Sızdırmazlık ve basınç farkı ölçümleri kontrollü koşullarda gerçekleştirilerek saha verileri kaydedilir.",
  },
  {
    number: "04",
    title: "Analiz",
    text: "Kaçak noktaları, basınç dengesizlikleri ve containment performans kayıpları mühendislik bakışıyla değerlendirilir.",
  },
  {
    number: "05",
    title: "Raporlama",
    text: "Teknik bulgular, risk öncelikleri ve uygulanabilir iyileştirme önerileri anlaşılır bir aksiyon planına dönüştürülür.",
  },
];

// reasons, AKYA'nın basınç testi projelerinde sunduğu temel mühendislik avantajlarını özetler.
const reasons = [
  {
    title: "Ölçülebilir Bulgular",
    text: "Sızdırmazlık ve basınç performansını gözleme değil, kontrollü ölçümlere ve kayıt altına alınan saha verilerine dayandırırız.",
  },
  {
    title: "Mühendislik Yorumu",
    text: "Ölçüm sonuçlarını HVAC, soğutma, yangın güvenliği ve tesis operasyonuyla birlikte değerlendiririz.",
  },
  {
    title: "Operasyonel Güvenilirlik",
    text: "Test planını kritik tesisin süreklilik gereksinimlerini gözeterek, işletme düzenini aksatmayacak şekilde kurgularız.",
  },
  {
    title: "Aksiyon Odaklı Raporlama",
    text: "Tespit edilen her kaybı önem derecesi, olası etkisi ve uygulanabilir iyileştirme önerisiyle ilişkilendiririz.",
  },
];

// PressureTestsPage, briefte tanımlanan bağımsız Basınç Testleri çözüm sayfasını oluşturur.
export default function PressureTestsPage() {
  return (
    <main className="bg-background">
      <Navbar />

      <section className="relative flex min-h-[620px] items-end overflow-hidden px-margin-mobile pb-14 pt-28 md:min-h-[760px] md:px-margin-desktop md:pb-28 md:pt-36">
        <img
          alt="Veri merkezi containment alanında basınç farkı ölçümü yapan mühendis"
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="/hero-pressure-tests-v2.png"
        />
        <div className="absolute inset-0 bg-deep-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-deep-navy/35" />
        <div className="relative z-10 mx-auto w-full max-w-container-max text-surface-container-lowest">
          <p className="mb-4 font-label-caps text-label-caps uppercase text-metallic-gold">Kritik Tesis Mühendisliği</p>
          <h1 className="max-w-5xl font-display-lg text-[38px] font-extrabold uppercase leading-[1.08] md:text-display-lg">
            Basınç Testleri
          </h1>
          <p className="mt-6 max-w-3xl font-body-lg text-body-lg text-primary-fixed-dim">
            Kritik tesislerde hava sızdırmazlığı, basınç dengesi ve containment performansını ölçerek operasyonel güvenilirliği artırıyoruz.
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
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Basınç Performansı</p>
            <h2 className="font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
              Kritik hacimlerin hava dengesini ölçüyoruz
            </h2>
          </div>
          <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
            <p>
              Veri merkezleri, teknik odalar, temiz alanlar ve kritik operasyon hacimlerinde basınç dengesi; yangın söndürme performansı, hava kalitesi, soğutma verimliliği ve sistem sürekliliği açısından önemlidir.
            </p>
            <p>
              AKYA Group, tesislerin fiziksel performansını ölçmek ve iyileştirme alanlarını belirlemek amacıyla basınç testi, sızdırmazlık kontrolü, basınç farkı analizi ve containment performans değerlendirmesi hizmetleri sunar.
            </p>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="bg-slate-gray px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Hizmet Kapsamı</p>
          <h2 className="mb-12 max-w-4xl font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
            Sızdırmazlıktan containment performansına kapsamlı analiz
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
            Ölçüm sonuçlarını uygulanabilir iyileştirmelere dönüştürüyoruz
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
            Saha verisini mühendislik kararıyla birleştiriyoruz
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

      <SubSolutionGrid parentSlug="basinc-testleri" />

      <section className="bg-deep-navy px-margin-mobile py-24 text-center text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Basınç Değerlendirmesi</p>
          <h2 className="font-headline-lg text-4xl uppercase md:text-headline-lg">
            Kritik tesisinizin basınç performansını birlikte değerlendirelim
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body-lg text-body-lg text-primary-fixed-dim">
            Hava sızdırmazlığını, basınç dengesini ve containment performansını ölçerek kayıpları görünür, iyileştirme adımlarını uygulanabilir hale getirelim.
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
