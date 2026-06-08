import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SubSolutionGrid from "@/components/SubSolutionGrid";

// metadata, DCIM sayfasının arama motoru başlık ve açıklamasını tanımlar.
export const metadata: Metadata = {
  title: "DCIM Yazılımı | Veri Merkezi İzleme ve Yönetim Çözümleri | AKYA Group",
  description:
    "AKYA Group, veri merkezleri ve kritik tesisler için DCIM yazılımı, enerji izleme, çevresel izleme, alarm yönetimi, kapasite planlama ve raporlama çözümleri sunar.",
};

// capabilities, DCIM platformunun temel operasyonel yeteneklerini içerir.
const capabilities = [
  {
    title: "Varlık Yönetimi",
    text: "Rack, cihaz, PDU, UPS, klima, sensör ve network ekipmanlarını merkezi bir dijital envanter üzerinden takip edin.",
  },
  {
    title: "Enerji İzleme",
    text: "PDU, enerji analizörü, UPS ve pano verilerini izleyerek tüketim, yüklenme ve kullanılabilir kapasiteyi raporlayın.",
  },
  {
    title: "Çevresel İzleme",
    text: "Sıcaklık, nem, basınç farkı, su kaçağı, kapı durumu ve ortam sensörlerini tek ekranda izleyin.",
  },
  {
    title: "Alarm Yönetimi",
    text: "Kritik eşikleri tanımlayın, olayları seviyelerine göre sınıflandırın ve teknik ekiplere hızlı bildirim sağlayın.",
  },
  {
    title: "Kapasite Planlama",
    text: "Rack doluluğu, enerji ve soğutma kapasitesi ile gelecek büyüme senaryolarını veriye dayalı olarak yönetin.",
  },
  {
    title: "Raporlama ve Analitik",
    text: "Enerji tüketimi, alarm geçmişi, çevresel performans ve kapasite kullanımına ilişkin yönetilebilir raporlar oluşturun.",
  },
];

// useCases, DCIM çözümünün uygulanabildiği tesis ve altyapı türlerini listeler.
const useCases = [
  "Veri merkezleri ve data hall alanları",
  "Server room ve network odaları",
  "Teknik hacimler ve elektrik odaları",
  "Kritik tesisler ve operasyon merkezleri",
  "Kampüs ve dağıtık altyapılar",
  "UPS, PDU, pano, klima ve sensör sistemleri",
];

// processSteps, keşiften optimizasyona kadar DCIM devreye alma sürecini açıklar.
const processSteps = [
  { number: "01", title: "Keşif", text: "Mevcut altyapı, cihazlar, haberleşme protokolleri ve izleme ihtiyaçları belirlenir." },
  { number: "02", title: "Veri Toplama", text: "PDU, UPS, enerji analizörü, klima, sensör ve diğer sistemlerden alınacak veriler tanımlanır." },
  { number: "03", title: "Entegrasyon", text: "Modbus TCP/IP, SNMP, BACnet, API veya uygun protokollerle sistemler platforma bağlanır." },
  { number: "04", title: "Dashboard Tasarımı", text: "Operasyon ekipleri için anlaşılır ekranlar, özet paneller ve izleme görünümleri oluşturulur." },
  { number: "05", title: "Alarm ve Raporlama", text: "Kritik eşikler, olay seviyeleri, bildirim akışları ve periyodik raporlar yapılandırılır." },
  { number: "06", title: "Optimizasyon", text: "Toplanan verilerle enerji, soğutma, kapasite ve operasyon süreçleri sürekli iyileştirilir." },
];

// reasons, AKYA'nın DCIM projelerindeki farklılaşan mühendislik yaklaşımını anlatır.
const reasons = [
  {
    title: "Veri Merkezi Odaklı Yaklaşım",
    text: "DCIM'i yalnızca bir yazılım ekranı olarak değil; enerji, soğutma, zayıf akım, operasyon ve sürdürülebilirliği bağlayan yönetim katmanı olarak ele alırız.",
  },
  {
    title: "Mühendislik ve Ölçüm Deneyimi",
    text: "Termal test, basınç testi, POE analizi ve saha ölçümlerinden gelen verileri dijital izleme sistemiyle ilişkilendiririz.",
  },
  {
    title: "Entegrasyon Yeteneği",
    text: "Farklı marka, cihaz ve sistemlerden gelen verileri ortak ve yönetilebilir bir izleme mimarisinde birleştiririz.",
  },
  {
    title: "Operasyonel Karar Desteği",
    text: "Alarm, kapasite ve raporlama yapısıyla teknik ekiplerin daha hızlı ve veriye dayalı karar almasını sağlarız.",
  },
  {
    title: "Sürdürülebilir Performans",
    text: "Enerji tüketimi, kapasite kullanımı ve çevresel veriler üzerinden tesis performansının sürekli iyileştirilmesine katkı sağlarız.",
  },
];

// referenceProjects, gerçek DCIM projeleri eklenene kadar kullanılacak örnek referans kartlarıdır.
const referenceProjects = [
  {
    title: "Veri Merkezi İzleme Altyapısı",
    text: "Enerji, sıcaklık, nem ve alarm verilerinin merkezi izleme platformunda toplandığı altyapı çalışması.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Kapasite ve Enerji Raporlama",
    text: "Rack, PDU ve pano seviyesinde enerji tüketimi ile kapasite kullanımının raporlandığı yönetim çözümü.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Teknik Oda Çevresel İzleme",
    text: "Sıcaklık, nem, su kaçağı ve kapı durumlarının alarm senaryolarıyla takip edildiği izleme altyapısı.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
  },
];

