import InnerPageShell from "@/components/InnerPageShell";
import { solutionMenuGroups } from "@/lib/site-data";

// SolutionsPage, tüm çözüm başlıklarını tek bir giriş sayfasında listeler.
export default function SolutionsPage() {
  return (
    <InnerPageShell
      eyebrow="Çözümler"
      title="Dijital altyapıdan sürdürülebilirlik analizine uçtan uca çözümler"
      description="Akya, kritik tesis mühendisliği, dijital altyapı ve sürdürülebilirlik başlıklarını ölçülebilir proje çıktılarıyla ele alır."
      image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=85"
    >
      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-8 lg:grid-cols-3">
          {solutionMenuGroups.map((group) => (
            <article className="border-l-4 border-metallic-gold bg-slate-gray p-8" key={group.title}>
              <h2 className="mb-6 font-headline-sm text-headline-sm uppercase text-deep-navy">{group.title}</h2>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a className="font-body-md text-on-surface-variant transition-colors hover:text-metallic-gold" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </InnerPageShell>
  );
}
