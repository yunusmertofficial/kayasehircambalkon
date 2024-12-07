"use client";
import React from "react";
import { FiSettings, FiPackage, FiTool, FiShoppingCart } from "react-icons/fi";
import Container from "@/components/Container";
import SolutionCard from "@/components/SolutionCard";
import AnimatedSection from "@/components/AnimatedSection";

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
    <AnimatedSection>
      <section
        className="py-16 animate-fadeIn"
        aria-labelledby="solutions-title"
      >
        <Container>
          <header className="text-center mb-16">
            <h3
              id="completed-projects-title"
              className="text-4xl font-bold text-foreground"
            >
              Cam Balkon Çözümlerimiz
            </h3>
            <p className="text-muted-foreground mt-4">
              Cam balkon imalatı, tedarik, montaj ve satış hizmetlerinde
              uzmanız.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <SolutionCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </Container>
      </section>
    </AnimatedSection>
  );
};

export default Solutions;
