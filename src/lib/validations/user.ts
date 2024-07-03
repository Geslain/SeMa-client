import * as z from "zod";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

export const userSchema = z.object({
  email: z.string().email({
    message: "user:email.validation.invalid",
  }),
  password: z.string().regex(passwordRegex, {
    message: "user:password.validation.wrongFormat",
  }),
});
