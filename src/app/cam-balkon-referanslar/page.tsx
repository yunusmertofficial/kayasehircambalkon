import { images } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

export default function Referanslar() {
  return (
    <>
      <section className="mx-auto max-w-[1960px] p-4">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          {images.map(({ id, public_id, format, blurDataUrl }) => (
            <Link
              key={id}
              href={`/cam-balkon-referanslar/${id}`}
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt="Next.js Conf photo"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                src={`/images/referanslar/${public_id}.${format}`}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
