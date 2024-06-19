import * as userRepository from "../repositories/userRepository";
import bcrypt from "bcryptjs";

export const authenticateUser = async (email: string, password: string) => {
  const user = await userRepository.getUserByEmail(email);
  if (!user) {
    throw new Error("User not found");
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  const { name, birthday, nickName, id } = user;

  return {
    name,
    email,
    birthday,
    nickName,
    id
  };
}