import { IUserInput } from '../Interface/IUser';
import prisma from "../config/db";

export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: {
      id
    }
  });
};

export const getUsers = async () => {
  return await prisma.user.findMany();
}

export const createUser = async (user: IUserInput) => {
  return await prisma.user.create({
    data: user
  });
};

export const updateUser = async (id: string, user: any) => {
  return await prisma.user.update({
    where: {
      id
    },
    data: user
  });
};

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email
    }
  });
};
