import { blogPosts } from "@/api";
import PostCard from "../components/PostCard";
import FeaturedPosts from "../components/FeaturedPosts";
import Hero from "../components/Hero";

export default function Home() {
  const allPosts = blogPosts;
  const featuredPosts = [blogPosts[0], blogPosts[17], blogPosts[16]];
  const trendingPosts = [blogPosts[3], blogPosts[19], blogPosts[10]];

  return (
    <>
      <Hero />
      <div className="container">
        <section className="py-10 md:py-16">
          <h2 className="mb-6 lg:mb-10">Featured Posts</h2>
          <FeaturedPosts posts={featuredPosts} />
        </section>

        <section className="py-10 md:py-16">
          <h2 className="mb-6 lg:mb-10">Trending Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {trendingPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
        <section className="py-10 md:py-16">
          <h2 className="mb-6 lg:mb-10">All Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {allPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
