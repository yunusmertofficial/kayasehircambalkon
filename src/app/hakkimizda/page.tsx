import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import StatisticsAndAchievements from "@/components/sections/StatisticsAndAchievements";
import type { Metadata } from "next";
import AboutUsSection from "./_components/AboutUsSection";
import WhyUsSection from "./_components/WhyUsSection";

export const metadata: Metadata = {
  title: "Hakkımızda | Kayaşehir Cam Balkon",
  description:
    "Kayaşehir Cam Balkon olarak 15 yıllık deneyimimizle kaliteli ve güvenilir cam balkon çözümleri sunuyoruz. Firmamız hakkında detaylı bilgi alın.",
  keywords:
    "Kayaşehir Cam Balkon, cam balkon çözümleri, kaliteli cam balkon, müşteri memnuniyeti, cam balkon firması, Hakkımızda",
  openGraph: {
    title: "Hakkımızda | Kayaşehir Cam Balkon",
    description:
      "Firmamız 15 yıllık tecrübesiyle şık, dayanıklı ve kaliteli cam balkon çözümleri sunuyor. Müşteri memnuniyetini ön planda tutuyoruz.",
    images: [
      {
        url: "/images/hakkimizda/hakkimizda.webp",
        width: 1200,
        height: 630,
        alt: "Kayaşehir Cam Balkon Hakkımızda Görseli",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hakkımızda | Kayaşehir Cam Balkon",
    description:
      "Kayaşehir Cam Balkon hakkında bilgi alın. 15 yıllık tecrübemizle cam balkon çözümlerinde öncü bir firmayız.",
    images: [
      {
        url: "/images//hakkimizda/hakkimizda.webp",
        alt: "Kayaşehir Cam Balkon Hakkımızda Görseli",
      },
    ],
  },
};

export default function AboutPage() {
  const breadcrumbs = [
    { label: "Anasayfa", href: "/" },
    { label: "Hakkımızda", href: "/hakkimizda" },
  ];

  return (
    <main>
      {/* Banner ve Breadcrumb */}
      <Breadcrumb
        title="Hakkımızda"
        breadcrumbs={breadcrumbs}
        image={{
          blurDataURL: "/images/hakkimizda/banner-blur.webp",
          url: "/images/hakkimizda/banner.webp",
        }}
      />

      <AboutUsSection />
      <WhyUsSection />
      <StatisticsAndAchievements />
    </main>
  );
}
