import { createUser, updateUser, getUserById } from "../repositories/userRepository";

export const createUserService = async (user: any) => {
  return await createUser(user);
};

export const updateUserService = async (id: string, user: any) => {
  return await updateUser(id, user);
};

export const getUserByIdService = async (id: string) => {
  return await getUserById(id);
};
