import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SubSolutionPageLayout from "@/components/SubSolutionPageLayout";
import { getSubSolution, subSolutions } from "@/lib/sub-solutions";

type PageProps = {
  params: Promise<{
    slug: string;
    childSlug: string;
  }>;
};

// generateStaticParams, bütün alt çözüm route'larını build aşamasında hazırlar.
export function generateStaticParams() {
  return subSolutions.map((solution) => ({
    slug: solution.parentSlug,
    childSlug: solution.slug,
  }));
}

// generateMetadata, her alt çözüm için canonical ve sosyal paylaşım meta verilerini üretir.
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, childSlug } = await params;
  const solution = getSubSolution(slug, childSlug);

  if (!solution) {
    return {};
  }

  const canonical = `/cozumler/${solution.parentSlug}/${solution.slug}`;

  return {
    title: solution.seo.title,
    description: solution.seo.description,
    alternates: { canonical },
    openGraph: {
      title: solution.seo.title,
      description: solution.seo.description,
      url: canonical,
      images: [{ url: solution.image.hero, alt: solution.image.alt }],
    },
  };
}

// SubSolutionPage, route parametrelerine göre doğru alt çözüm içeriğini ekrana getirir.
export default async function SubSolutionPage({ params }: PageProps) {
  const { slug, childSlug } = await params;
  const solution = getSubSolution(slug, childSlug);

  if (!solution) {
    notFound();
  }

  return <SubSolutionPageLayout solution={solution} />;
}
