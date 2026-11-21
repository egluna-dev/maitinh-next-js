import Layout from "components/Layout";
import HeroSection from "components/Hero";
import AboutSection from "components/About";
import ServicesAndSupport from "components/services/ServicesAndSupport";
import PricingSection from "components/Pricing";
import ContactSection from "components/contact/Contact";
import Header from "components/header/Header";
import Footer from "components/Footer";
import { Box, Heading, Text } from "theme-ui";

const isComingSoon = process.env.NEXT_PUBLIC_COMING_SOON === "true"

function ComingSoonView() {
  return (
    <Box
      sx={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 3,
        gap: 3,
      }}
    >
      <Heading as="h1">Coming Soon</Heading>
      <Text sx={{ maxWidth: '520px', lineHeight: 1.6 }}>
        We are putting the finishing touches on our new website. Check back shortly.
      </Text>
    </Box>
  )
}

export default function Home() {
  if (isComingSoon) {
    return (
      <Layout>
        <ComingSoonView />
      </Layout>
    )
  }
  return (
    <Layout>
      <Header />
      <HeroSection />
      <ServicesAndSupport />
      <AboutSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </Layout>
  )
}
