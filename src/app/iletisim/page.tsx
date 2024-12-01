import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "./_components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Kayaşehir Cam Balkon",
  description:
    "Kayaşehir Cam Balkon ile iletişime geçin. Her türlü soru, öneri veya talepleriniz için bizimle kolayca bağlantı kurabilirsiniz.",
  keywords:
    "Kayaşehir Cam Balkon, iletişim, cam balkon iletişim, cam balkon öneri, cam balkon sorular",
};

export default function Contact() {
  const breadcrumbs = [
    { href: "/", label: "Anasayfa" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <section className="mb-10">
      <Breadcrumb
        breadcrumbs={breadcrumbs}
        title="kayaşehir Cam Balkon"
        description="Bizimle iletişime geçin. Her türlü sorunuz için buradayız."
      />
      <div className="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
        <div>
          <h2 className="font-medium text-2xl text-gray-800">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-lg leading-relaxed text-slate-500 mt-3">
            Herhangi bir sorunuz varsa, formu doldurun ya da bize e-posta
            gönderin veya telefonla ulaşın.
          </p>
          <div className="mt-5">
            <div className="flex items-center mt-2 space-x-2 text-gray-600">
              <span className="text-gray-400 w-4 h-4">✉️</span>
              <a href="mailto:info@kayasehircambalkon.com">
                info@kayasehircambalkon.com
              </a>
            </div>
            <div className="flex items-center mt-2 space-x-2 text-gray-600">
              <span className="text-gray-400 w-4 h-4">📞</span>
              <a href="tel:+905365608595">+90 536 560 8595</a>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
