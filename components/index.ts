import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/graphql',
});

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
