import type { NextConfig } from "next";

// Next.js yapılandırması deploy ortamında ekstra sunucu karmaşıklığı olmadan çalışacak şekilde sade tutulur.
const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Yerel ağdaki telefon ve bilgisayarların geliştirme sunucusunun istemci dosyalarını yüklemesine izin verir.
  allowedDevOrigins: ["192.168.74.18"],
  // Eski Veri Merkezi alt çözüm adreslerini yeni briefteki karşılıklarına yönlendirir.
  async redirects() {
    return [
      {
        source: "/cozumler/veri-merkezi/izleme-ve-alarm-yonetimi",
        destination: "/cozumler/veri-merkezi/veri-merkezi-izleme-alarm-yonetimi",
        permanent: true,
      },
      {
        source: "/cozumler/veri-merkezi/guvenlik-ve-erisim-kontrolu",
        destination: "/cozumler/veri-merkezi/fiziksel-guvenlik-erisim-kontrolu",
        permanent: true,
      },
      {
        source: "/cozumler/veri-merkezi/otomasyon-cozumleri",
        destination: "/cozumler/veri-merkezi/veri-merkezi-otomasyon-cozumleri",
        permanent: true,
      },
      {
        source: "/cozumler/zayif-akim-sistemleri/pacs-personel-devam-kontrol-sistemi",
        destination: "/cozumler/zayif-akim-sistemleri/pdks-personel-devam-kontrol-sistemi",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
