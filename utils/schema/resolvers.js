import users from '../fakeData.js';

const resolvers = {
  Query: {
    getAllUsers() {
      return users;
    },
  },
};
export default resolvers;
