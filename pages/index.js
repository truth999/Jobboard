import Head from 'next/head';
import { Header } from '../src/components/Header';
import { ALL_JOBS } from '../src/lib/graphql/queries';
import { JobList } from '../src/components/Home/JobList';
import { useQuery } from '@apollo/client';
import { ConnectedProvider } from '../src/hook/Context';

export default function Home(props) {
  const { loading, error, data } = useQuery(ALL_JOBS);

  if (loading) return <>Wait a Sec.</>;
  if (error) return <>`Wait : ${error}.`</>;

  return (
    <>
      <Head>
        <title>Jobboard</title>
        <meta name="techChallenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ConnectedProvider>
        <Header />
        <JobList allJobs={data?.getAllJobs} />
      </ConnectedProvider>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      // allJobs: allJobs,
    },
  };
}
