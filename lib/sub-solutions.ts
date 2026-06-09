// SubSolution, alt çözüm sayfalarında kullanılan içerik ve SEO modelini tanımlar.
export type SubSolution = {
  parentSlug: string;
  parentTitle: string;
  slug: string;
  title: string;
  summary: string;
  heroSubtitle?: string;
  introduction?: string[];
  scopeTitles: string[];
  scopeItems: string[];
  deliverables?: string[];
  ctaText?: string;
  useCases: string[];
  integrations: string[];
  image: {
    hero: string;
    alt: string;
  };
  seo: {
    title: string;
    description: string;
  };
};

type ParentConfig = {
  slug: string;
  title: string;
  hero: string;
  useCases: string[];
  integrations: string[];
};

type SolutionSeed = {
  slug: string;
  title: string;
  summary?: string;
  heroSubtitle?: string;
  introduction?: string[];
  scopeTitles: string[];
  scopeItems: string[];
  deliverables?: string[];
  ctaText?: string;
};

// parentConfigs, her ana çözümün ortak görselini, kullanım alanlarını ve entegrasyonlarını merkezileştirir.
const parentConfigs: Record<string, ParentConfig> = {
  "dcim-yazilimlari": {
    slug: "dcim-yazilimlari",
    title: "DCIM Yazılımı",
    hero: "/datacenter.gif",
    useCases: ["Veri merkezleri", "Kritik teknik hacimler", "Endüstriyel tesisler", "Kurumsal kampüsler"],
    integrations: ["DCIM", "SCADA", "BMS", "Modbus", "MQTT", "SNMP", "ERP"],
  },
  "zayif-akim-sistemleri": {
    slug: "zayif-akim-sistemleri",
    title: "Zayıf Akım Sistemleri",
    hero: "/hero-low-current.jpg",
    useCases: ["Kamu ve kritik altyapılar", "Veri merkezleri", "Akıllı binalar", "Kampüs ve endüstriyel tesisler"],
    integrations: ["PACS", "CCTV", "RFID", "Biyometri", "Turnike", "BMS", "Alarm sistemleri"],
  },
  "veri-merkezi": {
    slug: "veri-merkezi",
    title: "Veri Merkezi",
    hero: "/hero-data-center.jpg",
    useCases: ["Veri merkezleri", "Kritik teknik hacimler", "Endüstriyel tesisler", "Kurumsal kampüsler"],
    integrations: ["DCIM", "SCADA", "BMS", "Modbus", "BACnet", "MQTT", "SNMP"],
  },
  "termal-testler": {
    slug: "termal-testler",
    title: "Termal Testler",
    hero: "/hero-thermal-tests.jpg",
    useCases: ["Veri merkezleri", "Kritik teknik hacimler", "Endüstriyel tesisler", "Kurumsal kampüsler"],
    integrations: ["Termal kamera", "Endüstriyel kamera", "SCADA", "MOM", "Sensörler", "Raporlama"],
  },
  "basinc-testleri": {
    slug: "basinc-testleri",
    title: "Basınç Testleri",
    hero: "/hero-pressure-tests-v2.png",
    useCases: ["Veri merkezleri", "Kritik teknik hacimler", "Endüstriyel tesisler", "Kurumsal kampüsler"],
    integrations: ["Basınç sensörleri", "Hava akış sensörleri", "DCIM", "SCADA", "BMS", "Raporlama"],
  },
  "poe-analizleri": {
    slug: "poe-analizleri",
    title: "POE Analizleri",
    hero: "/hero-poe-analysis.png",
    useCases: ["Ofisler ve kampüsler", "Endüstriyel tesisler", "Teknoloji operasyon alanları", "Kullanım sonrası performans değerlendirmeleri"],
    integrations: ["PoE", "RFID", "Barkod", "ERP", "MOM", "SCADA", "Raporlama"],
  },
  "karbon-analizi": {
    slug: "karbon-analizi",
    title: "Karbon Analizi",
    hero: "/hero-carbon-analysis.png",
    useCases: ["Endüstriyel tesisler", "Kritik altyapılar", "Kampüsler ve ticari yapılar", "Sürdürülebilirlik raporlama süreçleri"],
    integrations: ["Enerji sayaçları", "DCIM", "SCADA", "BMS", "ERP", "Dashboard", "Raporlama"],
  },
  "su-analizi": {
    slug: "su-analizi",
    title: "Su Analizi",
    hero: "/hero-water-analysis.png",
    useCases: ["Endüstriyel tesisler", "Kritik altyapılar", "Kampüsler ve ticari yapılar", "Sürdürülebilirlik raporlama süreçleri"],
    integrations: ["Su sayaçları", "SCADA", "BMS", "Sensörler", "Simülasyon", "Dashboard", "Raporlama"],
  },
};

// createSolutions, kısa içerik tohumlarını tam sayfa modeline dönüştürür.
function createSolutions(parentSlug: string, seeds: SolutionSeed[]): SubSolution[] {
  const parent = parentConfigs[parentSlug];

  return seeds.map((seed) => {
    const summary = seed.summary ?? `${seed.scopeItems[0]}. ${seed.scopeItems[1]}.`;
    const description = `${seed.title}; ${seed.scopeItems[0].toLocaleLowerCase("tr-TR")} için AKYA Group mühendislik yaklaşımı sunar.`;

    return {
      parentSlug: parent.slug,
      parentTitle: parent.title,
      slug: seed.slug,
      title: seed.title,
      summary,
      heroSubtitle: seed.heroSubtitle,
      introduction: seed.introduction,
      scopeTitles: seed.scopeTitles,
      scopeItems: seed.scopeItems,
      deliverables: seed.deliverables,
      ctaText: seed.ctaText,
      useCases: parent.useCases,
      integrations: parent.integrations,
      image: {
        hero: parent.hero,
        alt: `${seed.title} çözümünü temsil eden ${parent.title.toLocaleLowerCase("tr-TR")} görseli`,
      },
      seo: {
        title: `${seed.title} | AKYA Group`,
        description: description.slice(0, 160),
      },
    };
  });
}

