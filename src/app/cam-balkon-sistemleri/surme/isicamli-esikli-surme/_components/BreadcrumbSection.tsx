import Breadcrumb from "@/components/Breadcrumb";

const BreadcrumbSection = () => (
  <Breadcrumb
    title="Isıcamlı Eşikli Sürme Cam Balkon"
    description="Kayaşehir'de modern ve enerji tasarruflu ısıcamlı eşikli sürme cam balkon çözümleri."
    breadcrumbs={[
      { href: "/", label: "Anasayfa" },
      { label: "Sürme Sistemler" },
      {
        href: "/surme/isicamli-esikli-surme",
        label: "Isıcamlı Eşikli Sürme Cam Balkon",
      },
    ]}
    image={{
      url: "/images/cam-balkon-sistemleri/surme/isicamli-esikli-surme/isicamli-esikli-surme.webp",
    }}
  />
);

export default BreadcrumbSection;
