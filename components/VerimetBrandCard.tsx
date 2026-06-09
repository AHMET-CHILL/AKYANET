import Link from "next/link";
import { VERIMET_LOGO_PATH, verimetContent } from "@/lib/verimet-data";

// VerimetBrandCard, veri merkezi alt çözümlerinden sonra markalı PDU ailesini ayrı bir ürün alanında tanıtır.
export default function VerimetBrandCard() {
  return (
    <section className="bg-slate-gray px-margin-mobile pb-24 md:px-margin-desktop md:pb-section-padding">
      <article className="group mx-auto grid max-w-container-max overflow-hidden border-t-4 border-metallic-gold bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:grid-cols-[1.35fr_0.65fr]">
        <div className="p-7 sm:p-10 lg:p-12">
          <p className="font-label-caps text-label-caps uppercase text-metallic-gold">Markalı PDU Çözümleri</p>
          <h2 className="mt-4 max-w-3xl font-headline-lg text-3xl uppercase text-deep-navy sm:text-4xl md:text-headline-lg">
            {verimetContent.title}
          </h2>
          <p className="mt-6 max-w-3xl leading-7 text-on-surface-variant">{verimetContent.description}</p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {verimetContent.features.slice(0, 4).map((feature) => (
              <li className="flex items-start gap-3 text-sm font-semibold text-deep-navy" key={feature}>
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-metallic-gold" />
                {feature}
              </li>
            ))}
          </ul>

          <Link
            className="mt-9 inline-flex bg-deep-navy px-8 py-4 font-label-caps text-label-caps font-bold uppercase text-white transition-colors hover:bg-metallic-gold hover:text-deep-navy"
            href={verimetContent.href}
          >
            Verimet&apos;i İncele
          </Link>
        </div>

        <div className="flex min-h-64 items-center justify-center bg-deep-navy p-10 sm:p-14">
          <img
            alt="Verimet"
            className="h-auto w-full max-w-[340px] object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            src={VERIMET_LOGO_PATH}
          />
        </div>
      </article>
    </section>
  );
}
