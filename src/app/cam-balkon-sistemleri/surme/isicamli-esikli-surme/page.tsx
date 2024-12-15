import { Metadata } from "next";
import BreadcrumbSection from "./_components/BreadcrumbSection";
import FeaturesSection from "./_components/FeaturesSection";
import PriceCalculator from "../../_components/PriceCalculator";
import FAQSection from "./_components/FAQSection";
import ContactSection from "../../_components/ContactSection";
import Testimonials from "./_components/Testimonials";

export const metadata: Metadata = {
  title: "Isıcamlı Eşikli Sürme Cam Balkon | Kayaşehir Cam Balkon",
  description:
    "Kayaşehir'de ısıcamlı eşikli sürme cam balkon sistemleriyle enerji tasarrufu ve modern tasarımı bir araya getirin. Balkon ölçülerinizi girerek fiyat hesaplayın.",
  keywords: [
    "Kayaşehir ısıcamlı eşikli sürme cam balkon",
    "ısıcamlı sürme balkon sistemleri",
    "modern balkon çözümleri",
    "enerji tasarruflu balkon sistemleri",
  ],
  openGraph: {
    title: "Isıcamlı Eşikli Sürme Cam Balkon | Kayaşehir Cam Balkon",
    description:
      "Kayaşehir'de ısıcamlı eşikli sürme cam balkon sistemleriyle yaşam alanlarınıza değer katın. Balkon ölçülerinizi girerek fiyat hesaplama yapın.",
    url: "https://www.kayasehir-cam-balkon.com/surme/isicamli-esikli-surme",
    images: [
      {
        url: "/images/cam-balkon-sistemleri/surme/isicamli-esikli-surme/isicamli-esikli-surme.webp",
        width: 800,
        height: 600,
        alt: "Isıcamlı Eşikli Sürme Cam Balkon - Kayaşehir Cam Balkon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isıcamlı Eşikli Sürme Cam Balkon | Kayaşehir Cam Balkon",
    description:
      "Isıcamlı eşikli sürme cam balkon sistemleri ile enerji tasarrufu sağlayan modern tasarımlar Kayaşehir Cam Balkon'da.",
    images: [
      "/images/cam-balkon-sistemleri/surme/isicamli-esikli-surme/isicamli-esikli-surme.webp",
    ],
  },
};

const IsicamliEsikliSurmePage = () => {
  const faqs = [
    {
      question:
        "Isıcamlı eşikli sürme cam balkon sistemleri enerji tasarrufu sağlar mı?",
      answer:
        "Evet, ısıcamlı eşikli sürme cam balkon sistemleri, yüksek yalıtım özellikleri sayesinde enerji tasarrufu sağlar.",
    },
    {
      question: "Kayaşehir'de ısıcamlı cam balkon hizmeti veriyor musunuz?",
      answer:
        "Evet, Kayaşehir ve çevresinde profesyonel ısıcamlı eşikli sürme cam balkon montaj hizmeti sunuyoruz.",
    },
    {
      question: "Isıcamlı sistemlerin fiyatını nasıl hesaplayabilirim?",
      answer:
        "Balkon ölçülerinizi girerek kolayca fiyat hesaplayabilirsiniz. Fiyat hesaplama aracımız size en doğru fiyat bilgisini sunar.",
    },
  ];

  const testimonials = [
    {
      name: "Serkan Yılmaz",
      company: "Kayaşehir Cam Balkon Kullanıcısı",
      comment:
        "Kayaşehir Cam Balkon ekibinden aldığımız ısıcamlı eşikli sürme sistem gerçekten çok kaliteli. Hem enerji tasarrufu sağlıyor hem de şık bir görünüm sunuyor.",
      avatar: "/images/avatars/avatar1.webp",
    },
    {
      name: "Fatih Demir",
      company: "Memnun Müşteri",
      comment:
        "Isıcamlı eşikli sürme cam balkonlarımız montajdan bu yana harika çalışıyor. Kayaşehir'de böyle kaliteli bir hizmet bulmak harika.",
      avatar: "/images/avatars/avatar2.webp",
    },
    {
      name: "Ali Özkan",
      company: "Kullanıcı",
      comment:
        "Balkonumuz artık dört mevsim kullanılabilir hale geldi. Kayaşehir Cam Balkon ekibine teşekkür ederim.",
      avatar: "/images/avatars/avatar3.webp",
    },
    {
      name: "Cem Kara",
      company: "Kayaşehir Müşterisi",
      comment:
        "Sistem gerçekten çok dayanıklı ve enerji tasarrufu sağlıyor. Kayaşehir'de oturuyorsanız kesinlikle tavsiye ederim!",
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
            <span className="text-blue-600">
              Isıcamlı Eşikli Sürme Cam Balkon
            </span>{" "}
            Fiyat Hesaplama
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            {`Kayaşehir'deki balkonunuz için ölçülerinizi girerek fiyatı hemen öğrenin.`}
          </p>
        </header>
      </PriceCalculator>
      <FAQSection faqs={faqs} />
      <ContactSection description="Kayaşehir'de ısıcamlı eşikli sürme cam balkon sistemlerimiz hakkında detaylı bilgi ve fiyat teklifi almak için bizimle iletişime geçin." />
      <Testimonials testimonials={testimonials} />
    </main>
  );
};

export default IsicamliEsikliSurmePage;
