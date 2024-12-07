"use client";
import React from "react";
import CountUp from "react-countup"; // React CountUp kütüphanesi
import Container from "@/components/Container"; // Sizin Container bileşeniniz
import { FiBriefcase, FiCheckCircle, FiSmile, FiMapPin } from "react-icons/fi"; // React Icons
import { useInView } from "react-intersection-observer"; // Intersection Observer

const StatisticsAndAchievements = () => {
  const stats = [
    { value: 20, label: "Yıllık Deneyim", icon: <FiBriefcase /> },
    { value: 500, label: "Tamamlanan Proje", icon: <FiCheckCircle /> },
    { value: 1000, label: "Mutlu Müşteri", icon: <FiSmile /> },
    { value: 10, label: "Hizmet Alanı", icon: <FiMapPin /> },
  ];

  // Intersection Observer Hook
  const { ref, inView } = useInView({
    triggerOnce: true, // Sadece bir kez tetiklenir
    threshold: 0.2, // %20 görünüm alanına girdiğinde tetikler
  });

  return (
    <section
      className="py-16 bg-muted"
      aria-label="İstatistikler ve Başarılarımız"
    >
      <Container>
        <div ref={ref} className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            İstatistikler ve Başarılarımız
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all flex flex-col items-center"
              >
                {/* İkon */}
                <div className="text-primary text-5xl mb-4">{stat.icon}</div>

                {/* Sayısal Değer */}
                <p className="text-4xl font-bold text-primary mb-2">
                  {inView && (
                    <CountUp start={0} end={stat.value} duration={2} />
                  )}
                  +
                </p>

                {/* Açıklama */}
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StatisticsAndAchievements;
