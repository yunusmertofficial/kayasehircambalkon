import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

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
    { label: "Hakkımızda", href: "/hakkimizda" },
  ];

  return (
    <section>
      {/* Banner ve Breadcrumb */}
      <Breadcrumb
        title="Hakkımızda"
        breadcrumbs={breadcrumbs}
        image={{
          blurDataURL: "/images/hakkimizda/banner-blur.webp",
          url: "/images/hakkimizda/banner.webp",
        }}
      />

      {/* Sayfa İçeriği */}
      <div className="container mx-auto mt-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Hakkımızda</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Kayaşehir Cam Balkon olarak 15 yıldır cam balkon sistemlerinde kalite
          ve güveni temsil ediyoruz. Deneyimli ekibimizle birlikte İstanbul
          genelinde binlerce mutlu müşteriye hizmet verdik. Yüksek kalite
          standartlarımız ve müşteri odaklı yaklaşımımızla sektörde öncü bir
          konuma sahibiz.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Firmamız, hem bireysel hem de ticari alanlarda şık ve dayanıklı cam
          balkon çözümleri sunmaktadır. Teknolojik altyapımız ve yenilikçi
          üretim süreçlerimizle uzun ömürlü ve estetik çözümler üretiyoruz.
          Kayaşehir Cam Balkon ile kalite ve güveni tercih edin!
        </p>
      </div>

      {/* Footer ile Boşluk */}
      <div className="mt-20"></div>
    </section>
  );
}
