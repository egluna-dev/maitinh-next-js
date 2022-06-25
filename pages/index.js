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
      <Image src='/logos/MaiTinhColor-01.png' width={200} height={168} alt='Mai Tinh'/>

      <div className={styles.main}>
        <h1 className={styles.heading}>Coming Soon! </h1>
        <h2>The website is on the way.</h2>
        <p>For children with ASD, language delay, and intellectual disabilities.</p>
        <p>Based in Melbourne, VIC.</p>
      </div>

      {/* <Countdown countdownTimestamp={totalTimeRemaining}/> */}
    </Layout>
  )
}
