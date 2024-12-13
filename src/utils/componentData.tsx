import { posts } from "./data";
import type { Metadata } from "next";
import { Post } from "./types";
import Blog1 from "@/components/Blog/Blog1";
import Blog2 from "@/components/Blog/Blog2";
import Blog3 from "@/components/Blog/Blog3";

export interface PostContent extends Post {
  metadata: Metadata;
  component: JSX.Element;
}

export const postContents: PostContent[] = [
  {
    ...posts[0], // Yeni blogunuzun sırası
    metadata: {
      title:
        "Cam Balkonun Avantajları ve Hayatınıza Kattığı Konfor | Kayaşehir Cam Balkon",
      description:
        "Cam balkon sistemleri ile evinizi dönüştürün. Estetik, yalıtım ve değer artışı sağlayan çözümlerimizle yaşam kalitenizi artırıyoruz.",
      keywords:
        "Cam Balkon, Avantajları, Kayaşehir Cam Balkon, Cam Balkon Modelleri",
    },
    component: <Blog1 />,
  },
  {
    ...posts[1],
    metadata: {
      title:
        "Cam Balkon Alırken Dikkat Edilmesi Gerekenler | Kayaşehir Cam Balkon",
      description:
        "Cam balkon alırken malzeme kalitesi, izolasyon özellikleri ve montaj süreci gibi önemli detaylara dikkat etmelisiniz. Kayaşehir Cam Balkon rehberliğiyle doğru seçimi yapın.",
      keywords:
        "Cam Balkon, Cam Balkon Modelleri, Cam Balkon Alırken Dikkat Edilmesi Gerekenler, Kayaşehir Cam Balkon",
    },
    component: <Blog2 />,
  },
  {
    ...posts[2],
    metadata: {
      title: "Cam Balkon Sistemlerinde Yalıtımın Önemi | Kayaşehir Cam Balkon",
      description:
        "Yalıtımın cam balkon sistemlerinde neden bu kadar önemli olduğunu öğrenin. Kayaşehir Cam Balkon ile kaliteli yalıtım çözümleri.",
      keywords:
        "Cam Balkon Yalıtımı, Kayaşehir Cam Balkon, Enerji Tasarrufu, Ses Yalıtımı",
    },
    component: <Blog3 />,
  },
];

export function getPostContent(slug: string): PostContent {
  return postContents.find((post) => post.slug === slug) as PostContent;
}
