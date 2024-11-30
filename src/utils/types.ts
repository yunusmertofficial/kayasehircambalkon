import { StaticImageData } from "next/image";

export interface ImageProps {
  id: number;
  height: string;
  width: string;
  public_id: string;
  format: string;
  blurDataUrl?: string;
}

export interface HeroCarouselThumbnailImageProps {
  id: number;
  href: string | StaticImageData;
  alt: string;
}
