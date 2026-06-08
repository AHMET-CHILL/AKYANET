"use client";

import { FormEvent, useState } from "react";

// FormStatus tipi, form gönderim durumlarını sınırlı ve okunabilir seçeneklerle temsil eder.
type FormStatus = "idle" | "loading" | "success" | "error";

// ContactForm, kullanıcı girdisini API route'a gönderir ve temel geri bildirim durumlarını gösterir.
export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  // handleSubmit, form verisini JSON'a çevirip /api/contact endpoint'ine iletir.
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Form gönderilemedi.");
      }

      event.currentTarget.reset();
      setStatus("success");
      setMessage("Mesajınız alındı. En kısa sürede sizinle iletişime geçeceğiz.");
    } catch {
      setStatus("error");
      setMessage("Mesaj gönderilirken bir sorun oluştu. Lütfen bilgileri kontrol edip tekrar deneyin.");
    }
  };

  return (
    <div className="bg-slate-gray p-6 md:p-10 lg:w-2/3">
      <form className="grid grid-cols-1 gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
        <div className="md:col-span-2">
          <label className="mb-2 block font-label-caps text-label-caps text-deep-navy" htmlFor="topic">
            NASIL YARDIMCI OLABİLİRİZ?*
          </label>
          <select className="w-full border-b border-outline bg-transparent py-3 outline-none focus:border-metallic-gold focus:ring-0" id="topic" name="topic" required>
            <option value="project">Bir projem var</option>
            <option value="information">Bilgi almak istiyorum</option>
            <option value="partnership">İş ortaklığı konuşmak istiyorum</option>
          </select>
        </div>

        <InputField label="AD*" name="firstName" required />
        <InputField label="SOYAD*" name="lastName" required />
        <InputField label="E-POSTA*" name="email" required type="email" />
        <InputField label="TELEFON" name="phone" type="tel" />

        <div className="md:col-span-2">
          <label className="mb-2 block font-label-caps text-label-caps text-deep-navy" htmlFor="message">
            MESAJ
          </label>
          <textarea className="w-full border-b border-outline bg-transparent py-3 outline-none focus:border-metallic-gold focus:ring-0" id="message" name="message" rows={4} />
        </div>

        <div className="md:col-span-2">
          <button
            className="w-full bg-deep-navy px-12 py-4 font-label-caps text-label-caps font-bold text-surface-container-lowest transition-all hover:bg-metallic-gold hover:text-deep-navy disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
            disabled={status === "loading"}
            type="submit"
          >
            {status === "loading" ? "GÖNDERİLİYOR" : "MESAJ GÖNDER"}
          </button>
        </div>

        {message ? (
          <p className={`md:col-span-2 ${status === "success" ? "text-industrial-blue" : "text-error"}`} role="status">
            {message}
          </p>
        ) : null}
      </form>
    </div>
  );
}

// InputField, tekrar eden input-label desenini tek bir erişilebilir bileşende toplar.
function InputField({ label, name, required = false, type = "text" }: { label: string; name: string; required?: boolean; type?: string }) {
  return (
    <div>
      <label className="mb-2 block font-label-caps text-label-caps text-deep-navy" htmlFor={name}>
        {label}
      </label>
      <input className="w-full border-b border-outline bg-transparent py-3 outline-none focus:border-metallic-gold focus:ring-0" id={name} name={name} required={required} type={type} />
    </div>
  );
}
