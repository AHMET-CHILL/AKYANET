import ContactForm from "@/components/ContactForm";
import CountUpStat from "@/components/CountUpStat";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ReferenceCarousel from "@/components/ReferenceCarousel";
import { locations, solutionPages, stats } from "@/lib/site-data";
import { technicalInsights } from "@/lib/technical-insights";
import { references } from "@/lib/reference-data";

// workSteps, AKYA'nın analizden optimizasyona uzanan beş adımlı mühendislik sürecini tanımlar.
const workSteps = [
  {
    number: "01",
    title: "Analiz",
    description:
      "Mevcut altyapı, tesis koşulları, operasyonel ihtiyaçlar ve teknik riskler değerlendirilir. Veri merkezi, zayıf akım, enerji, çevresel koşullar ve sürdürülebilirlik başlıklarında başlangıç durumu ortaya konur.",
  },
  {
    number: "02",
    title: "Tasarım",
    description:
      "İhtiyaçlara uygun mühendislik çözümleri geliştirilir. Veri merkezi yerleşimi, zayıf akım sistemleri, DCIM altyapısı, test senaryoları ve analiz yöntemleri proje gereksinimlerine göre planlanır.",
  },
  {
    number: "03",
    title: "Test ve Doğrulama",
    description:
      "Termal testler, basınç testleri, POE analizleri ve saha ölçümleri ile tasarım kararları doğrulanır. Sistemlerin güvenilirliği, performansı ve sürdürülebilirliği ölçülebilir verilerle değerlendirilir.",
  },
  {
    number: "04",
    title: "Entegrasyon",
    description:
      "DCIM yazılımları, izleme sistemleri, raporlama altyapıları ve operasyonel yönetim araçları tesis süreçlerine entegre edilir. Altyapı performansı gerçek zamanlı takip edilebilir hale gelir.",
  },
  {
    number: "05",
    title: "Optimizasyon",
    description:
      "Enerji tüketimi, kapasite kullanımı, çevresel performans ve operasyonel süreklilik düzenli olarak analiz edilir. Sistemlerin daha verimli, güvenli ve sürdürülebilir çalışması sağlanır.",
  },
];

// HomePage, Akya web sitesinin tek sayfalık kurumsal deneyimini bölümler halinde render eder.
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ExpertiseSection />
      <WorkApproachSection />
      <LocationsSection />
      <NewsSection />
      <TrustSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

// HeroSection ilk ekran algısını, ana değer önerisini ve aksiyon bağlantılarını taşır.
function HeroSection() {
  return (
    <section className="relative flex min-h-[680px] w-full items-center justify-center overflow-hidden py-28 md:h-screen md:min-h-[720px] md:py-0">
      <div className="absolute inset-0 z-0">
        {/* Sabit veri merkezi görseli, hareket olmadan yüksek netlikte tam alanı kaplar. */}
        <img
          alt="Mavi ışıklı veri merkezi sunucu koridoru"
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
          src="/hero-data-center.jpg"
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      <div className="relative z-10 px-margin-mobile text-center text-surface-container-lowest md:px-margin-desktop">
        <p className="mb-4 font-label-caps text-label-caps uppercase text-metallic-gold">AKYA GROUP</p>
        <h1 className="mx-auto mb-5 max-w-5xl font-display-lg text-[40px] font-extrabold uppercase leading-[1.04] md:mb-6 md:text-display-lg">
          İşinizi dijital geleceğe taşıyan uçtan uca teknoloji ortağı
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg font-semibold leading-7 text-primary-fixed-dim md:mb-10 md:font-headline-sm md:text-headline-sm">
          Strateji, yazılım, otomasyon, veri ve bulut çözümlerini sade bir teslim modeliyle bir araya getiriyoruz.
        </p>
        <div className="mx-auto flex w-full max-w-sm flex-col items-stretch justify-center gap-3 md:max-w-none md:flex-row md:items-center md:gap-6">
          <a
            className="bg-surface-container-lowest px-8 py-4 font-label-caps text-label-caps font-bold text-deep-navy transition-all hover:bg-metallic-gold"
            href="/iletisim"
          >
            Projenizi Başlatalım
          </a>
          <a
            className="border-2 border-surface-container-lowest px-8 py-4 font-label-caps text-label-caps font-bold text-surface-container-lowest transition-all hover:border-metallic-gold hover:text-metallic-gold"
            href="/#solutions"
          >
            Çözümleri İncele
          </a>
        </div>
      </div>

    </section>
  );
}

