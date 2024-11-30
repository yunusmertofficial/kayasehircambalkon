"use client";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Modal açıldığında gösterme animasyonu
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Sayfa kaydırmasını engelle

    if (dialogRef.current) {
      dialogRef.current.showModal();
    }

    return () => {
      document.body.style.overflow = "auto"; // Sayfa kaydırmasını eski haline getir
    };
  }, []);

  return createPortal(
    <div
      className={`absolute inset-0  w-screen h-screen z-50 flex items-center justify-center bg-black/70 backdrop-blur-2xl transition-opacity duration-300`}
    >
      <div
        className={`absolute top-0 w-screen h-screen inset-0 transition-all duration-300`}
      >
        <dialog
          ref={dialogRef}
          className={`w-full h-full max-w-full max-h-full bg-black bg-opacity-80 p-8 rounded-2xl relative flex justify-center items-center transition-all duration-500 transform`}
          onClose={onClose} // Kullanıcı manuel olarak kapanış yapmak isterse
        >
          {children}
        </dialog>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
}
