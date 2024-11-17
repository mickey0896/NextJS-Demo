import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>หน้าแรก | Mix Shop</title>
      <meta name='keywords' content='Mix Shop,mix,ร้านค้า,ขายเสื้อผ้า,ขายของ'/>
    </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>หน้าแรกของเว็บไซต์</h1>
        <Image src="/shopping.svg" width={400} height={400} alt='logo' />
        <p>ยินดีต้อนรับเข้าสู่ร้านค้า</p>
        <Link href="/products" className={styles.btn}>ดูสินค้าทั้งหมด</Link>
      </div>
    </>
  )
}
