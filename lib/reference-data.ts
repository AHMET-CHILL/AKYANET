// Reference, ana sayfa bandı ve Referanslar sayfasında kullanılan kurum bilgisini tanımlar.
export type Reference = {
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
    name: "Posta ve Telgraf Teşkilatı A.Ş.",
    shortName: "PTT Genel Merkezi",
    logo: "/reference-ptt.png",
    description:
      "Kritik dijital operasyonların sürekliliğini destekleyen veri merkezi altyapı ve saha uygulaması çalışmaları.",
    projectHref: "/projeler/tamamlanan/ptt-genel-merkezi-veri-merkezi",
    projectLabel: "PTT Genel Merkezi Veri Merkezi",
    statusLabel: "Tamamlanan Proje",
  },
  {
    name: "Çevre, Şehircilik ve İklim Değişikliği Bakanlığı",
    shortName: "Çevre ve Şehircilik Bakanlığı",
    logo: "/reference-environment-ministry.svg",
    description:
      "Kamu hizmetlerinin dijital sürekliliğine yönelik kritik tesis ve veri merkezi mühendisliği çalışmaları.",
    projectHref: "/projeler/tamamlanan/cevre-sehircilik-bakanligi-veri-merkezi",
    projectLabel: "Bakanlık Veri Merkezi Projesi",
    statusLabel: "Tamamlanan Proje",
  },
  {
    name: "Radyo ve Televizyon Üst Kurulu",
    shortName: "RTÜK Genel Merkezi",
    logo: "/reference-rtuk.png",
    description:
      "Veri merkezi kapasitesi, soğutma, enerji ve bağlantı altyapısına yönelik bütünleşik geliştirme çalışmaları.",
    projectHref: "/projeler/devam-eden/rtuk-veri-merkezi-kapasite-artirimi",
    projectLabel: "RTÜK Veri Merkezi Altyapı Genişletme",
    statusLabel: "Devam Eden Proje",
  },
];
