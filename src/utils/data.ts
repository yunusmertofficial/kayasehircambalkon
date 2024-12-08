import { ImageProps, NavItem, Post } from "./types";

export const links = [
  { id: 1, label: "Anasayfa", href: "/", type: "standard" },
  { id: 2, label: "Hakkımızda", href: "/hakkimizda", type: "standard" },
  {
    id: 3,
    label: "Hizmetlerimiz",
    href: "/cam-balkon-sistemleri",
    type: "mega",
    dropdown: [
      {
        label: "Katlanır Sistemler",
        dropdown: [
          {
            label: "Isıcamlı Katlanır Sistem",
            href: "/cam-balkon-sistemleri/katlanir-sistemler/isicamli",
          },
          {
            label: "Katlanır Sistem",
            href: "/cam-balkon-sistemleri/katlanir-sistemler/katlanir",
          },
        ],
      },
      {
        label: "Sürme Sistemler",
        dropdown: [
          {
            label: "Isıcamlı Eşikli Sürme",
            href: "/cam-balkon-sistemleri/surme-sistemler/esikli-isicamli",
          },
          {
            label: "Eşikli Sürme",
            href: "/cam-balkon-sistemleri/surme-sistemler/esikli",
          },
          {
            label: "Isıcamlı Eşiksiz Sürme",
            href: "/cam-balkon-sistemleri/surme-sistemler/esiksiz-isicamli",
          },
          {
            label: "Eşiksiz Sürme",
            href: "/cam-balkon-sistemleri/surme-sistemler/esiksiz",
          },
        ],
      },
      {
        label: "Giyotin Sistemler",
        dropdown: [
          {
            label: "Silinebilir Isıcamlı Giyotin",
            href: "/cam-balkon-sistemleri/giyotin-sistemler/silinebilir-isicamli",
          },
          {
            label: "Isıcamlı Giyotin Sistem",
            href: "/cam-balkon-sistemleri/giyotin-sistemler/isicamli",
          },
        ],
      },
      {
        label: "Gölgelendirme Sistemleri",
        dropdown: [
          {
            label: "Rolling Roof",
            href: "/cam-balkon-sistemleri/golelendirici-sistemler/rolling-roof",
          },
        ],
      },
      {
        label: "Üstten Askılı Sistemler",
        dropdown: [
          {
            label: "Üstten Askılı Sistem",
            href: "/cam-balkon-sistemleri/ustten-askili-sistemler/askili",
          },
        ],
      },
    ],
  },
  { id: 4, label: "Blog", href: "/blog", type: "standard" },
  {
    id: 5,
    label: "Referanslar",
    href: "/cam-balkon-referanslar",
    type: "standard",
  },
  { id: 6, label: "İletişim", href: "/iletisim", type: "standard" },
] as NavItem[];

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

export const serviceCategories = [
  {
    title: "Katlanır Sistemler",
    description:
      "Modern ve şık tasarımlarıyla geniş mekanlar için katlanır sistemler sunuyoruz.",
    image: "/images/hizmetlerimiz/katlanir-cam-balkon.webp",
    products: [
      {
        title: "Isıcamlı Katlanır Sistem",
        description: "Isıcamlı ve şık tasarımlar",
        href: "/orion",
      },
      {
        title: "Katlanır Sistem",
        description: "Farklı mekanlar için ideal çözüm",
        href: "/leo",
      },
    ],
  },
  {
    title: "Sürme Sistemler",
    description:
      "Yüksek kaliteli ve güvenli sürme sistemleri ile iç mekanlarda şıklığı yakalayın.",
    image: "/images/hizmetlerimiz/surme-cam-balkon.webp",
    products: [
      {
        title: "Eşikli Isıcamlı Sürme",
        description: "Isıcamlı ve yüksek güvenlikli sürme sistem",
        href: "/arista",
      },
      {
        title: "Eşikli Sürme",
        description: "Eşikli sürme sistemleri ile pratik kullanım",
        href: "/arista-minor",
      },
      {
        title: "Eşiksiz Isıcamlı Sürme",
        description: "Isıcamlı, eşiksiz sürme sistemleri",
        href: "/alecto",
      },
      {
        title: "Eşiksiz Sürme",
        description: "Pratik ve şık sürme sistemleri",
        href: "/alecto-minor",
      },
    ],
  },
  {
    title: "Giyotin Sistemler",
    description:
      "Eşsiz giyotin sistemleri ile mekânlarınıza modern bir dokunuş ekleyin.",
    image: "/images/hizmetlerimiz/giyotin-cam-balkon.webp",
    products: [
      {
        title: "Silinebilir Isıcamlı Giyotin Sistem",
        description: "Silinebilir yüzeyli ısıcamlı giyotin sistem",
        href: "/vega",
      },
      {
        title: "Isıcamlı Giyotin Sistem",
        description: "Şık ve modern ısıcamlı giyotin sistem",
        href: "/virgo",
      },
    ],
  },
  {
    title: "Gölgelendirme Sistemleri",
    description: "Dış mekanlarınıza şıklık katacak gölgelendirme sistemleri.",
    image: "/images/hizmetlerimiz/golgelendirme-cam-balkon.webp",
    products: [
      {
        title: "Rolling Roof",
        description: "Dış mekanlarda esnek gölgelendirme çözümü",
        href: "/ursa",
      },
    ],
  },
  {
    title: "Üstten Askılı Sistemler",
    description:
      "Zarif üstten askılı sistemlerle iç mekanınıza modern dokunuşlar.",
    image: "/images/hizmetlerimiz/ustten-askili-cam-balkon.webp",
    products: [
      {
        title: "Üstten Askılı",
        description: "Zarif tasarımlarla iç mekanlarda estetik kullanım",
        href: "/libra",
      },
    ],
  },
];
