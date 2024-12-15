import { Metadata } from "next";
import BreadcrumbSection from "./_components/BreadcrumbSection";
import FeaturesSection from "./_components/FeaturesSection";
import PriceCalculator from "../../_components/PriceCalculator";
import FAQSection from "./_components/FAQSection";
import ContactSection from "../../_components/ContactSection";
import Testimonials from "./_components/Testimonials";

export const metadata: Metadata = {
  title: "Eşiksiz Sürme Cam Balkon | Kayaşehir Cam Balkon",
  description:
    "Kayaşehir'de estetik ve işlevsel eşiksiz sürme cam balkon çözümleri. Balkonlarınızı modern bir tasarımla dönüştürün ve fiyat hesaplayın.",
  keywords: [
    "Kayaşehir eşiksiz sürme cam balkon",
    "modern balkon çözümleri",
    "eşiksiz cam balkon fiyat hesaplama",
    "dayanıklı balkon sistemleri",
  ],
  openGraph: {
    title: "Eşiksiz Sürme Cam Balkon | Kayaşehir Cam Balkon",
    description:
      "Kayaşehir'de modern ve estetik eşiksiz sürme cam balkon çözümleri. Balkon ölçülerinizi girerek fiyat hesaplama yapın.",
    url: "https://www.kayasehir-cam-balkon.com/surme/esiksiz-surme",
    images: [
      {
        url: "/images/cam-balkon-sistemleri/surme/esiksiz-surme/esiksiz-surme.webp",
        width: 800,
        height: 600,
        alt: "Eşiksiz Sürme Cam Balkon - Kayaşehir Cam Balkon",
      },
    ],
  },
};

const EsiksizSurmePage = () => {
  const faqs = [
    {
      question: "Eşiksiz sürme cam balkon nedir?",
      answer:
        "Eşiksiz sürme cam balkon, zeminde herhangi bir eşik olmadan monte edilen modern bir sistemdir.",
    },
    {
      question: "Eşiksiz tasarım güvenli mi?",
      answer:
        "Evet, eşiksiz tasarım dayanıklı çerçeve yapısıyla güvenli bir kullanım sağlar.",
    },
    {
      question: "Fiyat hesaplaması nasıl yapılır?",
      answer:
        "Balkon ölçülerinizi girerek fiyat hesaplama aracımızı kullanabilirsiniz.",
    },
  ];

  const testimonials = [
    {
      name: "Ali Demir",
      company: "Kayaşehir Cam Balkon Kullanıcısı",
      comment:
        "Eşiksiz tasarım gerçekten çok modern görünüyor. Balkonumuza harika bir hava kattı!",
      avatar: "/images/avatars/avatar1.webp",
    },
    {
      name: "Ahmet Kaya",
      company: "Memnun Müşteri",
      comment:
        "Eşimle aldığımız kararın ne kadar doğru olduğunu gördük. Çok kaliteli bir sistem!",
      avatar: "/images/avatars/avatar2.webp",
    },
    {
      name: "Mehmet Yılmaz",
      company: "Kullanıcı",
      comment:
        "Kayaşehir Cam Balkon ekibine teşekkür ederiz. Eşiksiz sürme sistem çok başarılı.",
      avatar: "/images/avatars/avatar3.webp",
    },
    {
      name: "Mustafa Çelik",
      company: "Müşteri",
      comment:
        "Kayaşehir'de böyle kaliteli hizmet bulmak harika. Balkonumuz çok daha modern görünüyor.",
      avatar: "/images/avatars/avatar4.webp",
    },
  ];

  return (
    <main>
      <BreadcrumbSection />
      <FeaturesSection />
      <PriceCalculator pricePerSquareMeter={850}>
        <header className="text-center mb-10">
          <h2
            id="price-calculator-heading"
            className="text-4xl font-bold text-secondary-foreground"
          >
            <span className="text-blue-600">Eşiksiz Sürme Cam Balkon</span>{" "}
            Fiyat Hesaplama
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            {`Kayaşehir'deki balkonunuz için ölçülerinizi girerek fiyatı hemen
            öğrenin.`}
          </p>
        </header>
      </PriceCalculator>
      <FAQSection faqs={faqs} />
      <ContactSection description="Kayaşehir'de eşiksiz sürme cam balkon sistemlerimiz hakkında detaylı bilgi ve fiyat teklifi almak için bizimle iletişime geçin." />
      <Testimonials testimonials={testimonials} />
    </main>
  );
};

export default EsiksizSurmePage;
