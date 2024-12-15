import { Metadata } from "next";
import BreadcrumbSection from "./_components/BreadcrumbSection";
import FeaturesSection from "./_components/FeaturesSection";
import PriceCalculator from "../../_components/PriceCalculator";
import FAQSection from "./_components/FAQSection";
import ContactSection from "../../_components/ContactSection";
import Testimonials from "./_components/Testimonials";

export const metadata: Metadata = {
  title: "Silinebilir Isıcamlı Giyotin Cam Balkon | Kayaşehir Cam Balkon",
  description:
    "Kayaşehir'de modern, enerji tasarruflu ve kolay temizlenebilir ısıcamlı giyotin cam balkon çözümleri. Balkon ölçülerinizi girerek fiyat hesaplama yapın.",
  keywords: [
    "Kayaşehir silinebilir ısıcamlı giyotin cam balkon",
    "kolay temizlenebilir balkon sistemleri",
    "modern cam balkon çözümleri",
    "giyotin cam sistemleri fiyat hesaplama",
  ],
  openGraph: {
    title: "Silinebilir Isıcamlı Giyotin Cam Balkon | Kayaşehir Cam Balkon",
    description:
      "Kayaşehir'de modern, enerji tasarruflu ve kolay temizlenebilir ısıcamlı giyotin cam balkon çözümleri. Balkon ölçülerinizi girerek fiyat hesaplama yapın.",
    url: "https://www.kayasehir-cam-balkon.com/giyotin/silinebilir-isicamli-giyotin",
    images: [
      {
        url: "/images/cam-balkon-sistemleri/giyotin/silinebilir-isicamli-giyotin/silinebilir-isicamli-giyotin.webp",
        width: 800,
        height: 600,
        alt: "Silinebilir Isıcamlı Giyotin Cam Balkon - Kayaşehir Cam Balkon",
      },
    ],
  },
};

const SilinebilirIsicamliGiyotinPage = () => {
  const faqs = [
    {
      question: "Silinebilir ısıcamlı giyotin cam balkon nedir?",
      answer:
        "Silinebilir ısıcamlı giyotin cam balkon, kolay temizlenebilir ve enerji tasarrufu sağlayan modern bir sistemdir.",
    },
    {
      question: "Kolay temizlenebilir cam paneller nasıl çalışır?",
      answer:
        "Cam paneller özel bir yüzey kaplaması sayesinde leke tutmaz ve pratik bir şekilde temizlenebilir.",
    },
    {
      question: "Fiyat hesaplaması nasıl yapılır?",
      answer:
        "Balkon ölçülerinizi girerek fiyat hesaplama aracımızı kullanabilirsiniz.",
    },
  ];

  const testimonials = [
    {
      name: "Emre Yılmaz",
      company: "Kayaşehir Cam Balkon Kullanıcısı",
      comment:
        "Silinebilir ısıcamlı giyotin cam balkon çok modern ve kullanışlı. Temizliği çok kolay, teşekkürler!",
      avatar: "/images/avatars/avatar1.webp",
    },
    {
      name: "Ali Demir",
      company: "Memnun Müşteri",
      comment:
        "Kolay temizlenebilir cam sistemi çok beğendik. Kayaşehir Cam Balkon hizmetinden çok memnunuz.",
      avatar: "/images/avatars/avatar2.webp",
    },
    {
      name: "Ahmet Özkan",
      company: "Kullanıcı",
      comment:
        "Evinize şıklık ve enerji tasarrufu getiren harika bir sistem. Kesinlikle öneririm!",
      avatar: "/images/avatars/avatar3.webp",
    },
  ];

  return (
    <main>
      <BreadcrumbSection />
      <FeaturesSection />
      <PriceCalculator pricePerSquareMeter={1000}>
        <header className="text-center mb-10">
          <h2
            id="price-calculator-heading"
            className="text-4xl font-bold text-secondary-foreground"
          >
            <span className="text-blue-600">
              Silinebilir Isıcamlı Giyotin Cam Balkon
            </span>{" "}
            Fiyat Hesaplama
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            {`Kayaşehir'deki balkonunuz için ölçülerinizi girerek fiyatı hemen
            öğrenin.`}
          </p>
        </header>
      </PriceCalculator>
      <FAQSection faqs={faqs} />
      <ContactSection description="Kayaşehir'deki silinebilir ısıcamlı giyotin cam balkon sistemlerimiz hakkında detaylı bilgi ve fiyat teklifi almak için bizimle iletişime geçin." />
      <Testimonials testimonials={testimonials} />
    </main>
  );
};

export default SilinebilirIsicamliGiyotinPage;
