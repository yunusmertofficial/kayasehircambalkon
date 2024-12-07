import React from "react";
import Image from "next/image";
import ButtonLink from "./ButtonLink";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  href,
}) => {
  return (
    <article
      className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      aria-label={title} // SEO dostu; başlık, ekran okuyucular için erişilebilirlik sağlar.
    >
      <div className="relative overflow-hidden rounded-lg mb-4 h-40">
        <Image
          src={`https://via.placeholder.com/400x300?text=${encodeURIComponent(
            title
          )}`}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          quality={75}
          className="hover:opacity-90 transition-opacity duration-300"
        />
      </div>

      {/* Başlık ve Açıklama */}
      <h3 className="text-xl font-semibold text-center mb-4 text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground text-center mb-6">{description}</p>

      {/* Daha Fazla Bilgi */}
      <ButtonLink href={href} text="Daha Fazla Bilgi" additionalClass="mt-5" />
    </article>
  );
};

export default ServiceCard;
