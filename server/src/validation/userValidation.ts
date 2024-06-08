import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, "Password should be more than 8 characters")
    .max(32, "Password should be less than 32 characters"),
});

export const updateUserSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),
});

export const changePasswordSchema = z.object({
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, "Password should be more than 8 characters")
    .max(32, "Password should be less than 32 characters"),
});

export const loginUserSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, "Password should be more than 8 characters")
    .max(32, "Password should be less than 32 characters"),
});
