import { FaEnvelope, FaPhone } from "react-icons/fa";
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
      {/* Breadcrumb */}
      <Breadcrumb
        breadcrumbs={breadcrumbs}
        title="İletişim"
        image={{
          url: "/images/iletisim/banner.webp",
        }}
        description="Bizimle iletişime geçin. Her türlü sorunuz için buradayız."
      />

      {/* Content */}
      <div className="flex flex-col md:flex-row md:justify-between md:gap-10 max-w-5xl mx-auto mt-10 px-4 md:px-8">
        {/* Contact Info */}
        <div className="flex-1 mb-8 md:mb-0">
          <h2 className="font-semibold text-2xl text-gray-800">
            Bizimle İletişime Geçin
          </h2>
          <p className="mt-4 text-gray-600">
            Herhangi bir sorunuz varsa, formu doldurun ya da bize e-posta
            gönderin veya telefonla ulaşın. Size yardımcı olmaktan mutluluk
            duyarız!
          </p>
          <div className="mt-6 space-y-4">
            {/* Email */}
            <div className="flex items-center text-gray-600">
              <FaEnvelope className="w-6 h-6 text-blue-500" />
              <a
                href="mailto:info@kayasehircambalkon.com"
                className="text-base underline ml-3 text-blue-700"
              >
                info@kayasehircambalkon.com
              </a>
            </div>
            {/* Phone */}
            <div className="flex items-center text-gray-600">
              <FaPhone className="w-6 h-6 text-green-500" />
              <a
                href="tel:+905365608595"
                className="text-base underline ml-3 text-green-700"
              >
                +90 536 560 8595
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
