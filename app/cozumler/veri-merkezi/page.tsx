import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SubSolutionGrid from "@/components/SubSolutionGrid";
import VerimetBrandCard from "@/components/VerimetBrandCard";

// metadata, Veri Merkezi sayfasının arama motoru başlık ve açıklamasını tanımlar.
export const metadata: Metadata = {
  title: "Veri Merkezi Çözümleri | AKYA Group",
  description: "Kritik dijital altyapılar için tasarım, analiz, test, devreye alma ve DCIM yönetim hizmetleri.",
};

// serviceCards, veri merkezi yaşam döngüsündeki dört temel hizmet alanını içerir.
const serviceCards = [
  {
    title: "Tasarım",
    description: "İşletme ihtiyaçlarına uygun veri merkezi mimarisini ve teknik altyapı kararlarını bütüncül biçimde oluştururuz.",
    items: ["Veri salonu ve rack yerleşimleri", "Güç dağıtım mimarisi", "Soğutma altyapısı", "Fiber ve bakır altyapı", "Yedeklilik senaryoları"],
  },
  {
    title: "Test ve Doğrulama",
    description: "Veri merkezi performansını ölçüm, test ve saha analizleriyle doğrular; riskleri operasyonu etkilemeden görünür kılarız.",
    items: ["Termal ve basınç testleri", "Hava akışı analizleri", "Sıcak nokta tespiti", "Containment performansı", "Operasyonel ölçümler"],
  },
  {
    title: "İzleme ve Yönetim",
    description: "DCIM ve izleme sistemleriyle enerji, çevresel koşullar, kapasite ve alarm süreçlerini tek yönetim katmanında toplarız.",
    items: ["DCIM sistemleri", "Enerji ve çevresel izleme", "Alarm yönetimi", "Varlık yönetimi", "Kapasite raporlaması"],
  },
  {
    title: "Optimizasyon",
    description: "Enerji verimliliğini, soğutma performansını ve kapasite kullanımını ölçülebilir iyileştirme planlarına dönüştürürüz.",
    items: ["Enerji verimliliği", "Soğutma optimizasyonu", "Kapasite planlama", "Risk azaltımı", "Süreklilik analizi"],
  },
];

// processSteps, AKYA'nın analizden sürekli optimizasyona uzanan çalışma modelini açıklar.
const processSteps = [
  { number: "01", title: "Analiz", text: "Mevcut altyapı, kapasite, riskler ve gelecek ihtiyaçları değerlendirilir." },
  { number: "02", title: "Tasarım", text: "Enerji, soğutma, network, zayıf akım ve yönetim sistemleri birlikte kurgulanır." },
  { number: "03", title: "Test", text: "Termal, basınç, çevresel ve operasyonel testlerle sistem performansı doğrulanır." },
  { number: "04", title: "Devreye Alma", text: "Sistemler kontrollü biçimde devreye alınır ve işletmeye geçiş desteklenir." },
  { number: "05", title: "İzleme ve Optimizasyon", text: "DCIM, raporlama ve analizlerle sürekli performans takibi sağlanır." },
];

// reasons, kurumların veri merkezi projelerinde AKYA ile çalışmasının temel avantajlarını listeler.
const reasons = [
  { title: "Kritik Tesis Uzmanlığı", text: "Yüksek erişilebilirlik ve operasyonel süreklilik gereksinimlerine uygun çözümler geliştiririz." },
  { title: "Ölçüm Odaklı Yaklaşım", text: "Mühendislik kararlarını varsayımlara değil; test, analiz ve saha verilerine dayandırırız." },
  { title: "Dijital Yönetim", text: "DCIM çözümleriyle enerji, çevresel koşullar, kapasite ve alarm süreçlerini görünür hale getiririz." },
  { title: "Sürdürülebilir Operasyon", text: "Enerji verimliliği, karbon etkisi ve kaynak kullanımı açısından dengeli altyapılar hedefleriz." },
];

