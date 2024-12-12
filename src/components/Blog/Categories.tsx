import Link from "next/link";

type CategoriesProps = {
  categories: { slug: string; title: string }[];
};

const Categories = ({ categories }: CategoriesProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-xl font-bold mb-4">Tüm Kategoriler</h2>
      <ul className="list-disc px-2">
        {categories.map((category) => (
          <li key={category.slug}>
            <div className="group cursor-pointer pb-2">
              <div className="flex flex-col gap-4">
                <h3 className="text-md font-semibold text-primary dark:text-white">
                  <Link
                    href={`/kategori/${category.slug}`}
                    className="hover:text-black transition-colors"
                    aria-label={category.title}
                  >
                    <span
                      className="bg-gradient-to-r from-blue-200 to-blue-100 bg-[length:0px_10px] bg-left-bottom
                        bg-no-repeat
                        transition-[background-size]
                        duration-500
                        hover:bg-[length:100%_3px]
                        group-hover:bg-[length:100%_10px]
                        dark:from-purple-800 dark:to-purple-900"
                    >
                      {category.title}
                    </span>
                  </Link>
                </h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
