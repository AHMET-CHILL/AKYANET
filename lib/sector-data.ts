// SectorLink tipi, sektör mega menüsündeki bağlantıların etiket ve rota bilgisini tanımlar.
export type SectorLink = {
  label: string;
  href: string;
};

// SectorMenuGroup tipi, sektör mega menüsünün üç ana kolonunu tanımlar.
export type SectorMenuGroup = {
  title: string;
  items: SectorLink[];
};

// SectorPage tipi, sektör liste ve detay sayfalarında kullanılan ortak içerik modelidir.
export type SectorPage = {
  slug: string;
  title: string;
  group: string;
  description: string;
  introduction: string;
  image: string;
  solutions: string[];
};

// sectorMenuGroups, masaüstü ve mobil sektör menülerini aynı veri kaynağından besler.
export const sectorMenuGroups: SectorMenuGroup[] = [
  {
    title: "Kritik Altyapılar",
    items: [
      { label: "Veri Merkezleri", href: "/sektorler/veri-merkezleri" },
      { label: "Kamu ve Kritik Altyapılar", href: "/sektorler/kamu-ve-kritik-altyapilar" },
      { label: "Teknoloji Operasyonları", href: "/sektorler/teknoloji-operasyonlari" },
    ],
  },
  {
    title: "Yapılar ve Tesisler",
    items: [
      { label: "Endüstriyel Tesisler", href: "/sektorler/endustriyel-tesisler" },
      { label: "Ticari Yapılar", href: "/sektorler/ticari-yapilar" },
      { label: "Akıllı Binalar / Kurumsal Kampüsler", href: "/sektorler/akilli-binalar-kurumsal-kampusler" },
    ],
  },
  {
    title: "Sürdürülebilirlik Odaklı Alanlar",
    items: [
      { label: "Enerji ve Sürdürülebilirlik", href: "/sektorler/enerji-ve-surdurulebilirlik" },
      { label: "Karbon ve Su Yönetimi", href: "/sektorler/karbon-ve-su-yonetimi" },
    ],
  },
];

