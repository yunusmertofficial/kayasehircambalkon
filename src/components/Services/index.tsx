import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

type Service = {
  title: string;
  description: string;
  href: string;
};

type ServicesProps = {
  services: Service[];
};

const Services = ({ services }: ServicesProps) => {
  return (
    <section aria-label="Hizmetler">
      <h2 className="text-3xl font-bold text-center mb-6 text-foreground">
        En Çok Tercih Edilen Hizmetlerimiz
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            {/* Resim */}
            <div className="relative overflow-hidden rounded-lg mb-4 h-40">
              <Image
                src={`https://via.placeholder.com/400x300?text=${encodeURIComponent(
                  service.title
                )}`}
                alt={service.title}
                fill
                style={{
                  objectFit: "cover",
                }}
                quality={75}
                className="hover:opacity-90 transition-opacity duration-300"
              />
            </div>

            {/* Başlık ve Açıklama */}
            <h3 className="text-xl font-semibold text-center mb-4 text-foreground">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-center mb-6">
              {service.description}
            </p>

            {/* Daha Fazla Bilgi */}
            <Link
              href={service.href}
              className="flex items-center justify-center text-primary bg-primary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-4 py-2 rounded-full font-medium text-sm"
            >
              Daha Fazla Bilgi
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
