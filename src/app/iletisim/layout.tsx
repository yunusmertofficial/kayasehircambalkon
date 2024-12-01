import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Kayaşehir Cam Balkon",
  description:
    "Kayaşehir Cam Balkon ile iletişime geçin. Her türlü soru, öneri veya talepleriniz için bizimle kolayca bağlantı kurabilirsiniz.",
  keywords:
    "Kayaşehir Cam Balkon, iletişim, cam balkon iletişim, cam balkon öneri, cam balkon sorular",
};

export default function CamBalkonIletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbs = [
    { href: "/", label: "Anasayfa" },
    { href: "/iletisim", label: "İletişim" },
  ];
  return (
    <>
      <section>
        <Breadcrumb
          breadcrumbs={breadcrumbs}
          title="Kayaşehir Cam Balkon"
          description="Bizimle iletişime geçin. Her türlü sorunuz için buradayız."
        />
        {children}
      </section>
      ;
    </>
  );
}
