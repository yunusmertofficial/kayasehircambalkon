import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import { categories, posts } from "@/utils/data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/AnimatedSection";
import PostList from "@/components/Blog/PostList";
export const dynamicParams = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).slug;
  const category = categories.find((category) => category.slug === id);
  if (!category) notFound();
  return category.metadata;
}

export function generateStaticParams() {
  return categories.map((post) => ({
    params: { slug: post.slug },
  }));
}

export default async function Page({ params }: Props) {
  const id = (await params).slug;
  const category = categories.find((category) => category.slug === id);
  if (!category) notFound();

  const breadcrumbs = [
    { label: "Anasayfa", href: "/" },
    { label: category.title, href: `/kategori/${category.slug}` },
  ];

  const filteredPosts = posts.filter(
    (post) => post.category.slug === category.slug
  );

  return (
    <main>
      <Breadcrumb
        breadcrumbs={breadcrumbs}
        title={category.title}
        description={`${category.title} ile ilgili en güncel gönderileri buradan takip edebilirsiniz.`}
        image={{
          url: "/images/referanslar/banner.webp",
        }}
      />
      {/* İçerik alanı */}
      <AnimatedSection>
        <section aria-label="Son Gönderiler" className="py-16">
          <Container>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <PostList
                    key={post.slug}
                    post={post}
                    aspect="landscape"
                    preloadImage={false}
                  />
                ))
              ) : (
                <p className="text-center text-gray-500 col-span-full">
                  Henüz bir gönderi eklenmedi.
                </p>
              )}
            </div>
          </Container>
        </section>
      </AnimatedSection>
    </main>
  );
}
