export default function Footer() {
  return (
    <footer id="about" style={{ backgroundColor: "#ffffff", padding: "40px 40px 32px" }}>
      <div style={{ backgroundColor: "#0f172a", borderRadius: "20px", padding: "60px 60px 40px" }}>

        {/* Main grid */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1.5fr", gap: "48px" }}>

          {/* Brand */}
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#ffffff" }}>SalesForce</h2>
            <p style={{ marginTop: "16px", fontSize: "14px", lineHeight: 1.8, color: "#94a3b8", maxWidth: "260px" }}>
              Platform CRM & Sales Tracking terlengkap untuk membantu bisnis Anda tumbuh lebih cepat dan efisien.
            </p>
          </div>

          {/* Produk */}
          <div>
            <h4 style={{ marginBottom: "20px", fontWeight: 700, color: "#ffffff", fontSize: "15px" }}>Produk</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "14px", listStyle: "none", padding: 0, margin: 0 }}>
              {["Fitur", "Solusi", "Harga", "Integrasi"].map((item) => (
                <li key={item} style={{ fontSize: "14px", color: "#94a3b8", cursor: "pointer" }}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 style={{ marginBottom: "20px", fontWeight: 700, color: "#ffffff", fontSize: "15px" }}>Perusahaan</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "14px", listStyle: "none", padding: 0, margin: 0 }}>
              {["Tentang Kami", "Karir", "Blog", "Kontak"].map((item) => (
                <li key={item} style={{ fontSize: "14px", color: "#94a3b8", cursor: "pointer" }}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Sumber Daya */}
          <div>
            <h4 style={{ marginBottom: "20px", fontWeight: 700, color: "#ffffff", fontSize: "15px" }}>Sumber Daya</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "14px", listStyle: "none", padding: 0, margin: 0 }}>
              {["Pusat Bantuan", "Dokumentasi", "Tutorial", "Webinar"].map((item) => (
                <li key={item} style={{ fontSize: "14px", color: "#94a3b8", cursor: "pointer" }}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Hubungi Kami */}
          <div>
            <h4 style={{ marginBottom: "20px", fontWeight: 700, color: "#ffffff", fontSize: "15px" }}>Hubungi Kami</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ fontSize: "14px", color: "#94a3b8" }}>info@salesforce-app.com</p>
              <p style={{ fontSize: "14px", color: "#94a3b8" }}>0812-3456-7890</p>
              <p style={{ fontSize: "14px", color: "#94a3b8" }}>Jl. Raya No. 10, Jakarta, Indonesia</p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: "48px",
          paddingTop: "24px",
          borderTop: "1px solid #1e293b",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <p style={{ fontSize: "14px", color: "#475569" }}>© 2026 SalesForce. All rights reserved.</p>
          <div style={{ display: "flex", gap: "28px" }}>
            <span style={{ fontSize: "14px", color: "#475569", cursor: "pointer" }}>Syarat & Ketentuan</span>
            <span style={{ fontSize: "14px", color: "#475569", cursor: "pointer" }}>Kebijakan Privasi</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
