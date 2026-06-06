export default function TrialSection() {
  return (
    <section className="pb-20">

      <div className="max-w-7xl mx-auto">

        <div className="bg-slate-100 rounded-3xl p-12">

          <div className="grid lg:grid-cols-2 gap-10">

            <div>
              <h2 className="text-4xl font-bold">
                Coba Gratis 14 Hari
              </h2>

              <p className="mt-5 text-gray-600">
                Rasakan semua fitur tanpa kartu kredit.
              </p>
            </div>

            <form className="grid grid-cols-2 gap-4">

              <input
                className="border rounded-xl p-4"
                placeholder="Nama Lengkap"
              />

              <input
                className="border rounded-xl p-4"
                placeholder="Email"
              />

              <input
                className="border rounded-xl p-4"
                placeholder="Whatsapp"
              />

              <input
                className="border rounded-xl p-4"
                placeholder="Perusahaan"
              />

              <button className="col-span-2 bg-blue-600 text-white py-4 rounded-xl">
                Mulai Trial Gratis
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}