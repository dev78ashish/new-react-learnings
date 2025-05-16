import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(5, { message: "Password must be at least 5 characters" }),
})


export const changePasswordSchema = z.object({
    email: z.string().email("Invalid email address"),
})


export const blogSchema = z.object({
    title: z.string().min(1, "Title is required"),
    heading: z.string().min(1, "Heading is required"),
    description: z.string().min(1, "Description is required"),
    image: z
        .any()
        .optional()
});