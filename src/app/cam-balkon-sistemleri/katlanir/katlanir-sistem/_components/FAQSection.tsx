import AnimatedSection from "@/components/AnimatedSection";
import Container from "@/components/Container";
import FaqSummary from "@/components/FaqSummary";

interface FAQSectionProps {
  faqs: { question: string; answer: string }[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => (
  <AnimatedSection>
    <section className="py-12">
      <Container>
        <header className="mb-10">
          <h3
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center"
          >
            Modern ve Konforlu Mekanlar İçin
            <br className="hidden lg:block" />
            <span className="text-blue-600">Katlanır Sistemler</span>
          </h3>
        </header>
        <FaqSummary faqs={faqs} />
      </Container>
    </section>
  </AnimatedSection>
);

export default FAQSection;
