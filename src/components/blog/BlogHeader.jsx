import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Blog", href: "/blog", active: true },
  { name: "Contact", href: "/#contact" },
];

function BlogHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`transition hover:text-orange-500 ${
                item.active
                  ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                  : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full
                       bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-200 transition"
          >
            ← Back to home
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-gray-700 hover:text-orange-500 transition"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 flex flex-col gap-4">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium transition hover:text-orange-500 ${
                item.active ? "text-orange-500" : "text-gray-700"
              }`}
            >
              {item.name}
            </a>
          ))}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="text-sm font-medium text-gray-700 hover:text-orange-500 transition"
          >
            ← Back to home
          </Link>
        </div>
      )}
    </header>
  );
}

export default BlogHeader;
