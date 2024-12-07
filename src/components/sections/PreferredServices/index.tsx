"use client";
import React from "react";
import Image from "next/image"; // next/image import
import Container from "@/components/Container";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const CamBalkonSistemleri = () => {
  const categories = [
    {
      title: "Katlanır Sistemler",
      description:
        "Modern ve şık tasarımlarıyla geniş mekanlar için katlanır sistemler sunuyoruz.",
      image: "https://via.placeholder.com/400x300?text=Katlanir+Sistemler",
      products: [
        {
          title: "Isıcamlı Katlanır Sistem",
          description: "Isıcamlı ve şık tasarımlar",
          href: "/orion",
        },
        {
          title: "Katlanır Sistem",
          description: "Farklı mekanlar için ideal çözüm",
          href: "/leo",
        },
      ],
    },
    {
      title: "Sürme Sistemler",
      description:
        "Yüksek kaliteli ve güvenli sürme sistemleri ile iç mekanlarda şıklığı yakalayın.",
      image: "https://via.placeholder.com/400x300?text=Surme+Sistemler",
      products: [
        {
          title: "Eşikli Isıcamlı Sürme",
          description: "Isıcamlı ve yüksek güvenlikli sürme sistem",
          href: "/arista",
        },
        {
          title: "Eşikli Sürme",
          description: "Eşikli sürme sistemleri ile pratik kullanım",
          href: "/arista-minor",
        },
        {
          title: "Eşiksiz Isıcamlı Sürme",
          description: "Isıcamlı, eşiksiz sürme sistemleri",
          href: "/alecto",
        },
        {
          title: "Eşiksiz Sürme",
          description: "Pratik ve şık sürme sistemleri",
          href: "/alecto-minor",
        },
      ],
    },
    {
      title: "Giyotin Sistemler",
      description:
        "Eşsiz giyotin sistemleri ile mekânlarınıza modern bir dokunuş ekleyin.",
      image: "https://via.placeholder.com/400x300?text=Giyotin+Sistemler",
      products: [
        {
          title: "Silinebilir Isıcamlı Giyotin Sistem",
          description: "Silinebilir yüzeyli ısıcamlı giyotin sistem",
          href: "/vega",
        },
        {
          title: "Isıcamlı Giyotin Sistem",
          description: "Şık ve modern ısıcamlı giyotin sistem",
          href: "/virgo",
        },
      ],
    },
    {
      title: "Gölgelendirme Sistemleri",
      description: "Dış mekanlarınıza şıklık katacak gölgelendirme sistemleri.",
      image: "https://via.placeholder.com/400x300?text=Golgelendirme+Sistemler",
      products: [
        {
          title: "Rolling Roof",
          description: "Dış mekanlarda esnek gölgelendirme çözümü",
          href: "/ursa",
        },
      ],
    },
    {
      title: "Üstten Askılı Sistemler",
      description:
        "Zarif üstten askılı sistemlerle iç mekanınıza modern dokunuşlar.",
      image: "https://via.placeholder.com/400x300?text=Ustten+Askili+Sistemler",
      products: [
        {
          title: "Üstten Askılı",
          description: "Zarif tasarımlarla iç mekanlarda estetik kullanım",
          href: "/libra",
        },
      ],
    },
  ];

  return (
    <section className="py-16" aria-labelledby="cam-balkon-sistemleri-title">
      <Container>
        {/* Başlık */}
        <header className="text-center mb-16">
          <h3
            id="cam-balkon-sistemleri-title"
            className="text-4xl font-bold text-foreground"
          >
            Cam Balkon Sistemlerimiz
          </h3>
          <p className="text-muted-foreground mt-4">
            Geniş ve şık mekanlar için en uygun cam balkon çözümleri.
          </p>
        </header>

        {/* Kategori Listesi */}
        <div className="space-y-16">
          {categories.map((category, index) => (
            <AnimatedSection key={index}>
              <article
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8`}
                aria-label={category.title}
              >
                <div className="relative w-full h-80 rounded-lg shadow-md">
                  <Image
                    src={category.image}
                    alt={category.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>

                {/* Metin */}
                <div className="flex flex-col items-center text-center w-full">
                  <h4 className="text-2xl font-semibold text-foreground mb-4">
                    {category.title}
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  {category.products.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {category.products.map((product, productIndex) => (
                        <Link
                          key={productIndex}
                          href={product.href}
                          className="flex flex-col items-start text-start bg-card rounded-lg transition-all duration-300 p-6 bg-secondary text-foreground shadow-lg hover:shadow-xl hover:scale-105 transform-gpu "
                        >
                          <h5 className="text-xl">{product.title}</h5>
                          <p className="text-muted-foreground text-sm mb-4">
                            {product.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CamBalkonSistemleri;
