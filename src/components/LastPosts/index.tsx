import React from "react";
import Container from "../Container";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import PostList from "../Blog/PostList";
import { posts } from "@/utils/data";

export default function LastPost() {
  const lastPosts = posts.slice(0, 3);
  return (
    <section aria-label="Son Gönderiler" className="py-16">
      <Container>
        {/* Başlık ve Buton */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">Son Gönderiler</h2>
          <Link
            href="/blog"
            className="text-sm sm:text-base px-4 py-2 flex items-center text-primary bg-primary-foreground hover:bg-primary hover:text-primary-foreground rounded-full transition-all"
          >
            Tümünü Görüntüle
            <FiArrowRight className="ml-2" />
          </Link>
        </div>

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
      </Container>
    </section>
  );
}
