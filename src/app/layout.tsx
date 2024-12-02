import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";

export const metadata: Metadata = {
  title: "Kayaşehir Cam Balkon",
  description:
    "Kayaşehir'de profesyonel cam balkon çözümleri sunuyoruz. Şık, dayanıklı ve kaliteli cam balkon sistemleriyle balkon keyfinizi her mevsim yaşayın!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
