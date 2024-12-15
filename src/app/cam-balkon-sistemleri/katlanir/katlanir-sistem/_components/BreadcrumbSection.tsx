import React from "react";
import Breadcrumb from "@/components/Breadcrumb";

const BreadcrumbSection = () => (
  <Breadcrumb
    title="Katlanır Cam Balkon"
    description="Estetik ve işlevselliği bir araya getiren modern katlanır cam balkon çözümleri."
    breadcrumbs={[
      { href: "/", label: "Anasayfa" },
      { label: "Katlanır Sistemler" },
      { href: "/katlanir/cam-balkon", label: "Katlanır Cam Balkon" },
    ]}
    image={{
      url: "/images/cam-balkon-sistemleri/katlanir/katlanir-sistem/katlanir-sistem.webp",
    }}
  />
);

export default BreadcrumbSection;
