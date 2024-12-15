import AnimatedSection from "@/components/AnimatedSection";
import Container from "@/components/Container";
import { TestimonialCard } from "@/components/TestimonialCard";

// Testimonials Section Component
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
              Katlanır Cam Balkonlar Hakkında
              <span className="text-blue-600"> Müşteri Yorumları</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Katlanır cam balkon sistemlerini tercih eden müşterilerimizin
              deneyimlerini okuyun ve yaşam alanlarınızı dönüştürün.
            </p>
            <p className="text-muted-foreground text-lg mb-4">
              Kayaşehir Cam Balkon, size modern, estetik ve enerji tasarruflu
              çözümler sunar. Geniş cam seçenekleri ile balkonlarınıza değer
              katar.
            </p>
            <p className="text-muted-foreground text-lg">
              Katlanır cam balkonlar, hem işlevsel hem de estetik yapısıyla dört
              mevsim boyunca kullanıma uygundur. Yaşam alanlarınızı genişletmek
              ve modern bir dokunuş katmak için idealdir.
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
