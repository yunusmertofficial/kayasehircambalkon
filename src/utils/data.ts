export const links = [
  { id: 1, label: "Anasayfa", href: "/", dropdown: [] },
  { id: 2, label: "Hakkımızda", href: "/about", dropdown: [] },
  {
    id: 3,
    label: "Hizmetlerimiz",
    href: "/services",
    dropdown: [
      { label: "Doctors", href: "/services/deneme" },
      { label: "Gallery", href: "/gallery" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  { id: 4, label: "Galeri", href: "/blog", dropdown: [] },
  { id: 5, label: "İletişim", href: "/contact", dropdown: [] },
] as const;
