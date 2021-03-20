const { ApolloServer } = require('apollo-server')
const fs = require('fs')
const path = require('path')
const resolvers = require('../resolvers')

module.exports = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers,
  cors: true,
})
