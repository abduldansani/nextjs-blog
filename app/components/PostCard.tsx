import Image from "next/image";
import Link from "next/link";
import { FiChevronsRight } from "react-icons/fi";

export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image: string;
  created_at: string;
  author: string;
  content: string;
  related_posts: number[];
}
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-Us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
const PostCard = ({ post }: { post: Post }) => {
  function truncateText(text: string, maxLength: number = 40): string {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  }

  return (
    <div className="flex flex-col sm:max-md:flex-row gap-4">
      <div className="h-52 relative rounded-sm overflow-hidden sm:max-md:w-1/2 sm:max-md:h-full">
        <Image
          src={post.image}
          alt={post.title}
          width={1000}
          height={10}
          className="hover:scale-105 duration-500 transition-transform h-full"
        />
        <div className="absolute top-1 left-1 bg-blue2 text-white py-2 px-4 rounded-sm w-fit text-xs font-semibold">
          {post.category}
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between gap-4">
        <div className="flex items-center text-xs text-blue2 font-semibold">
          <div className="border-r-2 border-r-gray-700 pr-4">{post.author}</div>
          <div className="pl-4">{formatDate(post.created_at)}</div>
        </div>
        <div className="space-y-1">
          <h5 className="leading-tight">{truncateText(post.title)}</h5>
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
  );
};

export default PostCard;
