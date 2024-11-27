"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = () => {
  const slides = [
    {
      src: "/images/carousel-1.webp",
      title: "Başlık 1",
      description: "Bu, ilk slaytın açıklamasıdır.",
    },
    {
      src: "/images/carousel-2.webp",
      title: "Başlık 2",
      description: "Bu, ikinci slaytın açıklamasıdır.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Otomatik slayt geçişi için efekt
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 saniye aralıklarla slayt değişimi
    return () => clearInterval(interval); // Cleanup
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[75vh]">
      {/* Slide Container */}
      <div className="relative w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Görüntü */}
            <Image
              src={slide.src}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              className="brightness-75"
              priority={index === 0}
            />
            {/* Metin Katmanı */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <h2
                className="text-3xl md:text-5xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-geist-sans)" }}
              >
                {slide.title}
              </h2>
              <p
                className="mt-4 text-lg md:text-2xl"
                style={{ fontFamily: "var(--font-geist-sans)" }}
              >
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators - Dikey ve Daha Aşağıda */}
      <div className="absolute z-30 flex flex-col space-y-3 top-[60%] right-5 transform -translate-y-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full ${
              currentSlide === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>

      {/* Controls */}
      <button
        className="absolute top-1/2 left-0 z-30 flex items-center justify-center px-4 transform -translate-y-1/2 pointer-events-auto"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 rounded-full">
          <FaChevronLeft className="text-white" size={20} />
        </span>
      </button>
      <button
        className="absolute top-1/2 right-0 z-30 flex items-center justify-center px-4 transform -translate-y-1/2 pointer-events-auto"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 rounded-full">
          <FaChevronRight className="text-white" size={20} />
        </span>
      </button>
    </div>
  );
};

export default Carousel;
