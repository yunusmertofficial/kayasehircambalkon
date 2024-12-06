import Image from "next/image";
import Link from "next/link";
import { parseISO, format } from "date-fns";
import { cx } from "@/utils/cx";
import { Post } from "@/utils/types";
import Label from "../Label";

// Post tipini tanımla

interface PostListProps {
  post: Post;
  aspect: "landscape" | "square" | "custom"; // accepted aspect types
  minimal?: boolean;
  pathPrefix?: string;
  preloadImage?: boolean;
  fontSize?: "small" | "medium" | "large";
  fontWeight?: "normal" | "bold";
}

export default function PostList({
  post,
  aspect,
  minimal = false,
  pathPrefix = "",
  preloadImage = false,
  fontSize = "medium",
  fontWeight = "normal",
}: PostListProps) {
  return (
    <div
      className={cx(
        "group cursor-pointer",
        minimal && "grid gap-10 md:grid-cols-2"
      )}
    >
      <div
        className={cx(
          "overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"
        )}
      >
        <Link
          className={cx(
            "relative block",
            aspect === "landscape"
              ? "aspect-video"
              : aspect === "custom"
              ? "aspect-[5/4]"
              : "aspect-square"
          )}
          href={`/blog/${pathPrefix ? `${pathPrefix}/` : ""}${post.slug}`}
        >
          <Image
            src={post.image.src}
            {...(post.image.blurDataURL && {
              placeholder: "blur",
              blurDataURL: post.image.blurDataURL,
            })}
            alt={post.image.alt || "Thumbnail"}
            priority={preloadImage ? true : false}
            className="object-cover transition-all"
            fill
            sizes="(max-width: 768px) 30vw, 33vw"
          />
        </Link>
      </div>

      <div className={cx(minimal && "flex items-center")}>
        <div>
          <Link href={`/category/${post.category.slug}`}>
            <Label nomargin={false} color={"green"} pill>
              {post.category.title}
            </Label>
          </Link>
          <h2
            className={cx(
              fontSize === "large"
                ? "text-2xl"
                : minimal
                ? "text-3xl"
                : "text-lg",
              fontWeight === "normal"
                ? "line-clamp-2 font-medium tracking-normal text-black"
                : "font-semibold leading-snug tracking-tight",
              "mt-2 dark:text-white"
            )}
          >
            <Link
              href={`/blog/${pathPrefix ? `${pathPrefix}/` : ""}${post.slug}`}
            >
              <span
                className="bg-gradient-to-r from-blue-200 to-blue-100 bg-[length:0px_10px] bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_3px]
          group-hover:bg-[length:100%_10px]
          dark:from-purple-800 dark:to-purple-900"
              >
                {post.title}
              </span>
            </Link>
          </h2>
          {post.excerpt && (
            <div>
              <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <Link
                  href={`/blog/${pathPrefix ? `${pathPrefix}/` : ""}${
                    post.slug
                  }`}
                >
                  {post.excerpt}
                </Link>
              </p>
            </div>
          )}
          <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-3">
              <span className="truncate text-sm">Kayaşehir Cam Balkon</span>
            </div>
            <span className="text-xs text-gray-300 dark:text-gray-600">
              &bull;
            </span>
            <time className="truncate text-sm" dateTime={post.publishedAt}>
              {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}
