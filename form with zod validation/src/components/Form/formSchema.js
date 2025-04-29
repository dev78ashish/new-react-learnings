import * as z from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name cannot exceed 50 characters" }),

  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" }),

  mobile: z
  .string()
  .trim()
  .min(10, { message: "Phone number must be at least 10 digits" })
  .max(15, { message: "Phone number cannot exceed 15 digits" })
  // Check that the phone number starts with a country code (e.g., +1, +44)
  .regex(/^\+?[0-9]{1,4}[-\s]?\(?[0-9]{1,3}\)?[-\s]?[0-9]{3,15}$/, { message: "Please enter a valid phone number" }),

  doj: z
    .date({
      required_error: "Please select your date of joining",
      invalid_type_error: "Please provide a valid date",
    })
    .refine((date) => date < new Date(), {
      message: "Date of birth must be in the past",
    })
    .refine((date) => date > new Date("1900-01-01"), {
      message: "Date of birth must be after 1900",
    }),

  gender: z.enum(["male", "female", "other"], {
    message: "Please select your gender",
  }),

  age: z.number({
    required_error: "Age is required",
    invalid_type_error: "Age must be a number",
  })
  .int()
  .min(18, { message: "You must be at least 18 years old" })
  .max(60, { message: "Age must not exceed 60 years" }),

  percentage:  z
  .string({
    message: "Percentage is required",
  })
  .min(0, { message: "Percentage must be at least 1" })
  .max(100, { message: "Percentage cannot be greater than 100" })
  .refine((val) => val >= 0 && val <= 100, {
    message: "Percentage must be between 1 and 100",
  }),

  address: z
    .string()
    .trim()
    .min(5, { message: "Address must be at least 5 characters" }),

  city: z
    .string()
    .trim()
    .min(2, { message: "City name must be at least 2 characters" }),

  country: z.enum(["india", "uk", "australia"], {
    message: "Please select your country",
  }),

  pincode: z
    .string()
    .trim()
    .regex(/^\d{4,6}$/, { message: "Pincode must be 4 to 6 digits" }),

  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});