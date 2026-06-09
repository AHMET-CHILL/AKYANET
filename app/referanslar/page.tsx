import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { references } from "@/lib/reference-data";

export const metadata: Metadata = {
  title: "Referanslar | AKYA Group",
  description:
    "AKYA Group'un veri merkezi, kritik tesis ve dijital altyapı alanlarında birlikte değer ürettiği referans kurumlar.",
  alternates: {
    canonical: "/referanslar",
  },
};

// ReferencesPage, referans kurumları ve ilgili proje çalışmalarını kurumsal bir sayfada sunar.
export default function ReferencesPage() {
  return (
    <main className="bg-background">
      <Navbar />

      <section className="relative overflow-hidden bg-deep-navy px-margin-mobile pb-20 pt-36 text-white md:px-margin-desktop md:pb-28 md:pt-48">
        <div className="absolute inset-0 opacity-20">
          <img alt="" className="h-full w-full object-cover" src="/hero-data-center.jpg" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/90 to-deep-navy/55" />
        <div className="relative mx-auto max-w-container-max">
          <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Referanslarımız</p>
          <h1 className="mt-5 max-w-5xl font-display-lg text-[42px] font-extrabold uppercase leading-[1.08] md:text-display-lg">
            Birlikte değer ürettiğimiz kurumlar
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-primary-fixed-dim">
            Kritik tesisler ve dijital altyapılar için geliştirdiğimiz mühendislik yaklaşımını kamu kurumlarının operasyonel süreklilik hedefleriyle buluşturuyoruz.
          </p>
        </div>
      </section>

      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {references.map((reference) => (
              <article
                className="group flex min-h-[520px] scroll-mt-32 flex-col border border-outline-variant bg-white"
                id={reference.slug}
                key={reference.name}
              >
                <div className="flex h-64 items-center justify-center bg-deep-navy p-10">
                  <img
                    alt={`${reference.name} logosu`}
                    className={`object-contain transition-transform duration-500 group-hover:scale-105 ${
                      reference.logo === "/reference-turk-telekom.svg"
                        ? "h-auto w-[94%] max-w-[300px]"
                        : "max-h-28 max-w-full"
                    }`}
                    src={reference.logo}
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="font-label-caps text-xs uppercase text-metallic-gold">{reference.statusLabel}</p>
                  <h2 className="mt-4 font-headline-sm text-2xl uppercase text-deep-navy">{reference.shortName}</h2>
                  <p className="mt-5 text-sm leading-7 text-on-surface-variant">{reference.description}</p>
                  <div className="mt-auto pt-8">
                    <p className="mb-4 text-sm font-semibold text-deep-navy">{reference.projectLabel}</p>
                    <Link
                      className="inline-flex border-b-2 border-metallic-gold pb-1 font-label-caps text-label-caps uppercase text-deep-navy transition-colors hover:text-metallic-gold"
                      href={reference.projectHref}
                    >
                      Projeyi İncele
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep-navy px-margin-mobile py-24 text-center text-white md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-4xl">
          <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Yeni Bir İş Birliği</p>
          <h2 className="mt-4 font-headline-lg text-4xl uppercase md:text-headline-lg">
            Kritik altyapı projenizi birlikte değerlendirelim
          </h2>
          <Link
            className="mt-9 inline-flex bg-metallic-gold px-9 py-4 font-label-caps text-label-caps font-bold uppercase text-deep-navy hover:bg-white"
            href="/iletisim"
          >
            Bizimle İletişime Geçin
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
