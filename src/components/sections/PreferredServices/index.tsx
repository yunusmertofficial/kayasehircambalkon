import AnimatedSection from "@/components/AnimatedSection";
import Container from "@/components/Container";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/utils/data";
import React from "react";

export default function PreferredServices() {
  const preferredServices = services.slice(0, 3);
  return (
    <AnimatedSection>
      <section aria-label="En Çok Tercih Edilen Hizmetler">
        <Container className="pb-16">
          <header className="text-center mb-16">
            <h3
              id="completed-projects-title"
              className="text-4xl font-bold text-foreground"
            >
              Cam Balkon Hizmetlerimiz
            </h3>
          </header>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {preferredServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </Container>
      </section>
    </AnimatedSection>
  );
}
