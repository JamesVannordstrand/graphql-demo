const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express();

const startServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    // Start the server 
    await server.start()

    // Add Middleware
    server.applyMiddleware({ app, path: '/graphql' });

    const PORT = 4000;
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
    });
};

startServer();