// DcimSoftwarePage, briefte tanımlanan özel DCIM çözüm sayfasını render eder.
export default function DcimSoftwarePage() {
  return (
    <main className="bg-background">
      <Navbar />

      <section className="relative flex min-h-[620px] items-end overflow-hidden px-margin-mobile pb-14 pt-28 md:min-h-[760px] md:px-margin-desktop md:pb-28 md:pt-36">
        <img
          alt="DCIM izleme ekranları ve veri merkezi operasyonları"
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=90"
        />
        <div className="absolute inset-0 bg-deep-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-deep-navy/35" />
        <div className="relative z-10 mx-auto w-full max-w-container-max text-surface-container-lowest">
          <p className="mb-4 font-label-caps text-label-caps uppercase text-metallic-gold">AKYA Group</p>
          <h1 className="max-w-5xl font-display-lg text-[38px] font-extrabold uppercase leading-[1.08] md:text-display-lg">DCIM Yazılımı</h1>
          <p className="mt-6 max-w-3xl font-body-lg text-body-lg text-primary-fixed-dim">
            Veri merkezlerinizi, teknik odalarınızı ve kritik altyapılarınızı tek merkezden izleyin, yönetin ve optimize edin.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a className="bg-metallic-gold px-8 py-4 text-center font-label-caps text-label-caps font-bold uppercase text-deep-navy transition-colors hover:bg-white" href="/iletisim">
              Demo Talep Edin
            </a>
            <a className="border border-white px-8 py-4 text-center font-label-caps text-label-caps font-bold uppercase text-white transition-colors hover:border-metallic-gold hover:text-metallic-gold" href="#yetenekler">
              Çözümleri İnceleyin
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Dijital Yönetim</p>
            <h2 className="font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Kritik altyapılar için dijital görünürlük ve kontrol</h2>
          </div>
          <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
            <p>
              Veri merkezlerinde operasyonel süreklilik yalnızca güçlü enerji ve soğutma altyapısı ile sağlanmaz. Bu altyapıların anlık olarak izlenmesi, ölçülmesi, raporlanması ve yönetilmesi gerekir.
            </p>
            <p>
              DCIM yazılımları; enerji, çevresel koşullar, varlıklar, alarmlar ve kapasite bilgilerini tek dijital platformda bir araya getirir. AKYA Group, sahadaki verinin daha hızlı anlaşılması, risklerin erken fark edilmesi ve tesis performansının sürdürülebilir biçimde iyileştirilmesi için DCIM, entegrasyon ve raporlama çözümleri sunar.
            </p>
          </div>
        </div>
      </section>

      <section id="yetenekler" className="bg-slate-gray px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Temel Yetenekler</p>
          <h2 className="mb-12 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Tesis verisini yönetilebilir bilgiye dönüştürün</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((capability, index) => (
              <article className="border-t-4 border-metallic-gold bg-white p-7 shadow-sm" key={capability.title}>
                <span className="font-label-caps text-[12px] text-metallic-gold">0{index + 1}</span>
                <h3 className="mb-4 mt-5 font-headline-sm text-headline-sm uppercase text-deep-navy">{capability.title}</h3>
                <p className="text-on-surface-variant">{capability.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Kullanım Alanları</p>
            <h2 className="font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Dağıtık ve kritik altyapıları aynı merkezden izleyin</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {useCases.map((item) => (
              <div className="border-l-4 border-metallic-gold bg-slate-gray p-5 font-semibold text-deep-navy" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep-navy px-margin-mobile py-24 text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Çalışma Yaklaşımımız</p>
          <h2 className="mb-14 max-w-4xl font-headline-lg text-4xl uppercase md:text-headline-lg">Keşiften optimizasyona kontrollü entegrasyon</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step) => (
              <article className="border-l border-white/15 pl-6" key={step.number}>
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
          <h2 className="mb-12 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Yazılımı saha mühendisliğiyle birleştiriyoruz</h2>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-5">
            {reasons.map((reason) => (
              <article className="border-t-4 border-metallic-gold bg-slate-gray p-6" key={reason.title}>
                <h3 className="mb-4 font-headline-sm text-lg uppercase text-deep-navy">{reason.title}</h3>
                <p className="text-sm leading-6 text-on-surface-variant">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-gray px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Referans Projeler</p>
          <h2 className="mb-12 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Örnek DCIM çalışma alanları</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {referenceProjects.map((project) => (
              <article className="group bg-white" key={project.title}>
                <div className="h-64 overflow-hidden">
                  <img alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={project.image} />
                </div>
                <div className="p-7">
                  <h3 className="mb-4 font-headline-sm text-xl uppercase text-deep-navy">{project.title}</h3>
                  <p className="mb-6 text-on-surface-variant">{project.text}</p>
                  <a className="font-label-caps text-label-caps text-metallic-gold" href="/projeler">Detayları İncele</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SubSolutionGrid parentSlug="dcim-yazilimlari" />

      <section className="bg-deep-navy px-margin-mobile py-24 text-center text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">DCIM Görüşmesi</p>
          <h2 className="font-headline-lg text-4xl uppercase md:text-headline-lg">Kritik altyapınızı tek merkezden yönetin</h2>
          <p className="mx-auto mt-6 max-w-2xl font-body-lg text-body-lg text-primary-fixed-dim">
            Veri merkeziniz, teknik odanız veya kritik tesisiniz için DCIM yazılımı ve izleme altyapısı kurgulamak üzere AKYA Group ile iletişime geçin.
          </p>
          <a className="mt-10 inline-flex bg-metallic-gold px-9 py-4 font-label-caps text-label-caps font-bold uppercase text-deep-navy transition-colors hover:bg-white" href="/iletisim">
            Demo Talep Edin
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
