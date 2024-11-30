"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import LinkButton from "@/components/LinkButton";
import { useSwipeable } from "react-swipeable";
import { useHotkeys } from "react-hotkeys-hook";

const HeroCarousel = () => {
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(true),
    onSwipedRight: () => prevSlide(true),
    trackMouse: true,
  });

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
  const [direction, setDirection] = useState(0); // -1: Geri, 1: İleri
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [showControls, setShowControls] = useState(false); // Kontrollerin görünürlüğü
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const nextSlide = useCallback(
    (manual = false) => {
      if (manual) {
        clearTimer();
      }
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      toggleControls(); // Kontrolleri gizle/göster
    },
    [clearTimer, slides.length]
  );

  const prevSlide = useCallback(
    (manual = false) => {
      if (manual) {
        clearTimer();
      }
      setDirection(-1);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      toggleControls(); // Kontrolleri gizle/göster
    },
    [clearTimer, slides.length]
  );

  const toggleControls = () => {
    setShowControls(false); // Kontrolleri gizle
    setTimeout(() => {
      setShowControls(true); // Bir süre sonra geri getir
    }, 1200); // Animasyon süresiyle uyumlu olacak şekilde ayarlandı
  };

  useEffect(() => {
    if (isFirstLoad) {
      const timer = setTimeout(() => setIsFirstLoad(false), 1500);
      return () => clearTimeout(timer);
    }

    toggleControls(); // Kontrolleri gizle/göster

    const interval = setInterval(() => {
      nextSlide(false);
    }, 8000);

    return () => {
      clearTimer();
      clearInterval(interval);
    };
  }, [isFirstLoad, nextSlide, clearTimer]);

  useHotkeys(
    "ArrowRight",
    () => {
      nextSlide(true);
    },
    [nextSlide]
  );

  useHotkeys(
    "ArrowLeft",
    () => {
      prevSlide(true);
    },
    [prevSlide]
  );

  return (
    <div className="relative w-full h-[75vh] overflow-hidden" {...handlers}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <AnimatePresence initial={false} custom={direction}>
          {slides.map((slide, index) =>
            currentSlide === index ? (
              <motion.div
                key={index}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction === 1 ? "100%" : "-100%",
                }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: direction === 1 ? "-100%" : "100%",
                }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0"
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
                  <motion.h2
                    initial={isFirstLoad ? { opacity: 0, y: -30 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="text-4xl md:text-6xl font-bold tracking-tight shadow-lg"
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p
                    initial={isFirstLoad ? { opacity: 0, y: 30 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-4 text-lg md:text-2xl shadow-md"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={isFirstLoad ? { opacity: 0, scale: 0.8 } : false}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="mt-6 flex space-x-4"
                  >
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
                  </motion.div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </motion.div>

      {/* Kontroller */}
      {showControls && (
        <motion.button
          className="absolute top-1/2 left-4 z-30 hidden md:flex items-center justify-center px-4"
          onClick={() => prevSlide(true)}
          aria-label="Önceki Slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileTap={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center justify-center w-12 h-12 bg-white/30 rounded-full shadow-md"
          >
            <FaChevronLeft className="text-white" size={24} />
          </motion.span>
        </motion.button>
      )}
      {showControls && (
        <motion.button
          className="absolute top-1/2 right-4 z-30 hidden md:flex items-center justify-center px-4"
          onClick={() => nextSlide(true)}
          aria-label="Sonraki Slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileTap={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center justify-center w-12 h-12 bg-white/30 rounded-full shadow-md"
          >
            <FaChevronRight className="text-white" size={24} />
          </motion.span>
        </motion.button>
      )}
    </div>
  );
};

export default HeroCarousel;
