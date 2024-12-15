import Breadcrumb from "@/components/Breadcrumb";

const BreadcrumbSection = () => (
  <Breadcrumb
    title="Gölgelendirme Rolling Roof Sistemleri"
    description="Kayaşehir'de modern ve şık gölgelendirme rolling roof sistemleriyle yaşam alanlarınızı dönüştürün."
    breadcrumbs={[
      { href: "/", label: "Anasayfa" },
      { label: "Gölgelendirme Sistemleri" },
      {
        href: "/golgelendirme/rolling-roof",
        label: "Gölgelendirme Rolling Roof Sistemleri",
      },
    ]}
    image={{
      url: "/images/cam-balkon-sistemleri/golgelendirme/rolling-roof/rolling-roof.webp",
    }}
  />
);

export default BreadcrumbSection;
