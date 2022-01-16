import { jobList } from '../fakeData.js';

const resolvers = {
  Query: {
    getAllJobs() {
      return jobList;
    },
  },
  Mutation: {
    createJob(_parent, { data }) {
      const newJob = { ...data };
      jobList.push(newJob);
      return newJob;
    },
  },
};
export default resolvers;
