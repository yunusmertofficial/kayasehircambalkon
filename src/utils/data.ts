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
            href: "/cam-balkon-sistemleri/katlanir/isicamli-katlanir",
          },
          {
            label: "Katlanır Sistem",
            href: "/cam-balkon-sistemleri/katlanir/katlanir-sistem",
          },
        ],
      },
      {
        label: "Sürme Sistemler",
        dropdown: [
          {
            label: "Isıcamlı Eşikli Sürme",
            href: "/cam-balkon-sistemleri/surme/isicamli-esikli-surme",
          },
          {
            label: "Eşikli Sürme",
            href: "/cam-balkon-sistemleri/surme/esikli-surme",
          },
          {
            label: "Isıcamlı Eşiksiz Sürme",
            href: "/cam-balkon-sistemleri/surme/isicamli-esiksiz-surme",
          },
          {
            label: "Eşiksiz Sürme",
            href: "/cam-balkon-sistemleri/surme/esiksiz-surme",
          },
        ],
      },
      {
        label: "Giyotin Sistemler",
        dropdown: [
          {
            label: "Silinebilir Isıcamlı Giyotin",
            href: "/cam-balkon-sistemleri/giyotin/silinebilir-isicamli-giyotin",
          },
          {
            label: "Isıcamlı Giyotin Sistem",
            href: "/cam-balkon-sistemleri/giyotin/isicamli-giyotin",
          },
        ],
      },
      {
        label: "Gölgelendirme Sistemleri",
        dropdown: [
          {
            label: "Rolling Roof",
            href: "/cam-balkon-sistemleri/golgelendirme/rolling-roof",
          },
        ],
      },
      {
        label: "Üstten Askılı Sistemler",
        dropdown: [
          {
            label: "Üstten Askılı Sistem",
            href: "/cam-balkon-sistemleri/ustten-askili/ustten-askili-sistem",
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
    metadata: {
      title: "Cam Balkon Servisi - Modern ve Şık Çözümler",
      description:
        "Cam balkon servisi hakkında bilgi alın ve yaşam alanlarınızı daha kullanışlı hale getirin.",
      keywords: "Cam Balkon, Cam Balkon Servisi, Balkon Sistemleri",
    },
  },
  {
    title: "Cam Balkon Fiyatları",
    slug: "cam-balkon-fiyatlari",
    metadata: {
      title: "Cam Balkon Fiyatları - Detaylı Rehber",
      description:
        "Cam balkon fiyatları hakkında detaylı bilgi edinin. Malzeme kalitesi, ölçüler ve yalıtım gibi faktörlerin fiyatlara etkisini öğrenin.",
      keywords:
        "Cam Balkon Fiyatları, Cam Balkon Maliyeti, Kayaşehir Cam Balkon",
    },
  },
];

export const posts: Post[] = [
  {
    title: "Cam Balkonun Avantajları ve Hayatınıza Kattığı Konfor",
    slug: "cam-balkon-avantajlari",
    category: categories[0],
    image: {
      src: "/images/blog/blog1.webp", // Görsel URL'sini ekleyin
      blurDataURL: "data:image/jpeg;base64,...", // Bulanık veri
      alt: "Cam balkonun avantajları ve hayatınıza kattığı konfor",
    },
    publishedAt: new Date().toISOString(),
  },
  {
    title: "Cam Balkon Alırken Dikkat Edilmesi Gerekenler",
    slug: "cam-balkon-alirken-dikkat-edilmesi-gerekenler",
    category: categories[0],
    image: {
      src: "/images/blog/blog2.webp", // Resim URL'sini değiştirin
      blurDataURL: "data:image/jpeg;base64,...", // Blur verisi (isteğe bağlı)
      alt: "Cam balkon alırken dikkat edilmesi gerekenler",
    },
    publishedAt: new Date().toISOString(),
  },
  {
    title: "Cam Balkon Fiyatları ve Etkileyen Faktörler",
    slug: "cam-balkon-fiyatlari",
    category: categories[1], // Yeni kategoriye ekliyoruz
    image: {
      src: "/images/blog/blog3.webp", // Blog görsel URL'si
      blurDataURL: "data:image/jpeg;base64,...", // Opsiyonel bulanık veri
      alt: "Cam balkon fiyatlarını etkileyen faktörler",
    },
    publishedAt: new Date().toISOString(),
  },
  {
    title: "Cam Balkon Sistemlerinde Yalıtımın Önemi",
    slug: "cam-balkon-yalitim",
    category: categories[0],
    image: {
      src: "/images/blog/blog4.webp",
      blurDataURL: "data:image/jpeg;base64,...",
      alt: "Cam balkon sistemlerinde yalıtımın önemi",
    },
    publishedAt: new Date().toISOString(),
  },
];

export const serviceCategories = [
  {
    id: 1,
    title: "Katlanır Sistemler",
    description:
      "Isıcamlı katlanır sistemler ve şık tasarımlar sunarak mekanlarınızı modernleştiriyoruz",
    image: "/images/hizmetlerimiz/katlanir-cam-balkon.webp",
    products: [
      {
        id: 1,
        title: "Isıcamlı Katlanır Sistem",
        description: "Isıcamlı ve şık tasarımlar",
        href: "/cam-balkon-sistemleri/katlanir/isicamli-katlanir",
        pricePerSquareMeter: 0,
      },
      {
        id: 2,
        title: "Katlanır Sistem",
        description: "Farklı mekanlar için ideal çözüm",
        href: "/cam-balkon-sistemleri/katlanir/katlanir-sistem",
        pricePerSquareMeter: 0,
      },
    ],
  },
  {
    id: 2,
    title: "Sürme Sistemler",
    description:
      "Eşikli ve eşiksiz sürme sistemlerimizle mekanlarınıza şıklık ve pratiklik katıyoruz.",
    image: "/images/hizmetlerimiz/surme-cam-balkon.webp",
    products: [
      {
        id: 1,
        title: "Eşikli Isıcamlı Sürme",
        description: "Isıcamlı ve yüksek güvenlikli sürme sistem",
        href: "/cam-balkon-sistemleri/surme-sistemler/esikli-isicamli",
        pricePerSquareMeter: 0,
      },
      {
        id: 2,
        title: "Eşikli Sürme",
        description: "Eşikli sürme sistemleri ile pratik kullanım",
        href: "/cam-balkon-sistemleri/surme-sistemler/esikli",
        pricePerSquareMeter: 0,
      },
      {
        id: 3,
        title: "Eşiksiz Isıcamlı Sürme",
        description: "Isıcamlı, eşiksiz sürme sistemleri",
        href: "/cam-balkon-sistemleri/surme-sistemler/esiksiz-isicamli",
        pricePerSquareMeter: 0,
      },
      {
        id: 4,
        title: "Eşiksiz Sürme",
        description: "Pratik ve şık sürme sistemleri",
        href: "/cam-balkon-sistemleri/surme-sistemler/esiksiz",
        pricePerSquareMeter: 0,
      },
    ],
  },
  {
    id: 3,
    title: "Giyotin Sistemler",
    description:
      "Isıcamlı giyotin sistemlerimiz ile modern ve pratik çözümler sunuyoruz.",
    image: "/images/hizmetlerimiz/giyotin-cam-balkon.webp",
    products: [
      {
        id: 1,
        title: "Silinebilir Isıcamlı Giyotin Sistem",
        description: "Silinebilir yüzeyli ısıcamlı giyotin sistem",
        href: "/cam-balkon-sistemleri/giyotin/silinebilir-isicamli-giyotin",
        pricePerSquareMeter: 0,
      },
      {
        id: 2,
        title: "Isıcamlı Giyotin Sistem",
        description: "Şık ve modern ısıcamlı giyotin sistem",
        href: "/cam-balkon-sistemleri/giyotin/isicamli-giyotin",
        pricePerSquareMeter: 0,
      },
    ],
  },
  {
    id: 4,
    title: "Gölgelendirme Sistemleri",
    description:
      "Rolling Roof gibi gölgelendirme çözümlerimizle dış mekanlarınıza estetik bir dokunuş ekliyoruz. ",
    image: "/images/hizmetlerimiz/golgelendirme-cam-balkon.webp",
    products: [
      {
        id: 1,
        title: "Rolling Roof",
        description: "Dış mekanlarda esnek gölgelendirme çözümü",
        href: "/cam-balkon-sistemleri/golgelendirme/rolling-roof",
        pricePerSquareMeter: 0,
      },
    ],
  },
  {
    id: 5,
    title: "Üstten Askılı Sistemler",
    description:
      "Zarif üstten askılı sistemlerimiz, mekanlarınıza modern ve işlevsel çözümler sunar.",
    image: "/images/hizmetlerimiz/ustten-askili-cam-balkon.webp",
    products: [
      {
        id: 1,
        title: "Üstten Askılı",
        description: "Zarif tasarımlarla iç mekanlarda estetik kullanım",
        href: "/cam-balkon-sistemleri/ustten-askili/ustten-askili-sistem",
        pricePerSquareMeter: 0,
      },
    ],
  },
];
