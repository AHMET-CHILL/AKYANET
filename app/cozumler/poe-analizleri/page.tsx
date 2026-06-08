import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SubSolutionGrid from "@/components/SubSolutionGrid";

// metadata, POE Analizleri sayfasının arama motoru başlık ve açıklamasını tanımlar.
export const metadata: Metadata = {
  title: "POE Analizleri | AKYA Group",
  description:
    "AKYA Group, PoE altyapılarında güç bütçesi, switch kapasitesi, kablolama uygunluğu ve cihaz yükleri için mühendislik analizi sunar.",
  keywords: [
    "PoE analizi",
    "Power over Ethernet",
    "PoE güç bütçesi",
    "switch kapasite analizi",
    "zayıf akım PoE",
    "IP kamera PoE",
    "access point PoE",
  ],
};

// serviceCards, PoE altyapısında değerlendirilen dört temel mühendislik alanını içerir.
const serviceCards = [
  {
    title: "PoE Güç Bütçesi",
    description: "Bağlı cihazların güç ihtiyacını switch kapasitesiyle karşılaştırarak güvenli çalışma ve büyüme payını belirleriz.",
    items: [
      "Cihaz bazlı güç tüketimi analizi",
      "Switch PoE bütçesi kontrolü",
      "Port başına güç sınıfı değerlendirmesi",
      "Yedeklilik ve büyüme payı analizi",
    ],
  },
  {
    title: "Ağ ve Switch Kapasitesi",
    description: "Port kullanımı, uplink trafiği ve ağ segmentasyonunu cihaz yoğunluğu ve kritik sistem ihtiyaçlarıyla birlikte inceleriz.",
    items: [
      "Switch port doluluk analizi",
      "Uplink kapasite değerlendirmesi",
      "VLAN ve ağ segmentasyonu ihtiyaçları",
      "Kritik cihazlar için kapasite planlama",
    ],
  },
  {
    title: "Kablolama Uygunluğu",
    description: "Bakır altyapının mesafe, kategori, iletim kapasitesi ve yoğun güç aktarımındaki ısınma risklerini değerlendiririz.",
    items: [
      "Bakır kablo mesafe kontrolü",
      "Kablo kategorisi değerlendirmesi",
      "Kablo demeti ısınma riski",
      "Rack ve patch panel düzeni kontrolü",
    ],
  },
  {
    title: "Cihaz ve Sistem Analizi",
    description: "PoE ile beslenen güvenlik, kablosuz ağ, erişim kontrol ve IoT cihazlarını kullanım senaryolarına göre sınıflandırırız.",
    items: [
      "IP kamera sistemleri",
      "Access point ve kablosuz ağ cihazları",
      "Erişim kontrol ve kart okuyucular",
      "IoT sensörleri ve saha cihazları",
    ],
  },
];

// analysisItems, ziyaretçiye örnek bir PoE kapasite değerlendirmesinin temel kontrol alanlarını gösterir.
const analysisItems = [
  { label: "Cihaz Yükü", value: "Watt ve PoE sınıfı", detail: "Her cihazın nominal ve olası tepe güç ihtiyacı sınıflandırılır." },
  { label: "Port Kapasitesi", value: "Kullanım ve rezerv", detail: "Aktif portlar, boş kapasite ve büyüme payı birlikte değerlendirilir." },
  { label: "Switch Bütçesi", value: "Toplam güç limiti", detail: "Cihaz yükleri switch güç bütçesi ve yedeklilik senaryosuyla karşılaştırılır." },
  { label: "Kablo Altyapısı", value: "Mesafe ve ısınma", detail: "Hat uzunluğu, kablo kategorisi ve demet yoğunluğunun etkisi kontrol edilir." },
];

// processSteps, cihaz listesinden kapasite ve iyileştirme raporuna uzanan analiz sürecini açıklar.
const processSteps = [
  {
    number: "01",
    title: "Cihaz Envanteri",
    text: "Mevcut veya planlanan PoE cihazları, kullanım noktaları ve port ihtiyaçları kayıt altına alınır.",
  },
  {
    number: "02",
    title: "Yük Sınıflandırması",
    text: "Cihaz güç tüketimleri, PoE sınıfları, kritik çalışma koşulları ve büyüme senaryoları belirlenir.",
  },
  {
    number: "03",
    title: "Altyapı Kontrolü",
    text: "Switch, uplink, rack, patch panel ve bakır kablolama altyapısının uygunluğu değerlendirilir.",
  },
  {
    number: "04",
    title: "Kapasite Analizi",
    text: "Güç bütçesi, port doluluğu, uplink kapasitesi, ısınma ve süreklilik riskleri analiz edilir.",
  },
  {
    number: "05",
    title: "Raporlama",
    text: "Sonuçlar kapasite tabloları, risk öncelikleri ve uygulanabilir iyileştirme önerileriyle sunulur.",
  },
];

