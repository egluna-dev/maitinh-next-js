import Layout from "components/Layout"
import HeroSection from "components/Hero"
import AboutSection from "components/About"
import ServicesAndSupport from "components/services/ServicesAndSupport"
import PricingSection from "components/Pricing"
import ContactSection from "components/contact/Contact"
import Header from "components/header/Header"
import Footer from "components/Footer"
import Logo from "components/Logo"
import { Box, Heading, Text } from "theme-ui"

const isComingSoon = process.env.NEXT_PUBLIC_COMING_SOON === "true"

function ComingSoonView() {

  const styles = {
    heading: {
      fontFamily: 'heading',
    },
    text: {
      maxWidth: '520px',
      lineHeight: '1.6',
      fontFamily: 'body',
      fontSize: '1.5rem'
    },
  }

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
      <Logo src='/logos/LaLuna_Logo_Full.svg' path="/" height={175} width={175} alt='La Luna Early Intervention Services Logo'/>
      <Heading as="h1" sx={styles.heading}>Coming Soon! </Heading>
      <Text sx={styles.text}>
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
