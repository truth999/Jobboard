import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    name: String!
    age: Int!
    job: String!
  }
  # Query :
  type Query {
    getAllUsers: [User!]!
  }
`;
export default typeDefs;

// type Job {
// coverImage:  String!
// companyLogo: String!
// companyName: String!
// title:  String!
// contractType: String!
// localization: String!
// publishedAt: String!
// }
