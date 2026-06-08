// InsightSection tipi, teknik içgörü detay sayfasındaki okunabilir içerik bölümlerini tanımlar.
export type InsightSection = {
  title: string;
  paragraphs: string[];
  points?: string[];
};

// TechnicalInsight tipi, önizleme, arşiv ve detay sayfalarında kullanılan ortak içerik modelidir.
export type TechnicalInsight = {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  introduction: string;
  note: string;
  sections: InsightSection[];
};

// technicalInsights, tüm teknik içeriklerin tek merkezden yönetilmesini sağlar.
export const technicalInsights: TechnicalInsight[] = [
  {
    slug: "veri-merkezlerinde-termal-performans",
    category: "Veri Merkezi",
    date: "05 Haziran 2026",
    title: "Veri Merkezlerinde Termal Performans Neden Kritik?",
    excerpt:
      "Veri salonlarında sıcak nokta oluşumu, hava akışı dengesizlikleri ve soğutma kapasitesi kullanımının operasyonel sürekliliğe etkileri.",
    image: "/hero-data-center.jpg",
    alt: "Mavi ışıklı veri merkezi sunucu koridoru",
    introduction:
      "Veri merkezlerinde termal performans; ekipman güvenilirliğini, enerji tüketimini ve kullanılabilir kapasiteyi doğrudan etkileyen temel işletme göstergelerinden biridir.",
    note: "Sıcaklık değeri tek başına yeterli değildir. Ölçüm noktası, hava akışı yönü, ekipman yükü ve zamana bağlı değişim birlikte değerlendirilmelidir.",
    sections: [
      {
        title: "Termal dengenin operasyonel etkisi",
        paragraphs: [
          "Rack yoğunluğu arttıkça soğuk havanın doğru noktaya ulaştırılması ve sıcak havanın kontrollü biçimde uzaklaştırılması zorlaşır. Dengesiz dağılım, bazı alanlarda gereksiz soğutma yapılırken kritik kabinetlerde sıcak nokta oluşmasına neden olabilir.",
          "Bu durum yalnızca cihaz sıcaklıklarını değil; fan yüklerini, klima çalışma sürelerini ve büyüme için kullanılabilir kapasiteyi de etkiler.",
        ],
      },
      {
        title: "Ölçülmesi gereken göstergeler",
        paragraphs: ["Sağlıklı bir değerlendirme, farklı yük koşullarında toplanan saha verilerinin birlikte yorumlanmasını gerektirir."],
        points: ["Rack giriş ve çıkış sıcaklıkları", "Soğuk ve sıcak koridor hava davranışı", "Klima dönüş sıcaklığı", "Containment kaçakları", "Zamana bağlı yük ve sıcaklık değişimleri"],
      },
      {
        title: "Optimizasyon yaklaşımı",
        paragraphs: [
          "Saha ölçümleri sonucunda menfez yerleşimi, boş panel kullanımı, containment iyileştirmeleri ve klima set değerleri gibi uygulanabilir aksiyonlar önceliklendirilir.",
        ],
      },
    ],
  },
  {
    slug: "dcim-enerji-kapasite-yonetimi",
    category: "DCIM",
    date: "29 Mayıs 2026",
    title: "DCIM ile Enerji ve Kapasite Yönetimi Nasıl Güçlenir?",
    excerpt:
      "Enerji tüketimi, kapasite kullanımı, alarm yönetimi ve varlık takibinin tek bir yönetim katmanında izlenmesi.",
    image: "/hero-carbon-analysis.png",
    alt: "Enerji ve kapasite verilerini izleyen teknik operasyon uzmanı",
    introduction:
      "DCIM platformları, fiziksel altyapı verisini operasyon ekiplerinin karar verebileceği ortak bir görünümde birleştirir.",
    note: "Başarılı bir DCIM kurulumu yalnızca yazılım kurulumu değildir; güvenilir veri modeli, doğru entegrasyon ve işletme süreçleri gerektirir.",
    sections: [
      {
        title: "Dağınık veriden ortak görünürlüğe",
        paragraphs: [
          "Rack, PDU, UPS, çevresel sensör ve alarm verileri farklı sistemlerde tutulduğunda kapasite kararları gecikir. DCIM, bu verileri lokasyon ve varlık ilişkileriyle birlikte görünür hale getirir.",
        ],
      },
      {
        title: "Enerji ve kapasite kararları",
        paragraphs: ["Anlık ölçüm ile planlama verisinin birlikte ele alınması, yeni cihaz yerleşimi ve büyüme kararlarını daha güvenilir hale getirir."],
        points: ["Rack doluluk oranları", "PDU ve devre yükleri", "Soğutma kapasitesi", "Alarm geçmişi", "Planlanan büyüme senaryoları"],
      },
      {
        title: "Operasyonel değer",
        paragraphs: [
          "Rol bazlı paneller, eşik yönetimi ve düzenli raporlama sayesinde teknik ekipler riskleri daha erken görür ve kaynaklarını öncelikli alanlara yönlendirir.",
        ],
      },
    ],
  },
  {
    slug: "kritik-tesislerde-zayif-akim",
    category: "Zayıf Akım",
    date: "21 Mayıs 2026",
    title: "Kritik Tesislerde Zayıf Akım Altyapısının Rolü",
    excerpt:
      "Güvenlik, haberleşme, izleme, erişim kontrol ve network altyapılarının kesintisiz operasyon için önemi.",
    image: "/hero-low-current.jpg",
    alt: "Network kabinetleri ve zayıf akım altyapısı",
    introduction:
      "Zayıf akım sistemleri, kritik tesislerin güvenlik ve iletişim omurgasını oluşturur; sistemlerin ayrı değil, bütünleşik tasarlanması gerekir.",
    note: "Kablo güzergahı, port planı ve cihaz yerleşimi işletme ve bakım süreçleri düşünülmeden tasarlandığında küçük değişiklikler dahi önemli kesinti riskleri yaratabilir.",
    sections: [
      {
        title: "Bütünleşik altyapı gereksinimi",
        paragraphs: [
          "CCTV, erişim kontrol, yangın algılama, anons ve network sistemleri ortak fiziksel alanları ve haberleşme altyapısını kullanır. Disiplinler arası koordinasyon, kapasite ve güvenilirlik açısından belirleyicidir.",
        ],
      },
      {
        title: "İşletilebilirlik kriterleri",
        paragraphs: ["Teknik tasarımın saha uygulaması ve bakım erişimiyle uyumlu olması uzun vadeli işletme kalitesini artırır."],
        points: ["Etiketleme standardı", "Rack ve patch panel düzeni", "Yedek port ve kapasite", "Güç ve network ayrımı", "As-built dokümantasyon"],
      },
      {
        title: "Merkezi izleme",
        paragraphs: [
          "Alarm ve durum verilerinin ortak izleme yapısında toplanması, olayların daha hızlı değerlendirilmesini ve ekipler arası koordinasyonu destekler.",
        ],
      },
    ],
  },
  {
    slug: "karbon-su-analizleri",
    category: "Sürdürülebilirlik",
    date: "14 Mayıs 2026",
    title: "Karbon ve Su Analizleri ile Altyapı Performansını Ölçmek",
    excerpt:
      "Operasyonel kaynak tüketimini görünür hale getirerek sürdürülebilir ve ölçülebilir tesis yönetimi sağlamak.",
    image: "/hero-water-analysis.png",
    alt: "Tesis kaynak tüketimini dijital verilerle analiz eden mühendis",
    introduction:
      "Karbon ve su analizi, sürdürülebilirlik hedeflerini tesisin gerçek tüketim davranışı ve operasyonel koşullarıyla ilişkilendirir.",
    note: "Ölçülemeyen tüketim güvenilir biçimde yönetilemez. Fatura verisi başlangıç sağlar; iyileştirme için sistem ve kullanım noktası bazında görünürlük gerekir.",
    sections: [
      {
        title: "Ortak veri zemini",
        paragraphs: [
          "Enerji, su, çalışma saati ve üretim verileri ortak dönem ve sınırlar içinde sınıflandırıldığında kaynak yoğunluğu karşılaştırılabilir hale gelir.",
        ],
      },
      {
        title: "Yüksek etki alanlarının belirlenmesi",
        paragraphs: ["Analiz, toplam tüketimin ötesine geçerek iyileştirme potansiyelinin hangi sistemlerde yoğunlaştığını gösterir."],
        points: ["Soğutma sistemleri", "Proses ekipmanları", "Yardımcı tesisler", "Kayıp ve kaçaklar", "Geri kazanım fırsatları"],
      },
      {
        title: "Aksiyon planı",
        paragraphs: [
          "Teknik bulgular; yatırım ihtiyacı, beklenen etki ve uygulama kolaylığına göre sıralanarak ölçülebilir bir yol haritasına dönüştürülür.",
        ],
      },
    ],
  },
  {
    slug: "sicak-nokta-tespiti-sogutma-optimizasyonu",
    category: "Termal Testler",
    date: "02 Mayıs 2026",
    title: "Sıcak Nokta Tespiti ve Soğutma Optimizasyonu",
    excerpt:
      "Termal kamera, sıcaklık haritalama ve saha ölçümleriyle veri merkezi soğutma performansının değerlendirilmesi.",
    image: "/hero-thermal-tests.jpg",
    alt: "Kritik tesiste termal ölçüm yapan mühendis",
    introduction:
      "Sıcak noktaların erken tespiti, ekipman risklerini azaltırken soğutma altyapısının gereksiz kapasite kullanımını da önlemeye yardımcı olur.",
    note: "Termal görüntü tek başına sonuç değildir; yük, ortam koşulları ve referans ölçümlerle birlikte yorumlanmalıdır.",
    sections: [
      {
        title: "Sıcak nokta neden oluşur?",
        paragraphs: ["Dengesiz ekipman yerleşimi, eksik kör panel, hava kaçağı ve yetersiz debi sıcak hava geri dönüşlerine yol açabilir."],
      },
      {
        title: "Saha doğrulaması",
        paragraphs: ["Farklı yük koşullarında yapılan ölçümler, problemin kalıcı mı yoksa operasyon anına özgü mü olduğunu gösterir."],
        points: ["Rack önü ve arkası ölçümleri", "Koridor sıcaklık haritası", "Menfez debisi", "Klima dönüş koşulları"],
      },
    ],
  },
  {
    slug: "kritik-alanlarda-basinc-farki",
    category: "Basınç Testleri",
    date: "24 Nisan 2026",
    title: "Kritik Alanlarda Basınç Farkı ve Sızdırmazlık Kontrolü",
    excerpt:
      "Basınç farkı, oda sızdırmazlığı ve containment performansının operasyonel güvenilirliğe etkisi.",
    image: "/hero-pressure-tests-v2.png",
    alt: "Containment alanında basınç farkı ölçen mühendis",
    introduction:
      "Kontrollü teknik hacimlerde basınç dengesi, hava yönetimi ve yangın söndürme performansı açısından ölçülmesi gereken bir kriterdir.",
    note: "Kapı, kablo geçişi ve panel birleşimleri küçük görünse de toplam kaçak alanı üzerinde belirleyici olabilir.",
    sections: [
      {
        title: "Basınç dengesinin önemi",
        paragraphs: ["Pozitif veya negatif basınç hedefi, alanın kullanım amacı ve komşu hacimlerle ilişkisine göre belirlenir."],
      },
      {
        title: "Test yaklaşımı",
        paragraphs: ["Ölçüm senaryosu, HVAC çalışma durumu ve fiziksel sınırlar kayıt altına alınarak tekrarlanabilir hale getirilir."],
        points: ["Diferansiyel basınç ölçümü", "Kaçak noktası kontrolü", "Kapı ve panel performansı", "Containment değerlendirmesi"],
      },
    ],
  },
  {
    slug: "poe-guc-butcesi-ve-kapasite",
    category: "POE Analizleri",
    date: "11 Nisan 2026",
    title: "PoE Güç Bütçesi ve Switch Kapasitesi Nasıl Planlanır?",
    excerpt:
      "Power over Ethernet altyapılarında cihaz yükü, port kapasitesi, kablolama ve büyüme payının birlikte değerlendirilmesi.",
    image: "/hero-poe-analysis.png",
    alt: "PoE switch ve Ethernet bağlantılarını test eden mühendis",
    introduction:
      "PoE altyapısı, veri ve gücü aynı kablo üzerinden taşıdığı için cihaz yükü ile network kapasitesinin birlikte planlanmasını gerektirir.",
    note: "Switch üzerindeki port sayısı yeterli olsa bile toplam PoE güç bütçesi bağlı cihazların eş zamanlı ihtiyacını karşılamayabilir.",
    sections: [
      {
        title: "Güç bütçesi hesabı",
        paragraphs: ["Her cihazın PoE sınıfı, nominal tüketimi ve olası tepe yükü toplam switch bütçesiyle karşılaştırılır."],
      },
      {
        title: "Altyapı kontrolleri",
        paragraphs: ["Kapasite planı yalnızca switch ile sınırlı değildir; kablo mesafesi ve demet yoğunluğu da performansı etkiler."],
        points: ["Port doluluğu", "Uplink kapasitesi", "Kablo kategorisi", "Demet ısınması", "Yedek kapasite"],
      },
    ],
  },
  {
    slug: "su-tuketimi-geri-kazanim-firsatlari",
    category: "Su Analizi",
    date: "28 Mart 2026",
    title: "Su Tüketimi ve Geri Kazanım Fırsatlarının Belirlenmesi",
    excerpt:
      "Tesislerde su tüketim profili, riskler, kayıp-kaçak ve sürdürülebilir kullanım fırsatlarının analizi.",
    image: "/hero-water-analysis.png",
    alt: "Tesis debimetresi üzerinden su tüketimini inceleyen mühendis",
    introduction:
      "Toplam fatura verisi tüketim eğilimini gösterir; verimlilik fırsatlarının belirlenmesi için kullanım noktalarının ayrıştırılması gerekir.",
    note: "Gece taban tüketimi ve üretim dışı saatlerdeki debi, kaçak veya kontrolsüz kullanım için önemli bir erken uyarı göstergesidir.",
    sections: [
      {
        title: "Tüketim profilinin çıkarılması",
        paragraphs: ["Sayaç verileri, çalışma saatleri ve proses bilgileri aynı zaman ekseninde karşılaştırılarak su kullanım davranışı belirlenir."],
      },
      {
        title: "Geri kazanım potansiyeli",
        paragraphs: ["Suyun kalite gereksinimi ve kullanım amacı incelenerek yeniden kullanım senaryoları teknik açıdan değerlendirilir."],
        points: ["Soğutma suyu", "Proses durulama suyu", "Yağmur suyu", "Gri su", "Kondens suyu"],
      },
    ],
  },
];

// insightCategories, arşiv sayfasındaki filtre seçeneklerini sabit ve kontrollü biçimde sunar.
export const insightCategories = [
  "Tümü",
  "Veri Merkezi",
  "DCIM",
  "Zayıf Akım",
  "Termal Testler",
  "Basınç Testleri",
  "POE Analizleri",
  "Karbon Analizi",
  "Su Analizi",
];

// findInsightBySlug, detay rotası için slug değerine karşılık gelen içeriği döndürür.
export function findInsightBySlug(slug: string) {
  return technicalInsights.find((insight) => insight.slug === slug);
}
