import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Project } from "@/lib/project-data";
import { projectStatusLabels } from "@/lib/project-data";

// ProjectDetailLayout, bütün proje detaylarında ortak hero, kapsam, yaklaşım ve CTA yapısını sağlar.
export default function ProjectDetailLayout({ project }: { project: Project }) {
  const isTurkTelekom = project.logo === "/reference-turk-telekom.svg";

  return (
    <main className="bg-background">
      <Navbar />
      <section className="relative flex min-h-[650px] items-end overflow-hidden bg-deep-navy px-margin-mobile pb-16 pt-32 text-white md:px-margin-desktop md:pb-24 md:pt-44">
        <div className="absolute inset-0 bg-white/[0.02]" />
        <img
          alt=""
          aria-hidden="true"
          className={`absolute object-contain object-right opacity-15 md:top-1/2 md:-translate-y-1/2 md:opacity-30 ${
            isTurkTelekom
              ? "bottom-[8%] right-[-5%] max-h-[58%] w-[86%] md:bottom-auto md:right-[2%] md:max-h-[58%] md:w-[54%]"
              : "bottom-[10%] right-[-8%] max-h-[50%] w-[72%] md:bottom-auto md:right-[3%] md:max-h-[48%] md:w-[45%]"
          }`}
          src={project.logo}
        />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-deep-navy via-deep-navy/90 to-transparent md:w-[72%]" />
        <div className="relative z-10 mx-auto w-full max-w-container-max">
          <nav aria-label="Sayfa yolu" className="mb-10 flex flex-wrap gap-2 text-sm text-primary-fixed-dim">
            <Link href="/">Ana Sayfa</Link><span>/</span>
            <Link href="/projeler">Projeler</Link><span>/</span>
            <Link href={`/projeler/${project.status}`}>{projectStatusLabels[project.status]}</Link><span>/</span>
            <span className="text-white">{project.title}</span>
          </nav>
          <p className="font-label-caps text-label-caps uppercase text-metallic-gold">{project.statusLabel}</p>
          <h1 className="mt-5 max-w-5xl font-display-lg text-[40px] font-extrabold uppercase leading-[1.08] md:text-display-lg">{project.heroTitle}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-primary-fixed-dim">{project.summary}</p>
        </div>
      </section>

      <section className="bg-white px-margin-mobile py-16 md:px-margin-desktop">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-px bg-outline-variant md:grid-cols-3">
          {project.overview.map((item) => (
            <div className="bg-white p-7" key={item.label}>
              <p className="font-label-caps text-xs uppercase text-metallic-gold">{item.label}</p>
              <p className="mt-3 font-semibold text-deep-navy">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Proje Hakkında</p>
            <h2 className="mt-4 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Kritik altyapıya kurumsal teslimat yaklaşımı</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-on-surface-variant">
            <p>{project.description}</p>
            <p>Güvenlik ve gizlilik gereklilikleri doğrultusunda kapasite, marka, model ve hassas altyapı detayları kamuya açık içerikte paylaşılmamaktadır.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-gray px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Proje Kapsamı</p>
          <h2 className="mb-12 mt-4 max-w-4xl font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Süreklilik ve güvenilirlik odaklı çalışma alanları</h2>
          <div className="grid grid-cols-1 gap-px bg-outline-variant md:grid-cols-2 lg:grid-cols-3">
            {project.scope.map((item, index) => (
              <article className="min-h-40 bg-white p-7" key={item}>
                <span className="font-label-caps text-xs text-metallic-gold">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-5 font-semibold leading-7 text-deep-navy">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep-navy px-margin-mobile py-24 text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <p className="font-label-caps text-label-caps uppercase text-metallic-gold">AKYA Yaklaşımı</p>
            <h2 className="mt-4 font-headline-lg text-4xl uppercase md:text-headline-lg">Analizden raporlamaya kontrollü ilerleme</h2>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.approach.map((item, index) => (
                <div className="border-l border-white/20 p-5" key={item}>
                  <span className="font-label-caps text-xs text-metallic-gold">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-3 font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Sonuç ve Değer</p>
            <h2 className="mt-4 font-headline-lg text-4xl uppercase md:text-headline-lg">Operasyon için kalıcı değer</h2>
            <ul className="mt-10 space-y-4">
              {project.values.map((item) => (
                <li className="border-b border-white/15 pb-4 text-lg text-primary-fixed-dim" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-margin-mobile py-24 text-center md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-4xl">
          <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Benzer Bir Proje İçin</p>
          <h2 className="mt-4 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Kritik altyapı ihtiyacınızı birlikte değerlendirelim</h2>
          <Link className="mt-9 inline-flex bg-deep-navy px-9 py-4 font-label-caps text-label-caps font-bold uppercase text-white hover:bg-metallic-gold hover:text-deep-navy" href="/iletisim">
            Bizimle İletişime Geçin
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
