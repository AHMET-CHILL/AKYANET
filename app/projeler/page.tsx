import type { Metadata } from "next";
import Link from "next/link";
import InnerPageShell from "@/components/InnerPageShell";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByStatus } from "@/lib/project-data";

export const metadata: Metadata = {
  title: "Projeler | AKYA Group",
  description: "AKYA Group tarafından tamamlanan ve devam eden veri merkezi, kritik tesis ve dijital altyapı projeleri.",
};

// ProjectsPage, tamamlanan ve devam eden referans çalışmalarını kategori bazında sunar.
export default function ProjectsPage() {
  const completedProjects = getProjectsByStatus("tamamlanan");
  const ongoingProjects = getProjectsByStatus("devam-eden");

  return (
    <InnerPageShell
      eyebrow="Projeler"
      title="Projeler"
      description="Kritik tesisler ve dijital altyapılar için gerçekleştirdiğimiz referans çalışmalar."
      image="/hero-data-center.jpg"
    >
      <section className="bg-white px-margin-mobile py-10 md:px-margin-desktop">
        <div className="mx-auto flex max-w-container-max flex-wrap gap-3">
          <a className="bg-deep-navy px-6 py-3 font-label-caps text-xs uppercase text-white" href="#tum-projeler">Tümü</a>
          <a className="border border-outline-variant px-6 py-3 font-label-caps text-xs uppercase text-deep-navy hover:border-metallic-gold" href="#tamamlanan">Tamamlanan</a>
          <a className="border border-outline-variant px-6 py-3 font-label-caps text-xs uppercase text-deep-navy hover:border-metallic-gold" href="#devam-eden">Devam Eden</a>
        </div>
      </section>

      <div id="tum-projeler">
        <ProjectGroup
          description="Teslim edilmiş veri merkezi ve kritik altyapı projelerimiz."
          href="/projeler/tamamlanan"
          id="tamamlanan"
          projects={completedProjects}
          title="Tamamlanan Projeler"
        />
        <ProjectGroup
          alternate
          description="Altyapı kapasitesi, süreklilik ve operasyonel verimlilik odaklı devam eden çalışmalarımız."
          href="/projeler/devam-eden"
          id="devam-eden"
          projects={ongoingProjects}
          title="Devam Eden Projeler"
        />
      </div>
    </InnerPageShell>
  );
}

// ProjectGroup, ana projeler sayfasında kategori başlığı ve kartlarını ortak düzende gösterir.
function ProjectGroup({
  title,
  description,
  href,
  id,
  projects,
  alternate = false,
}: {
  title: string;
  description: string;
  href: string;
  id: string;
  projects: ReturnType<typeof getProjectsByStatus>;
  alternate?: boolean;
}) {
  return (
    <section className={`${alternate ? "bg-slate-gray" : "bg-white"} px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding`} id={id}>
      <div className="mx-auto max-w-container-max">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Referans Çalışmalar</p>
            <h2 className="mt-4 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">{title}</h2>
            <p className="mt-4 max-w-2xl text-on-surface-variant">{description}</p>
          </div>
          <Link className="font-label-caps text-label-caps uppercase text-metallic-gold" href={href}>Tümünü Gör</Link>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </div>
    </section>
  );
}
