import Blog2 from "@/components/Blog/Blog2";
import Blog from "../_components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cam Balkon Alırken Dikkat Edilmesi Gerekenler | Kayaşehir Cam Balkon",
  description:
    "Cam balkon alırken malzeme kalitesi, izolasyon özellikleri ve montaj süreci gibi önemli detaylara dikkat etmelisiniz. Kayaşehir Cam Balkon rehberliğiyle doğru seçimi yapın.",
  keywords:
    "Cam Balkon, Cam Balkon Modelleri, Cam Balkon Alırken Dikkat Edilmesi Gerekenler, Kayaşehir Cam Balkon",
};

export default function CamBalkonDikkatEdilmesiGerekenler() {
  return (
    <Blog slug="cam-balkon-alirken-dikkat-edilmesi-gerekenler">
      <Blog2 />
    </Blog>
  );
}
