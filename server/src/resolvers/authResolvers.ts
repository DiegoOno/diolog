import * as AuthController from "../controllers/authController";
import { IResolvers } from "mercurius";

export const authResolvers: IResolvers = {
  Mutation: {
    loginUser: async (_, args, { app }) => {
      try {
        const { email, password } = args;
        return await AuthController.loginUser(email, password, app);
      } catch (error) {
        return error;
      }
    },
  },
};
