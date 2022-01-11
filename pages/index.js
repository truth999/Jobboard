import Head from 'next/head';

import { Layout } from '../components/Layout/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jobboard</title>
        <meta name="techChallenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout />
    </>
  );
}
