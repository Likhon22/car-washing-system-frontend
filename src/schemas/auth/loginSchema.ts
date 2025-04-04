import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
export default loginSchema;
