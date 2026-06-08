import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SubSolutionGrid from "@/components/SubSolutionGrid";

// metadata, Zayıf Akım Sistemleri sayfasının arama motoru başlık ve açıklamasını tanımlar.
export const metadata: Metadata = {
  title: "Zayıf Akım Sistemleri | AKYA Group",
  description:
    "Veri, güvenlik, haberleşme ve bina teknolojileri için bütünleşik zayıf akım altyapısı tasarım, uygulama ve devreye alma hizmetleri.",
};

// serviceCards, zayıf akım projelerinde sunulan dört temel mühendislik hizmetini içerir.
const serviceCards = [
  {
    title: "Yapısal Kablolama",
    description: "Veri, ses, kamera, erişim kontrol ve otomasyon sistemleri için ölçeklenebilir bakır ve fiber altyapılar tasarlarız.",
    items: [
      "Cat6 / Cat6A altyapı planlaması",
      "Fiber optik omurga tasarımı",
      "Patch panel ve kabinet yerleşimi",
      "Etiketleme ve kablo güzergahı",
      "Rack içi kablo yönetimi",
      "Test ve sonlandırma dokümantasyonu",
    ],
  },
  {
    title: "Güvenlik Sistemleri",
    description: "Tesis güvenliği, izlenebilirlik ve kontrollü erişim için entegre güvenlik sistemlerini planlarız.",
    items: [
      "CCTV kamera sistemleri",
      "Erişim kontrol sistemleri",
      "Turnike ve kapı geçiş altyapısı",
      "Yangın algılama entegrasyonu",
      "Alarm ve olay yönetimi",
      "Güvenlik odası altyapısı",
    ],
  },
  {
    title: "Haberleşme ve Network",
    description: "Kurumsal ağ, saha cihazları ve bina teknolojileri için güvenilir haberleşme altyapıları oluştururuz.",
    items: [
      "LAN / WAN altyapısı",
      "Switch ve kabinet planlaması",
      "IP tabanlı cihaz entegrasyonu",
      "Wi-Fi altyapı planlaması",
      "VLAN ve ağ segmentasyonu",
      "Teknik oda altyapısı",
    ],
  },
  {
    title: "Entegrasyon ve İzleme",
    description: "Zayıf akım sistemlerini BMS, DCIM, SCADA ve merkezi izleme yapılarıyla birlikte çalışacak şekilde kurgularız.",
    items: [
      "BMS entegrasyon altyapısı",
      "Modbus / BACnet / IP koordinasyonu",
      "Merkezi izleme noktaları",
      "Alarm ve durum sinyalleri",
      "Varlık ve port yönetimi",
      "As-built dokümantasyon",
    ],
  },
];

// systemScopes, projelerde ele alınabilen zayıf akım alt sistemlerini hızlı bir özet halinde listeler.
const systemScopes = [
  "Yapısal kablolama ve fiber optik altyapı",
  "CCTV ve video izleme sistemleri",
  "Kartlı geçiş ve erişim kontrol sistemleri",
  "Yangın algılama ve acil anons entegrasyonları",
  "Network altyapısı ve aktif cihaz yerleşimi",
  "BMS, otomasyon ve merkezi izleme bağlantıları",
  "Rack, kabinet, patch panel ve teknik oda düzeni",
  "Etiketleme, test raporları ve as-built dokümantasyon",
];

// processSteps, keşiften devreye almaya kadar izlenen kontrollü proje sürecini açıklar.
const processSteps = [
  { number: "01", title: "Keşif", text: "Mevcut altyapı, kullanıcı ihtiyaçları, cihaz noktaları, güzergahlar ve teknik hacimler değerlendirilir." },
  { number: "02", title: "Tasarım", text: "Sistem mimarisi, kablo güzergahları, kabinet yerleşimleri, cihaz noktaları ve entegrasyon senaryoları hazırlanır." },
  { number: "03", title: "Uygulama Koordinasyonu", text: "Elektrik, mekanik, mimari ve IT ekipleriyle uyumlu şekilde saha uygulama süreci yönetilir." },
  { number: "04", title: "Test", text: "Kablolama, bağlantı, cihaz erişimi, alarm ve haberleşme fonksiyonları kontrollü olarak test edilir." },
  { number: "05", title: "Devreye Alma", text: "Sistemler işletmeye alınır; etiketleme, test raporları ve as-built dokümanları teslim edilir." },
];

