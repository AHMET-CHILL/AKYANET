export type ReferenceProjectStatus = "tamamlanan" | "devam-eden";

export type ReferenceWorkItem = {
  title: string;
  description: string;
};

export type ReferenceProject = {
  slug: string;
  status: ReferenceProjectStatus;
  statusLabel: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  logo: string;
  workItems: ReferenceWorkItem[];
  gallery: { src: string; alt: string }[];
  emphasis: string;
  seoDescription: string;
  usesVerimet?: boolean;
};

export const referenceStatusLabels: Record<ReferenceProjectStatus, string> = {
  tamamlanan: "Tamamlanan Projeler",
  "devam-eden": "Devam Eden Projeler",
};

// referenceProjects, Referanslar alanındaki kart, menü ve detay sayfalarının tek içerik kaynağıdır.
export const referenceProjects: ReferenceProject[] = [
  {
    slug: "ptt-veri-merkezi",
    status: "tamamlanan",
    statusLabel: "Tamamlanan Proje",
    title: "PTT Veri Merkezi",
    summary:
      "Kartlı geçiş sistemi panosu, merkezi yetkilendirme ve yazılım entegrasyonlarıyla kritik alan erişimleri güvenli, izlenebilir ve yönetilebilir hale getirildi.",
    description:
      "PTT Veri Merkezi projesinde AKYA Group, fiziksel erişim güvenliğinin merkezi olarak yönetilmesi ve kritik alanlara yapılan girişlerin kayıt altına alınması amacıyla bütünleşik bir geçiş kontrol altyapısı oluşturmuştur. Kartlı geçiş sistemi panosu, saha ekipmanları, kullanıcı yetkilendirmeleri ve yazılım katmanı birbiriyle uyumlu çalışacak şekilde devreye alınmıştır. Bu yapı sayesinde yalnızca yetkili personelin belirlenen alanlara erişebilmesi, geçiş hareketlerinin zaman ve kullanıcı bilgisiyle izlenebilmesi ve güvenlik süreçlerinin merkezi bir noktadan yönetilebilmesi sağlanmıştır. Proje, günlük operasyonları zorlaştırmadan veri merkezinin fiziksel güvenlik seviyesini yükselten, denetlenebilir ve sürdürülebilir bir erişim yönetimi yaklaşımı sunmaktadır.",
    image: "/assets/referanslar/ptt-pkds-panosu.jpeg",
    imageAlt: "PTT Veri Merkezi kartlı geçiş sistemi panosu",
    logo: "/reference-ptt.png",
    workItems: [
      {
        title: "Merkezi PKDS Kontrol Panosu",
        description:
          "Personel Kartlı Geçiş Sistemi altyapısının merkezi ve düzenli biçimde yönetilebilmesi için kontrol panosu oluşturulmuştur. Güç, kontrol ve saha bağlantıları teknik işletme ihtiyaçlarına uygun biçimde organize edilerek sistemin güvenilir, erişilebilir ve bakımı kolay bir yapıda çalışması sağlanmıştır.",
      },
      {
        title: "Yetki Bazlı Kartlı Geçiş Sistemi",
        description:
          "Personelin yalnızca yetkili olduğu veri merkezi bölümlerine erişebilmesi için kart bazlı geçiş kontrolü uygulanmıştır. Alan, kullanıcı ve yetki seviyelerine göre kurgulanan erişim yapısı sayesinde kritik mahaller korunmuş, yetkisiz giriş riski azaltılmış ve fiziksel güvenlik süreçleri standart hale getirilmiştir.",
      },
      {
        title: "Yazılım Entegrasyonları",
        description:
          "Kart tanımlama, kullanıcı yetkilendirme, geçiş kayıtları ve olay izleme süreçleri yazılım altyapısıyla bütünleştirilmiştir. Saha ekipmanlarından gelen bilgilerin merkezi sistemde toplanmasıyla güvenlik ekiplerinin güncel durumu takip etmesi ve ihtiyaç halinde geçmiş hareketleri incelemesi mümkün hale getirilmiştir.",
      },
      {
        title: "Geçiş Kayıtları ve İzlenebilirlik",
        description:
          "Gerçekleşen erişim hareketlerinin kullanıcı, konum ve zaman bilgileriyle kayıt altına alınması sağlanmıştır. Bu kayıt yapısı; olay inceleme, operasyon takibi ve güvenlik kontrollerinde ihtiyaç duyulan izlenebilirliği destekleyerek erişim süreçlerini denetlenebilir hale getirmiştir.",
      },
      {
        title: "Devreye Alma ve Sistem Kontrolleri",
        description:
          "Kontrol panosu, kart okuyucular, erişim noktaları ve yazılım bileşenleri birlikte test edilerek sistemin uçtan uca doğru çalışması doğrulanmıştır. Yetkilendirme senaryoları ve saha tepkileri kontrol edilerek altyapı operasyon ekiplerinin kullanımına hazır hale getirilmiştir.",
      },
    ],
    gallery: [
      {
        src: "/assets/referanslar/ptt-pkds-panosu.jpeg",
        alt: "PTT Veri Merkezi kartlı geçiş sistemi panosu",
      },
    ],
    emphasis: "Merkezi yetkilendirme, kayıtlı geçiş hareketleri ve denetlenebilir erişim süreçleriyle güçlenen fiziksel güvenlik.",
    seoDescription:
      "PTT Veri Merkezi için PKDS kontrol panosu, yetki bazlı kartlı geçiş, erişim kayıtları ve yazılım entegrasyonlarını kapsayan fiziksel güvenlik projesi.",
  },
  {
    slug: "cevre-ve-sehircilik-bakanligi-veri-merkezi",
    status: "tamamlanan",
    statusLabel: "Tamamlanan Proje",
    title: "Çevre ve Şehircilik Bakanlığı Veri Merkezi",
    summary:
      "Yapısal kablolama, termal ve CFD analizleri, sensör ağı ve gelişmiş erişim kontrol çözümleriyle veri merkezi daha ölçülebilir, güvenli ve yönetilebilir hale getirildi.",
    description:
      "Çevre ve Şehircilik Bakanlığı Veri Merkezi projesinde AKYA Group; haberleşme altyapısından çevresel izlemeye, hava akışı analizlerinden fiziksel erişim güvenliğine kadar farklı teknik katmanları bütünleşik bir yaklaşımla ele almıştır. Yapısal kablolama çalışmalarıyla düzenli ve sürdürülebilir bir bağlantı altyapısı oluşturulmuş; termal, CFD ve basınç analizleriyle soğutma performansı ile hava hareketleri ölçülebilir veriler üzerinden değerlendirilmiştir. Sıcaklık, nem, kapı ve çevresel durumların takip edilmesini sağlayan sensör ağı ile veri merkezinin anlık operasyonel görünürlüğü güçlendirilmiştir. Kartlı ve yüz tanıma destekli erişim kontrol sistemleri ile yazılım entegrasyonları sayesinde fiziksel güvenlik, izleme ve raporlama süreçleri ortak bir yönetim yapısında birleştirilmiştir.",
    image: "/assets/referanslar/cevre-sehircilik-veri-merkezi.jpg",
    imageAlt: "Çevre ve Şehircilik Bakanlığı Veri Merkezi",
    logo: "/reference-environment-ministry.svg",
    workItems: [
      {
        title: "Yapısal Kablolama Altyapısı",
        description:
          "Veri merkezi ve teknik hacimlerdeki haberleşme ihtiyaçları için düzenli, ölçeklenebilir ve yönetilebilir bir yapısal kablolama altyapısı planlanıp uygulanmıştır. Kablo güzergahlarının erişilebilir ve anlaşılır biçimde düzenlenmesiyle bakım, arıza müdahalesi ve gelecekte yapılacak kapasite artırımlarının daha kontrollü yürütülmesi desteklenmiştir.",
      },
      {
        title: "Termal Analiz ve CFD Analizi",
        description:
          "Veri merkezi içindeki sıcaklık dağılımı, hava akış yönleri ve soğutma performansı sayısal veriler ve CFD modellemeleri üzerinden değerlendirilmiştir. Sıcak nokta oluşma riski bulunan bölgelerin belirlenmesi, soğuk havanın ekipmanlara etkin biçimde ulaştırılması ve mevcut soğutma kapasitesinin daha verimli kullanılması hedeflenmiştir.",
      },
      {
        title: "Basınç ve Hava Kaçağı Analizi",
        description:
          "Oda ve containment alanlarındaki basınç farklılıkları ile kontrolsüz hava kaçakları incelenmiştir. Soğutulmuş havanın istenen güzergahlarda tutulması, sıcak ve soğuk hava karışımının azaltılması ve iklimlendirme sisteminin gerçek çalışma koşullarındaki performansının doğrulanması amaçlanmıştır.",
      },
      {
        title: "Çevresel Sensör Ağı",
        description:
          "Sıcaklık, nem, kapı durumu ve kritik çevresel koşulların farklı noktalardan sürekli takip edilebilmesi için sensör ağı kurulmuştur. Ölçümlerin merkezi olarak izlenmesiyle ani değişimlerin erken fark edilmesi, kritik eşiklerin takip edilmesi ve teknik ekiplerin sahadaki gerçek verilere göre hareket etmesi sağlanmıştır.",
      },
      {
        title: "Kartlı ve Yüz Tanıma Destekli Erişim",
        description:
          "Kritik veri merkezi alanlarına erişimin kontrollü yürütülmesi için kartlı geçiş ve yüz tanıma teknolojileri birlikte kullanılmıştır. Çok katmanlı doğrulama yaklaşımıyla yetkisiz giriş riskinin azaltılması, personel hareketlerinin kayıt altına alınması ve fiziksel güvenlik seviyesinin yükseltilmesi hedeflenmiştir.",
      },
      {
        title: "Yazılım Entegrasyonları",
        description:
          "Erişim kontrol sistemleri, çevresel sensörler ve izleme bileşenlerinden gelen veriler ortak bir yazılım altyapısında bir araya getirilmiştir. Alarm, durum ve geçmiş kayıtların merkezi olarak izlenebilmesiyle farklı teknik sistemlerin tek tek takip edilmesi yerine bütünleşik ve raporlanabilir bir operasyon yapısı oluşturulmuştur.",
      },
      {
        title: "Ölçüm ve Operasyonel Doğrulama",
        description:
          "Analiz, sensör ve izleme verileri birlikte değerlendirilerek veri merkezinin gerçek çalışma koşulları görünür hale getirilmiştir. Bu yaklaşım, iyileştirme ihtiyaçlarının varsayımlar yerine ölçülebilir bulgularla belirlenmesine ve teknik kararların doğrulanabilir verilere dayandırılmasına katkı sağlamıştır.",
      },
    ],
    gallery: [],
    emphasis: "Hava akışı, çevresel izleme, bağlantı altyapısı ve fiziksel güvenliği ortak bir yönetim yaklaşımında buluşturan ölçülebilir veri merkezi çözümü.",
    seoDescription:
      "Çevre ve Şehircilik Bakanlığı Veri Merkezi için yapısal kablolama, termal ve CFD analizleri, sensör ağı, erişim kontrolü ve yazılım entegrasyonlarını kapsayan proje.",
  },
  {
    slug: "turk-telekom-umitkoy-veri-merkezi",
    status: "devam-eden",
    statusLabel: "Devam Eden Proje",
    title: "Türk Telekom Ümitköy Veri Merkezi",
    summary:
      "DCIM yazılımı, merkezi izleme ve gelişmiş entegrasyonlarla veri merkezi operasyonları daha görünür, ölçülebilir ve yönetilebilir hale getiriliyor.",
    description:
      "AKYA Group, Türk Telekom Ümitköy Veri Merkezi projesinde kritik altyapıların tek merkezden izlenmesini ve operasyonel verilerin anlamlı bir yönetim kaynağına dönüştürülmesini sağlayan kapsamlı bir DCIM yaklaşımı geliştirmektedir. Enerji, çevresel koşullar, kapasite, ekipman durumu ve alarm verilerinin ortak bir platformda birleştirilmesiyle teknik ekiplerin veri merkezini anlık olarak takip edebilmesi hedeflenmektedir. Oluşturulan dijital görünürlük sayesinde olası risklerin erken fark edilmesi, kaynak kullanımının daha doğru planlanması, müdahale sürelerinin kısaltılması ve operasyonel kararların ölçülebilir verilere dayandırılması amaçlanmaktadır.",
    image: "/assets/referanslar/turk-telekom-umitkoy-veri-merkezi.jpg",
    imageAlt: "Türk Telekom Ümitköy Veri Merkezi",
    logo: "/reference-turk-telekom.svg",
    workItems: [
      {
        title: "Merkezi DCIM Yönetim Platformu",
        description:
          "Veri merkezindeki kritik altyapı bileşenlerinin ortak bir yönetim ekranında izlenebilmesi için merkezi bir DCIM platformu yapılandırılmaktadır. Dağınık durumdaki teknik verilerin tek bir dijital çatı altında toplanmasıyla ekipman durumu, enerji kullanımı, çevresel değerler ve kapasite bilgileri daha anlaşılır ve yönetilebilir hale getirilmektedir.",
      },
      {
        title: "Canlı İzleme ve Alarm Yönetimi",
        description:
          "Kritik eşiklerin, cihaz durumlarının ve çevresel değişimlerin anlık olarak takip edilmesi hedeflenmektedir. Alarm bilgilerinin önem derecesine göre sınıflandırılması, ilgili ekiplerin doğru zamanda bilgilendirilmesi ve olay geçmişinin kayıt altına alınmasıyla müdahale süreçlerinin hızlandırılması amaçlanmaktadır.",
      },
      {
        title: "Enerji ve Kapasite Görünürlüğü",
        description:
          "Enerji tüketimi, güç dağılımı, rack ve kabinet dolulukları ile altyapı kapasitesinin ölçülebilir veriler üzerinden izlenmesi planlanmaktadır. Bu görünürlük; mevcut kaynakların verimli kullanılmasına, büyüme ihtiyaçlarının önceden görülmesine ve yeni yatırımların daha sağlıklı planlanmasına katkı sağlamaktadır.",
      },
      {
        title: "Varlık ve Ekipman Takibi",
        description:
          "Veri merkezindeki cihazların, konumların ve teknik özelliklerin güncel bir dijital envanter üzerinden takip edilmesi hedeflenmektedir. Ekipman yaşam döngüsü, bakım bilgileri ve operasyonel durumların ilişkilendirilmesiyle saha ekiplerinin ihtiyaç duyduğu bilgiye daha hızlı ulaşması desteklenmektedir.",
      },
      {
        title: "Yazılım Entegrasyonları",
        description:
          "Mevcut izleme, otomasyon ve teknik yönetim sistemlerinden gelen verilerin DCIM altyapısına güvenli ve tutarlı biçimde aktarılması için entegrasyon çalışmaları yürütülmektedir. Farklı kaynaklardaki alarm, ölçüm, varlık ve durum bilgilerinin birbiriyle konuşan bütünleşik bir yapıya dönüştürülmesi amaçlanmaktadır.",
      },
      {
        title: "Raporlama ve Karar Desteği",
        description:
          "Toplanan operasyon verilerinin anlaşılır panolar, eğilim analizleri ve dönemsel raporlarla sunulması hedeflenmektedir. Böylece teknik ekiplerin yalnızca anlık durumları değil, zaman içindeki değişimleri de değerlendirmesi; kapasite, enerji ve bakım kararlarını somut verilere dayandırması desteklenmektedir.",
      },
    ],
    gallery: [
      {
        src: "/assets/referanslar/turk-telekom-umitkoy-veri-merkezi.jpg",
        alt: "Türk Telekom Ümitköy Veri Merkezi",
      },
    ],
    emphasis: "Anlık görünürlük, erken uyarı ve veriye dayalı karar desteğiyle daha kontrollü veri merkezi operasyonları.",
    seoDescription:
      "Türk Telekom Ümitköy Veri Merkezi için merkezi izleme, alarm yönetimi, enerji ve kapasite takibi, varlık yönetimi ve yazılım entegrasyonlarını kapsayan DCIM projesi.",
  },
  {
    slug: "rtuk-veri-merkezi",
    status: "devam-eden",
    statusLabel: "Devam Eden Proje",
    title: "RTÜK Veri Merkezi",
    summary:
      "Kapasite artırımı, ek soğutma, güç dağıtımı, kablolama ve Verimet PDU çözümleriyle veri merkezi altyapısı daha güçlü, izlenebilir ve sürdürülebilir hale getiriliyor.",
    description:
      "RTÜK Veri Merkezi projesinde AKYA Group, mevcut altyapının artan sunucu ve ekipman ihtiyaçlarına güvenle cevap verebilmesi için kapasite, soğutma, enerji ve bağlantı katmanlarını birlikte ele alan kapsamlı bir iyileştirme çalışması yürütmektedir. Yeni donanımların oluşturacağı güç ve ısıl yükler değerlendirilerek ek enerji dağıtım altyapısı hazırlanmakta, soğutma kapasitesi güçlendirilmekte ve veri iletişim hatları daha düzenli, erişilebilir ve yönetilebilir bir yapıya kavuşturulmaktadır. Rack seviyesindeki güç dağıtımında AKYA Group markası Verimet PDU çözümlerinin kullanılmasıyla enerji altyapısının operasyonel görünürlüğünün ve kontrol kabiliyetinin artırılması hedeflenmektedir. Bütünleşik saha yaklaşımı sayesinde veri merkezinin bugünkü ihtiyaçlarının karşılanmasının yanında gelecekteki büyüme senaryolarına hazır, sürdürülebilir bir teknik altyapı oluşturulması amaçlanmaktadır.",
    image: "/assets/referanslar/rtuk-genel.jpeg",
    imageAlt: "RTÜK Veri Merkezi genel görünümü",
    logo: "/reference-rtuk.png",
    workItems: [
      {
        title: "Kontrollü Kapasite Artırımı",
        description:
          "Mevcut veri merkezi altyapısı, yeni sunucu ve aktif ekipman ihtiyaçlarının oluşturacağı güç, soğutma ve bağlantı gereksinimleri birlikte değerlendirilerek genişletilmektedir. Yeni kapasitenin mevcut operasyonları kesintiye uğratmadan devreye alınması ve altyapının gelecekteki büyüme ihtiyaçlarına cevap verebilmesi hedeflenmektedir.",
      },
      {
        title: "Soğutma Kapasitesinin Güçlendirilmesi",
        description:
          "Artan ekipman yoğunluğuyla birlikte oluşan ilave ısıl yüklerin güvenli biçimde yönetilebilmesi için ek klima ve soğutma sistemi altyapıya dahil edilmektedir. Sıcaklık koşullarının kritik donanımlar için uygun aralıkta tutulması, sıcak nokta risklerinin azaltılması ve kesintisiz operasyonun desteklenmesi amaçlanmaktadır.",
      },
      {
        title: "Enerji Altyapısı ve Pano Düzenlemeleri",
        description:
          "Yeni kapasite ihtiyacının güvenilir şekilde beslenebilmesi için elektrik panosu ve güç dağıtım altyapısı geliştirilmektedir. Bağlantı düzenlemeleri, pano içi organizasyon, yüklerin uygun biçimde dağıtılması, saha kontrolleri ve son uygunluk çalışmalarıyla enerji altyapısının güvenli ve sürdürülebilir çalışması desteklenmektedir.",
      },
      {
        title: "Fiber ve Cat6 Kablolama Altyapısı",
        description:
          "Sunucular, ağ ekipmanları ve teknik sistemler arasındaki haberleşmenin güvenilir biçimde sürdürülebilmesi için fiber ve Cat6 bağlantıları düzenlenmektedir. Kablo güzergahlarının daha okunabilir, erişilebilir ve bakımı kolay bir yapıya alınmasıyla arıza müdahalesinin hızlandırılması ve bağlantı karmaşasının azaltılması hedeflenmektedir.",
      },
      {
        title: "Verimet Akıllı PDU Çözümleri",
        description:
          "Rack seviyesindeki güç dağıtımında AKYA Group’un kendi markası olan Verimet PDU ürünleri kullanılmaktadır. Kabinet içindeki cihazların güvenli biçimde beslenmesini sağlayan bu yapı, enerji kullanımının daha görünür hale gelmesine ve güç altyapısının kontrollü biçimde yönetilmesine katkı sağlamaktadır.",
      },
      {
        title: "Operasyonel Süreklilik ve Ölçeklenebilirlik",
        description:
          "Enerji, soğutma, kablolama ve rack altyapısının birbirinden bağımsız değil, aynı operasyonun tamamlayıcı parçaları olarak ele alınmasıyla veri merkezinin sürekliliği güçlendirilmektedir. Yapılan iyileştirmelerin yeni ekipman eklemelerine, bakım ihtiyaçlarına ve kapasite artışlarına uyum sağlayabilecek ölçeklenebilir bir temel oluşturması amaçlanmaktadır.",
      },
    ],
    gallery: [
      { src: "/assets/referanslar/rtuk-genel.jpeg", alt: "RTÜK Veri Merkezi genel görünümü" },
      { src: "/assets/referanslar/rtuk-elektrik-pano.jpeg", alt: "RTÜK Veri Merkezi elektrik panosu çalışması" },
      { src: "/assets/referanslar/rtuk-klima.jpeg", alt: "RTÜK Veri Merkezi soğutma sistemi" },
      { src: "/assets/referanslar/rtuk-koridor.jpeg", alt: "RTÜK Veri Merkezi koridor ve kablolama çalışması" },
    ],
    emphasis: "Enerji, soğutma, bağlantı ve akıllı güç dağıtımını bir araya getiren ölçeklenebilir veri merkezi yaklaşımı.",
    seoDescription:
      "RTÜK Veri Merkezi için kapasite artırımı, soğutma altyapısı, enerji dağıtımı, fiber ve Cat6 kablolama ile Verimet akıllı PDU çözümlerini kapsayan proje.",
    usesVerimet: true,
  },
];

export function getReferenceProjectsByStatus(status: ReferenceProjectStatus) {
  return referenceProjects.filter((project) => project.status === status);
}

export function getReferenceProject(status: string, slug: string) {
  return referenceProjects.find((project) => project.status === status && project.slug === slug);
}
