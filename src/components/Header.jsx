import { useEffect, useState } from "react";
import { navigation } from "../data";
import { BrandMark, Icon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container nav-shell">
        <a className="brand" href="#anasayfa" aria-label="AKYA Energy ana sayfa">
          <BrandMark />
          <span className="brand-copy">
            <strong>AKYA</strong>
            <span>ENERGY</span>
          </span>
        </a>

        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Ana menü">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="button button-small mobile-cta" href="#iletisim" onClick={() => setOpen(false)}>
            Projenizi Değerlendirelim
          </a>
        </nav>

        <a className="button button-small desktop-cta" href="#iletisim">
          Projenizi Değerlendirelim <Icon name="arrow" size={17} />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}
