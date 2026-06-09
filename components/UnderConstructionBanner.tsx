"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// UnderConstructionBanner, geliştirme bildirimini navbarın altında gösterir.
export default function UnderConstructionBanner() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  // Her sayfa geçişinde bildirimi yeniden görünür hale getirir.
  useEffect(() => {
    setIsVisible(true);
  }, [pathname]);

  // closeBanner, bildirimi yalnızca mevcut sayfa görüntülenirken kapatır.
  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <aside
      aria-label="Site geliştirme bildirimi"
      className="relative z-40 bg-deep-navy text-white"
    >
      <div className="border-b border-metallic-gold/45 bg-deep-navy/95">
        <div className="mx-auto flex min-h-10 max-w-[1500px] items-center gap-2 px-margin-mobile py-2 md:justify-center md:gap-3 md:px-margin-desktop">
          <div className="flex min-w-0 flex-1 flex-col gap-0.5 text-[11px] leading-4 sm:flex-row sm:items-center sm:gap-3 md:flex-none md:text-[13px]">
            <strong className="shrink-0 font-label-caps uppercase tracking-[0.08em] text-metallic-gold">
              Geliştirme Aşamasında
            </strong>
            <span className="text-white/90">
              Bu web sitesi geliştirme aşamasındadır. İçerikler, projeler ve teknik sayfalar güncellenmeye devam etmektedir.
            </span>
          </div>

          <button
            aria-label="Geliştirme bildirimini kapat"
            className="flex h-9 w-9 shrink-0 items-center justify-center text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-metallic-gold"
            onClick={closeBanner}
            type="button"
          >
            <CloseIcon />
          </button>
        </div>
      </div>
    </aside>
  );
}

// CloseIcon, kapatma düğmesini harici ikon bağımlılığı olmadan erişilebilir biçimde çizer.
function CloseIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}
