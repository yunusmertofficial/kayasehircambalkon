import InfoSection from "@/components/InfoSection";
import ButtonLink from "@/components/ButtonLink";
import AnimatedSection from "@/components/AnimatedSection";

const ContactSection = ({ description }: { description: string }) => (
  <AnimatedSection>
    <section aria-label="Daha Fazla Bilgi İçin Bize Ulaşın" className="py-16">
      <InfoSection
        title="Daha Fazla Bilgi İçin Bize Ulaşın"
        description={description}
      >
        <ButtonLink
          href="tel:+905365608595"
          text="Bizi Arayın"
          additionalClass="animate-bounce"
        />
      </InfoSection>
    </section>
  </AnimatedSection>
);

export default ContactSection;
