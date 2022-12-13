import Layout from "components/Layout";
import HeroSection from "components/Hero";
import AboutSection from "components/About";
import Header from "components/header/Header";
import Footer from "components/Footer";

export default function Home() {
  return (
    <Layout>
      <Header />
      <HeroSection />
      <AboutSection />
      <Footer />
    </Layout>
  )
}
