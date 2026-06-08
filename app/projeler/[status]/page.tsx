import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InnerPageShell from "@/components/InnerPageShell";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByStatus, projectStatusLabels, type ProjectStatus } from "@/lib/project-data";

type PageProps = {
  params: Promise<{ status: string }>;
};

const validStatuses: ProjectStatus[] = ["tamamlanan", "devam-eden"];

// generateStaticParams, iki proje kategori sayfasını build sırasında üretir.
export function generateStaticParams() {
  return validStatuses.map((status) => ({ status }));
}

// generateMetadata, proje kategorisine göre başlık ve açıklama üretir.
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { status } = await params;
  if (!isProjectStatus(status)) return {};

  const isCompleted = status === "tamamlanan";
  return {
    title: `${projectStatusLabels[status]} | AKYA Group`,
    description: isCompleted
      ? "Teslim edilmiş veri merkezi ve kritik altyapı projelerimiz."
      : "Altyapı kapasitesi, süreklilik ve operasyonel verimlilik odaklı devam eden projelerimiz.",
  };
}

// ProjectStatusPage, tamamlanan veya devam eden proje kartlarını tek kategoride listeler.
export default async function ProjectStatusPage({ params }: PageProps) {
  const { status } = await params;
  if (!isProjectStatus(status)) notFound();

  const isCompleted = status === "tamamlanan";
  const projects = getProjectsByStatus(status);

  return (
    <InnerPageShell
      eyebrow="Projeler"
      title={projectStatusLabels[status]}
      description={
        isCompleted
          ? "Teslim edilmiş veri merkezi ve kritik altyapı projelerimiz."
          : "Altyapı kapasitesi, süreklilik ve operasyonel verimlilik odaklı devam eden çalışmalarımız."
      }
      image="/hero-data-center.jpg"
    >
      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>
    </InnerPageShell>
  );
}

// isProjectStatus, URL değerinin desteklenen proje kategorilerinden biri olduğunu doğrular.
function isProjectStatus(status: string): status is ProjectStatus {
  return validStatuses.includes(status as ProjectStatus);
}
