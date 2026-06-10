// footerSolutions, footer içindeki tüm çözüm bağlantılarını mevcut sayfa rotalarıyla eşleştirir.
const footerSolutions = [
  { label: "Veri Merkezi", href: "/cozumler/veri-merkezi" },
  { label: "DCIM Yazılımları", href: "/cozumler/dcim-yazilimlari" },
  { label: "Zayıf Akım Sistemleri", href: "/cozumler/zayif-akim-sistemleri" },
  { label: "Termal Testler", href: "/cozumler/termal-testler" },
  { label: "Basınç Testleri", href: "/cozumler/basinc-testleri" },
  { label: "POE Analizleri", href: "/cozumler/poe-analizleri" },
  { label: "Karbon Analizi", href: "/cozumler/karbon-analizi" },
  { label: "Su Analizi", href: "/cozumler/su-analizi" },
];

// footerCompanyLinks, şirket ve içerik sayfalarına ait kurumsal bağlantıları tanımlar.
const footerCompanyLinks = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Teknik İçgörüler", href: "/teknik-icgoruler" },
  { label: "İletişim", href: "/iletisim" },
];

// FooterLink, footer bağlantılarının renk ve hover davranışını ortaklaştırır.
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      className="font-body-md text-primary-fixed-dim transition-colors duration-200 hover:text-metallic-gold"
      href={href}
    >
      {children}
    </a>
  );
}

// Footer, site haritası, iletişim bilgileri ve yasal bağlantıları kurumsal bir düzende sunar.
export default function Footer() {
  return (
    <footer className="w-full border-t border-industrial-blue/20 bg-deep-navy px-margin-mobile pb-10 pt-24 md:px-margin-desktop md:pt-section-padding">
      <div className="mx-auto grid w-full max-w-container-max grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.35fr_1.15fr_1fr_0.85fr_1.1fr] xl:gap-12">
        <div className="sm:col-span-2 lg:col-span-1">
          <a className="mb-8 block w-fit" href="/" aria-label="AKYA Group ana sayfa">
            <img className="h-16 w-auto" src="/akya-logo.svg" alt="AKYA Group" />
          </a>
          <p className="max-w-xs font-body-md leading-7 text-primary-fixed-dim">
            Kritik tesisler ve dijital altyapılar için ölçülebilir mühendislik çözümleri.
          </p>
        </div>

        <div>
          <h2 className="mb-6 font-label-caps text-label-caps uppercase text-metallic-gold">Çözümler</h2>
          <ul className="space-y-3">
            {footerSolutions.map((solution) => (
              <li key={solution.href}>
                <FooterLink href={solution.href}>{solution.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 font-label-caps text-label-caps uppercase text-metallic-gold">Sektörler</h2>
          <ul className="space-y-3">
            {sectorPages.map((sector) => (
              <li key={sector.slug}>
                <FooterLink href={`/sektorler/${sector.slug}`}>{sector.title}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 font-label-caps text-label-caps uppercase text-metallic-gold">Şirket</h2>
          <ul className="space-y-3">
            {footerCompanyLinks.map((link) => (
              <li key={link.href}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 font-label-caps text-label-caps uppercase text-metallic-gold">İletişim</h2>
          <address className="space-y-4 not-italic">
            <p className="font-body-md text-primary-fixed-dim">
              1552. Sokak, Çiğdem Mahallesi, No:1, Kat:4, Çankaya, Ankara, Türkiye
            </p>
            <p>
              <a
                className="font-body-md text-primary-fixed-dim transition-colors duration-200 hover:text-metallic-gold"
                href="mailto:info@akyadijital.com"
              >
                info@akyadijital.com
              </a>
            </p>
            <p>
              <a
                className="font-body-md text-primary-fixed-dim transition-colors duration-200 hover:text-metallic-gold" href="/iletisim"
              >
                İletişim Formu
              </a>
            </p>
            <p>
              <a
                aria-label="AKYA Group LinkedIn sayfasını aç"
                className="inline-flex h-11 w-11 items-center justify-center border border-primary-fixed-dim/35 text-primary-fixed-dim transition-colors duration-200 hover:border-metallic-gold hover:bg-metallic-gold hover:text-deep-navy"
                href="https://tr.linkedin.com/company/akya-group"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="mx-auto mt-16 flex w-full max-w-container-max flex-col justify-between gap-6 border-t border-industrial-blue/25 pt-8 md:flex-row md:items-center">
        <p className="text-[12px] leading-5 text-primary-fixed-dim">
          © 2026 AKYA DİJİTAL DÖNÜŞÜM A.Ş. TÜM HAKLARI SAKLIDIR.
        </p>

      </div>
    </footer>
  );
}
import { sectorPages } from "@/lib/sector-data";

// LinkedInIcon, footer'daki sosyal medya butonunu harici ikon kütüphanesi olmadan çizer.
function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.94 8.98H3.72V20h3.22V8.98ZM5.33 7.48a1.87 1.87 0 1 0-.02-3.74 1.87 1.87 0 0 0 .02 3.74ZM20.28 20v-6.05c0-3.24-1.73-4.74-4.04-4.74a3.48 3.48 0 0 0-3.14 1.72h-.05V8.98H9.97V20h3.22v-5.45c0-1.44.27-2.83 2.05-2.83 1.75 0 1.78 1.64 1.78 2.92V20h3.26Z" />
    </svg>
  );
}
