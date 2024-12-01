import Breadcrumb from "@/components/Breadcrumb";

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
