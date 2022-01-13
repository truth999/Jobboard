import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    name: String!
    age: Int!
    job: String!
  }
  type Job {
    id: ID!
    coverImage: String!
    companyLogo: String!
    companyName: String!
    title: String!
    contractType: String!
    localization: String!
    publishedAt: String!
  }
  # Inputs :
  input CreatJobInput {
    id: ID!
    coverImage: String!
    companyLogo: String!
    companyName: String!
    title: String!
    contractType: String!
    localization: String!
    publishedAt: String!
  }
  # Query :
  type Query {
    getAllUsers: [User!]!
    getAllJobs: [Job!]!
  }
  # Mutations :
  type Mutation {
    createUser(name: String!, age: Int!, job: String!): User!
    createJob(
      id: ID!
      coverImage: String!
      companyLogo: String!
      companyName: String!
      title: String!
      contractType: String!
      localization: String!
      publishedAt: String!
    ): Job!
  }
`;
export default typeDefs;
