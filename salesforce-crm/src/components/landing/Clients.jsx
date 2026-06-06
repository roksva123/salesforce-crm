const clients = [
  "mitra solusi",
  "TechSupply",
  "INDO TEKNIK",
  "PrimaService",
  "NUSANTARA DISTRIBUSI",
  "Mega Jaya Retail",
  "Sinar Abadi Service",
];

export default function Clients() {
  return (
    <section style={{ backgroundColor: "#ffffff", paddingTop: "100px", paddingBottom: "100px" }}>
      <div style={{ width: "min(calc(100% - 40px), 1216px)", marginInline: "auto" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginBottom: "28px" }}>
          <span style={{ height: "8px", width: "8px", borderRadius: "50%", backgroundColor: "#2563eb", display: "inline-block" }} />
          <span style={{ height: "8px", width: "8px", borderRadius: "50%", backgroundColor: "#cbd5e1", display: "inline-block" }} />
          <span style={{ height: "8px", width: "8px", borderRadius: "50%", backgroundColor: "#cbd5e1", display: "inline-block" }} />
          <span style={{ height: "8px", width: "8px", borderRadius: "50%", backgroundColor: "#cbd5e1", display: "inline-block" }} />
        </div>

        <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 900, color: "#0f172a", marginBottom: "40px" }}>
          Klien Kami
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "20px",
        }}>
          {clients.map((client) => (
            <div
              key={client}
              style={{
                height: "160px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                backgroundColor: "#ffffff",
                padding: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <span style={{ textAlign: "center", fontSize: "15px", fontWeight: 800, color: "#475569" }}>
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
