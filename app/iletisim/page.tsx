import ContactForm from "@/components/ContactForm";
import InnerPageShell from "@/components/InnerPageShell";

const officeAddress = "Çiğdem, 1552. Sk. No:1 D:5, 4. Kat, 06530 Çankaya/Ankara";
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;
const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed`;

// ContactPage, iletişim formunu bağımsız sayfa olarak sunar.
export default function ContactPage() {
  return (
    <InnerPageShell
      eyebrow="İletişim"
      title="Projenizi birlikte değerlendirelim"
      description="Dijital altyapı, kritik tesis mühendisliği veya sürdürülebilirlik ihtiyaçlarınız için Akya ekibiyle iletişime geçin."
      image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85"
    >
      <section className="bg-white px-margin-mobile py-24 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-container-max">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
            <div className="lg:w-1/3">
              <h2 className="mb-6 font-headline-lg text-4xl uppercase text-deep-navy md:text-headline-lg">Bize ulaşın</h2>
              <p className="mb-10 font-body-lg text-body-lg text-on-surface-variant">
                Talebinizi iletin; uygun ekip ve çalışma modeliyle size dönüş yapalım.
              </p>

              <div className="space-y-7">
                <div className="flex items-start gap-4">
                  <LocationIcon />
                  <div>
                    <p className="mb-2 font-label-caps text-sm uppercase text-metallic-gold">Lokasyon</p>
                    <a
                      className="block leading-7 text-on-surface transition-colors hover:text-metallic-gold"
                      href={mapsUrl}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {officeAddress}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MailIcon />
                  <a className="text-on-surface transition-colors hover:text-metallic-gold" href="mailto:info@akyadijital.com">
                    info@akyadijital.com
                  </a>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>

          {/* Google Maps iframe, iletişim formunun altında Ankara ofisini işaretli olarak gösterir. */}
          <div className="mt-12 overflow-hidden border border-outline-variant bg-slate-gray md:mt-16">
            <iframe
              allowFullScreen
              className="h-[340px] w-full border-0 md:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={mapsEmbedUrl}
              title="AKYA Group Çankaya ofis konumu"
            />
          </div>
        </div>
      </section>
    </InnerPageShell>
  );
}

// LocationIcon, iletişim sayfasında harici ikon fontuna ihtiyaç duymadan konum simgesini çizer.
function LocationIcon() {
  return (
    <svg aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-metallic-gold" fill="none" viewBox="0 0 24 24">
      <path
        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

// MailIcon, e-posta satırını tüm cihazlarda tutarlı bir zarf simgesiyle gösterir.
function MailIcon() {
  return (
    <svg aria-hidden="true" className="h-6 w-6 shrink-0 text-metallic-gold" fill="none" viewBox="0 0 24 24">
      <path d="M3 6.5h18v11H3v-11Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="m4 8 8 6 8-6" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}
