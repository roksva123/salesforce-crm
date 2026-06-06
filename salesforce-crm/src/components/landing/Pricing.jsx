const plans = [
  {
    name: "Alfa",
    price: "99.000",
    description: "Untuk bisnis yang baru memulai",
    features: [
      "Hingga 5 User",
      "Manajemen Customer",
      "Tugas & Visitasi",
      "Laporan Dasar",
      "Support via Email",
    ],
  },
  {
    name: "Beta",
    price: "199.000",
    popular: true,
    description: "Untuk bisnis yang sedang berkembang",
    features: [
      "Hingga 20 User",
      "Semua fitur Alfa",
      "Tracking & Geofence",
      "Input - Output Barang",
      "Laporan Lengkap & Analitik",
      "Support Prioritas",
    ],
  },
  {
    name: "Omega",
    price: "399.000",
    description: "Untuk bisnis skala besar",
    features: [
      "User Unlimited",
      "Semua fitur Beta",
      "Automasi AI",
      "Integrasi API",
      "Dedicated Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="harga" className="bg-white py-12">
      <div style={{ width: "min(calc(100% - 40px), 1024px)", marginInline: "auto" }}>
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">
            Paket Berlangganan
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex min-h-[25rem] flex-col rounded-xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${plan.popular ? "border-blue-600 ring-2 ring-blue-600 lg:min-h-[28rem]" : "border-slate-200"}`}
            >
              {plan.popular && (
                <div className="absolute right-5 top-5 inline-flex w-fit rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-black text-white">
                  Paling Populer
                </div>
              )}

              <h3 className="text-2xl font-black text-blue-700">
                {plan.name}
              </h3>
              <p className="mt-3 text-sm font-semibold text-slate-600">
                {plan.description}
              </p>

              <div className="mt-6">
                <p className="text-3xl font-black text-slate-950">
                  Rp {plan.price}
                  <span className="text-sm font-bold text-slate-500"> /bulan</span>
                </p>
              </div>

              <ul className="mt-6 space-y-3 text-sm font-medium text-slate-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="text-blue-600">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-auto w-full rounded-lg border border-blue-600 py-3 text-sm font-black transition ${plan.popular ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700" : "bg-white text-blue-700 hover:bg-blue-50"}`}
              >
                Mulai Sekarang
              </button>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-xs font-medium text-slate-500">
          * Harga belum termasuk PPN
        </p>
      </div>
    </section>
  );
}
