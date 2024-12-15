"use client";
import React from "react";
import { useInView } from "react-intersection-observer"; // Intersection Observer hook
import CountUp from "react-countup"; // React CountUp kütüphanesi
import Container from "@/components/Container"; // Sizin Container bileşeniniz
import { FiBriefcase, FiCheckCircle, FiSmile, FiMapPin } from "react-icons/fi"; // React Icons
import AnimatedSection from "@/components/AnimatedSection";

const StatisticsAndAchievements = () => {
  const stats = [
    { value: 20, label: "Yıllık Deneyim", icon: <FiBriefcase /> },
    { value: 500, label: "Tamamlanan Proje", icon: <FiCheckCircle /> },
    { value: 1000, label: "Mutlu Müşteri", icon: <FiSmile /> },
    { value: 10, label: "Hizmet Alanı", icon: <FiMapPin /> },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // Sadece bir kez tetiklenmesini istiyorsanız
    threshold: 0.2, // Görünürlük oranı (örneğin %20)
  });

  return (
    <AnimatedSection>
      <section
        ref={ref} // Intersection Observer için referans
        className="py-16"
        aria-label="İstatistikler ve Başarılarımız"
      >
        <Container>
          <div className="text-center">
            <header className="text-center mb-16">
              <h3
                id="completed-projects-title"
                className="text-4xl font-bold text-foreground"
              >
                İstatistikler ve Başarılarımız
              </h3>
            </header>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all flex flex-col items-center"
                >
                  <div className="text-primary text-5xl mb-4">{stat.icon}</div>
                  <p className="text-4xl font-bold text-primary mb-2">
                    {inView ? (
                      <CountUp start={0} end={stat.value} duration={2} />
                    ) : (
                      "0"
                    )}
                    +
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </AnimatedSection>
  );
};

export default StatisticsAndAchievements;
