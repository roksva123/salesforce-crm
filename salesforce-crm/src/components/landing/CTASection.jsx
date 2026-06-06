import { FaCheckCircle } from "react-icons/fa";

const badges = ["Full Access Fitur", "Mudah Digunakan", "Aman & Terpercaya"];

export default function CTASection() {
  return (
    <section style={{ backgroundColor: "#ffffff" }}>
      <div style={{
        background: "linear-gradient(120deg, #eff6ff 0%, #ffffff 100%)",
        borderTop: "1px solid #dbeafe",
        borderBottom: "1px solid #dbeafe",
        paddingTop: "100px",
        paddingBottom: "100px",
        paddingLeft: "80px",
        paddingRight: "80px",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}>
          {/* Left: Text */}
          <div>
            <h2 style={{ fontSize: "2.8rem", fontWeight: 900, lineHeight: 1.2, color: "#1e3a8a" }}>
              Coba Gratis 14 Hari Tanpa Kartu Kredit
            </h2>
            <p style={{ marginTop: "20px", fontSize: "1.1rem", fontWeight: 500, lineHeight: 1.7, color: "#475569" }}>
              Rasakan semua fitur SalesForce secara lengkap selama 14 hari.
            </p>

            <div style={{ marginTop: "36px", display: "flex", flexDirection: "column", gap: "14px" }}>
              {badges.map((badge) => (
                <span
                  key={badge}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    backgroundColor: "#ffffff",
                    padding: "14px 20px",
                    borderRadius: "10px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#1e293b",
                    boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
                    border: "1px solid #dbeafe",
                    width: "fit-content",
                  }}
                >
                  <FaCheckCircle style={{ color: "#2563eb" }} size={16} />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <form style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            backgroundColor: "rgba(255,255,255,0.9)",
            padding: "36px",
            borderRadius: "16px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            border: "1px solid #e2e8f0",
          }}>
            <input
              style={{ borderRadius: "10px", border: "1px solid #e2e8f0", padding: "16px", fontSize: "14px", outline: "none" }}
              placeholder="Nama Lengkap"
            />
            <input
              style={{ borderRadius: "10px", border: "1px solid #e2e8f0", padding: "16px", fontSize: "14px", outline: "none" }}
              placeholder="Email Perusahaan"
            />
            <input
              style={{ borderRadius: "10px", border: "1px solid #e2e8f0", padding: "16px", fontSize: "14px", outline: "none" }}
              placeholder="Nomor WhatsApp"
            />
            <input
              style={{ borderRadius: "10px", border: "1px solid #e2e8f0", padding: "16px", fontSize: "14px", outline: "none" }}
              placeholder="Nama Perusahaan"
            />
            <select
              style={{ borderRadius: "10px", border: "1px solid #e2e8f0", backgroundColor: "#fff", padding: "16px", fontSize: "14px", color: "#64748b", outline: "none", gridColumn: "1 / -1" }}
              defaultValue="Jumlah Tim"
            >
              <option disabled>Jumlah Tim</option>
              <option>1-5</option>
              <option>6-20</option>
              <option>20+</option>
            </select>
            <button
              style={{
                borderRadius: "10px",
                backgroundColor: "#2563eb",
                padding: "16px",
                fontSize: "15px",
                fontWeight: 700,
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 6px 20px rgba(37,99,235,0.3)",
                gridColumn: "1 / -1",
              }}
            >
              Mulai Trial Gratis
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
