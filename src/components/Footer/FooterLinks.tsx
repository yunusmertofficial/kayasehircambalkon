import { links, posts, serviceCategories } from "@/utils/data";
import Link from "next/link";
import React from "react";

const linksData = [
  {
    title: "Hızlı Linkler",
    links: links.map((link) => ({
      name: link.label,
      href: link.href,
    })),
  },
  {
    title: "Bazı Ürünler",
    links: serviceCategories.slice(0, 2).flatMap((category) =>
      category.products.map((product) => ({
        name: product.title,
        href: product.href,
      }))
    ),
  },
  {
    title: "Son Blog Yazıları",
    /*     links: [
      { name: "Sıkça Sorulan Sorular", href: "/sss" },
      { name: "Kullanıcı Kılavuzu", href: "/kullanim-kilavuzu" },
      { name: "Blog", href: "/blog" },
    ], */
    links: posts.slice(0, 3).map((post) => ({
      name:
        post.title.length > 30 ? post.title.slice(0, 30) + "..." : post.title,
      href: `/blog/${post.slug}`,
    })),
  },
];

export const FooterLinks = () => {
  return (
    <>
      {linksData.map((section, index) => (
        <div key={index} className="text-left">
          <div className="text-lg font-semibold text-foreground mb-2">
            {section.title}
          </div>
          <hr />
          <br />
          <ul className="text-sm space-y-6">
            {section.links.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-secondary-foreground hover:text-primary transition-all"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
