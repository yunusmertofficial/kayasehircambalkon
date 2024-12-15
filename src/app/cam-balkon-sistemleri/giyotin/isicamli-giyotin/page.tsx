import { Metadata } from "next";
import BreadcrumbSection from "./_components/BreadcrumbSection";
import FeaturesSection from "./_components/FeaturesSection";
import PriceCalculator from "../../_components/PriceCalculator";
import FAQSection from "./_components/FAQSection";
import ContactSection from "../../_components/ContactSection";
import Testimonials from "./_components/Testimonials";

export const metadata: Metadata = {
  title: "Isıcamlı Giyotin Cam Balkon | Kayaşehir Cam Balkon",
  description:
    "Kayaşehir'de modern ve enerji tasarruflu ısıcamlı giyotin cam balkon çözümleri. Fiyat hesaplama için ölçülerinizi girin.",
  keywords: [
    "Kayaşehir ısıcamlı giyotin cam balkon",
    "giyotin balkon sistemleri",
    "enerji tasarruflu balkon çözümleri",
    "modern cam balkon sistemleri",
  ],
  openGraph: {
    title: "Isıcamlı Giyotin Cam Balkon | Kayaşehir Cam Balkon",
    description:
      "Kayaşehir'de modern ve enerji tasarruflu ısıcamlı giyotin cam balkon çözümleri. Balkon ölçülerinizi girerek fiyat hesaplama yapın.",
    url: "https://www.kayasehir-cam-balkon.com/giyotin/isicamli-giyotin",
    images: [
      {
        url: "/images/cam-balkon-sistemleri/giyotin/isicamli-giyotin/isicamli-giyotin.webp",
        width: 800,
        height: 600,
        alt: "Isıcamlı Giyotin Cam Balkon - Kayaşehir Cam Balkon",
      },
    ],
  },
};

const IsicamliGiyotinPage = () => {
  const faqs = [
    {
      question: "Isıcamlı giyotin cam balkon nedir?",
      answer:
        "Isıcamlı giyotin cam balkon, enerji tasarrufu sağlayan çift cam teknolojisi ile donatılmış, uzaktan kumanda ile kontrol edilebilen modern bir sistemdir.",
    },
    {
      question: "Giyotin cam balkonlar güvenli mi?",
      answer:
        "Evet, yüksek kaliteli alüminyum çerçeve ve kilitli mekanizma ile güvenli bir kullanım sunar.",
    },
    {
      question: "Fiyat hesaplaması nasıl yapılır?",
      answer:
        "Balkon ölçülerinizi girerek fiyat hesaplama aracımızı kullanabilirsiniz.",
    },
  ];

  const testimonials = [
    {
      name: "Burak Yılmaz",
      company: "Kayaşehir Cam Balkon Kullanıcısı",
      comment:
        "Isıcamlı giyotin cam balkon sistemi çok kaliteli ve enerji tasarrufu sağlıyor. Çok memnunuz!",
      avatar: "/images/avatars/avatar1.webp",
    },
    {
      name: "Ahmet Özkan",
      company: "Memnun Müşteri",
      comment:
        "Giyotin cam balkon sistemi hem şık hem de dayanıklı. Kayaşehir'deki en iyi hizmet!",
      avatar: "/images/avatars/avatar2.webp",
    },
    {
      name: "Mehmet Çelik",
      company: "Kullanıcı",
      comment:
        "Evimize çok modern bir hava kattı. Kayaşehir Cam Balkon ekibine teşekkür ederim.",
      avatar: "/images/avatars/avatar3.webp",
    },
  ];

  return (
    <main>
      <BreadcrumbSection />
      <FeaturesSection />
      <PriceCalculator pricePerSquareMeter={950}>
        <header className="text-center mb-10">
          <h2
            id="price-calculator-heading"
            className="text-4xl font-bold text-secondary-foreground"
          >
            <span className="text-blue-600">Isıcamlı Giyotin Cam Balkon</span>{" "}
            Fiyat Hesaplama
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            {`Kayaşehir'deki balkonunuz için ölçülerinizi girerek fiyatı hemen
            öğrenin.`}
          </p>
        </header>
      </PriceCalculator>
      <FAQSection faqs={faqs} />
      <ContactSection description="Kayaşehir'deki ısıcamlı giyotin cam balkon sistemlerimiz hakkında detaylı bilgi ve fiyat teklifi almak için bizimle iletişime geçin." />
      <Testimonials testimonials={testimonials} />
    </main>
  );
};

export default IsicamliGiyotinPage;
