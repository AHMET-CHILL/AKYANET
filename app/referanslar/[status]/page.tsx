import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InnerPageShell from "@/components/InnerPageShell";
import ReferenceProjectCard from "@/components/ReferenceProjectCard";
import {
  getReferenceProjectsByStatus,
  referenceStatusLabels,
  type ReferenceProjectStatus,
} from "@/lib/reference-project-data";

type PageProps = { params: Promise<{ status: string }> };
const validStatuses: ReferenceProjectStatus[] = ["tamamlanan", "devam-eden"];

export function generateStaticParams() {
  return validStatuses.map((status) => ({ status }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { status } = await params;
  if (!isReferenceStatus(status)) return {};
  return {
    title: `${referenceStatusLabels[status]} | Referanslar | AKYA Group`,
    description:
      status === "tamamlanan"
        ? "AKYA Group tarafından tamamlanan veri merkezi ve kritik altyapı referans projeleri."
        : "AKYA Group tarafından yürütülen devam eden veri merkezi ve kritik altyapı referans projeleri.",
    alternates: { canonical: `/referanslar/${status}` },
  };
}

// ReferenceStatusPage, seçilen durumdaki referans proje kartlarını listeler.
export default async function ReferenceStatusPage({ params }: PageProps) {
  const { status } = await params;
  if (!isReferenceStatus(status)) notFound();

  return (
    <InnerPageShell
      eyebrow="Referanslar"
      title={referenceStatusLabels[status]}
      description={
        status === "tamamlanan"
          ? "Teslim edilmiş veri merkezi ve kritik altyapı çalışmalarımız."
          : "Operasyonel süreklilik ve altyapı gelişimi odağında devam eden çalışmalarımız."
      }
      image="/hero-data-center.jpg"
    >
      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max gap-8 lg:grid-cols-2">
          {getReferenceProjectsByStatus(status).map((project) => (
            <ReferenceProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </InnerPageShell>
  );
}

function isReferenceStatus(status: string): status is ReferenceProjectStatus {
  return validStatuses.includes(status as ReferenceProjectStatus);
}
