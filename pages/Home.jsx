import { gql } from '@apollo/client';

const homeQuery = gql`
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
`;

export async function getStaticProps() {
  console.log(homeQuery);
}
