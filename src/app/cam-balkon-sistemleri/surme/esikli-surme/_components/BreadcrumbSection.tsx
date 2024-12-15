import Breadcrumb from "@/components/Breadcrumb";

const BreadcrumbSection = () => (
  <Breadcrumb
    title="Eşikli Sürme Cam Balkon"
    description="Kayaşehir'de modern ve estetik eşikli sürme cam balkon sistemleri ile yaşam alanlarınızı dönüştürün."
    breadcrumbs={[
      { href: "/", label: "Anasayfa" },
      { label: "Sürme Sistemler" },
      { href: "/surme/esikli-surme", label: "Eşikli Sürme Cam Balkon" },
    ]}
    image={{
      url: "/images/cam-balkon-sistemleri/surme/esikli-surme/esikli-surme.webp",
    }}
  />
);

export default BreadcrumbSection;
