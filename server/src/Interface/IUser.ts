export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  birthday: Date;
  nickname: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserInput {
  name: string;
  email: string;
  password: string;
  birthday: Date;
  nickName: string;
}