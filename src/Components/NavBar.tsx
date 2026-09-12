import { Link } from "react-router-dom";

export default function NavBar() {
 const links = [
    { name: "Home", path: "/" },
    { name: "Discover", path: "/OpportunityList" },
    { name: "How it works", path: "/how-it-works" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="sticky top-0 z-50 border-b border-[#E7E5DF] bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="/" className="text-2xl font-extrabold tracking-tight text-[#10131A]">
          Opportune<span className="text-[#F2A93C]">.</span>
        </a>

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

        <div className="flex items-center gap-3">
          <button className="hidden text-sm font-medium text-[#10131A] transition-colors hover:text-[#4B5157] sm:block">
            Sign in
          </button>
          <button className="rounded-full bg-[#10131A] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2A2E38]">
            Get started
          </button>
        </div>
      </nav>
    </div>
  );
}