import Link from "next/link";
import { Inter } from "next/font/google";

// Font optimizasyonu
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // Sadece gerekli ağırlıkları yükleyin
  display: "swap", // İlk yükleme süresini hızlandırır
});

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
    <div className={`relative text-center ${inter.className}`}>
      {/* Arka Plan */}
      <div className="absolute inset-0 -z-10 bg-black bg-opacity-40"></div>

      {/* İçerik */}
      <div className="relative z-10 py-16 px-4">
        {/* Başlık */}
        <h1
          className="text-5xl font-extrabold text-white tracking-tight"
          style={{
            fontFamily: "Inter, sans-serif", // Fallback font ekleyin
          }}
        >
          {title}
        </h1>

        {/* Açıklama (Opsiyonel) */}
        {description && (
          <p className="text-lg mt-4 text-gray-300">{description}</p>
        )}

        {/* Breadcrumb Navigasyonu */}
        <nav className="flex justify-center mt-6" aria-label="Breadcrumb">
          <ol className="flex space-x-2 text-sm">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="flex items-center">
                {index !== breadcrumbs.length - 1 ? (
                  <Link
                    href={breadcrumb.href}
                    className="text-blue-400 font-medium hover:text-gray-200 hover:underline transition-all duration-300"
                  >
                    {breadcrumb.label}
                  </Link>
                ) : (
                  <span className="text-gray-300 font-medium opacity-80">
                    {breadcrumb.label}
                  </span>
                )}
                {index !== breadcrumbs.length - 1 && (
                  <span className="mx-2 text-gray-400">/</span>
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
