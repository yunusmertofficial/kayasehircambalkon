"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Next.js yönlendirme için
import { ImageProps } from "@/utils/types";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

interface SharedModalProps {
  currentPhoto: ImageProps;
}

export default function SharedModal({ currentPhoto }: SharedModalProps) {
  const router = useRouter();

  // Modal kapatma ve yönlendirme fonksiyonu
  const handleClose = () => {
    router.push("/cam-balkon-referanslar");
  };

  useEffect(() => {
    // Body'ye overflow-hidden ekle
    document.body.style.overflow = "hidden";

    // Modal kapandığında overflow özelliğini geri al
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background Blur (Tıklanabilir Alan) */}
      <div
        className="absolute inset-0 z-30 bg-black/75 backdrop-blur-lg"
        onClick={handleClose}
      ></div>

      {/* Main image container */}
      <div className="relative z-50 flex aspect-[3/2] w-full max-w-7xl items-center justify-center">
        <div className="relative flex aspect-[3/2] items-center justify-center overflow-hidden">
          {/* Geri Dön Butonu (Resim Sol Üst Köşesi) */}
          <button
            onClick={handleClose}
            className="absolute top-2 left-2 z-50 flex items-center justify-center w-8 h-8 rounded-full bg-black/50 text-white hover:bg-black/70"
          >
            <FaArrowLeft className="text-sm" />
          </button>

          {/* Resim */}
          <Image
            src={`/images/referanslar/${currentPhoto.public_id}.${currentPhoto.format}`}
            width={1920}
            height={1280}
            priority
            alt="Selected image"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
