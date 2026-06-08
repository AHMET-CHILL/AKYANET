import InnerPageShell from "@/components/InnerPageShell";

// AboutPage, Akya'nın konumlanmasını ve çalışma prensiplerini anlatır.
export default function AboutPage() {
  return (
    <InnerPageShell
      eyebrow="Hakkımızda"
      title="Akya Dijital Dönüşüm"
      description="Kritik tesisler, dijital altyapılar ve sürdürülebilir operasyonlar için mühendislik bakışıyla teknoloji çözümleri geliştiriyoruz."
      image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85"
    >
      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 lg:grid-cols-3">
          {["Analiz", "Tasarım", "Uygulama"].map((step) => (
            <article className="border-t-4 border-metallic-gold bg-slate-gray p-8" key={step}>
              <h2 className="mb-4 font-headline-sm text-headline-sm uppercase text-deep-navy">{step}</h2>
              <p className="text-on-surface-variant">İş hedeflerini, saha koşullarını ve sürdürülebilir işletme ihtiyaçlarını aynı masada değerlendiririz.</p>
            </article>
          ))}
        </div>
      </section>
    </InnerPageShell>
  );
}
