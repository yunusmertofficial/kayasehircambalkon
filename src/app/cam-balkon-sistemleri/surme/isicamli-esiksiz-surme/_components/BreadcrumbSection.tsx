import Breadcrumb from "@/components/Breadcrumb";

const BreadcrumbSection = () => (
  <Breadcrumb
    title="Isıcamlı Eşiksiz Sürme Cam Balkon"
    description="Kayaşehir'de modern ve şık ısıcamlı eşiksiz sürme cam balkon çözümleriyle yaşam alanlarınızı dönüştürün."
    breadcrumbs={[
      { href: "/", label: "Anasayfa" },
      { label: "Sürme Sistemler" },
      {
        href: "/surme/isicamli-esiksiz-surme",
        label: "Isıcamlı Eşiksiz Sürme Cam Balkon",
      },
    ]}
    image={{
      url: "/images/cam-balkon-sistemleri/surme/isicamli-esiksiz-surme/isicamli-esiksiz-surme.webp",
    }}
  />
);

export default BreadcrumbSection;
