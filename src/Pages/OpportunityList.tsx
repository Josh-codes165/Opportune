import { useState, useMemo } from "react";
import HeroImage from "../assets/hero1.jpg";
import { Search, MapPin, ArrowUpRight } from "lucide-react";

export default function OpportunityList() {
  const filters = {
    Type: ["Internship", "Job", "Scholarship", "Competition"],
    Location: ["Remote", "Nigeria", "International"],
  };

  const opportunities = [
    { id: 1, type: "Internship", title: "Frontend Developer Intern", company: "TechNova", location: "Remote", salary: "₦200k – ₦300k/month" },
    { id: 2, type: "Job", title: "Backend Developer", company: "Tech Corp", location: "Nigeria", salary: "₦250k – ₦350k/month" },
    { id: 3, type: "Scholarship", title: "Google Africa Developer Scholarship", company: "Google", location: "International", salary: "₦20k – ₦50k/month stipend" },
    { id: 4, type: "Competition", title: "Campus Innovation Challenge", company: "FutureLabs", location: "Nigeria", salary: null },
    { id: 5, type: "Internship", title: "Product Design Intern", company: "Flutterwave", location: "Remote", salary: "₦180k – ₦240k/month" },
    { id: 6, type: "Job", title: "Data Analyst", company: "Andela", location: "Nigeria", salary: "₦320k – ₦400k/month" },
    { id: 7, type: "Scholarship", title: "MTN Foundation STEM Scholarship", company: "MTN Nigeria", location: "Nigeria", salary: "₦100k – ₦150k/term" },
    { id: 8, type: "Job", title: "DevOps Engineer", company: "Paystack", location: "Remote", salary: "₦450k – ₦600k/month" },
  ];

  const typeColors: Record<string, string> = {
    Internship: "bg-[#F2A93C]/15 text-[#8A5A12]",
    Job: "bg-[#0BA95B]/10 text-[#0BA95B]",
    Scholarship: "bg-[#3B82F6]/10 text-[#2451A6]",
    Competition: "bg-[#FF6452]/10 text-[#B8341F]",
  };

  // --- filter state ---
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const toggleFilter = (
    value: string,
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  // --- derived, filtered list ---
  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((opp) => {
      const matchesSearch = opp.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(opp.type);

      const matchesLocation =
        selectedLocations.length === 0 ||
        selectedLocations.includes(opp.location);

      return matchesSearch && matchesType && matchesLocation;
    });
  }, [searchQuery, selectedTypes, selectedLocations]);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[380px] w-full overflow-hidden">
        <img
          src={HeroImage}
          alt="Hero background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-5xl font-extrabold tracking-tight text-[#F6F4EF] sm:text-6xl">
            Discover Opportunities
          </h1>

          <div className="mx-auto mt-10 flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:flex-row">
            <div className="flex flex-1 items-center gap-3 px-5 py-4">
              <Search size={18} className="shrink-0 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Job title"
                className="w-full text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>

            <div className="hidden w-px bg-slate-200 sm:block" />

            <div className="flex flex-1 items-center gap-3 px-5 py-4">
              <MapPin size={18} className="shrink-0 text-slate-400" />
              <input
                type="text"
                placeholder="Location"
                className="w-full text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>

            <button className="m-2 rounded-xl bg-slate-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800">
              Search
            </button>
          </div>

          <p className="mt-5 text-sm text-slate-300">
            Popular: Frontend Developer, Product Design, Data Analyst, Sales
          </p>
        </div>
      </section>

      {/* Filters + Listings */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[240px_1fr]">
          {/* Sidebar filters */}
          <aside className="h-fit md:sticky md:top-24">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-[#10131A]">Filters</h2>
              {(selectedTypes.length > 0 || selectedLocations.length > 0) && (
                <button
                  onClick={() => {
                    setSelectedTypes([]);
                    setSelectedLocations([]);
                  }}
                  className="text-xs font-medium text-[#9AA0AD] hover:text-[#10131A]"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[#9AA0AD]">
                Type
              </h3>
              <div className="mt-3 flex flex-col gap-3">
                {filters.Type.map((option) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-center gap-2.5 text-sm text-[#4B5157]"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(option)}
                      onChange={() =>
                        toggleFilter(option, setSelectedTypes)
                      }
                      className="h-4 w-4 rounded border-[#D6D3CB] accent-[#F2A93C]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[#9AA0AD]">
                Location
              </h3>
              <div className="mt-3 flex flex-col gap-3">
                {filters.Location.map((option) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-center gap-2.5 text-sm text-[#4B5157]"
                  >
                    <input
                      type="checkbox"
                      checked={selectedLocations.includes(option)}
                      onChange={() =>
                        toggleFilter(option, setSelectedLocations)
                      }
                      className="h-4 w-4 rounded border-[#D6D3CB] accent-[#F2A93C]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Opportunities list */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-[#10131A]">
                Opportunities
              </h2>
              <span className="text-sm text-[#9AA0AD]">
                {filteredOpportunities.length} result
                {filteredOpportunities.length !== 1 && "s"}
              </span>
            </div>

            {filteredOpportunities.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#E7E5DF] py-20 text-center">
                <p className="text-sm font-medium text-[#10131A]">
                  No opportunities match your filters
                </p>
                <p className="mt-1 text-sm text-[#9AA0AD]">
                  Try adjusting or clearing your search
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {filteredOpportunities.map((opp) => (
                <a  
                    href="#"
                    key={opp.id}
                    className="group flex flex-col justify-between rounded-2xl border border-[#E7E5DF] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(16,19,26,0.25)]"
                  >
                    <div>
                      <span
                        className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${typeColors[opp.type]}`}
                      >
                        {opp.type}
                      </span>

                      <h3 className="mt-4 text-base font-semibold leading-snug text-[#10131A]">
                        {opp.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#6B7280]">
                        {opp.company} · {opp.location}
                      </p>

                      {opp.salary && (
                        <p className="mt-4 text-sm font-medium text-[#10131A]">
                          {opp.salary}
                        </p>
                      )}
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-[#F0EEE8] pt-4">
                      <span className="text-sm font-medium text-[#10131A] group-hover:text-[#8A5A12]">
                        View details
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-[#9AA0AD] transition-colors group-hover:text-[#10131A]"
                      />
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}