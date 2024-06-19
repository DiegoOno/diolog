import * as AuthService from "../service/authService";
import * as UserValidation from "../validation/userValidation";

export const loginUser = async (email: string, password: string, app: any) => {
  try {
    UserValidation.loginUserSchema.parse({ email, password });

    const user = await AuthService.authenticateUser(email, password);

    const token = app.jwt.sign(
      {
        id: user.id,
        email: user.email
      },
      process.env.JWT_SECRET as string
    );

    return { user, token };
  } catch(error) {
    console.error(error);
  }
}
