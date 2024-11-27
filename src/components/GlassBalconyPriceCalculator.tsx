"use client";
const GlassBalconyPriceCalculator = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form verilerini işleme
    alert("Form submitted!");
  };

  return (
    <div className="relative z-20 w-full max-w-4xl mx-auto -mt-24 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-green-500 text-center">
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
              className="block text-gray-700 font-bold mb-2"
            >
              Uzunluk (cm)
            </label>
            <input
              type="number"
              id="length"
              min="1"
              step="1"
              placeholder="Tam sayı giriniz"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-300"
              required
            />
          </div>

          {/* Genişlik Girişi */}
          <div>
            <label
              htmlFor="width"
              className="block text-gray-700 font-bold mb-2"
            >
              Genişlik (cm)
            </label>
            <input
              type="number"
              id="width"
              min="1"
              step="1"
              placeholder="Tam sayı giriniz"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-300"
              required
            />
          </div>

          {/* Cam Balkon Türü */}
          <div>
            <label
              htmlFor="type"
              className="block text-gray-700 font-bold mb-2"
            >
              Cam Balkon Türü
            </label>
            <select
              id="type"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-300"
              required
            >
              <option value="">Bir tür seçiniz</option>
              <option value="katlanır">Katlanır Cam Balkon</option>
              <option value="sürgülü">Sürgülü Cam Balkon</option>
              <option value="giyotin">Giyotin Cam Balkon</option>
            </select>
          </div>

          {/* Gönderim Butonu */}
          <div className="col-span-1 md:col-span-3 flex justify-center">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow hover:bg-green-600"
            >
              Hesapla
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GlassBalconyPriceCalculator;
