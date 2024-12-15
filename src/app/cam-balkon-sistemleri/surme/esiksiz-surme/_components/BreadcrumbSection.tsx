import Breadcrumb from "@/components/Breadcrumb";

const BreadcrumbSection = () => (
  <Breadcrumb
    title="Eşiksiz Sürme Cam Balkon"
    description="Kayaşehir'de modern ve şık eşiksiz sürme cam balkon çözümleriyle yaşam alanlarınızı dönüştürün."
    breadcrumbs={[
      { href: "/", label: "Anasayfa" },
      { label: "Sürme Sistemler" },
      { href: "/surme/esiksiz-surme", label: "Eşiksiz Sürme Cam Balkon" },
    ]}
    image={{
      url: "/images/cam-balkon-sistemleri/surme/esiksiz-surme/esiksiz-surme.webp",
    }}
  />
);

export default BreadcrumbSection;