// reasons, AKYA'nın PoE projelerindeki disiplinler arası mühendislik yaklaşımını özetler.
const reasons = [
  {
    title: "Zayıf Akım Uzmanlığı",
    text: "Kamera, erişim kontrol, kablosuz ağ ve IoT sistemlerini cihaz noktalarından teknik oda altyapısına kadar bütün olarak ele alırız.",
  },
  {
    title: "Veri Merkezi Deneyimi",
    text: "Rack, switch, enerji, soğutma ve kapasite ilişkisini kritik altyapı sürekliliği perspektifiyle değerlendiririz.",
  },
  {
    title: "Ölçeklenebilir Planlama",
    text: "Analizi yalnızca mevcut cihaz sayısına göre değil, yedeklilik ve gelecekteki kapasite artışını dikkate alarak yaparız.",
  },
  {
    title: "Karar Destek Raporu",
    text: "Teknik bulguları port, güç ve kablolama seviyesinde izlenebilir bir kapasite ve aksiyon planına dönüştürürüz.",
  },
];

// PoeAnalysisPage, briefte tanımlanan bağımsız Power over Ethernet analiz sayfasını oluşturur.
export default function PoeAnalysisPage() {
  return (
    <main className="bg-background">
      <Navbar />

      <section className="relative flex min-h-[620px] items-end overflow-hidden px-margin-mobile pb-14 pt-28 md:min-h-[760px] md:px-margin-desktop md:pb-28 md:pt-36">
        <img
          alt="Network rack üzerinde PoE port ve güç analizi yapan mühendis"
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="/hero-poe-analysis.png"
        />
        <div className="absolute inset-0 bg-deep-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-deep-navy/35" />
        <div className="relative z-10 mx-auto w-full max-w-container-max text-surface-container-lowest">
          <p className="mb-4 font-label-caps text-label-caps uppercase text-metallic-gold">Kritik Tesis Mühendisliği</p>
          <h1 className="max-w-5xl font-display-lg text-[38px] font-extrabold uppercase leading-[1.08] md:text-display-lg">
            POE Analizleri
          </h1>
          <p className="mt-6 max-w-3xl font-body-lg text-body-lg text-primary-fixed-dim">
            IP kamera, erişim kontrol, kablosuz ağ ve IoT cihazları için PoE altyapılarında güç bütçesi, kapasite ve performans analizleri gerçekleştiriyoruz.
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
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Power over Ethernet</p>
            <h2 className="font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
              Veri ve gücü aynı altyapıda güvenle planlıyoruz
            </h2>
          </div>
          <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
            <p>
              Power over Ethernet altyapıları, modern binalarda güvenlik, haberleşme, otomasyon ve IoT sistemlerinin temel bileşenlerinden biridir. Yanlış planlanan altyapılar güç yetersizliği, port kapasite problemi, ısınma, ağ kararsızlığı ve işletme kesintilerine neden olabilir.
            </p>
            <p>
              AKYA Group, zayıf akım ve dijital altyapı projelerinde PoE güç bütçesi, switch kapasitesi, kablolama uygunluğu ve cihaz yükleri üzerinden bütünleşik mühendislik değerlendirmesi yapar.
            </p>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="bg-slate-gray px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Hizmet Kapsamı</p>
          <h2 className="mb-12 max-w-4xl font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
            Güç bütçesinden cihaz noktasına uçtan uca analiz
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

      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Örnek Analiz Kalemleri</p>
          <h2 className="mb-12 max-w-4xl font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
            Kapasiteyi belirleyen kritik veriler
          </h2>
          <div className="grid grid-cols-1 gap-px bg-outline-variant md:grid-cols-2 lg:grid-cols-4">
            {analysisItems.map((item, index) => (
              <article className="min-h-64 bg-white p-7" key={item.label}>
                <span className="font-label-caps text-xs text-metallic-gold">0{index + 1}</span>
                <h3 className="mt-6 font-headline-sm text-xl uppercase text-deep-navy">{item.label}</h3>
                <p className="mt-3 font-semibold text-metallic-gold">{item.value}</p>
                <p className="mt-5 text-sm leading-6 text-on-surface-variant">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep-navy px-margin-mobile py-24 text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Çalışma Yaklaşımımız</p>
          <h2 className="mb-14 max-w-4xl font-headline-lg text-4xl uppercase md:text-headline-lg">
            Cihaz listesinden kapasite planına kontrollü ilerleme
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
            Zayıf akım ve dijital altyapı bilgisi aynı analizde buluşur
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

      <SubSolutionGrid parentSlug="poe-analizleri" />

      <section className="bg-deep-navy px-margin-mobile py-24 text-center text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">PoE Altyapı Analizi</p>
          <h2 className="font-headline-lg text-4xl uppercase md:text-headline-lg">
            PoE kapasitenizi birlikte değerlendirelim
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body-lg text-body-lg text-primary-fixed-dim">
            Güç bütçesini, switch kapasitesini, kablolama uygunluğunu ve cihaz yüklerini analiz ederek güvenilir ve büyümeye hazır bir altyapı oluşturalım.
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
