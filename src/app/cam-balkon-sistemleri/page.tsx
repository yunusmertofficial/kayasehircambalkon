import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";
import Services from "./_components/Services";

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
        url: "/images/hakkimizda.webp",
        width: 1200,
        height: 630,
        alt: "Kayaşehir Cam Balkon hakkında",
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
        url: "/images/hakkimizda.webp",
        alt: "Kayaşehir Cam Balkon hakkında",
      },
    ],
  },
};

export default function AboutPage() {
  const breadcrumbs = [
    { label: "Anasayfa", href: "/" },
    { label: "Hizmetlerimiz", href: "/cam-balkon-sistemleri" },
  ];

  return (
    <main>
      <Breadcrumb
        title="Cam Balkon Sistemleri"
        breadcrumbs={breadcrumbs}
        image={{
          url: "/images/hizmetlerimiz/banner.webp",
        }}
      />

      <Services />
    </main>
  );
}
