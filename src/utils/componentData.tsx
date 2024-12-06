import { posts } from "./data";
import type { Metadata } from "next";
import { Post } from "./types";

export interface PostContent extends Post {
  metadata: Metadata;
  component: JSX.Element;
}

export const postContents: PostContent[] = [
  {
    ...posts[0],
    metadata: {
      title: "Balkon Kapatma | Kayaşehir Cam Balkon",
      description:
        "Balkon kapatma hizmetimizle balkonunuzu cam balkon sistemine dönüştürüyoruz. Kayaşehir Cam Balkon olarak kaliteli ve güvenilir hizmet sunuyoruz.",
      keywords:
        "Balkon Kapatma, Cam Balkon, Kayaşehir Cam Balkon, Cam Balkon Fiyatları",
    },
    component: <p>Deneme </p>,
  },
];

export function getPostContent(slug: string): PostContent {
  return postContents.find((post) => post.slug === slug) as PostContent;
}
