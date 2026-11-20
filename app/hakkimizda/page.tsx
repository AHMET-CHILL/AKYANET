import type { Metadata } from "next";
import Link from "next/link";
import InnerPageShell from "@/components/InnerPageShell";
import OrganizationChart from "@/components/OrganizationChart";

export const metadata: Metadata = {
  title: "Hakkımızda | AKYA Group",
  description:
    "AKYA Group'un kritik tesisler, dijital altyapılar, yazılım, saha uygulama, test ve analiz alanlarındaki mühendislik yaklaşımını keşfedin.",
  alternates: {
    canonical: "/hakkimizda",
  },
};

const capabilities = [
  {
    number: "01",
    title: "Dijital Altyapı",
    description:
      "Veri merkezi, zayıf akım, ağ altyapısı ve izleme sistemlerini bütünleşik bir mühendislik bakışıyla ele alır.",
  },
  {
    number: "02",
    title: "Yazılım ve İzleme",
    description:
      "DCIM, HMI, SCADA, raporlama ve operasyonel görünürlük sağlayan yazılım çözümleri geliştirir.",
  },
  {
    number: "03",
    title: "Test ve Doğrulama",
    description:
      "Termal testler, basınç testleri, POE analizleri ve saha ölçümleriyle sistem performansını doğrular.",
  },
  {
    number: "04",
    title: "Sürdürülebilirlik",
    description:
      "Karbon ve su analizleriyle tesislerin çevresel performansını ölçülebilir hale getirir.",
  },
];

const deliverySteps = ["Analiz", "Tasarım", "Uygulama", "Test", "Entegrasyon", "Optimizasyon"];

