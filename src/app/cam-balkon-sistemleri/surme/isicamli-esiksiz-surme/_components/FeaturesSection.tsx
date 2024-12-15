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
              Isıcamlı Eşiksiz Sürme Cam Balkon?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Kayaşehir Cam Balkon’un ısıcamlı eşiksiz sürme sistemleri, şık
            tasarımı ve eşiksiz yapısıyla modern bir görünüm sunar. Enerji
            tasarrufu ve kullanım kolaylığı bir arada.
          </p>
          <ul className="space-y-2">
            {[
              "Zeminde eşik olmadan modern tasarım",
              "Enerji tasarrufu sağlayan ısıcam teknolojisi",
              "Şık ve estetik görünüm",
              "Dayanıklı alüminyum çerçeve yapısı",
              "Kolay kullanım ve uzun ömür",
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
            src="/images/cam-balkon-sistemleri/surme/isicamli-esiksiz-surme/isicamli-esiksiz-surme.webp"
            alt="Isıcamlı Eşiksiz Sürme Cam Balkon - Kayaşehir"
            layout="fill"
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </section>
    </Container>
  </AnimatedSection>
);

export default FeaturesSection;
