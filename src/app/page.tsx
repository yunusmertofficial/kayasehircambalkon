import AnimatedSection from "@/components/AnimatedSection";
import Commitments from "@/components/Commitments";
import Container from "@/components/Container";
import FaqSummary from "@/components/FaqSummary";
import HeroCarousel from "@/components/HeroCarousel";
import LastPost from "@/components/LastPosts";
import PriceCalculationSection from "@/components/PriceCalculationSection";
import Services from "@/components/Services";
import StatisticsAndAchievements from "@/components/StatisticsAndAchievements";
import { services } from "@/utils/data";
import React from "react";
//import GlassBalconyPriceCalculator from "@/components/GlassBalconyPriceCalculator";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <Commitments />
      <AnimatedSection>
        <Container className="pb-16">
          <Services services={services} />
        </Container>
      </AnimatedSection>
      <PriceCalculationSection />
      <AnimatedSection>
        <LastPost />
      </AnimatedSection>
      <StatisticsAndAchievements />
      <AnimatedSection>
        <Container>
          <FaqSummary />
        </Container>
      </AnimatedSection>
    </main>
  );
}
