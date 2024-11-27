import Link from "next/link";
import React from "react";

const linksData = [
  {
    title: "Hakkımızda",
    links: [
      { name: "Hakkımızda", href: "/hakkimizda" },
      { name: "Referanslar", href: "/referanslar" },
      { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    ],
  },
  {
    title: "Ürünler",
    links: [
      { name: "Cam Balkon Sistemleri", href: "/urunler/cam-balkon" },
      { name: "Katlanır Cam", href: "/urunler/katlanir-cam" },
      { name: "Sürgülü Sistemler", href: "/urunler/surgulu-sistemler" },
    ],
  },
  {
    title: "Kaynaklar",
    links: [
      { name: "Sıkça Sorulan Sorular", href: "/sss" },
      { name: "Kullanıcı Kılavuzu", href: "/kullanim-kilavuzu" },
      { name: "Blog", href: "/blog" },
    ],
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
