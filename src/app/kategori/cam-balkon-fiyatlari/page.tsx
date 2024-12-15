import { Metadata } from "next";
import Category from "../_components/Category";

export const metadata: Metadata = {
  title: "Cam Balkon Fiyatları - Detaylı Rehber",
  description:
    "Cam balkon fiyatları hakkında detaylı bilgi edinin. Malzeme kalitesi, ölçüler ve yalıtım gibi faktörlerin fiyatlara etkisini öğrenin.",
  keywords: "Cam Balkon Fiyatları, Cam Balkon Maliyeti, Kayaşehir Cam Balkon",
};

export default function CamBalkonFiyatlari() {
  return <Category slug="cam-balkon-fiyatlari" />;
}
