import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {Layout} from '../components/Layout/Layout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jobboard</title>
        <meta name="techChallenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

<Layout/>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
