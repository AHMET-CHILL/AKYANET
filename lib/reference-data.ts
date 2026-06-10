// Reference, ana sayfa bandı ve Referanslar sayfasında kullanılan kurum bilgisini tanımlar.
export type Reference = {
  slug: string;
  name: string;
  shortName: string;
  logo: string;
  description: string;
  projectHref: string;
  projectLabel: string;
  statusLabel: string;
};

// references, AKYA Group'un referans kurumlarını tek merkezden yönetir.
export const references: Reference[] = [
  {
    slug: "turk-telekom-umitkoy",
    name: "Türk Telekomünikasyon A.Ş.",
    shortName: "Türk Telekom Ümitköy",
    logo: "/reference-turk-telekom.svg",
    description:
      "Ümitköy yerleşkesindeki veri merkezi için kritik altyapı, saha uygulama, test ve devreye alma çalışmaları.",
    projectHref: "/referanslar/devam-eden/turk-telekom-umitkoy-veri-merkezi",
    projectLabel: "Türk Telekom Ümitköy Veri Merkezi",
    statusLabel: "Devam Eden Proje",
  },
  {
    slug: "ptt-genel-merkezi",
    name: "Posta ve Telgraf Teşkilatı A.Ş.",
    shortName: "PTT Genel Merkezi",
    logo: "/reference-ptt.png",
    description:
      "Kritik dijital operasyonların sürekliliğini destekleyen veri merkezi altyapı ve saha uygulaması çalışmaları.",
    projectHref: "/referanslar/tamamlanan/ptt-veri-merkezi",
    projectLabel: "PTT Veri Merkezi",
    statusLabel: "Tamamlanan Proje",
  },
  {
    slug: "cevre-sehircilik-bakanligi",
    name: "Çevre, Şehircilik ve İklim Değişikliği Bakanlığı",
    shortName: "Çevre ve Şehircilik Bakanlığı",
    logo: "/reference-environment-ministry.svg",
    description:
      "Kamu hizmetlerinin dijital sürekliliğine yönelik kritik tesis ve veri merkezi mühendisliği çalışmaları.",
    projectHref: "/referanslar/tamamlanan/cevre-ve-sehircilik-bakanligi-veri-merkezi",
    projectLabel: "Bakanlık Veri Merkezi Projesi",
    statusLabel: "Tamamlanan Proje",
  },
  {
    slug: "rtuk-genel-merkezi",
    name: "Radyo ve Televizyon Üst Kurulu",
    shortName: "RTÜK Genel Merkezi",
    logo: "/reference-rtuk.png",
    description:
      "Veri merkezi kapasitesi, soğutma, enerji ve bağlantı altyapısına yönelik bütünleşik geliştirme çalışmaları.",
    projectHref: "/referanslar/devam-eden/rtuk-veri-merkezi",
    projectLabel: "RTÜK Veri Merkezi",
    statusLabel: "Devam Eden Proje",
  },
];
