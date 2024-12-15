import AnimatedSection from "@/components/AnimatedSection";
import Container from "@/components/Container";
import Image from "next/image";

const FeaturesSection = () => (
  <AnimatedSection>
    <Container>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16">
        <div>
          <h2 className="text-4xl font-bold text-secondary-foreground mb-4">
            Neden <span className="text-blue-600">Üstten Askılı Sistem?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Kayaşehir Cam Balkon’un üstten askılı sistemleri, estetik ve
            dayanıklı yapısıyla modern bir yaşam alanı sunar. Yerden tasarruf
            sağlayan bu sistem, kullanımı kolay ve işlevseldir.
          </p>
          <ul className="space-y-2">
            {[
              "Yerden tasarruf sağlayan üstten askılı tasarım",
              "Sessiz ve kolay hareket eden sürme mekanizması",
              "Dayanıklı alüminyum çerçeve yapısı",
              "Estetik ve modern görünüm",
              "Balkonlar ve iş yerleri için ideal kullanım",
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
            src="/images/cam-balkon-sistemleri/ustten-askili/ustten-askili-sistem/ustten-askili-sistem.webp"
            alt="Üstten Askılı Sistem - Kayaşehir"
            layout="fill"
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </section>
    </Container>
  </AnimatedSection>
);

export default FeaturesSection;
