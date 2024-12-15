import Blog from "../_components/Blog";
import Blog4 from "@/components/Blog/Blog4";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cam Balkon Sistemlerinde Yalıtımın Önemi | Kayaşehir Cam Balkon",
  description:
    "Yalıtımın cam balkon sistemlerinde neden bu kadar önemli olduğunu öğrenin. Kayaşehir Cam Balkon ile kaliteli yalıtım çözümleri.",
  keywords:
    "Cam Balkon Yalıtımı, Kayaşehir Cam Balkon, Enerji Tasarrufu, Ses Yalıtımı",
};

export default function CamBalkonYalitim() {
  return (
    <Blog slug={"cam-balkon-yalitim"}>
      <Blog4 />
    </Blog>
  );
}
