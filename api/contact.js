const RECIPIENT_EMAIL = "emin.akyel@akya.tr";
const HELP_TYPES = new Set([
  "Bir projem var",
  "Ar-Ge iş birliği",
  "Teknik bilgi talebi",
  "Diğer",
]);

function clean(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function parseBody(request) {
  if (typeof request.body === "string") {
    try {
      return JSON.parse(request.body);
    } catch {
      return {};
    }
  }
  return request.body || {};
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({ message: "Bu işlem desteklenmiyor." });
    return;
  }

  const body = parseBody(request);
  if (clean(body.website, 200)) {
    response.status(200).json({ ok: true });
    return;
  }

  const helpType = clean(body.helpType, 80);
  const firstName = clean(body.firstName, 80);
  const lastName = clean(body.lastName, 80);
  const email = clean(body.email, 160).toLowerCase();
  const phone = clean(body.phone, 30);
  const message = clean(body.message, 5000);
  const consent = clean(body.consent, 20);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!HELP_TYPES.has(helpType) || !firstName || !lastName || !emailPattern.test(email) || !message || consent !== "accepted") {
    response.status(400).json({ message: "Lütfen zorunlu alanları geçerli bilgilerle doldurun." });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !fromEmail) {
    console.error("Contact form email environment variables are missing.");
    response.status(503).json({ message: "Form şu anda kullanılamıyor. Lütfen info@akya.net adresine e-posta gönderin." });
    return;
  }

  const fullName = `${firstName} ${lastName}`;
  const subject = `AKYA Energy iletişim formu: ${helpType}`;
  const text = [
    `Talep: ${helpType}`,
    `Ad Soyad: ${fullName}`,
    `E-posta: ${email}`,
    `Telefon: ${phone || "Belirtilmedi"}`,
    "",
    "Mesaj:",
    message,
  ].join("\n");
  const html = `
    <h2>AKYA Energy iletişim formu</h2>
    <p><strong>Talep:</strong> ${escapeHtml(helpType)}</p>
    <p><strong>Ad Soyad:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(phone || "Belirtilmedi")}</p>
    <p><strong>Mesaj:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  try {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `AKYA Energy Web Sitesi <${fromEmail}>`,
        to: [RECIPIENT_EMAIL],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    if (!emailResponse.ok) {
      const providerError = await emailResponse.text();
      console.error("Email provider error:", emailResponse.status, providerError);
      response.status(502).json({ message: "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin." });
      return;
    }

    response.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    response.status(500).json({ message: "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin." });
  }
}
