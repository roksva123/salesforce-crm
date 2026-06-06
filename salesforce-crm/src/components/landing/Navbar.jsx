import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
      <div
        className="flex items-center justify-between gap-6 py-3"
        style={{ width: "min(calc(100% - 40px), 1216px)", marginInline: "auto" }}
      >
        <a href="#" className="flex items-center gap-3">
          <div className="relative h-9 w-9 shrink-0">
            <span className="absolute left-1 top-1 h-6 w-6 rotate-45 rounded-md bg-blue-600 shadow-lg shadow-blue-600/25" />
            <span className="absolute bottom-1 right-1 h-5 w-5 rotate-45 rounded-md bg-sky-400" />
          </div>
          <h2 className="text-2xl font-black tracking-tight text-slate-950">
            SalesForce
          </h2>
        </a>

        <nav className="hidden flex-1 justify-center gap-8 text-sm font-semibold text-slate-700 xl:flex">
          <a href="#" className="border-b-2 border-blue-600 py-3 text-blue-600 transition hover:text-blue-700">
            Beranda
          </a>
          <a href="#fitur" className="py-3 transition hover:text-slate-950">
            Fitur
          </a>
          <a href="#solusi" className="inline-flex items-center gap-2 py-3 transition hover:text-slate-950">
            Solusi
            <FaChevronDown size={10} />
          </a>
          <a href="#harga" className="py-3 transition hover:text-slate-950">
            Harga
          </a>
          <a href="#resources" className="inline-flex items-center gap-2 py-3 transition hover:text-slate-950">
            Sumber Daya
            <FaChevronDown size={10} />
          </a>
          <a href="#about" className="py-3 transition hover:text-slate-950">
            Tentang Kami
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            to="/login"
            className="rounded-lg border border-slate-200 bg-white px-6 py-2.5 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50"
          >
            Masuk
          </Link>
          <button className="hidden whitespace-nowrap rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 md:inline-flex">
            Coba Gratis 14 Hari
          </button>
        </div>
      </div>
    </header>
  );
}
