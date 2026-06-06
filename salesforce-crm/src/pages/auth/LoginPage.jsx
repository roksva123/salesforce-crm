import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await authService.login(email, password);
      if (response.token) {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.message || "Login gagal. Periksa kembali email dan password Anda.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-6xl grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left Side - Branding */}
        <div className="hidden lg:block">
          <div className="flex items-center gap-3 mb-12">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold text-lg">
              SF
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-950">SalesForce</h1>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">CRM & Sales Tracking</p>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <div>
              <h2 className="text-5xl font-black text-slate-950 mb-4">Selamat Datang di</h2>
              <p className="text-5xl font-bold">
                <span className="text-blue-600">SalesForce</span>
              </p>
            </div>
            <h3 className="text-2xl font-semibold text-slate-700">CRM & Sales Tracking Platform</h3>
            <p className="text-lg text-slate-600 leading-relaxed max-w-md">
              Kelola tim sales, pantau aktivitas, dan tingkatkan produktivitas bisnis Anda dalam satu platform terintegrasi yang aman dan mudah digunakan.
            </p>
          </div>

          <div className="mt-20 relative h-64 bg-gradient-to-t from-blue-500/40 via-blue-400/20 to-transparent rounded-[3rem] opacity-60" />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full">
          <div className="bg-white rounded-[2rem] border border-slate-200 p-8 sm:p-10 shadow-xl">
            <h2 className="text-3xl font-bold text-slate-950 mb-2">Masuk ke Akun Anda</h2>
            <p className="text-slate-600 mb-8">Pilih peran Anda untuk melanjutkan ke sistem</p>

            {/* Role Selection */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-slate-700 mb-4">Masuk sebagai</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <button
                  onClick={() => setRole("superadmin")}
                  className={`p-4 rounded-2xl border-2 transition ${
                    role === "superadmin"
                      ? "border-blue-600 bg-blue-50"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <p className={`font-semibold ${role === "superadmin" ? "text-blue-600" : "text-slate-900"}`}>
                        Superadmin SaaS
                      </p>
                      <p className="text-xs text-slate-500 mt-1">Kelola platform, tenant, dan semua data sistem</p>
                    </div>
                    <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                      role === "superadmin"
                        ? "border-blue-600 bg-blue-600"
                        : "border-slate-300"
                    }`}>
                      {role === "superadmin" && <div className="h-2 w-2 bg-white rounded-full" />}
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setRole("admin")}
                  className={`p-4 rounded-2xl border-2 transition ${
                    role === "admin"
                      ? "border-blue-600 bg-blue-50"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <p className={`font-semibold ${role === "admin" ? "text-blue-600" : "text-slate-900"}`}>
                        Admin Customer
                      </p>
                      <p className="text-xs text-slate-500 mt-1">Kelola data, tim, dan aktivitas di perusahaan Anda</p>
                    </div>
                    <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                      role === "admin"
                        ? "border-blue-600 bg-blue-600"
                        : "border-slate-300"
                    }`}>
                      {role === "admin" && <div className="h-2 w-2 bg-white rounded-full" />}
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-slate-700 block mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan email Anda"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-semibold text-slate-700 block mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan password"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  >
                    {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">{error}</div>}

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300" />
                  Ingat saya
                </label>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Lupa password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-semibold py-4 rounded-xl transition"
              >
                {loading ? "Memproses..." : "Masuk"}
              </button>
            </form>

            {/* Support Link */}
            <p className="text-center text-sm text-slate-600 mt-6">
              Butuh bantuan? <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">Hubungi tim support kami</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