const dcimSolutions = createSolutions("dcim-yazilimlari", [
  {
    slug: "scada-entegrasyonu",
    title: "SCADA Entegrasyonu",
    scopeTitles: ["Merkezi İzleme", "Alarm Yönetimi", "Cihaz Entegrasyonu", "Trend Analizi"],
    scopeItems: [
      "Enerji, sıcaklık, nem, basınç ve ekipman durum verilerinin merkezi izlenmesi",
      "Modbus TCP/IP, Modbus RTU, MQTT ve SNMP haberleşme kurgularının desteklenmesi",
      "Operatör ekranları, alarm akışları, raporlar ve geçmiş veri analizlerinin oluşturulması",
      "Veri merkezi ve kritik altyapı senaryolarına uygun ölçeklenebilir mimari",
    ],
  },
  {
    slug: "hmi-arayuzleri",
    title: "HMI Arayüzleri",
    scopeTitles: ["Arayüz Tasarımı", "Kullanıcı Rolleri", "Gerçek Zamanlı Veri", "Mobil Kullanım"],
    scopeItems: [
      "Makine, pano, veri merkezi ve tesis sistemleri için sade kontrol ekranlarının tasarlanması",
      "Yetkili kullanıcı girişi, RFID, kartlı erişim ve şifreli kullanım senaryoları",
      "Gerçek zamanlı uyarılar, durum panelleri ve animasyonlu proses izleme",
      "Mevcut SCADA, DCIM ve otomasyon altyapısına uyarlanabilir arayüz yapısı",
    ],
  },
  {
    slug: "raporlama-yazilimi",
    title: "Raporlama Yazılımı",
    scopeTitles: ["Rapor Şablonları", "Periyodik Raporlama", "Performans Göstergeleri", "Dashboard"],
    scopeItems: [
      "Enerji tüketimi, alarm geçmişi, çevresel koşullar ve ekipman performansı raporları",
      "Günlük, haftalık, aylık ve proje bazlı çıktı üretimi",
      "PDF ve Excel çıktıları ile yönetim dashboardlarının hazırlanması",
      "Karar destek süreçleri için ölçülebilir ve izlenebilir veri akışı",
    ],
  },
  {
    slug: "bulut-tabanli-izleme",
    title: "Bulut Tabanlı İzleme",
    scopeTitles: ["Bulut Mimarisi", "Uzaktan Erişim", "Veri Güvenliği", "Çoklu Lokasyon"],
    scopeItems: [
      "Farklı tesislerden gelen operasyon verilerinin tek merkezde toplanması",
      "Yetkili kullanıcılar için güvenli web tabanlı izleme ekranları",
      "Veri saklama, yedekleme ve raporlama kurgularının oluşturulması",
      "Saha, merkez ve yönetim ekiplerinin ortak ve güncel veriye erişmesi",
    ],
  },
  {
    slug: "buyuk-veri-analizi",
    title: "Büyük Veri Analizi",
    scopeTitles: ["Veri Toplama", "Veri Modelleme", "Anomali Analizi", "Karar Desteği"],
    scopeItems: [
      "Enerji, çevre, erişim, üretim ve operasyon verilerinin ortak modelde birleştirilmesi",
      "Kapasite, verimlilik ve sürdürülebilirlik trendlerinin izlenmesi",
      "Anomali, sapma ve risk göstergelerinin erken aşamada belirlenmesi",
      "Yönetim kararları için sade, anlaşılır ve karşılaştırılabilir raporlar",
    ],
  },
  {
    slug: "sap-erp-entegrasyonu",
    title: "SAP / ERP Entegrasyonu",
    scopeTitles: ["ERP Bağlantıları", "Veri Senkronizasyonu", "Varlık ve Stok", "Kurumsal Raporlama"],
    scopeItems: [
      "DCIM, stok, bakım ve üretim verilerinin ERP sistemleriyle ilişkilendirilmesi",
      "Malzeme, ekipman, varlık ve iş emri verilerinin eşleştirilmesi",
      "Manuel veri girişini ve tekrar eden operasyonları azaltan entegrasyon yapısı",
      "Kurumsal raporlama, bütçe ve maliyet takibine veri desteği",
    ],
  },
  {
    slug: "mrp-malzeme-ihtiyac-planlama",
    title: "MRP - Malzeme İhtiyaç Planlama",
    scopeTitles: ["Malzeme Planlama", "Stok Dengesi", "Yedek Parça", "Operasyon Sürekliliği"],
    scopeItems: [
      "Bakım ve işletme süreçleri için kritik malzemelerin ihtiyaca göre planlanması",
      "Minimum stok, kritik stok, talep ve sipariş akışlarının izlenmesi",
      "Veri merkezi, zayıf akım ve endüstriyel tesis malzeme yönetimi",
      "ERP ve stok takip yazılımlarıyla birlikte çalışabilen veri yapısı",
    ],
  },
  {
    slug: "mom-uretim-operasyon-yonetimi",
    title: "MOM - Üretim Operasyon Yönetimi",
    scopeTitles: ["Operasyon İzleme", "Üretim Performansı", "İş Emri Takibi", "Verimlilik Raporları"],
    scopeItems: [
      "Endüstriyel tesis operasyonlarının merkezi ve gerçek zamanlı izlenmesi",
      "Makine, personel, üretim ve kalite verilerinin ilişkilendirilmesi",
      "İş emirleri ve üretim süreçlerinin ölçülebilir hale getirilmesi",
      "POE ve sürdürülebilirlik analizleriyle birlikte kullanılabilir altyapı",
    ],
  },
  {
    slug: "stok-takip-yazilimi",
    title: "Stok Takip Yazılımı",
    scopeTitles: ["Stok Kartları", "Barkod ve RFID", "Lokasyon Yönetimi", "Raporlama"],
    scopeItems: [
      "Veri merkezi, zayıf akım ve saha ekipmanlarının dijital envanterle izlenmesi",
      "Barkod ve RFID teknolojileriyle hızlı kayıt ve doğrulama",
      "Depo, saha, proje ve sorumlu bazlı stok ayrımı",
      "MRP ve ERP entegrasyonuna hazır izlenebilir altyapı",
    ],
  },
  {
    slug: "andon-ekran-yonetim-sistemi",
    title: "Andon Ekran Yönetim Sistemi",
    scopeTitles: ["Saha Ekranları", "Alarm Panelleri", "Performans Verisi", "Operasyonel İletişim"],
    scopeItems: [
      "Üretim, tesis ve teknik operasyon alanlarında anlık durum ekranları",
      "Alarm, uyarı, arıza ve performans bilgilerinin merkezi yayınlanması",
      "DCIM, SCADA ve raporlama yazılımlarıyla entegre kullanım",
      "Operasyon ekipleri için görünürlük ve hızlı aksiyon desteği",
    ],
  },
]);

