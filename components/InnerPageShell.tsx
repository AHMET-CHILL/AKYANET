import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { ReactNode } from "react";

// InnerPageShell, alt sayfalarda ortak navbar, hero ve footer düzenini sağlar.
export default function InnerPageShell({
  eyebrow,
  title,
  description,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  children: ReactNode;
}) {
  return (
    <main className="bg-background">
      <Navbar />
      <section className="relative flex min-h-[500px] items-end overflow-hidden px-margin-mobile pb-14 pt-28 md:min-h-[520px] md:px-margin-desktop md:pb-20 md:pt-36">
        <img alt="" className="absolute inset-0 h-full w-full object-cover" src={image} />
        <div className="absolute inset-0 bg-deep-navy/75" />
        <div className="relative z-10 mx-auto w-full max-w-container-max text-surface-container-lowest">
          <p className="mb-4 font-label-caps text-label-caps uppercase text-metallic-gold">{eyebrow}</p>
          <h1 className="max-w-4xl font-display-lg text-[38px] font-extrabold uppercase leading-[1.08] md:text-display-lg">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-primary-fixed-dim md:mt-6 md:font-body-lg md:text-body-lg">{description}</p>
        </div>
      </section>
      {children}
      <Footer />
    </main>
  );
}
