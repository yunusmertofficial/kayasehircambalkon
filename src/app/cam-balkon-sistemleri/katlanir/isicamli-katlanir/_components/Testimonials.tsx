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
              Isıcamlı Katlanır Sistemler Hakkında
              <span className="text-blue-600"> Müşteri Yorumları</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Isıcamlı katlanır sistemleri tercih eden müşterilerimizin
              deneyimlerini okuyun ve balkonunuzu dönüştürün.
            </p>
            <p className="text-muted-foreground text-lg mb-4">
              Kayaşehir Cam Balkon, size konforlu, estetik ve yalıtımlı balkon
              çözümleri sunar. Modern yapısıyla yaşam alanlarınızı
              genişletirken, enerji tasarrufu sağlayarak bütçenize katkıda
              bulunur.
            </p>
            <p className="text-muted-foreground text-lg">
              Isıcamlı katlanır cam balkonlar, yüksek yalıtım özellikleri ve
              dayanıklı malzeme yapısı sayesinde dört mevsim boyunca konfor
              sağlar. Hem sıcak yaz aylarında serin bir ortam oluşturur, hem de
              soğuk kış günlerinde dışarıdaki hava şartlarını içeriye yansıtmaz.
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
