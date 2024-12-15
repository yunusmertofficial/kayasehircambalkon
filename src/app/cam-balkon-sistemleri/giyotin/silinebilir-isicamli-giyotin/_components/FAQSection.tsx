import AnimatedSection from "@/components/AnimatedSection";
import Container from "@/components/Container";
import FaqSummary from "@/components/FaqSummary";

const FAQSection: React.FC<{
  faqs: { question: string; answer: string }[];
}> = ({ faqs }) => (
  <AnimatedSection>
    <section className="py-12">
      <Container>
        <header className="mb-10">
          <h3
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center"
          >
            {`Kayaşehir'de Modern ve Kullanışlı Mekanlar İçin`}
            <br className="hidden lg:block" />
            <span className="text-blue-600">
              Silinebilir Isıcamlı Giyotin Cam Balkon
            </span>
          </h3>
        </header>
        <FaqSummary faqs={faqs} />
      </Container>
    </section>
  </AnimatedSection>
);

export default FAQSection;
