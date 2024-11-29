import PhotoModalContent from "./_components/PhotoModalContent";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  const index = Number(photoId);

  return <PhotoModalContent index={index} />;
}
