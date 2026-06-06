export default function CompanyLogos() {
  const companies = [
    "Mitra Solusi",
    "TechSupply",
    "Indo Teknik",
    "PrimaService",
    "Nusantara Distri",
    "Mega Jaya Retail",
  ];

  return (
    <section id="resources" className="bg-white py-16">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Trusted by 500+ companies
          </p>
          <h3 className="mt-3 text-center text-2xl font-semibold text-slate-950 sm:text-3xl">
            Dipercaya oleh brand bisnis Indonesia
          </h3>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
            {companies.map((name) => (
              <div
                key={name}
                className="flex min-h-14 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-700"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
