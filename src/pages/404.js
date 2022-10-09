/** @jsxImportSource theme-ui */ 
import ErrorLayout from "../components/ErrorLayout";
import Link from 'next/link';
import Image from "next/image";
import styles from '../styles/404.module.scss';
import { Box, Flex, Button, Heading } from "theme-ui";

export default function NotFoundPage() {
  return (
    <ErrorLayout>
      <div className={styles.container}>
        <Image src='/logos/MaiTinhColor-01.png' width={200} height={170} alt='Mai Tinh Logo'/>
        <h2>Whoops! 🤪</h2>

        <h4 sx={{fontFamily: 'body'}}>This page does not exist.</h4>

        <Link href='/'><a className={styles.link}>Back Home</a></Link>
      </div>
    </ErrorLayout>
  )
}