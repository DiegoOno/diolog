import * as UserService from "../service/userService";
import * as UserValidation from "../validation/userValidation";

export const createUser = async (req: any, res: any) => {
  const user = req.body;
  try {
    UserValidation.createUserSchema.parse(user);
  } catch (error) {
    res.status(400).json(error);
  }
  const createdUser = await UserService.createUserService(user);
  res.status(200).json(createdUser);
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

export const getUserById = async (req: any, res: any) => {
  const id = req.params.id;
  const user = await UserService.getUserByIdService(id);
  res.status(200).json(user);
};
