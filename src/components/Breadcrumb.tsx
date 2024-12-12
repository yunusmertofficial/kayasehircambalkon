import Link from "next/link";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa"; // React Icons ok simgesi

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
    blurDataURL?: string;
  };
}) => {
  return (
    <section
      className="relative w-full h-[200px] lg:h-[250px] text-start"
      aria-label="Breadcrumb"
    >
      {/* Görselin üzerine karanlık bir katman ekleyelim */}
      {image && (
        <>
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
          <Image
            src={image.url}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            placeholder={image.blurDataURL ? "blur" : "empty"}
            blurDataURL={image.blurDataURL ? image.blurDataURL : undefined}
            quality={20}
            priority
          />
        </>
      )}

      {/* Başlık ve açıklama bölümü */}
      <div className="absolute z-20 top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-full max-w-5xl mx-auto px-4">
        {/* Başlık sol üstte dikey çizgi ile */}
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white border-l-4 pl-4 border-primary"
          style={{
            fontFamily: "Inter, sans-serif",
          }}
        >
          {title}
        </h1>

        {/* Açıklama */}
        {description && (
          <p className="text-sm sm:text-lg mt-4 text-gray-300">{description}</p>
        )}

        {/* Breadcrumb */}
        <nav
          className="flex flex-wrap items-center mt-6"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center text-sm sm:text-base">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="flex items-center">
                {/* Breadcrumb geçişlerinde ok simgesi */}
                {index !== 0 && (
                  <FaChevronRight
                    className="mx-2 text-primary-foreground"
                    size={12}
                  />
                )}
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
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumb;
