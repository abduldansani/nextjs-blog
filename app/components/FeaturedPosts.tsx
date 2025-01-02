import Image from "next/image";
import { Post } from "./PostCard";
import { FiChevronsRight } from "react-icons/fi";
import Link from "next/link";

const FeaturedPosts = ({ posts }: { posts: Post[] }) => {
  const post1 = posts[0];
  const post2 = posts[1];
  const post3 = posts[2];
  function truncateText(text: string, maxLength: number = 40): string {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  }

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-Us", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <div className="flex flex-col gap-5 sm:flex-row xl:flex-col">
        <div className="sm:w-1/2 xl:w-full relative rounded-sm overflow-hidden">
          <Image
            src={post1.image}
            alt={post1.title}
            width={1000}
            height={10}
            className="hover:scale-105 duration-500 transition-transform w-full h-full"
          />
          <div className="absolute top-1 left-1 bg-blue2 text-white py-2 px-4 rounded-sm w-fit text-xs font-semibold">
            {post1.category}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 flex-1">
          <div className="flex items-center text-xs text-blue2 font-semibold">
            <div className="border-r-2 border-r-gray-700 pr-4">
              {post1.author}
            </div>
            <div className="pl-4">{formatDate(post1.created_at)}</div>
          </div>
          <div className="space-y-1">
            <h5 className="leading-snug">{truncateText(post1.title)}</h5>
            <p>{truncateText(post1.excerpt, 60)}</p>
          </div>
          <Link
            href={`/posts/${post1.id}`}
            className="text-white bg-blue2 hover:bg-blue1 transition-colors flex items-center py-2 px-4 gap-4 w-fit rounded-sm text-sm font-medium"
          >
            <div className="">Read more</div>
            <FiChevronsRight className="size-5" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-8 sm:flex-row xl:flex-col">
        {[post2, post3].map((post) => (
          <div key={post.id} className="flex gap-4 flex-col lg:flex-row">
            <div className="relative rounded-sm overflow-hidden lg:w-1/2 shrink-0">
              <Image
                src={post.image}
                alt={post.title}
                width={1000}
                height={10}
                className="hover:scale-105 duration-500 transition-transform w-full h-full"
              />
              <div className="absolute top-1 left-1 bg-blue2 text-white py-2 px-4 rounded-sm w-fit text-xs font-semibold">
                {post.category}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4">
              <div className="flex items-center text-xs text-blue2 font-semibold">
                <div className="border-r-2 border-r-gray-700 pr-4">
                  {post.author}
                </div>
                <div className="pl-4">{formatDate(post.created_at)}</div>
              </div>
              <div className="space-y-1">
                <h5 className="leading-snug">{truncateText(post.title)}</h5>
                <p>{truncateText(post.excerpt, 60)}</p>
              </div>
              <Link
                href={`/posts/${post.id}`}
                className="text-white bg-blue2 hover:bg-blue1 transition-colors flex items-center py-2 px-4 gap-4 w-fit rounded-sm text-sm font-medium"
              >
                <div className="">Read more</div>
                <FiChevronsRight className="size-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
