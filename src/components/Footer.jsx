import { navigation } from "../data";
import { BrandMark } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <a className="brand" href="#anasayfa">
            <BrandMark />
            <span className="brand-copy"><strong>AKYA</strong><span>ENERGY</span></span>
          </a>
          <p>AKYA Energy, enerji altyapıları, yenilenebilir enerji sistemleri, verimlilik analizi ve sürdürülebilirlik çözümleri sunan mühendislik odaklı bir AKYA Group şirketidir.</p>
          <span className="group-signature">AN AKYA GROUP COMPANY</span>
        </div>
        <div>
          <h2>Menü</h2>
          <ul>{navigation.filter(([, href]) => href !== "#icgoruler").map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
        </div>
        <div>
          <h2>Çözümler</h2>
          <ul>
            <li><a href="#cozumler">Yenilenebilir Enerji</a></li>
            <li><a href="#cozumler">Elektrik Altyapısı</a></li>
            <li><a href="#cozumler">Enerji Verimliliği</a></li>
            <li><a href="#cozumler">Depolama Sistemleri</a></li>
            <li><a href="#cozumler">Akıllı Enerji</a></li>
          </ul>
        </div>
        <div>
          <h2>İletişim</h2>
          <address>
            <a href="mailto:info@akyaenergy.com">info@akyaenergy.com</a>
            <a href="https://akyaenergy.com">akyaenergy.com</a>
            <p>Ankara, Türkiye</p>
          </address>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 AKYA Energy. Tüm hakları saklıdır.</p>
        <a href="https://akya.net" target="_blank" rel="noreferrer">AKYA Group ↗</a>
      </div>
    </footer>
  );
}
