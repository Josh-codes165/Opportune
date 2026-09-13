import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Discover", path: "/OpportunityList" },
    { name: "How it works", path: "/#how-it-works" },
    { name: "Statistics", path: "/#statistics" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-[#E7E5DF] bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-[#10131A]"
        >
          Opportune<span className="text-[#F2A93C]">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="text-sm font-medium text-[#4B5157] transition-colors hover:text-[#10131A]"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="text-sm font-medium text-[#10131A] transition-colors hover:text-[#4B5157]">
            Sign in
          </button>
          <button className="rounded-full bg-[#10131A] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2A2E38]">
            Get started
          </button>
        </div>

        {/* Hamburger toggle — mobile only */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="text-[#10131A] md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-[#E7E5DF] bg-white px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-[#4B5157] transition-colors hover:text-[#10131A]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 border-t border-[#F0EEE8] pt-6">
            <button className="text-sm font-medium text-[#10131A]">
              Sign in
            </button>
            <button className="rounded-full bg-[#10131A] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2A2E38]">
              Get started
            </button>
          </div>
        </div>
      )}
    </div>
  );
}