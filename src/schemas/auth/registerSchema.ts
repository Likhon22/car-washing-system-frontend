import { z } from "zod";

const registerSchema = z.object({
  // Personal Information
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "First name should only contain letters"),

  middleName: z
    .string()
    .max(50, "Middle name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "Middle name should only contain letters")
    .optional(),

  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "Last name should only contain letters"),

  // Authentication Information
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email is too short")
    .max(255, "Email cannot exceed 255 characters"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password cannot exceed 100 characters"),

  // Contact Information
  phone: z
    .string()
    .regex(/^\d{11}$/, "Please enter a valid 11-digit phone number"),

  profileImg: z.string().optional(),

  // Address Information
  city: z
    .string()
    .min(2, "City name must be at least 2 characters")
    .max(100, "City name cannot exceed 100 characters"),

  area: z
    .string()
    .min(2, "Area name must be at least 2 characters")
    .max(100, "Area name cannot exceed 100 characters"),

  houseNo: z
    .string()
    .min(1, "House number is required")
    .max(20, "House number cannot exceed 20 characters"),

  street: z
    .string()
    .min(2, "Street name must be at least 2 characters")
    .max(100, "Street name cannot exceed 100 characters"),

  streetNo: z
    .string()
    .min(1, "Street number is required")
    .max(20, "Street number cannot exceed 20 characters"),
});
export type TRegisterSchema = z.infer<typeof registerSchema>;
export default registerSchema;
