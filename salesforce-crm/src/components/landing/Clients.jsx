const clients = [
  "mitra solusi",
  "TechSupply",
  "INDO TEKNIK",
  "PrimaService",
  "NUSANTARA DISTRIBUSI",
  "Mega Jaya Retail",
  "Sinar Abadi Service",
];

export default function Clients() {
  return (
    <section className="bg-white py-10">
      <div style={{ width: "min(calc(100% - 40px), 1216px)", marginInline: "auto" }}>
        <div className="mb-8 flex justify-center gap-1">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
        </div>

        <h2 className="mb-8 text-center text-2xl font-black text-slate-950 sm:text-3xl">
          Klien Kami
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-7">
          {clients.map((client) => (
            <div
              key={client}
              className="flex h-16 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 shadow-sm"
            >
              <span className="text-center text-sm font-black text-slate-500">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
