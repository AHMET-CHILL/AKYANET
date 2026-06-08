import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SubSolutionGrid from "@/components/SubSolutionGrid";

// metadata, Su Analizi sayfasının arama motoru başlık ve açıklamasını tanımlar.
export const metadata: Metadata = {
  title: "Su Analizi ve Kaynak Verimliliği | AKYA Group",
  description:
    "AKYA Group; tesislerde su tüketimini, kullanım noktalarını, kayıp ve verimsizlikleri analiz ederek ölçülebilir su yönetimi çözümleri geliştirir.",
  keywords: [
    "su analizi",
    "su tüketim analizi",
    "kaynak verimliliği",
    "su kaçağı analizi",
    "su geri kazanımı",
    "tesis su yönetimi",
  ],
};

// serviceCards, su analizi hizmetinin dört temel mühendislik alanını içerir.
const serviceCards = [
  {
    title: "Tüketim Profili",
    description: "Tesisin su kullanım davranışını dönem, alan, birim ve proses bazında ölçülebilir hale getiririz.",
    items: [
      "Sayaç, fatura ve izleme verileri",
      "Birim ve proses bazlı su yoğunluğu",
      "Dönemsel tüketim değişimleri",
      "Tüketim eğilimi ve karşılaştırmalar",
    ],
  },
  {
    title: "Kullanım Noktaları",
    description: "Suyun hangi sistemlerde, hangi amaçlarla ve hangi yoğunlukta kullanıldığını ayrıştırarak kritik noktaları belirleriz.",
    items: [
      "Soğutma ve proses kullanımı",
      "Temizlik ve kullanım suyu ayrımı",
      "Kritik tüketim noktaları",
      "Yüksek tüketimli ekipman ve alanlar",
    ],
  },
  {
    title: "Kayıp ve Verimsizlik",
    description: "Anormal tüketim davranışlarını inceleyerek olası kaçakları ve gereksiz kaynak kullanımını görünür hale getiririz.",
    items: [
      "Anormal tüketim analizi",
      "Olası kaçak noktaları",
      "Gereksiz tüketim kaynakları",
      "İşletme alışkanlığı kaynaklı kayıplar",
    ],
  },
  {
    title: "İyileştirme Fırsatları",
    description: "Tasarruf, geri kazanım ve yeniden kullanım potansiyelini operasyonel gereksinimlerle birlikte değerlendiririz.",
    items: [
      "Su tasarrufu potansiyeli",
      "Geri kazanım senaryoları",
      "Yeniden kullanım fırsatları",
      "Operasyonel iyileştirme önerileri",
    ],
  },
];

// processSteps, veri toplamadan uygulanabilir raporlamaya uzanan analiz sürecini açıklar.
const processSteps = [
  {
    number: "01",
    title: "Veri Toplama",
    text: "Su faturaları, sayaç verileri, tesis planları, proses bilgileri ve ekipman kullanım verileri toplanır.",
  },
  {
    number: "02",
    title: "Kullanım Haritası",
    text: "Su tüketiminin hangi alanlarda, sistemlerde ve amaçlarla gerçekleştiği ölçülebilir bir yapıda haritalanır.",
  },
  {
    number: "03",
    title: "Performans Analizi",
    text: "Tüketim yoğunluğu, dönemsel değişimler, anormal davranışlar ve olası verimsizlik göstergeleri değerlendirilir.",
  },
  {
    number: "04",
    title: "Fırsat Analizi",
    text: "Tasarruf, geri kazanım, işletme optimizasyonu ve ilave izleme ihtiyaçları etkilerine göre önceliklendirilir.",
  },
  {
    number: "05",
    title: "Raporlama",
    text: "Yönetici özeti, teknik bulgular ve uygulanabilir aksiyon önerileri içeren karar destek raporu hazırlanır.",
  },
];

// targetGroups, su analizi hizmetinin uygun olduğu temel tesis ve kurum türlerini listeler.
const targetGroups = [
  "Veri merkezleri ve soğutma yoğun tesisler",
  "Endüstriyel üretim tesisleri",
  "Kurumsal kampüsler",
  "Akıllı binalar",
  "Sürdürülebilirlik raporlaması yapan kurumlar",
  "Su tüketimi yüksek işletmeler",
];

// reportOutputs, analiz sonunda teslim edilen teknik ve yönetimsel çıktıları listeler.
const reportOutputs = [
  "Tüketim profili ve kullanım dağılımı",
  "Kritik tüketim noktaları",
  "Anormal tüketim ve verimsizlik bulguları",
  "Tasarruf ve geri kazanım fırsatları",
  "Önceliklendirilmiş aksiyon listesi",
  "Yönetici özeti",
];

