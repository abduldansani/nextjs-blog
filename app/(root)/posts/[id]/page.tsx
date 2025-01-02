import { blogPosts } from "@/api";
import PostCard, { formatDate } from "@/app/components/PostCard";
import Image from "next/image";
import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const post = blogPosts[Number(id) - 1];
  const relatedPosts = post.related_posts.map((postId) =>
    blogPosts.find((blogPost) => blogPost.id === postId)
  );
  console.log(id);
  return (
    <div className="pt-6 md:pt-10 pb-20 space-y-4">
      <div className="container space-y-6">
        <h2 className="leading-tight">{post.title}</h2>
        <div className="flex items-center text-xs text-blue2 font-semibold">
          <div className="border-r-2 border-r-gray-700 pr-4">{post.author}</div>
          <div className="pl-4">{formatDate(post.created_at)}</div>
        </div>
        <Image
          src={post.image}
          alt={post.title}
          width={1000}
          height={10}
          className="w-full object-cover h-96"
        />
      </div>
      <div className="container !max-w-4xl">
        <article
          className="space-y-2 pt-6 md:pt-10 pb-20"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <div className="container space-y-4">
        <h4>You may also like</h4>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 pt-2 gap-8">
          {relatedPosts.map((post) => {
            if (post) return <PostCard key={post.id} post={post} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
