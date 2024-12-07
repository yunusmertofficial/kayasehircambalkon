import Link from "next/link";
import { parseISO, format } from "date-fns";

type MiniPostListProps = {
  title: string; // Başlık
  posts: { slug: string; title: string; publishedAt: string }[]; // Gönderiler
};

const MiniPostList = ({ title, posts }: MiniPostListProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="space-y-6">
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <div className="group cursor-pointer border-b py-2">
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-md font-semibold text-primary dark:text-white">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-black transition-colors"
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
                    </h3>

                    <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                      <span className="text-xs">
                        {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MiniPostList;
