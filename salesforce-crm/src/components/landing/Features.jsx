import {
  FaUsers,
  FaMapMarkerAlt,
  FaClipboardCheck,
  FaBoxOpen,
  FaChartBar,
  FaCamera,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";

const features = [
  {
    title: "Manajemen Customer",
    icon: FaUsers,
    description: "Kelola data pelanggan & prospek dengan rapi dan terstruktur.",
  },
  {
    title: "Visitasi & Tracking",
    icon: FaMapMarkerAlt,
    description: "Catat kunjungan, lokasi, radius dan aktivitas tim sales.",
  },
  {
    title: "Manajemen Tugas",
    icon: FaClipboardCheck,
    description: "Buat, assign, pantau dan selesaikan tugas dengan mudah.",
  },
  {
    title: "Input - Output Barang",
    icon: FaBoxOpen,
    description: "Kelola keluar masuk barang secara real-time jika ada barang.",
  },
  {
    title: "Laporan & Analitik",
    icon: FaChartBar,
    description: "Laporan lengkap & real-time untuk keputusan lebih baik.",
  },
  {
    title: "Foto Aktivitas",
    icon: FaCamera,
    description: "Dokumentasikan setiap aktivitas lapangan dari aplikasi.",
  },
  {
    title: "Absensi Face Recognition",
    icon: FaShieldAlt,
    description: "Absensi modern dengan face recognition & anti kecurangan.",
  },
  {
    title: "Automasi AI",
    icon: FaRocket,
    description: "AI membantu follow up, prediksi peluang, dan rekomendasi.",
  },
];

export default function Features() {
  return (
    <section id="fitur" className="bg-white py-12">
      <div style={{ width: "min(calc(100% - 40px), 1216px)", marginInline: "auto" }}>
        <h2 className="mb-8 text-center text-3xl font-black text-slate-950">
          Fitur Aplikasi Kami
        </h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex min-h-44 flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-base font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-auto pt-5 text-xs font-black text-blue-600">
                  Selengkapnya →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