// reasons, AKYA'nın su analizindeki mühendislik ve operasyon odaklı farklarını tanımlar.
const reasons = [
  {
    title: "Bütünleşik Mühendislik Yaklaşımı",
    text: "Su tüketimini tesis mühendisliği, enerji kullanımı, soğutma sistemleri ve sürdürülebilirlik hedefleriyle birlikte değerlendiririz.",
  },
  {
    title: "Operasyonel Karar Desteği",
    text: "Veriyi yalnızca raporlamakla kalmaz, işletme ekiplerinin önceliklendirebileceği uygulanabilir kararlara dönüştürürüz.",
  },
  {
    title: "Kritik Tesis Deneyimi",
    text: "Veri merkezi, kritik tesis ve endüstriyel altyapı perspektifiyle su kullanımının süreklilik ve performans etkisini yorumlarız.",
  },
  {
    title: "İzlenebilir Optimizasyon",
    text: "Analiz çıktısını sayaç, izleme, raporlama ve sürekli optimizasyon süreçlerine entegre edilebilecek şekilde hazırlarız.",
  },
];

// WaterAnalysisPage, briefte tanımlanan Su Analizi ve Kaynak Verimliliği sayfasını oluşturur.
export default function WaterAnalysisPage() {
  return (
    <main className="bg-background">
      <Navbar />

      <section className="relative flex min-h-[620px] items-end overflow-hidden px-margin-mobile pb-14 pt-28 md:min-h-[760px] md:px-margin-desktop md:pb-28 md:pt-36">
        <img
          alt="Tesis su tüketimini debimetre ve dijital verilerle analiz eden mühendis"
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="/hero-water-analysis.png"
        />
        <div className="absolute inset-0 bg-deep-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-deep-navy/35" />
        <div className="relative z-10 mx-auto w-full max-w-container-max text-surface-container-lowest">
          <p className="mb-4 font-label-caps text-label-caps uppercase text-metallic-gold">Sürdürülebilirlik ve Analiz</p>
          <h1 className="max-w-5xl font-display-lg text-[38px] font-extrabold uppercase leading-[1.08] md:text-display-lg">
            Su Analizi ve Kaynak Verimliliği
          </h1>
          <p className="mt-6 max-w-3xl font-body-lg text-body-lg text-primary-fixed-dim">
            Tesislerinizde su tüketimini, kullanım alışkanlıklarını ve verimlilik fırsatlarını analiz ederek sürdürülebilir ve ölçülebilir su yönetimi çözümleri geliştiriyoruz.
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
            <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Ölçülebilir Su Yönetimi</p>
            <h2 className="font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
              Su tüketimini görünür hale getiren mühendislik yaklaşımı
            </h2>
          </div>
          <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
            <p>
              Su yönetimi yalnızca toplam tüketim miktarını takip etmekten ibaret değildir. Kullanım noktaları, proses ihtiyaçları, soğutma sistemleri, geri kazanım potansiyeli ve işletme alışkanlıkları birlikte değerlendirilmelidir.
            </p>
            <p>
              AKYA Group, ölçülebilir verileri mühendislik yorumuyla birleştirerek tesislerin su tüketim profilini çıkarır, kritik kullanım alanlarını belirler ve kaynak verimliliğini artıracak aksiyonları ortaya koyar.
            </p>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="bg-slate-gray px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Hizmet Kapsamı</p>
          <h2 className="mb-12 max-w-4xl font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
            Tüketim profilinden geri kazanım fırsatlarına bütünleşik analiz
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
            Tüketim verisini uygulanabilir kaynak verimliliğine dönüştürüyoruz
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
              Su kullanımını ölçmek ve iyileştirmek isteyen tesisler
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
              Kaynak yönetimini destekleyen net çıktılar
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
            Su yönetimini tesis mühendisliğiyle birleştiriyoruz
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

      <SubSolutionGrid parentSlug="su-analizi" />

      <section className="bg-deep-navy px-margin-mobile py-24 text-center text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Kaynak Verimliliği</p>
          <h2 className="font-headline-lg text-4xl uppercase md:text-headline-lg">
            Su tüketiminizi ölçün, kaynak verimliliğinizi artırın
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body-lg text-body-lg text-primary-fixed-dim">
            Tesisinizin su kullanım profilini analiz edin, verimlilik fırsatlarını belirleyin ve sürdürülebilir operasyon hedeflerinize ölçülebilir adımlarla ilerleyin.
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
