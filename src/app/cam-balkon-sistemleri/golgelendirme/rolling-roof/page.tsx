import { Metadata } from "next";
import BreadcrumbSection from "./_components/BreadcrumbSection";
import FeaturesSection from "./_components/FeaturesSection";
import PriceCalculator from "../../_components/PriceCalculator";
import FAQSection from "./_components/FAQSection";
import ContactSection from "../../_components/ContactSection";
import Testimonials from "./_components/Testimonials";

export const metadata: Metadata = {
  title: "Gölgelendirme Rolling Roof Sistemleri | Kayaşehir Cam Balkon",
  description:
    "Kayaşehir'de modern, şık ve işlevsel rolling roof gölgelendirme sistemleri. Balkon ve teraslarınızı daha konforlu hale getirin.",
  keywords: [
    "Kayaşehir rolling roof sistemleri",
    "gölgelendirme çözümleri",
    "modern teras sistemleri",
    "otomatik rolling roof fiyat hesaplama",
  ],
  openGraph: {
    title: "Gölgelendirme Rolling Roof Sistemleri | Kayaşehir Cam Balkon",
    description:
      "Kayaşehir'de modern ve estetik rolling roof gölgelendirme sistemleri. Balkon ölçülerinizi girerek fiyat hesaplama yapın.",
    url: "https://www.kayasehir-cam-balkon.com/golgelendirme/rolling-roof",
    images: [
      {
        url: "/images/cam-balkon-sistemleri/golgelendirme/rolling-roof/rolling-roof.webp",
        width: 800,
        height: 600,
        alt: "Gölgelendirme Rolling Roof Sistemleri - Kayaşehir Cam Balkon",
      },
    ],
  },
};

const RollingRoofPage = () => {
  const faqs = [
    {
      question: "Rolling roof sistemleri nasıl çalışır?",
      answer:
        "Rolling roof sistemleri, uzaktan kumanda ile açılıp kapanabilen, modern gölgelendirme çözümleridir.",
    },
    {
      question: "Rolling roof sistemleri hangi mekanlarda kullanılır?",
      answer:
        "Rolling roof sistemleri, balkon, teras, bahçe ve kış bahçelerinde kullanıma uygundur.",
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
        "Rolling roof sistemi sayesinde terasımız her mevsim kullanıma uygun hale geldi. Çok memnunuz!",
      avatar: "/images/avatars/avatar1.webp",
    },
    {
      name: "Mehmet Kaya",
      company: "Memnun Müşteri",
      comment:
        "Uzaktan kontrol edilebilen tasarımı çok modern. Kayaşehir'deki en iyi hizmet!",
      avatar: "/images/avatars/avatar2.webp",
    },
    {
      name: "Burak Demir",
      company: "Kullanıcı",
      comment:
        "Terasımıza çok modern bir görünüm kazandırdı. Kesinlikle tavsiye ederim.",
      avatar: "/images/avatars/avatar3.webp",
    },
  ];

  return (
    <main>
      <BreadcrumbSection />
      <FeaturesSection />
      <PriceCalculator pricePerSquareMeter={1200}>
        <header className="text-center mb-10">
          <h2
            id="price-calculator-heading"
            className="text-4xl font-bold text-secondary-foreground"
          >
            <span className="text-blue-600">Rolling Roof Sistemleri</span> Fiyat
            Hesaplama
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            {`Kayaşehir'deki balkon ve teraslarınız için ölçülerinizi girerek
            fiyatı hemen öğrenin.`}
          </p>
        </header>
      </PriceCalculator>
      <FAQSection faqs={faqs} />
      <ContactSection description="Kayaşehir'deki rolling roof sistemlerimiz hakkında detaylı bilgi ve fiyat teklifi almak için bizimle iletişime geçin." />
      <Testimonials testimonials={testimonials} />
    </main>
  );
};

export default RollingRoofPage;
