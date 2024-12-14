"use client";
import React from "react";
import Image from "next/image";
import {
  MdDesignServices,
  MdBuild,
  MdHomeRepairService,
  MdOutlineSettingsSuggest,
} from "react-icons/md";
import Container from "@/components/Container";
import AnimatedSection from "@/components/AnimatedSection";
import ButtonLink from "@/components/ButtonLink";

const KayaSehirCamBalkon = () => {
  const solutions = [
    {
      title: "Cam Balkon Tasarımı",
      description:
        "Kayaşehir'deki ev ve iş yerleri için modern, estetik ve fonksiyonel cam balkon tasarımları sunuyoruz.",
      icon: <MdDesignServices />,
    },
    {
      title: "Cam Balkon İmalatı",
      description:
        "Dayanıklı, uzun ömürlü ve yüksek kaliteli malzemelerle cam balkon üretimi gerçekleştiriyoruz.",
      icon: <MdBuild />,
    },
    {
      title: "Cam Balkon Montajı",
      description:
        "Profesyonel ekibimizle cam balkonlarınızı titizlikle ve kusursuz bir şekilde monte ediyoruz.",
      icon: <MdHomeRepairService />,
    },
    {
      title: "Cam Balkon Bakımı ve Onarımı",
      description:
        "Cam balkonlarınızın performansını artırmak ve ilk günkü görünümünü korumak için bakım ve onarım hizmetleri sunuyoruz.",
      icon: <MdOutlineSettingsSuggest />,
    },
  ];

  return (
    <AnimatedSection>
      <section
        className="py-16 animate-fadeIn bg-light"
        aria-labelledby="kayasehir-title"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
            {/* Left Section */}
            <div>
              <h2
                id="kayasehir-title"
                className="text-4xl font-bold text-foreground"
              >
                Kayaşehir Cam Balkon{" "}
                <span className="text-primary">Çözümleri</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                {`Kayaşehir'de müşterilerimize özel cam balkon çözümleri
                sunuyoruz. Tasarımdan montaja kadar tüm süreçlerde yüksek kalite
                ve müşteri memnuniyeti sağlıyoruz.`}
              </p>

              {/* Solutions Section */}
              <div className="mt-8 space-y-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-primary text-5xl mr-4">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <ButtonLink
                href="/iletisim"
                text="Hemen Teklif Alın"
                additionalClass="mt-8 text-lef"
              />
            </div>

            {/* Right Section with Positioned Images */}
            <div className="relative w-full h-[400px]">
              {/* Bottom-left Image */}
              <div className="absolute bottom-0 left-0 w-[60%] h-[70%]">
                <Image
                  src="/images/cam-balkon3.webp"
                  alt="Cam Balkon Tasarımı"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-md"
                />
              </div>
              {/* Top-right Image */}
              <div className="absolute top-0 right-0 w-[60%] h-[70%]">
                <Image
                  src="/images/cam-balkon4.webp"
                  alt="Cam Balkon Montaj Hizmeti"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </AnimatedSection>
  );
};

export default KayaSehirCamBalkon;
