// NavigationLink tipi, menü öğelerinin etiket ve hedef bilgisini tutar.
export type NavigationLink = {
  label: string;
  href: string;
};

// SolutionMenuGroup tipi, Çözümler dropdown menüsündeki ana başlık ve alt bağlantıları tanımlar.
export type SolutionMenuGroup = {
  title: string;
  items: NavigationLink[];
};

// SolutionPage tipi, her çözüm detay sayfasının içerik alanlarını standardize eder.
export type SolutionPage = {
  slug: string;
  group: string;
  title: string;
  summary: string;
  intro: string;
  challenge: string;
  image: string;
  outcomes: string[];
  capabilities: string[];
  deliverySteps: string[];
  useCases: string[];
  proofPoints: string[];
};

// CardItem tipi, görsel kartlarda ortak kullanılan içerik modelini tanımlar.
export type CardItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
};

// navigationLinks ana navigasyonun tek kaynaktan yönetilmesini sağlar.
export const navigationLinks: NavigationLink[] = [
  { label: "Çözümler", href: "/cozumler" },
  { label: "Sektörler", href: "/sektorler" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Hakkımızda", href: "/hakkimizda" },
];

// solutionMenuGroups, Çözümler menüsünün dropdown kolonlarını tek merkezden yönetir.
export const solutionMenuGroups: SolutionMenuGroup[] = [
  {
    title: "Dijital Altyapılar",
    items: [
      { label: "Veri Merkezi", href: "/cozumler/veri-merkezi" },
      { label: "DCIM Yazılımları", href: "/cozumler/dcim-yazilimlari" },
      { label: "Zayıf Akım Sistemleri", href: "/cozumler/zayif-akim-sistemleri" },
    ],
  },
  {
    title: "Kritik Tesis Mühendisliği",
    items: [
      { label: "Termal Testler", href: "/cozumler/termal-testler" },
      { label: "Basınç Testleri", href: "/cozumler/basinc-testleri" },
      { label: "POE Analizleri", href: "/cozumler/poe-analizleri" },
    ],
  },
  {
    title: "Sürdürülebilirlik ve Analiz",
    items: [
      { label: "Karbon Analizi", href: "/cozumler/karbon-analizi" },
      { label: "Su Analizi", href: "/cozumler/su-analizi" },
    ],
  },
];

// solutionPages, Çözümler dropdown'ındaki her alt başlık için detay sayfası içeriğini sağlar.
export const solutionPages: SolutionPage[] = [
  {
    slug: "veri-merkezi",
    group: "Dijital Altyapılar",
    title: "Veri Merkezi",
    summary: "Kritik iş yükleri için ölçeklenebilir, güvenli ve izlenebilir veri merkezi altyapıları tasarlarız.",
    intro: "Veri merkezi projelerinde yalnızca kabinet, enerji ve soğutma bileşenlerini değil; büyüme planını, operasyon sürekliliğini, izleme mimarisini ve bakım erişilebilirliğini birlikte ele alırız.",
    challenge: "Kesinti toleransı düşük tesislerde kapasite planı, güç yedekliliği, soğutma dengesi ve fiziksel güvenlik kararları birbirinden kopuk ilerlediğinde işletme maliyeti artar ve arıza riskleri görünmez kalır.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=85",
    outcomes: ["Kesintisiz operasyon", "Kapasite ve enerji görünürlüğü", "Standartlara uygun altyapı planı"],
    capabilities: ["Kabinet ve güç dağıtım planlama", "Soğutma ve kapasite analizi", "İzleme, alarm ve raporlama kurgusu"],
    deliverySteps: ["Mevcut altyapı ve büyüme ihtiyacı analiz edilir.", "Enerji, soğutma, yangın, güvenlik ve ağ topolojisi birlikte tasarlanır.", "İzleme, bakım ve değişiklik yönetimi için işletme dokümantasyonu hazırlanır."],
    useCases: ["Yeni veri merkezi kurulumu", "Mevcut sistem odası modernizasyonu", "Felaket kurtarma veya yedek lokasyon planlaması"],
    proofPoints: ["Tier yaklaşımına uyumlu mimari", "Enerji ve soğutma kapasite haritası", "Operasyon ekibi için izlenebilir varlık yapısı"],
  },
  {
    slug: "dcim-yazilimlari",
    group: "Dijital Altyapılar",
    title: "DCIM Yazılımları",
    summary: "Veri merkezi varlıklarını, enerji tüketimini ve kapasite kullanımını tek ekrandan yönetilebilir hale getiririz.",
    intro: "DCIM, veri merkezinin canlı envanterini, enerji tüketimini, alan kullanımını ve alarm süreçlerini tek bir yönetim katmanında birleştirir. Akya, yazılımı sadece kurmaz; işletme ritmine uygun veri modeliyle çalışır hale getirir.",
    challenge: "Kabinet içi varlıklar, port bilgileri, enerji tüketimi ve bakım kayıtları farklı dosyalarda tutulduğunda kapasite kararları gecikir; ekipler arızanın kaynağını bulmak için gereksiz zaman kaybeder.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85",
    outcomes: ["Canlı envanter takibi", "Enerji ve kapasite raporları", "Daha hızlı operasyonel kararlar"],
    capabilities: ["Varlık modelleme", "Sensör ve cihaz entegrasyonu", "Dashboard ve alarm senaryoları"],
    deliverySteps: ["Varlık, lokasyon ve bağlantı veri modeli çıkarılır.", "Sensör, PDU, UPS, iklimlendirme ve ağ cihazları entegre edilir.", "Rol bazlı dashboard, alarm ve raporlama senaryoları devreye alınır."],
    useCases: ["Kabinet kapasite yönetimi", "Enerji tüketimi izleme", "Bakım ve değişiklik kayıtlarının dijitalleşmesi"],
    proofPoints: ["Gerçek zamanlı altyapı görünürlüğü", "Standartlaştırılmış envanter yapısı", "Yönetim için düzenli KPI raporları"],
  },
  {
    slug: "zayif-akim-sistemleri",
    group: "Dijital Altyapılar",
    title: "Zayıf Akım Sistemleri",
    summary: "Güvenlik, haberleşme ve izleme sistemlerini yapı operasyonlarıyla uyumlu şekilde projelendiririz.",
    intro: "Zayıf akım sistemleri, kritik tesislerin güvenlik ve iletişim omurgasını oluşturur. Kamera, erişim kontrol, yangın algılama, anons ve network altyapısını birbirinden bağımsız cihazlar olarak değil, işletilebilir bir bütün olarak tasarlarız.",
    challenge: "Sahada sonradan eklenen kamera, kart okuyucu, alarm ve kablolama işleri zamanla karmaşık hale gelir. Bu durum bakım maliyetini artırır, güvenlik açıkları yaratır ve olay anında hızlı aksiyon almayı zorlaştırır.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85",
    outcomes: ["Bütünleşik izleme yapısı", "Daha güvenli tesis operasyonu", "Bakımı kolay sistem mimarisi"],
    capabilities: ["CCTV ve erişim kontrol", "Yangın algılama ve anons", "Network ve saha kablolama planları"],
    deliverySteps: ["Saha keşfiyle kritik alanlar ve risk noktaları belirlenir.", "Kamera, erişim, alarm ve kablolama topolojisi projelendirilir.", "Test, devreye alma ve as-built dokümantasyon süreci tamamlanır."],
    useCases: ["Ofis ve kampüs güvenliği", "Veri merkezi çevresel güvenliği", "Endüstriyel tesis izleme altyapısı"],
    proofPoints: ["Tek merkezden izlenebilir sistemler", "Bakım ekipleri için net saha dokümanı", "Güvenlik senaryolarıyla uyumlu mimari"],
  },
  {
    slug: "termal-testler",
    group: "Kritik Tesis Mühendisliği",
    title: "Termal Testler",
    summary: "Kritik tesislerde ısı dağılımını ölçerek riskli noktaları ve iyileştirme alanlarını görünür kılarız.",
    intro: "Termal testler; pano, kabinet, kablo, soğutma hattı ve ekipman yüzeylerinde oluşan sıcaklık risklerini görünür hale getirir. Amaç yalnızca ölçüm yapmak değil, operasyonu etkileyebilecek ısı kaynaklarını aksiyon planına dönüştürmektir.",
    challenge: "Yük altında çalışan ekipmanlarda gevşek bağlantılar, dengesiz hava akışı veya kapasite sınırına yaklaşan bileşenler çoğu zaman arıza oluşmadan fark edilmez. Bu da beklenmeyen kesintilere yol açabilir.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=85",
    outcomes: ["Isı kaynaklı risklerin azaltılması", "Soğutma performansının doğrulanması", "Öncelikli aksiyon listesi"],
    capabilities: ["Termal görüntüleme", "Yük altında sıcaklık analizi", "Raporlama ve iyileştirme önerileri"],
    deliverySteps: ["Test kapsamı ve ölçüm noktaları operasyon ekibiyle netleştirilir.", "Yük altında termal görüntüleme ve sıcaklık ölçümleri yapılır.", "Risk seviyesine göre sınıflandırılmış aksiyon raporu hazırlanır."],
    useCases: ["Elektrik panosu kontrolleri", "Veri merkezi sıcak nokta analizi", "Periyodik bakım doğrulama çalışmaları"],
    proofPoints: ["Görsel termal kayıtlar", "Risk önceliklendirme matrisi", "Önleyici bakım için net aksiyonlar"],
  },
  {
    slug: "basinc-testleri",
    group: "Kritik Tesis Mühendisliği",
    title: "Basınç Testleri",
    summary: "Tesis ve oda basınç koşullarını test ederek hava akışı, sızdırmazlık ve operasyon güvenliğini değerlendiririz.",
    intro: "Basınç testleri, kontrollü ortamların hava dengesini ve sızdırmazlık performansını doğrulamak için kullanılır. Özellikle teknik hacimler, sistem odaları ve hassas üretim alanlarında iklimlendirme verimliliğini doğrudan etkiler.",
    challenge: "Kapı, menfez, kanal, yükseltilmiş döşeme veya bölme geçişlerindeki kaçaklar basınç dengesini bozar. Bu durum hem enerji kaybı hem de soğutma performansında tutarsızlık yaratır.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=85",
    outcomes: ["Doğrulanmış basınç senaryoları", "Hava kaçaklarının tespiti", "Daha dengeli iklimlendirme"],
    capabilities: ["Basınç farkı ölçümü", "Sızdırmazlık değerlendirmesi", "Test raporu ve aksiyon planı"],
    deliverySteps: ["Test senaryoları ve hedef basınç değerleri belirlenir.", "Alan bazlı ölçümlerle kaçak ve dengesizlik noktaları tespit edilir.", "İyileştirme önerileri ve tekrar test planı raporlanır."],
    useCases: ["Teknik oda sızdırmazlık kontrolü", "Hassas alan basınç doğrulama", "İklimlendirme performans iyileştirmesi"],
    proofPoints: ["Ölçüm bazlı basınç haritası", "Kaçak noktası tespitleri", "Enerji verimliliği için iyileştirme listesi"],
  },
  {
    slug: "poe-analizleri",
    group: "Kritik Tesis Mühendisliği",
    title: "POE Analizleri",
    summary: "Kullanım sonrası performans analizleriyle tesislerin gerçek operasyon verimini ve kullanıcı deneyimini ölçeriz.",
    intro: "POE, yani kullanım sonrası değerlendirme, bir tesisin tasarım hedefleriyle gerçek kullanım performansını karşılaştırır. Kullanıcı deneyimi, bakım süreçleri, enerji davranışı ve operasyon akışları birlikte analiz edilir.",
    challenge: "Projeler devreye alındıktan sonra tasarım kararlarının sahadaki etkisi çoğu zaman düzenli ölçülmez. Bu da tekrarlayan şikayetlerin, verimsiz alan kullanımının ve gereksiz işletme maliyetlerinin sürmesine neden olur.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85",
    outcomes: ["Gerçek kullanım performansı", "Kullanıcı ve operasyon içgörüleri", "İyileştirme öncelikleri"],
    capabilities: ["Saha gözlemi", "Operasyonel veri analizi", "Performans ve memnuniyet raporu"],
    deliverySteps: ["Kullanıcı, bakım ve yönetim ekiplerinden veri toplanır.", "Saha gözlemleri ve operasyon kayıtları analiz edilir.", "Kısa, orta ve uzun vadeli iyileştirme planı hazırlanır."],
    useCases: ["Yeni tesis devreye alma sonrası değerlendirme", "Ofis ve kampüs kullanım analizi", "Teknik işletme performans kontrolü"],
    proofPoints: ["Kullanıcı deneyimi bulguları", "Operasyonel darboğaz haritası", "Yatırım önceliklendirme raporu"],
  },
  {
    slug: "karbon-analizi",
    group: "Sürdürülebilirlik ve Analiz",
    title: "Karbon Analizi",
    summary: "Operasyonların karbon etkisini ölçerek azaltım fırsatlarını ve raporlanabilir sürdürülebilirlik adımlarını çıkarırız.",
    intro: "Karbon analizi, işletmenin enerji, ulaşım, tedarik ve operasyon kaynaklı emisyonlarını görünür hale getirir. Akya, sayısal ölçümü iş hedefleriyle ilişkilendirerek azaltım yol haritasına dönüştürür.",
    challenge: "Veriler farklı sistemlerde dağınık olduğunda karbon etkisini güvenilir şekilde raporlamak zorlaşır. Ölçüm yapılmadan tasarruf ve azaltım kararları tahmine dayalı kalır.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1800&q=85",
    outcomes: ["Karbon ayak izi görünürlüğü", "Azaltım fırsatları", "Raporlanabilir aksiyon planı"],
    capabilities: ["Emisyon veri toplama", "Kapsam analizi", "Azaltım senaryoları"],
    deliverySteps: ["Emisyon kaynakları ve veri sahipleri belirlenir.", "Tüketim, faaliyet ve operasyon verileri sınıflandırılır.", "Azaltım senaryoları ve raporlama seti oluşturulur."],
    useCases: ["Kurumsal sürdürülebilirlik raporlaması", "Enerji verimliliği projeleri", "Tedarik zinciri karbon görünürlüğü"],
    proofPoints: ["Kapsam bazlı emisyon kırılımı", "Azaltım etkisi simülasyonları", "Yönetim sunumu için net rapor formatı"],
  },
  {
    slug: "su-analizi",
    group: "Sürdürülebilirlik ve Analiz",
    title: "Su Analizi",
    summary: "Su tüketim verilerini analiz ederek verimlilik, geri kazanım ve sürdürülebilir kullanım fırsatlarını belirleriz.",
    intro: "Su analizi, tesisin tüketim davranışını, kayıp-kaçak risklerini ve geri kazanım fırsatlarını ortaya çıkarır. Özellikle üretim, kampüs ve kritik tesislerde sürdürülebilir işletme için güçlü bir karar desteği sağlar.",
    challenge: "Su tüketimi çoğu yapıda fatura düzeyinde izlenir; süreç, alan veya ekipman bazlı kırılım olmadığı için tasarruf potansiyeli netleşmez. Bu da iyileştirme yatırımlarının önceliklendirilmesini zorlaştırır.",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1800&q=85",
    outcomes: ["Tüketim kırılımı", "Tasarruf potansiyeli", "Sürdürülebilir kullanım planı"],
    capabilities: ["Tüketim ve kayıp analizi", "Süreç bazlı ölçüm", "Verimlilik önerileri"],
    deliverySteps: ["Tüketim noktaları ve veri kaynakları haritalanır.", "Süreç bazlı kullanım, kayıp ve pik tüketim eğilimleri analiz edilir.", "Tasarruf, geri kazanım ve izleme önerileri raporlanır."],
    useCases: ["Kampüs su tüketimi optimizasyonu", "Endüstriyel süreç su analizi", "Sürdürülebilirlik hedefleri için izleme planı"],
    proofPoints: ["Alan bazlı tüketim kırılımı", "Kayıp-kaçak şüphe noktaları", "Geri kazanım ve tasarruf senaryoları"],
  },
];

// expertiseCards, dijital dönüşüm hizmetlerini görsel kart verisine dönüştürür.
export const expertiseCards: CardItem[] = [
  {
    title: "Dijital Strateji",
    description: "Süreç analizi, teknoloji yol haritası ve yatırım önceliklendirmesiyle dönüşüm hedeflerini netleştiririz.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",
    alt: "Toplantı masasında dijital strateji dokümanları inceleyen profesyonel ekip",
    href: "#contact",
  },
  {
    title: "Özel Yazılım",
    description: "Operasyon, satış, saha ve yönetim ekipleri için ölçeklenebilir web ve mobil uygulamalar geliştiririz.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85",
    alt: "Modern ofiste yazılım geliştiren teknoloji ekibi",
    href: "#contact",
  },
  {
    title: "Otomasyon",
    description: "Manuel işleri azaltan, veri akışını hızlandıran ve kontrol noktalarını görünür kılan otomasyonlar kurarız.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=85",
    alt: "Süreç otomasyonu için dijital panoları değerlendiren ekip",
    href: "#contact",
  },
  {
    title: "Veri ve Raporlama",
    description: "Dağınık veriyi karar destek panellerine, KPI takibine ve yönetim raporlarına dönüştürürüz.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    alt: "Analitik dashboard ve veri grafikleri görüntüleyen ekranlar",
    href: "#contact",
  },
  {
    title: "Bulut ve Entegrasyon",
    description: "Sistemlerinizi güvenli API'ler, bulut altyapısı ve sürdürülebilir entegrasyon mimarisiyle bağlarız.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    alt: "Sunucu odasında bulut altyapısını temsil eden veri merkezi",
    href: "#contact",
  },
];

// stats, şirketin değer önerisini destekleyen kısa metrikleri listeler.
export const stats = [
  { target: 360, prefix: "", suffix: "°", label: "uçtan uca danışmanlık" },
  { target: 25, prefix: "+", suffix: "", label: "kritik iş süreci" },
  { target: 7, prefix: "", suffix: "/24", label: "izlenebilir sistemler" },
  { target: 100, prefix: "", suffix: "%", label: "ölçeklenebilir mimari" },
];

// locations, Akya'nın hizmet verdiği ana çalışma alanlarını gösterir.
export const locations = ["İstanbul", "Ankara", "İzmir", "Uzaktan Global Teslimat"];

// parks, şablondaki proje kartlarını Akya'nın dönüşüm programlarına uyarlar.
export const parks: CardItem[] = [
  {
    title: "Operasyonel Dijitalleşme Programı",
    description:
      "Tekrarlı işleri otomasyona bağlayan, onay akışlarını sadeleştiren ve ekiplerin günlük iş yükünü ölçülebilir şekilde azaltan program.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",
    alt: "Operasyonel süreçleri planlayan profesyonel ekip",
    href: "#contact",
  },
  {
    title: "Veri Odaklı Yönetim Programı",
    description:
      "Finans, satış, üretim ve saha verilerini tek görünümde birleştirerek karar alma hızını artıran raporlama ve dashboard yaklaşımı.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
    alt: "Yönetim dashboardu üzerinde çalışan veri analisti",
    href: "#contact",
  },
];

// newsItems, haber kartlarının içerik kaynağıdır.
export const newsItems = [
  {
    date: "05 Haziran 2026",
    title: "Akya, KOBİ'ler için hızlı dijital olgunluk analizi hizmetini yayına aldı",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
    alt: "Dijital olgunluk analizi toplantısı yapan danışmanlar",
    href: "#contact",
  },
  {
    date: "22 Mayıs 2026",
    title: "Yeni nesil raporlama panelleriyle yönetim ekipleri için gerçek zamanlı görünürlük",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=85",
    alt: "Kurumsal raporlama panellerini inceleyen ekip",
    href: "#contact",
  },
  {
    date: "18 Nisan 2026",
    title: "Bulut geçiş projelerinde güvenlik ve maliyet optimizasyonu için öneriler",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
    alt: "Bulut altyapısı üzerinde çalışan yazılım uzmanı",
    href: "#contact",
  },
  {
    date: "04 Mart 2026",
    title: "Saha ekipleri için mobil süreç yönetimi uygulamalarında yeni dönem",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=85",
    alt: "Mobil uygulama planlaması yapan saha ve ürün ekibi",
    href: "#contact",
  },
];

// trustQuote, referans alanında kullanılan örnek müşteri anlatısını saklar.
export const trustQuote = {
  text: "Akya'nın yaklaşımı sadece yazılım teslim etmek değil; süreci anlamak, sadeleştirmek ve ekibin gerçekten kullanacağı sistemi kurmak üzerineydi.",
  name: "Müşteri Deneyimi Ekibi",
  role: "Kurumsal Dönüşüm Programı",
};

// footerGroups, footer link kolonlarının merkezi içerik tanımıdır.
export const footerGroups = [
  {
    title: "HİZMETLER",
    links: ["Dijital Strateji", "Özel Yazılım", "Otomasyon", "Veri ve Raporlama"],
  },
  {
    title: "ŞİRKET",
    links: ["Programlar", "Hizmet Ağı", "Haberler", "İletişim"],
  },
];