const lowCurrentSolutions = createSolutions("zayif-akim-sistemleri", [
  {
    slug: "pacs-personel-devam-kontrol-sistemi",
    title: "PACS - Personel Devam Kontrol Sistemi",
    scopeTitles: ["Giriş Çıkış", "Yetkilendirme", "Raporlama", "Entegrasyon"],
    scopeItems: [
      "Kartlı, biyometrik veya karma erişim senaryolarıyla personel hareketlerinin izlenmesi",
      "Vardiya, zaman ve alan bazlı yetkilendirme kurallarının yönetilmesi",
      "Turnike, kapı, kilit ve okuyucu altyapılarıyla bütünleşik çalışma",
      "Güvenlik ve insan kaynakları süreçlerine uygun merkezi raporlama",
    ],
  },
  {
    slug: "kartli-gecis-sistemleri",
    title: "Kartlı Geçiş Sistemleri",
    scopeTitles: ["Kart ve Okuyucu", "Kapı Kontrolü", "Yetki Seviyeleri", "Geçiş Raporları"],
    scopeItems: [
      "Ofis, veri merkezi, teknik oda ve kritik alanlarda yetkilendirilmiş erişim",
      "Mifare kart, okuyucu, kontrol paneli, turnike ve kilit entegrasyonu",
      "Personel, zaman ve alan bazlı erişim kurallarının uygulanması",
      "PACS ve güvenlik yazılımları üzerinden merkezi geçiş raporları",
    ],
  },
  {
    slug: "biyometrik-yuz-tanima-sistemi",
    title: "Biyometrik Yüz Tanıma Sistemi",
    scopeTitles: ["Yüz Tanıma", "Yetkili Geçiş", "Kayıt ve Rapor", "Güvenlik"],
    scopeItems: [
      "Temassız personel doğrulama ve kritik alan erişiminin yönetilmesi",
      "Turnike, kapı ve güvenlik yazılımı altyapılarıyla entegrasyon",
      "Giriş ve çıkış loglarının merkezi olarak izlenmesi",
      "KVKK ve proje güvenlik gereksinimlerine göre veri yönetimi yaklaşımı",
    ],
  },
  {
    slug: "biyometrik-avuc-ici-damar-okuma",
    title: "Biyometrik Avuç İçi Damar Okuma",
    scopeTitles: ["Avuç İçi Doğrulama", "Yüksek Güvenlik", "Sistem Entegrasyonu", "Raporlama"],
    scopeItems: [
      "Kritik oda, laboratuvar ve veri merkezi girişlerinde biyometrik doğrulama",
      "Kart veya şifreye ek olarak çok faktörlü güvenlik kurgusu",
      "PACS ve erişim kontrol altyapısıyla entegre yetki yönetimi",
      "Personel geçiş geçmişi ve denetim kayıtlarının raporlanması",
    ],
  },
  {
    slug: "parmak-izi-okuma-sistemi",
    title: "Parmak İzi Okuma Sistemi",
    scopeTitles: ["Parmak İzi Terminali", "Personel Doğrulama", "Geçiş Kayıtları", "PACS Entegrasyonu"],
    scopeItems: [
      "Personel devam kontrolü ve kritik alan girişlerinde kimlik doğrulama",
      "Kartlı sistemlere ek güvenlik katmanı oluşturulması",
      "Kapı, turnike ve merkezi yönetim yazılımı entegrasyonu",
      "Kullanıcı, yetki ve geçiş kayıtlarının tek merkezden yönetimi",
    ],
  },
  {
    slug: "personel-konum-takip-sistemi",
    title: "Personel Konum Takip Sistemi",
    scopeTitles: ["Konum Verisi", "Alan Bazlı İzleme", "Güvenlik", "Raporlama"],
    scopeItems: [
      "Kritik tesislerde personel varlığı ve konum bilgisinin izlenmesi",
      "Acil durum, güvenli alan ve operasyonel verimlilik senaryoları",
      "RFID, beacon veya sahaya uygun teknolojilerle ölçeklenebilir kurgu",
      "POE analizleriyle birlikte alan kullanımının değerlendirilmesi",
    ],
  },
  {
    slug: "personel-giris-takip-sistemi",
    title: "Personel Giriş Takip Sistemi",
    scopeTitles: ["Giriş Kayıtları", "Ziyaretçi Yönetimi", "Yetkilendirme", "Raporlama"],
    scopeItems: [
      "Personel giriş çıkış logları ve alan bazlı yetkilendirme",
      "Ziyaretçi ve taşeron süreçlerinin kayıt altına alınması",
      "Kartlı, biyometrik ve turnike sistemleriyle entegrasyon",
      "Güvenlik raporları ve denetim kayıtlarının oluşturulması",
    ],
  },
  {
    slug: "x-ray-cihazlari",
    title: "X-Ray Cihazları",
    scopeTitles: ["Güvenlik Tarama", "Kontrol Noktası", "Alarm ve Kayıt", "Entegrasyon"],
    scopeItems: [
      "Kamu, kritik tesis ve kurumsal girişlerde güvenlik tarama altyapısı",
      "Giriş güvenliği ve ziyaretçi kontrol süreçleriyle bütünleşik tasarım",
      "Operatör kullanım senaryoları ve kayıt gereksinimlerinin belirlenmesi",
      "Cihaz seçimi ve yerleşimin proje güvenlik kriterlerine göre değerlendirilmesi",
    ],
  },
  {
    slug: "elektromekanik-kilit-sistemleri",
    title: "Elektromekanik Kilit Sistemleri",
    scopeTitles: ["Kilit Tipleri", "Kapı Kontrolü", "Acil Durum", "Erişim Entegrasyonu"],
    scopeItems: [
      "Teknik oda, veri merkezi, ofis ve kritik alan kapıları için kilit altyapısı",
      "Kartlı geçiş, biyometrik okuyucu ve kontrol paneli entegrasyonu",
      "Yangın, acil çıkış, fail-safe ve fail-secure senaryoları",
      "Geçiş kayıtları ile kapı durumunun merkezi izlenmesi",
    ],
  },
  {
    slug: "ogs-otomatik-arac-gecis-sistemleri",
    title: "OGS Otomatik Araç Geçiş Sistemleri",
    scopeTitles: ["Araç Tanıma", "Bariyer Entegrasyonu", "Yetkilendirme", "Geçiş Raporları"],
    scopeItems: [
      "Otopark, kampüs, tesis ve lojistik girişlerinde araç geçiş yönetimi",
      "RFID, plaka tanıma veya kartlı araç geçiş senaryoları",
      "Bariyer, loop dedektör, kamera ve yazılım entegrasyonu",
      "Ziyaretçi ve personel araç hareketlerinin raporlanması",
    ],
  },
  {
    slug: "terahertz-sistemleri",
    title: "Terahertz Sistemleri",
    scopeTitles: ["Kullanım Alanları", "Güvenlik ve Tarama", "Entegrasyon", "Proje Değerlendirmesi"],
    scopeItems: [
      "Kritik tesis, özel güvenlik ve Ar-Ge senaryoları için çözüm analizi",
      "Teknik detayların saha, risk ve proje kapsamına göre belirlenmesi",
      "Zayıf akım ve güvenlik sistemleriyle entegrasyon yaklaşımı",
      "İhtiyaca özel fizibilite, tasarım ve danışmanlık desteği",
    ],
  },
  {
    slug: "rfid-etiket-takip-cozumleri",
    title: "RFID Etiket Takip Çözümleri",
    scopeTitles: ["RFID Etiketleme", "Okuyucu Altyapısı", "Varlık Takibi", "Yazılım Entegrasyonu"],
    scopeItems: [
      "Depo, saha, teknik oda ve üretim alanlarında varlıkların izlenmesi",
      "Kullanım senaryosuna uygun RFID okuyucu, anten ve etiket seçimi",
      "Stok takip, PACS, POE ve operasyonel raporlama entegrasyonu",
      "Kayıp azaltma, envanter doğruluğu ve izlenebilirlik kazanımı",
    ],
  },
]);

