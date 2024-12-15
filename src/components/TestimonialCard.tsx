import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  company: string;
  comment: string;
  avatar: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  company,
  comment,
  avatar,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex items-center gap-4 mb-4">
      <Image
        src={avatar}
        alt={name}
        width={50}
        height={50}
        className="rounded-full"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-primary">{company}</p>
      </div>
    </div>
    <p className="text-muted-foreground">{comment}</p>
  </div>
);