// sectorPages, sektör kartları ile detay sayfalarının başlık, açıklama ve çözüm ilişkilerini tanımlar.
export const sectorPages: SectorPage[] = [
  {
    slug: "veri-merkezleri",
    title: "Veri Merkezleri",
    group: "Kritik Altyapılar",
    description:
      "Kesintisiz operasyon gerektiren veri merkezleri için güç, soğutma, izleme, zayıf akım ve sürdürülebilirlik odaklı mühendislik yaklaşımı.",
    introduction:
      "Veri merkezi operasyonlarında kapasite, enerji, soğutma ve fiziksel altyapı kararlarını aynı mühendislik çerçevesinde değerlendirerek güvenilir ve izlenebilir sistemler kurarız.",
    image: "/hero-data-center.jpg",
    solutions: ["veri-merkezi", "dcim-yazilimlari", "zayif-akim-sistemleri", "termal-testler", "basinc-testleri", "poe-analizleri", "karbon-analizi"],
  },
  {
    slug: "kamu-ve-kritik-altyapilar",
    title: "Kamu ve Kritik Altyapılar",
    group: "Kritik Altyapılar",
    description:
      "Yüksek güvenilirlik ve süreklilik gerektiren kamu, savunma, iletişim ve kritik operasyon alanları için mühendislik hizmetleri.",
    introduction:
      "Kritik hizmetlerin kesintisiz sürdürülebilmesi için güvenlik, haberleşme, çevresel koşullar ve operasyonel görünürlüğü bütünleşik biçimde ele alırız.",
    image: "/hero-pressure-tests-v2.png",
    solutions: ["veri-merkezi", "zayif-akim-sistemleri", "dcim-yazilimlari", "termal-testler", "basinc-testleri"],
  },
  {
    slug: "teknoloji-operasyonlari",
    title: "Teknoloji Operasyonları",
    group: "Kritik Altyapılar",
    description:
      "BT, ağ, izleme, DCIM ve operasyonel veri yönetimi süreçleri için dijital altyapı ve görünürlük çözümleri.",
    introduction:
      "Teknoloji ekiplerinin varlık, kapasite, alarm ve performans verilerini ortak bir yönetim katmanında izlemesini sağlayan ölçeklenebilir altyapılar tasarlarız.",
    image: "/hero-poe-analysis.png",
    solutions: ["dcim-yazilimlari", "poe-analizleri", "zayif-akim-sistemleri", "veri-merkezi"],
  },
  {
    slug: "endustriyel-tesisler",
    title: "Endüstriyel Tesisler",
    group: "Yapılar ve Tesisler",
    description:
      "Üretim sürekliliği, güvenlik, enerji verimliliği ve saha izlenebilirliği için teknik analiz, test ve altyapı çözümleri.",
    introduction:
      "Üretim alanlarında altyapı güvenilirliğini, ekipman koşullarını ve kaynak kullanımını ölçerek operasyonel riskleri azaltan mühendislik çalışmaları yürütürüz.",
    image: "/hero-thermal-tests.jpg",
    solutions: ["zayif-akim-sistemleri", "termal-testler", "basinc-testleri", "poe-analizleri", "karbon-analizi", "su-analizi"],
  },
  {
    slug: "ticari-yapilar",
    title: "Ticari Yapılar",
    group: "Yapılar ve Tesisler",
    description:
      "Ofis, kampüs ve ticari yapılarda güvenlik, otomasyon, zayıf akım ve sürdürülebilirlik performansını artıran çözümler.",
    introduction:
      "Kullanıcı yoğunluğu yüksek yapılarda güvenlik, haberleşme, erişim ve kaynak yönetimini işletme kolaylığı sağlayacak ortak bir altyapıda planlarız.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
    solutions: ["zayif-akim-sistemleri", "dcim-yazilimlari", "karbon-analizi", "su-analizi"],
  },
  {
    slug: "akilli-binalar-kurumsal-kampusler",
    title: "Akıllı Binalar ve Kurumsal Kampüsler",
    group: "Yapılar ve Tesisler",
    description:
      "Dağıtık bina sistemlerinde güvenlik, ağ, merkezi izleme ve kaynak verimliliğini birlikte yöneten dijital altyapılar.",
    introduction:
      "Kampüs ve çoklu bina yapılarında cihaz, sensör, güvenlik ve tüketim verilerini izlenebilir hale getirerek merkezi operasyon kabiliyeti oluştururuz.",
    image: "/hero-low-current.jpg",
    solutions: ["zayif-akim-sistemleri", "dcim-yazilimlari", "poe-analizleri", "karbon-analizi", "su-analizi"],
  },
  {
    slug: "enerji-ve-surdurulebilirlik",
    title: "Enerji ve Sürdürülebilirlik",
    group: "Sürdürülebilirlik Odaklı Alanlar",
    description:
      "Karbon, su, enerji tüketimi ve çevresel performans göstergelerini ölçülebilir hale getiren analiz çözümleri.",
    introduction:
      "Enerji ve kaynak tüketimini tesis performansıyla ilişkilendirerek ölçülebilir azaltım hedefleri ve uygulanabilir optimizasyon yol haritaları hazırlarız.",
    image: "/hero-carbon-analysis.png",
    solutions: ["karbon-analizi", "su-analizi", "dcim-yazilimlari", "termal-testler"],
  },
  {
    slug: "karbon-ve-su-yonetimi",
    title: "Karbon ve Su Yönetimi",
    group: "Sürdürülebilirlik Odaklı Alanlar",
    description:
      "Emisyon ve su tüketim verilerini tesis operasyonlarıyla ilişkilendirerek azaltım, tasarruf ve geri kazanım fırsatlarını belirleyen yaklaşım.",
    introduction:
      "Karbon ve su verilerini raporlama sınırlarının ötesine taşıyarak ekipman, proses ve işletme davranışları üzerinden somut iyileştirme kararları üretiriz.",
    image: "/hero-water-analysis.png",
    solutions: ["karbon-analizi", "su-analizi", "dcim-yazilimlari"],
  },
];

// findSectorBySlug, dinamik detay rotası için ilgili sektör içeriğini bulur.
export function findSectorBySlug(slug: string) {
  return sectorPages.find((sector) => sector.slug === slug);
}
