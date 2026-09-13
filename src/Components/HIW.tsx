export default function HIW() {
  const steps = [
    {
      id: 1,
      title: "Discover Opportunities",
      description:
        "Browse opportunities from companies, organizations and communities.",
    },
    {
      id: 2,
      title: "Find your fit",
      description:
        "Use search and filters to find opportunities that match your skills and goals.",
    },
    {
      id: 3,
      title: "Apply with Confidence",
      description:
        "Open the opportunity, review the requirements and apply directly.",
    },
  ];

  return (
    <div id="how-it-works" className="bg-[#10131A]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Find. Explore. Apply.
          </h2>
          <p className="mt-2 text-[#B9BCC6]">
            Discover how Opportune connects you with the best opportunities.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-12 text-center"
            >
              <span className="text-4xl font-extrabold text-[#F2A93C]">
                0{step.id}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#B9BCC6]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}