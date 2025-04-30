import { z } from "zod";

// Each schema is now separate without nesting
export const personalInfoSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
});

export const addressInfoSchema = z.object({
  houseno: z.string().min(1, { message: "House number is required" }),
  city: z.string().min(1, { message: "City is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  state: z.string().min(1, { message: "State is required" }),
  pincode: z.string().min(1, { message: "Pin Code is required" }).refine((val)=> !isNaN(Number(val)), {
    message: "Must be numericals."
  }),
});

export const educationSchema = z.object({
  degree: z.string().min(1, { message: "Degree is required" }),
  year: z.string()
    .min(1, { message: "Year is required" })
    .refine(val => !isNaN(val) && parseInt(val) > 1900 && parseInt(val) <= new Date().getFullYear(), {
      message: "Please enter a valid year",
    }),
  stream: z.string().min(1, { message: "Stream is required" }),
});

export const additionalInfoSchema = z.object({
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  confirmpassword: z.string().min(1, { message: "Please confirm your password" }),
}).refine(data => data.password === data.confirmpassword, {
  message: "Passwords do not match",
  path: ["confirmpassword"],
});