import { users, jobList } from '../fakeData.js';

const resolvers = {
  Query: {
    getAllUsers() {
      return users;
    },
    getAllJobs() {
      return jobList;
    },
  },
  Mutation: {
    createUser(_parent, args) {
      const newUser = args;
      users.push(newUser);
      return newUser;
    },
    createJob(_parent, args) {
      const newJob = args;
      jobList.push(newJob);
      return newJob;
    },
  },
};
export default resolvers;
