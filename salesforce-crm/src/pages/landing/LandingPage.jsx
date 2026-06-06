import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/landing/Hero";
import FeatureTabs from "../../components/landing/FeatureTabs";
import Features from "../../components/landing/Features";
import Solutions from "../../components/landing/Solutions";
import Clients from "../../components/landing/Clients";
import Testimonials from "../../components/landing/Testimonials";
import Pricing from "../../components/landing/Pricing";
import CTASection from "../../components/landing/CTASection";

export default function LandingPage() {
  return (
    <MainLayout>
      <Hero />
      <FeatureTabs />
      <Features />
      <Solutions />
      <Testimonials />
      <Clients />
      <Pricing />
      <CTASection />
    </MainLayout>
  );
}
