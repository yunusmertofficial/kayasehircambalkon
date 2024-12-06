import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import { getPostContent, postContents } from "@/utils/componentData";
import { categories, posts } from "@/utils/data";
import type { Metadata } from "next";
import { parseISO, format } from "date-fns"; // Tarih formatlama
import Link from "next/link";
import { notFound } from "next/navigation";
export const dynamicParams = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).slug;
  const post = getPostContent(id);
  if (!post) notFound();
  return post.metadata;
}

export function generateStaticParams() {
  return postContents.map((post) => ({
    params: { slug: post.slug },
  }));
}

export default async function Page({ params }: Props) {
  const id = (await params).slug;
  const post = getPostContent(id);
  if (!post) notFound();
  const breadcrumbs = [
    { label: "Anasayfa", href: "/" },
    { label: post.category.title, href: `/kategori/${post.category.slug}` },
    { label: post.title, href: `/kategori/${post.slug}` },
  ];

  const recentPosts = posts.slice(0, 5);
  return (
    <main>
      <Breadcrumb
        breadcrumbs={breadcrumbs}
        title={post.title}
        image={{
          url: "/images/referanslar/banner.webp",
        }}
      />
      <Container className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="prose max-w-none">{post.component}</div>
            </div>
          </div>
          <aside className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Son Yazılar</h2>
              <div className="space-y-6">
                <ul>
                  {recentPosts.map((post) => (
                    <li key={post.slug}>
                      <div className="group cursor-pointer border-b py-2">
                        <div className="flex flex-col gap-2">
                          <div>
                            <h3 className="text-md font-semibold text-primary dark:text-white">
                              <Link
                                href={`/blog/${post.slug}`}
                                className="hover:text-black transition-colors"
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
                                  {post.title}
                                </span>
                              </Link>
                            </h3>

                            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                              <span className="text-xs">
                                {format(
                                  parseISO(post.publishedAt),
                                  "MMMM dd, yyyy"
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
              <h2 className="text-xl font-bold mb-4">Tüm Kategoriler</h2>
              <ul className="list-disc  px-2">
                {categories.map((category) => (
                  <li key={category.slug}>
                    <div className="group cursor-pointer pb-2 ">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-md font-semibold text-primary dark:text-white">
                          <Link
                            href={`/kategori/${category.slug}`}
                            className="hover:text-black transition-colors"
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
          </aside>
        </div>
      </Container>
    </main>
  );
}
