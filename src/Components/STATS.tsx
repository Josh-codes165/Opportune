export default function STATS() {
  const stats = [
    { id: 1, value: "10K+", title: "Opportunities" },
    { id: 2, value: "500+", title: "Organizations" },
    { id: 3, value: "30+", title: "Categories" },
    { id: 4, value: "15K+", title: "Applications" },
  ];

  return (
    <section id="statistics" className="bg-[#F6F4EF] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#10131A] sm:text-4xl">
            Our statistics
          </h2>
          <p className="mt-2 text-[#6B7280]">
            Opportunities for every stage of your journey
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 divide-x divide-y divide-[#E7E5DF] rounded-2xl border border-[#E7E5DF] bg-white sm:grid-cols-4 sm:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center gap-1 px-6 py-10 text-center"
            >
              <span className="text-4xl font-extrabold tracking-tight text-[#10131A] sm:text-5xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-[#6B7280]">
                {stat.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}