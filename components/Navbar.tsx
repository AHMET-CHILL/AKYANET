"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigationLinks, solutionMenuGroups } from "@/lib/site-data";
import { sectorMenuGroups } from "@/lib/sector-data";
import { getSubSolutionsByParent } from "@/lib/sub-solutions";
import { getReferenceProjectsByStatus } from "@/lib/reference-project-data";
import { verimetContent } from "@/lib/verimet-data";

// Navbar, scroll durumuna göre arka planı güçlendirir ve mobil menüyü yönetir.
export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

  // useEffect, tarayıcı scroll bilgisini dinleyerek navbar görünümünü günceller.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobil menü açıkken arka sayfanın kaymasını engeller.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Sayfa değiştiğinde açık mobil menüyü kapatır.
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // closeMenu, mobil menü bağlantı tıklamalarında menüyü kapatır.
  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenMobileGroup(null);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-margin-mobile py-3 transition-colors md:px-margin-desktop md:py-4 md:backdrop-blur-md ${
        isScrolled || isMenuOpen ? "bg-deep-navy/95" : "bg-deep-navy/35 md:bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-10">
        <a className="block" href="/" onClick={closeMenu} aria-label="Akya ana sayfa">
          <img className="h-12 w-auto md:h-20" src="/akya-logo.svg" alt="Akya Group" />
        </a>

        <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
          {navigationLinks.map((link) => {
            const isActive = isNavigationLinkActive(pathname, link.href);

            return (
              <div className="group relative" key={link.href}>
                <a
                  className={`relative inline-flex pb-2 font-label-caps text-[15px] font-bold uppercase tracking-[0.08em] transition-colors duration-300 ${
                    isActive ? "text-metallic-gold" : "text-surface-container-lowest hover:text-metallic-gold"
                  }`}
                  href={link.href}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-metallic-gold transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>

                {link.label === "Çözümler" ? <SolutionsDropdown /> : null}
                {link.label === "Sektörler" ? <SectorsDropdown /> : null}
                {link.label === "Referanslar" ? <ReferencesDropdown /> : null}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <form
            action="/arama"
            className="hidden items-center gap-2 border border-surface-container-lowest/25 bg-surface-container-lowest/10 px-3 py-2 md:flex"
            method="get"
            role="search"
          >
            <label className="sr-only" htmlFor="site-search">
              Ara
            </label>
            <button aria-label="Aramayı gönder" className="shrink-0 text-surface-container-lowest hover:text-metallic-gold" type="submit">
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                <path d="M10.8 18.1a7.3 7.3 0 1 1 0-14.6 7.3 7.3 0 0 1 0 14.6ZM16.1 16.1 21 21" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </button>
            <input
              className="w-28 bg-transparent font-body-md text-sm text-surface-container-lowest outline-none placeholder:text-surface-container-lowest/65 transition-[width] duration-300 focus:w-40"
              id="site-search"
              name="q"
              placeholder="Ara"
              type="search"
            />
          </form>
          <a className="hidden bg-metallic-gold px-7 py-3 font-label-caps text-[15px] font-bold uppercase tracking-[0.08em] text-deep-navy transition-transform active:translate-y-0.5 md:block" href="/iletisim">
            İletişim
          </a>
          <button
            aria-expanded={isMenuOpen}
            aria-label="Menüyü aç veya kapat"
            className="flex h-11 w-11 items-center justify-center border border-white/20 text-surface-container-lowest md:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="fixed inset-x-0 top-[72px] flex h-[calc(100svh-72px)] flex-col gap-2 overflow-y-auto border-t border-white/15 bg-deep-navy px-margin-mobile pb-8 pt-4 md:hidden">
          {navigationLinks.map((link) => {
            const isActive = isNavigationLinkActive(pathname, link.href);
            const hasDropdown =
              link.label === "Çözümler" ||
              link.label === "Sektörler" ||
              link.label === "Referanslar";
            const isDropdownOpen = openMobileGroup === link.label;

            return (
              <div key={link.href}>
                {hasDropdown ? (
                  <button
                    aria-expanded={isDropdownOpen}
                    className={`flex min-h-12 w-full items-center justify-between py-3 text-left font-label-caps text-sm uppercase tracking-[0.08em] transition-colors duration-300 ${
                      isActive ? "text-metallic-gold" : "text-surface-container-lowest"
                    }`}
                    onClick={() => setOpenMobileGroup((current) => (current === link.label ? null : link.label))}
                    type="button"
                  >
                    {link.label}
                    <ChevronIcon isOpen={isDropdownOpen} />
                  </button>
                ) : (
                  <a
                    className={`flex min-h-12 items-center py-3 font-label-caps text-sm uppercase tracking-[0.08em] transition-colors duration-300 ${
                      isActive ? "text-metallic-gold" : "text-surface-container-lowest"
                    }`}
                    href={link.href}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                )}
                {link.label === "Çözümler" && isDropdownOpen ? <MobileSolutionsMenu closeMenu={closeMenu} /> : null}
                {link.label === "Sektörler" && isDropdownOpen ? <MobileSectorsMenu closeMenu={closeMenu} /> : null}
                {link.label === "Referanslar" && isDropdownOpen ? <MobileReferencesMenu closeMenu={closeMenu} /> : null}
              </div>
            );
          })}
          <form action="/arama" className="mt-4 flex border border-white/20 bg-white/5" method="get" role="search">
            <label className="sr-only" htmlFor="mobile-site-search">Site içinde ara</label>
            <input
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/55"
              id="mobile-site-search"
              name="q"
              placeholder="Site içinde ara"
              type="search"
            />
            <button aria-label="Aramayı gönder" className="px-4 text-white" type="submit">
              <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
                <path d="M10.8 18.1a7.3 7.3 0 1 1 0-14.6 7.3 7.3 0 0 1 0 14.6ZM16.1 16.1 21 21" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </button>
          </form>
        </div>
      ) : null}
    </nav>
  );
}

// MenuIcon, mobil menü düğmesini harici ikon fontuna ihtiyaç duymadan çizer.
function MenuIcon() {
  return (
    <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

// CloseIcon, mobil menünün kapatma simgesini çizer.
function CloseIcon() {
  return (
    <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

// ChevronIcon, mobil alt menünün açık veya kapalı durumunu gösterir.
function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

// isNavigationLinkActive, mevcut URL'e göre sadece ilgili üst menü öğesini vurgular.
function isNavigationLinkActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

// SolutionsDropdown, masaüstünde Çözümler linki altında açılan çok kolonlu mega menüyü render eder.
function SolutionsDropdown() {
  return (
    <div className="invisible fixed left-1/2 top-[92px] w-[930px] max-w-[calc(100vw-48px)] -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
      <div className="grid grid-cols-3 border border-white/10 bg-deep-navy/95 shadow-2xl backdrop-blur-md">
        {solutionMenuGroups.map((group) => (
            <div className="min-h-[230px] border-l border-white/10 p-7 first:border-l-0" key={group.title}>
              <h3 className="mb-5 font-label-caps text-[14px] uppercase tracking-[0.12em] text-metallic-gold">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((item, itemIndex) => {
                  const parentSlug = getSlugFromHref(item.href);
                  const children = getSolutionMenuChildren(parentSlug);
                  const hasLongSubmenu = children.length > 10;

                  return (
                    <li className="group/item relative" key={item.label}>
                      <a
                        className="flex min-h-10 items-center justify-between gap-3 border-l-2 border-transparent px-3 py-2 font-body-md text-[15px] text-surface-container-lowest/85 transition-all duration-200 group-hover/item:border-metallic-gold group-hover/item:bg-white/5 group-hover/item:text-white"
                        href={item.href}
                      >
                        {item.label}
                        {children.length > 0 ? <SideChevronIcon direction="right" /> : null}
                      </a>

                      {children.length > 0 ? (
                        <div
                          className="invisible absolute left-full z-30 max-h-[calc(100vh-116px)] w-[410px] translate-y-2 overflow-y-auto overscroll-contain border border-white/10 bg-deep-navy p-6 opacity-0 shadow-2xl transition-all duration-200 group-hover/item:visible group-hover/item:translate-y-0 group-hover/item:opacity-100 group-focus-within/item:visible group-focus-within/item:translate-y-0 group-focus-within/item:opacity-100"
                          style={{ top: hasLongSubmenu ? `${-(76 + itemIndex * 48)}px` : "0px" }}
                        >
                          <p className="mb-4 font-label-caps text-[12px] uppercase tracking-[0.12em] text-metallic-gold">
                            {item.label} Alt Çözümleri
                          </p>
                          <ul className="space-y-1 pr-2">
                            {children.map((solution) => (
                              <li key={solution.slug}>
                                <a
                                  className={`block border-l-2 px-4 py-2.5 text-sm leading-5 transition-colors ${
                                    solution.isBrand
                                      ? "mt-3 border-metallic-gold bg-white/5 font-semibold text-metallic-gold hover:bg-white/10 hover:text-white"
                                      : "border-transparent text-surface-container-lowest/80 hover:border-metallic-gold hover:bg-white/5 hover:text-white"
                                  }`}
                                  href={solution.href}
                                >
                                  {solution.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </div>
        ))}
      </div>
    </div>
  );
}

// SideChevronIcon, masaüstü mega menüsünde ikinci seviye içeriği olan bağlantıları gösterir.
function SideChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-4 w-4 shrink-0 ${direction === "left" ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path d="m9 6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

// getSlugFromHref, ana çözüm bağlantısından veri modelinde kullanılan parent slug değerini çıkarır.
function getSlugFromHref(href: string) {
  return href.split("/").filter(Boolean).at(-1) ?? "";
}

// getSolutionMenuChildren, teknik alt çözümleri ve yalnızca Veri Merkezi için Verimet marka sayfasını menü modelinde birleştirir.
function getSolutionMenuChildren(parentSlug: string) {
  const technicalSolutions = getSubSolutionsByParent(parentSlug).map((solution) => ({
    slug: solution.slug,
    title: solution.title,
    href: `/cozumler/${solution.parentSlug}/${solution.slug}`,
    isBrand: false,
  }));

  if (parentSlug !== "veri-merkezi") {
    return technicalSolutions;
  }

  return [
    ...technicalSolutions,
    {
      slug: "verimet",
      title: verimetContent.title,
      href: verimetContent.href,
      isBrand: true,
    },
  ];
}

// SectorsDropdown, masaüstünde Sektörler bağlantısı altında hedef alanları üç kolonda gösterir.
function SectorsDropdown() {
  return (
    <div className="invisible fixed left-1/2 top-[92px] w-[900px] max-w-[calc(100vw-80px)] -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
      <div className="grid grid-cols-3 gap-0 border border-white/10 bg-deep-navy/95 shadow-2xl backdrop-blur-md">
        {sectorMenuGroups.map((group) => (
          <div className="min-h-[190px] border-l border-white/10 p-7 first:border-l-0" key={group.title}>
            <h3 className="mb-5 font-label-caps text-[15px] uppercase tracking-[0.12em] text-metallic-gold">{group.title}</h3>
            <ul className="space-y-4">
              {group.items.map((item) => (
                <li key={item.href}>
                  <a
                    className="flex min-h-10 w-full items-center border-l-2 border-transparent px-3 py-2 font-body-md text-[16px] text-surface-container-lowest/85 transition-all duration-200 hover:border-metallic-gold hover:bg-white/5 hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ReferencesDropdown, referans projelerini tamamlanan ve devam eden olarak iki kolonda listeler.
function ReferencesDropdown() {
  return (
    <div className="invisible fixed left-1/2 top-[92px] w-[820px] max-w-[calc(100vw-80px)] -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
      <div className="grid grid-cols-2 border border-white/10 bg-deep-navy/95 shadow-2xl backdrop-blur-md">
        <ReferenceMenuColumn
          categoryHref="/referanslar/tamamlanan"
          categoryLabel="Tamamlanan Projeler"
          projects={getReferenceProjectsByStatus("tamamlanan")}
        />
        <ReferenceMenuColumn
          categoryHref="/referanslar/devam-eden"
          categoryLabel="Devam Eden Projeler"
          projects={getReferenceProjectsByStatus("devam-eden")}
        />
      </div>
    </div>
  );
}

// ReferenceMenuColumn, referans mega menüsündeki kategori ve proje bağlantılarını oluşturur.
function ReferenceMenuColumn({
  categoryLabel,
  categoryHref,
  projects,
}: {
  categoryLabel: string;
  categoryHref: string;
  projects: ReturnType<typeof getReferenceProjectsByStatus>;
}) {
  return (
    <div className="min-h-[220px] border-l border-white/10 p-7 first:border-l-0">
      <a className="font-label-caps text-[14px] uppercase tracking-[0.12em] text-metallic-gold hover:text-white" href={categoryHref}>
        {categoryLabel}
      </a>
      <ul className="mt-5 space-y-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <a
              className="block border-l-2 border-transparent px-3 py-2.5 text-sm leading-5 text-surface-container-lowest/85 transition-colors hover:border-metallic-gold hover:bg-white/5 hover:text-white"
              href={`/referanslar/${project.status}/${project.slug}`}
            >
              {project.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// MobileSolutionsMenu, mobil hamburger menüde Çözümler alt başlıklarını okunabilir şekilde listeler.
function MobileSolutionsMenu({ closeMenu }: { closeMenu: () => void }) {
  const [openSolutionSlug, setOpenSolutionSlug] = useState<string | null>(null);

  return (
    <div className="mb-3 ml-4 mt-2 space-y-4 border-l border-metallic-gold/40 pl-4">
      <a className="block text-sm font-semibold text-surface-container-lowest" href="/cozumler" onClick={closeMenu}>
        Tüm Çözümler
      </a>
      {solutionMenuGroups.map((group) => (
        <div key={group.title}>
          <p className="mb-2 font-label-caps text-[12px] uppercase tracking-normal text-metallic-gold">{group.title}</p>
          <div className="space-y-2">
            {group.items.map((item) => {
              const parentSlug = getSlugFromHref(item.href);
              const children = getSolutionMenuChildren(parentSlug);
              const isOpen = openSolutionSlug === parentSlug;

              return (
                <div key={item.label}>
                  <div className="flex items-center gap-2">
                    <a className="min-w-0 flex-1 py-1 text-sm text-surface-container-lowest/85" href={item.href} onClick={closeMenu}>
                      {item.label}
                    </a>
                    {children.length > 0 ? (
                      <button
                        aria-expanded={isOpen}
                        aria-label={`${item.label} alt çözümlerini ${isOpen ? "kapat" : "aç"}`}
                        className="flex h-9 w-9 shrink-0 items-center justify-center text-surface-container-lowest"
                        onClick={() => setOpenSolutionSlug((current) => (current === parentSlug ? null : parentSlug))}
                        type="button"
                      >
                        <ChevronIcon isOpen={isOpen} />
                      </button>
                    ) : null}
                  </div>

                  {isOpen ? (
                    <div className="ml-3 mt-2 space-y-1 border-l border-white/15 pl-3">
                      {children.map((solution) => (
                        <a
                          className={`block py-2 text-[13px] leading-5 ${
                            solution.isBrand ? "font-semibold text-metallic-gold" : "text-surface-container-lowest/70"
                          }`}
                          href={solution.href}
                          key={solution.slug}
                          onClick={closeMenu}
                        >
                          {solution.title}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

// MobileSectorsMenu, mobil menüde sektör gruplarını tek kolonlu accordion içeriği olarak gösterir.
function MobileSectorsMenu({ closeMenu }: { closeMenu: () => void }) {
  return (
    <div className="mb-3 ml-4 mt-2 space-y-4 border-l border-metallic-gold/40 pl-4">
      <a className="block text-sm font-semibold text-surface-container-lowest" href="/sektorler" onClick={closeMenu}>
        Tüm Sektörler
      </a>
      {sectorMenuGroups.map((group) => (
        <div key={group.title}>
          <p className="mb-2 font-label-caps text-[12px] uppercase tracking-normal text-metallic-gold">{group.title}</p>
          <div className="space-y-2">
            {group.items.map((item) => (
              <a className="block text-sm text-surface-container-lowest/80" href={item.href} key={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// MobileReferencesMenu, referans kategorilerini ve proje detaylarını mobil accordion içinde listeler.
function MobileReferencesMenu({ closeMenu }: { closeMenu: () => void }) {
  const groups = [
    {
      label: "Tamamlanan Projeler",
      href: "/referanslar/tamamlanan",
      projects: getReferenceProjectsByStatus("tamamlanan"),
    },
    {
      label: "Devam Eden Projeler",
      href: "/referanslar/devam-eden",
      projects: getReferenceProjectsByStatus("devam-eden"),
    },
  ];

  return (
    <div className="mb-3 ml-4 mt-2 space-y-5 border-l border-metallic-gold/40 pl-4">
      <a className="block text-sm font-semibold text-surface-container-lowest" href="/referanslar" onClick={closeMenu}>
        Tüm Referanslar
      </a>
      {groups.map((group) => (
        <div key={group.href}>
          <a className="font-label-caps text-[12px] uppercase text-metallic-gold" href={group.href} onClick={closeMenu}>
            {group.label}
          </a>
          <div className="mt-2 space-y-1">
            {group.projects.map((project) => (
              <a
                className="block py-2 text-[13px] leading-5 text-surface-container-lowest/75"
                href={`/referanslar/${project.status}/${project.slug}`}
                key={project.slug}
                onClick={closeMenu}
              >
                {project.title}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
