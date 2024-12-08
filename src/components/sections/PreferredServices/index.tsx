import React from "react";
import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import AnimatedSection from "@/components/AnimatedSection";

const serviceCategories = [
  {
    title: "Katlanır Sistemler",
    description:
      "Isıcamlı katlanır sistemler ve şık tasarımlar sunarak mekanlarınızı modernleştiriyoruz.",
    products: ["Isıcamlı Katlanır Sistem", "Katlanır Cam Balkon"],
    image: "/images/hizmetlerimiz/katlanir-cam-balkon.webp",
  },
  {
    title: "Sürme Sistemler",
    description:
      "Eşikli ve eşiksiz sürme sistemlerimizle mekanlarınıza şıklık ve pratiklik katıyoruz.",
    products: ["Eşikli Isıcamlı Sürme", "Eşiksiz Sürme Sistemleri"],
    image: "/images/hizmetlerimiz/surme-cam-balkon.webp",
  },
  {
    title: "Giyotin Sistemler",
    description:
      "Isıcamlı giyotin sistemlerimiz ile modern ve pratik çözümler sunuyoruz.",
    products: ["Isıcamlı Giyotin Sistem", "Silinebilir Giyotin Sistem"],
    image: "/images/hizmetlerimiz/giyotin-cam-balkon.webp",
  },
  {
    title: "Gölgelendirme Sistemleri",
    description:
      "Rolling Roof gibi gölgelendirme çözümlerimizle dış mekanlarınıza estetik bir dokunuş ekliyoruz.",
    products: ["Rolling Roof"],
    image: "/images/hizmetlerimiz/golgelendirme-cam-balkon.webp",
  },
  {
    title: "Üstten Askılı Sistemler",
    description:
      "Zarif üstten askılı sistemlerimiz, mekanlarınıza modern ve işlevsel çözümler sunar.",
    products: ["Üstten Askılı Sistem"],
    image: "/images/hizmetlerimiz/ustten-askili-cam-balkon.webp",
  },
];

const CategoriesPage = () => {
  return (
    <AnimatedSection>
      <section
        aria-labelledby="cam-balkon-sistemleri-title"
        className="pb-16 pt-6"
      >
        <Container>
          {/* Başlık ve Buton */}
          <div className="flex flex-col items-center gap-4 md:flex-row justify-between">
            <h3 className="text-4xl font-bold text-center md:text-left">
              Cam Balkon Sistemlerimiz
            </h3>
            <ButtonLink
              href="/cam-balkon-sistemleri"
              text="Daha Fazla Bilgi"
              additionalClass="hidden md:flex"
            />
          </div>

          <p className="text-center pt-2 text-gray-600 mb-12 mt-4 md:text-left">
            Katlanır, sürme, giyotin ve diğer sistemlerimizle mekanlarınıza
            modern çözümler sunuyoruz. Ürünlerimizin detayları için aşağıya göz
            atabilirsiniz.
          </p>

          {/* Kategoriler */}
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="group flex flex-col bg-white border rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                {/* Resim */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                {/* İçerik */}
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">
                    {category.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {category.description} Ürünlerimiz:{" "}
                    <span className="font-semibold">
                      {category.products.join(", ")}.
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <ButtonLink
            href="/cam-balkon-sistemleri"
            text="Daha Fazla Bilgi"
            additionalClass="flex justify-center mt-8 md:hidden"
          />
        </Container>
      </section>
    </AnimatedSection>
  );
};

export default CategoriesPage;
