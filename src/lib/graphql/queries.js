import { gql } from '@apollo/client';

export const ALL_JOBS = gql`
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
