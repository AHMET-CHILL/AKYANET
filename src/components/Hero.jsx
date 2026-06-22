import { Icon } from "./Icons";

function EnergyDashboard() {
  return (
    <div className="energy-visual" aria-label="Enerji altyapısı izleme paneli illüstrasyonu" role="img">
      <div className="visual-topline">
        <span>SİSTEM DURUMU</span>
        <span className="status"><i /> ÇEVRİMİÇİ</span>
      </div>
      <div className="visual-grid">
        <div className="gauge-card">
          <span>ANLIK ÜRETİM</span>
          <strong>2.48 <small>MW</small></strong>
          <div className="sparkline">
            <svg viewBox="0 0 240 70" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#1fd28a" stopOpacity=".35" />
                  <stop offset="1" stopColor="#1fd28a" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path className="spark-fill" d="M0 58 24 49 48 54 72 31 96 38 120 18 144 29 168 15 192 24 216 8 240 16V70H0Z" />
              <path className="spark-line" d="M0 58 24 49 48 54 72 31 96 38 120 18 144 29 168 15 192 24 216 8 240 16" />
            </svg>
          </div>
        </div>
        <div className="metric-stack">
          <div><span>VERİMLİLİK</span><strong>%94.2</strong></div>
          <div><span>KARBON AZALTIMI</span><strong>18.6 t</strong></div>
        </div>
      </div>
      <div className="network-flow">
        <div className="flow-node"><i className="node-solar" /><span>ÜRETİM</span><b>2.48 MW</b></div>
        <div className="flow-line"><span /></div>
        <div className="flow-node central"><i className="node-grid" /><span>ENERJİ YÖNETİMİ</span><b>AKTİF</b></div>
        <div className="flow-line"><span /></div>
        <div className="flow-node"><i className="node-factory" /><span>TÜKETİM</span><b>2.21 MW</b></div>
      </div>
      <div className="visual-footer">
        <span>AKYA ENERGY MANAGEMENT SYSTEM</span>
        <span>SON GÜNCELLEME 14:32:08</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="anasayfa">
      <div className="hero-grid-overlay" />
      <div className="hero-glow" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="eyebrow light"><span /> ENERJİ MÜHENDİSLİĞİ & SÜRDÜRÜLEBİLİRLİK</div>
          <h1>Enerji altyapıları için <em>uçtan uca</em> mühendislik çözümleri</h1>
          <p>
            AKYA Energy; yenilenebilir enerji sistemleri, enerji verimliliği, elektrik altyapısı,
            karbon azaltım stratejileri ve saha uygulamalarını tek çatı altında sunar.
          </p>
          <div className="hero-actions">
            <a className="button" href="#cozumler">Çözümlerimizi İnceleyin <Icon name="arrow" size={18} /></a>
            <a className="text-link" href="#iletisim">İletişime Geçin <Icon name="arrow" size={17} /></a>
          </div>
        </div>
        <EnergyDashboard />
      </div>
      <div className="hero-side-label">AKYA GROUP COMPANY <span /></div>
    </section>
  );
}