// reasons, AKYA'nın zayıf akım projelerine kattığı temel mühendislik avantajlarını tanımlar.
const reasons = [
  {
    title: "Bütünleşik Altyapı Yaklaşımı",
    text: "Zayıf akım sistemlerini veri merkezi, BMS, DCIM, enerji ve güvenlik altyapılarıyla birlikte değerlendiririz.",
  },
  {
    title: "Saha Gerçekliğiyle Uyumlu Tasarım",
    text: "Kablo güzergahı, teknik hacim, kabinet erişimi ve bakım kolaylığını tasarım kararlarının merkezine alırız.",
  },
  {
    title: "Ölçeklenebilir Mimari",
    text: "Yeni cihazlara, kapasite artışına ve gelecekteki sistem entegrasyonlarına uyum sağlayabilecek altyapılar tasarlarız.",
  },
  {
    title: "Dokümantasyon Disiplini",
    text: "Etiketleme, test raporu, cihaz listesi, port planı ve as-built süreçlerini işletme kolaylığı sağlayacak şekilde hazırlarız.",
  },
];

// referenceProjects, gerçek proje verileri eklenene kadar kullanılacak örnek çalışma kartlarını içerir.
const referenceProjects = [
  {
    title: "Veri Merkezi Zayıf Akım Altyapısı",
    description: "Fiber omurga, bakır kablolama, rack yerleşimi, kamera ve erişim kontrol altyapısının planlandığı bütünleşik çalışma.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Kurumsal Bina Güvenlik Sistemleri",
    description: "CCTV, kartlı geçiş, yangın algılama entegrasyonu ve merkezi izleme altyapısının projelendirildiği çalışma.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Teknik Oda ve Network Altyapısı",
    description: "Kabinet yerleşimi, patch panel düzeni, aktif cihaz planlaması ve etiketleme sistematiğinin hazırlandığı uygulama.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
  },
];

