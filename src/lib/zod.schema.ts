import * as z from "zod";

export const loginZodSchema = z.object({
  email: z.string().trim().pipe(z.email("Invalid email format")),
  password: z
    .string()
    .min(6, "Password. must be at least 6 characters long")
    .max(32),
});

export const registerZodSchema = z
  .object({
    email: z.string().trim().pipe(z.email()),
    displayName: z
      .string()
      .min(1, "Display name is required")
      .max(50, "Display name must be at most 50 characters long"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Esto hace que el error aparezca en el campo confirmPassword
  });

export const profileZodSchema = z.object({
  displayName: z
    .string()
    .min(1, "Display name is required")
    .max(50, "Display name must be at most 50 caracteres long"),
  photoUrl: z.union([z.url("Invalid URL format"), z.literal("")]).optional(),
});

export type LoginZodSchemaType = z.infer<typeof loginZodSchema>;
export type RegisterZodSchemaType = z.infer<typeof registerZodSchema>;
export type ProfileZodSchemaType = z.infer<typeof profileZodSchema>;
