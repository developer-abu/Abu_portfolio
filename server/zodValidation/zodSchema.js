
import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters")
    .max(80, "Name is too long"),

  subject: z
    .string()
    .trim()
    .min(5, "Message must be at least 5 characters")
    .max(35, "Message is too long"),
    
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(40, "Email is too long"),

  message: z
    .string()
    .trim()
    .min(20, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
});
