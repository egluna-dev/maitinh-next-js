import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Countdown from '../components/Countdown'


export default function Home() {

  return (
    <Layout title='Mai Tinh || Coming Soon!'>
      <Image src='/logos/MaiTinhColor-01.png' width={200} height={168} alt='Mai Tinh'/>

      <div className={styles.main}>
        <h1>Coming Soon! </h1>
        <h2>The website is on the way.</h2>
        <p>For children with ASD, language delay, and intellectual disabilities. Based in Melbourne, VIC.</p>
      </div>

      <hr className={styles.line}/>

      <Countdown />
    </Layout>
  )
}