// referenceProjects, gerçek proje bilgileri gelene kadar kullanılacak örnek referans kartlarıdır.
const referenceProjects = [
  {
    title: "Veri Merkezi Kapasite Artırımı",
    description: "Rack, PDU, enerji dağıtımı ve fiber altyapı ihtiyaçlarının planlandığı kapasite geliştirme çalışması.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Termal Performans Analizi",
    description: "Veri salonundaki sıcak nokta risklerinin ve hava akışı performansının değerlendirildiği test çalışması.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "DCIM Entegrasyonu",
    description: "Enerji, çevresel izleme, alarm ve kapasite yönetiminin dijital platform üzerinden izlendiği entegrasyon.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
  },
];

// DataCenterPage, briefte tanımlanan özel Veri Merkezi çözüm sayfasını render eder.
export default function DataCenterPage() {
  return (
    <main className="bg-background">
      <Navbar />

      <section className="relative flex min-h-[620px] items-end overflow-hidden px-margin-mobile pb-14 pt-28 md:min-h-[760px] md:px-margin-desktop md:pb-28 md:pt-36">
        <img alt="Mavi ışıklı veri merkezi sunucu koridoru" className="absolute inset-0 h-full w-full object-cover" src="/hero-data-center.jpg" />
        <div className="absolute inset-0 bg-deep-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-deep-navy/35" />
        <div className="relative z-10 mx-auto w-full max-w-container-max text-surface-container-lowest">
          <p className="mb-4 font-label-caps text-label-caps uppercase text-metallic-gold">Dijital Altyapılar</p>
          <h1 className="max-w-5xl font-display-lg text-[38px] font-extrabold uppercase leading-[1.08] md:text-display-lg">Veri Merkezi Çözümleri</h1>
          <p className="mt-6 max-w-2xl font-body-lg text-body-lg text-primary-fixed-dim">
            Kritik dijital altyapılar için tasarım, analiz, test ve yönetim hizmetleri.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a className="bg-metallic-gold px-8 py-4 text-center font-label-caps text-label-caps font-bold uppercase text-deep-navy transition-colors hover:bg-white" href="#referanslar">
              Referanslarımızı İnceleyin
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
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Veri Merkezi Mühendisliği</p>
            <h2 className="font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Kesintisiz çalışan veri merkezleri tasarlıyoruz</h2>
          </div>
          <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
            <p>Veri merkezleri yalnızca sunucuların bulunduğu alanlar değil; enerji, soğutma, haberleşme, güvenlik ve operasyon süreçlerinin bir bütün olarak yönetildiği kritik tesislerdir.</p>
            <p>AKYA Group, veri merkezi yaşam döngüsünün her aşamasında mühendislik, analiz, test ve dijital yönetim çözümleri sunar. Amacımız güvenilir, ölçeklenebilir, izlenebilir ve sürdürülebilir dijital altyapılar oluşturmaktır.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-gray px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Hizmet Kapsamı</p>
          <h2 className="mb-12 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Yaşam döngüsünün her aşamasında teknik destek</h2>
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
          <h2 className="mb-14 max-w-4xl font-headline-lg text-4xl uppercase md:text-headline-lg">Analizden sürekli optimizasyona kontrollü ilerleme</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-0">
            {processSteps.map((step) => (
              <article className="relative border-l border-white/15 pl-6 md:min-h-[240px] md:pr-6" key={step.number}>
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
          <h2 className="mb-12 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Kritik altyapılarda mühendislik ve veri birlikte çalışır</h2>
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
                  <a className="font-label-caps text-label-caps text-metallic-gold" href="/referanslar">Detayları İncele</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SubSolutionGrid parentSlug="veri-merkezi" />
      <VerimetBrandCard />

      <section className="bg-deep-navy px-margin-mobile py-24 text-center text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Projeniz İçin</p>
          <h2 className="font-headline-lg text-4xl uppercase md:text-headline-lg">Veri merkezinizin performansını bir üst seviyeye taşıyın</h2>
          <p className="mx-auto mt-6 max-w-2xl font-body-lg text-body-lg text-primary-fixed-dim">
            Kritik dijital altyapılarınız için tasarım, test, analiz ve yönetim süreçlerinde AKYA Group ile çalışın.
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
