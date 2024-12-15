import Blog from "../_components/Blog";
import Blog3 from "@/components/Blog/Blog3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cam Balkon Fiyatları ve Etkileyen Faktörler | Kayaşehir Cam Balkon",
  description:
    "Cam balkon fiyatlarını etkileyen faktörler hakkında bilgi alın. Kayaşehir Cam Balkon ile yaşam alanlarınızı uygun maliyetlerle dönüştürün.",
  keywords: "Cam Balkon Fiyatları, Cam Balkon Maliyeti, Kayaşehir Cam Balkon",
};

export default function CamBalkonFiyatlari() {
  return (
    <Blog slug={"cam-balkon-fiyatlari"}>
      <Blog3 />
    </Blog>
  );
}
