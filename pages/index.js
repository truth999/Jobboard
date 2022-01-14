import Head from 'next/head';
import { Header } from '../components/Header';
import { gql } from '@apollo/client';
import { JobItem } from '../components/Home/JobItem';
import { client } from './api/apollo';

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
      <div>
        {!allJobs ? 'Loading' : allJobs[0]?.map((item) => <JobItem key={item.id} {...item} />)}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allJobs = [];
  client
    .query({
      query: gql`
        query GetAllJobs {
          getAllJobs {
            id
            coverImage
            companyLogo
            companyName
            title
            contractType
            localization
            publishedAt
          }
        }
      `,
    })
    .then((response) => {
      const result = response.data.getAllJobs;
      allJobs.push(result);
      return allJobs;
    });

  return {
    props: {
      allJobs: allJobs,
    },
  };
}
