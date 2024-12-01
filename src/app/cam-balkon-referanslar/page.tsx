"use client";
import { images } from "@/utils/data";
import Image from "next/image";
import SharedModal from "./_components/SharedModal";
import { useEffect, useRef, useState } from "react";
import Modal from "./_components/modal";
import { useHotkeys } from "react-hotkeys-hook";

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
      <section className="mx-auto max-w-[1960px] p-4">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          {images.map(({ id, public_id, format }) => (
            <button
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
              key={id}
              onClick={() => handleOpen(id)}
              ref={id === lastViewedPhoto ? lastViewedPhotoRef : null}
            >
              <Image
                alt="Next.js Conf photo"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                placeholder="blur"
                blurDataURL={`/images/referanslar/blur/${public_id}.webp`}
                src={`/images/referanslar/${public_id}.${format}`}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
