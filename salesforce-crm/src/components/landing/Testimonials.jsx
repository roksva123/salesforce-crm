const testimonials = [
  {
    name: "Budi Santoso",
    initials: "BS",
    position: "Sales Manager, Mitra Solusi",
    review:
      "Aplikasi ini sangat membantu tim kami dalam memantau aktivitas lapangan dan meningkatkan penjualan.",
  },
  {
    name: "Citra Dewi",
    initials: "CD",
    position: "Head of Operations, TechSupply",
    review:
      "Semua data terintegrasi dengan baik, laporan jadi lebih cepat dan akurat.",
  },
  {
    name: "Rizky Pratama",
    initials: "RP",
    position: "Direktur, Indo Teknik",
    review:
      "Fitur absensi dan tracking-nya akurat banget. Tim jadi lebih disiplin dan produktif.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-12">
      <div style={{ width: "min(calc(100% - 40px), 1216px)", marginInline: "auto" }}>
        <h2 className="mb-8 text-center text-2xl font-black text-slate-950 sm:text-3xl">
          Apa Kata Mereka?
        </h2>

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-blue-50 font-black text-blue-700 ring-1 ring-blue-100">
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-black text-slate-950">{item.name}</h4>
                  <p className="text-sm text-slate-500">{item.position}</p>
                </div>
              </div>

              <p className="mt-5 min-h-16 text-sm font-medium leading-7 text-slate-600">
                {item.review}
              </p>

              <div className="mt-5 flex items-center gap-1 text-yellow-500">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
