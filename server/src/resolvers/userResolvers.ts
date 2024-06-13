import { IResolvers } from "mercurius";
import * as userService from "../service/userService";

export const userResolvers: IResolvers = {
  Query: {
    getUserById: async (_, args) => {
      const user = await userService.getUserByIdService(args.id);
      return user;
    },
    getAllUsers: async () => {
      const users = await userService.getAllUsersService();
      return users;
    }
  }
};
