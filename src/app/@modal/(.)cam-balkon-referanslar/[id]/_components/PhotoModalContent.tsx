"use client";
import { images } from "@/utils/data";
import SharedModal from "@/app/cam-balkon-referanslar/_components/SharedModal";
import { useRouter } from "next/navigation"; // next/router yerine bu kullanılmalı
import { useState } from "react";
import { Modal } from "../modal";

export default function PhotoModalContent({ index }: { index: number }) {
  const [direction, setDirection] = useState(0);
  const [curIndex, setCurIndex] = useState(index);
  const router = useRouter();

  function handleClose() {
    router.back();
  }

  function changePhotoId(newVal: number) {
    if (newVal > index) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurIndex(newVal);
    router.replace(`/cam-balkon-referanslar/${newVal}`);
  }

  return (
    <Modal>
      <SharedModal
        index={curIndex}
        direction={direction}
        images={images}
        changePhotoId={changePhotoId}
        closeModal={handleClose}
      />
    </Modal>
  );
}