const dataCenterSolutions = createSolutions("veri-merkezi", [
  {
    slug: "veri-merkezi-insaasi",
    title: "Veri Merkezi İnşası",
    summary: "Veri salonu, teknik hacimler, enerji odaları, rack alanları ve büyüme hedeflerine uygun uçtan uca veri merkezi kurulum süreci.",
    heroSubtitle: "Kritik dijital altyapılar için planlı, ölçeklenebilir ve sürdürülebilir veri merkezi inşa süreçleri.",
    scopeTitles: ["Alan Planlama", "Rack Koordinasyonu", "Disiplin Yönetimi", "Devreye Alma", "Büyüme Planı"],
    scopeItems: [
      "Veri salonu ve teknik hacimlerin ihtiyaçlara göre planlanması",
      "Rack yerleşimi, enerji ve soğutma alan koordinasyonunun yapılması",
      "Mekanik, elektrik ve zayıf akım disiplinlerinin birlikte ele alınması",
      "Uygulama, devreye alma ve teslim dokümantasyonunun yürütülmesi",
      "Gelecekteki kapasite artışına uygun altyapı yaklaşımının kurulması",
    ],
    deliverables: ["Yerleşim ve disiplin koordinasyon çıktıları", "Enerji, soğutma ve kablolama kapsam notları", "Devreye alma kontrol listeleri", "As-built ve teslim doküman yapısı"],
  },
  {
    slug: "veri-merkezi-kapasite-artirimi-modernizasyon",
    title: "Veri Merkezi Kapasite Artırımı ve Modernizasyon",
    summary: "Mevcut veri merkezlerinde yeni rack, sunucu, enerji, soğutma ve kablolama ihtiyaçlarının mevcut yapıya entegre edilmesi.",
    heroSubtitle: "Çalışan veri merkezlerinde kapasiteyi artırırken süreklilik, güvenlik ve operasyon risklerini birlikte yönetiyoruz.",
    scopeTitles: ["Mevcut Durum", "Yeni Kapasite", "Termal Etki", "Enerji Revizyonu", "Fazlı Uygulama"],
    scopeItems: [
      "Mevcut altyapının kapasite ve risk analizinin yapılması",
      "Yeni sunucu, rack, PDU ve kablolama ihtiyaçlarının planlanması",
      "Soğutma kapasitesi ve hava akışı etkisinin değerlendirilmesi",
      "Enerji altyapısı ve yedeklilik senaryolarının güncellenmesi",
      "Kesinti riskini azaltan fazlı uygulama yaklaşımının hazırlanması",
    ],
    deliverables: ["Mevcut durum analiz notu", "Kapasite artırım uygulama planı", "Enerji ve soğutma etki değerlendirmesi", "Kablolama ve rack yerleşim revizyonları"],
  },
  {
    slug: "enerji-altyapisi",
    title: "Enerji Altyapısı",
    summary: "Trafo, ana dağıtım, tali panolar, UPS beslemeleri, PDU hatları ve kritik yükler için enerji dağıtım mimarisi.",
    heroSubtitle: "Veri merkezlerinde güvenilir enerji dağıtımı için ölçeklenebilir ve izlenebilir güç altyapısı tasarımı.",
    scopeTitles: ["Ana Dağıtım", "Besleme Senaryoları", "A/B Besleme", "Enerji İzleme", "Erişilebilir Tasarım"],
    scopeItems: [
      "Ana enerji dağıtım mimarisinin oluşturulması",
      "Pano, kablo güzergahı ve besleme senaryolarının planlanması",
      "Kritik yükler için A/B besleme yaklaşımının kurulması",
      "Enerji ölçüm, izleme ve raporlama altyapısının tasarlanması",
      "Bakım ve genişleme için erişilebilir tasarım geliştirilmesi",
    ],
    deliverables: ["Tek hat ve dağıtım prensipleri", "Pano ve besleme kapsam dokümanı", "Kritik yük sınıflandırması", "Enerji izleme entegrasyon notları"],
  },
  {
    slug: "ups-ve-kesintisiz-guc-sistemleri",
    title: "UPS ve Kesintisiz Güç Sistemleri",
    summary: "Kritik yüklerin sürekliliği için UPS mimarisi, bypass senaryoları, yedeklilik ve enerji sürekliliği yaklaşımı.",
    heroSubtitle: "Kesintisiz operasyon hedefiyle UPS sistemlerini yük profili, büyüme ve bakım senaryolarına göre kurguluyoruz.",
    scopeTitles: ["UPS Kapasitesi", "Bypass Kurgusu", "Kritik Yükler", "Bakım Sürekliliği", "İzleme"],
    scopeItems: [
      "UPS kapasite ve yedeklilik yaklaşımının belirlenmesi",
      "A/B besleme ve bypass kurgusunun oluşturulması",
      "Kritik yüklerin sınıflandırılması",
      "Bakım anında süreklilik senaryolarının planlanması",
      "UPS izleme ve alarm entegrasyonunun kurulması",
    ],
    deliverables: ["UPS mimari tasarım notu", "Yedeklilik ve bypass senaryosu", "Kritik yük besleme matrisi", "Alarm ve izleme entegrasyon listesi"],
  },
  {
    slug: "jenerator-yedek-guc-altyapisi",
    title: "Jeneratör ve Yedek Güç Altyapısı",
    summary: "Şebeke kesintilerine karşı jeneratör, transfer panosu, yakıt sistemi ve yedek güç senaryolarının planlanması.",
    heroSubtitle: "Veri merkezlerinde enerji sürekliliği için şebeke dışı çalışma ve yedek güç senaryolarını tasarlıyoruz.",
    scopeTitles: ["Jeneratör Kapasitesi", "Transfer Sistemi", "Yakıt Sürekliliği", "Test Prosedürleri", "UPS Koordinasyonu"],
    scopeItems: ["Jeneratör kapasite ve çalışma senaryosunun belirlenmesi", "ATS ve transfer sistemi prensiplerinin planlanması", "Yakıt ve operasyon sürekliliği yaklaşımının oluşturulması", "Yedek güç test prosedürlerinin hazırlanması", "UPS ve jeneratör koordinasyonunun sağlanması"],
    deliverables: ["Yedek güç konsept tasarımı", "Transfer senaryosu ve test planı", "Yakıt ve süreklilik kapsam notu", "Bakım ve periyodik kontrol önerileri"],
  },
  {
    slug: "rack-kabinet-pdu-altyapisi",
    title: "Rack, Kabinet ve PDU Altyapısı",
    summary: "Rack yerleşimi, kabinet güç dağıtımı, A/B besleme mimarisi, akıllı PDU ve yük dengeleme çözümleri.",
    heroSubtitle: "Rack seviyesinde güç, kablolama, erişim ve izleme ihtiyaçlarını bütünleşik bir altyapı olarak ele alıyoruz.",
    scopeTitles: ["Rack Yerleşimi", "PDU ve Besleme", "Kablo Yönetimi", "Yük Dengeleme", "Akıllı İzleme"],
    scopeItems: ["Rack ve kabinet yerleşim prensiplerinin belirlenmesi", "PDU seçimi ve A/B besleme dağılımının planlanması", "Kabin içi enerji ve kablo yönetiminin düzenlenmesi", "Yük dengeleme ve kapasite planlamasının yapılması", "Akıllı PDU izleme entegrasyonunun kurulması"],
    deliverables: ["Rack yerleşim ve bağlantı matrisi", "PDU ve besleme planı", "Kabin içi kablo yönetim notları", "Yük ve kritik devre dağılım raporu"],
  },
  {
    slug: "veri-merkezi-sogutma-sistemleri",
    title: "Veri Merkezi Soğutma Sistemleri",
    summary: "Chiller, CRAC/CRAH, in-row cooling, fan-coil, hassas klima ve soğutma kapasitesi planlaması.",
    heroSubtitle: "Kritik yüklerin termal güvenliği için soğutma kapasitesini, hava akışını ve operasyon koşullarını birlikte planlıyoruz.",
    scopeTitles: ["Isı Yükü", "Soğutma Seçenekleri", "Yedeklilik", "Sıcak Nokta", "Alarm Entegrasyonu"],
    scopeItems: ["Mevcut ve hedef ısı yükünün değerlendirilmesi", "Hassas klima, CRAC, CRAH ve in-row seçeneklerinin karşılaştırılması", "Soğutma yedekliliği ve kapasite planlamasının yapılması", "Sıcak nokta risklerinin azaltılması", "Soğutma izleme ve alarm entegrasyonunun kurulması"],
    deliverables: ["Soğutma kapasite değerlendirmesi", "Cihaz yerleşim ve hava akışı notları", "Sıcak nokta risk raporu", "İzleme noktaları önerisi"],
  },
  {
    slug: "hava-akisi-containment-cozumleri",
    title: "Hava Akışı ve Containment Çözümleri",
    summary: "Sıcak/soğuk koridor, containment, hava kaçakları, basınç farkları ve sıcak nokta risklerinin yönetimi.",
    heroSubtitle: "Veri merkezlerinde doğru hava akışıyla soğutma performansını artırıyor, enerji kaybını azaltıyoruz.",
    scopeTitles: ["Koridor Ayrımı", "Containment", "Kaçak Tespiti", "Basınç ve Debi", "Termal Doğrulama"],
    scopeItems: ["Sıcak ve soğuk koridor ayrımının planlanması", "Containment tasarım ve performansının değerlendirilmesi", "Hava kaçak noktalarının tespit edilmesi", "Basınç farkı ve hava debisi yaklaşımının kurulması", "Performansın termal testlerle doğrulanması"],
    deliverables: ["Hava akışı iyileştirme notu", "Containment kapsam önerisi", "Sıcak nokta ve kaçak hava tespit çıktısı", "Ölçüm ve raporlama formatı"],
  },
  {
    slug: "fiber-cat6-kablolama-altyapisi",
    title: "Fiber ve Cat6 Kablolama Altyapısı",
    summary: "Server, switch, patch panel, core switch, network omurgası, fiber optik ve bakır kablolama topolojisi.",
    heroSubtitle: "Veri merkezlerinde düzenli, izlenebilir ve ölçeklenebilir network kablolama altyapıları kuruyoruz.",
    scopeTitles: ["Kablo Güzergahları", "Patch Planı", "Bağlantı Topolojisi", "Etiketleme", "Test ve Teslim"],
    scopeItems: ["Fiber optik ve bakır kablolama güzergahlarının planlanması", "Patch panel ve core switch bağlantı planının hazırlanması", "Sunucular arası bağlantı topolojisinin oluşturulması", "Etiketleme ve kablo yönetimi standardının kurulması", "Test, ölçüm ve teslim dokümantasyonunun hazırlanması"],
    deliverables: ["Fiber ve Cat6 bağlantı matrisi", "Kablo güzergah ve patch planı", "Etiketleme standardı önerisi", "Test ve ölçüm rapor formatı"],
  },
  {
    slug: "network-sistem-odasi-altyapisi",
    title: "Network ve Sistem Odası Altyapısı",
    summary: "Switch, router, firewall, kabin içi bağlantılar, ağ omurgası ve sistem odası düzeninin planlanması.",
    heroSubtitle: "Ağ altyapısını, sistem odası düzenini ve veri akışını operasyonel süreklilik hedefiyle yapılandırıyoruz.",
    scopeTitles: ["Ağ Mimarisi", "Güvenlik Cihazları", "Kabin Bağlantıları", "Ortam İhtiyaçları", "Dokümantasyon"],
    scopeItems: ["Core ve access switch mimarisinin planlanması", "Firewall, router ve güvenlik cihazlarının yerleştirilmesi", "Kabin içi bağlantı düzeninin oluşturulması", "Sistem odası enerji ve soğutma ihtiyaçlarının belirlenmesi", "Dokümantasyon ve etiketleme yapısının kurulması"],
    deliverables: ["Network altyapı kapsam notu", "Rack ve switch bağlantı haritası", "Sistem odası düzen önerisi", "Etiketleme ve envanter formatı"],
  },
  {
    slug: "veri-merkezi-izleme-alarm-yonetimi",
    title: "Veri Merkezi İzleme ve Alarm Yönetimi",
    summary: "Sıcaklık, nem, kaçak, kapı, enerji, UPS, PDU ve klima verilerinin merkezi olarak izlenmesi.",
    heroSubtitle: "Kritik altyapı verilerini görünür hale getirerek olaylara hızlı müdahale ve güvenilir operasyon sağlıyoruz.",
    scopeTitles: ["İzleme Noktaları", "Ekipman Alarmları", "Olay Takibi", "Bildirimler", "Dashboard"],
    scopeItems: ["Çevresel sensör ve enerji izleme noktalarının belirlenmesi", "UPS, PDU ve klima alarm entegrasyonunun kurulması", "Kapı, kaçak ve güvenlik olaylarının takip edilmesi", "Alarm önceliklendirme ve bildirim senaryolarının hazırlanması", "Dashboard ve raporlama altyapısının oluşturulması"],
    deliverables: ["İzleme noktaları listesi", "Alarm matrisi", "Dashboard kapsam notu", "Bildirim ve raporlama senaryosu"],
  },
  {
    slug: "veri-merkezi-otomasyon-cozumleri",
    title: "Veri Merkezi Otomasyon Çözümleri",
    summary: "BMS, SCADA, sensör verileri, alarm senaryoları ve teknik sistemlerin merkezi kontrol altyapısı.",
    heroSubtitle: "Mekanik, elektrik, güvenlik ve çevresel sistemleri otomasyon altyapısı ile merkezi ve izlenebilir hale getiriyoruz.",
    scopeTitles: ["BMS ve SCADA", "Saha Ekipmanları", "Alarm Senaryoları", "Veri Toplama", "Operatör Arayüzü"],
    scopeItems: ["BMS ve SCADA entegrasyon yaklaşımının oluşturulması", "Saha sensörleri ve kontrol ekipmanlarının bağlanması", "Alarm, senaryo ve otomatik bildirim mantığının kurulması", "Veri toplama ve raporlama altyapısının hazırlanması", "Operasyonel arayüz ve kullanıcı yetkilendirmesinin tasarlanması"],
    deliverables: ["Otomasyon mimari notu", "Sistem entegrasyon listesi", "Alarm ve senaryo matrisi", "Operatör ekranı kapsam önerisi"],
  },
  {
    slug: "fiziksel-guvenlik-erisim-kontrolu",
    title: "Fiziksel Güvenlik ve Erişim Kontrolü",
    summary: "Kartlı geçiş, biyometrik erişim, CCTV, kapı sensörleri, yetkilendirme ve kayıt altına alma sistemleri.",
    heroSubtitle: "Veri salonu ve teknik hacimlerde yetkisiz erişim riskini azaltan entegre güvenlik çözümleri sunuyoruz.",
    scopeTitles: ["Geçiş Sistemleri", "CCTV", "Kapı Güvenliği", "Erişim Kayıtları", "Entegrasyon"],
    scopeItems: ["Kartlı ve biyometrik geçiş sistemlerinin kurulması", "CCTV ve olay kayıt altyapısının planlanması", "Kapı sensörü ve yetkilendirme senaryolarının hazırlanması", "Ziyaretçi ve personel erişim kayıtlarının yönetilmesi", "Güvenlik sistemi entegrasyonlarının gerçekleştirilmesi"],
    deliverables: ["Erişim kontrol senaryosu", "CCTV ve güvenlik kapsam planı", "Yetkilendirme ve kayıt matrisi", "Entegrasyon notları"],
  },
  {
    slug: "yangin-algilama-sondurme-sistemleri",
    title: "Yangın Algılama ve Söndürme Sistemleri",
    summary: "Yangın algılama, gazlı söndürme, erken duman algılama, alarm entegrasyonu ve acil durum senaryoları.",
    heroSubtitle: "Kritik ekipmanları ve operasyon sürekliliğini korumak için veri merkezlerine uygun yangın güvenliği yaklaşımı.",
    scopeTitles: ["Erken Uyarı", "Gazlı Söndürme", "Alarm Entegrasyonu", "Acil Durum", "Periyodik Kontrol"],
    scopeItems: ["Yangın algılama ve erken uyarı prensiplerinin belirlenmesi", "Gazlı söndürme ve teknik hacim ihtiyaçlarının planlanması", "Alarm ve otomasyon entegrasyonunun kurulması", "Acil durum senaryolarının hazırlanması", "Test ve periyodik kontrol yaklaşımının oluşturulması"],
    deliverables: ["Yangın güvenliği kapsam notu", "Algılama ve söndürme entegrasyon listesi", "Acil durum senaryo matrisi", "Test ve bakım kontrol listesi"],
  },
  {
    slug: "topraklama-parafudr-sistemleri",
    title: "Topraklama ve Parafudr Sistemleri",
    summary: "Ekipman güvenliği için topraklama, eşpotansiyel bağlantı, SPD/parafudr ve kaçak akım koruma altyapısı.",
    heroSubtitle: "Kritik elektronik ekipmanları gerilim darbeleri, kaçak akımlar ve topraklama risklerine karşı koruyoruz.",
    scopeTitles: ["Topraklama", "SPD Kademeleri", "Ekipman Koruma", "Ölçüm", "Periyodik Kontrol"],
    scopeItems: ["Topraklama ve eşpotansiyel bağlantı yaklaşımının kurulması", "SPD ve parafudr koruma kademelerinin belirlenmesi", "Pano ve ekipman koruma prensiplerinin uygulanması", "Ölçüm ve uygunluk kontrolünün gerçekleştirilmesi", "Bakım ve periyodik kontrol önerilerinin hazırlanması"],
    deliverables: ["Topraklama kapsam notu", "SPD ve parafudr yerleşim önerisi", "Ölçüm ve kontrol rapor formatı", "Risk ve iyileştirme önerileri"],
  },
  {
    slug: "test-devreye-alma-commissioning",
    title: "Test, Devreye Alma ve Commissioning",
    summary: "Enerji, soğutma, kablolama, izleme, alarm ve operasyon senaryolarının sahada test edilmesi.",
    heroSubtitle: "Teslim öncesinde sistemlerin gerçek çalışma koşullarına uygunluğunu test ediyor ve doğruluyoruz.",
    scopeTitles: ["Enerji Testleri", "Termal Doğrulama", "Kablolama Testi", "Alarm Testleri", "Final Kabul"],
    scopeItems: ["Enerji ve UPS testlerinin gerçekleştirilmesi", "Soğutma ve hava akışının doğrulanması", "Fiber ve Cat6 testleri ile etiket kontrolünün yapılması", "Alarm, sensör ve izleme testlerinin yürütülmesi", "Final kabul ve raporlama sürecinin tamamlanması"],
    deliverables: ["Commissioning test planı", "Kontrol listeleri ve test kayıtları", "Eksik ve uygunsuzluk takip listesi", "Final kabul raporu"],
  },
  {
    slug: "enerji-verimliligi-pue-optimizasyonu",
    title: "Enerji Verimliliği ve PUE Optimizasyonu",
    summary: "Enerji tüketimi, soğutma verimliliği, kapasite kullanımı ve operasyonel maliyetlerin optimize edilmesi.",
    heroSubtitle: "Veri merkezlerinde enerji tüketimini görünür hale getiriyor, verimlilik ve kapasite kullanımını iyileştiriyoruz.",
    scopeTitles: ["Tüketim Analizi", "Soğutma Verimi", "PUE Yaklaşımı", "Kapasite İzleme", "Maliyet Optimizasyonu"],
    scopeItems: ["Enerji tüketim ve yük dağılım analizinin yapılması", "Soğutma verimliliğinin değerlendirilmesi", "PUE yaklaşımı ve iyileştirme fırsatlarının belirlenmesi", "Kapasite kullanımının izlenmesi", "Operasyonel maliyet optimizasyon önerilerinin hazırlanması"],
    deliverables: ["Enerji verimliliği analiz raporu", "PUE iyileştirme önerileri", "Tüketim ve trend dashboard kapsamı", "Önceliklendirilmiş aksiyon listesi"],
  },
  {
    slug: "bakim-operasyon-periyodik-kontrol",
    title: "Bakım, Operasyon ve Periyodik Kontrol",
    summary: "Veri merkezi altyapısının düzenli kontrolü, arıza müdahalesi, bakım planları ve operasyon sürekliliği.",
    heroSubtitle: "Veri merkezi altyapılarının güvenilir çalışması için bakım, kontrol ve operasyon süreçlerini planlıyoruz.",
    scopeTitles: ["Bakım Planı", "Arıza Müdahale", "Ekipman Kontrolü", "Operasyon Kayıtları", "Sürekli İyileştirme"],
    scopeItems: ["Periyodik bakım ve kontrol planlamasının yapılması", "Arıza müdahale ve servis süreçlerinin oluşturulması", "UPS, PDU, klima, sensör ve kablolamanın kontrol edilmesi", "Operasyon kayıtları ve raporlama sisteminin kurulması", "Sürekli iyileştirme önerilerinin hazırlanması"],
    deliverables: ["Bakım planı ve kontrol listeleri", "Servis ve arıza kayıt formatı", "Periyodik kontrol raporu", "İyileştirme ve risk aksiyon listesi"],
  },
]);

