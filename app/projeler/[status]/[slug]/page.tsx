import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailLayout from "@/components/ProjectDetailLayout";
import { getProject, projects } from "@/lib/project-data";

type PageProps = {
  params: Promise<{ status: string; slug: string }>;
};

// generateStaticParams, bütün proje detay sayfalarını statik olarak üretir.
export function generateStaticParams() {
  return projects.map((project) => ({ status: project.status, slug: project.slug }));
}

// generateMetadata, her proje için canonical ve sosyal paylaşım bilgilerini oluşturur.
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { status, slug } = await params;
  const project = getProject(status, slug);
  if (!project) return {};

  const canonical = `/projeler/${project.status}/${project.slug}`;
  return {
    title: `${project.title} | AKYA Group`,
    description: project.seoDescription,
    alternates: { canonical },
    openGraph: {
      title: project.heroTitle,
      description: project.seoDescription,
      url: canonical,
      images: [{ url: project.logo, alt: `${project.title} kurum logosu` }],
    },
  };
}

// ProjectDetailPage, URL parametrelerine karşılık gelen proje detayını gösterir.
export default async function ProjectDetailPage({ params }: PageProps) {
  const { status, slug } = await params;
  const project = getProject(status, slug);
  if (!project) notFound();

  return <ProjectDetailLayout project={project} />;
}
