import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

export default function MainLayout({
  children,
}) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}