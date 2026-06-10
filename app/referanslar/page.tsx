import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ReferenceProjectCard from "@/components/ReferenceProjectCard";
import { getReferenceProjectsByStatus } from "@/lib/reference-project-data";

export const metadata: Metadata = {
  title: "Referanslar | AKYA Group",
  description:
    "AKYA Group'un tamamlanan ve devam eden veri merkezi, kritik tesis ve dijital altyapı referans projeleri.",
  alternates: { canonical: "/referanslar" },
};

// ReferencesPage, referans projelerini tamamlanan ve devam eden çalışmalar olarak gruplar.
export default function ReferencesPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <section className="relative overflow-hidden bg-deep-navy px-margin-mobile pb-20 pt-36 text-white md:px-margin-desktop md:pb-28 md:pt-48">
        <img alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" src="/hero-data-center.jpg" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/90 to-deep-navy/55" />
        <div className="relative mx-auto max-w-container-max">
          <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Referanslarımız</p>
          <h1 className="mt-5 max-w-5xl font-display-lg text-[42px] font-extrabold uppercase leading-[1.08] md:text-display-lg">
            Birlikte değer ürettiğimiz projeler
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-primary-fixed-dim">
            Veri merkezi, erişim güvenliği, izleme, enerji, soğutma ve yazılım entegrasyonu alanlarında tamamlanan ve devam eden çalışmalarımız.
          </p>
        </div>
      </section>

      <ReferenceGroup
        description="Teslim edilmiş veri merkezi, erişim kontrolü ve kritik altyapı çalışmalarımız."
        href="/referanslar/tamamlanan"
        projects={getReferenceProjectsByStatus("tamamlanan")}
        title="Tamamlanan Projeler"
      />
      <ReferenceGroup
        alternate
        description="Operasyonel görünürlük, kapasite ve altyapı sürekliliği odağında devam eden çalışmalarımız."
        href="/referanslar/devam-eden"
        projects={getReferenceProjectsByStatus("devam-eden")}
        title="Devam Eden Projeler"
      />
      <Footer />
    </main>
  );
}

// ReferenceGroup, referans projelerini kategori başlığı ve kart gridinde tekrar kullanılabilir biçimde gösterir.
function ReferenceGroup({
  title,
  description,
  href,
  projects,
  alternate = false,
}: {
  title: string;
  description: string;
  href: string;
  projects: ReturnType<typeof getReferenceProjectsByStatus>;
  alternate?: boolean;
}) {
  return (
    <section className={`${alternate ? "bg-slate-gray" : "bg-white"} px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding`}>
      <div className="mx-auto max-w-container-max">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Referans Projeler</p>
            <h2 className="mt-4 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">{title}</h2>
            <p className="mt-4 max-w-2xl text-on-surface-variant">{description}</p>
          </div>
          <Link className="font-label-caps text-label-caps uppercase text-metallic-gold" href={href}>Tümünü Gör</Link>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => <ReferenceProjectCard key={project.slug} project={project} />)}
        </div>
      </div>
    </section>
  );
}
