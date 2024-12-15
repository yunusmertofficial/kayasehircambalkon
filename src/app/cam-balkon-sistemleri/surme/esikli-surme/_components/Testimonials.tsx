import AnimatedSection from "@/components/AnimatedSection";
import Container from "@/components/Container";
import { TestimonialCard } from "@/components/TestimonialCard";

interface TestimonialsProps {
  testimonials: {
    name: string;
    company: string;
    comment: string;
    avatar: string;
  }[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => (
  <AnimatedSection>
    <section className="py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              `{`Kayaşehir'de Eşikli Sürme Sistemler Hakkında`}`
              <span className="text-blue-600"> Müşteri Yorumları</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              {`Kayaşehir Cam Balkon'dan eşikli sürme sistemleri tercih eden
              müşterilerimizin yorumlarını okuyun ve balkonlarınızı dönüştürmek
              için harekete geçin.`}
            </p>
            <p className="text-muted-foreground text-lg mb-4">
              Modern, dayanıklı ve enerji tasarrufu sağlayan eşikli sürme cam
              balkon sistemlerimiz, balkonlarınızı konforlu yaşam alanlarına
              dönüştürmek için ideal bir seçimdir.
            </p>
            <p className="text-muted-foreground text-lg">
              Kayaşehir Cam Balkon, yüksek kaliteli malzemeler ve profesyonel
              hizmetiyle müşteri memnuniyetini ön planda tutar. Hayalinizdeki
              yaşam alanlarını oluşturmak için doğru adrestesiniz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  </AnimatedSection>
);

export default Testimonials;
