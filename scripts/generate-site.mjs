import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = process.cwd();
const briefPath = join(root, "brief-extracted.txt");
const brief = readFileSync(briefPath, "utf8").replace(/\r\n/g, "\n");
const lines = brief.split("\n").map((line) => line.trim()).filter(Boolean);

const categories = [
  {
    title: "Akıllı Enerji, IoT ve Otomasyon",
    slug: "akilli-enerji-iot-otomasyon",
    text: "Trafo, saha ekipmanı ve endüstriyel proseslerden veri toplayan; alarm, izleme ve uzaktan kontrol kabiliyeti sunan çözümler.",
  },
  {
    title: "Çevresel Teknolojiler ve Atıksu",
    slug: "cevresel-teknolojiler-atiksu",
    text: "Atıksu analizini, proses izlemeyi ve arıtma teknolojilerini daha ölçülebilir hale getiren ürün odaklı Ar-Ge çalışmaları.",
  },
  {
    title: "İleri Sensör ve Görüntüleme Teknolojileri",
    slug: "ileri-sensor-goruntuleme",
    text: "Temassız ölçüm, optik/fiber algılama, termal görüntü işleme ve milimetre dalga tabanlı algılama teknolojileri.",
  },
  {
    title: "Yapay Zeka ve Kritik Tesis Yönetimi",
    slug: "yapay-zeka-kritik-tesis-yonetimi",
    text: "Enerji yönetimi, soğutma optimizasyonu, veri merkezi izleme ve modelleme süreçlerinde yapay zeka destekli yazılım modülleri.",
  },
  {
    title: "Yenilenebilir ve Otonom Sistemler",
    slug: "yenilenebilir-otonom-sistemler",
    text: "Düşük enerji tüketimli, kendinden beslemeli ve saha koşullarına uygun yenilenebilir enerji tabanlı ürünler.",
  },
];

const sectors = [
  {
    title: "Doğalgaz",
    slug: "dogalgaz",
    image: "/sectors/natural-gas.jpg",
    tagline: "Doğalgaz altyapılarında güvenilir ölçüm, izleme ve saha yönetimi.",
    overview: "AKYA Energy, doğalgaz iletim ve dağıtım altyapılarında saha verisinin güvenilir biçimde toplanması, kritik ekipmanların uzaktan izlenmesi ve operasyonel risklerin erken belirlenmesi için Ar-Ge odaklı çözümler geliştirir. Çalışmalarımız; sensör, haberleşme, gömülü sistem ve endüstriyel yazılım katmanlarını birlikte ele alır.",
    focus: ["Basınç, sıcaklık ve debi izleme", "Uzaktan saha ve istasyon takibi", "Kaçak ve anomali tespit yaklaşımları", "Alarm, raporlama ve bakım verisi yönetimi"],
    applications: ["Basınç düşürme ve ölçüm istasyonları", "Dağıtım hatları ve saha kabinleri", "Kompresör ve yardımcı ekipman izleme", "SCADA ve IoT entegrasyonları"],
  },
  {
    title: "Petrokimya",
    slug: "petrokimya",
    image: "/sectors/petrochemical.jpg",
    tagline: "Petrokimya proseslerinde ölçülebilirlik, otomasyon ve çevresel performans.",
    overview: "Petrokimya tesislerinde proses sürekliliği, ekipman güvenilirliği ve çevresel performans birbiriyle doğrudan ilişkilidir. AKYA Energy; saha sensörleri, optik analiz, termal görüntüleme, atıksu teknolojileri ve SCADA yazılımlarını bir araya getirerek proseslerin daha görünür ve yönetilebilir hale gelmesini hedefler.",
    focus: ["Proses ve ekipman durum izleme", "Atıksu analiz ve arıtma teknolojileri", "Termal görüntüleme ile kalite kontrol", "Endüstriyel otomasyon ve veri toplama"],
    applications: ["Üretim ve yardımcı proses hatları", "Tank, pompa ve borulama sistemleri", "Atıksu ve çevresel izleme üniteleri", "Bakım ve kalite kontrol operasyonları"],
  },
  {
    title: "Yenilenebilir Enerji",
    slug: "yenilenebilir-enerji",
    image: "/sectors/renewable-energy.jpg",
    tagline: "Yenilenebilir üretim, enerji depolama ve otonom sistemler için Ar-Ge.",
    overview: "AKYA Energy, yenilenebilir enerji kaynaklarının daha verimli izlenmesi, depolama sistemlerinin modellenmesi ve düşük tüketimli otonom ürünlerin geliştirilmesi üzerine çalışır. Güneş ve rüzgâr uygulamalarını; enerji yönetimi, yapay zeka destekli modelleme ve saha otomasyonu kabiliyetleriyle destekler.",
    focus: ["Güneş ve rüzgâr üretim verisi izleme", "Enerji depolama ve süper kapasitör modelleme", "Otonom ve kendinden beslemeli sistemler", "Verimlilik analizi ve akıllı kontrol"],
    applications: ["Güneş ve rüzgâr enerji santralleri", "Dağıtık üretim ve mikro şebekeler", "Enerji depolama uygulamaları", "Otonom aydınlatma ve saha sistemleri"],
  },
];

const cardTitlesBySlug = {
  "trafo-yonetimi-iot-kontrol-karti": "Trafo IoT Kontrol Kartı",
  "akm-koi-optik-analizoru": "AKM ve KOİ Optik Analizörü",
  "milimetre-dalga-aktif-dizi-goruntuleme-basligi": "mmWave Aktif Dizi Görüntüleme Başlığı",
  "ai-destekli-dcim-scada-modulu": "AI Destekli DCIM SCADA Modülü",
  "termal-goruntu-isleme-kalite-kontrol": "Termal Görüntü İşleme ile Kalite Kontrol",
  "kendinden-enerjili-motorlu-gunes-bacasi-aydinlatma": "Kendinden Enerjili Güneş Bacası Aydınlatma",
  "scada-yazilimi": "SCADA Yazılımı",
  "elektrokoagulasyon-atiksu-aritimi": "Elektrokoagülasyon ile Atıksu Arıtımı",
  "ai-super-kapasitor-modelleme-yazilimi": "AI Süper Kapasitör Modelleme Yazılımı",
  "fiber-optik-sensor-gelistirilmesi": "Fiber Optik Sensör Geliştirilmesi",
};

