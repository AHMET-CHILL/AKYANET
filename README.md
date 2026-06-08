# Akya Dijital Dönüşüm Web Sitesi

Akya Dijital Dönüşüm için `emin.html` şablonundan Next.js App Router yapısına taşınmış kurumsal web sitesi.

## Teknoloji

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Next.js API Route ile sade iletişim formu backend'i

## Çalıştırma

```bash
npm install
npm run dev
```

Uygulama varsayılan olarak `http://localhost:3000` adresinde açılır.

## Notlar

- İçerikler `lib/site-data.ts` içinde merkezi olarak yönetilir.
- İletişim formu `app/api/contact/route.ts` endpoint'ine POST isteği gönderir.
- Bu çalışma ortamında `node` ve `npm` komutları bulunmadığı için kurulum ve build komutları çalıştırılamadı.
