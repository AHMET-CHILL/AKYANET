import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { ReferenceProject } from "@/lib/reference-project-data";
import { referenceStatusLabels } from "@/lib/reference-project-data";

// ReferenceProjectDetail, tüm referans projelerinde ortak hero, iş kapsamı, galeri ve CTA düzenini kurar.
export default function ReferenceProjectDetail({ project }: { project: ReferenceProject }) {
  return (
    <main className="bg-background">
      <Navbar />

      <section className="relative flex min-h-[650px] items-end overflow-hidden bg-deep-navy px-margin-mobile pb-16 pt-32 text-white md:px-margin-desktop md:pb-24 md:pt-44">
        <img alt={project.imageAlt} className="absolute inset-0 h-full w-full object-cover" src={project.image} />
        <div className="absolute inset-0 bg-deep-navy/72" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/80 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-container-max">
          <nav aria-label="Sayfa yolu" className="mb-10 flex flex-wrap gap-2 text-sm text-primary-fixed-dim">
            <Link href="/">Ana Sayfa</Link><span>/</span>
            <Link href="/referanslar">Referanslar</Link><span>/</span>
            <Link href={`/referanslar/${project.status}`}>{referenceStatusLabels[project.status]}</Link><span>/</span>
            <span className="text-white">{project.title}</span>
          </nav>
          <p className="font-label-caps text-label-caps uppercase text-metallic-gold">{project.statusLabel}</p>
          <h1 className="mt-5 max-w-5xl font-display-lg text-[40px] font-extrabold uppercase leading-[1.08] md:text-display-lg">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-primary-fixed-dim">{project.summary}</p>
        </div>
      </section>

      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Proje Özeti</p>
            <h2 className="mt-4 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
              İzlenebilir, güvenli ve sürdürülebilir altyapı yaklaşımı
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-on-surface-variant">{project.description}</p>
            <p className="mt-6 border-l-4 border-metallic-gold pl-6 text-lg font-semibold leading-8 text-deep-navy">
              {project.emphasis}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-gray px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Yapılan İşler</p>
          <h2 className="mb-12 mt-4 max-w-4xl font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
            Proje kapsamında yürütülen çalışmalar
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {project.workItems.map((item, index) => (
              <article className="border-t-4 border-metallic-gold bg-white p-7" key={item.title}>
                <span className="font-label-caps text-xs text-metallic-gold">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-headline-sm text-xl uppercase text-deep-navy">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {project.usesVerimet ? (
        <section className="bg-deep-navy px-margin-mobile py-20 text-white md:px-margin-desktop">
          <div className="mx-auto grid max-w-container-max items-center gap-10 lg:grid-cols-[1fr_0.55fr]">
            <div>
              <p className="font-label-caps text-label-caps uppercase text-metallic-gold">AKYA Group Markası</p>
              <h2 className="mt-4 font-headline-lg text-4xl uppercase md:text-headline-lg">PDU altyapısında Verimet</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-primary-fixed-dim">
                Rack seviyesinde güç dağıtımı ve operasyonel izlenebilirlik için AKYA Group&apos;un Verimet PDU ürünleri kullanılmıştır.
              </p>
            </div>
            <Link className="flex min-h-44 items-center justify-center border border-white/15 bg-white/[0.04] p-8" href="/cozumler/veri-merkezi/verimet">
              <img alt="Verimet" className="w-full max-w-[300px] object-contain" src="/verimet-logo.png" />
            </Link>
          </div>
        </section>
      ) : null}

      {project.gallery.length > 0 ? (
        <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
          <div className="mx-auto max-w-container-max">
            <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Proje Galerisi</p>
            <h2 className="mb-12 mt-4 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">
              Saha uygulamalarından görünüm
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {project.gallery.map((image) => (
                <figure className="overflow-hidden bg-deep-navy" key={image.src}>
                  <img alt={image.alt} className="aspect-video h-full w-full object-cover" src={image.src} />
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-deep-navy px-margin-mobile py-24 text-center text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-4xl">
          <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Benzer Bir Proje İçin</p>
          <h2 className="mt-4 font-headline-lg text-4xl uppercase md:text-headline-lg">Projenizi birlikte değerlendirelim</h2>
          <Link className="mt-9 inline-flex bg-metallic-gold px-9 py-4 font-label-caps text-label-caps font-bold uppercase text-deep-navy hover:bg-white" href="/iletisim">
            Bizimle İletişime Geçin
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
