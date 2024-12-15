import Breadcrumb from "@/components/Breadcrumb";

const BreadcrumbSection = () => (
  <Breadcrumb
    title="Silinebilir Isıcamlı Giyotin Cam Balkon"
    description="Kayaşehir'de modern, enerji tasarruflu ve silinebilir ısıcamlı giyotin cam balkon çözümleriyle yaşam alanlarınızı dönüştürün."
    breadcrumbs={[
      { href: "/", label: "Anasayfa" },
      { label: "Giyotin Sistemler" },
      {
        href: "/giyotin/silinebilir-isicamli-giyotin",
        label: "Silinebilir Isıcamlı Giyotin Cam Balkon",
      },
    ]}
    image={{
      url: "/images/cam-balkon-sistemleri/giyotin/silinebilir-isicamli-giyotin/silinebilir-isicamli-giyotin.webp",
    }}
  />
);

export default BreadcrumbSection;
