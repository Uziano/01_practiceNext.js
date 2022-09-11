import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Welcome, here is where i practice next.js with net ninja videos
        Welcome, here is where i practice next.js with net ninja videos
        Welcome, here is where i practice next.js with net ninja videos
        Welcome, here is where i practice next.js with net ninja videos
        Welcome, here is where i practice next.js with net ninja videos
      </p>
      <p className={styles.text}>I hope u find something useful, see you later ale-gator!</p>
      <Link href="/uzis">
        <a className={styles.btn}>See Uzis Listing</a>
      </Link>
    </div>
  )
}