const thermalSolutions = createSolutions("termal-testler", [
  {
    slug: "goruntu-isleme",
    title: "Görüntü İşleme",
    scopeTitles: ["Görüntü Toplama", "Veri İşleme", "Anomali Tespiti", "Raporlama"],
    scopeItems: [
      "Termal veya endüstriyel kamera görüntülerinin teknik olarak analiz edilmesi",
      "Sıcak nokta, yüzey farkı, renk, doku ve alan değişimlerinin incelenmesi",
      "Test sonuçlarının anlaşılır görsel raporlarla sunulması",
      "Endüstriyel kalite ve tesis performans analizlerine veri desteği",
    ],
  },
  {
    slug: "goruntu-kalite-kontrol",
    title: "Görüntü Kalite Kontrol",
    scopeTitles: ["Kamera Yerleşimi", "Kalite Parametreleri", "Hata Tespiti", "Raporlama"],
    scopeItems: [
      "Ürün, ekipman veya yüzeylerde görsel kalite değerlendirmesi",
      "Termal ve optik görüntüleme senaryolarının birlikte kurgulanması",
      "Endüstriyel tesislerde kalite ve bakım süreçlerinin desteklenmesi",
      "Veriye dayalı hata sınıflandırma ve karşılaştırmalı raporlama",
    ],
  },
  {
    slug: "2d-goruntu-isleme",
    title: "2D Görüntü İşleme",
    scopeTitles: ["2D Analiz", "Ölçüm", "Yüzey Kontrolü", "Veri Çıktıları"],
    scopeItems: [
      "Kamera görüntülerinden boyut, konum, renk ve yüzey bilgisi çıkarılması",
      "Kalite kontrol, saha gözlemi ve teknik analiz senaryoları",
      "Hata, eksik parça veya değişimlerin otomatik tespiti",
      "Karşılaştırılabilir ve raporlanabilir görsel analiz çıktıları",
    ],
  },
  {
    slug: "3d-goruntu-isleme",
    title: "3D Görüntü İşleme",
    scopeTitles: ["3D Veri Toplama", "Derinlik Analizi", "Form ve Hacim", "Endüstriyel Kullanım"],
    scopeItems: [
      "3D kamera veya sensör verileriyle nesne ve yüzey analizi",
      "Boyutsal kontrol, hacim ölçümü ve konum doğrulama",
      "Robotik, kalite kontrol ve endüstriyel izleme senaryoları",
      "Görsel raporlama ve teknik veri kaydı",
    ],
  },
  {
    slug: "boyut-renk-ve-doku-analizi",
    title: "Boyut, Renk ve Doku Analizi",
    scopeTitles: ["Boyutsal Kontrol", "Renk Analizi", "Doku Analizi", "Kalite Raporu"],
    scopeItems: [
      "Ürün veya ekipman yüzeyinde renk ve doku değişimlerinin tespiti",
      "Boyut ve geometri kontrol süreçlerinin kamera verisiyle desteklenmesi",
      "Termal analizlerde yüzey özellikleriyle korelasyon kurulması",
      "Endüstriyel kalite kontrol için ölçülebilir çıktı oluşturulması",
    ],
  },
  {
    slug: "endustriyel-goruntu-isleme-cozumleri",
    title: "Endüstriyel Görüntü İşleme Çözümleri",
    scopeTitles: ["Kamera Altyapısı", "Analiz Algoritmaları", "Süreç Entegrasyonu", "Raporlama"],
    scopeItems: [
      "Makine, üretim hattı ve tesis ekipmanlarının görsel analizi",
      "Kalite, güvenlik ve bakım süreçleri için kamera verisinin kullanılması",
      "SCADA, MOM ve raporlama yazılımlarıyla entegre edilebilir yapı",
      "Saha ihtiyacına göre proje bazlı özel çözüm geliştirme",
    ],
  },
  {
    slug: "goruntu-isleme-kameralari",
    title: "Görüntü İşleme Kameraları",
    scopeTitles: ["Kamera Seçimi", "Lens ve Aydınlatma", "Veri Aktarımı", "Saha Yerleşimi"],
    scopeItems: [
      "Termal, optik veya endüstriyel kameraların kullanım amacına göre seçilmesi",
      "Aydınlatma, açı, mesafe ve çözünürlük parametrelerinin değerlendirilmesi",
      "Analiz yazılımları ve raporlama sistemleriyle veri akışı",
      "Test ve kalite kontrol senaryoları için doğru kamera yerleşimi",
    ],
  },
  {
    slug: "uyarlanabilir-goruntu-isleme-cozumleri",
    title: "Uyarlanabilir Görüntü İşleme Çözümleri",
    scopeTitles: ["İhtiyaç Analizi", "Özel Algoritma", "Saha Adaptasyonu", "Sistem Entegrasyonu"],
    scopeItems: [
      "Farklı üretim, tesis ve analiz ihtiyaçlarına göre özel çözüm geliştirme",
      "Kamera, sensör, yazılım ve raporlama bileşenlerinin birlikte tasarlanması",
      "Mevcut tesis altyapısına adapte edilebilir uygulama yaklaşımı",
      "Pilot uygulama, saha doğrulama ve performans iyileştirme",
    ],
  },
]);

