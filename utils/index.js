import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import typeDefs from './schema/typeDefs.js';
import resolvers from './schema/resolvers.js';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.info('Server Running on port 4000, get gql stuio : http://localhost:4000/graphql');
});
