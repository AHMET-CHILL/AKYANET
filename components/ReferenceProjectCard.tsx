import Link from "next/link";
import type { ReferenceProject } from "@/lib/reference-project-data";

// ReferenceProjectCard, referans proje listelerinde görsel, durum ve kısa kapsam bilgisini sunar.
export default function ReferenceProjectCard({ project }: { project: ReferenceProject }) {
  return (
    <article className="group flex h-full flex-col border border-outline-variant bg-white">
      <Link
        className="relative block aspect-video overflow-hidden bg-deep-navy"
        href={`/referanslar/${project.status}/${project.slug}`}
      >
        <img
          alt={project.imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={project.image}
        />
        <div className="absolute inset-0 bg-deep-navy/45 transition-colors group-hover:bg-deep-navy/25" />
        <img
          alt=""
          aria-hidden="true"
          className="absolute bottom-5 left-5 max-h-14 max-w-[42%] object-contain object-left drop-shadow-lg"
          src={project.logo}
        />
      </Link>
      <div className="flex flex-1 flex-col p-7">
        <p className="font-label-caps text-xs uppercase text-metallic-gold">{project.statusLabel}</p>
        <h2 className="mt-4 font-headline-sm text-2xl uppercase text-deep-navy">{project.title}</h2>
        <p className="mt-4 text-sm leading-7 text-on-surface-variant">{project.summary}</p>
        <Link
          className="mt-auto self-start border-b-2 border-metallic-gold pb-1 pt-8 font-label-caps text-label-caps uppercase text-deep-navy transition-colors hover:text-metallic-gold"
          href={`/referanslar/${project.status}/${project.slug}`}
        >
          Detayları İncele
        </Link>
      </div>
    </article>
  );
}
