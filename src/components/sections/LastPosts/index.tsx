import React from "react";
import { posts } from "@/utils/data";
import PostList from "@/components/Blog/PostList";
import Container from "@/components/Container";
import AnimatedSection from "@/components/AnimatedSection";
import ButtonLink from "@/components/ButtonLink";

export default function LastPost() {
  const lastPosts = posts.slice(0, 3);
  return (
    <AnimatedSection>
      <section aria-label="Son Gönderiler" className="py-16">
        <Container>
          {/* Başlık ve Buton */}
          <header className="text-center mb-16">
            <h3
              id="completed-projects-title"
              className="text-4xl font-bold text-foreground"
            >
              Son Gönderiler
            </h3>
          </header>
          {/* Blog Listesi */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {lastPosts.map((post) => (
              <PostList
                key={post.slug}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <ButtonLink
            href="/iletisim"
            text="Daha Fazla Görüntüle"
            additionalClass="mt-5"
          />
        </Container>
      </section>
    </AnimatedSection>
  );
}
