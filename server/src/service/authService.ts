import * as userRepository from "../repositories/userRepository";
import bcrypt from "bcryptjs";

export const authenticateUser = async (email: string, password: string) => {
  const user = await userRepository.getUserByEmail(email);
  if (!user) {
    return null;
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return null;
  }
  return user;
}