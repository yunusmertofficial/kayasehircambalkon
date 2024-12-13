import Image from "next/image";

const Blog1 = () => {
  return (
    <div>
      <Image
        src="/images/blog/blog1.webp" // Görsel URL'sini ekleyin
        alt="Cam balkonun avantajları ve kullanım kolaylıkları"
        width={800}
        height={450}
        className="rounded-lg mb-6"
        priority
      />

      <p>
        Cam balkon sistemleri, modern yaşam alanlarının vazgeçilmez bir parçası
        haline gelmiştir. Hem estetik hem de işlevsellik açısından birçok
        avantaj sunan cam balkonlar, evinizi dönüştürerek yaşam kalitenizi
        artırır. İşte cam balkonun hayatınıza katacağı başlıca avantajlar:
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Ekstra Yaşam Alanı</h2>
      <p>
        Cam balkon, balkonlarınızı yılın her döneminde kullanabileceğiniz bir
        yaşam alanına dönüştürür. İster yazın açık hava keyfi yapın, ister kışın
        korunaklı bir ortamda oturun, cam balkon her mevsim kullanılabilirlik
        sağlar.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Isı ve Ses Yalıtımı
      </h2>
      <p>
        Cam balkon sistemleri, yüksek kaliteli yalıtım özellikleri sayesinde
        dışarıdan gelen gürültüyü azaltır ve enerji tasarrufu sağlar. Kış
        aylarında sıcaklığın korunmasına, yaz aylarında ise serin bir ortam
        yaratılmasına yardımcı olur.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Estetik ve Modern Tasarım
      </h2>
      <p>
        Cam balkonlar, evinizin dış cephesine modern ve şık bir görünüm
        kazandırır. Minimalist tasarımları ile hem iç hem de dış mekan
        dekorasyonunuza estetik bir dokunuş yapar.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Değer Artışı</h2>
      <p>
        Cam balkon, sadece konfor sağlamaz, aynı zamanda evinizin değerini
        artırır. Şık ve işlevsel bir cam balkon sistemi, potansiyel alıcıların
        gözünde evinizi daha cazip hale getirebilir.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        5. Kolay Bakım ve Dayanıklılık
      </h2>
      <p>
        Cam balkonlar, kolay temizlenebilir yüzeylere ve dayanıklı malzemelere
        sahiptir. Uzun ömürlü bir kullanım sunarken minimum bakım gerektirir,
        böylece zamandan tasarruf edersiniz.
      </p>

      <p className="mt-6">
        Cam balkon sistemleri, sunduğu konfor ve avantajlarla yaşam alanlarınızı
        daha kullanışlı hale getirir. Kayaşehir Cam Balkon olarak, sizin için en
        uygun çözümleri sunuyoruz. Detaylı bilgi ve ücretsiz keşif için bizimle
        iletişime geçin!
      </p>
    </div>
  );
};

export default Blog1;
