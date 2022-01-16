import { gql } from '@apollo/client';
import { client } from './apollo';

export const allJobs = [];
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
