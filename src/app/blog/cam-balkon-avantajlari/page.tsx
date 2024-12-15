import Blog from "../_components/Blog";
import Blog1 from "@/components/Blog/Blog1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cam Balkonun Avantajları ve Hayatınıza Kattığı Konfor | Kayaşehir Cam Balkon",
  description:
    "Cam balkon sistemleri ile evinizi dönüştürün. Estetik, yalıtım ve değer artışı sağlayan çözümlerimizle yaşam kalitenizi artırıyoruz.",
  keywords:
    "Cam Balkon, Avantajları, Kayaşehir Cam Balkon, Cam Balkon Modelleri",
};

export default function CamBalkonAvantajlari() {
  return (
    <Blog slug={"cam-balkon-avantajlari"}>
      <Blog1 />
    </Blog>
  );
}