// AboutPage, AKYA Group'un kimliğini, çalışma modelini ve organizasyon yapısını kurumsal bir akışta sunar.
export default function AboutPage() {
  return (
    <InnerPageShell
      eyebrow="Hakkımızda"
      title="Kritik tesisler ve dijital altyapılar için mühendislik odaklı teknoloji şirketi"
      description="AKYA Group; veri merkezi, zayıf akım, DCIM yazılımları, test ve analiz hizmetleriyle kritik altyapıların güvenli, izlenebilir ve sürdürülebilir çalışmasına katkı sağlar."
      image="/hero-data-center.jpg"
    >
      <section className="bg-white px-margin-mobile py-20 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="font-label-caps text-label-caps uppercase text-metallic-gold">AKYA Group Hakkında</p>
              <h2 className="mt-4 font-headline-lg text-[34px] uppercase leading-tight text-deep-navy md:text-headline-lg">
                Mühendislikten operasyona bütüncül yaklaşım
              </h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-on-surface-variant md:text-lg">
              <p>
                AKYA Group, dijital altyapılar ve kritik tesisler için mühendislik, yazılım, saha uygulama, test ve analiz
                hizmetleri sunan teknoloji odaklı bir şirkettir. Veri merkezi altyapılarından zayıf akım sistemlerine,
                DCIM yazılımlarından termal ve basınç testlerine kadar geniş bir çözüm alanında çalışır.
              </p>
              <p>
                Şirket; yalnızca sistem kurulumuna değil, kurulan altyapıların ölçülebilir, izlenebilir ve sürdürülebilir
                şekilde yönetilmesine odaklanır. Tasarım, uygulama, devreye alma, raporlama ve operasyon süreçleri
                bütüncül bir mühendislik modeliyle ele alınır.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 border-l border-t border-outline-variant sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <article className="min-h-[280px] border-b border-r border-outline-variant p-7" key={capability.title}>
                <span className="font-label-caps text-xs text-metallic-gold">{capability.number}</span>
                <h3 className="mt-12 font-headline-sm text-2xl uppercase text-deep-navy">{capability.title}</h3>
                <p className="mt-5 text-sm leading-7 text-on-surface-variant">{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep-navy px-margin-mobile py-20 text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <div>
              <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Çalışma Yaklaşımımız</p>
              <h2 className="mt-4 font-headline-lg text-[34px] uppercase leading-tight md:text-headline-lg">
                Aynı hedefe bağlı entegre süreçler
              </h2>
            </div>
            <p className="text-base leading-8 text-primary-fixed-dim md:text-lg">
              AKYA Group&apos;un çalışma yaklaşımı; analiz, tasarım, uygulama, test, entegrasyon ve optimizasyon
              adımlarından oluşur. Her proje, saha gerçekleri ve operasyonel ihtiyaçlar dikkate alınarak değerlendirilir.
              Böylece veri merkezi, zayıf akım, yazılım, kalite ve saha uygulama süreçleri birbirinden kopuk değil, aynı
              hedefe hizmet eden entegre bir sistem olarak yönetilir.
            </p>
          </div>
          <ol className="mt-14 grid grid-cols-2 border-l border-t border-white/15 md:grid-cols-3 lg:grid-cols-6">
            {deliverySteps.map((step, index) => (
              <li className="border-b border-r border-white/15 p-6" key={step}>
                <span className="block text-xs text-metallic-gold">0{index + 1}</span>
                <strong className="mt-8 block font-label-caps text-sm uppercase">{step}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-slate-gray px-margin-mobile py-20 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Organizasyon</p>
          <h2 className="mt-4 font-headline-lg text-[34px] uppercase leading-tight text-deep-navy md:text-headline-lg">
            Organizasyon Yapımız
          </h2>
          <div className="mt-6 max-w-4xl space-y-5 text-base leading-8 text-on-surface-variant md:text-lg">
            <p>
              AKYA Group organizasyon yapısı; teknoloji, operasyon, kalite, finans, satış ve insan kaynakları
              fonksiyonlarının birlikte çalıştığı bir yönetim modeli üzerine kuruludur. Bu yapı; yazılım geliştirme,
              saha uygulama, kalite kontrol, ürün geliştirme ve müşteri süreçlerinin net sorumluluklarla yürütülmesini sağlar.
            </p>
            <p>
              CTO, COO, CQO, CFO, CSO ve CHRO fonksiyonları ayrı sorumluluk alanları olarak konumlandırılır.
            </p>
          </div>
          <p className="mb-4 mt-9 text-sm text-on-surface-variant md:hidden">
            Şemayı incelemek için yatay kaydırın veya görsele dokunun.
          </p>
          <div className="mt-5 md:mt-10">
            <OrganizationChart />
          </div>
        </div>
      </section>

      <section className="bg-white px-margin-mobile py-20 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max gap-px bg-outline-variant lg:grid-cols-2">
          <article className="bg-white p-8 md:p-12">
            <p className="font-label-caps text-xs uppercase text-metallic-gold">Kalite ve Süreç Yönetimi</p>
            <h2 className="mt-5 font-headline-sm text-3xl uppercase leading-tight text-deep-navy">
              Kaliteyi tüm proje yaşam döngüsüne yayıyoruz
            </h2>
            <p className="mt-6 leading-8 text-on-surface-variant">
              AKYA Group, kritik altyapı projelerinde kaliteyi yalnızca final kontrol aşaması olarak değil, tüm proje
              yaşam döngüsüne yayılan bir süreç olarak ele alır. Tasarım kontrolü, ürün giriş kontrolü, saha uygulama
              kontrolü, test ve devreye alma doğrulaması bu yaklaşımın temel adımlarıdır.
            </p>
            <p className="mt-5 leading-8 text-on-surface-variant">
              Uygunsuzlukların önlenmesi, düzeltici faaliyetlerin takibi, standart raporlama ve sürekli iyileştirme bu
              yapının ayrılmaz parçalarıdır.
            </p>
          </article>

          <article className="bg-deep-navy p-8 text-white md:p-12">
            <p className="font-label-caps text-xs uppercase text-metallic-gold">Verimet Markası</p>
            <h2 className="mt-5 font-headline-sm text-3xl uppercase leading-tight">PDU ürün geliştirme kabiliyeti</h2>
            <p className="mt-6 leading-8 text-primary-fixed-dim">
              Verimet, AKYA Group&apos;un PDU ürün geliştirme ve ürün yönetimi odağında konumlanan markasıdır. Akıllı PDU
              çözümleri, ürün tasarımı, üretim, test ve kalite doğrulama süreçleri bu yapı altında ele alınır.
            </p>
            <p className="mt-5 leading-8 text-primary-fixed-dim">
              Marka; veri merkezi ve kritik tesis projelerinde enerji dağıtımı, izleme ve operasyonel görünürlük
              ihtiyaçlarına yönelik ürün geliştirme kabiliyetini temsil eder.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-slate-gray px-margin-mobile py-16 md:px-margin-desktop md:py-20">
        <div className="mx-auto flex max-w-container-max flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Yasal Bilgilendirme</p>
            <h2 className="mt-4 font-headline-sm text-3xl uppercase leading-tight text-deep-navy">
              E-posta Gizlilik ve Yasal Uyarı
            </h2>
            <p className="mt-5 max-w-3xl leading-7 text-on-surface-variant">
              AKYA Dijital Dönüşüm A.Ş. tarafından gönderilen e-postalar ve eklerine ilişkin gizlilik, sorumluluk ve
              fikri mülkiyet koşullarını inceleyebilirsiniz.
            </p>
          </div>
          <Link
            className="border border-deep-navy px-8 py-4 text-center font-label-caps text-sm font-bold uppercase text-deep-navy hover:bg-deep-navy hover:text-white"
            href="/hakkimizda/e-posta-disclaimer"
          >
            Metni Görüntüle
          </Link>
        </div>
      </section>

      <section className="bg-deep-navy px-margin-mobile py-20 text-white md:px-margin-desktop md:py-24">
        <div className="mx-auto flex max-w-container-max flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Birlikte Çalışalım</p>
            <h2 className="mt-4 max-w-3xl font-headline-lg text-[34px] uppercase leading-tight md:text-headline-lg">
              Kritik altyapı projelerinizi birlikte değerlendirelim
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-primary-fixed-dim">
              Veri merkezi, zayıf akım, DCIM, test ve analiz ihtiyaçlarınız için AKYA Group ekibiyle iletişime geçin.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              className="bg-metallic-gold px-8 py-4 text-center font-label-caps text-sm font-bold uppercase text-deep-navy hover:bg-white"
              href="/iletisim"
            >
              İletişime Geç
            </Link>
            <Link
              className="border border-white px-8 py-4 text-center font-label-caps text-sm font-bold uppercase text-white hover:bg-white hover:text-deep-navy"
              href="/cozumler"
            >
              Çözümlerimizi İncele
            </Link>
          </div>
        </div>
      </section>
    </InnerPageShell>
  );
}
