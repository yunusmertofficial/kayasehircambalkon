import { Metadata } from "next";
import BreadcrumbSection from "./_components/BreadcrumbSection";
import FeaturesSection from "./_components/FeaturesSection";
import PriceCalculator from "../../_components/PriceCalculator";
import FAQSection from "./_components/FAQSection";
import ContactSection from "../../_components/ContactSection";
import Testimonials from "./_components/Testimonials";

export const metadata: Metadata = {
  title: "Isıcamlı Katlanır Sistemler | Kayaşehir Cam Balkon",
  description:
    "Isıcamlı katlanır sistemler ile balkonlarınızı dönüştürün. Estetik, enerji tasarrufu ve modern tasarımı bir arada sunan çözümlerimizle yaşam alanlarınızı genişletin.",
  keywords: [
    "ısıcamlı katlanır sistemler",
    "ısıcamlı cam balkon",
    "cam balkon fiyat hesaplama",
    "enerji tasarruflu balkon sistemleri",
    "modern balkon çözümleri",
  ],
  openGraph: {
    title: "Isıcamlı Katlanır Sistemler | Kayaşehir Cam Balkon",
    description:
      "Balkon ölçülerinizi girerek fiyat hesaplama yapın. Isıcamlı cam balkon sistemleriyle estetik ve işlevselliği bir araya getirin.",
    url: "https://www.kayasehir-cam-balkon.com/katlanir/isicamli-katlanir",
    images: [
      {
        url: "/images/cam-balkon-sistemleri/katlanir/isicamli-katlanir/isicamli-katlanir.webp",
        width: 800,
        height: 600,
        alt: "Isıcamlı Katlanır Sistemler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isıcamlı Katlanır Sistemler | Kayaşehir Cam Balkon",
    description:
      "Modern balkon çözümleriyle estetik ve enerji tasarrufunu bir araya getirin. Balkon ölçülerinizi girerek fiyat hesaplama yapın.",
    images: [
      "/images/cam-balkon-sistemleri/katlanir/isicamli-katlanir/isicamli-katlanir.webp",
    ],
  },
};

const IsicamliKatlanir = () => {
  const faqs = [
    {
      question: "Isıcamlı sistemler enerji tasarrufu sağlar mı?",
      answer:
        "Evet, çift cam teknolojisi sayesinde yüksek enerji tasarrufu sağlanır. Bu sistemler, ısı yalıtımı ile enerji maliyetlerinizi düşürür.",
    },
    {
      question: "Montaj süresi ne kadar sürer?",
      answer:
        "Isıcamlı katlanır sistemlerin montajı, yerel şartlara bağlı olarak genellikle 2-3 iş günü içinde tamamlanır.",
    },
    {
      question: "Isıcamlı sistemler dayanıklı mı?",
      answer:
        "Evet, sistemlerimiz dayanıklı alüminyum çerçeve ve yüksek kaliteli cam ile üretilmiştir, bu da uzun ömürlü kullanım sağlar.",
    },
  ];

  const testimonials = [
    {
      name: "Ahmet Yıldız",
      company: "Kayaşehir Cam Balkon Müşterisi",
      comment:
        "Isıcamlı katlanır sistem sayesinde balkonum artık kışın da kullanılabilir hale geldi. Hem enerji tasarrufu sağlıyorum hem de modern görünümü çok beğeniyorum.",
      avatar: "/images/avatars/avatar1.webp",
    },
    {
      name: "Ali Yılmaz",
      company: "Memnun Müşteri",
      comment:
        "Montaj ekibi çok profesyoneldi, 2 günde her şey sorunsuz tamamlandı. Isıcamlı katlanır sistemler gerçekten hayat kalitemi artırdı.",
      avatar: "/images/avatars/avatar2.webp",
    },
    {
      name: "Mehmet Karaca",
      company: "Müşteri",
      comment:
        "Balkonum şimdi çok daha estetik ve işlevsel. Hem ses hem de ısı izolasyonu mükemmel. Kesinlikle tavsiye ederim!",
      avatar: "/images/avatars/avatar3.webp",
    },
    {
      name: "Kenan Yılmaz",
      company: "Kayaşehir Cam Balkon Kullanıcısı",
      comment:
        "Isıcamlı katlanır sistemler sayesinde panoramik bir manzaraya kavuştum. Kullanımı çok pratik ve kaliteli malzeme kullanılmış.",
      avatar: "/images/avatars/avatar4.webp",
    },
  ];

  return (
    <main>
      <BreadcrumbSection />
      <FeaturesSection />
      <PriceCalculator pricePerSquareMeter={500}>
        <header className="text-center mb-10">
          <h2
            id="price-calculator-heading"
            className="text-4xl font-bold text-secondary-foreground"
          >
            <span className="text-blue-600"> Isıcamlı Cam Balkon </span>
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

export default IsicamliKatlanir;
