import { ImageProps, Post } from "./types";

export const links = [
  { id: 1, label: "Anasayfa", href: "/", dropdown: [] },
  { id: 2, label: "Hakkımızda", href: "/hakkimizda", dropdown: [] },
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
  {
    id: 4,
    label: "Referanslar",
    href: "/cam-balkon-referanslar",
    dropdown: [],
  },
  { id: 5, label: "İletişim", href: "/iletisim", dropdown: [] },
] as const;

export const images = [
  {
    id: 0,
    height: "1280",
    width: "1920",
    public_id: "0",
    format: "webp",
  },
  {
    id: 1,
    height: "1280",
    width: "1920",
    public_id: "1",
    format: "webp",
  },
  {
    id: 2,
    height: "1280",
    width: "1920",
    public_id: "2",
    format: "webp",
  },
  {
    id: 3,
    height: "1280",
    width: "1920",
    public_id: "3",
    format: "webp",
  },
  {
    id: 4,
    height: "1280",
    width: "1920",
    public_id: "4",
    format: "webp",
  },
  {
    id: 5,
    height: "1280",
    width: "1920",
    public_id: "5",
    format: "webp",
  },
  {
    id: 6,
    height: "1280",
    width: "1920",
    public_id: "6",
    format: "webp",
  },
  {
    id: 7,
    height: "1280",
    width: "1920",
    public_id: "7",
    format: "webp",
  },
  {
    id: 8,
    height: "1280",
    width: "1920",
    public_id: "8",
    format: "webp",
  },
  {
    id: 9,
    height: "1280",
    width: "1920",
    public_id: "9",
    format: "webp",
  },
  {
    id: 10,
    height: "1280",
    width: "1920",
    public_id: "10",
    format: "webp",
  },
  {
    id: 11,
    height: "1280",
    width: "1920",
    public_id: "11",
    format: "webp",
  },
] as ImageProps[];

export const categories = [
  {
    title: "Cam Balkon Servisi",
    slug: "cam-balkon-servisi",
  },
  {
    title: "Kategori 2",
    slug: "kategori-2",
  },
];

export const posts: Post[] = [
  {
    title: "9 Farklı Balkon Kapatma Modeli",
    slug: "balkon-kapatma",
    //  excerpt: "Bu bir örnek açıklamadır.",
    category: categories[0],
    image: {
      src: "https://via.placeholder.com/600x400",
      blurDataURL: "data:image/jpeg;base64,...", // Blur verisi (isteğe bağlı)
      alt: "Ana Resim Alt Metni",
    },
    publishedAt: new Date().toISOString(),
  },
  {
    title: "9 Farklı Balkon Kapatma Modeli",
    slug: "balkon-kapatma2",
    //  excerpt: "Bu bir örnek açıklamadır.",
    category: categories[0],
    image: {
      src: "https://via.placeholder.com/600x400",
      blurDataURL: "data:image/jpeg;base64,...", // Blur verisi (isteğe bağlı)
      alt: "Ana Resim Alt Metni",
    },
    publishedAt: new Date().toISOString(),
  },
];
