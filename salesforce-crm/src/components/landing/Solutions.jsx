import { FaShoppingCart, FaBriefcase, FaTools } from "react-icons/fa";

const solutions = [
  {
    icon: FaShoppingCart,
    title: "Retail / Distribusi",
    description: "Kelola stok, kunjungan sales, dan distribusi barang lebih efisien.",
    color: "bg-emerald-50",
    visual: "from-emerald-200 via-blue-100 to-orange-100",
  },
  {
    icon: FaBriefcase,
    title: "Jasa",
    description: "Optimalkan layanan, penawaran, kontrak dan kepuasan pelanggan.",
    color: "bg-slate-50",
    visual: "from-slate-200 via-blue-100 to-slate-300",
  },
  {
    icon: FaTools,
    title: "Reparasi / Service",
    description: "Kelola order service, teknisi, suku cadang dan laporan pekerjaan.",
    color: "bg-blue-50",
    visual: "from-blue-200 via-slate-100 to-cyan-200",
  },
];

export default function Solutions() {
  return (
    <section id="solusi" className="bg-white py-12">
      <div style={{ width: "min(calc(100% - 40px), 1216px)", marginInline: "auto" }}>
        <h2 className="mb-8 text-center text-2xl font-black text-slate-950 sm:text-3xl">
          Solusi untuk Berbagai Kategori Usaha
        </h2>

        <div className="grid gap-5 lg:grid-cols-3">
          {solutions.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`grid min-h-48 grid-cols-[0.95fr_1.05fr] overflow-hidden rounded-lg border border-slate-200 ${item.color} p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="flex flex-col">
                  <div className="mb-5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm ring-1 ring-slate-200">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-black text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
                    {item.description}
                  </p>
                  <div className="mt-auto pt-5 text-sm font-black text-blue-700">
                    Pelajari lebih lanjut →
                  </div>
                </div>

                <div className={`self-end rounded-xl bg-gradient-to-br ${item.visual} p-3 shadow-inner ring-1 ring-white/70`}>
                  <div className="grid h-28 grid-cols-3 gap-2">
                    <span className="rounded-lg bg-white/70" />
                    <span className="rounded-lg bg-white/50" />
                    <span className="rounded-lg bg-white/70" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
