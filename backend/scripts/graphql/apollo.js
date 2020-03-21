const {ApolloServer} = require("apollo-server-express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => {
        const auth = req.auth;
        return {auth};
    }
});

module.exports = apolloServer;
