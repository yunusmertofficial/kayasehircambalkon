import Link from "next/link";

const Breadcrumb = ({
  breadcrumbs,
  title,
  description,
}: {
  breadcrumbs: { href: string; label: string }[];
  title: string;
  description?: string;
}) => {
  return (
    <div className="relative text-center">
      {/* Sabit Arka Plan Resmi */}
      <div className="absolute inset-0 -z-10">
        {/* Karartma ve Blur Efekti */}
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md"></div>
      </div>

      {/* İçerik */}
      <div className="relative z-10 py-16 px-4">
        {/* Başlık */}
        <h1 className="text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
          {title}
        </h1>

        {/* Açıklama (Opsiyonel) */}
        {description && (
          <p className="text-lg mt-4 text-gray-300 drop-shadow-sm">
            {description}
          </p>
        )}

        <nav className="flex justify-center mt-6" aria-label="Breadcrumb">
          <ol className="flex space-x-2 text-sm">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="flex items-center">
                {index !== breadcrumbs.length - 1 ? (
                  <Link
                    href={breadcrumb.href}
                    className="text-accent font-medium hover:text-gray-200 hover:underline transition-all duration-300"
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
