"use client";
import { serviceCategories } from "@/utils/data";
import { useState } from "react";

const GlassBalconyPriceCalculator = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [length, setLength] = useState<number | "">(0);
  const [width, setWidth] = useState<number | "">(0);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!length || !width || !selectedProduct) {
      alert("Lütfen tüm alanları doldurunuz.");
      return;
    }

    const category = serviceCategories.find(
      (cat) => cat.title === selectedCategory
    );
    const product = category?.products.find(
      (prod) => prod.title === selectedProduct
    );

    if (product) {
      const area = (length / 100) * (width / 100); // Alan m² olarak hesaplanır
      const price = area * product.pricePerSquareMeter;
      setTotalPrice(price);
    }
  };

  return (
    <div className="bg-background shadow-lg rounded-lg p-6">
      <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
        Cam Balkon Fiyat Hesaplama
      </h2>
      <form
        className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-6"
        onSubmit={handleSubmit}
      >
        {/* Uzunluk Girişi */}
        <div>
          <label
            htmlFor="length"
            className="block text-secondary-foreground font-bold mb-2"
          >
            Uzunluk (cm)
          </label>
          <input
            type="number"
            id="length"
            min="1"
            step="1"
            placeholder="Tam sayı giriniz"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full p-3 border border-secondary-foreground rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-primary"
            required
          />
        </div>

        {/* Genişlik Girişi */}
        <div>
          <label
            htmlFor="width"
            className="block text-secondary-foreground font-bold mb-2"
          >
            Genişlik (cm)
          </label>
          <input
            type="number"
            id="width"
            min="1"
            step="1"
            placeholder="Tam sayı giriniz"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className="w-full p-3 border border-secondary-foreground rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-primary"
            required
          />
        </div>

        {/* Cam Balkon Türü */}
        <div>
          <label
            htmlFor="category"
            className="block text-secondary-foreground font-bold mb-2"
          >
            Cam Balkon Kategorisi
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedProduct("");
            }}
            className="w-full p-3 border border-secondary-foreground rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-primary"
            required
          >
            <option value="">Bir kategori seçiniz</option>
            {serviceCategories.map((cat) => (
              <option key={cat.id} value={cat.title}>
                {cat.title}
              </option>
            ))}
          </select>
        </div>

        {/* Cam Balkon Ürünü */}
        <div>
          <label
            htmlFor="product"
            className="block text-secondary-foreground font-bold mb-2"
          >
            Cam Balkon Türü
          </label>
          <select
            id="product"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="w-full p-3 border border-secondary-foreground rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-primary"
            disabled={!selectedCategory}
            required
          >
            <option value="">Bir tür seçiniz</option>
            {selectedCategory &&
              serviceCategories
                .find((cat) => cat.title === selectedCategory)
                ?.products.map((prod) => (
                  <option key={prod.id} value={prod.title}>
                    {prod.title}
                  </option>
                ))}
          </select>
        </div>

        {/* Gönderim Butonu */}
        <div className="col-span-1 md:col-span-3 flex justify-center">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg shadow hover:text-secondary"
            aria-label="Hesapla"
          >
            Hesapla
          </button>
        </div>
      </form>

      {totalPrice !== null && (
        <div className="mt-6 text-center text-lg font-bold text-green-600">
          Toplam Fiyat: {totalPrice.toFixed(2)} TL
        </div>
      )}
    </div>
  );
};

export default GlassBalconyPriceCalculator;
