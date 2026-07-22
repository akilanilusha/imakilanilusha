import logo from "../assets/images/logo.png";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2 hidden md:block">
      <div
        className="flex items-center gap-10 px-8 py-2 rounded-full
        bg-white/20 backdrop-blur-md border border-white/30
        shadow-xl shadow-black/10"
      >
        {/* Logo */}
        <div className="w-[160px]">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-10 text-sm font-medium text-gray-800">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="cursor-pointer transition hover:text-orange-500"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transition hover:text-orange-500"
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
