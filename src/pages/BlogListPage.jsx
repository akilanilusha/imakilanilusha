import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import BlogHeader from "../components/blog/BlogHeader";
import BlogSidebar from "../components/blog/BlogSidebar";
import Footer from "../components/Footer";
import heroImage from "../assets/images/blog/hero_image.png";
import heroBg from "../assets/images/blog/hero.png";
import blogs from "../data/blogs.json";
import { sortByDateDesc, formatDate, getReadTime } from "../utils/blogHelpers";

function BlogListPage() {
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category");

  useEffect(() => {
    document.title = "Blog | Akila Nilusha";
  }, []);

  const allPosts = sortByDateDesc(blogs);
  const posts = activeCategory
    ? allPosts.filter((post) => post.tags?.includes(activeCategory))
    : allPosts;

  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen flex flex-col">
      <BlogHeader />

      {/* Hero banner */}
      <section
        className="relative border-b border-gray-200 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 " />
        <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-orange-500 font-medium mb-2">Thoughts & writing.</p>
            <div className="h-px w-24 bg-orange-300 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Blog</h1>
            <p className="mt-4 text-gray-600 max-w-md">
              I write about software development, design, productivity and
              everything in between.
            </p>
          </div>
          {/* <div className="hidden md:block rounded-3xl overflow-hidden shadow-xl">
            <img
              src={heroImage}
              alt="Blog"
              className="w-full h-auto object-cover"
            />
          </div> */}
        </div>
      </section>

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
          {/* Main column */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">
                {activeCategory ? activeCategory : "Latest Posts"}
              </h2>
              {activeCategory && (
                <Link
                  to="/blog"
                  className="text-sm font-medium text-orange-500 hover:underline"
                >
                  Clear filter
                </Link>
              )}
            </div>

            {posts.length === 0 ? (
              <p className="text-gray-500">No posts in this category yet.</p>
            ) : (
              <div className="flex flex-col md:flex-row gap-8">
                {/* Featured post */}
                {featured && (
                  <Link
                    to={`/blog/${featured.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:w-[45%] shrink-0 bg-white rounded-3xl shadow-xl overflow-hidden
                               flex flex-col transition-transform hover:-translate-y-1"
                  >
                    {featured.coverImage && (
                      <img
                        src={featured.coverImage}
                        alt={featured.title}
                        className="w-full h-56 object-cover"
                      />
                    )}
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="inline-block w-fit px-3 py-1 text-xs rounded-full bg-orange-500 text-white font-medium">
                        Featured
                      </span>
                      <p className="mt-4 text-xs text-gray-400">{formatDate(featured.date)}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-gray-800">
                        {featured.title}
                      </h3>
                      <p className="mt-3 text-sm text-gray-600 flex-1">{featured.excerpt}</p>
                      {featured.tags?.length > 0 && (
                        <span className="inline-block w-fit mt-4 px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-600 font-medium">
                          {featured.tags[0]}
                        </span>
                      )}
                      <div className="flex items-center justify-between mt-6">
                        <span className="text-sm font-medium text-orange-500">Read more →</span>
                        <span className="text-xs text-gray-400">{getReadTime(featured)} min read</span>
                      </div>
                    </div>
                  </Link>
                )}

                {/* Rest of posts, compact rows */}
                <div className="flex-1 min-w-0 flex flex-col gap-6">
                  {rest.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white rounded-2xl shadow-md overflow-hidden flex
                                 transition-transform hover:-translate-y-1"
                    >
                      {post.coverImage && (
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-28 h-full object-cover shrink-0"
                        />
                      )}
                      <div className="p-4 flex-1 min-w-0">
                        <p className="text-xs text-gray-400">{formatDate(post.date)}</p>
                        <h3 className="mt-1 font-semibold text-gray-800 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center gap-3 mt-3">
                          {post.tags?.[0] && (
                            <span className="px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-600 font-medium">
                              {post.tags[0]}
                            </span>
                          )}
                          <span className="text-xs text-gray-400">{getReadTime(post)} min read</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Quote block */}
            <blockquote className="mt-10 bg-white rounded-2xl shadow-md p-8 border-l-4 border-orange-500">
              <p className="text-lg text-gray-700 italic">
                "The best way to learn is to build, fail, learn, and repeat."
              </p>
              <footer className="mt-3 text-sm font-medium text-orange-500">
                — Akila Nilusha
              </footer>
            </blockquote>
          </div>

          {/* Sidebar */}
          <aside>
            <BlogSidebar posts={blogs} activeCategory={activeCategory} />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default BlogListPage;
