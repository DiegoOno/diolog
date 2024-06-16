export const userTypeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    birthday: LocalDate!
    nickName: String
    createdAt: Timestamp!
    updatedAt: Timestamp!
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
    birthday: LocalDate!
    nickName: String
  }

  type Query {
    getUserById(id: ID!): User
    getAllUsers: [User]
  }

  type Mutation {
    createUser(user: UserInput!): User
  }
`;
