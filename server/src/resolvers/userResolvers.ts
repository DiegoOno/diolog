import { IResolvers } from "mercurius";

import * as userController from "../controllers/userController";
import { IUserInput } from '../Interface/IUser';

export const userResolvers: IResolvers = {
  Query: {
    getUserById: async (_, args) => {
      const user = await userController.getUserById(args.id);
      return user;
    },
    getAllUsers: async () => {
      const users = await userController.getAllUsers();
      return users;
    }
  },
  Mutation: {
    createUser: async (_, args) => {
      try {
        const createdUser = await userController.createUser({...args.user as IUserInput});
  
        return createdUser;
      } catch(error) {
        console.error(error);
      }
    }
  }
};