const pressureSolutions = createSolutions("basinc-testleri", [
  {
    slug: "basinc-ve-hava-akisi-izleme",
    title: "Basınç ve Hava Akışı İzleme",
    scopeTitles: ["Basınç Sensörleri", "Hava Akışı", "Trend Takibi", "Raporlama"],
    scopeItems: [
      "Soğuk ve sıcak koridorlar ile kontrollü hacimlerde basınç farkının izlenmesi",
      "Sensör verilerinin SCADA, DCIM ve raporlama sistemlerine aktarılması",
      "Alarm eşikleri, sapmalar ve uzun dönem trendlerinin analiz edilmesi",
      "Ölçüm sonuçlarının operasyonel iyileştirme önerilerine dönüştürülmesi",
    ],
  },
  {
    slug: "containment-performans-raporlama",
    title: "Containment Performans Raporlama",
    scopeTitles: ["Ölçüm Planı", "Saha Testi", "Veri Analizi", "İyileştirme"],
    scopeItems: [
      "Containment yapısının hava yönetimi açısından değerlendirilmesi",
      "Basınç, sıcaklık ve hava akışı ölçümlerinin birlikte yorumlanması",
      "Yönetim ve teknik ekipler için raporlama çıktılarının hazırlanması",
      "Enerji verimliliği ve soğutma performansı için iyileştirme önerileri",
    ],
  },
]);

