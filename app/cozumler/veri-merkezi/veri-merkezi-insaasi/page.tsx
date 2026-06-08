import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// metadata, Veri Merkezi İnşası sayfasının arama motoru ve paylaşım bilgilerini tanımlar.
export const metadata: Metadata = {
  title: "Veri Merkezi İnşası | AKYA Group",
  description:
    "AKYA Group; veri merkezi inşası, elektrik altyapısı, soğutma, rack yerleşimi, zayıf akım, DCIM entegrasyonu, test ve devreye alma süreçleri için uçtan uca mühendislik çözümleri sunar.",
  alternates: {
    canonical: "/cozumler/veri-merkezi/veri-merkezi-insaasi",
  },
  openGraph: {
    title: "Veri Merkezi İnşası | AKYA Group",
    description:
      "Kritik dijital altyapılar için veri merkezi kurulum, entegrasyon, test ve devreye alma süreçleri.",
    images: [{ url: "/hero-data-center.jpg", alt: "Veri merkezi inşası ve teknik altyapı kurulumu" }],
  },
};

// serviceCards, veri merkezi kurulumundaki altı temel mühendislik disiplinini içerir.
const serviceCards = [
  {
    title: "Planlama ve Saha Hazırlığı",
    text: "İhtiyaç, kapasite, yerleşim, büyüme hedefleri ve saha koşulları birlikte değerlendirilerek uygulama planı hazırlanır.",
  },
  {
    title: "Elektrik Altyapısı",
    text: "UPS, jeneratör, pano, PDU, topraklama ve güç dağıtımı kesintisiz operasyon hedefiyle koordine edilir.",
  },
  {
    title: "Mekanik ve Soğutma",
    text: "Soğutma kapasitesi, hava akışı, sıcak-soğuk koridor düzeni ve çevresel koşullar proje bütününde ele alınır.",
  },
  {
    title: "Rack ve Kabinet Yerleşimi",
    text: "Rack dizilimi, yük dağılımı, enerji erişimi, kablo yönetimi ve bakım koridorları operasyon odaklı planlanır.",
  },
  {
    title: "Fiber, Bakır ve Zayıf Akım",
    text: "Data kablolama, yangın algılama, CCTV, erişim kontrolü ve izleme altyapıları koordineli biçimde kurulur.",
  },
  {
    title: "Test, Devreye Alma ve Teslim",
    text: "Sistemler test edilir, saha performansı doğrulanır; as-built çizimler ve operasyon dokümanları hazırlanır.",
  },
];

// processSteps, veri merkezi projesinin keşiften dokümante edilmiş teslime kadar ilerleyişini açıklar.
const processSteps = [
  {
    number: "01",
    title: "Keşif ve İhtiyaç Analizi",
    text: "Tesis koşulları, büyüme hedefleri, enerji ve soğutma kapasitesi, güvenlik gereksinimleri ve operasyon beklentileri değerlendirilir.",
  },
  {
    number: "02",
    title: "Teknik Tasarım ve Koordinasyon",
    text: "Yerleşim, güç dağıtımı, soğutma, zayıf akım, kablolama ve izleme sistemleri bütünleşik şekilde planlanır.",
  },
  {
    number: "03",
    title: "Saha Uygulaması ve Entegrasyon",
    text: "Elektrik, mekanik, kabinet, network, güvenlik ve otomasyon ekipleri arasında uygulama koordinasyonu sağlanır.",
  },
  {
    number: "04",
    title: "Test ve Devreye Alma",
    text: "Enerji, soğutma, alarm, erişim kontrolü, ağ ve izleme sistemleri test edilerek saha performansı doğrulanır.",
  },
  {
    number: "05",
    title: "Dokümantasyon ve Teslim",
    text: "As-built çizimler, kablo etiketleri, sistem listeleri, test raporları ve operasyon dokümanları teslim edilir.",
  },
];

