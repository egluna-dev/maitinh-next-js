import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Countdown from '../components/Countdown'

export default function Home() {
  const launchDate = new Date('29 July, 22 23:30:00')
  // Time remaining until launch from current date of component mount
  const totalTimeRemaining = launchDate - Date.now()

  return (
    <Layout title='Mai Tinh | Coming Soon!'>
      <Image src='/logos/MaiTinhColor-01.png' width={200} height={170} alt='Mai Tinh'/>

      <div className={styles.main}>
        <h2 className={styles.heading}>Coming Soon!</h2>
        <h3>The website is on the way.</h3>
        <p>For children with ASD, language delay, and intellectual disabilities.</p>
        <p>Based in Melbourne, VIC.</p>
      </div>

      {/* <Image src='/images/AutismAwareness.jpg' alt='Autism Awareness' width={546} height={250} /> */}

      {/* <Countdown countdownTimestamp={totalTimeRemaining}/> */}
    </Layout>
  )
}
