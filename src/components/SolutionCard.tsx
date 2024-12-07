"use client";
import React from "react";

interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <article
      className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all"
      aria-label={title}
    >
      {/* İkon */}
      <div className="flex justify-center items-center text-primary text-5xl mb-4">
        {icon}
      </div>
      {/* Başlık */}
      <h4 className="text-lg font-semibold text-foreground mb-2">{title}</h4>
      {/* Açıklama */}
      <p className="text-muted-foreground">{description}</p>
    </article>
  );
};

export default SolutionCard;
