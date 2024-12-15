import Breadcrumb from "@/components/Breadcrumb";

const BreadcrumbSection = () => (
  <Breadcrumb
    title="Üstten Askılı Sistem"
    description="Kayaşehir'de modern ve şık üstten askılı sistem çözümleriyle yaşam alanlarınızı dönüştürün."
    breadcrumbs={[
      { href: "/", label: "Anasayfa" },
      { label: "Sürme Sistemler" },
      {
        href: "/ustten-askili/ustten-askili-sistem",
        label: "Üstten Askılı Sistem",
      },
    ]}
    image={{
      url: "/images/cam-balkon-sistemleri/ustten-askili/ustten-askili-sistem/ustten-askili-sistem.webp",
    }}
  />
);

export default BreadcrumbSection;
