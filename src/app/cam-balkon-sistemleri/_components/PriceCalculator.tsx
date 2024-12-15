"use client";
import AnimatedSection from "@/components/AnimatedSection";
import Container from "@/components/Container";
import { useState } from "react";

const PriceCalculator = ({
  pricePerSquareMeter,
  children,
}: {
  pricePerSquareMeter: number;
  children: React.ReactNode;
}) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const calculateAreaAndPrice = () => {
    const widthInMeters = (Number(width) || 0) / 100; // Genişliği metreye çevir
    const heightInMeters = (Number(height) || 0) / 100; // Yüksekliği metreye çevir
    const area = widthInMeters * heightInMeters;
    console.log(pricePerSquareMeter);
    // const price = area * pricePerSquareMeter;
    const price = area * 0;
    return { area, price };
  };

  const { area, price } = calculateAreaAndPrice();

  return (
    <AnimatedSection>
      <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 py-16">
        <Container>
          <section className="py-12" aria-labelledby="price-calculator-heading">
            {children}

            {/* Giriş ve Hesaplanan Alan */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div>
                <label
                  htmlFor="width-input"
                  className="block text-lg font-medium text-muted-foreground mb-2"
                >
                  Genişlik (m)
                </label>
                <input
                  id="width-input"
                  type="number"
                  placeholder="Örnek: 3.5"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="height-input"
                  className="block text-lg font-medium text-muted-foreground mb-2"
                >
                  Yükseklik (m)
                </label>
                <input
                  id="height-input"
                  type="number"
                  placeholder="Örnek: 2.2"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="area-output"
                  className="block text-lg font-medium text-muted-foreground mb-2"
                >
                  Toplam Alan (m²)
                </label>
                <input
                  id="area-output"
                  type="text"
                  value={area.toFixed(4)}
                  readOnly
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-gray-100 focus:outline-none"
                />
              </div>
            </div>

            {/* Hesaplanan Fiyat */}
            <div className="mt-12 text-center">
              <div className="bg-accent text-primary rounded-lg shadow-md p-6">
                <p className="text-2xl font-bold mt-2">
                  Fiyat: {price.toFixed(2)} TL
                </p>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </AnimatedSection>
  );
};

export default PriceCalculator;
