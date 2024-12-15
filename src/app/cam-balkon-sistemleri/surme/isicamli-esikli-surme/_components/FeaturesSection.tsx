import AnimatedSection from "@/components/AnimatedSection";
import Container from "@/components/Container";
import Image from "next/image";

const FeaturesSection = () => (
  <AnimatedSection>
    <Container>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16">
        <div>
          <h2 className="text-4xl font-bold text-secondary-foreground mb-4">
            Neden{" "}
            <span className="text-blue-600">
              Isıcamlı Eşikli Sürme Cam Balkon?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Kayaşehir Cam Balkon’un ısıcamlı eşikli sürme sistemleri, yüksek
            yalıtım, modern tasarım ve enerji tasarrufu sağlayarak yaşam
            alanlarınıza değer katar.
          </p>
          <ul className="space-y-2">
            {[
              "Yüksek ısı ve ses yalıtımı",
              "Modern ve estetik tasarım",
              "Enerji tasarrufu sağlayan cam paneller",
              "Dayanıklı alüminyum çerçeve yapısı",
              "Kolay kullanım ve uzun ömürlü tasarım",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-full h-64 lg:h-96">
          <Image
            src="/images/cam-balkon-sistemleri/surme/isicamli-esikli-surme/isicamli-esikli-surme.webp"
            alt="Isıcamlı Eşikli Sürme Cam Balkon - Kayaşehir"
            layout="fill"
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </section>
    </Container>
  </AnimatedSection>
);

export default FeaturesSection;
