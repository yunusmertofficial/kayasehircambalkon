"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/components/Container";

const CompletedProjectsSection = () => {
  const projects = [
    {
      title: "Modern Katlanır Cam Balkon",
      description:
        "İstanbul’da tamamladığımız modern katlanır cam balkon projesi, estetik ve dayanıklılığı bir araya getiriyor. Şehir manzarasını kesintisiz şekilde sunuyor.",
      image: "https://via.placeholder.com/350x400", // Placeholder görsel
    },
    {
      title: "Villa Cam Balkon Çözümü",
      description:
        "Ankara'da geniş teras alanları için tasarlanan bu villa cam balkon projesi, şık tasarımı ve kaliteli malzemeleri ile öne çıkıyor.",
      image: "https://via.placeholder.com/350x400", // Placeholder görsel
    },
    {
      title: "Sürgülü Cam Balkon Sistemi",
      description:
        "Antalya'da deniz manzaralı bir projede uygulanan sürgülü cam balkon sistemi, rahat kullanım ve estetik görünümü bir arada sunuyor.",
      image: "https://via.placeholder.com/350x400", // Placeholder görsel
    },
  ];

  return (
    <section className="py-16" aria-labelledby="completed-projects-title">
      <Container>
        {/* Başlık */}
        <header className="text-center mb-16">
          <h3
            id="completed-projects-title"
            className="text-4xl font-extrabold text-foreground"
          >
            Tamamlanan Cam Balkon Projelerimiz
          </h3>
          <p className="text-muted-foreground mt-4">
            Yüksek kaliteli cam balkon projelerimizden bazı örnekler.
          </p>
        </header>

        {/* Proje Listesi */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <article
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
              aria-label={project.title}
            >
              {/* Görsel */}
              <div className="relative w-full md:w-5/12 h-72 overflow-hidden rounded-lg shadow-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Metin */}
              <div className="md:w-7/12 text-center md:text-left">
                <h4 className="text-2xl font-semibold text-foreground mb-4">
                  {project.title}
                </h4>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Daha Fazlasını Görüntüle Butonu */}
        <div className="mt-16 flex justify-end">
          <Link
            href="/referanslar"
            className="flex items-center gap-2 text-sm sm:text-base px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-lg hover:bg-primary-foreground hover:text-primary transition-all"
          >
            Daha Fazlasını Görüntüle
            <FiArrowRight className="text-lg" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CompletedProjectsSection;
