import { Metadata } from "next";
import BreadcrumbSection from "./_components/BreadcrumbSection";
import FeaturesSection from "./_components/FeaturesSection";
import PriceCalculator from "../../_components/PriceCalculator";
import FAQSection from "./_components/FAQSection";
import ContactSection from "../../_components/ContactSection";
import Testimonials from "./_components/Testimonials";

export const metadata: Metadata = {
  title: "Katlanır Cam Balkon | Kayaşehir Cam Balkon",
  description:
    "Katlanır cam balkon sistemleri ile balkonlarınızı estetik ve işlevsellik kazandırın. Modern tasarımı ve enerji tasarruflu çözümleriyle yaşam alanlarınızı genişletin.",
  keywords: [
    "katlanır cam balkon",
    "cam balkon fiyat hesaplama",
    "modern balkon çözümleri",
    "katlanır balkon sistemleri",
  ],
  openGraph: {
    title: "Katlanır Cam Balkon | Kayaşehir Cam Balkon",
    description:
      "Katlanır cam balkon sistemleriyle estetik ve işlevselliği bir araya getirin. Balkon ölçülerinizi girerek fiyat hesaplama yapın.",
    url: "https://www.kayasehir-cam-balkon.com/katlanir/cam-balkon",
    images: [
      {
        url: "/images/cam-balkon-sistemleri/katlanir/cam-balkon/cam-balkon.webp",
        width: 800,
        height: 600,
        alt: "Katlanır Cam Balkon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Katlanır Cam Balkon | Kayaşehir Cam Balkon",
    description:
      "Modern balkon çözümleriyle estetik ve enerji tasarrufunu bir araya getirin. Balkon ölçülerinizi girerek fiyat hesaplama yapın.",
    images: [
      "/images/cam-balkon-sistemleri/katlanir/cam-balkon/cam-balkon.webp",
    ],
  },
};

const KatlanirCamBalkonPage = () => {
  const faqs = [
    {
      question: "Katlanır cam balkon sistemleri dayanıklı mı?",
      answer:
        "Evet, yüksek kaliteli malzemeler ve dayanıklı alüminyum çerçeve ile uzun ömürlü kullanım sağlar.",
    },
    {
      question: "Montaj süresi ne kadar sürer?",
      answer:
        "Katlanır cam balkon sistemlerinin montajı genellikle 1-2 iş günü içinde tamamlanır.",
    },
    {
      question: "Enerji tasarrufu sağlanır mı?",
      answer:
        "Katlanır cam balkon sistemleri sayesinde yüksek enerji tasarrufu elde edilir ve ısı yalıtımı sağlanır.",
    },
  ];

  const testimonials = [
    {
      name: "Burak Yılmaz",
      company: "Memnun Müşteri",
      comment:
        "Katlanır cam balkon sayesinde evimizde daha fazla alan yarattık. Çok memnunuz!",
      avatar: "/images/avatars/avatar1.webp",
    },
    {
      name: "Mert Kaya",
      company: "Kullanıcı",
      comment:
        "Enerji tasarrufu ve estetik tasarım bir arada. Montaj süreci çok hızlıydı!",
      avatar: "/images/avatars/avatar2.webp",
    },
    {
      name: "Ali Demir",
      company: "Müşteri",
      comment:
        "Cam balkon sistemleri hem dayanıklı hem de çok kullanışlı. Kesinlikle tavsiye ederim.",
      avatar: "/images/avatars/avatar3.webp",
    },
    {
      name: "Ahmet Öz",
      company: "Kayaşehir Cam Balkon Kullanıcısı",
      comment:
        "Ekip profesyonel ve işini iyi biliyor. Katlanır cam balkon sayesinde evimiz çok daha modern görünüyor.",
      avatar: "/images/avatars/avatar4.webp",
    },
  ];

  return (
    <main>
      <BreadcrumbSection />
      <FeaturesSection />
      <PriceCalculator pricePerSquareMeter={600}>
        <header className="text-center mb-10">
          <h2
            id="price-calculator-heading"
            className="text-4xl font-bold text-secondary-foreground"
          >
            <span className="text-blue-600"> Katlanır Cam Balkon </span>
            Fiyat Hesaplama
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Balkon ölçülerinizi girerek toplam alanı ve fiyatı öğrenin.
          </p>
        </header>
      </PriceCalculator>
      <FAQSection faqs={faqs} />
      <ContactSection description="Isıcamlı katlanır sistemler hakkında detaylı bilgi almak ve fiyat teklifi için bizimle iletişime geçebilirsiniz." />
      <Testimonials testimonials={testimonials} />
    </main>
  );
};

export default KatlanirCamBalkonPage;
