import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";

export default function AboutPage() {
  const breadcrumbs = [
    { label: "Anasayfa", href: "/" },
    { label: "Hakkımızda", href: "/hakkimizda" },
  ];

  return (
    <div>
      {/* Breadcrumb Bileşeni */}
      <Breadcrumb
        breadcrumbs={breadcrumbs}
        title="Hakkımızda"
        description="Kayaşehir Cam Balkon, 20 yıldır müşteri memnuniyeti odaklı hizmet vermektedir."
      />

      {/* Sayfa İçeriği */}
      <section className="container mx-auto mt-12 px-4">
        {/* Görsel ve Metin Bölgesi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Görsel */}
          <div>
            <Image
              src="/images/background.webp" // Örnek görsel yolu
              alt="Firmamız Hakkında"
              width={600}
              height={400}
              placeholder="blur"
              blurDataURL="/images/background.jpg" // Bulanık veri
              className="rounded-lg shadow-lg"
              priority
            />
          </div>

          {/* Metin */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Firmamız Hakkında
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Kayaşehir Cam Balkon olarak 20 yıldır cam balkon sistemlerinde
              kalite ve güveni temsil ediyoruz. Deneyimli ekibimizle birlikte
              İstanbul genelinde binlerce mutlu müşteriye hizmet verdik. Yüksek
              kalite standartlarımız ve müşteri odaklı yaklaşımımızla sektörde
              öncü bir konuma sahibiz.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Firmamız, hem bireysel hem de ticari alanlarda şık ve dayanıklı
              cam balkon çözümleri sunmaktadır. Teknolojik altyapımız ve
              yenilikçi üretim süreçlerimizle uzun ömürlü ve estetik çözümler
              üretiyoruz. Kayaşehir Cam Balkon ile kalite ve güveni tercih edin!
            </p>
          </div>
        </div>
      </section>

      {/* Footer ile Boşluk */}
      <div className="mt-20"></div>
    </div>
  );
}
