import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { Link2, Check, List as ListIcon } from "lucide-react";
import blogs from "../data/blogs.json";
import avatar from "../assets/images/man.png";
import BlogHeader from "../components/blog/BlogHeader";
import BlogSidebar from "../components/blog/BlogSidebar";
import Footer from "../components/Footer";
import {
  slugify,
  getReadTime,
  getHeadings,
  sortByDateDesc,
  formatDate,
} from "../utils/blogHelpers";

function ContentBlock({ block, index }) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          key={index}
          id={slugify(block.text)}
          className="text-2xl font-semibold text-gray-800 mt-10 mb-4 scroll-mt-24"
        >
          {block.text}
        </h2>
      );
    case "image":
      return (
        <figure key={index} className="my-8">
          <img
            src={block.src}
            alt={block.caption || ""}
            className="w-full rounded-2xl shadow-lg"
          />
          {block.caption && (
            <figcaption className="mt-3 text-sm text-gray-500 text-center">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "list":
      return (
        <ul key={index} className="mt-4 flex flex-col gap-2">
          {(block.items || []).map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700">
              <Check size={18} className="text-orange-500 mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "paragraph":
    default:
      return (
        <p key={index} className="text-gray-700 leading-relaxed mt-4">
          {block.text}
        </p>
      );
  }
}

function ShareButtons({ title }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const shareTwitter = () =>
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );

  const shareLinkedIn = () =>
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={shareTwitter}
        aria-label="Share on Twitter"
        className="w-9 h-9 rounded-full bg-gray-100 hover:bg-orange-100 text-gray-600 hover:text-orange-500 flex items-center justify-center transition"
      >
        <FaTwitter size={15} />
      </button>
      <button
        onClick={shareLinkedIn}
        aria-label="Share on LinkedIn"
        className="w-9 h-9 rounded-full bg-gray-100 hover:bg-orange-100 text-gray-600 hover:text-orange-500 flex items-center justify-center transition"
      >
        <FaLinkedinIn size={15} />
      </button>
      <button
        onClick={copyLink}
        aria-label="Copy link"
        className="w-9 h-9 rounded-full bg-gray-100 hover:bg-orange-100 text-gray-600 hover:text-orange-500 flex items-center justify-center transition relative"
      >
        <Link2 size={15} />
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded whitespace-nowrap">
            Copied!
          </span>
        )}
      </button>
    </div>
  );
}

function BlogPostPage() {
  const { id } = useParams();
  const post = blogs.find((p) => p.id === id);

  useEffect(() => {
    document.title = post ? `${post.title} | Akila Nilusha` : "Post not found";
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <BlogHeader />
        <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-20 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">Post not found</h1>
          <p className="mt-4 text-gray-500">
            This blog post doesn't exist or may have been removed.
          </p>
          <Link
            to="/blog"
            className="inline-block mt-8 text-sm font-medium text-orange-500 hover:underline"
          >
            ← Back to blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const sorted = sortByDateDesc(blogs);
  const currentIndex = sorted.findIndex((p) => p.id === post.id);
  const newerPost = sorted[currentIndex - 1];
  const olderPost = sorted[currentIndex + 1];
  const headings = getHeadings(post);

  return (
    <div className="min-h-screen flex flex-col">
      <BlogHeader />

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link to="/" className="hover:text-orange-500 transition">
            Home
          </Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-orange-500 transition">
            Blog
          </Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">{post.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
          {/* Main column */}
          <div className="min-w-0">
            {post.tags?.[0] && (
              <span className="inline-block px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-600 font-medium">
                {post.tags[0]}
              </span>
            )}

            <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-800">
              {post.title}
            </h1>
            <p className="mt-3 text-gray-600">{post.excerpt}</p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <img
                  src={avatar}
                  alt="Akila Nilusha"
                  className="w-10 h-10 rounded-full object-cover object-top"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">Akila Nilusha</p>
                  <p className="text-xs text-gray-400">
                    {formatDate(post.date)} · {getReadTime(post)} min read
                  </p>
                </div>
              </div>
              <ShareButtons title={post.title} />
            </div>

            {post.coverImage && (
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full mt-8 rounded-3xl shadow-xl object-cover"
              />
            )}

            <article className="mt-4">
              {post.content?.map((block, index) => (
                <ContentBlock key={index} block={block} index={index} />
              ))}
            </article>

            {/* Author bio */}
            <div className="mt-14 bg-white rounded-2xl shadow-md p-6 flex flex-col sm:flex-row gap-5 items-start">
              <img
                src={avatar}
                alt="Akila Nilusha"
                className="w-16 h-16 rounded-full object-cover object-top shrink-0"
              />
              <div>
                <p className="font-semibold text-gray-800">Akila Nilusha</p>
                <p className="text-sm text-orange-500 font-medium">
                  Full-Stack Developer &amp; Designer
                </p>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  I write about software development, design, and productivity.
                  Passionate about building things that make an impact.
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <a
                    href="https://github.com/akilanilusha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-orange-500 transition"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/akilanilushaofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-orange-500 transition"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                  <a
                    href="https://www.instagram.com/akila_nilusha_k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-orange-500 transition"
                  >
                    <FaInstagram size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Prev / Next */}
            {(olderPost || newerPost) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {olderPost ? (
                  <Link
                    to={`/blog/${olderPost.id}`}
                    className="bg-white rounded-2xl shadow-md p-4 hover:-translate-y-1 transition-transform"
                  >
                    <p className="text-xs text-gray-400">← Previous Post</p>
                    <p className="mt-1 font-medium text-gray-800 line-clamp-2">
                      {olderPost.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
                {newerPost ? (
                  <Link
                    to={`/blog/${newerPost.id}`}
                    className="bg-white rounded-2xl shadow-md p-4 text-right hover:-translate-y-1 transition-transform"
                  >
                    <p className="text-xs text-gray-400">Next Post →</p>
                    <p className="mt-1 font-medium text-gray-800 line-clamp-2">
                      {newerPost.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            )}

            {/* Enjoyed this post CTA */}
            <div className="mt-8 bg-orange-50 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-gray-800">Enjoyed this post?</p>
                <p className="text-sm text-gray-600">
                  Share it with your friends and help others find it too.
                </p>
              </div>
              <ShareButtons title={post.title} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6">
            {headings.length > 0 && (
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center gap-2 mb-3">
                  <ListIcon size={20} className="text-orange-500" />
                  <h3 className="font-semibold text-gray-800">Table of Contents</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className="text-sm text-gray-600 hover:text-orange-500 transition"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <BlogSidebar posts={blogs} currentId={post.id} />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default BlogPostPage;
