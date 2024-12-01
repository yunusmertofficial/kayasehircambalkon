import { ImageProps } from "./types";

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
  { id: 5, label: "İletişim", href: "/contact", dropdown: [] },
] as const;

export const images = [
  {
    id: 0,
    height: "1280",
    width: "1920",
    public_id: "59",
    format: "jpg",
  },
  {
    id: 1,
    height: "1280",
    width: "1920",
    public_id: "68",
    format: "jpg",
  },
  {
    id: 2,
    height: "1280",
    width: "1920",
    public_id: "76",
    format: "jpg",
  },
] as ImageProps[];