// ExpertiseSection, Akya'nın hizmetlerini görsel kartlarla taranabilir hale getirir.
function ExpertiseSection() {
  return (
    <section id="solutions" className="bg-white px-margin-mobile py-16 md:px-margin-desktop md:py-section-padding">
      <div className="mx-auto max-w-container-max">
        <div className="mb-10 md:mb-16">
          <span className="mb-2 block font-label-caps text-label-caps text-metallic-gold">ÇÖZÜMLER</span>
          <h2 className="font-headline-lg text-[32px] uppercase leading-tight text-deep-navy md:text-headline-lg">
            Kritik tesisler ve dijital altyapılar için uçtan uca çözüm alanları
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
          {solutionPages.map((card, index) => (
            <article
              className={`group relative min-h-[360px] overflow-hidden ${index === 0 || index === 1 ? "lg:col-span-6 lg:h-[430px]" : "lg:col-span-4 lg:h-[390px]"}`}
              key={card.title}
            >
              <img alt={`${card.title} çözümünü temsil eden görsel`} className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" src={card.image} />
              <div className="absolute inset-0 bg-deep-navy/45" />
              <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/75 via-deep-navy/55 to-deep-navy/95" />
              <div className="absolute inset-0 flex flex-col p-6 md:p-9">
                <span className="mb-5 max-w-[310px] font-label-caps text-[11px] uppercase tracking-[0.12em] text-metallic-gold md:mb-8 md:text-[12px]">
                  {card.group}
                </span>
                <h3 className="mb-5 font-headline-sm text-[24px] font-bold uppercase leading-tight text-surface-container-lowest md:mb-8 md:text-[28px]">
                  {card.title}
                </h3>
                <p className="mb-6 max-w-xl line-clamp-5 text-[15px] font-semibold leading-7 text-white">
                  {card.summary} {card.intro.split(".")[0]}.
                </p>
                <a className="mt-auto inline-flex items-center pb-1 font-label-caps text-label-caps text-metallic-gold transition-colors hover:text-white" href={`/cozumler/${card.slug}`}>
                  DETAYLARI GÖR
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// StatsSection güven ve ölçek algısını kısa metriklerle destekler.
function StatsSection() {
  return (
    <section className="border-y border-industrial-blue/30 bg-deep-navy py-16 md:py-24">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4 md:gap-12">
          {stats.map((stat) => (
            <div className="flex flex-col gap-2" key={stat.label}>
              <CountUpStat prefix={stat.prefix} suffix={stat.suffix} target={stat.target} />
              <span className="font-label-caps text-label-caps uppercase text-surface-container-lowest opacity-80">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// LocationsSection hizmet alanlarını ve uzaktan çalışma kapasitesini konum kartlarıyla açıklar.
function LocationsSection() {
  return (
    <section id="global" className="bg-slate-gray px-margin-mobile py-16 md:px-margin-desktop md:py-section-padding">
      <div className="mx-auto flex max-w-container-max flex-col items-center gap-16 md:flex-row md:gap-20">
        <div className="md:w-1/2">
          <span className="mb-4 block font-label-caps text-label-caps text-metallic-gold">HİZMET AĞI</span>
          <h2 className="mb-8 font-headline-lg text-[32px] uppercase leading-tight text-deep-navy md:text-headline-lg">Türkiye merkezli, global standartlarda teslimat</h2>
          <p className="mb-10 font-body-lg text-body-lg text-on-surface-variant">
            Akya; saha ekipleri, yazılım takımları ve yönetim kadroları için ölçülebilir, sürdürülebilir ve güvenli dijital sistemler kurar.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {locations.map((location) => (
              <div className="border-l-4 border-metallic-gold bg-white p-4 font-label-caps text-label-caps text-deep-navy shadow-sm" key={location}>
                {location}
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="border border-industrial-blue/20 bg-industrial-blue/10 p-4">
            <img
              alt="Dijital ağları ve veri merkezlerini temsil eden global teknoloji haritası"
              className="h-auto w-full grayscale transition-all duration-700 hover:grayscale-0"
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// WorkApproachSection, AKYA'nın çözümleri hangi kontrollü mühendislik süreciyle sunduğunu açıklar.
function WorkApproachSection() {
  return (
    <section id="calisma-yaklasimimiz" className="bg-slate-gray px-margin-mobile py-16 md:px-margin-desktop md:py-section-padding">
      <div className="mx-auto max-w-container-max">
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <span className="mb-3 block font-label-caps text-label-caps uppercase text-metallic-gold">Süreç</span>
            <h2 className="font-headline-lg text-[32px] uppercase leading-tight text-deep-navy md:text-headline-lg">Çalışma Yaklaşımımız</h2>
          </div>
          <div>
            <h3 className="mb-5 max-w-3xl font-headline-sm text-2xl uppercase leading-tight text-deep-navy md:text-3xl">
              Analizden optimizasyona, ölçülebilir mühendislik süreci
            </h3>
            <p className="max-w-4xl font-body-lg text-body-lg text-on-surface-variant">
              AKYA Group, kritik tesisler ve dijital altyapılar için sunduğu çözümleri yalnızca tasarım veya uygulama aşamasıyla sınırlamaz. Mevcut durum analizi, mühendislik tasarımı, saha testleri, sistem entegrasyonu ve performans optimizasyonu adımlarını bütüncül bir süreç olarak ele alır.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
          {workSteps.map((step) => (
            <article
              className="group border-t-4 border-metallic-gold bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:min-h-[330px] md:p-7"
              key={step.number}
            >
              <span className="font-display-lg text-5xl font-extrabold text-metallic-gold">{step.number}</span>
              <h3 className="mb-5 mt-7 font-headline-sm text-xl uppercase leading-tight text-deep-navy">{step.title}</h3>
              <p className="text-sm leading-7 text-on-surface-variant">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// NewsSection, ilk dört teknik içgörüyü ana sayfada okunabilir önizleme kartlarıyla sunar.
function NewsSection() {
  const featuredInsights = technicalInsights.slice(0, 4);

  return (
    <section id="teknik-icgoruler" className="bg-slate-gray px-margin-mobile py-16 md:px-margin-desktop md:py-section-padding">
      <div className="mx-auto max-w-container-max">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-4xl">
            <span className="mb-2 block font-label-caps text-label-caps text-metallic-gold">İÇGÖRÜLER</span>
            <h2 className="font-headline-lg text-[32px] uppercase leading-tight text-deep-navy md:text-headline-lg">Teknik İçgörüler</h2>
            <p className="mt-5 max-w-3xl text-on-surface-variant">
              Veri merkezi, dijital altyapı, test, analiz ve sürdürülebilirlik alanlarında teknik değerlendirmeler, uygulama notları ve mühendislik yaklaşımları.
            </p>
          </div>
          <a
            className="w-fit border-b-2 border-deep-navy pb-1 font-label-caps text-label-caps font-bold text-deep-navy transition-colors hover:border-metallic-gold hover:text-metallic-gold"
            href="/teknik-icgoruler"
          >
            TÜMÜNÜ GÖR
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuredInsights.map((item) => (
            <article className="group flex flex-col bg-white md:min-h-[470px]" key={item.slug}>
              <div className="h-48 overflow-hidden">
                <img alt={item.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={item.image} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-bold uppercase">
                  <span className="text-metallic-gold">{item.category}</span>
                  <span className="text-on-surface-variant">{item.date}</span>
                </div>
                <h3 className="mb-4 line-clamp-3 font-headline-sm text-[18px] text-deep-navy transition-colors group-hover:text-industrial-blue">{item.title}</h3>
                <p className="mb-6 line-clamp-3 text-sm leading-6 text-on-surface-variant">{item.excerpt}</p>
                <a
                  className="mt-auto font-label-caps text-label-caps font-bold text-deep-navy transition-colors hover:text-metallic-gold"
                  href={`/teknik-icgoruler/${item.slug}`}
                >
                  DETAYLARI OKU
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// TrustSection, kurum logolarını otomatik ve kullanıcı kontrollü kayan bir referans bandında gösterir.
function TrustSection() {
  return (
    <section className="bg-deep-navy px-margin-mobile py-16 text-surface-container-lowest md:px-margin-desktop md:py-24">
      <div className="mx-auto max-w-container-max">
        <div className="mb-10 md:mb-12">
          <p className="mb-3 font-label-caps text-label-caps uppercase text-metallic-gold">Referanslarımız</p>
          <h2 className="font-headline-lg text-[32px] uppercase leading-tight md:text-headline-lg">
            Birlikte değer ürettiğimiz kurumlar
          </h2>
        </div>
        <ReferenceCarousel references={references} />
      </div>
    </section>
  );
}

// ContactSection iletişim içeriğini ve form bileşenini tek bölümde toplar.
function ContactSection() {
  const officeAddress = "1552. Sokak, Çiğdem Mahallesi, No:1, Kat:4, Çankaya, Ankara, Türkiye";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed`;

  return (
    <section id="contact" className="bg-white px-margin-mobile py-16 md:px-margin-desktop md:py-section-padding">
      <div className="mx-auto max-w-container-max">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
          <div className="lg:w-1/3">
            <h2 className="mb-6 font-headline-lg text-[32px] uppercase leading-tight text-deep-navy md:text-headline-lg">Projeniz mi var?</h2>
            <p className="mb-8 font-body-lg text-body-lg text-on-surface-variant">
              Dijital dönüşüm yol haritanızı, mevcut sistemlerinizi veya yeni ürün fikrinizi birlikte değerlendirelim.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <LocationIcon />
                <div>
                  <p className="mb-1 font-label-caps text-sm uppercase text-metallic-gold">Lokasyon</p>
                  <a
                    className="block leading-7 text-on-surface transition-colors hover:text-metallic-gold"
                    href={mapsUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {officeAddress}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MailIcon />
                <a className="text-on-surface transition-colors hover:text-metallic-gold" href="mailto:info@akyadijital.com">
                  info@akyadijital.com
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>

        {/* Google Maps iframe, ofis adresini bölümün altında işaretli olarak gösterir. */}
        <div className="mt-12 overflow-hidden border border-outline-variant bg-slate-gray md:mt-16">
          <iframe
            allowFullScreen
            className="h-[340px] w-full border-0 md:h-[460px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={mapsEmbedUrl}
            title="AKYA Group Çankaya ofis konumu"
          />
        </div>
      </div>
    </section>
  );
}

// LocationIcon, adres satırında harici ikon fontuna ihtiyaç duymadan konum simgesini gösterir.
function LocationIcon() {
  return (
    <svg aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-metallic-gold" fill="none" viewBox="0 0 24 24">
      <path
        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

// MailIcon, e-posta satırını tüm cihazlarda tutarlı bir zarf simgesiyle gösterir.
function MailIcon() {
  return (
    <svg aria-hidden="true" className="h-6 w-6 shrink-0 text-metallic-gold" fill="none" viewBox="0 0 24 24">
      <path d="M3 6.5h18v11H3v-11Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="m4 8 8 6 8-6" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}
