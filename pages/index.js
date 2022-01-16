import Head from 'next/head';
import { Header } from '../src/components/Header';
import { allJobs } from '../src/lib/graphql/queries';
import { JobList } from '../src/components/Home/JobList';

export default function Home(props) {
  const { allJobs } = props;
  return (
    <>
      <Head>
        <title>Jobboard</title>
        <meta name="techChallenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <JobList allJobs={allJobs} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allJobs: allJobs,
    },
  };
}
