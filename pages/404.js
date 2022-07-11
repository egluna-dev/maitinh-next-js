import Layout from "../components/Layout";
import Link from 'next/link';
import Image from "next/image";
import styles from '../styles/404.module.scss';

export default function NotFoundPage() {
  return (
    <Layout>
      <Image src='/logos/MaiTinhColor-01.png' className={styles.image} width={200} height={170} alt='Mai Tinh Logo'/>
        <div className={styles.container}>
            <h2>Whoops! 🤪</h2>

            <h4>This page does not exist</h4>

            <Link href='/'><a className={styles.link}>Back Home</a></Link>
        </div>
    </Layout>
  )
}
