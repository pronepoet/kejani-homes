import { server } from '../config'
import Head from 'next/head'
import Image from 'next/image'

import { Inter } from 'next/font/google'
import styles from "../styles/Home.module.css"
import SignUp from './signup'
import Layout from '../components/Layout'
import Homepage from './homepage'
// import Login from './login'
const inter = Inter({ subsets: ['latin'] })
import Navbar from '../components/Navbar'
export default function Home({articles}) {
 
  return (
    <>
      <Head>
        <title>Kejani Homes Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Homepage articles={articles}/>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
      props: {
          articles
      }
  }
}
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//       props: {
//           articles
//       }
//   }
// }