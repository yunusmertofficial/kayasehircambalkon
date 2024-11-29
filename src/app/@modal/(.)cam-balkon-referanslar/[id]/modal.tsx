"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Modal açıldığında gösterme animasyonu
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Sayfa kaydırmasını engelle

    if (dialogRef.current) {
      setIsVisible(true); // Modal görünür hale geliyor
      dialogRef.current.showModal();
    }

    return () => {
      document.body.style.overflow = "auto"; // Sayfa kaydırmasını eski haline getir
    };
  }, []);

  // Modal'ı kapama
  const handleClose = () => {
    setIsVisible(false); // Animasyonu kapama
    setTimeout(() => {
      router.back(); // Kapanma animasyonu bitmeden önce geri git
    }, 300); // Animasyonun bitmesi için biraz zaman ver
  };

  return createPortal(
    <div
      className={`absolute inset-0  w-screen h-screen z-50 flex items-center justify-center bg-black/70 backdrop-blur-2xl transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`absolute top-0 w-screen h-screen inset-0 transition-all duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <dialog
          ref={dialogRef}
          className={`w-full h-full max-w-full max-h-full bg-black bg-opacity-80 p-8 rounded-2xl relative flex justify-center items-center transition-all duration-500 transform ${
            isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
          onClose={handleClose} // Kullanıcı manuel olarak kapanış yapmak isterse
        >
          {children}
        </dialog>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
}

/* 
"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <dialog
        ref={dialogRef}
        className="w-4/5 max-w-[500px] max-h-[500px] bg-white p-5 rounded-2xl relative flex justify-center items-center"
        onClose={onDismiss}
      >
        {children}
        <button
          onClick={onDismiss}
          className="absolute top-2 right-2 w-12 h-12 bg-transparent border-0 rounded-full flex justify-center items-center text-xl font-semibold cursor-pointer"
        >
          &times;
        </button>
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}

*/
