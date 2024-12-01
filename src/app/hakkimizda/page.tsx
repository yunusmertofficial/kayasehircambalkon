import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hakkımızda | Kayaşehir Cam Balkon",
  description:
    "Kayaşehir Cam Balkon olarak 20 yıllık deneyimimizle kaliteli ve güvenilir cam balkon çözümleri sunuyoruz. Firmamız hakkında detaylı bilgi alın.",
  keywords:
    "Kayaşehir Cam Balkon, cam balkon çözümleri, kaliteli cam balkon, müşteri memnuniyeti, cam balkon firması, Hakkımızda",
  openGraph: {
    title: "Hakkımızda | Kayaşehir Cam Balkon",
    description:
      "Firmamız 20 yıllık tecrübesiyle şık, dayanıklı ve kaliteli cam balkon çözümleri sunuyor. Müşteri memnuniyetini ön planda tutuyoruz.",
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
      "Kayaşehir Cam Balkon hakkında bilgi alın. 20 yıllık tecrübemizle cam balkon çözümlerinde öncü bir firmayız.",
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
      <div className="relative w-full h-64 lg:h-96">
        {/* Görsel */}
        <Image
          src="/images/hakkimizda.webp" // Örnek görsel yolu
          alt="Firmamız Hakkında"
          layout="fill"
          objectFit="cover" // Görseli tam kapsayıcı yapar
          placeholder="blur"
          blurDataURL="/images/hakkimizda.jpg" // Bulanık veri
          quality={20} // Kalite
          priority
        />
        {/* Başlık ve Breadcrumb */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Firmamız Hakkında
          </h1>
          <nav className="text-sm text-gray-300">
            {breadcrumbs.map((crumb, index) => (
              <span key={index}>
                <a href={crumb.href} className="text-white hover:underline">
                  {crumb.label}
                </a>
                {index < breadcrumbs.length - 1 && (
                  <span className="mx-2 text-gray-400">/</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Sayfa İçeriği */}
      <div className="container mx-auto mt-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Firmamız Hakkında
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Kayaşehir Cam Balkon olarak 20 yıldır cam balkon sistemlerinde kalite
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
