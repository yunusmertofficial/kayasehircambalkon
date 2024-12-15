import AnimatedSection from "@/components/AnimatedSection";
import Container from "@/components/Container";
import { TestimonialCard } from "@/components/TestimonialCard";

const Testimonials: React.FC<{
  testimonials: {
    name: string;
    company: string;
    comment: string;
    avatar: string;
  }[];
}> = ({ testimonials }) => (
  <AnimatedSection>
    <section className="py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              {`Kayaşehir'de Isıcamlı Giyotin Sistemler Hakkında`}
              <span className="text-blue-600"> Müşteri Yorumları</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              {`Kayaşehir'deki müşterilerimizin, ısıcamlı giyotin sistemlerimizle ilgili deneyimlerini okuyarak yaşam alanlarınızı dönüştürün.`}
            </p>
            <p className="text-muted-foreground text-lg">
              {`Enerji tasarrufu sağlayan, modern ve dayanıklı tasarımlarımızla balkonlarınıza değer katıyoruz.`}
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
