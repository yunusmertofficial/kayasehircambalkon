import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Kayaşehir Cam Balkon | Modern ve Şık Çözümler",
  description:
    "Kayaşehir cam balkon sistemleri ile katlanır, sürme, ısıcamlı ve giyotin balkon çözümleri. Şık tasarımlar, uygun fiyatlar ve uzman montaj hizmetleriyle mekanlarınızı dönüştürün.",
  keywords: [
    // Anahtar ürün adları
    "Kayaşehir cam balkon",
    "cam balkon Kayaşehir",
    "Katlanır cam balkon",
    "Isıcamlı katlanır sistem",
    "Sürme cam balkon",
    "Isıcamlı eşikli sürme sistem",
    "Isıcamlı eşiksiz sürme sistem",
    "Giyotin cam balkon",
    "Silinebilir ısıcamlı giyotin",
    "Rolling Roof gölgelendirme sistemleri",
    "Üstten askılı cam balkon",
    // Blog içeriklerinden alınan anahtar kelimeler
    "Cam balkon fiyatları",
    "Cam balkon avantajları",
    "Cam balkon yalıtımı",
    "Cam balkon montajı",
    "Cam balkon tasarımı",
    "Cam balkon alırken dikkat edilmesi gerekenler",
    "Cam balkon fiyatlarını etkileyen faktörler",
    // Hizmet ve sayfa bazlı anahtar kelimeler
    "Hizmetlerimiz Kayaşehir",
    "Cam balkon servisi",
    "Kayaşehir balkon çözümleri",
    "Modern balkon sistemleri",
    "Kayaşehir referanslar",
    "Cam balkon blog yazıları",
    "Balkon cam sistemleri",
    "Giyotin sistemlerin avantajları",
    "Eşiksiz sürme balkon camları",
    "Kayaşehir uygun fiyatlı balkon çözümleri",
  ],
  openGraph: {
    title: "Kayaşehir Cam Balkon | Katlanır, Sürme, Isıcamlı Sistemler",
    description:
      "Cam balkon çözümleri ile yaşam alanlarınızı modernleştirin. Katlanır, sürme, giyotin ve ısıcamlı balkon sistemleri hakkında detaylı bilgi için tıklayın.",
    url: "https://www.kayasehircambalkon.com",
    images: [
      {
        url: "/images/cam-balkon1.webp",
        width: 1200,
        height: 630,
        alt: "Kayaşehir katlanır cam balkon",
      },
      {
        url: "/images/cam-balkon2.webp",
        width: 1200,
        height: 630,
        alt: "Sürme cam balkon sistemi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kayaşehir Cam Balkon | Katlanır, Sürme, Isıcamlı ve Giyotin Sistemler",
    description:
      "Katlanır, sürme, ısıcamlı ve giyotin cam balkon sistemleri ile mekanlarınızı modern ve şık hale getirin. Detaylı bilgi için tıklayın.",
    images: ["/images/cam-balkon1.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WTSWX5ZZ" />
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