// technicalScope, saha uygulamasında ele alınan teknik iş kalemlerini listeler.
const technicalScope = [
  "Veri salonu ve teknik oda yerleşim planlaması",
  "Rack, kabinet, PDU ve kablo yönetimi",
  "UPS, jeneratör, pano ve güç dağıtım koordinasyonu",
  "Fiber optik ve bakır data kablolama altyapısı",
  "Soğuk ve sıcak koridor ile hava akışı düzeni",
  "Yangın algılama, CCTV ve erişim kontrol sistemleri",
  "BMS, DCIM, izleme ve alarm altyapıları",
  "Topraklama, etiketleme ve saha dokümantasyonu",
  "Test, devreye alma, as-built ve teslim dosyaları",
];

// reasons, AKYA'nın veri merkezi inşası projelerindeki çalışma ilkelerini tanımlar.
const reasons = [
  {
    title: "Çok Disiplinli Yaklaşım",
    text: "Elektrik, mekanik, zayıf akım, yazılım ve izleme sistemlerini aynı teknik plan içinde ele alırız.",
  },
  {
    title: "Kritik Tesis Deneyimi",
    text: "Süreklilik, güvenlik ve izlenebilirlik gerektiren altyapılar için operasyon odaklı çözümler üretiriz.",
  },
  {
    title: "Ölçülebilir Teslimat",
    text: "Test, raporlama, etiketleme ve dokümantasyonu kurulum sürecinin ayrılmaz parçası olarak görürüz.",
  },
  {
    title: "Ölçeklenebilir Mimari",
    text: "İlk kurulumdan kapasite artışına kadar büyümeyi destekleyen esnek altyapı yaklaşımı geliştiririz.",
  },
  {
    title: "Operasyon Odaklı Tasarım",
    text: "Bakım erişimi, izleme, alarm yönetimi ve saha kullanılabilirliğini tasarım kararlarına dahil ederiz.",
  },
];

