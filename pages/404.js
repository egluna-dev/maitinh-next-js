import Layout from "../components/Layout";
import Link from 'next/link';
import Image from "next/image";
import styles from '../styles/404.module.scss';

export default function NotFoundPage() {
  return (
    <Layout>
        <div className={styles.container}>
            <Image src='/logos/MaiTinhColor-01.png' width={200} height={170} className={styles.image} alt='Mai Tinh Logo'/>

            <h1>Whoops! 🤪</h1>

            <h4>This page does not exist</h4>

            <Link href='/'><a className={styles.link}>Back Home</a></Link>
        </div>
    </Layout>
  )
}
