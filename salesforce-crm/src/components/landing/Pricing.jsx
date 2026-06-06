import { FaCheckCircle } from "react-icons/fa";

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
    <section id="harga" style={{ backgroundColor: "#f8faff", paddingTop: "100px", paddingBottom: "100px" }}>
      <div style={{ width: "min(calc(100% - 40px), 1200px)", marginInline: "auto" }}>
        <div style={{ marginBottom: "56px", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "#0f172a" }}>
            Paket Berlangganan
          </h2>
          <p style={{ marginTop: "12px", fontSize: "1rem", color: "#64748b" }}>
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px", alignItems: "stretch" }}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                borderRadius: "20px",
                border: plan.popular ? "2px solid #2563eb" : "1px solid #e2e8f0",
                backgroundColor: "#ffffff",
                padding: "40px",
                boxShadow: plan.popular
                  ? "0 8px 40px rgba(37,99,235,0.18)"
                  : "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              {plan.popular && (
                <span style={{
                  position: "absolute",
                  top: "-16px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  whiteSpace: "nowrap",
                  borderRadius: "999px",
                  backgroundColor: "#2563eb",
                  padding: "6px 20px",
                  fontSize: "12px",
                  fontWeight: 900,
                  color: "#ffffff",
                  boxShadow: "0 2px 8px rgba(37,99,235,0.3)",
                }}>
                  Paling Populer
                </span>
              )}

              <h3 style={{ fontSize: "1.6rem", fontWeight: 900, color: plan.popular ? "#2563eb" : "#1e293b" }}>
                {plan.name}
              </h3>
              <p style={{ marginTop: "8px", fontSize: "0.9rem", fontWeight: 500, color: "#64748b" }}>
                {plan.description}
              </p>

              <div style={{ marginTop: "28px", borderTop: "1px solid #f1f5f9", paddingTop: "28px" }}>
                <p style={{ fontSize: "2.5rem", fontWeight: 900, color: "#0f172a" }}>
                  Rp {plan.price}
                  <span style={{ fontSize: "1rem", fontWeight: 600, color: "#94a3b8" }}> /bulan</span>
                </p>
              </div>

              <ul style={{ marginTop: "28px", flex: 1, display: "flex", flexDirection: "column", gap: "14px" }}>
                {plan.features.map((feature) => (
                  <li key={feature} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.9rem", fontWeight: 500, color: "#334155" }}>
                    <FaCheckCircle style={{ color: "#3b82f6", flexShrink: 0 }} size={16} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                style={{
                  marginTop: "36px",
                  width: "100%",
                  borderRadius: "12px",
                  padding: "14px 0",
                  fontSize: "0.9rem",
                  fontWeight: 900,
                  cursor: "pointer",
                  border: plan.popular ? "none" : "1.5px solid #2563eb",
                  backgroundColor: plan.popular ? "#2563eb" : "#ffffff",
                  color: plan.popular ? "#ffffff" : "#2563eb",
                  boxShadow: plan.popular ? "0 6px 20px rgba(37,99,235,0.3)" : "none",
                  transition: "all 0.2s",
                }}
              >
                Mulai Sekarang
              </button>
            </div>
          ))}
        </div>

        <p style={{ marginTop: "28px", textAlign: "center", fontSize: "12px", fontWeight: 500, color: "#94a3b8" }}>
          * Harga belum termasuk PPN ①
        </p>
      </div>
    </section>
  );
}
