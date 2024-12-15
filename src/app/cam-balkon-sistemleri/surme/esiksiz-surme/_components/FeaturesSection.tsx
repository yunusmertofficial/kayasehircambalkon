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
            <span className="text-blue-600">Eşiksiz Sürme Cam Balkon?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Kayaşehir Cam Balkon’un eşiksiz sürme sistemleri, zeminde eşik
            olmadan şık ve modern bir tasarım sunar. Kullanım kolaylığı ve
            estetik görünüm bir arada.
          </p>
          <ul className="space-y-2">
            {[
              "Zeminde eşik olmadan estetik ve modern tasarım",
              "Şık ve minimal görünüm",
              "Dayanıklı alüminyum çerçeve yapısı",
              "Kolay kullanım ve uzun ömür",
              "Balkonlarınıza modern bir dokunuş",
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
            src="/images/cam-balkon-sistemleri/surme/esiksiz-surme/esiksiz-surme.webp"
            alt="Eşiksiz Sürme Cam Balkon - Kayaşehir"
            layout="fill"
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </section>
    </Container>
  </AnimatedSection>
);

export default FeaturesSection;