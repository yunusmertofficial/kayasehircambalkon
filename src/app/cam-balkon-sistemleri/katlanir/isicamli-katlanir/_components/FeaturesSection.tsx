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
              {" "}
              Isıcamlı Katlanır Sistemler?{" "}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Isıcamlı katlanır cam balkon sistemleri, enerji tasarrufu ve modern
            tasarımı bir arada sunar. Geniş alanlarınızı hem estetik hem de
            fonksiyonel hale getirerek yaşam konforunuzu artırır.
          </p>
          <ul className="space-y-2">
            {[
              "Yüksek izolasyon ve enerji verimliliği",
              "Estetik ve modern tasarım",
              "Kolay kullanım ve bakım",
              "Dayanıklı alüminyum çerçeve",
              "Farklı renk ve cam seçenekleri",
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
            src="/images/cam-balkon-sistemleri/katlanir/isicamli-katlanir/isicamli-katlanir.webp"
            alt="Isıcamlı Katlanır Sistemler"
            layout="fill"
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </section>
    </Container>
  </AnimatedSection>
);

export default FeaturesSection;
