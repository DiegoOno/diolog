export const authTypeDefs = `
  type AuthResponse {
    user: User
    token: String
  }

  type Mutation {
    loginUser(email: String!, password: String!): AuthResponse
  }

`;
