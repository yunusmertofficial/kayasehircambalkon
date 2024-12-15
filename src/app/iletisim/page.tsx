import { FaEnvelope, FaPhone } from "react-icons/fa";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "./_components/ContactForm";
import { Metadata } from "next";
import Container from "@/components/Container";
import AnimatedSection from "@/components/AnimatedSection";

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
    <main className="mb-10">
      {/* Breadcrumb */}
      <Breadcrumb
        breadcrumbs={breadcrumbs}
        title="İletişim"
        image={{
          url: "/images/iletisim/banner.webp",
        }}
        description="Bizimle iletişime geçin. Her türlü sorunuz için buradayız."
      />

      <AnimatedSection>
        <section className="py-16">
          <Container>
            <div className="flex flex-col md:flex-row md:justify-between md:gap-10">
              {/* Sol Sütun: İletişim Bilgileri */}
              <div className="flex-1 mb-8 md:mb-0">
                <h3 className="text-4xl font-bold text-foreground">
                  <span className="text-blue-600">Kayaşehir Cam Balkon</span>{" "}
                  Size Nasıl Yardımcı Olabilir?
                </h3>
                <p className="mt-4 text-gray-600">
                  Kayaşehir Cam Balkon olarak, yaşam alanlarınıza değer katan
                  modern ve estetik cam balkon çözümleri sunuyoruz. Katlanır
                  sistemlerden gölgelendirme çözümlerine kadar birçok alanda,
                  ihtiyaçlarınıza uygun yenilikçi ve dayanıklı tasarımlar ile
                  hizmet veriyoruz.
                </p>
                <p className="mt-4 text-gray-600">
                  Sorularınız, talepleriniz veya projeleriniz için bizimle
                  iletişime geçmekten çekinmeyin. Size özel çözümler sunmak için
                  buradayız!
                </p>
                <div className="mt-6 space-y-4">
                  {/* Email */}
                  <div className="flex items-center text-gray-600">
                    <FaEnvelope className="w-6 h-6 text-blue-500" />
                    <a
                      href="mailto:cambalkonkayasehir@gmail.com"
                      className="text-base underline ml-3 text-blue-700"
                    >
                      cambalkonkayasehir@gmail.com
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

              {/* Sağ Sütun: İletişim Formu */}
              <div className="flex-1">
                <ContactForm />
              </div>
            </div>
          </Container>
        </section>
      </AnimatedSection>
    </main>
  );
}
