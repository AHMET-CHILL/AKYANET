// ProjectStatus, projelerin teslim durumuna göre kullanılabilen iki kategoriyi tanımlar.
export type ProjectStatus = "tamamlanan" | "devam-eden";

// Project, proje kartları, detay sayfaları ve mega menü için ortak veri modelidir.
export type Project = {
  slug: string;
  status: ProjectStatus;
  statusLabel: string;
  title: string;
  heroTitle: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  logo: string;
  tags: string[];
  scope: string[];
  overview: {
    label: string;
    value: string;
  }[];
  approach: string[];
  values: string[];
  seoDescription: string;
  imageSourceNote: string;
};

// projects, projeler bölümündeki bütün liste, menü ve detay içeriklerinin tek kaynağıdır.
export const projects: Project[] = [
  {
    slug: "ptt-genel-merkezi-veri-merkezi",
    status: "tamamlanan",
    statusLabel: "Tamamlanan Proje",
    title: "PTT Genel Merkezi Veri Merkezi",
    heroTitle: "PTT Genel Merkezi Veri Merkezi Altyapı Projesi",
    summary:
      "PTT Genel Merkezi bünyesindeki veri merkezi altyapısı, kurumun dijital operasyonlarının sürekliliğini destekleyecek şekilde tamamlandı.",
    description:
      "Proje kapsamında veri merkezi ortamının güvenilir, izlenebilir ve sürdürülebilir çalışmasına katkı sağlayan mühendislik ve altyapı çalışmaları gerçekleştirildi. AKYA Group, kritik dijital altyapı gereksinimlerini dikkate alarak veri merkezi operasyonlarının sürekliliğini destekleyen bütüncül bir çözüm yaklaşımı sundu.",
    image: "/hero-data-center.jpg",
    imageAlt: "PTT Genel Merkezi veri merkezi projesini temsil eden kritik altyapı görseli",
    logo: "/reference-ptt.png",
    tags: ["Veri Merkezi", "Kritik Altyapı", "Saha Uygulaması", "Raporlama"],
    scope: [
      "Veri merkezi altyapı değerlendirmesi",
      "Enerji ve soğutma ihtiyaçlarının proje gereksinimlerine göre ele alınması",
      "Zayıf akım ve dijital altyapı uyumluluğunun değerlendirilmesi",
      "Operasyonel süreklilik odaklı saha çalışmaları",
      "Teslim sonrası raporlama ve dokümantasyon",
    ],
    overview: [
      { label: "Proje Türü", value: "Veri merkezi altyapı projesi" },
      { label: "Kapsam", value: "Kritik altyapı ve saha uygulaması" },
      { label: "Durum", value: "Tamamlandı" },
    ],
    approach: ["İhtiyaç ve saha analizi", "Disiplinler arası uygulama koordinasyonu", "Test ve doğrulama", "Raporlama ve dokümantasyon"],
    values: ["Operasyonel süreklilik", "Altyapı güvenilirliği", "İzlenebilir teslimat", "Bakım süreçlerine destek"],
    seoDescription:
      "PTT Genel Merkezi veri merkezi altyapı projesinde AKYA Group tarafından yürütülen kritik altyapı, saha uygulaması ve raporlama çalışmaları.",
    imageSourceNote: "Geçici teknik görsel. Üretim öncesi kullanım izni doğrulanmış resmi PTT Genel Merkezi bina görseliyle değiştirilmelidir.",
  },
  {
    slug: "cevre-sehircilik-bakanligi-veri-merkezi",
    status: "tamamlanan",
    statusLabel: "Tamamlanan Proje",
    title: "Çevre ve Şehircilik Bakanlığı Veri Merkezi",
    heroTitle: "Çevre ve Şehircilik Bakanlığı Veri Merkezi Projesi",
    summary:
      "Kamu kurumlarının dijital altyapı gereksinimlerine uygun olarak yürütülen kritik tesis ve veri merkezi çalışmaları tamamlandı.",
    description:
      "Proje, kamu hizmetlerinin dijital sürekliliğini destekleyen veri merkezi altyapılarının güvenilir ve yönetilebilir hale getirilmesine odaklandı. AKYA Group, veri merkezi ortamının teknik gereksinimlerini analiz ederek altyapı, izleme ve süreklilik perspektifinde kurumsal bir teslimat yaklaşımı benimsedi.",
    image: "/hero-data-center.jpg",
    imageAlt: "Çevre ve Şehircilik Bakanlığı veri merkezi projesini temsil eden kritik altyapı görseli",
    logo: "/reference-environment-ministry.svg",
    tags: ["Veri Merkezi", "Kamu Altyapısı", "Kritik Tesis", "Mühendislik"],
    scope: [
      "Veri merkezi teknik altyapı çalışmaları",
      "Kritik tesis gereksinimlerine uygun mühendislik yaklaşımı",
      "Saha koşullarına göre uygulama ve koordinasyon",
      "Altyapı sürekliliğini destekleyen çözümler",
      "Teslimat dokümantasyonu ve proje kapanış raporlaması",
    ],
    overview: [
      { label: "Proje Türü", value: "Kamu veri merkezi projesi" },
      { label: "Kapsam", value: "Kritik tesis mühendisliği" },
      { label: "Durum", value: "Tamamlandı" },
    ],
    approach: ["Teknik gereksinim analizi", "Saha uygulama koordinasyonu", "Altyapı doğrulama", "Teslimat raporlaması"],
    values: ["Kamu hizmetlerinde dijital süreklilik", "Yönetilebilir altyapı", "Teknik izlenebilirlik", "Kurumsal teslimat standardı"],
    seoDescription:
      "Çevre ve Şehircilik Bakanlığı veri merkezi projesinde AKYA Group tarafından sunulan kritik tesis mühendisliği ve altyapı çalışmaları.",
    imageSourceNote: "Geçici teknik görsel. Üretim öncesi kullanım izni doğrulanmış resmi Bakanlık merkez bina görseliyle değiştirilmelidir.",
  },
  {
    slug: "rtuk-veri-merkezi-kapasite-artirimi",
    status: "devam-eden",
    statusLabel: "Devam Eden Proje",
    title: "RTÜK Veri Merkezi Kapasite ve Altyapı Genişletme",
    heroTitle: "RTÜK Veri Merkezi Kapasite ve Altyapı Genişletme Projesi",
    summary:
      "RTÜK veri merkezinde kapasite, soğutma, enerji ve bağlantı altyapısını geliştiren bütünleşik saha çalışmaları sürdürülüyor.",
    description:
      "Proje kapsamında mevcut veri merkezi kapasitesinin geliştirilmesi, yeni sistemlerin altyapıya dahil edilmesi, bu kapsamı destekleyen enerji altyapısının oluşturulması ve fiber ile CAT6 bağlantı çalışmalarının yürütülmesi hedeflenmektedir. AKYA Group, operasyon güvenilirliğini ve sürdürülebilirliği destekleyen entegre bir uygulama yaklaşımıyla çalışmalarını sürdürmektedir.",
    image: "/hero-data-center.jpg",
    imageAlt: "RTÜK veri merkezi kapasite ve altyapı genişletme projesini temsil eden teknik görsel",
    logo: "/reference-rtuk.png",
    tags: ["Devam Eden Proje", "Kapasite Artırımı", "Soğutma", "Enerji Altyapısı", "Fiber", "CAT6"],
    scope: [
      "Veri merkezi kapasite geliştirme çalışmaları",
      "Soğutma altyapısının geliştirilmesi ve sistem uyumluluğu",
      "Yeni sistemlerin mevcut altyapıya dahil edilmesi",
      "Genişleyen altyapıyı destekleyen enerji çalışmalarının yürütülmesi",
      "Sistemler arası fiber bağlantıların uygulanması",
      "Sistemler arası CAT6 bağlantıların uygulanması",
      "Saha koordinasyonu, test ve raporlama süreçleri",
    ],
    overview: [
      { label: "Proje Türü", value: "Kapasite ve altyapı genişletme" },
      { label: "Kapsam", value: "Soğutma, enerji ve bağlantı altyapısı" },
      { label: "Durum", value: "Devam ediyor" },
    ],
    approach: ["Mevcut altyapı analizi", "Uygulama ve entegrasyon", "Saha testleri", "Aşamalı raporlama"],
    values: ["Kapasite gelişimi", "Operasyonel güvenilirlik", "Bağlantı altyapısı bütünlüğü", "Sürdürülebilir büyüme"],
    seoDescription:
      "RTÜK veri merkezi kapasite ve altyapı genişletme projesinde soğutma, enerji, fiber ve CAT6 saha çalışmaları.",
    imageSourceNote: "Geçici teknik görsel. Üretim öncesi kullanım izni doğrulanmış resmi RTÜK Genel Merkezi bina görseliyle değiştirilmelidir.",
  },
];

// projectStatusLabels, route değerlerini kullanıcıya gösterilen kategori adlarına dönüştürür.
export const projectStatusLabels: Record<ProjectStatus, string> = {
  tamamlanan: "Tamamlanan Projeler",
  "devam-eden": "Devam Eden Projeler",
};

// getProjectsByStatus, kategori sayfaları ve mega menü için projeleri duruma göre filtreler.
export function getProjectsByStatus(status: ProjectStatus) {
  return projects.filter((project) => project.status === status);
}

// getProject, detay sayfası route parametrelerine göre doğru projeyi bulur.
export function getProject(status: string, slug: string) {
  return projects.find((project) => project.status === status && project.slug === slug);
}
