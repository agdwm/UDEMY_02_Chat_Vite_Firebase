import * as z from "zod";

export const loginZodSchema = z.object({
  email: z.string().trim().pipe(z.email("Invalid email format")),
  password: z
    .string()
    .min(6, "Password. must be at least 6 characters long")
    .max(32),
});

export type LoginZodSchemaType = z.infer<typeof loginZodSchema>;
