import { Metadata } from "next";
import BreadcrumbSection from "./_components/BreadcrumbSection";
import FeaturesSection from "./_components/FeaturesSection";
import PriceCalculator from "../../_components/PriceCalculator";
import FAQSection from "./_components/FAQSection";
import ContactSection from "../../_components/ContactSection";
import Testimonials from "./_components/Testimonials";

export const metadata: Metadata = {
  title: "Üstten Askılı Sistem | Kayaşehir Cam Balkon",
  description:
    "Kayaşehir'de modern ve estetik üstten askılı sistem çözümleri. Balkon ve iş yerlerinizi daha işlevsel hale getirin.",
  keywords: [
    "Kayaşehir üstten askılı sistem",
    "modern balkon çözümleri",
    "üstten askılı sürme sistemler",
    "sessiz ve dayanıklı mekanizma",
  ],
  openGraph: {
    title: "Üstten Askılı Sistem | Kayaşehir Cam Balkon",
    description:
      "Kayaşehir'de modern ve estetik üstten askılı sistem çözümleri. Balkon ölçülerinizi girerek fiyat hesaplama yapın.",
    url: "https://www.kayasehir-cam-balkon.com/ustten-askili/ustten-askili-sistem/ustten-askili-sistem",
    images: [
      {
        url: "/images/cam-balkon-sistemleri/ustten-askili/ustten-askili-sistem.webp",
        width: 800,
        height: 600,
        alt: "Üstten Askılı Sistem - Kayaşehir Cam Balkon",
      },
    ],
  },
};

const UsttenAskiliPage = () => {
  const faqs = [
    {
      question: "Üstten askılı sistem nedir?",
      answer:
        "Üstten askılı sistem, yerden tasarruf sağlayan, üstten sabitlenen ve sessiz bir şekilde çalışan modern bir sürme sistemidir.",
    },
    {
      question: "Hangi mekanlarda kullanılır?",
      answer:
        "Balkonlar, iş yerleri ve teraslar gibi geniş mekanlar için idealdir.",
    },
    {
      question: "Fiyat hesaplaması nasıl yapılır?",
      answer:
        "Balkon ölçülerinizi girerek fiyat hesaplama aracımızı kullanabilirsiniz.",
    },
  ];

  const testimonials = [
    {
      name: "Ali Yılmaz",
      company: "Kayaşehir Kullanıcısı",
      comment:
        "Üstten askılı sistem hem estetik hem de sessiz çalışıyor. Çok memnunuz!",
      avatar: "/images/avatars/avatar1.webp",
    },
    {
      name: "Mehmet Kaya",
      company: "Memnun Müşteri",
      comment:
        "Kullanımı çok pratik ve balkonumuza modern bir hava kattı. Kayaşehir'deki en iyi hizmet!",
      avatar: "/images/avatars/avatar2.webp",
    },
    {
      name: "Burak Demir",
      company: "Kullanıcı",
      comment:
        "İş yerimiz için mükemmel bir çözüm oldu. Çok dayanıklı ve şık görünüyor.",
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
            <span className="text-blue-600">Üstten Askılı Sistem</span> Fiyat
            Hesaplama
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            {`Kayaşehir'deki balkon ve iş yerleriniz için ölçülerinizi girerek fiyatı hemen öğrenin.`}
          </p>
        </header>
      </PriceCalculator>
      <FAQSection faqs={faqs} />
      <ContactSection description="Kayaşehir'deki üstten askılı sistemlerimiz hakkında detaylı bilgi ve fiyat teklifi almak için bizimle iletişime geçin." />
      <Testimonials testimonials={testimonials} />
    </main>
  );
};

export default UsttenAskiliPage;
