import Breadcrumb from "@/components/Breadcrumb";

const BreadcrumbSection = () => (
  <Breadcrumb
    title="Isıcamlı Giyotin Cam Balkon"
    description="Kayaşehir'de modern ve enerji tasarruflu ısıcamlı giyotin cam balkon çözümleriyle yaşam alanlarınızı dönüştürün."
    breadcrumbs={[
      { href: "/", label: "Anasayfa" },
      { label: "Giyotin Sistemler" },
      {
        href: "/giyotin/isicamli-giyotin",
        label: "Isıcamlı Giyotin Cam Balkon",
      },
    ]}
    image={{
      url: "/images/cam-balkon-sistemleri/giyotin/isicamli-giyotin/isicamli-giyotin.webp",
    }}
  />
);

export default BreadcrumbSection;
