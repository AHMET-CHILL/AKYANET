import type { Metadata } from "next";
import InnerPageShell from "@/components/InnerPageShell";

export const metadata: Metadata = {
  title: "E-posta Gizlilik ve Yasal Uyarı | AKYA Group",
  description:
    "AKYA Dijital Dönüşüm A.Ş. e-posta iletişimlerine ilişkin gizlilik ve yasal uyarı metni.",
  alternates: {
    canonical: "/hakkimizda/e-posta-disclaimer",
  },
};

const paragraphs = [
  "Bu e-posta ve ekleri gizli ve/veya özel nitelikte bilgiler içerebilir ve yalnızca gönderildiği kişi veya kurumun kullanımına yöneliktir. E-postanın muhatabı değilseniz veya içeriği ile ilgili yetkiniz bulunmuyorsa, gönderenin ve/veya ilgili hak sahibinin önceden yazılı izni olmaksızın bu e-postanın okunması, değiştirilmesi, kopyalanması, üçüncü kişilerle paylaşılması, yayımlanması, ifşa edilmesi, iletilmesi veya herhangi bir amaçla kullanılması yasaktır.",
  "Bu e-postanın amaçlanan muhatabı değilseniz veya e-posta tarafınıza yanlışlıkla ulaşmışsa, lütfen göndereni derhal bilgilendiriniz ve e-postayı ekleriyle birlikte sisteminizden siliniz.",
  "Elektronik posta iletişiminin güvenli, kesintisiz veya hatasız olduğuna ilişkin herhangi bir garanti verilmemektedir. Bu nedenle mesajın iletiminde gecikme, eksiklik, kayıp, değişiklik veya virüs bulunması söz konusu olabilir. AKYA Dijital Dönüşüm A.Ş., e-posta iletimi sırasında meydana gelebilecek bu tür aksaklıklardan ve mesajın yetkisiz kullanımı, paylaşılması, iletilmesi veya depolanmasından kaynaklanabilecek zararlardan, yürürlükteki mevzuatın izin verdiği ölçüde sorumlu tutulamaz.",
  "Bu e-postanın içeriğinde yer alan görüş ve değerlendirmeler, aksi açıkça belirtilmedikçe, yalnızca mesajı gönderen kişiye aittir ve AKYA Dijital Dönüşüm A.Ş.'nin resmi görüş veya beyanı olarak değerlendirilmemelidir.",
  "Bu e-posta ve eklerinde yer alan veya bunlar aracılığıyla paylaşılan, AKYA Dijital Dönüşüm A.Ş.'ye ait ya da şirket adına oluşturulmuş fikri ve sınai mülkiyet hakları, ilgili hak sahiplerine aittir. Bu kapsamda yer alan her türlü bilgi, belge, tasarım, yazılım, teknik doküman ve diğer fikri ürün üzerindeki maddi ve manevi haklar saklıdır. İlgili hak sahibinin yazılı izni olmaksızın bunların çoğaltılması, kullanılması, değiştirilmesi veya üçüncü kişilerle paylaşılması yasaktır.",
];

// EmailDisclaimerPage, kurumsal e-posta imzalarında bağlantı verilen gizlilik ve yasal uyarı metnini sunar.
export default function EmailDisclaimerPage() {
  return (
    <InnerPageShell
      eyebrow="Hakkımızda"
      title="E-posta Gizlilik ve Yasal Uyarı"
      description="AKYA Dijital Dönüşüm A.Ş. tarafından gönderilen e-postalara ilişkin gizlilik ve yasal uyarı metni."
      image="/hero-data-center.jpg"
    >
      <section className="bg-white px-margin-mobile py-20 md:px-margin-desktop md:py-section-padding">
        <div className="mx-auto max-w-4xl">
          <p className="font-label-caps text-label-caps uppercase text-metallic-gold">E-posta Disclaimer</p>
          <h2 className="mt-4 font-headline-lg text-[34px] uppercase leading-tight text-deep-navy md:text-headline-lg">
            Gizlilik ve Yasal Uyarı
          </h2>
          <div className="mt-10 space-y-6 text-base leading-8 text-on-surface-variant md:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </InnerPageShell>
  );
}
