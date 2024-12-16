import React from "react";

function InfoSection({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 py-16">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 gap-6 sm:gap-0">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-foreground mb-2">{title}</h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            {description}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}

export default InfoSection;
