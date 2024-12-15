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
            <span className="text-blue-600">Rolling Roof Sistemleri?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Kayaşehir Cam Balkon’un rolling roof sistemleri, uzaktan kontrol
            edilebilen, şık ve modern tasarımlı gölgelendirme çözümleri sunar.
            Dört mevsim konfor ve estetik bir arada!
          </p>
          <ul className="space-y-2">
            {[
              "Uzaktan kumanda ile kontrol edilebilir tasarım",
              "Hava koşullarına uygun yalıtım ve dayanıklılık",
              "Şık ve modern görünüm",
              "Enerji tasarrufu sağlayan gölgelendirme teknolojisi",
              "Dört mevsim kullanım için ideal yapı",
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
            src="/images/cam-balkon-sistemleri/golgelendirme/rolling-roof/rolling-roof.webp"
            alt="Rolling Roof Sistemleri - Kayaşehir"
            layout="fill"
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </section>
    </Container>
  </AnimatedSection>
);

export default FeaturesSection;
