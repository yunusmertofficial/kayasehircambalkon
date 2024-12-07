"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useHotkeys } from "react-hotkeys-hook";
import { range } from "@/utils/range";
import Thumbnail from "./ThumbnailComponent";
import Link from "next/link";
import React from "react";
import Container from "@/components/Container";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      public_id: "1",
      format: "webp",
      title: "CAM BALKON SİSTEMLERİ",
      description: "Cam balkon montajı, üretimi ve satışı.",
    },
    {
      id: 1,
      public_id: "2",
      format: "webp",
      title: "KATLANIR CAM BALKON",
      description: "Farklı tasarım ve Katlanır modelleri sizlerle.",
    },
    {
      id: 2,
      public_id: "3",
      format: "webp",
      title: "SÜRGÜLÜ CAM BALKON",
      description:
        "Şık ve dayanıklı sürgülü cam balkon sistemleri ile yaşam alanlarınızı daha geniş hale getirin.",
    },
  ];

  const nextSlide = useCallback(() => {
    const newIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(newIndex);
  }, [currentSlide, slides.length]);

  const prevSlideHandler = () => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(newIndex);
  };

  // Slider 5 saniyede bir geçiş yapacak
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const filteredImages = slides?.filter((img) =>
    range(currentSlide - 15, currentSlide + 15).includes(img.id)
  );

  const changePhotoId = (id: number) => {
    setCurrentSlide(id);
  };

  useHotkeys(
    "ArrowRight",
    () => {
      nextSlide();
    },
    [currentSlide]
  );

  useHotkeys(
    "ArrowLeft",
    () => {
      prevSlideHandler();
    },
    [currentSlide]
  );
  const slide = slides[currentSlide];

  return (
    <section
      className="relative w-full h-[75vh] overflow-hidden flex items-center"
      aria-label="Cam Balkon"
    >
      <Image
        src={`/images/carousel/${slide.public_id}.${slide.format}`}
        alt={slide.title}
        key={slide.id}
        fill
        style={{ objectFit: "cover" }}
        priority
        placeholder="blur"
        blurDataURL={`/images/carousel/blur/${slide.public_id}.${slide.format}`}
        className="animate-fadeIn"
      />

      {/* Karanlıklaştırma Katmanı */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* İçerik */}
      <Container>
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-white">
          <React.Fragment key={slide.id}>
            <h2 className="text-4xl md:text-5xl font-bold pr-2 animate-slideIn">
              {slide.title}
            </h2>
            <p className="mt-4 text-lg md:text-xl pr-2 animate-slideIn">
              {slide.description}
            </p>
          </React.Fragment>
          <div className="mt-4 flex space-x-4">
            {/* Fiyat Hesapla Butonu */}
            <Link
              href="/fiyat-hesaplama"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Fiyat Hesapla
            </Link>

            {/* İletişim Butonu */}
            <Link
              href="/iletisim"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium transition duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              İletişim
            </Link>
          </div>
        </div>
      </Container>
      <button
        className="absolute top-1/2 left-0 z-2 hidden md:flex items-center justify-center px-4 transform -translate-y-1/2 hover:scale-110 transition-transform duration-300"
        onClick={prevSlideHandler}
        aria-label="Önceki Slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 rounded-full">
          <FaChevronLeft className="text-white" size={20} />
        </span>
      </button>
      <button
        className="absolute top-1/2 right-0 z-2 hidden md:flex items-center justify-center px-4 transform -translate-y-1/2 hover:scale-110 transition-transform duration-300"
        onClick={nextSlide}
        aria-label="Sonraki Slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 rounded-full">
          <FaChevronRight className="text-white" size={20} />
        </span>
      </button>

      <Thumbnail
        totalImageLength={slides.length}
        filteredImages={filteredImages.map((img) => ({
          id: img.id,
          public_id: img.public_id,
          format: img.format,
          alt: img.title,
        }))}
        index={currentSlide}
        changePhotoId={changePhotoId}
      />
    </section>
  );
};

export default HeroCarousel;
