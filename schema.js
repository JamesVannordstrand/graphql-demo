const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }

  type Query {
    hello: String
    books: [Book]
    authors: [Author]
  }
`;

module.exports = typeDefs;
