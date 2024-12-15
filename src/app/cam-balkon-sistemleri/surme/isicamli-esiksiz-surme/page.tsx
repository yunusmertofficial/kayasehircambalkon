import { Metadata } from "next";
import BreadcrumbSection from "./_components/BreadcrumbSection";
import FeaturesSection from "./_components/FeaturesSection";
import PriceCalculator from "../../_components/PriceCalculator";
import FAQSection from "./_components/FAQSection";
import ContactSection from "../../_components/ContactSection";
import Testimonials from "./_components/Testimonials";

export const metadata: Metadata = {
  title: "Isıcamlı Eşiksiz Sürme Cam Balkon | Kayaşehir Cam Balkon",
  description:
    "Kayaşehir'de modern ve şık ısıcamlı eşiksiz sürme cam balkon sistemleri. Balkonlarınızı enerji tasarruflu ve estetik çözümlerle donatın. Fiyat hesaplama için tıklayın.",
  keywords: [
    "Kayaşehir ısıcamlı eşiksiz sürme cam balkon",
    "ısıcamlı sürme balkon sistemleri",
    "modern balkon çözümleri",
    "eşiksiz cam balkon fiyat hesaplama",
  ],
  openGraph: {
    title: "Isıcamlı Eşiksiz Sürme Cam Balkon | Kayaşehir Cam Balkon",
    description:
      "Kayaşehir'de modern, enerji tasarruflu ve estetik ısıcamlı eşiksiz sürme cam balkon çözümleri. Balkon ölçülerinizi girerek fiyat hesaplama yapın.",
    url: "https://www.kayasehir-cam-balkon.com/surme/isicamli-esiksiz-surme",
    images: [
      {
        url: "/images/cam-balkon-sistemleri/surme/isicamli-esiksiz-surme/isicamli-esiksiz-surme.webp",
        width: 800,
        height: 600,
        alt: "Isıcamlı Eşiksiz Sürme Cam Balkon - Kayaşehir Cam Balkon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isıcamlı Eşiksiz Sürme Cam Balkon | Kayaşehir Cam Balkon",
    description:
      "Isıcamlı eşiksiz sürme cam balkon sistemleri ile balkonlarınıza modernlik ve enerji tasarrufu kazandırın. Kayaşehir'de profesyonel hizmet!",
    images: [
      "/images/cam-balkon-sistemleri/surme/isicamli-esiksiz-surme/isicamli-esiksiz-surme.webp",
    ],
  },
};

const IsicamliEsiksizSurmePage = () => {
  const faqs = [
    {
      question: "Isıcamlı eşiksiz sürme cam balkon nedir?",
      answer:
        "Isıcamlı eşiksiz sürme cam balkon, zeminde herhangi bir eşik olmadan monte edilen ve çift cam teknolojisiyle enerji tasarrufu sağlayan modern bir sistemdir.",
    },
    {
      question: "Eşiksiz tasarım güvenli mi?",
      answer:
        "Evet, eşiksiz tasarım dayanıklı alüminyum çerçeveler ve güvenli kilit mekanizmaları ile güvenliği ön planda tutar.",
    },
    {
      question: "Fiyat hesaplaması nasıl yapılır?",
      answer:
        "Balkon ölçülerinizi girerek fiyat hesaplama aracımızı kullanabilirsiniz. Sistem size doğru ve anlık fiyat bilgisi sunar.",
    },
  ];

  const testimonials = [
    {
      name: "Murat Kılıç",
      company: "Kayaşehir Cam Balkon Kullanıcısı",
      comment:
        "Eşiksiz tasarım harika bir görünüm sunuyor. Kayaşehir Cam Balkon ekibine kaliteli hizmetleri için teşekkür ederim.",
      avatar: "/images/avatars/avatar1.webp",
    },
    {
      name: "Hakan Öztürk",
      company: "Memnun Müşteri",
      comment:
        "Isıcamlı eşiksiz sürme sistem hem modern hem de enerji tasarruflu. Kayaşehir'deki en iyi hizmet!",
      avatar: "/images/avatars/avatar2.webp",
    },
    {
      name: "Cenk Yıldız",
      company: "Kullanıcı",
      comment:
        "Eşimle birlikte aldığımız kararın ne kadar doğru olduğunu gördük. Eşiksiz cam balkon, evimize çok yakıştı.",
      avatar: "/images/avatars/avatar3.webp",
    },
    {
      name: "Burak Şahin",
      company: "Kayaşehir Müşterisi",
      comment:
        "Kayaşehir Cam Balkon ekibinden aldığımız eşiksiz sistem gerçekten çok kaliteli. Eşimle çok memnunuz.",
      avatar: "/images/avatars/avatar4.webp",
    },
  ];

  return (
    <main>
      <BreadcrumbSection />
      <FeaturesSection />
      <PriceCalculator pricePerSquareMeter={900}>
        <header className="text-center mb-10">
          <h2
            id="price-calculator-heading"
            className="text-4xl font-bold text-secondary-foreground"
          >
            <span className="text-blue-600">
              Isıcamlı Eşiksiz Sürme Cam Balkon
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
      <ContactSection description="Kayaşehir'de ısıcamlı eşiksiz sürme cam balkon sistemlerimiz hakkında detaylı bilgi ve fiyat teklifi almak için bizimle iletişime geçin." />
      <Testimonials testimonials={testimonials} />
    </main>
  );
};

export default IsicamliEsiksizSurmePage;
