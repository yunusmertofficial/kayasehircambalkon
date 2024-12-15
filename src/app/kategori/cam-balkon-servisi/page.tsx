import { Metadata } from "next";
import Category from "../_components/Category";

export const metadata: Metadata = {
  title: "Cam Balkon Servisi - Modern ve Şık Çözümler",
  description:
    "Cam balkon servisi hakkında bilgi alın ve yaşam alanlarınızı daha kullanışlı hale getirin.",
  keywords: "Cam Balkon, Cam Balkon Servisi, Balkon Sistemleri",
};

export default function CamBalkonServisi() {
  return <Category slug="cam-balkon-servisi" />;
}
