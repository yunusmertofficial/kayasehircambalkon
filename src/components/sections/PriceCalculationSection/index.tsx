"use client";
import React from "react";
import ButtonLink from "@/components/ButtonLink";
import AnimatedSection from "@/components/AnimatedSection";

const PriceCalculationSection = () => {
  return (
    <AnimatedSection>
      <section
        aria-label="Cam Balkon Fiyat Hesaplama ve Sistemler"
        className="bg-gradient-to-r from-blue-50 via-white to-purple-50 py-12"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 gap-6 sm:gap-0">
          {/* Sol Taraf: Açıklama */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Cam Balkon Fiyatları
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Uygun fiyatlı, kaliteli ve modern balkon cam sistemlerimizi
              keşfedin. İhtiyacınıza özel fiyat hesaplama aracımızla hemen
              hesaplayın.
            </p>
          </div>

          <ButtonLink
            href="/fiyat-hesaplama"
            text="Fiyat Hesaplama"
            additionalClass="animate-bounce"
          />
        </div>
      </section>
    </AnimatedSection>
  );
};

export default PriceCalculationSection;
