import { Link } from "react-router-dom";

export default function Footer() {
  const columns = [
    {
      heading: "Explore",
      links: [
        {
          id: 1,
          name: "Opportunities",
          to: "/OpportunityList",
        },
        {
          id: 2,
          name: "How it works",
          to: "/#how-it-works",
        },
        {
          id: 3,
          name: "Statistics",
          to: "/#statistics",
        },
        {
          id: 4,
          name: "Fellowships",
          to: "/",
        },
        {
          id: 5,
          name: "Competitions",
          to: "/",
        },
      ],
    },
    {
      heading: "Company",
      links: [
        {
          id: 6,
          name: "About",
          to: "/#about",
        },
        {
          id: 7,
          name: "How it works",
          to: "/#how-it-works",
        },
        {
          id: 8,
          name: "Contact",
          to: "/#contact",
        },
      ],
    },
    {
      heading: "Legal",
      links: [
        {
          id: 9,
          name: "Privacy",
          to: "/privacy",
        },
        {
          id: 10,
          name: "Terms",
          to: "/terms",
        },
      ],
    },
  ];

  return (
    <footer className="bg-[#10131A] px-6 pb-10 pt-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-2xl font-extrabold tracking-tight text-white"
            >
              Opportune<span className="text-[#F2A93C]">.</span>
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#8B8F99]">
              Discover opportunities. Build your future.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-white">
                {col.heading}
              </h3>

              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.to}
                      className="text-sm text-[#8B8F99] transition-colors hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-[#6B7280]">
            © {new Date().getFullYear()} Opportune. All rights reserved.
          </p>

          <p className="text-xs text-[#6B7280]">
            Made in Nigeria 🇳🇬
          </p>
        </div>
      </div>
    </footer>
  );
}