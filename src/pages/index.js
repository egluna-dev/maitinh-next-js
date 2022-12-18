import Layout from "components/Layout";
import HeroSection from "components/Hero";
import AboutSection from "components/About";
import ServicesAndSupport from "components/services/ServicesAndSupport";
import PricingSection from "components/Pricing";
import Header from "components/header/Header";
import Footer from "components/Footer";

export default function Home() {
  return (
    <Layout>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesAndSupport />
      <PricingSection />
      <Footer />
    </Layout>
  )
}
