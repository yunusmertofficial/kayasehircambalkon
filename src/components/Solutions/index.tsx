"use client";
import React from "react";
import { FiSettings, FiPackage, FiTool, FiShoppingCart } from "react-icons/fi";
import Container from "@/components/Container";

const Solutions = () => {
  const services = [
    {
      title: "Cam Balkon İmalatçısı",
      description:
        "Dayanıklı ve uzun ömürlü cam balkon sistemleri üretiyoruz. Modern tasarım ve teknoloji ile projelerinize özel çözümler sunuyoruz.",
      icon: <FiSettings />,
    },
    {
      title: "Cam Balkon Tedarikçisi",
      description:
        "Projelerinize özel cam balkon sistemlerini hızlı ve güvenilir şekilde tedarik ediyoruz.",
      icon: <FiPackage />,
    },
    {
      title: "Cam Balkon Montajı",
      description:
        "Profesyonel ekibimizle cam balkon sistemlerinizin güvenli ve hızlı montajını gerçekleştiriyoruz.",
      icon: <FiTool />,
    },
    {
      title: "Cam Balkon Satışı",
      description:
        "Her ihtiyaca uygun cam balkon sistemlerini uygun fiyatlarla sunuyoruz.",
      icon: <FiShoppingCart />,
    },
  ];

  return (
    <section className="py-16 animate-fadeIn" aria-labelledby="solutions-title">
      <Container>
        {/* Bölüm Başlığı */}
        <header className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground">
            Cam Balkon Çözümleri
          </h3>
          <p className="text-muted-foreground mt-4">
            Cam balkon imalatı, tedarik, montaj ve satış hizmetlerinde uzmanız.
          </p>
        </header>

        {/* Hizmet Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all"
              aria-label={service.title}
            >
              {/* İkon */}
              <div className="flex justify-center items-center text-primary text-5xl mb-4">
                {service.icon}
              </div>
              {/* Başlık */}
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h4>
              {/* Açıklama */}
              <p className="text-muted-foreground">{service.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Solutions;
