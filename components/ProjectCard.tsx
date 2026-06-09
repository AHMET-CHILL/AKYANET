import Link from "next/link";
import type { Project } from "@/lib/project-data";

// ProjectCard, proje listelerinde tekrar kullanılan görsel, etiket ve CTA düzenini oluşturur.
export default function ProjectCard({ project }: { project: Project }) {
  const isTurkTelekom = project.logo === "/reference-turk-telekom.svg";

  return (
    <article className="group flex h-full flex-col bg-white">
      <Link className="relative block aspect-video overflow-hidden bg-deep-navy" href={`/projeler/${project.status}/${project.slug}`}>
        <div className="absolute inset-0 bg-white/[0.03]" />
        <img
          alt={`${project.title} kurum logosu`}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain opacity-95 transition-transform duration-500 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:scale-105 ${
            isTurkTelekom ? "max-h-[58%] w-[78%]" : "max-h-[42%] w-auto max-w-[68%]"
          }`}
          src={project.logo}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-metallic-gold/60" />
      </Link>
      <div className="flex flex-1 flex-col border border-t-0 border-outline-variant p-7">
        <p className="font-label-caps text-xs uppercase text-metallic-gold">{project.statusLabel}</p>
        <h3 className="mt-4 font-headline-sm text-2xl uppercase text-deep-navy">{project.title}</h3>
        <p className="mt-4 text-sm leading-6 text-on-surface-variant">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span className="bg-slate-gray px-3 py-2 text-xs font-semibold text-deep-navy" key={tag}>{tag}</span>
          ))}
        </div>
        <Link
          className="mt-auto inline-flex self-start border-b-2 border-metallic-gold pt-8 pb-1 font-label-caps text-label-caps uppercase text-deep-navy transition-colors hover:text-metallic-gold"
          href={`/projeler/${project.status}/${project.slug}`}
        >
          Projeyi İncele
        </Link>
      </div>
    </article>
  );
}