// LowCurrentSystemsPage, briefte tanımlanan Zayıf Akım Sistemleri çözüm sayfasını oluşturur.
export default function LowCurrentSystemsPage() {
  return (
    <main className="bg-background">
      <Navbar />

      <section className="relative flex min-h-[620px] items-end overflow-hidden px-margin-mobile pb-14 pt-28 md:min-h-[760px] md:px-margin-desktop md:pb-28 md:pt-36">
        <img
          alt="Network kabinetleri ve zayıf akım altyapısı"
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero-low-current.jpg"
        />
        <div className="absolute inset-0 bg-deep-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-deep-navy/35" />
        <div className="relative z-10 mx-auto w-full max-w-container-max text-surface-container-lowest">
          <p className="mb-4 font-label-caps text-label-caps uppercase text-metallic-gold">Dijital Altyapılar</p>
          <h1 className="max-w-5xl font-display-lg text-[38px] font-extrabold uppercase leading-[1.08] md:text-display-lg">Zayıf Akım Sistemleri</h1>
          <p className="mt-6 max-w-3xl font-body-lg text-body-lg text-primary-fixed-dim">
            Veri, güvenlik, haberleşme ve bina teknolojileri için bütünleşik dijital altyapı çözümleri.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a className="bg-metallic-gold px-8 py-4 text-center font-label-caps text-label-caps font-bold uppercase text-deep-navy transition-colors hover:bg-white" href="#referanslar">
              Projelerimizi İnceleyin
            </a>
            <a className="border border-white px-8 py-4 text-center font-label-caps text-label-caps font-bold uppercase text-white transition-colors hover:border-metallic-gold hover:text-metallic-gold" href="/iletisim">
              Bizimle İletişime Geçin
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Zayıf Akım Mühendisliği</p>
            <h2 className="font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Binaların ve kritik tesislerin dijital omurgasını tasarlıyoruz</h2>
          </div>
          <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
            <p>
              Zayıf akım sistemleri; veri iletişimi, güvenlik, izleme, erişim kontrolü ve bina teknolojilerinin kesintisiz çalışmasını sağlayan temel altyapıdır. Doğru tasarlanmayan altyapılar işletme sürecinde kapasite, güvenlik, izlenebilirlik ve bakım problemlerine yol açabilir.
            </p>
            <p>
              AKYA Group, zayıf akım sistemlerini yalnızca ekipman kurulumu olarak değil; mimari, elektrik, mekanik, güvenlik ve dijital yönetim süreçleriyle birlikte ele alınması gereken bütünleşik bir mühendislik disiplini olarak değerlendirir.
            </p>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="bg-slate-gray px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Hizmet Kapsamı</p>
          <h2 className="mb-12 max-w-4xl font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Teknik altyapıyı bütünleşik olarak ele alıyoruz</h2>
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
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Sistem Kapsamları</p>
          <h2 className="mb-12 max-w-4xl font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Tek merkezden planlanan bağlantılı sistemler</h2>
          <div className="grid grid-cols-1 gap-px bg-outline-variant md:grid-cols-2 lg:grid-cols-4">
            {systemScopes.map((scope, index) => (
              <article className="min-h-44 bg-white p-7" key={scope}>
                <span className="font-label-caps text-xs text-metallic-gold">0{index + 1}</span>
                <p className="mt-6 font-headline-sm text-lg uppercase leading-7 text-deep-navy">{scope}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep-navy px-margin-mobile py-24 text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Çalışma Yaklaşımımız</p>
          <h2 className="mb-14 max-w-4xl font-headline-lg text-4xl uppercase md:text-headline-lg">Keşiften devreye almaya kontrollü ilerleme</h2>
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
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Neden AKYA?</p>
          <h2 className="mb-12 max-w-4xl font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Tasarımı işletme gerçekleriyle birleştiriyoruz</h2>
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

      <section id="referanslar" className="bg-slate-gray px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Referans Projeler</p>
          <h2 className="mb-12 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Örnek çalışma alanları</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {referenceProjects.map((project) => (
              <article className="group bg-white" key={project.title}>
                <div className="h-64 overflow-hidden">
                  <img alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={project.image} />
                </div>
                <div className="p-7">
                  <h3 className="mb-4 font-headline-sm text-xl uppercase text-deep-navy">{project.title}</h3>
                  <p className="mb-6 text-on-surface-variant">{project.description}</p>
                  <a className="font-label-caps text-label-caps text-metallic-gold transition-colors hover:text-deep-navy" href="/projeler">
                    Detayları İncele
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SubSolutionGrid parentSlug="zayif-akim-sistemleri" />

      <section className="bg-deep-navy px-margin-mobile py-24 text-center text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Projeniz İçin</p>
          <h2 className="font-headline-lg text-4xl uppercase md:text-headline-lg">Zayıf akım altyapınızı geleceğe hazırlayın</h2>
          <p className="mx-auto mt-6 max-w-2xl font-body-lg text-body-lg text-primary-fixed-dim">
            Veri, güvenlik, haberleşme ve izleme sistemleriniz için ölçeklenebilir ve yönetilebilir dijital altyapılar tasarlayalım.
          </p>
          <a className="mt-10 inline-flex bg-metallic-gold px-9 py-4 font-label-caps text-label-caps font-bold uppercase text-deep-navy transition-colors hover:bg-white" href="/iletisim">
            Bizimle İletişime Geçin
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
