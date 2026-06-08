import { NextResponse } from "next/server";

// ContactPayload tipi, iletişim formundan beklenen JSON alanlarını ifade eder.
type ContactPayload = {
  topic?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

// isValidEmail, basit e-posta format kontrolüyle hatalı gönderimleri erken yakalar.
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// POST, iletişim formu gönderimini doğrular ve ileride CRM/e-posta entegrasyonuna bağlanacak sade bir API yüzeyi sunar.
export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const firstName = payload.firstName?.trim() ?? "";
  const lastName = payload.lastName?.trim() ?? "";
  const email = payload.email?.trim() ?? "";

  if (!payload.topic || !firstName || !lastName || !isValidEmail(email)) {
    return NextResponse.json({ message: "Zorunlu alanları kontrol edin." }, { status: 400 });
  }

  console.info("Yeni iletişim talebi", {
    topic: payload.topic,
    firstName,
    lastName,
    email,
    phone: payload.phone?.trim() ?? "",
    message: payload.message?.trim() ?? "",
  });

  return NextResponse.json({ message: "Mesaj alındı." }, { status: 200 });
}
