import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import { categories, posts } from "@/utils/data";
import MiniPostList from "@/components/Blog/MiniPostList";
import Categories from "@/components/Blog/Categories";

export default async function Blog({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const post = posts.find((post) => post.slug === slug);
  const breadcrumbs = [
    { label: "Anasayfa", href: "/" },
    { label: post?.category.title, href: `/kategori/${post?.category.slug}` },
    { label: post?.title, href: `/kategori/${post?.slug}` },
  ];

  const recentPosts = posts.slice(0, 5);
  return (
    <main>
      <Breadcrumb
        breadcrumbs={breadcrumbs}
        title={post?.title}
        image={{
          url: "/images/referanslar/banner.webp",
        }}
      />
      <Container className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="prose max-w-none">{children}</div>
            </div>
          </div>
          <aside className="lg:col-span-1">
            <MiniPostList
              title="Son Gönderiler"
              posts={recentPosts.map((post) => ({
                slug: post?.slug,
                title: post?.title,
                publishedAt: post?.publishedAt,
              }))}
            />
            <Categories categories={categories} />
          </aside>
        </div>
      </Container>
    </main>
  );
}
