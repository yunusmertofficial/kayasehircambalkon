export interface NavItem {
  id: number;
  label: string;
  href: string;
  dropdown?: MegaMenuItem[];
  type: "standard" | "mega";
}

export interface MegaMenuItem {
  id: number;
  label: string;
  href: string;
  dropdown: NavItem[];
}

export interface ImageProps {
  id: number;
  height?: string;
  width?: string;
  public_id: string;
  format: string;
  alt?: string;
}
export interface Image {
  src: string;
  blurDataURL?: string;
  alt?: string;
}

export interface Category {
  title: string;
  slug: string;
}

export interface Post {
  title: string;
  slug: string;
  excerpt?: string;
  category: Category;
  image: Image;
  publishedAt: string;
}

export type Color = "green" | "blue" | "orange" | "purple" | "pink";
