import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SubSolutionGrid from "@/components/SubSolutionGrid";

// metadata, Karbon Analizi sayfasının arama motoru başlık ve açıklamasını tanımlar.
export const metadata: Metadata = {
  title: "Karbon Analizi ve Emisyon Yönetimi | AKYA Group",
  description:
    "AKYA Group; enerji tüketimi, tesis operasyonları ve dijital altyapılardan kaynaklanan emisyonları ölçer, analiz eder ve azaltım stratejileri geliştirir.",
  keywords: [
    "karbon analizi",
    "karbon ayak izi",
    "emisyon yönetimi",
    "Kapsam 1 Kapsam 2 Kapsam 3",
    "enerji tüketim analizi",
    "karbon azaltım stratejisi",
  ],
};

// serviceCards, karbon analizi hizmetinin dört temel mühendislik alanını içerir.
const serviceCards = [
  {
    title: "Emisyon Kaynakları",
    description: "Tesis operasyonlarında karbon etkisi oluşturan enerji ve tüketim kaynaklarını sistem bazında belirleriz.",
    items: [
      "Elektrik tüketimi kaynaklı emisyonlar",
      "Isıtma, soğutma ve yardımcı sistemler",
      "Operasyonel tüketim kalemleri",
      "Kaynak ve veri sınıflandırması",
    ],
  },
  {
    title: "Enerji Tüketim Analizi",
    description: "Enerji verilerini tüketim davranışı, yük profili ve yoğun kullanım noktaları açısından yorumlarız.",
    items: [
      "Sayaç, fatura ve izleme verileri",
      "Yük profili değerlendirmesi",
      "Tüketim davranışı analizi",
      "Yoğun enerji kullanan sistemler",
    ],
  },
  {
    title: "Karbon Ayak İzi",
    description: "Uygun emisyon faktörleriyle tesis bazlı karbon etkisini hesaplar ve raporlanabilir göstergelere dönüştürürüz.",
    items: [
      "Kapsam 1 ve Kapsam 2 yaklaşımı",
      "Uygun durumlarda Kapsam 3",
      "Tesis bazlı emisyon yoğunluğu",
      "Raporlanabilir karbon göstergeleri",
    ],
  },
  {
    title: "Azaltım Fırsatları",
    description: "Karbon etkisini ve işletme maliyetini birlikte azaltabilecek uygulanabilir mühendislik adımlarını belirleriz.",
    items: [
      "Enerji verimliliği önlemleri",
      "Yenilenebilir enerji potansiyeli",
      "Soğutma optimizasyonu",
      "İşletme iyileştirme önerileri",
    ],
  },
];

// processSteps, veri toplamadan önceliklendirilmiş aksiyon planına uzanan analiz sürecini açıklar.
const processSteps = [
  {
    number: "01",
    title: "Veri Toplama",
    text: "Elektrik tüketimi, faturalar, cihaz kapasiteleri, işletme saatleri ve tesis operasyon verileri toplanır.",
  },
  {
    number: "02",
    title: "Sınıflandırma",
    text: "Tüketim kalemleri ve emisyon kaynakları sistem bazında ayrıştırılarak kritik tüketim noktaları belirlenir.",
  },
  {
    number: "03",
    title: "Hesaplama",
    text: "Uygun emisyon faktörleri, ölçüm verileri ve mühendislik kabulleriyle karbon karşılığı hesaplanır.",
  },
  {
    number: "04",
    title: "Yorumlama",
    text: "Sonuçlar tesis performansı, enerji yoğunluğu, maliyetler ve sürdürülebilirlik hedefleri açısından değerlendirilir.",
  },
  {
    number: "05",
    title: "Aksiyon Planı",
    text: "Azaltım potansiyeli yüksek alanlar için etkisi ve uygulanabilirliği değerlendirilmiş iyileştirme önerileri hazırlanır.",
  },
];

// targetGroups, karbon analizi hizmetinin uygun olduğu temel tesis ve kurum türlerini listeler.
const targetGroups = [
  "Veri merkezleri",
  "Endüstriyel tesisler",
  "Kurumsal kampüsler",
  "Akıllı binalar",
  "Enerji yoğun işletmeler",
  "Sürdürülebilirlik hedefi olan kurumlar",
];

// reportOutputs, analiz sonunda teslim edilen teknik ve yönetimsel çıktıları listeler.
const reportOutputs = [
  "Karbon ayak izi özeti",
  "Tüketim ve emisyon dağılımı",
  "Yüksek etki alanları",
  "Azaltım fırsatları",
  "Önceliklendirilmiş aksiyon önerileri",
  "Yönetici özeti",
];

// reasons, AKYA'nın karbon analizindeki mühendislik ve operasyon odaklı farklarını tanımlar.
const reasons = [
  {
    title: "Mühendislik Temelli Analiz",
    text: "Karbon hesabını yalnızca raporlama faaliyeti olarak değil, tesis performansını iyileştiren bir mühendislik aracı olarak ele alırız.",
  },
  {
    title: "Saha Gerçekliğine Uygun Yorum",
    text: "Enerji, veri merkezi ve dijital altyapı deneyimimizle tüketim verilerini ekipman ve operasyon koşullarıyla ilişkilendiririz.",
  },
  {
    title: "Entegre Veri Yapısı",
    text: "DCIM, enerji izleme, sayaç ve tesis verilerini ortak bir analiz yapısında değerlendirebilecek yaklaşım kurarız.",
  },
  {
    title: "Performans ve Maliyet Dengesi",
    text: "Karbon azaltımını operasyonel süreklilik, enerji verimliliği ve yatırım öncelikleriyle birlikte değerlendiririz.",
  },
];

