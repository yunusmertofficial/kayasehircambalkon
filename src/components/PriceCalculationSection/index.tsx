import React from "react";
import Link from "next/link";

const PriceCalculationSection = () => {
  return (
    <section
      aria-label="Balkon Cam Sistemleri Fiyat Hesaplama"
      className="bg-muted py-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 gap-4 sm:gap-0">
        {/* Sol Taraf: Açıklama */}
        <h2 className="text-lg sm:text-xl font-medium text-muted-foreground text-center sm:text-left">
          Kaliteli ve Uygun Fiyatlı Balkon Cam Sistemleri
        </h2>

        {/* Sağ Taraf: Buton */}
        <Link
          href="/fiyat-hesaplama"
          className="text-sm sm:text-base px-4 py-2 bg-primary text-primary-foreground rounded transition-all hover:bg-primary-foreground hover:text-primary"
        >
          FİYAT HESAPLAMA
        </Link>
      </div>
    </section>
  );
};

export default PriceCalculationSection;
