"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useHotkeys } from "react-hotkeys-hook";
import { range } from "@/utils/range";
import Thumbnail from "./ThumbnailComponent";
import Link from "next/link";

const HeroCarousel = () => {
  const [index, setIndex] = useState(0); // Yeni index state
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
  ];

  const nextSlide = useCallback(() => {
    const newIndex = (currentSlide + 1) % slides.length;
    setIndex(newIndex);
    setCurrentSlide(newIndex);
  }, [currentSlide, slides.length]);

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    setIndex(newIndex);
    setCurrentSlide(newIndex);
  };

  //slider 5 saniyede bir geçiş yapacak
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const filteredImages = slides?.filter((img) =>
    range(index - 15, index + 15).includes(img.id)
  );

  const changePhotoId = (id: number) => {
    setIndex(id); // Yeni resmi ayarla
    setCurrentSlide(id); // Slayt indexini güncelle
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
      prevSlide();
    },
    [currentSlide]
  );
  return (
    <div className="relative w-full h-[75vh] overflow-hidden">
      {/* Slide Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              currentSlide === slideIndex ? "opacity-100 z-2" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={`/images/carousel/${slide.public_id}.${slide.format}`}
              alt={slide.title}
              fill
              style={{ objectFit: "cover" }}
              className="brightness-75"
              priority={slideIndex === 0}
            />
            <div className="absolute top-1/2 left-[10%] transform -translate-y-1/2 text-white">
              <h2 className="text-4xl md:text-5xl font-bold">{slide.title}</h2>
              <p className="mt-4 text-lg md:text-xl">{slide.description}</p>
              <div className="mt-6 flex space-x-4">
                <Link
                  href={"/fiyat-hesapla"}
                  passHref
                  className={`px-6 py-3 text-white text-lg font-semibold rounded-lg hover:brightness-110  bg-primary hover:scale-105 transition-all duration-300`}
                  style={{ fontFamily: "var(--font-geist-sans)" }}
                >
                  Fiyat Hesapla
                </Link>
                <Link
                  href="/iletisim"
                  passHref
                  className={`px-6 py-3 text-white text-lg font-semibold rounded-lg hover:brightness-110  bg-accent-foreground hover:scale-105 transition-all duration-300`}
                  style={{ fontFamily: "var(--font-geist-sans)" }}
                >
                  İletişim
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="absolute top-1/2 left-0 z-2 hidden md:flex items-center justify-center px-4 transform -translate-y-1/2 hover:scale-110 transition-transform duration-300"
        onClick={prevSlide}
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
        index={index}
        changePhotoId={changePhotoId}
      />
    </div>
  );
};

export default HeroCarousel;
