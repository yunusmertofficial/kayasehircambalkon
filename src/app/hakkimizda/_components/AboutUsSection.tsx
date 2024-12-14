import AnimatedSection from "@/components/AnimatedSection";
import React from "react";
import Image from "next/image";
import Container from "@/components/Container";

export default function AboutUsSection() {
  return (
    <AnimatedSection>
      <Container>
        <section className="grid gap-8 md:grid-cols-2 items-start py-16">
          <header>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Kayaşehir Cam Balkon:{" "}
              <span className="text-blue-600">15 Yıllık Tecrübe ve Kalite</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Kayaşehir Cam Balkon</strong> olarak, 15 yılı aşkın
              süredir cam balkon sektöründe faaliyet göstermekteyiz. Yenilikçi
              üretim teknolojilerimiz, uzman ekibimiz ve müşteri odaklı
              yaklaşımımız sayesinde İstanbul genelinde binlerce projeyi
              başarıyla tamamladık. Misyonumuz, estetik ve fonksiyonelliği
              buluşturan uzun ömürlü cam balkon çözümleri sunmaktır.
            </p>
          </header>
          <div className="flex justify-center items-center">
            <div className="relative w-full h-64 sm:h-80 ">
              <Image
                src="/images/hakkimizda/hakkimizda.webp"
                alt="Kayaşehir Cam Balkon Gösterim Alanı"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg shadow-md"
                priority
              />
            </div>
          </div>
        </section>
      </Container>
    </AnimatedSection>
  );
}
