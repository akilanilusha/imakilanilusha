import { useState } from "react";
import { Link } from "react-router-dom";
import { UserRound, FolderOpen, Mail, Flame } from "lucide-react";
import { getCategoryCounts, sortByDateDesc, formatDate } from "../../utils/blogHelpers";

function BlogSidebar({ posts, currentId, activeCategory }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const categoryCounts = getCategoryCounts(posts);
  const categories = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]);

  const recentPosts = sortByDateDesc(posts)
    .filter((post) => post.id !== currentId)
    .slice(0, 3);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="flex flex-col gap-6">
      {/* About the Blog */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="flex items-center gap-2 mb-3">
          <UserRound size={20} className="text-orange-500" />
          <h3 className="font-semibold text-gray-800">About the Blog</h3>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          I write about software development, design, and the projects I'm
          building along the way.
        </p>
        <a
          href="/#about"
          className="inline-block mt-4 px-4 py-2 rounded-full bg-orange-100
                     text-orange-600 text-sm font-medium hover:bg-orange-200 transition"
        >
          Learn more about me →
        </a>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="flex items-center gap-2 mb-3">
          <FolderOpen size={20} className="text-orange-500" />
          <h3 className="font-semibold text-gray-800">Categories</h3>
        </div>
        <ul className="flex flex-col gap-1">
          <li>
            <Link
              to="/blog"
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition
                ${
                  !activeCategory
                    ? "bg-orange-50 text-orange-600 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
            >
              <span>All Posts</span>
              <span>{posts.length}</span>
            </Link>
          </li>
          {categories.map(([tag, count]) => (
            <li key={tag}>
              <Link
                to={`/blog?category=${encodeURIComponent(tag)}`}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition
                  ${
                    activeCategory === tag
                      ? "bg-orange-50 text-orange-600 font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
              >
                <span>{tag}</span>
                <span>{count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Stay Updated */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="flex items-center gap-2 mb-3">
          <Mail size={20} className="text-orange-500" />
          <h3 className="font-semibold text-gray-800">Stay Updated</h3>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Get notified when I publish new articles.
        </p>
        {subscribed ? (
          <p className="text-sm font-medium text-orange-600">
            Thanks! I'll be in touch.
          </p>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded-full border border-gray-200 text-sm
                         focus:outline-none focus:border-orange-400"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-full bg-orange-500 text-white
                         text-sm font-semibold hover:bg-orange-600 transition"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>

      {/* Recent posts */}
      {recentPosts.length > 0 && (
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-2 mb-3">
            <Flame size={20} className="text-orange-500" />
            <h3 className="font-semibold text-gray-800">Popular Posts</h3>
          </div>
          <ul className="flex flex-col gap-4">
            {recentPosts.map((post) => (
              <li key={post.id}>
                <Link to={`/blog/${post.id}`} className="flex items-center gap-3 group">
                  {post.coverImage && (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-14 h-14 rounded-lg object-cover shrink-0"
                    />
                  )}
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-800 group-hover:text-orange-500 transition line-clamp-2">
                      {post.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{formatDate(post.date)}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BlogSidebar;