const poeSolutions = createSolutions("poe-analizleri", [
  {
    slug: "personel-isyeri-verimliligi-cozumleri",
    title: "Personel İşyeri Verimliliği Çözümleri",
    scopeTitles: ["Mevcut Durum", "Süreç Verileri", "Alan Kullanımı", "İyileştirme"],
    scopeItems: [
      "İşyeri verimliliğinin ölçüm ve raporlama ile değerlendirilmesi",
      "Personel, süreç, alan ve ekipman kullanım verilerinin ilişkilendirilmesi",
      "Kullanıcı deneyimi ve operasyon verimliliği çıktılarının oluşturulması",
      "Sürdürülebilir iyileştirme için periyodik takip yaklaşımı",
    ],
  },
  {
    slug: "barkod-ve-stok-takip-cozumleri",
    title: "Barkod ve Stok Takip Çözümleri",
    scopeTitles: ["Barkod Altyapısı", "Varlık Takibi", "Depo ve Saha", "Raporlama"],
    scopeItems: [
      "Malzeme, ekipman ve demirbaş hareketlerinin kayıt altına alınması",
      "Stok takip yazılımı ve ERP sistemleriyle entegrasyon",
      "Alan ve kaynak kullanım analizlerine güvenilir veri oluşturulması",
      "Operasyonel izlenebilirlik ve kayıt doğruluğunun artırılması",
    ],
  },
  {
    slug: "model-fabrika",
    title: "Model Fabrika",
    scopeTitles: ["Eğitim Alanı", "Pilot Süreç", "Dijital Dönüşüm", "Performans Ölçümü"],
    scopeItems: [
      "Yeni teknolojilerin gerçekçi bir operasyon ortamında denenmesi",
      "Personel eğitimi ve süreç doğrulama amaçlı pilot uygulamalar",
      "Verimlilik, kalite ve dijitalleşme kazanımlarının ölçülmesi",
      "POE ve operasyonel iyileştirme çalışmalarına veri desteği",
    ],
  },
  {
    slug: "egitim-kitleri-cozumleri",
    title: "Eğitim Kitleri Çözümleri",
    scopeTitles: ["Uygulamalı Eğitim", "Teknik Senaryolar", "Prototip ve Demo", "Kullanıcı Yetkinliği"],
    scopeItems: [
      "Otomasyon, sensör, yazılım ve izleme sistemleri için eğitim altyapıları",
      "Personel yetkinliğini artırmaya yönelik uygulamalı senaryolar",
      "Yeni sistemlerin devreye alınması öncesinde test ortamı",
      "POE sonuçlarına göre kullanıcı eğitim ihtiyacının desteklenmesi",
    ],
  },
  {
    slug: "robotik-montaj-sistemleri",
    title: "Robotik Montaj Sistemleri",
    scopeTitles: ["Robotik Süreç", "Otomasyon", "Verimlilik Ölçümü", "Güvenlik"],
    scopeItems: [
      "Endüstriyel tesislerde robotik montaj ve otomasyon senaryoları",
      "Üretim performansı, süre, kalite ve kapasite verilerinin değerlendirilmesi",
      "MOM, SCADA ve raporlama sistemleriyle entegrasyon yaklaşımı",
      "Kullanıcı, proses ve alan etkisinin birlikte analiz edilmesi",
    ],
  },
  {
    slug: "auto-scale",
    title: "Auto Scale",
    scopeTitles: ["Otomatik Ölçüm", "Veri Toplama", "Raporlama", "Süreç Entegrasyonu"],
    scopeItems: [
      "Operasyonel ölçüm verilerinin otomatik ve dijital olarak kaydedilmesi",
      "Stok, üretim, sevkiyat veya kalite süreçlerinde kullanım",
      "ERP, stok takip ve raporlama sistemleriyle entegrasyon",
      "Süreç doğruluğu ve verimlilik analizleri için güvenilir veri üretimi",
    ],
  },
]);

