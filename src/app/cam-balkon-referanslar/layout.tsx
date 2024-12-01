import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referanslar | Kayaşehir Cam Balkon",
  description:
    "Kayaşehir Cam Balkon'un tamamladığı projeler ve referanslarımız. Cam balkon çözümlerinde kalite ve müşteri memnuniyeti sunuyoruz.",
  keywords:
    "Kayaşehir Cam Balkon referanslar, cam balkon projeleri, tamamlanmış projeler, müşteri memnuniyeti, cam balkon çözümleri",
  openGraph: {
    title: "Referanslar | Kayaşehir Cam Balkon",
    description:
      "Tamamlanan projelerimizi inceleyin. Kayaşehir Cam Balkon olarak yüksek kaliteli cam balkon çözümleri sunuyoruz.",
    images: [
      {
        url: "/images/referanslar/0.webp",
        width: 1200,
        height: 630,
        alt: "Kayaşehir Cam Balkon referans projeleri",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Referanslar | Kayaşehir Cam Balkon",
    description:
      "Kayaşehir Cam Balkon referans projeleriyle kalitemizi görün. Cam balkon çözümlerinde uzmanız.",
    images: [
      {
        url: "/images/referanslar/0.webp",
        alt: "Kayaşehir Cam Balkon referans projeleri",
      },
    ],
  },
};

export default function CamBalkonReferanslarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbs = [
    { label: "Anasayfa", href: "/" },
    { label: "Referanslar", href: "/cam-balkon-referanslar" },
  ];
  return (
    <>
      <section>
        <Breadcrumb
          breadcrumbs={breadcrumbs}
          title="Cam Balkon Referanslar"
          description="Kayaşehir Cam Balkon'un üretim, imalat, montaj ve tüm uygulama fotoğraflarını bu sayfada görebilir, detaylar için bizimle iletişime geçebilirsiniz."
        />
        {children}
      </section>
      ;
    </>
  );
}
