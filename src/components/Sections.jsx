import { industries, insights, process, solutions, strengths } from "../data";
import { Icon } from "./Icons";

const SectionHeading = ({ eyebrow, title, text, inverse = false }) => (
  <div className={`section-heading ${inverse ? "inverse" : ""}`}>
    <div className="eyebrow"><span /> {eyebrow}</div>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
);

export function StatsSection() {
  return (
    <section className="stats-section" aria-label="AKYA Energy yaklaşımı">
      <div className="container stats-grid">
        {strengths.map((item) => (
          <article className="stat-card" key={item.number}>
            <span className="stat-number">{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SolutionsSection() {
  return (
    <section className="section solutions-section" id="cozumler">
      <div className="container">
        <SectionHeading
          eyebrow="ÇÖZÜMLER"
          title="Enerji odaklı çözümlerimiz"
          text="Tesislerin enerji ihtiyacını yalnızca kurulum değil; analiz, tasarım, uygulama, izleme ve optimizasyon süreçleriyle birlikte ele alıyoruz."
        />
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <article className="solution-card" key={solution.title}>
              <div className="solution-head">
                <span className="solution-icon"><Icon name={solution.icon} size={28} /></span>
                <span className="solution-index">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <span className="solution-tag">{solution.tag}</span>
              <h3>{solution.title}</h3>
              <p>{solution.text}</p>
              <a href="#iletisim" aria-label={`${solution.title} hakkında bilgi alın`}>
                DETAYLI BİLGİ <Icon name="arrow" size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhySection() {
  const points = [
    "Teknik analiz ve fizibilite yaklaşımı",
    "Uygulanabilir ve ölçeklenebilir tasarım",
    "Kritik altyapı deneyimi",
    "İzlenebilir ve raporlanabilir performans",
  ];
  return (
    <section className="why-section">
      <div className="container why-layout">
        <div className="why-visual" aria-hidden="true">
          <div className="blueprint">
            <span className="bp-label top">ENERJİ AKIŞ MODELİ / 01</span>
            <div className="bp-ring ring-one"><b>%94</b><small>SİSTEM VERİMİ</small></div>
            <div className="bp-ring ring-two" />
            <div className="bp-line line-one" />
            <div className="bp-line line-two" />
            <div className="bp-box box-one"><i /> ÜRETİM</div>
            <div className="bp-box box-two"><i /> DAĞITIM</div>
            <div className="bp-box box-three"><i /> TÜKETİM</div>
            <span className="bp-label bottom">ÖLÇÜLEBİLİR PERFORMANS</span>
          </div>
          <div className="visual-caption"><strong>360°</strong><span>ENERJİ ALTYAPISI<br />DEĞERLENDİRMESİ</span></div>
        </div>
        <div className="why-content">
          <SectionHeading
            eyebrow="NEDEN AKYA ENERGY?"
            title="Enerjiyi ölçülebilir bir mühendislik süreci olarak ele alıyoruz"
          />
          <p className="why-lead">
            Her projede mevcut durum analizi, saha koşulları, tüketim davranışı, yatırım geri
            dönüşü, operasyon sürekliliği ve sürdürülebilirlik hedeflerini birlikte değerlendiriyoruz.
          </p>
          <p>
            Böylece enerji yatırımları yalnızca kurulum odaklı değil, uzun vadeli performans ve
            verimlilik odaklı tasarlanır.
          </p>
          <div className="check-grid">
            {points.map((point) => (
              <div key={point}><span><Icon name="check" size={16} /></span>{point}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="section process-section" id="surec">
      <div className="container">
        <SectionHeading
          eyebrow="ÇALIŞMA SÜRECİMİZ"
          title="Analizden optimizasyona uçtan uca süreç"
          text="Teknik kararların her aşamada sahadaki gerçek veriye dayandığı bütüncül proje yönetimi."
          inverse
        />
        <div className="process-grid">
          {process.map(([title, text], index) => (
            <article className="process-step" key={title}>
              <div className="step-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
                {index < process.length - 1 && <i />}
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  return (
    <section className="section industries-section" id="sektorler">
      <div className="container industries-layout">
        <div className="industries-copy">
          <SectionHeading
            eyebrow="SEKTÖRLER"
            title="Enerji altyapısı gerektiren her ölçekte tesis için"
            text="Endüstriyel üretimden kritik altyapılara kadar farklı operasyonların enerji ihtiyacını, sektöre özgü riskler ve süreklilik hedefleriyle birlikte değerlendiriyoruz."
          />
          <div className="critical-note">
            <span>KRİTİK ODAK</span>
            <p>AKYA Group'un veri merkezi ve kritik tesis deneyimini enerji mühendisliği yetkinliğiyle birleştiriyoruz.</p>
          </div>
        </div>
        <div className="industry-list">
          {industries.map(([number, name]) => (
            <a href="#iletisim" key={number}>
              <span>{number}</span><strong>{name}</strong><Icon name="arrow" size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InsightsSection() {
  return (
    <section className="section insights-section" id="icgoruler">
      <div className="container">
        <SectionHeading
          eyebrow="TEKNİK İÇGÖRÜLER"
          title="Enerji ve sürdürülebilirlik içgörüleri"
          text="Enerji yatırımlarında teknik kararları destekleyen güncel yaklaşımlar ve saha notları."
        />
        <div className="insights-grid">
          {insights.map((item, index) => (
            <article className="insight-card" key={item.title}>
              <div className={`insight-visual ${item.visual}`}>
                <span>0{index + 1}</span>
                <div className="visual-lines" />
              </div>
              <div className="insight-body">
                <div className="insight-meta"><span>{item.category}</span><i />{item.date}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#iletisim">DETAYLARI OKU <Icon name="arrow" size={16} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="cta-section" id="iletisim">
      <div className="cta-grid" />
      <div className="container cta-layout">
        <div>
          <div className="eyebrow light"><span /> PROJENİZ İÇİN İLK ADIM</div>
          <h2>Enerji projenizi birlikte değerlendirelim</h2>
          <p>Mevcut enerji altyapınızı, sürdürülebilirlik hedeflerinizi ve yatırım planınızı birlikte analiz ederek uygulanabilir bir yol haritası oluşturalım.</p>
        </div>
        <a className="button button-light" href="mailto:info@akyaenergy.com">
          İletişime Geçin <Icon name="arrow" size={18} />
        </a>
      </div>
    </section>
  );
}
