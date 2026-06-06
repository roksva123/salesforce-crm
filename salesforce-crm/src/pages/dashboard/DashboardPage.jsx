import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaChevronDown,
  FaHome,
  FaUserFriends,
  FaHandshake,
  FaShoppingCart,
  FaTasks,
  FaCalendar,
  FaBox,
  FaFileAlt,
  FaChartBar,
  FaFileInvoice,
  FaCheckDouble,
  FaUserTie,
} from "react-icons/fa";

export default function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div className="hidden md:flex md:flex-col w-64 bg-slate-900 text-white p-6 space-y-8 sticky top-0 max-h-screen overflow-y-auto">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
            SF
          </div>
          <div>
            <p className="font-bold text-sm">SalesForce</p>
            <p className="text-xs text-slate-400 uppercase">
              CRM & SALES TRACKING
            </p>
          </div>
        </div>

        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-600 text-white font-medium"
          >
            <FaHome size={18} /> Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 transition"
          >
            <FaUserFriends size={18} /> Customers
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 transition"
          >
            <FaHandshake size={18} /> Leads
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 transition"
          >
            <FaShoppingCart size={18} /> Deals / Opportunities
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 transition"
          >
            <FaTasks size={18} /> Activities
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 transition"
          >
            <FaCalendar size={18} /> Tasks
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 transition"
          >
            <FaBox size={18} /> Products
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 transition"
          >
            <FaFileAlt size={18} /> Documents
          </a>
        </nav>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 px-4 mb-3">
            Laporan
          </p>
          <nav className="space-y-2">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 transition"
            >
              <FaChartBar size={18} /> Sales Report
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 transition"
            >
              <FaFileInvoice size={18} /> Activity Report
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 transition"
            >
              <FaCheckDouble size={18} /> Pipeline Report
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 transition"
            >
              <FaUserTie size={18} /> Customer Report
            </a>
          </nav>
        </div>

        <div className="mt-auto pt-6 border-t border-slate-700">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-slate-800 transition">
            <img
              src="https://ui-avatars.com/api/?name=Ardi+Setiawan&background=3b82f6&color=fff"
              alt="User"
              className="h-10 w-10 rounded-full"
            />
            <div className="text-left">
              <p className="text-sm font-semibold">Ardi Setiawan</p>
              <p className="text-xs text-slate-400">Admin</p>
            </div>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-slate-200 p-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-950">Dashboard</h1>
            <p className="text-sm text-slate-600">
              Ringkasan performa penjualan dan aktivitas tim Anda
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center bg-slate-100 rounded-full px-4 py-2 gap-2">
              <FaSearch className="text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Cari customer, lead, deals..."
                className="bg-transparent outline-none text-sm w-64 placeholder:text-slate-500"
              />
            </div>
            <button className="relative p-2 hover:bg-slate-100 rounded-lg transition">
              <FaBell className="text-slate-600" size={20} />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-lg transition">
              <FaCog className="text-slate-600" size={20} />
            </button>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-slate-100 rounded-lg transition text-slate-600 hover:text-red-600"
            >
              <FaSignOutAlt size={20} />
            </button>
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-slate-200">
              <img
                src="https://ui-avatars.com/api/?name=PT.+Maju+Bersama&background=3b82f6&color=fff"
                alt="Company"
                className="h-10 w-10 rounded-full"
              />
              <div className="text-left hidden sm:block">
                <p className="text-sm font-semibold text-slate-900">
                  PT. Maju Bersama
                </p>
                <p className="text-xs text-slate-500">Enterprise Plan</p>
              </div>
              <FaChevronDown className="text-slate-400" size={14} />
            </div>
          </div>
        </div>

        {/* Date Range */}
        <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <select className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
            <option>6 Bulan Terakhir</option>
            <option>3 Bulan</option>
            <option>1 Bulan</option>
            <option>7 Hari</option>
          </select>
          <input
            type="date"
            className="px-4 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            defaultValue="2025-06-20"
          />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-600 mb-2">
                Total Revenue (Bulan Ini)
              </p>
              <p className="text-2xl font-bold text-slate-950 mb-2">
                Rp 485.750.000
              </p>
              <p className="text-xs text-green-600 font-semibold">
                ▲ 15.8% vs bulan lalu
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-600 mb-2">
                Won Deals (Bulan Ini)
              </p>
              <p className="text-2xl font-bold text-slate-950 mb-2">
                Rp 312.500.000
              </p>
              <p className="text-xs text-green-600 font-semibold">
                ▲ 18.3% vs bulan lalu
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-600 mb-2">Open Deals</p>
              <p className="text-2xl font-bold text-slate-950 mb-2">
                Rp 673.200.000
              </p>
              <p className="text-xs text-slate-500">22 Deals</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-600 mb-2">
                New Leads (Bulan Ini)
              </p>
              <p className="text-2xl font-bold text-slate-950 mb-2">156</p>
              <p className="text-xs text-green-600 font-semibold">
                ▲ 12.5% vs bulan lalu
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-600 mb-2">
                Tasks Selesai (Bulan Ini)
              </p>
              <p className="text-2xl font-bold text-slate-950 mb-2">78%</p>
              <p className="text-xs text-slate-500">Performance</p>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-950 mb-4">
                Tren Revenue
              </h3>
              <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center">
                <p className="text-slate-500">
                  Chart Placeholder - Tren Revenue
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-950 mb-4">
                Pipeline Deals
              </h3>
              <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center">
                <p className="text-slate-500">
                  Chart Placeholder - Pipeline Funnel
                </p>
              </div>
            </div>
          </div>

          {/* Tables Row */}
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-950 mb-4">
                Top Produk (Revenue)
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      CRM Enterprise
                    </p>
                    <p className="text-xs text-slate-500">Rp 240.000.000</p>
                  </div>
                  <p className="text-sm font-semibold text-slate-950">42%</p>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Sales Tracking Pro
                    </p>
                    <p className="text-xs text-slate-500">Rp 156.500.000</p>
                  </div>
                  <p className="text-sm font-semibold text-slate-950">27%</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-950 mb-4">
                Deals Terbaru
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-slate-900">
                      PT. Sgihtora Abadi
                    </p>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                      Proposal
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">20 Jun 2025</p>
                  <p className="text-sm font-semibold text-slate-950 mt-1">
                    Rp 85.000.000
                  </p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-slate-900">
                      CV. Karya Utama
                    </p>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-100 text-orange-700">
                      Negotiation
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">19 Jun 2025</p>
                  <p className="text-sm font-semibold text-slate-950 mt-1">
                    Rp 45.000.000
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Performa Tim */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-950 mb-4">
              Performa Tim (Bulan Ini)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">
                      Nama
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">
                      Revenue
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">
                      Won Deals
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">
                      New Leads
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">
                      Target Selesai
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <img
                          src="https://ui-avatars.com/api/?name=Ardi+Setiawan&background=3b82f6&color=fff"
                          alt=""
                          className="h-8 w-8 rounded-full"
                        />
                        <span className="font-semibold text-slate-900">
                          Ardi Setiawan
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-semibold text-slate-900">
                      Rp 88.000.000
                    </td>
                    <td className="py-3 px-4 text-slate-600">8</td>
                    <td className="py-3 px-4 text-slate-600">28</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 rounded-full bg-slate-200 overflow-hidden">
                          <div
                            className="h-full bg-blue-600"
                            style={{ width: "70%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-slate-900">
                          70%
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <img
                          src="https://ui-avatars.com/api/?name=Siti+Nurhaliza&background=3b82f6&color=fff"
                          alt=""
                          className="h-8 w-8 rounded-full"
                        />
                        <span className="font-semibold text-slate-900">
                          Siti Nurhaliza
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-semibold text-slate-900">
                      Rp 72.600.000
                    </td>
                    <td className="py-3 px-4 text-slate-600">5</td>
                    <td className="py-3 px-4 text-slate-600">28</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 rounded-full bg-slate-200 overflow-hidden">
                          <div
                            className="h-full bg-blue-600"
                            style={{ width: "65%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-slate-900">
                          65%
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
