import { images } from "@/utils/data";
import ImageCard from "../_components/ImageCard";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return images.map((image) => {
    return { id: image.id.toString() };
  });
}

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const currentPhoto = images.find((image) => image.id === Number(id));
  if (!currentPhoto) {
    return notFound();
  }
  return (
    <div>
      <ImageCard currentPhoto={currentPhoto} />
    </div>
  );
}
