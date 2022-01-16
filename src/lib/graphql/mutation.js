import { gql } from '@apollo/client';

export const CREATE_JOB = gql`
  mutation CreateJob($data: CreateJobInput) {
    createJob(data: $data) {
      id
      publishedAt
      title
      companyName
      contractType
      localization
      coverImage
      companyLogo
    }
  }
`;
