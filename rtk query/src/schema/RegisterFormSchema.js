import * as z from 'zod';

export const registerForm = z.object({
    avatar: z
      .any()
      .refine((file) => file?.[0], 'Avatar is required'),
    name: z.string().min(2, 'Name is required'),
    mobile: z.string().regex(/^\d{10,}$/, 'Mobile must be at least 10 digits'),
    email: z.string().email('Invalid email'),
    country: z.string().min(1, 'Country is required'),
    gender: z.enum(['male', 'female', 'other'], { 
      required_error: 'Select gender'
    }),
  });