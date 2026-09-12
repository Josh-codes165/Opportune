import { ArrowUpRight } from "lucide-react";

export default function Opportunity() {
  const opportunities = [
    {
      id: 1,
      type: "Internship",
      title: "Frontend Developer Intern",
      company: "Technova",
      location: "Remote",
      salary: "₦200,000 – ₦300,000/month",
      deadline: "2026-07-15",
      req: "React · TypeScript",
    },
    {
      id: 2,
      type: "Internship",
      title: "Backend Developer Intern",
      company: "Tech Corp",
      location: "Remote",
      salary: "₦250,000 – ₦350,000/month",
      deadline: "2026-07-20",
      req: "Node.js · PostgreSQL",
    },
    {
      id: 3,
      type: "Scholarship",
      title: "Google Africa Developer Scholarship",
      company: "Google",
      location: "Online",
      salary: "₦20,000 – ₦50,000/month stipend",
      deadline: "2026-10-15",
      req: "Software Development",
    },
    {
      id: 4,
      type: "Competition",
      title: "Campus Innovation Challenge",
      company: "FutureLabs",
      location: "Lagos, Nigeria",
      salary: null,
      deadline: "2026-10-05",
      req: "Innovation · Students",
    },
  ];

  const typeColors: Record<string, string> = {
    Internship: "bg-[#F2A93C]/15 text-[#8A5A12]",
    Scholarship: "bg-[#3B82F6]/10 text-[#2451A6]",
    Competition: "bg-[#FF6452]/10 text-[#B8341F]",
  };

  const formatDeadline = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" });

  return (
    <section className="bg-[#F6F4EF] ">
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-24 ">
      <div className="mb-12 max-w-xl">
        <h2 className="text-3xl font-bold tracking-tight text-[#10131A] sm:text-4xl">
          Featured opportunities
        </h2>
        <p className="mt-2 text-[#6B7280]">
          Hand-picked opportunities worth checking out
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {opportunities.map((opp) => (
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

              <h3 className="mt-4 text-lg font-semibold leading-snug text-[#10131A]">
                {opp.title}
              </h3>
              <p className="mt-1 text-sm text-[#6B7280]">
                {opp.company} · {opp.location}
              </p>

              {opp.salary && (
                <p className="mt-5 text-sm font-medium text-[#10131A]">
                  {opp.salary}
                </p>
              )}

              <p className="mt-1 text-sm text-[#9AA0AD]">{opp.req}</p>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-[#F0EEE8] pt-4">
              <span className="text-xs text-[#9AA0AD]">
                Apply by {formatDeadline(opp.deadline)}
              </span>
              <ArrowUpRight
                size={16}
                className="text-[#9AA0AD] transition-colors group-hover:text-[#10131A]"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
    </section>
  );
}