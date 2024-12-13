import React from "react";
import { posts } from "@/utils/data"; // Post verisini çektiğiniz yer
import PostList from "@/components/Blog/PostList";
import Container from "@/components/Container";
import AnimatedSection from "@/components/AnimatedSection";
import Breadcrumb from "@/components/Breadcrumb";

export default function BlogPage() {
  const breadcrumbs = [
    { label: "Anasayfa", href: "/" },
    { label: "Bloglarım", href: "/blog" }, // "Blog" yerine "Bloglarım" şeklinde güncellendi
  ];

  return (
    <main>
      {/* Breadcrumb alanı */}
      <Breadcrumb
        breadcrumbs={breadcrumbs}
        title="Bloglarım" // "Referanslar" yerine "Bloglarım"
        description="Kayaşehir Cam Balkon ile ilgili tüm blog gönderileri, haberler ve bilgiler"
        image={{
          url: "/images/referanslar/banner.webp",
        }}
      />
      {/* İçerik alanı */}
      <AnimatedSection>
        <section aria-label="Son Gönderiler" className="py-16">
          <Container>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <PostList
                    key={post.slug}
                    post={post}
                    aspect="landscape"
                    preloadImage={true}
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
