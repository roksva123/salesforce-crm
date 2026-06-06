import { FaUserCheck, FaMapMarkerAlt, FaBoxes, FaCamera } from "react-icons/fa";

const tabs = [
  {
    icon: FaUserCheck,
    title: "Absensi Face Recognition",
    desc: "Aman & Akurat",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Real-time Tracking",
    desc: "Pantau Tim",
  },
  {
    icon: FaBoxes,
    title: "Input - Output Barang",
    desc: "Kelola Stok dengan Mudah",
  },
  {
    icon: FaCamera,
    title: "Foto Aktivitas",
    desc: "Dokumentasi Akurat",
  },
];

export default function FeatureTabs() {
  return (
    <section className="relative z-20 bg-white pb-12">
      <div style={{ width: "min(calc(100% - 40px), 1216px)", marginInline: "auto" }}>
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white p-3 shadow-[0_18px_45px_rgba(15,23,42,0.1)] ring-1 ring-slate-200/70">
          <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
            {tabs.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex min-h-16 items-center gap-3 rounded-lg bg-white px-4 py-3 transition hover:bg-blue-50"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                    <Icon size={18} />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-950">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
