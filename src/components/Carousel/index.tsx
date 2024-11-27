"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import LinkButton from "@/components/LinkButton";

const Carousel = () => {
  const slides = [
    {
      src: "/images/carousel-1.webp",
      title: "CAM BALKON SİSTEMLERİ",
      description: "Cam balkon montajı, üretimi ve satışı.",
    },
    {
      src: "/images/carousel-2.webp",
      title: "KATLANIR CAM BALKON",
      description: "Farklı tasarım ve Katlanır modelleri sizlerle.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 saniye aralıklarla slayt değişimi
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[75vh] overflow-hidden">
      {/* Slide Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              style={{ objectFit: "cover" }}
              className="brightness-75"
              priority={index === 0}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight shadow-lg">
                {slide.title}
              </h2>
              <p className="mt-4 text-lg md:text-2xl shadow-md">
                {slide.description}
              </p>
              <div className="mt-6 flex space-x-4">
                <LinkButton
                  label="Fiyat Hesapla"
                  href={"/fiyat-hesapla"}
                  bgColor="bg-primary hover:scale-105 transition-all duration-300"
                />
                <LinkButton
                  label="İletişim"
                  href="/iletisim"
                  bgColor="bg-accent-foreground hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-blue-500 scale-125"
                : "bg-gray-300 scale-100"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Controls */}
      <button
        className="absolute top-1/2 left-0 z-30  hidden md:flex items-center justify-center px-4 transform -translate-y-1/2 hover:scale-110 transition-transform duration-300"
        onClick={prevSlide}
        aria-label="Önceki Slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 rounded-full">
          <FaChevronLeft className="text-white" size={20} />
        </span>
      </button>
      <button
        className="absolute top-1/2 right-0 z-30  hidden md:flex items-center justify-center px-4 transform -translate-y-1/2 hover:scale-110 transition-transform duration-300"
        onClick={nextSlide}
        aria-label="Sonraki Slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 rounded-full">
          <FaChevronRight className="text-white" size={20} />
        </span>
      </button>
    </div>
  );
};

export default Carousel;
