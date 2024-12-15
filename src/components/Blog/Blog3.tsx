import React from "react";
import GlassBalconyPriceCalculator from "@/components/GlassBalconyPriceCalculator";

const Blog3: React.FC = () => (
  <div className="container mx-auto py-8 px-4">
    <GlassBalconyPriceCalculator />

    <p className="text-lg text-gray-700 my-4">
      Cam balkon sistemleri, yaşam alanlarınızı modern ve estetik bir şekilde
      dönüştürmek için harika bir çözümdür. Ancak, bu sistemlerin fiyatları
      birçok faktöre bağlı olarak değişiklik gösterebilir. İşte cam balkon
      fiyatlarını etkileyen en önemli unsurlar.
    </p>

    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
      Cam Balkon Fiyatlarını Belirleyen Faktörler
    </h2>
    <ul className="list-disc ml-6 text-gray-700 mb-6">
      <li>
        <strong>Balkonun Ölçüsü ve Metrekare Alanı:</strong> Cam balkon
        fiyatları genellikle metrekare başına hesaplanır. Balkon ne kadar
        büyükse toplam maliyet o kadar artar.
      </li>
      <li>
        <strong>Kullanılan Malzeme Kalitesi:</strong> Alüminyum çerçeve,
        ısıcamlı cam veya bronz cam gibi seçenekler fiyatları doğrudan etkiler.
      </li>
      <li>
        <strong>Yalıtım ve Enerji Tasarrufu:</strong> Isı yalıtımı özellikleri
        maliyeti artırabilir ancak uzun vadede enerji tasarrufu sağlar.
      </li>
      <li>
        <strong>Montaj Hizmetinin Kalitesi:</strong> Profesyonel montaj,
        sistemin dayanıklılığını artırır ve uzun ömürlü kullanım sağlar.
      </li>
      <li>
        <strong>Ek Özellikler:</strong> Reflekte cam, özel renk seçenekleri ve
        kilit mekanizmaları gibi ekstra özellikler fiyatı etkiler.
      </li>
    </ul>

    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
      Ortalama Cam Balkon Fiyatları
    </h2>
    <p className="text-gray-700 mb-6">
      Türkiye genelinde cam balkon fiyatları genellikle metrekare başına
      hesaplanır. Ortalama olarak:
      <strong> 750 TL - 1500 TL/m²</strong> arasında değişebilir. Bu fiyatlar,
      kullanılan malzeme ve montaj hizmetine göre değişiklik gösterebilir.
    </p>

    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
      Kayaşehir Cam Balkon Hizmetleri
    </h2>
    <p className="text-gray-700 mb-6">
      Kayaşehir Cam Balkon olarak, müşterilerimize kaliteli ve uygun fiyatlı
      çözümler sunuyoruz. Profesyonel montaj ekibimiz, ihtiyacınıza en uygun
      sistemleri kurarak yaşam alanlarınızı güzelleştirir. Daha fazla bilgi ve
      fiyat teklifi almak için aşağıdaki hesaplama aracını kullanabilirsiniz.
    </p>
  </div>
);

export default Blog3;
