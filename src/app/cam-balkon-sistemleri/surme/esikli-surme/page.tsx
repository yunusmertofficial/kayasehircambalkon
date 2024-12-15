import { Metadata } from "next";
import BreadcrumbSection from "./_components/BreadcrumbSection";
import FeaturesSection from "./_components/FeaturesSection";
import PriceCalculator from "../../_components/PriceCalculator";
import FAQSection from "./_components/FAQSection";
import ContactSection from "../../_components/ContactSection";
import Testimonials from "./_components/Testimonials";

export const metadata: Metadata = {
  title: "Eşikli Sürme Cam Balkon | Kayaşehir Cam Balkon",
  description:
    "Kayaşehir'de modern ve dayanıklı eşikli sürme cam balkon sistemleri. Balkon ölçülerinizi girerek fiyat hesaplayın ve yaşam alanlarınıza şıklık katın.",
  keywords: [
    "Kayaşehir eşikli sürme cam balkon",
    "eşikli sürme cam balkon fiyat hesaplama",
    "Kayaşehir balkon çözümleri",
    "modern ve dayanıklı cam balkon sistemleri",
  ],
  openGraph: {
    title: "Eşikli Sürme Cam Balkon | Kayaşehir Cam Balkon",
    description:
      "Kayaşehir bölgesinde eşikli sürme cam balkon sistemleri ile yaşam alanlarınıza modern ve estetik bir dokunuş katın.",
    url: "https://www.kayasehir-cam-balkon.com/surme/esikli-surme",
    images: [
      {
        url: "/images/cam-balkon-sistemleri/surme/esikli-surme/esikli-surme.webp",
        width: 800,
        height: 600,
        alt: "Eşikli Sürme Cam Balkon - Kayaşehir Cam Balkon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eşikli Sürme Cam Balkon | Kayaşehir Cam Balkon",
    description:
      "Kayaşehir'de eşikli sürme cam balkon sistemleri ile estetik ve dayanıklı çözümler sunuyoruz. Balkon ölçülerinizi girerek fiyat hesaplayın.",
    images: [
      "/images/cam-balkon-sistemleri/surme/esikli-surme/esikli-surme.webp",
    ],
  },
};

const EsikliSurmeCamBalkonPage = () => {
  const faqs = [
    {
      question: "Kayaşehir'de eşikli sürme cam balkon hizmeti veriyor musunuz?",
      answer:
        "Evet, Kayaşehir ve çevresindeki tüm müşterilerimize eşikli sürme cam balkon montaj hizmeti sunuyoruz.",
    },
    {
      question: "Eşikli sürme cam balkon sistemleri dayanıklı mı?",
      answer:
        "Kayaşehir Cam Balkon olarak sunduğumuz tüm ürünler yüksek kaliteli malzemelerle üretilir ve uzun ömürlüdür.",
    },
    {
      question: "Eşikli sürme sistemlerin fiyatı nasıl hesaplanır?",
      answer:
        "Balkon ölçülerinizi girerek fiyat hesaplayabilirsiniz. Fiyat hesaplama aracı ile kolayca bütçenize uygun bir çözüm bulabilirsiniz.",
    },
  ];

  const testimonials = [
    {
      name: "Ahmet Yıldız",
      company: "Kayaşehir Cam Balkon Kullanıcısı",
      comment:
        "Kayaşehir Cam Balkon ekibine teşekkürler! Eşikli sürme cam balkon sistemi sayesinde balkonumuz çok daha kullanışlı hale geldi.",
      avatar: "/images/avatars/avatar1.webp",
    },
    {
      name: "Mehmet Kara",
      company: "Kayaşehir'den Memnun Müşteri",
      comment:
        "Profesyonel ekip ve kaliteli ürünler. Kayaşehir Cam Balkon'dan aldığımız eşikli sürme sistem harika!",
      avatar: "/images/avatars/avatar2.webp",
    },
    {
      name: "Hasan Aktaş",
      company: "Kayaşehir'de Kullanıcı",
      comment:
        "Eşikli sürme cam balkonlarımız hem dayanıklı hem de çok şık. Kayaşehir'de böyle kaliteli bir hizmet almak harikaydı!",
      avatar: "/images/avatars/avatar3.webp",
    },
    {
      name: "Ali Çetin",
      company: "Kayaşehir Cam Balkon Müşterisi",
      comment:
        "Sistemler gerçekten harika. Kayaşehir Cam Balkon ekibi hızlı ve özenli çalıştı, teşekkür ederim.",
      avatar: "/images/avatars/avatar4.webp",
    },
  ];

  return (
    <main>
      <BreadcrumbSection />
      <FeaturesSection />
      <PriceCalculator pricePerSquareMeter={750}>
        <header className="text-center mb-10">
          <h2
            id="price-calculator-heading"
            className="text-4xl font-bold text-secondary-foreground"
          >
            <span className="text-blue-600">Eşikli Sürme Cam Balkon</span> Fiyat
            Hesaplama
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            {`Kayaşehir'de eşikli sürme cam balkon sistemleri için balkon
            ölçülerinizi girerek toplam alanı ve fiyatı öğrenin.`}
          </p>
        </header>
      </PriceCalculator>
      <FAQSection faqs={faqs} />
      <ContactSection description="Kayaşehir'deki eşikli sürme cam balkon sistemlerimiz hakkında detaylı bilgi ve fiyat teklifi almak için bizimle iletişime geçebilirsiniz." />
      <Testimonials testimonials={testimonials} />
    </main>
  );
};

export default EsikliSurmeCamBalkonPage;
