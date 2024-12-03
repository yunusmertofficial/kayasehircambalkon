import Link from "next/link";
import Image from "next/image";

const Breadcrumb = ({
  breadcrumbs,
  title,
  description,
  image,
}: {
  breadcrumbs: { href: string; label: string }[];
  title: string;
  description?: string;
  image?: {
    url: string;
    blurDataURL: string;
  };
}) => {
  return (
    <div className="relative w-full h-[200px] text-center">
      {/* Görselin üzerine karanlık bir katman ekleyelim */}
      {image && (
        <>
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
          <Image
            src={image.url}
            alt={title}
            layout="fill"
            style={{ objectFit: "cover" }}
            placeholder="blur"
            blurDataURL={image.blurDataURL}
            quality={20}
            priority
          />
        </>
      )}

      <div className="absolute z-20 top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4">
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          style={{
            fontFamily: "Inter, sans-serif", // Fallback font ekleyin
          }}
        >
          {title}
        </h1>

        {description && (
          <p className="text-sm sm:text-lg mt-4 text-gray-300">{description}</p>
        )}

        <nav className="flex justify-center mt-6" aria-label="Breadcrumb">
          <ol className="flex space-x-2 text-sm sm:text-base">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="flex items-center">
                {index !== breadcrumbs.length - 1 ? (
                  <Link
                    href={breadcrumb.href}
                    className="text-primary-foreground font-medium hover:text-gray-200 hover:underline transition-all duration-300"
                  >
                    {breadcrumb.label}
                  </Link>
                ) : (
                  <span className="text-primary-foreground font-medium opacity-80">
                    {breadcrumb.label}
                  </span>
                )}
                {index !== breadcrumbs.length - 1 && (
                  <span className="mx-2 text-primary-foreground">/</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
