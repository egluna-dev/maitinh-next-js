import Layout from "../components/Layout";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <Layout>
        <div className='flex flex-col items-center mt-20'>
            <Image src='/logos/MaiTinhColor-01.png' width={250} height={210} className='bg-gray-800 rounder-2xl' alt='Mai Tinh Logo'/>

            <h1 className='text-6xl my-5'>Whoops! 🤪</h1>

            <h2 className='text-4xl text-gray-400 mb-5'>This page does not exist</h2>
        </div>
    </Layout>
  )
}
