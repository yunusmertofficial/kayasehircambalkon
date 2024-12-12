import React from "react";
import Image from "next/image";
import { images } from "@/utils/data";
import AnimatedSection from "@/components/AnimatedSection";
import Container from "@/components/Container";

function Refferences({
  handleOpen,
  lastViewedPhoto,
  lastViewedPhotoRef,
}: {
  handleOpen: (id: number) => void;
  lastViewedPhoto: number | null;
  lastViewedPhotoRef: React.RefObject<HTMLButtonElement>;
}) {
  return (
    <AnimatedSection>
      <section aria-labelledby="referanslar" className="pb-16 pt-6">
        <Container>
          <div className="mx-auto max-w-[1960px] p-4">
            <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
              {images.map(({ id, public_id, format }, index) => (
                <button
                  className="after:content group relative mb-5 h-80 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                  key={id}
                  onClick={() => handleOpen(id)}
                  ref={id === lastViewedPhoto ? lastViewedPhotoRef : null}
                >
                  <Image
                    alt="Next.js Conf photo"
                    className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 object-cover w-full h-full"
                    style={{ transform: "translate3d(0, 0, 0)" }}
                    priority={index === 0}
                    placeholder="blur"
                    blurDataURL={`/images/referanslar/blur/${public_id}.${format}`}
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
          </div>
        </Container>
      </section>
    </AnimatedSection>
  );
}

export default Refferences;