const carbonSolutions = createSolutions("karbon-analizi", [
  {
    slug: "karbon-raporlama-ve-veri-analitigi",
    title: "Karbon Raporlama ve Veri Analitiği",
    scopeTitles: ["Veri Toplama", "Emisyon Göstergeleri", "Dashboard", "İyileştirme Takibi"],
    scopeItems: [
      "Tesis tüketim verilerinden izlenebilir karbon performans veri seti oluşturulması",
      "Raporlama yazılımı ve dashboardlar üzerinden periyodik takip",
      "Enerji verimliliği ve sürdürülebilirlik hedefleri için ölçülebilir çıktı",
      "Proje kapsamına uygun danışmanlık ve standart uyum değerlendirmesi",
    ],
  },
  {
    slug: "enerji-ve-tuketim-izleme",
    title: "Enerji ve Tüketim İzleme",
    scopeTitles: ["Sayaç Verileri", "Tüketim Trendleri", "Anomali Tespiti", "Raporlama"],
    scopeItems: [
      "Enerji ve kaynak tüketimlerinin merkezi olarak izlenmesi",
      "Aşırı tüketim, sapma ve verimsizlik noktalarının belirlenmesi",
      "Karbon analizi ve işletme maliyeti raporlarına veri oluşturulması",
      "SCADA, DCIM ve raporlama yazılımlarıyla bütünleşik çalışma",
    ],
  },
]);

const waterSolutions = createSolutions("su-analizi", [
  {
    slug: "atik-su-aritma-simulasyon-yazilimi",
    title: "Atık Su Arıtma Simülasyon Yazılımı",
    scopeTitles: ["Süreç Simülasyonu", "Senaryo Testleri", "Kaynak Optimizasyonu", "Operatör Eğitimi"],
    scopeItems: [
      "Arıtma proseslerinin fiziksel ve kimyasal davranışlarının dijital modellenmesi",
      "Farklı işletme senaryolarının gerçek tesis riski olmadan test edilmesi",
      "Enerji ve kimyasal tüketiminin ölçülebilir biçimde optimize edilmesi",
      "Grafik arayüzler ve detaylı raporlarla kontrol ve eğitim desteği",
    ],
  },
  {
    slug: "su-tuketimi-ve-performans-raporlama",
    title: "Su Tüketimi ve Performans Raporlama",
    scopeTitles: ["Su Verisi", "Tüketim Trendleri", "Performans Göstergeleri", "İyileştirme Raporu"],
    scopeItems: [
      "Sayaç, proses ve saha verilerinin raporlanabilir hale getirilmesi",
      "Tüketim, kayıp, verimlilik ve çevresel performans değerlendirmesi",
      "Karbon ve sürdürülebilirlik raporlarıyla birlikte kullanılabilir çıktı",
      "Tesis, kampüs ve kritik altyapılar için iyileştirme yol haritası",
    ],
  },
]);

// subSolutions, sitedeki tüm alt çözüm ve ürün sayfalarının tek içerik kaynağıdır.
export const subSolutions: SubSolution[] = [
  ...dcimSolutions,
  ...lowCurrentSolutions,
  ...dataCenterSolutions,
  ...thermalSolutions,
  ...pressureSolutions,
  ...poeSolutions,
  ...carbonSolutions,
  ...waterSolutions,
];

// getSubSolutionsByParent, ana çözüm kartlarını parent slug değerine göre filtreler.
export function getSubSolutionsByParent(parentSlug: string) {
  return subSolutions.filter((solution) => solution.parentSlug === parentSlug);
}

// getSubSolution, nested route için tek bir alt çözümü bulur.
export function getSubSolution(parentSlug: string, childSlug: string) {
  return subSolutions.find((solution) => solution.parentSlug === parentSlug && solution.slug === childSlug);
}
