export default function Footer() {
  return (
    <footer id="about" className="bg-white px-5 pb-6 text-slate-200 lg:px-6">
      <div
        className="rounded-xl bg-slate-950 px-6 py-10 shadow-2xl"
        style={{ width: "min(calc(100% - 40px), 1216px)", marginInline: "auto" }}
      >
        <div className="grid gap-10 lg:grid-cols-5">
          <div>
            <h2 className="text-2xl font-black text-white">SalesForce</h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Platform CRM & Sales Tracking terlengkap untuk membantu bisnis
              Anda tumbuh lebih cepat dan efisien.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Produk</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Fitur</li>
              <li>Solusi</li>
              <li>Harga</li>
              <li>Integrasi</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Perusahaan</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Tentang Kami</li>
              <li>Karir</li>
              <li>Blog</li>
              <li>Kontak</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Sumber Daya</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Pusat Bantuan</li>
              <li>Dokumentasi</li>
              <li>Tutorial</li>
              <li>Webinar</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Hubungi Kami</h4>
            <p className="text-sm text-slate-400">info@salesforce-app.com</p>
            <p className="mt-3 text-sm text-slate-400">0812-3456-7890</p>
            <p className="mt-3 text-sm text-slate-400">
              Jl. Raya No. 10, Jakarta, Indonesia
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SalesForce. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Syarat & Ketentuan</span>
            <span>Kebijakan Privasi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
