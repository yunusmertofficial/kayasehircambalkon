import Image from "next/image";

const Blog2 = () => {
  return (
    <div>
      <Image
        src="/images/blog/blog2.webp" // Görsel URL'sini buraya ekleyin
        alt="Cam balkon alırken dikkat edilmesi gerekenler"
        width={800}
        height={450}
        className="rounded-lg mb-6"
        priority
      />

      <p>
        Cam balkon, yaşam alanlarınızı hem estetik hem de işlevsel bir şekilde
        genişletmenin en modern yöntemlerinden biridir. Ancak doğru cam balkon
        sistemini seçebilmek için aşağıdaki önemli detaylara dikkat etmeniz
        gerekir:
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Malzeme Kalitesi</h2>
      <p>
        Cam balkon sistemlerinde kullanılan malzemenin dayanıklılığı oldukça
        önemlidir. Temperli cam tercih edilmeli, alüminyum profillerin ise
        paslanmaya karşı dayanıklı olduğundan emin olunmalıdır.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. İzolasyon Performansı
      </h2>
      <p>
        Cam balkonunuzun ısı ve ses yalıtımına katkı sağlaması gereklidir.
        Sızdırmazlık için kullanılan fitillerin kalitesi ve montajın
        hassasiyetle yapılması izolasyon performansını artırır.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Garanti Süresi ve Satış Sonrası Destek
      </h2>
      <p>
        Cam balkon sisteminizin garanti süresi, ürünün uzun ömürlü olması
        açısından belirleyicidir. Ayrıca, satış sonrası hizmet sunan bir
        firmayla çalışmanız önemlidir.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Montaj Uzmanlığı</h2>
      <p>
        Montaj işlemi, cam balkonun işlevselliğini ve dayanıklılığını doğrudan
        etkiler. Alanında uzman ekiplerin gerçekleştirdiği montajlarla sorunsuz
        bir kullanım elde edersiniz.
      </p>

      <p className="mt-6">
        Cam balkon alırken bu önemli detaylara dikkat ederek, hem estetik hem de
        uzun ömürlü bir yatırım yapabilirsiniz. Kayaşehir Cam Balkon olarak, tüm
        ihtiyaçlarınıza yönelik profesyonel çözümler sunuyoruz. Hemen bizimle
        iletişime geçerek ücretsiz keşif hizmetimizden yararlanabilirsiniz.
      </p>
    </div>
  );
};

export default Blog2;
