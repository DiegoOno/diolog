import bcrypt from "bcryptjs";

import { IUserInput } from '../Interface/IUser';
import * as UserService from "../service/userService";
import * as UserValidation from "../validation/userValidation";

export const createUser = async (user: IUserInput) => {
  try {
    UserValidation.createUserSchema.parse(user);
  } catch (error) {
    return JSON.stringify(error);
  }

  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
  user.birthday = new Date(user.birthday);

  const createdUser = await UserService.createUserService(user);
  return createdUser;
};

export const updateUser = async (req: any, res: any) => {
  const id = req.params.id;
  const user = req.body;
  try {
    UserValidation.updateUserSchema.parse(user);
  } catch (error) {
    res.status(400).json(error);
  }
  const updatedUser = await UserService.updateUserService(id, user);
  res.status(200).json(updatedUser);
};

export const getUserById = async (req: any) => {
  const id = req.params.id;
  const user = await UserService.getUserByIdService(id);
  return JSON.stringify(user);
};

export const getAllUsers = async () => {
  const users = await UserService.getAllUsersService();
  return users;
}