// DataCenterConstructionPage, briefte tanımlanan veri merkezi kurulum hizmetini eksiksiz sunar.
export default function DataCenterConstructionPage() {
  return (
    <main className="bg-background">
      <Navbar />

      <section className="relative flex min-h-[680px] items-end overflow-hidden px-margin-mobile pb-16 pt-32 text-white md:px-margin-desktop md:pb-24 md:pt-44">
        <img
          alt="Mavi ışıklı kabinetlerin bulunduğu veri merkezi koridoru"
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero-data-center.jpg"
        />
        <div className="absolute inset-0 bg-deep-navy/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/90 via-deep-navy/55 to-deep-navy/15" />
        <div className="relative z-10 mx-auto w-full max-w-container-max">
          <nav aria-label="Sayfa yolu" className="mb-10 flex flex-wrap gap-2 text-sm text-primary-fixed-dim">
            <Link className="hover:text-white" href="/">Ana Sayfa</Link>
            <span>/</span>
            <Link className="hover:text-white" href="/cozumler">Çözümler</Link>
            <span>/</span>
            <Link className="hover:text-white" href="/cozumler/veri-merkezi">Veri Merkezi</Link>
            <span>/</span>
            <span className="text-white">Veri Merkezi İnşası</span>
          </nav>
          <p className="mb-4 font-label-caps text-label-caps uppercase text-metallic-gold">Dijital Altyapılar / Veri Merkezi</p>
          <h1 className="max-w-5xl font-display-lg text-[42px] font-extrabold uppercase leading-[1.08] [text-shadow:0_3px_14px_rgba(0,0,0,0.75)] md:text-display-lg">
            Veri Merkezi İnşası
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.85)]">
            Kritik dijital altyapılar için veri merkezi kurulum, entegrasyon, test ve devreye alma süreçlerini uçtan uca yönetiyoruz.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link className="inline-flex justify-center bg-metallic-gold px-8 py-4 font-label-caps text-label-caps font-bold uppercase text-deep-navy hover:bg-white" href="/iletisim">
              Projenizi Başlatalım
            </Link>
            <a className="inline-flex justify-center border border-white px-8 py-4 font-label-caps text-label-caps font-bold uppercase text-white hover:bg-white hover:text-deep-navy" href="#hizmet-kapsami">
              Kapsamı İncele
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Bütünleşik Mühendislik</p>
            <h2 className="font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
              Kritik altyapının tüm disiplinleri tek planda
            </h2>
          </div>
          <p className="text-lg leading-8 text-on-surface-variant">
            Veri merkezleri; enerji, soğutma, güvenlik, haberleşme, yangın algılama, izleme ve operasyon süreçlerinin birlikte çalıştığı kritik tesislerdir. AKYA Group, ihtiyaç analizi, teknik tasarım, saha kurulumu, altyapı entegrasyonu, test ve devreye alma süreçlerini bütüncül bir mühendislik yaklaşımıyla ele alır. Amaç; kesintisiz çalışmaya uygun, izlenebilir, ölçeklenebilir ve sürdürülebilir bir altyapı oluşturmaktır.
          </p>
        </div>
      </section>

      <section id="hizmet-kapsami" className="bg-slate-gray px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Hizmet Kapsamı</p>
          <h2 className="mb-12 max-w-4xl font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
            Tasarımdan devreye almaya uçtan uca uygulama
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((service, index) => (
              <article className="min-h-[250px] border-t-4 border-metallic-gold bg-white p-7 shadow-sm" key={service.title}>
                <span className="font-label-caps text-xs text-metallic-gold">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mb-4 mt-6 font-headline-sm text-xl uppercase text-deep-navy">{service.title}</h3>
                <p className="text-sm leading-7 text-on-surface-variant">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep-navy px-margin-mobile py-24 text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Çalışma Süreci</p>
          <h2 className="mb-14 max-w-4xl font-headline-lg text-4xl uppercase md:text-headline-lg">
            Keşiften dokümante edilmiş teslime kontrollü ilerleme
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-0">
            {processSteps.map((step) => (
              <article className="border-l border-white/15 pl-6 md:min-h-[280px] md:pr-6" key={step.number}>
                <span className="font-display-lg text-4xl font-bold text-metallic-gold">{step.number}</span>
                <h3 className="mb-4 mt-5 font-headline-sm text-xl uppercase">{step.title}</h3>
                <p className="text-sm leading-6 text-primary-fixed-dim">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Teknik Kapsam</p>
            <h2 className="font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
              Sahadaki her sistem görünür ve doğrulanabilir
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-px bg-outline-variant sm:grid-cols-2">
            {technicalScope.map((item, index) => (
              <li className="flex min-h-28 gap-4 bg-white p-6 text-on-surface-variant" key={item}>
                <span className="font-label-caps text-xs text-metallic-gold">{String(index + 1).padStart(2, "0")}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-gray px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Neden AKYA?</p>
          <h2 className="mb-12 max-w-4xl font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
            Kurulumu işletme gerçekleriyle birlikte planlıyoruz
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
            {reasons.map((reason) => (
              <article className="border-l-4 border-metallic-gold bg-white p-7" key={reason.title}>
                <h3 className="mb-4 font-headline-sm text-lg uppercase text-deep-navy">{reason.title}</h3>
                <p className="text-sm leading-6 text-on-surface-variant">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep-navy px-margin-mobile py-24 text-center text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Projeniz İçin</p>
          <h2 className="font-headline-lg text-4xl uppercase md:text-headline-lg">Veri merkezi projenizi birlikte planlayalım</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-fixed-dim">
            Yeni kurulum, kapasite artırımı veya mevcut altyapı iyileştirme süreçlerinde ölçülebilir ve izlenebilir bir veri merkezi altyapısı oluşturun.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link className="inline-flex justify-center bg-metallic-gold px-9 py-4 font-label-caps text-label-caps font-bold uppercase text-deep-navy hover:bg-white" href="/iletisim">
              İletişime Geçin
            </Link>
            <Link className="inline-flex justify-center border border-white px-9 py-4 font-label-caps text-label-caps font-bold uppercase text-white hover:bg-white hover:text-deep-navy" href="/iletisim">
              Teknik Kapsamı Paylaşın
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