const fieldNames = new Set([
  "Kategori",
  "Önerilen URL",
  "Hero başlığı",
  "Kart metni",
  "SEO",
  "Kısa slogan",
  "Genel açıklama",
  "Problem / ihtiyaç",
  "Çözüm yaklaşımı",
  "Teknik kabiliyetler",
  "Uygulama alanları",
  "Sayfa CTA önerisi",
  "Görsel yönlendirmesi",
]);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function textToSlug(url) {
  return url.replace(/^\/projeler\//, "").replace(/^\/teknoloji-alanlari\//, "");
}

function seoParts(line) {
  const match = line.match(/^Title:\s*(.*?)Description:\s*(.*)$/);
  return {
    title: match ? match[1].trim() : "AKYA Energy",
    description: match ? match[2].trim() : line.trim(),
  };
}

function parseProjects() {
  const starts = [];
  lines.forEach((line, index) => {
    if (/^5\.\d+\s/.test(line)) starts.push(index);
  });

  return starts.map((start, order) => {
    const end = starts[order + 1] ?? lines.findIndex((line, index) => index > start && line === "6. Stok görsel kaynakları ve kullanım notları");
    const section = lines.slice(start, end === -1 ? undefined : end);
    const rawTitle = section[0].replace(/^5\.\d+\s*/, "");
    const data = { rawTitle };

    for (let i = 1; i < section.length; i += 1) {
      const field = section[i];
      if (!fieldNames.has(field)) continue;

      const values = [];
      i += 1;
      while (i < section.length && !fieldNames.has(section[i]) && !/^5\.\d+\s/.test(section[i])) {
        values.push(section[i]);
        i += 1;
      }
      i -= 1;

      data[field] = values;
    }

    const slug = textToSlug(data["Önerilen URL"]?.[0] ?? rawTitle);
    const seo = seoParts(data.SEO?.[0] ?? "");
    const category = data.Kategori?.[0] ?? "";
    const categoryMeta = categories.find((item) => item.title === category);

    return {
      order: order + 1,
      rawTitle,
      title: cardTitlesBySlug[slug] ?? rawTitle,
      category,
      categorySlug: categoryMeta?.slug ?? "",
      slug,
      url: `/projeler/${slug}/`,
      hero: data["Hero başlığı"]?.[0] ?? rawTitle,
      card: data["Kart metni"]?.[0] ?? "",
      seoTitle: seo.title,
      seoDescription: seo.description,
      tagline: data["Kısa slogan"]?.[0] ?? "",
      overview: data["Genel açıklama"]?.[0] ?? "",
      challenge: data["Problem / ihtiyaç"]?.[0] ?? "",
      solution: data["Çözüm yaklaşımı"]?.[0] ?? "",
      capabilities: data["Teknik kabiliyetler"] ?? [],
      useCases: data["Uygulama alanları"] ?? [],
      cta: data["Sayfa CTA önerisi"]?.[0] ?? "Bu proje için teknik görüşme planlayın.",
      visualTerms: data["Görsel yönlendirmesi"] ?? [],
    };
  });
}

const projects = parseProjects();

const searchIndex = [
  {
    title: "Ana Sayfa",
    type: "Sayfa",
    category: "AKYA Energy",
    url: "/",
    excerpt: "AKYA Energy enerji altyapıları, çevresel teknolojiler, sensör sistemleri ve endüstriyel yazılım alanlarında ürün odaklı Ar-Ge projeleri geliştirir.",
  },
  {
    title: "Projeler",
    type: "Sayfa",
    category: "Proje portföyü",
    url: "/projeler/",
    excerpt: "Enerji, çevre, sensör ve yazılım disiplinlerini bir araya getiren AKYA Energy proje listesi.",
  },
  {
    title: "Teknoloji Alanları",
    type: "Sayfa",
    category: "Teknoloji mimarisi",
    url: "/teknoloji-alanlari/",
    excerpt: "Akıllı enerji, çevresel teknolojiler, ileri sensörler, yapay zeka ve yenilenebilir otonom sistemler.",
  },
  ...sectors.map((sector) => ({
    title: sector.title,
    type: "Sektör",
    category: "Sektörler",
    url: `/sektorler/${sector.slug}/`,
    excerpt: `${sector.tagline} ${sector.overview}`,
  })),
  ...categories.map((category) => ({
    title: category.title,
    type: "Teknoloji Alanı",
    category: "Teknoloji Alanları",
    url: `/teknoloji-alanlari/${category.slug}/`,
    excerpt: category.text,
  })),
  ...projects.map((project) => ({
    title: project.title,
    type: "Proje",
    category: project.category,
    url: project.url,
    excerpt: `${project.card} ${project.tagline} ${project.overview}`,
  })),
];

function css() {
  return `
    :root {
      --navy: #062b62;
      --navy-dark: #031833;
      --green: #00f57a;
      --surface: #ffffff;
      --muted: #53616f;
      --line: rgba(6, 43, 98, .12);
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      background: var(--surface);
      color: #17202a;
      font-family: "Source Sans 3", Arial, sans-serif;
      font-size: 16px;
      line-height: 1.6;
      animation: pageFade .55s ease both;
    }
    @keyframes pageFade {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-18px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes softPop {
      from { opacity: 0; transform: translateY(12px) scale(.98); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes floatOrb {
      0%, 100% { transform: translate3d(0, 0, 0); }
      50% { transform: translate3d(-18px, 18px, 0); }
    }
    a { color: inherit; text-decoration: none; }
    .container { width: min(1280px, calc(100% - 48px)); margin: 0 auto; }
    .notice {
      background: var(--green);
      color: var(--navy);
      font-weight: 800;
      letter-spacing: .04em;
      min-height: 42px;
      position: relative;
      text-align: center;
      text-transform: uppercase;
      z-index: 60;
    }
    .notice-inner { align-items: center; display: flex; gap: 10px; justify-content: center; padding: 10px 56px; }
    .notice button {
      align-items: center;
      background: transparent;
      border: 0;
      border-radius: 50%;
      color: var(--navy);
      cursor: pointer;
      display: inline-flex;
      height: 30px;
      justify-content: center;
      position: absolute;
      right: 24px;
      top: 50%;
      transform: translateY(-50%);
      width: 30px;
    }
    .notice.is-hidden { display: none; }
    .site-header {
      animation: slideDown .5s ease both;
      background: #fff;
      border-top: 3px solid var(--green);
      box-shadow: 0 8px 28px rgba(6, 43, 98, .08);
      color: var(--navy);
      position: sticky;
      top: 0;
      z-index: 50;
    }
    .header-inner { align-items: center; display: flex; justify-content: space-between; min-height: 80px; gap: 30px; }
    .brand { color: var(--navy); font-family: "Hanken Grotesk", Arial, sans-serif; font-size: 31px; font-weight: 900; letter-spacing: -.03em; white-space: nowrap; }
    .brand span { color: var(--green); }
    .main-nav { align-items: center; display: flex; gap: 28px; font-weight: 800; }
    .main-nav a, .projects-trigger, .sectors-trigger { position: relative; transition: color .2s ease; }
    .main-nav a:hover, .projects-trigger:hover, .sectors-trigger:hover { color: #008e4a; }
    .projects-trigger, .sectors-trigger {
      align-items: center;
      background: transparent;
      border: 0;
      color: inherit;
      cursor: pointer;
      display: inline-flex;
      font: inherit;
      font-weight: inherit;
      gap: 4px;
      padding: 0;
    }
    .projects-trigger .material-symbols-outlined, .sectors-trigger .material-symbols-outlined {
      font-size: 18px;
      transition: transform .2s ease;
    }
    .projects-trigger[aria-expanded="true"] .material-symbols-outlined,
    .sectors-trigger[aria-expanded="true"] .material-symbols-outlined { transform: rotate(180deg); }
    .main-nav a::after, .projects-trigger::after, .sectors-trigger::after {
      background: var(--green);
      bottom: -27px;
      content: "";
      height: 3px;
      left: 0;
      position: absolute;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform .2s ease;
      width: 100%;
    }
    .main-nav a:hover::after, .main-nav a.is-active::after,
    .projects-trigger:hover::after, .projects-trigger.is-active::after,
    .projects-trigger[aria-expanded="true"]::after,
    .sectors-trigger:hover::after, .sectors-trigger.is-active::after,
    .sectors-trigger[aria-expanded="true"]::after { transform: scaleX(1); }
    .projects-mega, .sectors-menu {
      background: #fff;
      border-top: 1px solid var(--line);
      box-shadow: 0 24px 48px rgba(6,43,98,.14);
      left: 0;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      top: 100%;
      transform: translateY(-10px);
      transition: opacity .22s ease, transform .22s ease, visibility .22s ease;
      visibility: hidden;
      width: 100%;
      z-index: 49;
    }
    .projects-mega.is-open, .sectors-menu.is-open {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
      visibility: visible;
    }
    .projects-mega-inner, .sectors-menu-inner {
      display: grid;
      gap: 24px;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      padding-bottom: 30px;
      padding-top: 28px;
    }
    .sectors-menu-inner { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .mega-intro {
      align-items: center;
      border-bottom: 1px solid var(--line);
      display: flex;
      grid-column: 1 / -1;
      justify-content: space-between;
      padding-bottom: 18px;
    }
    .mega-intro strong { color: var(--navy); font-family: "Hanken Grotesk", Arial, sans-serif; font-size: 22px; }
    .mega-column { min-width: 0; }
    .mega-category {
      color: var(--navy);
      display: block;
      font-family: "Hanken Grotesk", Arial, sans-serif;
      font-size: 15px;
      font-weight: 900;
      line-height: 1.25;
      margin-bottom: 14px;
    }
    .mega-category:hover { color: #008e4a; }
    .mega-project {
      border-top: 1px solid var(--line);
      color: var(--muted);
      display: block;
      font-size: 14px;
      font-weight: 700;
      line-height: 1.3;
      padding: 9px 0;
      transition: color .18s ease, padding-left .18s ease;
    }
    .mega-project:hover { color: var(--navy); padding-left: 5px; }
    .mega-all {
      color: #008e4a;
      display: inline-flex;
      font-size: 12px;
      font-weight: 900;
      letter-spacing: .05em;
      margin-top: 10px;
      text-transform: uppercase;
    }
    .header-actions { align-items: center; display: flex; gap: 12px; }
    .mobile-menu-toggle {
      align-items: center;
      background: transparent;
      border: 0;
      border-radius: 50%;
      color: var(--navy);
      cursor: pointer;
      display: none;
      height: 44px;
      justify-content: center;
      transition: background .2s ease, color .2s ease;
      width: 44px;
    }
    .mobile-menu-toggle:hover { background: rgba(6,43,98,.07); color: #008e4a; }
    .mobile-menu {
      background: #fff;
      border-top: 1px solid var(--line);
      box-shadow: 0 22px 50px rgba(6,43,98,.16);
      left: 0;
      max-height: calc(100vh - 80px);
      opacity: 0;
      overflow-y: auto;
      pointer-events: none;
      position: absolute;
      right: 0;
      top: 100%;
      transform: translateY(-10px);
      transition: opacity .22s ease, transform .22s ease, visibility .22s ease;
      visibility: hidden;
      z-index: 52;
    }
    .mobile-menu.is-open { opacity: 1; pointer-events: auto; transform: translateY(0); visibility: visible; }
    .mobile-menu-inner { display: grid; gap: 4px; padding-bottom: 28px; padding-top: 18px; }
    .mobile-menu a {
      border-radius: 10px;
      color: var(--navy);
      display: block;
      font-size: 18px;
      font-weight: 900;
      padding: 11px 13px;
    }
    .mobile-menu a:hover, .mobile-menu a.is-active { background: rgba(0,245,122,.14); }
    .mobile-accordion-trigger {
      align-items: center;
      background: transparent;
      border: 0;
      border-radius: 10px;
      color: var(--navy);
      cursor: pointer;
      display: flex;
      font: inherit;
      font-size: 18px;
      font-weight: 900;
      justify-content: space-between;
      padding: 11px 13px;
      text-align: left;
      width: 100%;
    }
    .mobile-accordion-trigger:hover, .mobile-accordion-trigger[aria-expanded="true"] { background: rgba(0,245,122,.14); }
    .mobile-accordion-trigger .material-symbols-outlined { font-size: 20px; transition: transform .2s ease; }
    .mobile-accordion-trigger[aria-expanded="true"] .material-symbols-outlined { transform: rotate(180deg); }
    .mobile-accordion-panel { display: none; padding: 4px 0 10px 14px; }
    .mobile-accordion-panel.is-open { animation: softPop .22s ease both; display: block; }
    .mobile-subgroup { border-left: 2px solid var(--line); margin: 8px 0; padding-left: 10px; }
    .mobile-menu .mobile-subheading { color: var(--navy); font-size: 15px; padding: 10px 12px 7px; }
    .mobile-menu .mobile-detail-link { color: var(--muted); font-size: 14px; font-weight: 700; padding: 7px 12px; }
    .mobile-menu .mobile-all-link { color: #008e4a; font-size: 14px; letter-spacing: .04em; text-transform: uppercase; }
    .mobile-menu-label {
      border-top: 1px solid var(--line);
      color: #008e4a;
      font-size: 11px;
      font-weight: 900;
      letter-spacing: .1em;
      margin: 12px 0 4px;
      padding: 18px 13px 0;
      text-transform: uppercase;
    }
    .mobile-menu .mobile-sub-link { color: var(--muted); font-size: 16px; padding-left: 24px; }
    .search-toggle {
      align-items: center;
      background: transparent;
      border: 0;
      border-radius: 50%;
      color: var(--navy);
      cursor: pointer;
      display: inline-flex;
      height: 44px;
      justify-content: center;
      transition: background .2s ease, color .2s ease, transform .2s ease;
      width: 44px;
    }
    .search-toggle:hover { background: rgba(6,43,98,.07); color: #008e4a; transform: scale(1.06); }
    .search-overlay {
      background: rgba(3, 24, 51, .78);
      inset: 0;
      opacity: 0;
      padding: 80px 24px;
      pointer-events: none;
      position: fixed;
      transition: opacity .22s ease, visibility .22s ease;
      visibility: hidden;
      z-index: 100;
    }
    .search-overlay.is-open { opacity: 1; pointer-events: auto; visibility: visible; }
    .search-panel {
      background: #fff;
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 24px;
      box-shadow: 0 30px 90px rgba(0,0,0,.24);
      margin: 0 auto;
      max-width: 860px;
      overflow: hidden;
      transform: translateY(18px) scale(.98);
      transition: transform .25s ease;
    }
    .search-overlay.is-open .search-panel { transform: translateY(0) scale(1); }
    .search-head {
      align-items: center;
      background: var(--navy);
      color: #fff;
      display: flex;
      justify-content: space-between;
      padding: 18px 22px;
    }
    .search-head strong { font-family: "Hanken Grotesk", Arial, sans-serif; font-size: 24px; }
    .search-close {
      align-items: center;
      background: transparent;
      border: 0;
      border-radius: 50%;
      color: #fff;
      cursor: pointer;
      display: inline-flex;
      height: 36px;
      justify-content: center;
      width: 36px;
    }
    .search-close:hover { background: rgba(255,255,255,.12); }
    .search-body { padding: 24px; }
    .search-input {
      border: 1px solid var(--line);
      border-radius: 14px;
      color: var(--navy-dark);
      font: inherit;
      font-size: 20px;
      outline: none;
      padding: 15px 16px;
      width: 100%;
    }
    .search-input:focus { border-color: var(--green); box-shadow: 0 0 0 4px rgba(0,245,122,.13); }
    .search-results { display: grid; gap: 12px; margin-top: 18px; max-height: 55vh; overflow: auto; }
    .search-result {
      border: 1px solid var(--line);
      border-radius: 16px;
      display: block;
      padding: 16px;
      transition: border-color .2s ease, box-shadow .2s ease, transform .2s ease;
    }
    .search-result:hover { border-color: rgba(0,245,122,.8); box-shadow: 0 14px 28px rgba(6, 43, 98, .1); transform: translateY(-2px); }
    .search-result small { color: var(--muted); display: block; font-weight: 800; margin-bottom: 4px; text-transform: uppercase; }
    .search-result strong { color: var(--navy); display: block; font-size: 20px; }
    .search-result p { color: var(--muted); margin: 6px 0 0; }
    .search-empty { color: var(--muted); margin: 18px 0 0; }
    .hero {
      background:
        radial-gradient(circle at 85% 15%, rgba(0, 245, 122, .13), transparent 30%),
        linear-gradient(135deg, #ffffff, #f4f8fb);
      color: var(--navy);
      overflow: hidden;
      min-height: 720px;
      padding: 132px 0 126px;
      position: relative;
    }
    .hero::after {
      animation: floatOrb 8s ease-in-out infinite;
      border: 1px solid rgba(6,43,98,.12);
      border-radius: 999px;
      content: "";
      height: 420px;
      position: absolute;
      right: -140px;
      top: 40px;
      width: 420px;
    }
    .hero .container { position: relative; z-index: 1; }
    .home-hero {
      align-items: center;
      background-image:
        linear-gradient(180deg, rgba(6,43,98,.16), rgba(255,255,255,.3)),
        url('/homepage/controlroom-preview.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
    }
    .home-hero::after { display: none; }
    .home-hero .container {
      align-items: center;
      -webkit-backdrop-filter: blur(12px);
      backdrop-filter: blur(12px);
      background: rgba(255,255,255,.66);
      border: 1px solid rgba(255,255,255,.72);
      border-radius: 30px;
      box-shadow: 0 28px 80px rgba(3,24,51,.16);
      display: flex;
      flex-direction: column;
      max-width: 1160px;
      padding: clamp(38px, 5vw, 70px);
      text-align: center;
    }
    .home-hero h1 { font-size: clamp(42px, 5vw, 68px); line-height: 1.08; max-width: 1020px; text-shadow: none; }
    .home-hero .lead { color: #31465b; font-size: 20px; line-height: 1.7; max-width: 820px; text-shadow: none; }
    .home-hero .button-row { justify-content: center; }
    .eyebrow {
      color: var(--green);
      display: block;
      font-size: 12px;
      font-weight: 900;
      letter-spacing: .1em;
      margin-bottom: 18px;
      text-transform: uppercase;
    }
    h1, h2, h3 { font-family: "Hanken Grotesk", Arial, sans-serif; line-height: 1.15; margin: 0; }
    h1 { font-size: clamp(42px, 6vw, 74px); letter-spacing: -.04em; max-width: 980px; }
    h2 { color: var(--navy); font-size: clamp(32px, 4vw, 52px); letter-spacing: -.03em; }
    h3 { color: var(--navy); font-size: 24px; letter-spacing: -.02em; }
    .lead { color: var(--muted); font-size: 21px; margin: 28px 0 0; max-width: 850px; }
    .hero .eyebrow { animation: fadeUp .58s ease .05s both; }
    .hero h1 { animation: fadeUp .62s ease .12s both; }
    .hero .lead { animation: fadeUp .66s ease .2s both; }
    .hero .button-row { animation: fadeUp .7s ease .3s both; }
    .button-row { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 34px; }
    .button {
      align-items: center;
      background: var(--green);
      border-radius: 8px;
      color: var(--navy);
      display: inline-flex;
      font-size: 13px;
      font-weight: 900;
      gap: 8px;
      letter-spacing: .06em;
      padding: 15px 22px;
      text-transform: uppercase;
      transition: transform .22s ease, box-shadow .22s ease, background .22s ease;
    }
    .button:hover { box-shadow: 0 18px 35px rgba(0,245,122,.22); transform: translateY(-2px); }
    .button.secondary { background: transparent; border: 1px solid rgba(6,43,98,.28); color: var(--navy); }
    .section { padding: 88px 0; }
    .section.alt { background: var(--navy); color: #fff; }
    .section.alt h2, .section.alt h3 { color: #fff; }
    .section.alt .section-heading p { color: rgba(255,255,255,.74); }
    .section-heading { margin-bottom: 36px; max-width: 860px; }
    .section-heading p { color: var(--muted); font-size: 20px; margin: 18px 0 0; }
    .grid { display: grid; gap: 24px; }
    .grid.three { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .grid.two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .project-carousel-head { align-items: center; display: flex; justify-content: space-between; margin-bottom: 32px; }
    .section.alt.project-carousel-section { background: #fff; color: var(--navy); }
    .project-carousel-head h2 { color: var(--navy); font-size: clamp(38px, 4vw, 58px); margin: 0; }
    .project-carousel-controls { display: flex; gap: 10px; }
    .project-carousel-button {
      align-items: center;
      background: transparent;
      border: 1px solid rgba(6,43,98,.24);
      border-radius: 50%;
      color: var(--navy);
      cursor: pointer;
      display: inline-flex;
      height: 48px;
      justify-content: center;
      transition: background .2s ease, border-color .2s ease, color .2s ease;
      width: 48px;
    }
    .project-carousel-button:hover { background: var(--green); border-color: var(--green); color: var(--navy); }
    .project-carousel-track {
      display: grid;
      gap: 24px;
      grid-auto-columns: minmax(300px, calc((100% - 48px) / 3));
      grid-auto-flow: column;
      cursor: grab;
      overflow-x: auto;
      overflow-y: hidden;
      overscroll-behavior-inline: contain;
      padding: 2px;
      scroll-behavior: smooth;
      scroll-snap-type: inline proximity;
      scrollbar-width: none;
      user-select: none;
    }
    .project-carousel-track::-webkit-scrollbar { display: none; }
    .project-carousel-track.is-dragging { cursor: grabbing; scroll-behavior: auto; scroll-snap-type: none; }
    .project-carousel-track .card { min-height: 340px; scroll-snap-align: start; }
    .section.alt.project-carousel-section .card { background: #fff; border-color: #d5dce5; box-shadow: none; }
    .section.alt.project-carousel-section .card .tag { color: #fff; }
    .section.alt.project-carousel-section .card h3 { color: var(--navy); }
    .section.alt.project-carousel-section .card p { color: var(--muted); }
    .section.alt.project-carousel-section .card .link { color: #008e4a; }
    .section.alt.project-carousel-section .card:hover { border-color: #aeb8c5; box-shadow: 0 14px 34px rgba(6,43,98,.08); transform: none; }
    .section.alt.project-carousel-section .card:hover .link { color: var(--navy); }
    .section.alt.projects-list-section { background: #fff; color: var(--navy); }
    .section.alt.projects-list-section .card { background: #fff; border-color: #d5dce5; box-shadow: none; }
    .section.alt.projects-list-section .card .tag { color: #fff; }
    .section.alt.projects-list-section .card h3 { color: var(--navy); }
    .section.alt.projects-list-section .card p { color: var(--muted); }
    .section.alt.projects-list-section .card .link { color: #008e4a; }
    .section.alt.projects-list-section .card:hover { border-color: #aeb8c5; box-shadow: 0 14px 34px rgba(6,43,98,.08); transform: none; }
    .section.alt.projects-list-section .card:hover .link { color: var(--navy); }
    .projects-list-section .filter-button { background: #fff; border-color: #d5dce5; color: var(--navy); }
    .projects-list-section .filter-button.is-active, .projects-list-section .filter-button:hover { background: var(--green); border-color: var(--green); color: #fff; }
    .sector-showcase {
      border-bottom: 2px solid #2459ee;
      border-top: 2px solid #2459ee;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      min-height: 100vh;
      overflow: hidden;
      width: 100%;
    }
    .sector-panel {
      background-color: var(--navy);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      min-height: 100vh;
      overflow: hidden;
      position: relative;
      transition: filter .3s ease;
    }
    .sector-panel::before {
      background: linear-gradient(180deg, rgba(3,24,51,.05), rgba(3,24,51,.5));
      content: "";
      inset: 0;
      position: absolute;
      transition: background .3s ease;
    }
    .sector-panel-gas { background-image: url('/sectors/natural-gas.jpg'); background-position: 62% center; }
    .sector-panel-petrochemical { background-image: url('/sectors/petrochemical.jpg'); }
    .sector-panel-renewable { background-image: url('/sectors/renewable-energy.jpg'); }
    .sector-panel + .sector-panel { border-left: 2px solid #2459ee; }
    .sector-panel:hover::before { background: linear-gradient(180deg, rgba(3,24,51,0), rgba(3,24,51,.35)); }
    .sector-panel:focus-visible { outline: 5px solid var(--green); outline-offset: -5px; }
    .sector-panel-label {
      background: var(--green);
      bottom: 0;
      color: var(--navy-dark);
      font-family: "Hanken Grotesk", Arial, sans-serif;
      font-size: clamp(23px, 2vw, 34px);
      font-weight: 700;
      left: 0;
      line-height: 1.1;
      max-width: 90%;
      padding: 20px 26px;
      position: absolute;
      z-index: 2;
    }
    .sector-detail-hero .container {
      align-items: center;
      display: grid;
      gap: 54px;
      grid-template-columns: minmax(0, 1.05fr) minmax(360px, .95fr);
    }
    .sector-detail-image {
      background-position: center;
      background-size: cover;
      border-radius: 24px;
      box-shadow: 0 28px 70px rgba(6,43,98,.16);
      min-height: 500px;
      overflow: hidden;
      position: relative;
    }
    .sector-detail-image::after {
      background: linear-gradient(180deg, transparent, rgba(3,24,51,.3));
      content: "";
      inset: 0;
      position: absolute;
    }
    .sector-overview { color: var(--muted); font-size: 20px; margin: 0; }
    .card {
      background: var(--navy);
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 18px;
      box-shadow: 0 18px 50px rgba(6, 43, 98, .06);
      display: flex;
      flex-direction: column;
      min-height: 100%;
      padding: 28px;
      transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease;
    }
    .card h3 { color: #fff; }
    .card:hover {
      border-color: rgba(0,245,122,.55);
      box-shadow: 0 24px 58px rgba(6, 43, 98, .12);
      transform: translateY(-6px);
    }
    .card.dark { background: var(--navy); color: #fff; }
    .card.dark h3, .card.dark p { color: #fff; }
    .tag {
      align-self: flex-start;
      background: var(--green);
      border: 1px solid var(--green);
      border-radius: 999px;
      color: var(--navy-dark);
      display: inline-flex;
      font-size: 12px;
      font-weight: 900;
      letter-spacing: .04em;
      margin-bottom: 20px;
      padding: 8px 11px;
      text-transform: uppercase;
    }
    .card.dark .tag { background: var(--green); }
    .card p { color: rgba(255,255,255,.86); margin: 16px 0 0; }
    .card .link { color: var(--green); font-size: 12px; font-weight: 900; letter-spacing: .07em; margin-top: auto; padding-top: 26px; text-transform: uppercase; }
    .card:hover .link { color: #fff; }
    .section.alt .card { background: var(--navy-dark); }
    .placeholder {
      align-items: center;
      background:
        radial-gradient(circle at 20% 20%, rgba(0,245,122,.16), transparent 34%),
        linear-gradient(135deg, #ffffff, #eef4f8);
      border-radius: 18px;
      color: var(--navy);
      display: flex;
      min-height: 260px;
      overflow: hidden;
      padding: 28px;
      position: relative;
      transition: transform .28s ease, box-shadow .28s ease;
    }
    .placeholder:hover { box-shadow: 0 22px 50px rgba(6, 43, 98, .16); transform: translateY(-4px); }
    .placeholder::before, .placeholder::after {
      border: 1px solid rgba(6,43,98,.13);
      border-radius: 50%;
      content: "";
      position: absolute;
    }
    .placeholder::before { height: 180px; right: -40px; top: -50px; width: 180px; }
    .placeholder::after { bottom: -70px; height: 230px; left: -60px; width: 230px; }
    .placeholder span { font-weight: 900; letter-spacing: .08em; position: relative; text-transform: uppercase; z-index: 1; }
    .project-layout { display: grid; gap: 42px; grid-template-columns: minmax(0, 1.45fr) minmax(320px, .55fr); }
    .content-block { background: var(--navy); border: 1px solid rgba(255,255,255,.14); border-radius: 18px; color: #fff; margin-bottom: 22px; padding: 30px; }
    .content-block h2 { font-size: 32px; margin-bottom: 14px; }
    .content-block h2 { color: #fff; }
    .list { display: grid; gap: 12px; list-style: none; margin: 0; padding: 0; }
    .list li { border-bottom: 1px solid rgba(255,255,255,.14); color: rgba(255,255,255,.8); padding: 0 0 12px 24px; position: relative; }
    .list li::before { background: var(--green); border-radius: 50%; content: ""; height: 8px; left: 0; position: absolute; top: 10px; width: 8px; }
    .filter-bar { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 28px; }
    .filter-button {
      background: var(--navy-dark);
      border: 1px solid rgba(255,255,255,.18);
      border-radius: 999px;
      color: #fff;
      cursor: pointer;
      font: inherit;
      font-weight: 800;
      padding: 9px 14px;
      transition: background .2s ease, color .2s ease, transform .2s ease, border-color .2s ease;
    }
    .filter-button.is-active, .filter-button:hover { background: var(--green); color: var(--navy); transform: translateY(-1px); }
    .cta {
      background: #fff;
      border: 1px solid var(--line);
      border-radius: 22px;
      color: var(--navy);
      padding: 38px;
      transition: transform .28s ease, box-shadow .28s ease;
    }
    .cta:hover { box-shadow: 0 24px 70px rgba(6, 43, 98, .18); transform: translateY(-3px); }
    .cta h2 { color: var(--navy) !important; font-size: 36px; }
    .cta p { color: var(--muted) !important; }
    .contact-scroll-reveal {
      background:
        radial-gradient(circle at 82% 28%, rgba(0,245,122,.1), transparent 28%),
        linear-gradient(145deg, #ffffff, #eef3f8);
      height: 150vh;
      position: relative;
    }
    .contact-sticky {
      align-items: center;
      display: flex;
      height: 100vh;
      justify-content: center;
      overflow: hidden;
      position: sticky;
      top: 0;
    }
    .contact-panel {
      --contact-progress: 0;
      --contact-scale: .94;
      --contact-width: min(42vw, 520px);
      --contact-height: min(42vw, 520px);
      --contact-radius: 50%;
      --contact-preview: 1;
      --contact-surface: 1;
      --contact-label: 0;
      --contact-label-y: 20px;
      --contact-title: 0;
      --contact-title-y: 34px;
      --contact-details: 0;
      --contact-details-y: 24px;
      --contact-pattern-opacity: 0;
      background: #fff;
      border: 1px solid rgba(255,255,255,.3);
      border-radius: var(--contact-radius);
      box-shadow: 0 36px 100px rgba(0,0,0,.22);
      height: var(--contact-height);
      overflow: hidden;
      position: relative;
      transform: scale(var(--contact-scale));
      transform-origin: center;
      width: var(--contact-width);
      will-change: transform, width, height, border-radius;
    }
    .contact-panel::before {
      background: var(--navy);
      content: "";
      height: 9px;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 2;
      opacity: var(--contact-title);
    }
    .contact-circle-surface {
      background:
        radial-gradient(circle at center, transparent 0 42%, rgba(255,255,255,.05) 43% 58%, transparent 59%),
        radial-gradient(circle, rgba(255,255,255,.5) 2px, transparent 3px),
        var(--navy);
      background-size: 100% 100%, 22px 22px, auto;
      inset: 0;
      opacity: var(--contact-surface);
      pointer-events: none;
      position: absolute;
      z-index: 1;
    }
    .contact-circle-surface::after {
      background: radial-gradient(circle at center, var(--navy) 0 48%, rgba(6,43,98,.92) 64%, transparent 78%);
      content: "";
      inset: 0;
      position: absolute;
    }
    .contact-preview {
      align-items: center;
      color: #fff;
      display: flex;
      flex-direction: column;
      inset: 0;
      justify-content: center;
      opacity: var(--contact-preview);
      padding: 48px;
      pointer-events: none;
      position: absolute;
      text-align: center;
      z-index: 3;
    }
    .contact-preview small { color: var(--green); font-size: 12px; font-weight: 900; letter-spacing: .14em; text-transform: uppercase; }
    .contact-preview strong { font-family: "Hanken Grotesk", Arial, sans-serif; font-size: clamp(27px, 3vw, 44px); line-height: 1.08; margin-top: 16px; }
    .contact-preview span { color: rgba(255,255,255,.78); font-size: clamp(15px, 1.3vw, 19px); margin-top: 18px; }
    .contact-pattern {
      background-image:
        linear-gradient(rgba(6,43,98,.07) 1px, transparent 1px),
        linear-gradient(90deg, rgba(6,43,98,.07) 1px, transparent 1px),
        radial-gradient(circle at center, rgba(0,245,122,.2) 1px, transparent 2px);
      background-size: 36px 36px, 36px 36px, 18px 18px;
      clip-path: polygon(32% 0, 100% 0, 100% 100%, 0 100%);
      inset: 0 0 0 52%;
      opacity: var(--contact-pattern-opacity);
      pointer-events: none;
      position: absolute;
    }
    .contact-pattern::after {
      background: linear-gradient(90deg, #fff, transparent 55%);
      content: "";
      inset: 0;
      position: absolute;
    }
    .contact-content {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      margin: 0 auto;
      padding: 70px clamp(32px, 7vw, 138px);
      position: relative;
      width: min(100%, 1600px);
      z-index: 1;
    }
    .contact-content .eyebrow {
      opacity: var(--contact-label);
      transform: translateY(var(--contact-label-y));
    }
    .contact-title {
      color: var(--navy);
      font-size: clamp(42px, 5.2vw, 82px);
      max-width: 980px;
      opacity: var(--contact-title);
      transform: translateY(var(--contact-title-y));
    }
    .contact-description {
      color: var(--muted);
      font-size: clamp(18px, 1.5vw, 23px);
      margin: 28px 0 0;
      max-width: 820px;
      opacity: var(--contact-details);
      transform: translateY(var(--contact-details-y));
    }
    .contact-actions {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      gap: 16px 26px;
      margin-top: 34px;
      opacity: var(--contact-details);
      transform: translateY(var(--contact-details-y));
    }
    .contact-details-list {
      display: grid;
      font-family: "Hanken Grotesk", Arial, sans-serif;
      font-style: normal;
      gap: 28px;
      grid-template-columns: minmax(300px, 1.6fr) 1fr 1fr;
      margin-top: 38px;
      max-width: 1100px;
      opacity: var(--contact-details);
      transform: translateY(var(--contact-details-y));
    }
    .contact-info-item { border-top: 2px solid var(--green); padding-top: 14px; }
    .contact-info-label { color: #008e4a; display: block; font-size: 12px; font-weight: 900; letter-spacing: .12em; margin-bottom: 8px; text-transform: uppercase; }
    .contact-info-value { color: var(--navy); display: block; font-family: "Hanken Grotesk", Arial, sans-serif; font-size: clamp(17px, 1.25vw, 21px); font-style: normal; font-weight: 600; line-height: 1.5; }
    a.contact-info-value:hover { color: var(--green); }
    .contact-page { background: #fff; padding: 90px 0 120px; }
    .contact-page-heading { margin-bottom: 54px; max-width: 900px; }
    .contact-page-heading h1 { color: var(--navy); font-size: clamp(48px, 6vw, 86px); line-height: 1; margin: 14px 0 20px; }
    .contact-page-heading p { color: var(--muted); font-size: clamp(18px, 1.5vw, 23px); max-width: 760px; }
    .contact-page-grid { align-items: start; display: grid; gap: clamp(32px, 5vw, 76px); grid-template-columns: minmax(280px, .72fr) minmax(0, 1.28fr); }
    .contact-page-info { background: #fff; border: 1px solid var(--line); border-radius: 20px; box-shadow: 0 18px 50px rgba(6,43,98,.08); color: var(--navy); padding: clamp(30px, 4vw, 54px); position: sticky; top: 130px; }
    .contact-page-info h2 { color: var(--navy); font-size: clamp(30px, 3vw, 44px); margin-bottom: 34px; }
    .contact-page-info address { font-style: normal; }
    .contact-page-info .contact-info-item { border-color: var(--line); }
    .contact-page-info .contact-info-item + .contact-info-item { margin-top: 28px; }
    .contact-page-info .contact-info-label { color: #008e4a; }
    .contact-page-info .contact-info-value { color: var(--muted); font-weight: 600; }
    .contact-page-info a.contact-info-value:hover { color: #008e4a; }
    .contact-form { background: #f3f6f9; border: 1px solid var(--line); border-radius: 24px; padding: clamp(28px, 4vw, 54px); }
    .contact-form-grid { display: grid; gap: 28px 30px; grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .form-field { display: flex; flex-direction: column; }
    .form-field.full { grid-column: 1 / -1; }
    .form-field label { color: var(--navy); font-size: 13px; font-weight: 900; letter-spacing: .12em; margin-bottom: 10px; text-transform: uppercase; }
    .form-field input, .form-field select, .form-field textarea {
      background: transparent;
      border: 0;
      border-bottom: 1px solid rgba(6,43,98,.45);
      border-radius: 0;
      color: var(--navy);
      font: inherit;
      font-size: 18px;
      min-height: 50px;
      outline: 0;
      padding: 8px 4px 10px;
      transition: border-color .2s ease, box-shadow .2s ease;
      width: 100%;
    }
    .form-field textarea { min-height: 150px; resize: vertical; }
    .form-field input:focus, .form-field select:focus, .form-field textarea:focus { border-color: var(--green); box-shadow: 0 2px 0 var(--green); }
    .form-consent { align-items: flex-start; color: var(--muted); display: flex; font-size: 14px; gap: 10px; grid-column: 1 / -1; line-height: 1.5; }
    .form-consent input { accent-color: var(--green); flex: 0 0 auto; height: 18px; margin-top: 2px; width: 18px; }
    .form-honeypot { left: -9999px !important; position: absolute !important; }
    .contact-form-footer { align-items: center; display: flex; flex-wrap: wrap; gap: 18px; grid-column: 1 / -1; }
    .contact-form-status { color: var(--muted); font-size: 15px; margin: 0; }
    .contact-form-status.is-success { color: #007c41; font-weight: 700; }
    .contact-form-status.is-error { color: #b42318; font-weight: 700; }
    .contact-form button[disabled] { cursor: wait; opacity: .62; }
    .footer { background: #fff; border-top: 1px solid var(--line); color: var(--navy); padding: 52px 0; }
    .footer-grid { display: grid; gap: 28px; grid-template-columns: 1.2fr repeat(3, 1fr); }
    .footer a { color: var(--muted); display: block; margin-top: 10px; }
    .footer a:hover { color: #008e4a; }
    .image-credits { color: var(--muted); font-size: 11px; margin: 24px 0 0; }
    .image-credits a { display: inline; margin: 0; text-decoration: underline; }
    .group-badge {
      border: 1px solid rgba(6,43,98,.22);
      border-radius: 999px;
      display: inline-flex !important;
      font-size: 12px;
      font-weight: 900;
      padding: 8px 12px;
      text-transform: uppercase;
      transition: border-color .2s ease, color .2s ease, transform .2s ease;
    }
    .group-badge:hover { border-color: var(--green); transform: translateY(-2px); }
    .reveal {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity .65s ease, transform .65s ease;
      transition-delay: var(--reveal-delay, 0ms);
      will-change: opacity, transform;
    }
    .reveal.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
    @media (max-width: 980px) {
      .main-nav { display: none; }
      .projects-mega, .sectors-menu { display: none; }
      .mobile-menu-toggle { display: inline-flex; }
      .grid.three, .grid.two, .project-layout, .footer-grid { grid-template-columns: 1fr; }
      .project-carousel-track { grid-auto-columns: minmax(280px, 84vw); }
      .project-carousel-controls { display: none; }
      .sector-showcase { grid-template-columns: 1fr; }
      .sector-panel { min-height: 70vh; }
      .sector-panel + .sector-panel { border-left: 0; border-top: 2px solid #2459ee; }
      .sector-detail-hero .container { grid-template-columns: 1fr; }
      .sector-detail-image { min-height: 360px; }
      .contact-scroll-reveal { height: 125vh; }
      .contact-panel { --contact-height: min(78vw, 360px); --contact-radius: 50%; --contact-width: min(78vw, 360px); }
      .contact-content { padding: 54px 24px; }
      .contact-title { font-size: clamp(34px, 10vw, 48px); }
      .contact-details-list { gap: 18px; grid-template-columns: 1fr; margin-top: 26px; }
      .contact-page { padding: 64px 0 90px; }
      .contact-page-grid { grid-template-columns: 1fr; }
      .contact-page-info { position: static; }
      .contact-form-grid { grid-template-columns: 1fr; }
      .form-field.full, .form-consent, .contact-form-footer { grid-column: 1; }
      .contact-pattern { inset: 0 0 0 68%; }
      .contact-preview { padding: 28px; }
      .home-hero .container { border-radius: 22px; padding: 34px 22px; width: calc(100% - 28px); }
      .home-hero h1 { font-size: clamp(38px, 11vw, 52px); }
      .home-hero .lead { font-size: 18px; }
      .hero { min-height: auto; padding: 86px 0 126px; }
      .container { width: min(100% - 32px, 1280px); }
    }
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: .001ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
        transition-duration: .001ms !important;
      }
      .reveal { opacity: 1; transform: none; }
      .contact-scroll-reveal { height: auto; }
      .contact-sticky { height: auto; position: relative; }
      .contact-panel { border-radius: 0; height: auto; min-height: 620px; transform: none; width: 100%; }
      .contact-content .eyebrow, .contact-title, .contact-description, .contact-actions, .contact-details-list { opacity: 1; transform: none; }
      .contact-pattern { opacity: .28; }
      .contact-preview, .contact-circle-surface { display: none; }
    }
  `;
}

function head({ title, description }) {
  return `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="${escapeHtml(description)}">
<meta name="google-site-verification" content="GpQX8CAloPjQDnWYVXcIt6hFmbXDNSV_pj6h-Aqays8">
<title>${escapeHtml(title)}</title>
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700;900&family=Source+Sans+3:wght@400;700;900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">
<style>${css()}</style>
<script type="module" src="/src/analytics.js"></script>
</head>`;
}

function notice() {
  return `<aside class="notice" id="development-notice" aria-label="Site durumu">
<div class="notice-inner"><span class="material-symbols-outlined" aria-hidden="true">construction</span><span>Bu web sitesi geliştirme aşamasındadır.</span></div>
<button id="development-notice-close" type="button" aria-label="Bildirimi kapat"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
</aside>`;
}

function header(active = "") {
  const links = [
    ["/", "Ana Sayfa", "home"],
    ["/projeler/", "Projeler", "projects"],
    ["/sektorler/", "Sektörler", "sectors"],
    ["/#brand", "Kurumsal", "brand"],
    ["/iletisim/", "İletişim", "contact"],
  ];
  const megaColumns = categories.map((category) => {
    const categoryProjects = projects.filter((project) => project.categorySlug === category.slug);
    return `<div class="mega-column">
<a class="mega-category" href="/teknoloji-alanlari/${category.slug}/">${escapeHtml(category.title)}</a>
${categoryProjects.map((project) => `<a class="mega-project" href="${project.url}">${escapeHtml(project.title)}</a>`).join("")}
</div>`;
  }).join("");
  return `<header class="site-header">
<div class="container header-inner">
<a class="brand" href="/"><span>AKYA</span> ENERGY</a>
<nav class="main-nav" aria-label="Ana menü">
${links.map(([href, label, key]) => key === "projects"
    ? `<a class="projects-trigger ${active === key ? "is-active" : ""}" href="${href}" data-project-menu-trigger aria-expanded="false" aria-controls="projects-mega">${label}<span class="material-symbols-outlined" aria-hidden="true">expand_more</span></a>`
    : key === "sectors"
      ? `<a class="sectors-trigger ${active === key ? "is-active" : ""}" href="${href}" data-sector-menu-trigger aria-expanded="false" aria-controls="sectors-menu">${label}<span class="material-symbols-outlined" aria-hidden="true">expand_more</span></a>`
    : `<a class="${active === key ? "is-active" : ""}" href="${href}">${label}</a>`).join("")}
</nav>
<div class="header-actions"><button class="search-toggle" type="button" data-search-open aria-label="Site içinde ara"><span class="material-symbols-outlined" aria-hidden="true">search</span></button><button class="mobile-menu-toggle" type="button" data-mobile-menu-toggle aria-expanded="false" aria-controls="mobile-menu" aria-label="Menüyü aç"><span class="material-symbols-outlined" data-mobile-menu-icon aria-hidden="true">menu</span></button></div>
</div>
<div class="projects-mega" id="projects-mega" data-project-menu>
<div class="container projects-mega-inner">
<div class="mega-intro"><strong>Projeler ve Teknoloji Alanları</strong><a class="mega-all" href="/projeler/">Tüm Projeleri Gör →</a></div>
${megaColumns}
</div>
</div>
<div class="sectors-menu" id="sectors-menu" data-sector-menu>
<div class="container sectors-menu-inner">
<div class="mega-intro"><strong>Sektörler</strong><a class="mega-all" href="/sektorler/">Tüm Sektörleri Gör →</a></div>
${sectors.map((sector) => `<div class="mega-column"><a class="mega-category" href="/sektorler/${sector.slug}/">${escapeHtml(sector.title)}</a>${sector.focus.slice(0, 3).map((item) => `<a class="mega-project" href="/sektorler/${sector.slug}/">${escapeHtml(item)}</a>`).join("")}</div>`).join("")}
</div>
</div>
<div class="mobile-menu" id="mobile-menu" data-mobile-menu>
<nav class="container mobile-menu-inner" aria-label="Mobil menü">
<a class="${active === "home" ? "is-active" : ""}" href="/">Ana Sayfa</a>
<button class="mobile-accordion-trigger ${active === "projects" ? "is-active" : ""}" type="button" data-mobile-accordion-trigger aria-expanded="false" aria-controls="mobile-projects-panel"><span>Projeler</span><span class="material-symbols-outlined" aria-hidden="true">expand_more</span></button>
<div class="mobile-accordion-panel" id="mobile-projects-panel" data-mobile-accordion-panel>
<a class="mobile-all-link" href="/projeler/">Tüm Projeleri Gör →</a>
${categories.map((category) => `<div class="mobile-subgroup"><a class="mobile-subheading" href="/teknoloji-alanlari/${category.slug}/">${escapeHtml(category.title)}</a>${projects.filter((project) => project.categorySlug === category.slug).map((project) => `<a class="mobile-detail-link" href="/projeler/${project.slug}/">${escapeHtml(project.title)}</a>`).join("")}</div>`).join("")}
</div>
<button class="mobile-accordion-trigger ${active === "sectors" ? "is-active" : ""}" type="button" data-mobile-accordion-trigger aria-expanded="false" aria-controls="mobile-sectors-panel"><span>Sektörler</span><span class="material-symbols-outlined" aria-hidden="true">expand_more</span></button>
<div class="mobile-accordion-panel" id="mobile-sectors-panel" data-mobile-accordion-panel>
<a class="mobile-all-link" href="/sektorler/">Tüm Sektörleri Gör →</a>
${sectors.map((sector) => `<div class="mobile-subgroup"><a class="mobile-subheading" href="/sektorler/${sector.slug}/">${escapeHtml(sector.title)}</a>${sector.focus.slice(0, 3).map((item) => `<a class="mobile-detail-link" href="/sektorler/${sector.slug}/">${escapeHtml(item)}</a>`).join("")}</div>`).join("")}
</div>
<a href="/#brand">Kurumsal</a>
<a class="${active === "contact" ? "is-active" : ""}" href="/iletisim/">İletişim</a>
</nav>
</div>
</header>`;
}

function searchOverlay() {
  return `<div class="search-overlay" id="search-overlay" role="dialog" aria-modal="true" aria-labelledby="search-title">
<div class="search-panel">
<div class="search-head"><strong id="search-title">Site içinde ara</strong><button class="search-close" type="button" data-search-close aria-label="Aramayı kapat"><span class="material-symbols-outlined" aria-hidden="true">close</span></button></div>
<div class="search-body">
<input class="search-input" id="site-search-input" type="search" placeholder="Proje, teknoloji alanı veya anahtar kelime yazın..." autocomplete="off">
<div class="search-results" id="site-search-results"></div>
<p class="search-empty" id="site-search-empty">Aramak için en az iki karakter yazın.</p>
</div>
</div>
</div>`;
}

function footer() {
  return `<footer class="footer">
<div class="container footer-grid">
<div>
<a class="brand" href="/"><span>AKYA</span> ENERGY</a>
<p>Akya Group bünyesinde bir enerji Ar-Ge şirketidir.</p>
<a class="group-badge" href="https://akya.net" target="_blank" rel="noreferrer">Akya Group ↗</a>
</div>
<div><strong>Menü</strong><a href="/projeler/">Projeler</a><a href="/#sektorler">Sektörler</a><a href="/#brand">Kurumsal</a><a href="/iletisim/">İletişim</a></div>
<div><strong>Sektörler</strong>${sectors.map((sector) => `<a href="/sektorler/${sector.slug}/">${escapeHtml(sector.title)}</a>`).join("")}</div>
<div><strong>İletişim</strong><a href="mailto:info@akya.net">info@akya.net</a><a href="tel:+903125112222">0312 511 22 22</a><a href="/iletisim/">İletişim Formu</a><p>Ankara, Türkiye</p></div>
</div>
<div class="container"><p class="image-credits">Sektör görselleri: <a href="https://commons.wikimedia.org/wiki/File:Solohiv_natural_gas_plant_-_common_view.jpg" target="_blank" rel="noreferrer">ReAl / Wikimedia Commons (CC BY-SA 3.0)</a> ve Unsplash.</p></div>
</footer>`;
}

function scripts() {
  return `<script>
const searchIndex = ${JSON.stringify(searchIndex)};
const notice = document.getElementById("development-notice");
const closeNotice = document.getElementById("development-notice-close");
if (notice && closeNotice) closeNotice.addEventListener("click", () => notice.classList.add("is-hidden"));
const revealTargets = Array.from(document.querySelectorAll(".section, .section-heading, .card, .content-block, .cta, .placeholder, .project-layout, .filter-bar"));
revealTargets.forEach((item, index) => {
  item.classList.add("reveal");
  item.style.setProperty("--reveal-delay", \`\${Math.min(index % 6, 5) * 55}ms\`);
});
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  revealTargets.forEach((item) => revealObserver.observe(item));
} else {
  revealTargets.forEach((item) => item.classList.add("is-visible"));
}
const contactScrollSection = document.querySelector("[data-contact-scroll]");
const contactScrollPanel = document.querySelector("[data-contact-panel]");
const clamp01 = (value) => Math.min(1, Math.max(0, value));
const stageProgress = (progress, start, end) => clamp01((progress - start) / (end - start));
let contactScrollTicking = false;
const updateContactScroll = () => {
  contactScrollTicking = false;
  if (!contactScrollSection || !contactScrollPanel) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const rect = contactScrollSection.getBoundingClientRect();
  const travel = Math.max(1, contactScrollSection.offsetHeight - window.innerHeight);
  const rawProgress = reduceMotion ? 1 : clamp01(-rect.top / travel);
  const progress = rawProgress * rawProgress * (3 - (2 * rawProgress));
  const isMobile = window.innerWidth <= 980;
  const startSize = Math.min(window.innerWidth * (isMobile ? .78 : .42), isMobile ? 360 : 520);
  const endWidth = window.innerWidth;
  const endHeight = window.innerHeight * (isMobile ? .88 : .92);
  const panelWidth = startSize + (progress * (endWidth - startSize));
  const panelHeight = startSize + (progress * (endHeight - startSize));
  const shapeMorph = stageProgress(progress, .34, 1);
  const label = stageProgress(progress, .42, .6);
  const title = stageProgress(progress, .48, .72);
  const details = stageProgress(progress, .62, .88);
  const pattern = stageProgress(progress, .5, .86);
  const preview = 1 - stageProgress(progress, .18, .48);
  const surface = 1 - stageProgress(progress, .28, .66);
  contactScrollPanel.style.setProperty("--contact-progress", progress.toFixed(4));
  contactScrollPanel.style.setProperty("--contact-scale", (.94 + (progress * .06)).toFixed(4));
  contactScrollPanel.style.setProperty("--contact-width", panelWidth.toFixed(2) + "px");
  contactScrollPanel.style.setProperty("--contact-height", panelHeight.toFixed(2) + "px");
  contactScrollPanel.style.setProperty("--contact-radius", (50 * (1 - shapeMorph)).toFixed(2) + "%");
  contactScrollPanel.style.setProperty("--contact-preview", preview.toFixed(4));
  contactScrollPanel.style.setProperty("--contact-surface", surface.toFixed(4));
  contactScrollPanel.style.setProperty("--contact-label", label.toFixed(4));
  contactScrollPanel.style.setProperty("--contact-label-y", ((1 - label) * 20).toFixed(2) + "px");
  contactScrollPanel.style.setProperty("--contact-title", title.toFixed(4));
  contactScrollPanel.style.setProperty("--contact-title-y", ((1 - title) * 34).toFixed(2) + "px");
  contactScrollPanel.style.setProperty("--contact-details", details.toFixed(4));
  contactScrollPanel.style.setProperty("--contact-details-y", ((1 - details) * 24).toFixed(2) + "px");
  contactScrollPanel.style.setProperty("--contact-pattern-opacity", (pattern * (isMobile ? .3 : .62)).toFixed(4));
};
const requestContactScrollUpdate = () => {
  if (contactScrollTicking) return;
  contactScrollTicking = true;
  window.requestAnimationFrame(updateContactScroll);
};
if (contactScrollSection && contactScrollPanel) {
  updateContactScroll();
  window.addEventListener("scroll", requestContactScrollUpdate, { passive: true });
  window.addEventListener("resize", requestContactScrollUpdate);
}
const projectMenuTrigger = document.querySelector("[data-project-menu-trigger]");
const projectMenu = document.querySelector("[data-project-menu]");
let projectMenuCloseTimer;
const openProjectMenu = () => {
  if (!projectMenuTrigger || !projectMenu) return;
  if (typeof closeSectorMenu === "function") closeSectorMenu();
  window.clearTimeout(projectMenuCloseTimer);
  projectMenu.classList.add("is-open");
  projectMenuTrigger.setAttribute("aria-expanded", "true");
};
const closeProjectMenu = () => {
  if (!projectMenuTrigger || !projectMenu) return;
  projectMenu.classList.remove("is-open");
  projectMenuTrigger.setAttribute("aria-expanded", "false");
};
const scheduleProjectMenuClose = () => {
  window.clearTimeout(projectMenuCloseTimer);
  projectMenuCloseTimer = window.setTimeout(closeProjectMenu, 140);
};
if (projectMenuTrigger && projectMenu) {
  projectMenuTrigger.addEventListener("click", (event) => {
    event.stopPropagation();
    projectMenu.classList.contains("is-open") ? closeProjectMenu() : openProjectMenu();
  });
  projectMenuTrigger.addEventListener("mouseenter", openProjectMenu);
  projectMenuTrigger.addEventListener("mouseleave", scheduleProjectMenuClose);
  projectMenuTrigger.addEventListener("focus", openProjectMenu);
  projectMenu.addEventListener("mouseenter", openProjectMenu);
  projectMenu.addEventListener("mouseleave", scheduleProjectMenuClose);
  projectMenu.addEventListener("focusin", openProjectMenu);
  projectMenu.addEventListener("focusout", () => {
    window.setTimeout(() => {
      if (!projectMenu.contains(document.activeElement) && document.activeElement !== projectMenuTrigger) closeProjectMenu();
    }, 0);
  });
  document.addEventListener("click", (event) => {
    if (!projectMenu.contains(event.target) && event.target !== projectMenuTrigger) closeProjectMenu();
  });
}
const sectorMenuTrigger = document.querySelector("[data-sector-menu-trigger]");
const sectorMenu = document.querySelector("[data-sector-menu]");
let sectorMenuCloseTimer;
const openSectorMenu = () => {
  if (!sectorMenuTrigger || !sectorMenu) return;
  closeProjectMenu();
  window.clearTimeout(sectorMenuCloseTimer);
  sectorMenu.classList.add("is-open");
  sectorMenuTrigger.setAttribute("aria-expanded", "true");
};
const closeSectorMenu = () => {
  if (!sectorMenuTrigger || !sectorMenu) return;
  sectorMenu.classList.remove("is-open");
  sectorMenuTrigger.setAttribute("aria-expanded", "false");
};
const scheduleSectorMenuClose = () => {
  window.clearTimeout(sectorMenuCloseTimer);
  sectorMenuCloseTimer = window.setTimeout(closeSectorMenu, 140);
};
if (sectorMenuTrigger && sectorMenu) {
  sectorMenuTrigger.addEventListener("click", (event) => {
    event.stopPropagation();
    sectorMenu.classList.contains("is-open") ? closeSectorMenu() : openSectorMenu();
  });
  sectorMenuTrigger.addEventListener("mouseenter", openSectorMenu);
  sectorMenuTrigger.addEventListener("mouseleave", scheduleSectorMenuClose);
  sectorMenuTrigger.addEventListener("focus", openSectorMenu);
  sectorMenu.addEventListener("mouseenter", openSectorMenu);
  sectorMenu.addEventListener("mouseleave", scheduleSectorMenuClose);
  sectorMenu.addEventListener("focusin", openSectorMenu);
  sectorMenu.addEventListener("focusout", () => {
    window.setTimeout(() => {
      if (!sectorMenu.contains(document.activeElement) && document.activeElement !== sectorMenuTrigger) closeSectorMenu();
    }, 0);
  });
  document.addEventListener("click", (event) => {
    if (!sectorMenu.contains(event.target) && event.target !== sectorMenuTrigger) closeSectorMenu();
  });
}
const mobileMenuToggle = document.querySelector("[data-mobile-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const mobileMenuIcon = document.querySelector("[data-mobile-menu-icon]");
const mobileAccordionTriggers = document.querySelectorAll("[data-mobile-accordion-trigger]");
const closeMobileAccordions = (exceptTrigger) => {
  mobileAccordionTriggers.forEach((trigger) => {
    if (trigger === exceptTrigger) return;
    trigger.setAttribute("aria-expanded", "false");
    const panel = document.getElementById(trigger.getAttribute("aria-controls"));
    panel?.classList.remove("is-open");
  });
};
mobileAccordionTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const panel = document.getElementById(trigger.getAttribute("aria-controls"));
    if (!panel) return;
    const shouldOpen = trigger.getAttribute("aria-expanded") !== "true";
    closeMobileAccordions(trigger);
    trigger.setAttribute("aria-expanded", String(shouldOpen));
    panel.classList.toggle("is-open", shouldOpen);
  });
});
const openMobileMenu = () => {
  if (!mobileMenuToggle || !mobileMenu) return;
  closeProjectMenu();
  closeSectorMenu();
  mobileMenu.classList.add("is-open");
  mobileMenuToggle.setAttribute("aria-expanded", "true");
  mobileMenuToggle.setAttribute("aria-label", "Menüyü kapat");
  if (mobileMenuIcon) mobileMenuIcon.textContent = "close";
  document.body.style.overflow = "hidden";
};
const closeMobileMenu = () => {
  if (!mobileMenuToggle || !mobileMenu) return;
  closeMobileAccordions();
  mobileMenu.classList.remove("is-open");
  mobileMenuToggle.setAttribute("aria-expanded", "false");
  mobileMenuToggle.setAttribute("aria-label", "Menüyü aç");
  if (mobileMenuIcon) mobileMenuIcon.textContent = "menu";
  if (!document.getElementById("search-overlay")?.classList.contains("is-open")) document.body.style.overflow = "";
};
if (mobileMenuToggle && mobileMenu) {
  mobileMenuToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    mobileMenu.classList.contains("is-open") ? closeMobileMenu() : openMobileMenu();
  });
  mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));
  document.addEventListener("click", (event) => {
    if (!mobileMenu.contains(event.target) && event.target !== mobileMenuToggle) closeMobileMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeMobileMenu();
  });
}
const searchOverlay = document.getElementById("search-overlay");
const searchInput = document.getElementById("site-search-input");
const searchResults = document.getElementById("site-search-results");
const searchEmpty = document.getElementById("site-search-empty");
const normalizeSearch = (value) => value.toLocaleLowerCase("tr-TR");
const renderSearchResults = (query) => {
  const cleanQuery = normalizeSearch(query.trim());
  searchResults.innerHTML = "";
  if (cleanQuery.length < 2) {
    searchEmpty.textContent = "Aramak için en az iki karakter yazın.";
    return;
  }
  const results = searchIndex
    .map((item) => {
      const haystack = normalizeSearch([item.title, item.type, item.category, item.excerpt].join(" "));
      const score = haystack.includes(cleanQuery) ? (normalizeSearch(item.title).includes(cleanQuery) ? 2 : 1) : 0;
      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, "tr-TR"))
    .slice(0, 12);
  if (!results.length) {
    searchEmpty.textContent = "Sonuç bulunamadı.";
    return;
  }
  searchEmpty.textContent = "";
  searchResults.innerHTML = results.map((item) => \`<a class="search-result" href="\${item.url}"><small>\${item.type} · \${item.category}</small><strong>\${item.title}</strong><p>\${item.excerpt.slice(0, 180)}\${item.excerpt.length > 180 ? "..." : ""}</p></a>\`).join("");
};
document.querySelectorAll("[data-search-open]").forEach((button) => {
  button.addEventListener("click", () => {
    closeMobileMenu();
    searchOverlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    window.setTimeout(() => searchInput.focus(), 40);
  });
});
document.querySelectorAll("[data-search-close]").forEach((button) => {
  button.addEventListener("click", () => {
    searchOverlay.classList.remove("is-open");
    document.body.style.overflow = "";
  });
});
if (searchInput) searchInput.addEventListener("input", (event) => renderSearchResults(event.target.value));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileMenu?.classList.contains("is-open")) {
    closeMobileMenu();
    mobileMenuToggle?.focus();
  }
  if (event.key === "Escape" && sectorMenu?.classList.contains("is-open")) {
    closeSectorMenu();
    sectorMenuTrigger?.focus();
  }
  if (event.key === "Escape" && projectMenu?.classList.contains("is-open")) {
    closeProjectMenu();
    projectMenuTrigger?.focus();
  }
  if (event.key === "Escape" && searchOverlay?.classList.contains("is-open")) {
    searchOverlay.classList.remove("is-open");
    document.body.style.overflow = "";
  }
});
document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    document.querySelectorAll("[data-category]").forEach((card) => {
      card.style.display = value === "all" || card.dataset.category === value ? "" : "none";
    });
  });
});
document.querySelectorAll("[data-project-carousel]").forEach((carousel) => {
  const track = carousel.querySelector("[data-project-carousel-track]");
  let autoDirection = 1;
  let dragging = false;
  let dragStartX = 0;
  let dragStartScroll = 0;
  let draggedDistance = 0;
  let pauseUntil = 0;
  let previousFrame = performance.now();
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const pauseAutoScroll = (duration = 1800) => {
    pauseUntil = performance.now() + duration;
  };

  const autoScroll = (now) => {
    const elapsed = Math.min(now - previousFrame, 50);
    previousFrame = now;
    if (!reducedMotion && !dragging && now > pauseUntil && document.visibilityState === "visible") {
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll > 1) {
        track.scrollLeft += autoDirection * elapsed * .025;
        if (track.scrollLeft >= maxScroll - 1) autoDirection = -1;
        if (track.scrollLeft <= 1) autoDirection = 1;
      }
    }
    window.requestAnimationFrame(autoScroll);
  };
  window.requestAnimationFrame(autoScroll);

  track.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    dragging = true;
    draggedDistance = 0;
    dragStartX = event.clientX;
    dragStartScroll = track.scrollLeft;
    track.classList.add("is-dragging");
    track.setPointerCapture(event.pointerId);
  });
  track.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const distance = event.clientX - dragStartX;
    draggedDistance = Math.max(draggedDistance, Math.abs(distance));
    track.scrollLeft = dragStartScroll - distance;
    if (draggedDistance > 4) event.preventDefault();
  });
  const finishDrag = (event) => {
    if (!dragging) return;
    dragging = false;
    pauseAutoScroll();
    track.classList.remove("is-dragging");
    if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
  };
  track.addEventListener("pointerup", finishDrag);
  track.addEventListener("pointercancel", finishDrag);
  track.addEventListener("click", (event) => {
    if (draggedDistance > 4) {
      event.preventDefault();
      event.stopPropagation();
      draggedDistance = 0;
    }
  }, true);
  track.addEventListener("wheel", () => pauseAutoScroll(), { passive: true });
  track.addEventListener("touchstart", () => pauseAutoScroll(), { passive: true });
  carousel.querySelectorAll("[data-carousel-direction]").forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.carouselDirection === "next" ? 1 : -1;
      autoDirection = direction;
      pauseAutoScroll(1400);
      track.scrollBy({ left: direction * Math.max(track.clientWidth * .82, 320), behavior: "smooth" });
    });
  });
});
const contactForm = document.querySelector("[data-contact-form]");
if (contactForm) {
  const contactFormStatus = contactForm.querySelector("[data-form-status]");
  const contactFormButton = contactForm.querySelector('button[type="submit"]');
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    contactFormStatus.className = "contact-form-status";
    contactFormStatus.textContent = "Mesajınız gönderiliyor...";
    contactFormButton.disabled = true;
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(contactForm).entries())),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.");
      contactFormStatus.classList.add("is-success");
      contactFormStatus.textContent = "Mesajınız alındı. En kısa sürede sizinle iletişime geçeceğiz.";
      contactForm.reset();
    } catch (error) {
      contactFormStatus.classList.add("is-error");
      contactFormStatus.textContent = error.message;
    } finally {
      contactFormButton.disabled = false;
    }
  });
}
</script>`;
}

function layout({ title, description, active, body }) {
  return `${head({ title, description })}
<body>
${notice()}
${header(active)}
${searchOverlay()}
${body}
${footer()}
<a class="button" style="position:fixed;right:28px;bottom:28px;z-index:40;padding:16px;border-radius:18px" href="#top" aria-label="Yukarı çık">↑</a>
${scripts()}
</body>
</html>`;
}

function projectCard(project) {
  return `<article class="card" data-category="${project.categorySlug}">
<span class="tag">${escapeHtml(project.category)}</span>
<h3>${escapeHtml(project.title)}</h3>
<p>${escapeHtml(project.card)}</p>
<a class="link" href="${project.url}">Projeyi İncele →</a>
</article>`;
}

function sectorPanel(title, type, slug) {
  const illustrations = {
    gas: `<svg viewBox="0 0 440 570" role="img" aria-label="Doğalgaz depolama ve boru hattı çizimi">
<g fill="none" stroke="#2459ee" stroke-width="2">
<path fill="#dce6ff" d="M0 360h440v210H0z"/><path fill="#afc3f4" d="M0 450h440v120H0z"/>
<path d="M0 360h150c42 0 60 46 112 46h178"/><path stroke-width="22" stroke="#8ea9ea" d="M0 414h175c39 0 52-42 93-42h172"/>
<rect x="45" y="92" width="112" height="198" rx="22" fill="#cad7f5"/><rect x="157" y="150" width="55" height="140" rx="14" fill="#91abe8"/>
<path d="M76 92V72m50 20V72M72 130h88M72 168h88M72 206h88M72 244h88"/>
<path fill="#cad7f5" d="M264 119h55l15 138h-85z"/><path d="M268 151h61m-65 35h68m-72 36h76"/>
<ellipse cx="291" cy="276" rx="49" ry="24" fill="#fff"/><path d="M255 297v63m72-63v63m-91 0h111"/>
<path d="M350 78c0-18 14-32 32-32s32 14 32 32-14 32-32 32h-58c-13 0-24-11-24-24s11-24 24-24c8 0 15 4 20 10 2-17 17-30 35-30"/>
<circle cx="94" cy="474" r="36" fill="#fff"/><path d="M94 474l17-16m-17 16l-12-22"/><circle cx="94" cy="474" r="4" fill="#2459ee"/>
<path d="M258 485h182M282 485v50m54-50v50m54-50v50"/>
</g></svg>`,
    petrochemical: `<svg viewBox="0 0 440 570" role="img" aria-label="Petrokimya rafinerisi çizimi">
<g fill="none" stroke="#2459ee" stroke-width="2">
<path fill="#e7edff" d="M0 365h440v205H0z"/><path fill="#b5c7f2" d="M0 455h440v115H0z"/>
<path d="M0 365h440M0 455h440"/>
<path fill="#cad7f5" d="M35 188h92v177H35z"/><path d="M35 225h92m-92 42h92m-92 42h92"/>
<path fill="#fff" d="M58 188V92h46v96z"/><path d="M58 120h46m-46 30h46"/>
<path fill="#91abe8" d="M158 128h48l13 237h-74z"/><path d="M153 174h59m-62 48h65m-68 48h71m-74 48h77"/>
<path fill="#fff" d="M258 80h42v285h-42z"/><path d="M258 115h42m-42 40h42m-42 40h42m-42 40h42"/>
<path fill="#cad7f5" d="M336 215h79v150h-79z"/><path d="M347 244h19v19h-19zm38 0h19v19h-19zM336 314h79m-79 18h79"/>
<path stroke-width="20" stroke="#8ea9ea" d="M0 411h300c30 0 30-40 60-40h80"/><path d="M0 411h300c30 0 30-40 60-40h80"/>
<circle cx="82" cy="488" r="48" fill="#fff"/><path d="M82 440v96M34 488h96M48 456l68 64M48 520l68-64"/>
<path d="M190 496h220M210 496v52m58-52v52m58-52v52m58-52v52"/>
</g></svg>`,
    renewable: `<svg viewBox="0 0 440 570" role="img" aria-label="Rüzgâr ve güneş enerjisi çizimi">
<g fill="none" stroke="#2459ee" stroke-width="2">
<path fill="#edf2ff" d="M0 385c70-46 122-20 180-58 76-49 138-5 260-58v301H0z"/><path fill="#b6c8f3" d="M0 470c75-38 141-4 211-42 83-45 142 1 229-37v179H0z"/>
<path d="M0 385c70-46 122-20 180-58 76-49 138-5 260-58"/>
<path d="M112 318V116m0 0l-63 37m63-37l58 45m-58-45l8-74"/><circle cx="112" cy="116" r="9" fill="#fff"/>
<path d="M286 292V120m0 0l-56 33m56-33l55 38m-55-38l5-68"/><circle cx="286" cy="120" r="8" fill="#fff"/>
<path fill="#cad7f5" d="M35 350l133-23 24 78-139 25z"/><path d="M68 344l22 78m15-84l22 78m15-84l22 78M44 377l138-24m-131 49l138-24"/>
<path d="M52 430v40m136-65v65M25 470h190"/>
<rect x="270" y="335" width="124" height="94" rx="12" fill="#fff"/><path d="M287 354h90v56h-90zM305 335v-20h54v20"/>
<path stroke-width="14" stroke="#8ea9ea" d="M0 500h440"/><path d="M0 500h440M330 429v71"/>
<path d="M350 70c0-14 12-26 26-26s26 12 26 26-12 26-26 26h-62c-11 0-20-9-20-20s9-20 20-20c7 0 13 3 17 8 3-15 15-26 30-26"/>
</g></svg>`,
  };
  return `<a class="sector-panel sector-panel-${type}" href="/sektorler/${slug}/" aria-label="${escapeHtml(title)} sektör sayfasını aç"><div class="sector-panel-label">${escapeHtml(title)}</div></a>`;
}

function contactScrollReveal() {
  return `<section class="contact-scroll-reveal" id="iletisim" data-contact-scroll aria-labelledby="contact-title">
<div class="contact-sticky">
<div class="contact-panel" data-contact-panel>
<div class="contact-circle-surface" aria-hidden="true"></div>
<div class="contact-pattern" aria-hidden="true"></div>
<div class="contact-preview" aria-hidden="true"><small>İletişim</small><strong>AKYA Energy</strong><span>Ankara · info@akya.net</span></div>
<div class="contact-content">
<div class="contact-intro">
<span class="eyebrow">İletişim</span>
<h2 class="contact-title" id="contact-title">AKYA Energy ile iletişime geçin</h2>
<p class="contact-description">Doğalgaz, petrokimya ve yenilenebilir enerji alanlarındaki proje hedeflerinizi, mevcut altyapınızı ve teknik ihtiyaçlarınızı birlikte değerlendirelim.</p>
<div class="contact-actions"><a class="button" href="mailto:info@akya.net">Teknik Görüşme Planla</a></div>
</div>
<address class="contact-details-list" aria-label="AKYA Energy iletişim bilgileri">
<div class="contact-info-item"><span class="contact-info-label">Lokasyon</span><a class="contact-info-value" href="https://www.google.com/maps/search/?api=1&amp;query=1552.+Sokak+Çiğdem+Mahallesi+No%3A1+Kat%3A4+Çankaya+Ankara" target="_blank" rel="noopener noreferrer">1552. Sokak, Çiğdem Mahallesi, No:1, Kat:4, Çankaya, Ankara, Türkiye</a></div>
<div class="contact-info-item"><span class="contact-info-label">Mail</span><a class="contact-info-value" href="mailto:info@akya.net">info@akya.net</a></div>
<div class="contact-info-item"><span class="contact-info-label">Telefon</span><a class="contact-info-value" href="tel:+903125112222">0312 511 22 22</a></div>
</address>
</div>
</div>
</div>
</section>`;
}

function homePage() {
  return layout({
    title: "Akya Energy | Enerji Teknolojileri ve Ar-Ge Projeleri",
    description: "AKYA Energy; enerji altyapıları, çevresel teknolojiler, sensör sistemleri ve endüstriyel yazılım alanlarında Ar-Ge projeleri geliştirir.",
    active: "home",
    body: `<main id="top">
<section class="hero home-hero">
<div class="container">
<span class="eyebrow">Enerji Teknolojileri ve Ar-Ge</span>
<h1>Enerjinin geleceğini araştırıyor, bugünden geliştiriyoruz</h1>
<p class="lead">AKYA Energy; enerji altyapıları, çevresel teknolojiler, sensör sistemleri ve endüstriyel yazılım alanlarında ürün odaklı Ar-Ge projeleri geliştirir. Trafo izleme kartlarından DCIM SCADA modüllerine, atıksu analizörlerinden fiber optik sensörlere kadar her proje; ölçülebilir veri, güvenilir işletme ve sürdürülebilir proses yönetimi hedefiyle ele alınır.</p>
<div class="button-row"><a class="button" href="/projeler/">Projeleri İncele</a><a class="button secondary" href="/teknoloji-alanlari/">Teknoloji Alanları</a></div>
</div>
</section>
<section class="section alt project-carousel-section" data-project-carousel>
<div class="container">
<div class="project-carousel-head"><h2>Projeler</h2><div class="project-carousel-controls" aria-label="Proje kaydırma kontrolleri"><button class="project-carousel-button" type="button" data-carousel-direction="previous" aria-label="Önceki projeler"><span class="material-symbols-outlined" aria-hidden="true">arrow_back</span></button><button class="project-carousel-button" type="button" data-carousel-direction="next" aria-label="Sonraki projeler"><span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></button></div></div>
<div class="project-carousel-track" data-project-carousel-track>${projects.map(projectCard).join("")}</div>
<div class="button-row"><a class="button" href="/projeler/">Tüm Projeler</a></div>
</div>
</section>
<section id="sektorler" aria-label="Sektörler">
<div class="sector-showcase">
${sectorPanel("Doğalgaz", "gas", "dogalgaz")}
${sectorPanel("Petrokimya", "petrochemical", "petrokimya")}
${sectorPanel("Yenilenebilir Enerji", "renewable", "yenilenebilir-enerji")}
</div>
</section>
<section class="section alt" id="brand"><div class="container"><div class="cta"><h2>Projenizi birlikte teknik gereksinimlere dönüştürelim.</h2><p>Ar-Ge ihtiyacınızı, teknik probleminizi veya proje hedefinizi paylaşın; uygulanabilir bir çalışma planı oluşturalım.</p><div class="button-row"><a class="button" href="mailto:info@akyaenergy.com">Teknik Görüşme Planla</a></div></div></div></section>
${contactScrollReveal()}
</main>`,
  });
}

function projectsPage() {
  return layout({
    title: "Projeler | AKYA Energy",
    description: "AKYA Energy proje portföyü; enerji, çevre, sensör, otomasyon ve yapay zeka destekli kritik tesis yönetimi çalışmalarını listeler.",
    active: "projects",
    body: `<main id="top">
<section class="hero"><div class="container"><span class="eyebrow">Projeler</span><h1>Teknoloji odaklı proje ve ürün geliştirme çalışmaları</h1><p class="lead">Enerji, çevre, sensör ve yazılım disiplinlerini bir araya getiren AKYA Energy projeleri; saha ihtiyacını ölçülebilir teknolojiye dönüştürmek için geliştirilir. Aşağıdaki projeler, Ar-Ge'den pilot uygulamaya uzanan mühendislik yaklaşımımızı temsil eder.</p></div></section>
<section class="section alt projects-list-section"><div class="container">
<div class="filter-bar"><button class="filter-button is-active" data-filter="all">Tümü</button>${categories.map((category) => `<button class="filter-button" data-filter="${category.slug}">${escapeHtml(category.title)}</button>`).join("")}</div>
<div class="grid three">${projects.map(projectCard).join("")}</div>
</div></section>
</main>`,
  });
}

function technologyIndexPage() {
  return layout({
    title: "Teknoloji Alanları | AKYA Energy",
    description: "AKYA Energy teknoloji alanları; akıllı enerji, çevresel teknolojiler, ileri sensörler, yapay zeka ve otonom sistemleri kapsar.",
    active: "technology",
    body: `<main id="top">
<section class="hero"><div class="container"><span class="eyebrow">Teknoloji Alanları</span><h1>Projeleri sektörlerden bağımsız teknoloji alanlarıyla sınıflandırıyoruz</h1><p class="lead">Mevcut sektör odağı korunurken, Ar-Ge çalışmaları teknik kabiliyet ve ürün geliştirme mantığıyla gruplanır.</p></div></section>
<section class="section alt"><div class="container"><div class="grid two">${categories.map((category) => {
      const count = projects.filter((project) => project.categorySlug === category.slug).length;
      return `<article class="card"><span class="tag">${count} proje</span><h3>${escapeHtml(category.title)}</h3><p>${escapeHtml(category.text)}</p><a class="link" href="/teknoloji-alanlari/${category.slug}/">Alanı İncele →</a></article>`;
    }).join("")}</div></div></section>
</main>`,
  });
}

function sectorPage(sector) {
  return layout({
    title: `${sector.title} Ar-Ge Çözümleri | AKYA Energy`,
    description: `${sector.tagline} AKYA Energy ${sector.title.toLocaleLowerCase("tr-TR")} sektörüne yönelik Ar-Ge ve mühendislik çözümleri geliştirir.`,
    active: "sectors",
    body: `<main id="top">
<section class="hero sector-detail-hero"><div class="container">
<div><span class="eyebrow">Sektörler / ${escapeHtml(sector.title)}</span><h1>${escapeHtml(sector.title)} için teknoloji ve Ar-Ge çözümleri</h1><p class="lead">${escapeHtml(sector.tagline)}</p><div class="button-row"><a class="button" href="mailto:info@akyaenergy.com">Teknik Görüşme Planla</a><a class="button secondary" href="/projeler/">Projeleri İncele</a></div></div>
<div class="sector-detail-image" style="background-image:url('${sector.image}')" role="img" aria-label="${escapeHtml(sector.title)} sektör görseli"></div>
</div></section>
<section class="section"><div class="container"><div class="section-heading"><span class="eyebrow">Yaklaşımımız</span><h2>Saha ihtiyacını uygulanabilir teknolojiye dönüştürüyoruz</h2></div><p class="sector-overview">${escapeHtml(sector.overview)}</p></div></section>
<section class="section alt"><div class="container"><div class="section-heading"><span class="eyebrow">Odak Alanları</span><h2>${escapeHtml(sector.title)} sektöründeki çalışma başlıklarımız</h2></div><div class="grid two">${sector.focus.map((item) => `<article class="card"><span class="tag">Ar-Ge Odağı</span><h3>${escapeHtml(item)}</h3><p>İhtiyaca özel ölçüm, doğrulama, prototipleme ve saha entegrasyonu yaklaşımıyla ele alınır.</p></article>`).join("")}</div></div></section>
<section class="section"><div class="container project-layout"><div><div class="section-heading"><span class="eyebrow">Uygulama Alanları</span><h2>Teknolojinin sahaya temas ettiği noktalar</h2></div><div class="content-block"><ul class="list">${sector.applications.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div></div><div class="cta"><h2>Birlikte geliştirelim</h2><p>${escapeHtml(sector.title)} alanındaki teknik ihtiyacınızı paylaşın; Ar-Ge kapsamını ve uygulanabilir yol haritasını birlikte oluşturalım.</p><div class="button-row"><a class="button" href="mailto:info@akyaenergy.com">İletişime Geç</a></div></div></div></section>
</main>`,
  });
}

function sectorsIndexPage() {
  return layout({
    title: "Sektörler | AKYA Energy",
    description: "AKYA Energy doğalgaz, petrokimya ve yenilenebilir enerji sektörlerine yönelik Ar-Ge ve teknoloji çözümleri geliştirir.",
    active: "sectors",
    body: `<main id="top">
<section class="hero"><div class="container"><span class="eyebrow">Sektörler</span><h1>Enerji sektörlerine yönelik teknoloji ve Ar-Ge çözümleri</h1><p class="lead">Doğalgaz, petrokimya ve yenilenebilir enerji alanlarında ölçülebilir, güvenilir ve uygulanabilir mühendislik çözümleri geliştiriyoruz.</p></div></section>
<section aria-label="Sektörler">
<div class="sector-showcase">
${sectorPanel("Doğalgaz", "gas", "dogalgaz")}
${sectorPanel("Petrokimya", "petrochemical", "petrokimya")}
${sectorPanel("Yenilenebilir Enerji", "renewable", "yenilenebilir-enerji")}
</div>
</section>
</main>`,
  });
}

function categoryPage(category) {
  const categoryProjects = projects.filter((project) => project.categorySlug === category.slug);
  return layout({
    title: `${category.title} | AKYA Energy`,
    description: category.text,
    active: "technology",
    body: `<main id="top">
<section class="hero"><div class="container"><span class="eyebrow">Teknoloji Alanı</span><h1>${escapeHtml(category.title)}</h1><p class="lead">${escapeHtml(category.text)}</p><div class="button-row"><a class="button" href="/projeler/">Projeleri İncele</a><a class="button secondary" href="mailto:info@akyaenergy.com">İletişime Geç</a></div></div></section>
<section class="section alt"><div class="container"><div class="section-heading"><span class="eyebrow">Bu alandaki projeler</span><h2>Projenizi birlikte teknik gereksinimlere dönüştürelim.</h2></div><div class="grid three">${categoryProjects.map(projectCard).join("")}</div></div></section>
</main>`,
  });
}

function projectPage(project) {
  const related = projects.filter((item) => item.category === project.category && item.slug !== project.slug).slice(0, 3);
  return layout({
    title: project.seoTitle,
    description: project.seoDescription,
    active: "projects",
    body: `<main id="top">
<section class="hero"><div class="container"><span class="eyebrow">${escapeHtml(project.category)}</span><h1>${escapeHtml(project.hero)}</h1><p class="lead">${escapeHtml(project.tagline)}</p><div class="button-row"><a class="button" href="mailto:info@akyaenergy.com">Teknik Görüşme Planla</a><a class="button secondary" href="/projeler/">Tüm Projeler</a></div></div></section>
<section class="section alt"><div class="container project-layout">
<div>
<article class="content-block"><h2>Genel açıklama</h2><p>${escapeHtml(project.overview)}</p></article>
<article class="content-block"><h2>Problem / ihtiyaç</h2><p>${escapeHtml(project.challenge)}</p></article>
<article class="content-block"><h2>Çözüm yaklaşımı</h2><p>${escapeHtml(project.solution)}</p></article>
</div>
<aside>
<div class="placeholder"><span>${escapeHtml(project.title)} için görsel alanı</span></div>
<article class="content-block"><h2 style="font-size:26px">Teknik kabiliyetler</h2><ul class="list">${project.capabilities.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></article>
<article class="content-block"><h2 style="font-size:26px">Uygulama alanları</h2><ul class="list">${project.useCases.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></article>
</aside>
</div></section>
<section class="section"><div class="container"><div class="cta"><h2>Bu proje için teknik görüşme planlayın.</h2><p>${escapeHtml(project.cta)}</p><div class="button-row"><a class="button" href="mailto:info@akyaenergy.com">İletişime Geç</a></div></div></div></section>
${related.length ? `<section class="section alt"><div class="container"><div class="section-heading"><span class="eyebrow">İlgili projeler</span><h2>Aynı teknoloji alanındaki çalışmalar</h2></div><div class="grid three">${related.map(projectCard).join("")}</div></div></section>` : ""}
</main>`,
  });
}

function contactPage() {
  return layout({
    title: "İletişim | AKYA Energy",
    description: "AKYA Energy iletişim bilgileri ve proje görüşme formu.",
    active: "contact",
    body: `<main id="top">
<section class="contact-page">
<div class="container">
<div class="contact-page-heading"><span class="eyebrow">İletişim</span><h1>Projenizi birlikte değerlendirelim</h1><p>Enerji teknolojileri, Ar-Ge çalışmaları ve iş birliği talepleriniz için bize ulaşın.</p></div>
<div class="contact-page-grid">
<aside class="contact-page-info" aria-labelledby="contact-info-title">
<h2 id="contact-info-title">İletişim Bilgileri</h2>
<address>
<div class="contact-info-item"><span class="contact-info-label">Lokasyon</span><a class="contact-info-value" href="https://www.google.com/maps/search/?api=1&amp;query=1552.+Sokak+Çiğdem+Mahallesi+No%3A1+Kat%3A4+Çankaya+Ankara" target="_blank" rel="noopener noreferrer">1552. Sokak, Çiğdem Mahallesi, No:1, Kat:4, Çankaya, Ankara, Türkiye</a></div>
<div class="contact-info-item"><span class="contact-info-label">Mail</span><a class="contact-info-value" href="mailto:info@akya.net">info@akya.net</a></div>
<div class="contact-info-item"><span class="contact-info-label">Telefon</span><a class="contact-info-value" href="tel:+903125112222">0312 511 22 22</a></div>
</address>
</aside>
<form class="contact-form" data-contact-form>
<div class="contact-form-grid">
<div class="form-field full"><label for="contact-help">Nasıl yardımcı olabiliriz?*</label><select id="contact-help" name="helpType" required><option value="Bir projem var">Bir projem var</option><option value="Ar-Ge iş birliği">Ar-Ge iş birliği</option><option value="Teknik bilgi talebi">Teknik bilgi talebi</option><option value="Diğer">Diğer</option></select></div>
<div class="form-field"><label for="contact-name">Ad*</label><input id="contact-name" name="firstName" type="text" autocomplete="given-name" maxlength="80" required></div>
<div class="form-field"><label for="contact-surname">Soyad*</label><input id="contact-surname" name="lastName" type="text" autocomplete="family-name" maxlength="80" required></div>
<div class="form-field"><label for="contact-email">E-posta*</label><input id="contact-email" name="email" type="email" autocomplete="email" maxlength="160" required></div>
<div class="form-field"><label for="contact-phone">Telefon</label><input id="contact-phone" name="phone" type="tel" autocomplete="tel" maxlength="30"></div>
<div class="form-field full"><label for="contact-message">Mesaj*</label><textarea id="contact-message" name="message" maxlength="5000" required></textarea></div>
<div class="form-field form-honeypot" aria-hidden="true"><label for="contact-website">Web sitesi</label><input id="contact-website" name="website" type="text" tabindex="-1" autocomplete="off"></div>
<label class="form-consent"><input name="consent" type="checkbox" value="accepted" required><span>Paylaştığım bilgilerin iletişim talebimin yanıtlanması amacıyla işlenmesini kabul ediyorum.</span></label>
<div class="contact-form-footer"><button class="button" type="submit">Mesaj Gönder</button><p class="contact-form-status" data-form-status role="status" aria-live="polite"></p></div>
</div>
</form>
</div>
</div>
</section>
</main>`,
  });
}

function writePage(path, html) {
  const fullPath = join(root, path);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(fullPath, html, "utf8");
}

function resetGeneratedDirectories() {
  for (const dir of ["projeler", "teknoloji-alanlari", "sektorler", "iletisim"]) {
    rmSync(join(root, dir), { recursive: true, force: true });
  }
}

resetGeneratedDirectories();
writePage("index.html", homePage());
writePage("akyaenergy2.html", homePage());
writePage("projeler/index.html", projectsPage());
writePage("teknoloji-alanlari/index.html", technologyIndexPage());
writePage("iletisim/index.html", contactPage());
writePage("sektorler/index.html", sectorsIndexPage());

for (const category of categories) {
  writePage(`teknoloji-alanlari/${category.slug}/index.html`, categoryPage(category));
}

for (const sector of sectors) {
  writePage(`sektorler/${sector.slug}/index.html`, sectorPage(sector));
}

for (const project of projects) {
  writePage(`projeler/${project.slug}/index.html`, projectPage(project));
}

writePage("src/projects-data.json", JSON.stringify({ categories, projects }, null, 2));

console.log(`Generated ${projects.length} project pages, ${categories.length} technology area pages and ${sectors.length} sector pages.`);
