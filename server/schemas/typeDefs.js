const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  // saveBook(content: bookInfo!): User
  saveBook(authors: [String], bookId: ID, title: String, description: String, image: String, Link: String): User
  removeBook(bookId: ID!): User
}
type User {
    _id: ID!
    username: String!
    bookCount: Int
    email: String!
    savedBooks: [Book]
  }
type Book {
    bookId: String!
    authors: [String]
    description: String!
    image: String
    link: String!
    title: String!
  }

  input bookInfo {
    authors: [String]
    description: String!
    title: String!
    bookId: String!
    image: String
    link: String!
  }

  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    allUsers: [User]
  }
 
`;

module.exports = typeDefs;