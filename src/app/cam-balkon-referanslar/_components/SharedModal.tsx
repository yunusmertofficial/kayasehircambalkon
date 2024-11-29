import { RiArrowRightUpLine } from "react-icons/ri";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { range } from "@/utils/range";
import { ImageProps } from "@/utils/types";

interface ModalProps {
  index: number;
  images: ImageProps[];
  changePhotoId: (index: number) => void;
  closeModal: () => void;
  direction: number;
}

export default function SharedModal({
  index,
  images,
  changePhotoId,
  closeModal,
  direction,
}: ModalProps) {
  const [loaded, setLoaded] = useState(false);

  const filteredImages = images?.filter((img: ImageProps) =>
    range(index - 15, index + 15).includes(img.id)
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index < images?.length - 1) {
        changePhotoId(index + 1);
      }
    },
    onSwipedRight: () => {
      if (index > 0) {
        changePhotoId(index - 1);
      }
    },
    trackMouse: true,
  });

  const currentImage = images[index];

  return (
    <div
      className="relative z-50 flex aspect-[3/2] w-full max-w-7xl items-center wide:h-full xl:taller-than-854:h-auto"
      {...handlers}
    >
      <div className="w-full overflow-hidden">
        <div className="relative flex aspect-[3/2] items-center justify-center">
          <div
            className={`absolute transition-all duration-300 ease-in-out ${
              direction > 0
                ? "translate-x-full opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            <Image
              src={`/images/referanslar/${currentImage.public_id}.${currentImage.format}`}
              width={1280}
              height={853}
              priority
              alt="Next.js Conf image"
              onLoad={() => setLoaded(true)}
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 mx-auto flex max-w-7xl items-center justify-center">
        {loaded && (
          <div className="relative aspect-[3/2] max-h-full w-full">
            {index > 0 && (
              <button
                className="absolute left-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                style={{ transform: "translate3d(0, 0, 0)" }}
                onClick={() => changePhotoId(index - 1)}
              >
                <FaChevronLeft className="h-6 w-6" />
              </button>
            )}
            {index + 1 < images.length && (
              <button
                className="absolute right-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                style={{ transform: "translate3d(0, 0, 0)" }}
                onClick={() => changePhotoId(index + 1)}
              >
                <FaChevronRight className="h-6 w-6" />
              </button>
            )}
            <div className="absolute right-0 top-0 flex items-center gap-2 p-3 text-white">
              <a
                href={`/${currentImage.public_id}.${currentImage.format}`}
                className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                target="_blank"
                title="Open fullsize version"
                rel="noreferrer"
              >
                <RiArrowRightUpLine className="h-5 w-5" />
              </a>
            </div>
            <div className="absolute left-0 top-0 flex items-center gap-2 p-3 text-white">
              <button
                onClick={() => closeModal()}
                className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
              >
                <AiOutlineClose className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
        {/* Bottom Nav bar */}
        <div className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60">
          <div className="mx-auto mb-6 mt-6 flex aspect-[3/2] h-14">
            <div className="flex gap-2">
              {filteredImages.map(({ public_id, format, id }) => (
                <button
                  key={id}
                  onClick={() => changePhotoId(id)}
                  className={`relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none transition-all duration-300 ease-in-out ${
                    id === index
                      ? "z-20 rounded-md shadow shadow-black/50 scale-105"
                      : "z-10 scale-100"
                  } ${id === 0 ? "rounded-l-md" : ""} ${
                    id === images.length - 1 ? "rounded-r-md" : ""
                  }`}
                >
                  <Image
                    alt="small photos on the bottom"
                    width={180}
                    height={120}
                    className={`${
                      id === index
                        ? "brightness-110 hover:brightness-110"
                        : "brightness-50 contrast-125 hover:brightness-75"
                    } h-full transform object-cover transition`}
                    src={`/images/referanslar/${public_id}.${format}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