// CarbonAnalysisPage, briefte tanımlanan Karbon Analizi ve Emisyon Yönetimi sayfasını oluşturur.
export default function CarbonAnalysisPage() {
  return (
    <main className="bg-background">
      <Navbar />

      <section className="relative flex min-h-[620px] items-end overflow-hidden px-margin-mobile pb-14 pt-28 md:min-h-[760px] md:px-margin-desktop md:pb-28 md:pt-36">
        <img
          alt="Veri merkezi enerji tüketimi ve karbon etkisini analiz eden mühendis"
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="/hero-carbon-analysis.png"
        />
        <div className="absolute inset-0 bg-deep-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-deep-navy/35" />
        <div className="relative z-10 mx-auto w-full max-w-container-max text-surface-container-lowest">
          <p className="mb-4 font-label-caps text-label-caps uppercase text-metallic-gold">Sürdürülebilirlik ve Analiz</p>
          <h1 className="max-w-5xl font-display-lg text-[38px] font-extrabold uppercase leading-[1.08] md:text-display-lg">
            Karbon Analizi ve Emisyon Yönetimi
          </h1>
          <p className="mt-6 max-w-3xl font-body-lg text-body-lg text-primary-fixed-dim">
            Enerji tüketimi, tesis operasyonları ve dijital altyapı süreçlerinden kaynaklanan emisyonları ölçüyor, analiz ediyor ve azaltım stratejileri geliştiriyoruz.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              className="bg-metallic-gold px-8 py-4 text-center font-label-caps text-label-caps font-bold uppercase text-deep-navy transition-colors hover:bg-white"
              href="/iletisim"
            >
              Analiz Sürecini Başlatalım
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
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Ölçülebilir Karbon Yönetimi</p>
            <h2 className="font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
              Sürdürülebilir operasyonlar için veriye dayalı kararlar
            </h2>
          </div>
          <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
            <p>
              Karbon emisyonlarının yönetilebilmesi için önce doğru şekilde ölçülmesi gerekir. AKYA Group, tesislerin enerji tüketimi, operasyonel süreçleri, ekipman kullanımı ve altyapı bileşenleri üzerinden karbon etkisini analiz eder.
            </p>
            <p>
              Hizmetimiz; veri merkezleri, endüstriyel tesisler, kurumsal binalar ve kritik altyapılar için emisyon kaynaklarının belirlenmesini, tüketim verilerinin yorumlanmasını ve azaltım fırsatlarının ortaya çıkarılmasını sağlar.
            </p>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="bg-slate-gray px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Hizmet Kapsamı</p>
          <h2 className="mb-12 max-w-4xl font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
            Emisyon kaynağından azaltım stratejisine bütünleşik analiz
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((service) => (
              <article
                className="border-t-4 border-metallic-gold bg-white p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1"
                key={service.title}
              >
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
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Analiz Yaklaşımımız</p>
          <h2 className="mb-14 max-w-4xl font-headline-lg text-4xl uppercase md:text-headline-lg">
            Veriyi ölçülebilir bir azaltım yol haritasına dönüştürüyoruz
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-0">
            {processSteps.map((step) => (
              <article className="border-l border-white/15 pl-6 md:min-h-[270px] md:pr-6" key={step.number}>
                <span className="font-display-lg text-4xl font-bold text-metallic-gold">{step.number}</span>
                <h3 className="mb-4 mt-5 font-headline-sm text-xl uppercase">{step.title}</h3>
                <p className="text-sm leading-6 text-primary-fixed-dim">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Kimler İçin Uygun?</p>
            <h2 className="mb-10 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
              Enerji ve emisyon etkisini yönetmek isteyen tesisler
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {targetGroups.map((group) => (
                <div className="border-l-4 border-metallic-gold bg-slate-gray p-5 font-semibold text-deep-navy" key={group}>
                  {group}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Rapor Çıktıları</p>
            <h2 className="mb-10 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
              Karar süreçlerini destekleyen net çıktılar
            </h2>
            <div className="grid grid-cols-1 gap-px bg-outline-variant sm:grid-cols-2">
              {reportOutputs.map((output, index) => (
                <article className="min-h-36 bg-white p-6" key={output}>
                  <span className="font-label-caps text-xs text-metallic-gold">0{index + 1}</span>
                  <p className="mt-5 font-headline-sm text-lg uppercase leading-7 text-deep-navy">{output}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-gray px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Neden AKYA?</p>
          <h2 className="mb-12 max-w-4xl font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
            Karbon raporlamasını tesis mühendisliğiyle birleştiriyoruz
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {reasons.map((reason) => (
              <article className="border-l-4 border-metallic-gold bg-white p-8" key={reason.title}>
                <h3 className="mb-4 font-headline-sm text-headline-sm uppercase text-deep-navy">{reason.title}</h3>
                <p className="text-on-surface-variant">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SubSolutionGrid parentSlug="karbon-analizi" />

      <section className="bg-deep-navy px-margin-mobile py-24 text-center text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Karbon Yönetimi</p>
          <h2 className="font-headline-lg text-4xl uppercase md:text-headline-lg">
            Karbon etkinizi ölçün, operasyonlarınızı optimize edin
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body-lg text-body-lg text-primary-fixed-dim">
            Tesisinizin karbon etkisini görünür hale getirin ve sürdürülebilirlik hedeflerinize mühendislik temelli bir yol haritasıyla ilerleyin.
          </p>
          <a
            className="mt-10 inline-flex bg-metallic-gold px-9 py-4 font-label-caps text-label-caps font-bold uppercase text-deep-navy transition-colors hover:bg-white"
            href="/iletisim"
          >
            Analiz Sürecini Başlatalım
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
