// pages/OpportunityDetail.tsx
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Briefcase } from "lucide-react";
import { opportunities } from "../data/opportunity";

export default function OpportunityDetails() {
  const { id } = useParams();
  const opportunity = opportunities.find((opp) => opp.id === Number(id));

  const typeColors: Record<string, string> = {
    Internship: "bg-[#F2A93C]/15 text-[#8A5A12]",
    Job: "bg-[#0BA95B]/10 text-[#0BA95B]",
    Scholarship: "bg-[#3B82F6]/10 text-[#2451A6]",
    Competition: "bg-[#FF6452]/10 text-[#B8341F]",
  };

  if (!opportunity) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center">
        <p className="text-lg font-semibold text-[#10131A]">
          Opportunity not found
        </p>
        <Link to="/OpportunityList" className="mt-3 text-sm font-medium text-[#8A5A12] hover:underline">
          Back to all opportunities
        </Link>
      </div>
    );
  }

  const {
    type, title, company, location, salary,
    experience, duration, deadline, description,
    responsibilities, requirements, niceToHave, benefits,
  } = opportunity;

  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:py-20">
      <Link
        to="/OpportunityList"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#10131A]"
      >
        <ArrowLeft size={16} />
        Back to opportunities
      </Link>

      {/* Header */}
      <div className="border-b border-[#E7E5DF] pb-8">
        <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${typeColors[type]}`}>
          {type}
        </span>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#10131A] sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-base text-[#6B7280]">{company}</p>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#4B5157]">
          <span className="flex items-center gap-1.5">
            <MapPin size={15} /> {location}
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase size={15} /> {experience}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={15} /> {duration}
          </span>
        </div>

        {salary && (
          <p className="mt-4 text-lg font-semibold text-[#10131A]">{salary}</p>
        )}
      </div>

      {/* Body */}
      <div className="mt-8 flex flex-col gap-8">
        <div>
          <h2 className="text-lg font-semibold text-[#10131A]">About this opportunity</h2>
          <p className="mt-2 text-sm leading-relaxed text-[#4B5157]">{description}</p>
        </div>

        <Section title="Responsibilities" items={responsibilities} />
        <Section title="Requirements" items={requirements} />
        <Section title="Nice to have" items={niceToHave} />
        <Section title="Benefits" items={benefits} />

        <div className="rounded-2xl border border-[#E7E5DF] bg-[#F6F4EF] p-6">
          <p className="text-sm text-[#6B7280]">Application deadline</p>
          <p className="mt-1 text-base font-semibold text-[#10131A]">{deadline}</p>

          <button className="mt-5 w-full rounded-xl bg-[#10131A] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2A2E38] sm:w-auto">
            Apply now
          </button>
        </div>
      </div>
    </section>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  if (!items?.length) return null;
  return (
    <div>
      <h2 className="text-lg font-semibold text-[#10131A]">{title}</h2>
      <ul className="mt-2 flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-[#4B5157]">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#9AA0AD]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}