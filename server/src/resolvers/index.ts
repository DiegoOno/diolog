import { userResolvers } from "./userResolvers";
import { authResolvers } from "./authResolvers";

export const resolvers = {
  ...userResolvers,
  ...authResolvers,
}
