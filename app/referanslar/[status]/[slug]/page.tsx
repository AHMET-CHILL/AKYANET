import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReferenceProjectDetail from "@/components/ReferenceProjectDetail";
import { getReferenceProject, referenceProjects } from "@/lib/reference-project-data";

type PageProps = { params: Promise<{ status: string; slug: string }> };

export function generateStaticParams() {
  return referenceProjects.map((project) => ({ status: project.status, slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { status, slug } = await params;
  const project = getReferenceProject(status, slug);
  if (!project) return {};
  const canonical = `/referanslar/${project.status}/${project.slug}`;

  return {
    title: `${project.title} | Referanslar | AKYA Group`,
    description: project.seoDescription,
    alternates: { canonical },
    openGraph: {
      title: project.title,
      description: project.seoDescription,
      url: canonical,
      images: [{ url: project.image, alt: project.imageAlt }],
    },
  };
}

// ReferenceDetailPage, route ile eşleşen referans projesinin ayrıntılarını gösterir.
export default async function ReferenceDetailPage({ params }: PageProps) {
  const { status, slug } = await params;
  const project = getReferenceProject(status, slug);
  if (!project) notFound();
  return <ReferenceProjectDetail project={project} />;
}
