import heroImage from "../assets/hero1.jpg";
import { Search, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[560px] w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#F2A93C]">
          Over 12,000 remote &amp; local jobs in Nigeria
        </p>

        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
          Find what's next:
        </h1>

        <div className="mx-auto mt-10 flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:flex-row">
          <div className="flex flex-1 items-center gap-3 px-5 py-4">
            <Search size={18} className="shrink-0 text-slate-400" />
            <input
              type="text"
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
  );
}