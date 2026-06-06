import { FaCheckCircle } from "react-icons/fa";

const badges = ["Full Access Fitur", "Mudah Digunakan", "Aman & Terpercaya"];

export default function CTASection() {
  return (
    <section className="bg-white py-8">
      <div style={{ width: "min(calc(100% - 40px), 1216px)", marginInline: "auto" }}>
        <div className="relative overflow-hidden rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-6 shadow-lg sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-black leading-tight text-blue-950 sm:text-4xl">
                Coba Gratis 14 Hari Tanpa Kartu Kredit
              </h2>
              <p className="mt-4 max-w-xl text-base font-medium leading-7 text-slate-600">
                Rasakan semua fitur SalesForce secara lengkap selama 14 hari.
              </p>

              <div className="mt-7 grid gap-3 text-sm text-slate-700 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-xs font-bold shadow-sm ring-1 ring-blue-100"
                  >
                    <FaCheckCircle className="text-blue-600" size={14} />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <form className="grid gap-3 rounded-lg bg-white/80 p-3 text-slate-900 shadow-sm ring-1 ring-slate-200 sm:grid-cols-2">
              <input
                className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="Nama Lengkap"
              />
              <input
                className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="Email Perusahaan"
              />
              <input
                className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="Nomor WhatsApp"
              />
              <input
                className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="Nama Perusahaan"
              />
              <select
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:col-span-2"
                defaultValue="Jumlah Tim"
              >
                <option disabled>Jumlah Tim</option>
                <option>1-5</option>
                <option>6-20</option>
                <option>20+</option>
              </select>
              <button className="rounded-lg bg-blue-600 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 sm:col-span-2">
                Mulai Trial Gratis
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
