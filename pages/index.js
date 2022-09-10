import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Welcome, here is where i practice next.js with net ninja videos</p>
      <p>I hope u find something useful, see you later ale-gator!</p>
      <br></br>
      <Link href="/uzis">
        <a>See Uzis Listing</a>
      </Link>
    </div>
  )
}
