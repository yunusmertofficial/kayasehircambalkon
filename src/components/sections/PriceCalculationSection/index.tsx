"use client";
import React from "react";
import ButtonLink from "@/components/ButtonLink";
import AnimatedSection from "@/components/AnimatedSection";
import InfoSection from "@/components/InfoSection";

const PriceCalculationSection = () => {
  return (
    <AnimatedSection>
      <section aria-label="Cam Balkon Fiyat Hesaplama ve Sistemler">
        <InfoSection
          title="Cam Balkon Fiyatları"
          description="Uygun fiyatlı, kaliteli ve modern balkon cam sistemlerimizi
            keşfedin. İhtiyacınıza özel fiyat hesaplama aracımızla hemen
            hesaplayın."
        >
          <ButtonLink
            href="/blog/cam-balkon-fiyatlari"
            text="Fiyat Hesaplama"
            additionalClass="animate-bounce"
          />
        </InfoSection>
      </section>
    </AnimatedSection>
  );
};

export default PriceCalculationSection;
