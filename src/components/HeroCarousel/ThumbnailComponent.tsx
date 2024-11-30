"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HeroCarouselThumbnailImageProps } from "@/utils/types";

const Thumbnail = ({
  totalImageLength,
  filteredImages,
  index,
  changePhotoId,
}: {
  filteredImages: HeroCarouselThumbnailImageProps[];
  index: number;
  totalImageLength: number;
  changePhotoId: (id: number) => void;
}) => {
  return (
    <>
      <div className="relative bottom-44 md:block hidden z-2 overflow-hidden bg-gradient-to-b ">
        <motion.div
          initial={false}
          className="mx-auto mb-6 mt-6 flex aspect-[3/2] h-10"
        >
          <AnimatePresence initial={false}>
            {filteredImages.map(({ href, alt, id }) => (
              <motion.button
                initial={{
                  width: "0%",
                  x: `${Math.max((index - 1) * -100, 15 * -100)}%`,
                }}
                animate={{
                  scale: id === index ? 1.25 : 1,
                  width: "100%",
                  x: `${Math.max(index * -100, 15 * -100)}%`,
                }}
                exit={{ width: "0%" }}
                onClick={() => changePhotoId(id)}
                key={id}
                className={`${
                  id === index
                    ? "z-10 rounded-md shadow shadow-black/50"
                    : "z-5"
                } ${id === 0 ? "rounded-l-md" : ""} ${
                  id === totalImageLength - 1 ? "rounded-r-md" : ""
                } relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`}
              >
                <Image
                  alt={alt}
                  width={180}
                  height={120}
                  className={`${
                    id === index
                      ? "brightness-110 hover:brightness-110"
                      : "brightness-50 contrast-125 hover:brightness-75"
                  } h-full transform object-cover transition`}
                  src={href}
                />
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default Thumbnail;
