"use client";
import { images } from "@/utils/data";
import SharedModal from "./_components/SharedModal";
import { useEffect, useRef, useState } from "react";
import Modal from "./_components/modal";
import { useHotkeys } from "react-hotkeys-hook";
import Refferences from "./_components/Refferences";

export default function Reference() {
  const [curIndex, setCurIndex] = useState<number | null>(null);
  const lastViewedPhotoRef = useRef<HTMLButtonElement>(null);
  const [lastViewedPhoto, setLastViewedPhoto] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  function handleClose() {
    setLastViewedPhoto(curIndex);
    setCurIndex(null);
    window.history.replaceState(null, "", "/cam-balkon-referanslar");
  }
  function changePhotoId(newVal: number) {
    if (newVal > Number(curIndex)) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurIndex(newVal);
    window.history.replaceState(null, "", `/cam-balkon-referanslar/${newVal}`);
  }

  function handleOpen(id: number) {
    console.log("id", id);
    setCurIndex(id);
    window.history.pushState(null, "", `/cam-balkon-referanslar/${id}`);
  }
  useEffect(() => {
    if (lastViewedPhotoRef?.current && !curIndex) {
      lastViewedPhotoRef.current.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
  }, [curIndex, lastViewedPhoto, setLastViewedPhoto]);

  useHotkeys(
    "ArrowRight",
    () => {
      if (curIndex !== null && curIndex + 1 < images.length) {
        changePhotoId(curIndex + 1);
      }
    },
    [curIndex, images.length]
  );

  useHotkeys(
    "ArrowLeft",
    () => {
      if (curIndex !== null && curIndex > 0) {
        changePhotoId(curIndex - 1);
      }
    },
    [curIndex]
  );

  useHotkeys(
    "Escape",
    () => {
      handleClose();
    },
    []
  );
  return (
    <>
      {curIndex !== null && (
        <Modal onClose={handleClose}>
          <SharedModal
            index={curIndex}
            images={images}
            changePhotoId={changePhotoId}
            closeModal={handleClose}
            direction={direction}
          />
        </Modal>
      )}
      <Refferences
        handleOpen={handleOpen}
        lastViewedPhoto={lastViewedPhoto}
        lastViewedPhotoRef={lastViewedPhotoRef}
      />
    </>
  );
}
