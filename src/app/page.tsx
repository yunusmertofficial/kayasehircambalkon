import Commitments from "@/components/sections/Commitments";
import Solutions from "@/components/sections/Solutions";
import FaqSummary from "@/components/sections/FaqSummary";
import PriceCalculationSection from "@/components/sections/PriceCalculationSection";
import StatisticsAndAchievements from "@/components/sections/StatisticsAndAchievements";
import React from "react";
import HeroCarousel from "@/components/sections/HeroCarousel";
import LastPost from "@/components/sections/LastPosts";
import PreferredServices from "@/components/sections/PreferredServices";
//import GlassBalconyPriceCalculator from "@/components/GlassBalconyPriceCalculator";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <Commitments />
      <PreferredServices />
      <PriceCalculationSection />
      <Solutions />
      <StatisticsAndAchievements />
      <LastPost />
      <FaqSummary />
    </main>
  );
}
