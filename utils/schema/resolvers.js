import { users, jobList } from '../fakeData.js';
import { v4 as uuidv4 } from 'uuid';

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
      const newJob = { id: uuidv4(), ...args };
      console.log('args', args);
      console.log('newJob', newJob);
      jobList.push(newJob);
      return newJob;
    },
  },
};
export default resolvers;
