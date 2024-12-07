"use client";
import React from "react";
import Link from "next/link";

const PriceCalculationSection = () => {
  return (
    <section
      aria-label="Cam Balkon Fiyat Hesaplama ve Sistemler"
      className="bg-gradient-to-r from-blue-50 via-white to-purple-50 py-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 gap-6 sm:gap-0">
        {/* Sol Taraf: Açıklama */}
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Cam Balkon Fiyatları
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base">
            Uygun fiyatlı, kaliteli ve modern balkon cam sistemlerimizi
            keşfedin. İhtiyacınıza özel fiyat hesaplama aracımızla hemen
            hesaplayın.
          </p>
        </div>

        {/* Sağ Taraf: Buton */}
        <Link
          href="/fiyat-hesaplama"
          className="flex items-center animate-bounce gap-2 text-sm sm:text-base px-6 py-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary-foreground hover:text-primary transition-all"
        >
          Fiyat Hesaplama
        </Link>
      </div>
    </section>
  );
};

export default PriceCalculationSection;
