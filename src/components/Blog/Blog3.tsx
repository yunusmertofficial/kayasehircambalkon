import Image from "next/image";

const Blog3 = () => {
  return (
    <div>
      <Image
        src="/images/blog/blog3.webp" // Görsel URL'sini buraya ekleyin
        alt="Cam balkon sistemlerinde yalıtımın önemi"
        width={800}
        height={450}
        className="rounded-lg mb-6"
        priority
      />

      <p>
        Cam balkon sistemleri, estetik bir görünüm sunmanın yanı sıra yaşam
        alanlarınızı konforlu hale getiren birçok özelliğe sahiptir. Bu
        özelliklerin başında yalıtım gelir. Cam balkonlarda doğru yalıtım,
        enerji tasarrufu sağlarken evinizin konfor seviyesini de artırır.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Isı Yalıtımı</h2>
      <p>
        Cam balkonlarda kullanılan kaliteli camlar ve sızdırmazlık elemanları,
        ısı kaybını önlemeye yardımcı olur. Özellikle kış aylarında içerideki
        sıcaklığı koruyarak enerji tasarrufu sağlar.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Ses Yalıtımı</h2>
      <p>
        Gürültü kirliliği, şehir yaşamının en büyük sorunlarından biridir. Cam
        balkon sistemlerindeki yalıtım özellikleri, dışarıdan gelen gürültüyü
        azaltarak daha huzurlu bir ortam yaratır.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Su ve Hava Sızdırmazlığı
      </h2>
      <p>
        Cam balkon sistemlerinin doğru montajı ve yalıtım malzemeleri, yağmur ve
        rüzgar gibi dış etkenlerin içeri girmesini engeller. Bu sayede
        balkonlarınız her mevsimde kullanılabilir.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Enerji Tasarrufu Sağlama
      </h2>
      <p>
        Doğru yalıtım, enerji maliyetlerini düşürür. Isı kaybının önlenmesi, hem
        çevre dostu bir yaklaşım hem de bütçe açısından faydalıdır.
      </p>

      <p className="mt-6">
        Cam balkon sistemlerinde yalıtım, uzun ömürlü kullanım ve maksimum
        konfor için kritik bir öneme sahiptir. Kayaşehir Cam Balkon olarak,
        yüksek kaliteli yalıtım çözümleri sunarak yaşam alanlarınızı daha
        kullanışlı hale getiriyoruz. Ücretsiz keşif için bizimle iletişime
        geçebilirsiniz!
      </p>
    </div>
  );
};

export default Blog3;
