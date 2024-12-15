import React from "react";
import Breadcrumb from "@/components/Breadcrumb";

const BreadcrumbSection = () => (
  <Breadcrumb
    title="Isıcamlı Katlanır Sistemler"
    description="Geniş alanlarda estetik ve fonksiyonelliği bir araya getiren modern çözümler."
    breadcrumbs={[
      { href: "/", label: "Anasayfa" },
      { label: "Katlanır Sistemler" },
      { href: "/katlanir/isicamli-katlanir", label: "Isıcamlı Katlanır" },
    ]}
    image={{
      url: "/images/cam-balkon-sistemleri/katlanir/isicamli-katlanir/isicamli-katlanir.webp",
    }}
  />
);

export default BreadcrumbSection;
