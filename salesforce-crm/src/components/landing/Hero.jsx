import {
  FaArrowRight,
  FaBell,
  FaCalendarAlt,
  FaCamera,
  FaCheckCircle,
  FaChevronRight,
  FaHome,
  FaMapMarkerAlt,
  FaPlus,
  FaRegBell,
  FaRegCircle,
  FaSearch,
  FaUser,
} from "react-icons/fa";

const features = [
  "Data pelanggan terpusat & akurat",
  "Aktivitas tim terpantau real-time",
  "Keputusan lebih cepat berbasis data",
  "Produktivitas meningkat hingga 30%",
];

const brands = [
  "mitra solusi",
  "TechSupply",
  "INDO TEKNIK",
  "PrimaService",
  "NUSANTARA DISTRIBUSI",
];

const phoneApps = [
  "Visit",
  "Tugas",
  "Absensi",
  "Customer",
  "Tracking",
  "Barang",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-8 pt-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="pointer-events-none absolute -right-36 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div
        className="relative"
        style={{
          width: "min(calc(100% - 40px), 1216px)",
          marginInline: "auto",
        }}
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-xl">
            <p className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">
              Solusi CRM & Sales Tracking Terlengkap untuk Bisnis Anda
            </p>

            <h1 className="mt-6 text-4xl font-black leading-[1.02] text-slate-950 sm:text-5xl xl:text-[3.65rem]">
              CRM & SALESFORCE
              <span className="block text-blue-600">SALES TRACKING</span>
            </h1>

            <p className="mt-5 max-w-lg text-base font-medium leading-7 text-slate-600">
              Kelola pelanggan, tim sales, aktivitas lapangan, tugas, stok
              barang, hingga laporan penjualan dalam satu platform terintegrasi.
              Tingkatkan produktivitas tim dan capai target lebih cepat.
            </p>

            <div className="mt-7 grid gap-3">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                >
                  <FaCheckCircle className="shrink-0 text-blue-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700">
                Coba Gratis 14 Hari
                <FaArrowRight size={13} />
              </button>
              <button className="inline-flex items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-blue-700 shadow-sm transition hover:bg-slate-50">
                Jadwalkan Demo
                <FaCalendarAlt size={14} />
              </button>
            </div>

            <div style={{ marginTop: "36px" }}>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#94a3b8",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Trusted by 500+ companies
              </p>
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                {brands.map((brand) => (
                  <div
                    key={brand}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      backgroundColor: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "10px",
                      padding: "10px 16px",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#475569",
                    }}
                  >
                    <span
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "6px",
                        backgroundColor: "#dbeafe",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <FaRegCircle size={10} style={{ color: "#2563eb" }} />
                    </span>
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* === DEVICE MOCKUPS === */}
          <div
            style={{
              position: "relative",
              minHeight: "480px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {/* ── PHONE mockup (portrait, slim) ── */}
            <div
              style={{
                position: "absolute",
                left: "0px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 20,
                width: "140px",
                height: "290px",
                borderRadius: "32px",
                border: "6px solid #0f172a",
                backgroundColor: "#ffffff",
                boxShadow: "0 25px 60px rgba(15,23,42,0.35)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Dynamic island / notch */}
              <div
                style={{
                  backgroundColor: "#0f172a",
                  padding: "10px 0 6px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "12px",
                    backgroundColor: "#000",
                    borderRadius: "8px",
                  }}
                />
              </div>

              {/* Phone screen content */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: "#fff",
                  padding: "8px",
                  overflow: "hidden",
                }}
              >
                {/* Header */}
                <div
                  style={{
                    marginBottom: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "8px",
                        color: "#94a3b8",
                        fontWeight: 600,
                      }}
                    >
                      Sales Executive
                    </p>
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: 900,
                        color: "#0f172a",
                      }}
                    >
                      Andi Pratama
                    </p>
                  </div>
                  <FaBell size={11} style={{ color: "#94a3b8" }} />
                </div>

                {/* Blue card */}
                <div
                  style={{
                    backgroundColor: "#2563eb",
                    borderRadius: "10px",
                    padding: "8px",
                    color: "#fff",
                    marginBottom: "8px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "8px",
                      color: "#bfdbfe",
                      fontWeight: 600,
                    }}
                  >
                    Ringkasan Hari Ini
                  </p>
                  <div
                    style={{
                      marginTop: "6px",
                      display: "grid",
                      gridTemplateColumns: "repeat(4,1fr)",
                      gap: "4px",
                      textAlign: "center",
                    }}
                  >
                    {["12", "8", "4", "2"].map((v) => (
                      <span
                        key={v}
                        style={{
                          backgroundColor: "rgba(255,255,255,0.15)",
                          borderRadius: "6px",
                          padding: "4px 0",
                          fontSize: "9px",
                          fontWeight: 900,
                        }}
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apps grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3,1fr)",
                    gap: "6px",
                    marginBottom: "8px",
                  }}
                >
                  {phoneApps.map((app) => (
                    <div key={app} style={{ textAlign: "center" }}>
                      <span
                        style={{
                          display: "grid",
                          placeItems: "center",
                          width: "24px",
                          height: "24px",
                          margin: "0 auto",
                          backgroundColor: "#eff6ff",
                          borderRadius: "6px",
                        }}
                      >
                        <FaCheckCircle size={9} style={{ color: "#2563eb" }} />
                      </span>
                      <p
                        style={{
                          fontSize: "7px",
                          color: "#64748b",
                          marginTop: "3px",
                        }}
                      >
                        {app}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tasks */}
                <div
                  style={{
                    backgroundColor: "#f8fafc",
                    borderRadius: "8px",
                    padding: "6px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "8px",
                      fontWeight: 700,
                      color: "#1e293b",
                      marginBottom: "4px",
                    }}
                  >
                    Tugas Terdekat
                  </p>
                  {["Visitasi PT. Sinar Jaya", "Follow up pemesanan"].map(
                    (t) => (
                      <p
                        key={t}
                        style={{
                          fontSize: "7px",
                          color: "#64748b",
                          backgroundColor: "#fff",
                          borderRadius: "5px",
                          padding: "4px 6px",
                          marginBottom: "3px",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {t} <FaChevronRight size={6} />
                      </p>
                    ),
                  )}
                </div>
              </div>

              {/* Bottom nav bar */}
              <div
                style={{
                  backgroundColor: "#0f172a",
                  padding: "6px 0",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <FaHome size={10} style={{ color: "#2563eb" }} />
                <FaMapMarkerAlt size={10} style={{ color: "#64748b" }} />
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#2563eb",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <FaPlus size={8} style={{ color: "#fff" }} />
                </span>
                <FaCamera size={10} style={{ color: "#64748b" }} />
              </div>

              {/* Home indicator */}
              <div
                style={{
                  backgroundColor: "#0f172a",
                  paddingBottom: "8px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "4px",
                    backgroundColor: "#374151",
                    borderRadius: "2px",
                  }}
                />
              </div>
            </div>

            {/* ── LAPTOP mockup ── */}
            <div
              style={{ marginLeft: "auto", width: "100%", maxWidth: "520px" }}
            >
              {/* Screen bezel */}
              <div
                style={{
                  backgroundColor: "#0f172a",
                  borderRadius: "14px 14px 0 0",
                  padding: "10px 10px 0",
                  boxShadow: "0 -4px 30px rgba(15,23,42,0.12)",
                }}
              >
                {/* Camera dot */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "6px",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#374151",
                    }}
                  />
                </div>
                {/* Screen content */}
                <div
                  style={{
                    borderRadius: "8px 8px 0 0",
                    overflow: "hidden",
                    border: "1px solid #1e293b",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      minHeight: "300px",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    {/* Sidebar */}
                    <aside
                      style={{
                        width: "110px",
                        backgroundColor: "#0f172a",
                        padding: "14px",
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          marginBottom: "18px",
                        }}
                      >
                        <span
                          style={{
                            width: "18px",
                            height: "18px",
                            borderRadius: "5px",
                            backgroundColor: "#2563eb",
                            display: "inline-block",
                          }}
                        />
                        <span
                          style={{
                            fontSize: "9px",
                            fontWeight: 600,
                            color: "#fff",
                          }}
                        >
                          SalesForce
                        </span>
                      </div>
                      {[
                        "Dashboard",
                        "Customer",
                        "Visitasi",
                        "Tugas",
                        "Tracking",
                        "Laporan",
                      ].map((item, i) => (
                        <div
                          key={item}
                          style={{
                            marginBottom: "6px",
                            borderRadius: "6px",
                            padding: "6px 8px",
                            fontSize: "9px",
                            backgroundColor:
                              i === 0 ? "#2563eb" : "transparent",
                            color: i === 0 ? "#fff" : "#94a3b8",
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </aside>

                    {/* Main panel */}
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#f8fafc",
                        padding: "14px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: "12px",
                        }}
                      >
                        <h2
                          style={{
                            fontSize: "13px",
                            fontWeight: 800,
                            color: "#0f172a",
                          }}
                        >
                          Dashboard
                        </h2>
                        <div style={{ display: "flex", gap: "6px" }}>
                          <span
                            style={{
                              width: "22px",
                              height: "22px",
                              display: "grid",
                              placeItems: "center",
                              backgroundColor: "#fff",
                              borderRadius: "6px",
                              border: "1px solid #e2e8f0",
                            }}
                          >
                            <FaSearch size={8} style={{ color: "#94a3b8" }} />
                          </span>
                          <span
                            style={{
                              width: "22px",
                              height: "22px",
                              display: "grid",
                              placeItems: "center",
                              backgroundColor: "#fff",
                              borderRadius: "6px",
                              border: "1px solid #e2e8f0",
                            }}
                          >
                            <FaRegBell size={8} style={{ color: "#94a3b8" }} />
                          </span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(4,1fr)",
                          gap: "6px",
                          marginBottom: "10px",
                        }}
                      >
                        {[
                          ["Total Customer", "1.250"],
                          ["Visit Hari Ini", "320"],
                          ["Deal Berjalan", "78"],
                          ["Penjualan", "Rp 1,25M"],
                        ].map(([label, value]) => (
                          <div
                            key={label}
                            style={{
                              backgroundColor: "#fff",
                              borderRadius: "8px",
                              padding: "8px",
                              border: "1px solid #e2e8f0",
                            }}
                          >
                            <p style={{ fontSize: "7px", color: "#64748b" }}>
                              {label}
                            </p>
                            <p
                              style={{
                                fontSize: "11px",
                                fontWeight: 800,
                                color: "#0f172a",
                                margin: "3px 0",
                              }}
                            >
                              {value}
                            </p>
                            <p
                              style={{
                                fontSize: "7px",
                                color: "#22c55e",
                                fontWeight: 600,
                              }}
                            >
                              +12% dari bulan lalu
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Chart + Activity */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1.3fr 0.7fr",
                          gap: "8px",
                          marginBottom: "8px",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            padding: "8px",
                            border: "1px solid #e2e8f0",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: "6px",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "8px",
                                fontWeight: 600,
                                color: "#334155",
                              }}
                            >
                              Grafik Penjualan
                            </span>
                            <span style={{ fontSize: "7px", color: "#94a3b8" }}>
                              Bulan ini
                            </span>
                          </div>
                          <svg
                            width="100%"
                            height="60"
                            viewBox="0 0 200 60"
                            fill="none"
                          >
                            <path
                              d="M0 48 L33 38 L66 42 L100 22 L133 30 L166 36 L200 10"
                              stroke="#2563eb"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M0 48 L33 38 L66 42 L100 22 L133 30 L166 36 L200 10 V60 H0 Z"
                              fill="#2563eb"
                              fillOpacity="0.08"
                            />
                          </svg>
                        </div>
                        <div
                          style={{
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            padding: "8px",
                            border: "1px solid #e2e8f0",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "8px",
                              fontWeight: 600,
                              color: "#334155",
                              marginBottom: "6px",
                            }}
                          >
                            Aktivitas Terbaru
                          </p>
                          {["Adi Pratama", "Rizal Santoso", "Dewi Lestari"].map(
                            (name) => (
                              <div
                                key={name}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "5px",
                                  marginBottom: "5px",
                                }}
                              >
                                <span
                                  style={{
                                    width: "18px",
                                    height: "18px",
                                    borderRadius: "50%",
                                    backgroundColor: "#dbeafe",
                                    display: "grid",
                                    placeItems: "center",
                                    flexShrink: 0,
                                  }}
                                >
                                  <FaUser
                                    size={8}
                                    style={{ color: "#2563eb" }}
                                  />
                                </span>
                                <div>
                                  <p
                                    style={{
                                      fontSize: "8px",
                                      fontWeight: 700,
                                      color: "#1e293b",
                                    }}
                                  >
                                    {name}
                                  </p>
                                  <p
                                    style={{
                                      fontSize: "7px",
                                      color: "#94a3b8",
                                    }}
                                  >
                                    Follow up pelanggan
                                  </p>
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      {/* Status + Lokasi */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            padding: "8px",
                            border: "1px solid #e2e8f0",
                            textAlign: "center",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "8px",
                              fontWeight: 600,
                              color: "#334155",
                              marginBottom: "6px",
                            }}
                          >
                            Status Tugas
                          </p>
                          <div
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                              background:
                                "conic-gradient(#2563eb 0 45%, #22c55e 45% 72%, #f59e0b 72% 100%)",
                              margin: "0 auto",
                              padding: "10px",
                            }}
                          >
                            <div
                              style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "50%",
                                backgroundColor: "#fff",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          style={{
                            backgroundColor: "#ecfdf5",
                            borderRadius: "8px",
                            padding: "8px",
                            border: "1px solid #e2e8f0",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "8px",
                              fontWeight: 600,
                              color: "#334155",
                              marginBottom: "6px",
                            }}
                          >
                            Lokasi Tim
                          </p>
                          <div
                            style={{
                              height: "50px",
                              borderRadius: "6px",
                              backgroundColor: "rgba(255,255,255,0.7)",
                              display: "grid",
                              placeItems: "center",
                            }}
                          >
                            <FaMapMarkerAlt
                              size={18}
                              style={{ color: "#2563eb" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop hinge */}
              <div
                style={{
                  backgroundColor: "#1e293b",
                  height: "6px",
                  width: "100%",
                  borderRadius: "0",
                }}
              />

              {/* Keyboard base */}
              <div
                style={{
                  backgroundColor: "#1e293b",
                  height: "28px",
                  borderRadius: "0 0 10px 10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(15,23,42,0.3)",
                }}
              >
                {/* Trackpad */}
                <div
                  style={{
                    width: "70px",
                    height: "14px",
                    backgroundColor: "#0f172a",
                    borderRadius: "4px",
                    border: "1px solid #334155",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="absolute -left-3 top-24 z-20 hidden w-52 rounded-[1.75rem] border-[6px] border-slate-950 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.35)] lg:block">
            <div className="rounded-[1.3rem] bg-white p-3">
              <div className="mx-auto mb-3 h-3 w-16 rounded-full bg-slate-950" />
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold text-slate-400">
                    Sales Executive
                  </p>
                  <p className="text-sm font-black text-slate-950">
                    Andi Pratama
                  </p>
                </div>
                <FaBell className="text-slate-400" size={13} />
              </div>

              <div className="rounded-xl bg-blue-600 p-3 text-white shadow-lg shadow-blue-600/20">
                <p className="text-[10px] font-semibold text-blue-100">
                  Ringkasan Hari Ini
                </p>
                <div className="mt-3 grid grid-cols-4 gap-1 text-center">
                  {["12", "8", "4", "2"].map((value) => (
                    <span
                      key={value}
                      className="rounded-lg bg-white/15 py-2 text-xs font-black"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {phoneApps.map((app) => (
                  <div key={app} className="text-center">
                    <span className="mx-auto grid h-7 w-7 place-items-center rounded-lg bg-blue-50 text-blue-600">
                      <FaCheckCircle size={11} />
                    </span>
                    <p className="mt-1 text-[9px] text-slate-500">{app}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl bg-slate-50 p-3">
                <p className="text-[10px] font-semibold text-slate-800">
                  Tugas Terdekat
                </p>
                <div className="mt-2 space-y-2 text-[9px] text-slate-500">
                  <p className="flex items-center justify-between rounded-lg bg-white px-2 py-2">
                    Visitasi PT. Sinar Jaya
                    <FaChevronRight size={8} />
                  </p>
                  <p className="flex items-center justify-between rounded-lg bg-white px-2 py-2">
                    Follow up pemesanan
                    <FaChevronRight size={8} />
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-blue-600">
                <FaHome />
                <FaMapMarkerAlt />
                <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-600 text-white">
                  <FaPlus size={12} />
                </span>
                <FaCamera />
              </div>
            </div>
          </div>

          <div className="ml-auto w-full max-w-[43rem] rounded-[1.45rem] border-[7px] border-slate-950 bg-white p-4 shadow-[0_40px_90px_-35px_rgba(15,23,42,0.8)]">
            <div className="flex min-h-[27rem] overflow-hidden rounded-xl border border-slate-200 bg-white">
              <aside className="hidden w-36 bg-slate-950 p-4 text-white sm:block">
                <div className="mb-6 flex items-center gap-2">
                  <span className="h-6 w-6 rounded-md bg-blue-600" />
                  <span className="text-xs font-semibold">SalesForce</span>
                </div>
                {[
                  "Dashboard",
                  "Customer",
                  "Visitasi",
                  "Tugas",
                  "Tracking",
                  "Laporan",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`mb-2 rounded-lg px-3 py-2 text-[11px] ${index === 0 ? "bg-blue-600" : "text-slate-300"}`}
                  >
                    {item}
                  </div>
                ))}
              </aside>

              <div className="flex-1 bg-slate-50 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-slate-950">
                    Dashboard
                  </h2>
                  <div className="flex gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-white text-slate-400 ring-1 ring-slate-200">
                      <FaSearch size={11} />
                    </span>
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-white text-slate-400 ring-1 ring-slate-200">
                      <FaRegBell size={11} />
                    </span>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-4">
                  {[
                    ["Total Customer", "1.250"],
                    ["Visit Hari Ini", "320"],
                    ["Deal Berjalan", "78"],
                    ["Penjualan", "Rp 1,25M"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200"
                    >
                      <p className="text-[10px] text-slate-500">{label}</p>
                      <p className="mt-2 text-lg font-bold text-slate-950">
                        {value}
                      </p>
                      <p className="mt-1 text-[10px] font-semibold text-emerald-500">
                        +12% dari bulan lalu
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    <div className="mb-4 flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">
                        Grafik Penjualan
                      </span>
                      <span className="text-slate-400">Bulan ini</span>
                    </div>
                    <div className="relative h-28 overflow-hidden rounded-lg bg-white">
                      <div className="absolute inset-0 bg-[linear-gradient(#e2e8f0_1px,transparent_1px),linear-gradient(90deg,#e2e8f0_1px,transparent_1px)] bg-[size:100%_25%,14.2%_100%] opacity-70" />
                      <svg
                        className="relative h-full w-full"
                        viewBox="0 0 280 112"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 88 L40 72 L80 76 L120 42 L160 54 L200 66 L240 46 L280 18"
                          stroke="#2563eb"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M0 88 L40 72 L80 76 L120 42 L160 54 L200 66 L240 46 L280 18 V112 H0 Z"
                          fill="url(#sales)"
                          opacity="0.16"
                        />
                        <defs>
                          <linearGradient
                            id="sales"
                            x1="140"
                            y1="18"
                            x2="140"
                            y2="112"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#2563eb" />
                            <stop
                              offset="1"
                              stopColor="#2563eb"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    <p className="mb-4 text-xs font-semibold text-slate-700">
                      Aktivitas Terbaru
                    </p>
                    {["Adi Pratama", "Rizal Santoso", "Dewi Lestari"].map(
                      (name) => (
                        <div
                          key={name}
                          className="mb-3 flex items-center gap-3"
                        >
                          <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-100 text-blue-600">
                            <FaUser size={11} />
                          </span>
                          <div>
                            <p className="text-xs font-semibold text-slate-800">
                              {name}
                            </p>
                            <p className="text-[10px] text-slate-400">
                              Follow up pelanggan
                            </p>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    <p className="text-xs font-semibold text-slate-700">
                      Status Tugas
                    </p>
                    <div className="mx-auto mt-4 h-20 w-20 rounded-full bg-[conic-gradient(#2563eb_0_45%,#22c55e_45%_72%,#f59e0b_72%_100%)] p-4">
                      <div className="h-full w-full rounded-full bg-white" />
                    </div>
                  </div>
                  <div className="rounded-lg bg-emerald-50 p-4 shadow-sm ring-1 ring-slate-200">
                    <p className="text-xs font-semibold text-slate-700">
                      Lokasi Tim
                    </p>
                    <div className="mt-3 grid h-20 place-items-center rounded-lg bg-white/70 text-blue-600">
                      <FaMapMarkerAlt size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
