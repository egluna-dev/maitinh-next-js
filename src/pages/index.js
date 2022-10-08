import Layout from '../components/Layout'
// import Image from 'next/image'
import HeroSection from '../components/Hero';
// import styles from '../styles/Home.module.scss'
// import Countdown from '../components/Countdown';
import Header from '../components/Header';


export default function Home() {
  // const launchDate = new Date('29 July, 22 23:30:00')
  // // Time remaining until launch from current date of component mount
  // const totalTimeRemaining = launchDate - Date.now()

  return (
    <Layout>
      <Header />
      <HeroSection />
    </Layout>
  )
}
