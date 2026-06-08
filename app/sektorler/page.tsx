import InnerPageShell from "@/components/InnerPageShell";
import { sectorPages } from "@/lib/sector-data";

// SectorsPage, Akya'nın hizmet verdiği sektörleri kart yapısıyla listeler.
export default function SectorsPage() {
  return (
    <InnerPageShell
      eyebrow="Sektörler"
      title="Kritik operasyonlar için sektör odaklı dijital çözümler"
      description="Her sektörün risk, regülasyon ve operasyon dinamiklerini dikkate alarak uygulanabilir teknoloji çözümleri tasarlarız."
      image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85"
    >
      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sectorPages.map((sector) => (
            <article className="group flex min-h-[280px] flex-col border-l-4 border-metallic-gold bg-slate-gray p-8 transition-transform duration-300 hover:-translate-y-1" key={sector.slug}>
              <p className="mb-4 font-label-caps text-[12px] uppercase text-metallic-gold">{sector.group}</p>
              <h2 className="font-headline-sm text-headline-sm uppercase text-deep-navy">{sector.title}</h2>
              <p className="mt-5 leading-7 text-on-surface-variant">{sector.description}</p>
              <a
                className="mt-auto pt-8 font-label-caps text-label-caps font-bold uppercase text-deep-navy transition-colors hover:text-metallic-gold"
                href={`/sektorler/${sector.slug}`}
              >
                Sektörü İncele
              </a>
            </article>
          ))}
        </div>
      </section>
    </InnerPageShell>
  );
}
