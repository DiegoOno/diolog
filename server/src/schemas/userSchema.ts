export const userTypeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    createdAt: Timestamp!
    updatedAt: Timestamp!
  }

  type Query {
    getUserById(id: ID!): User
    getAllUsers: [User]
  }
`;
