import { z } from 'zod';

export const SignupFormSchema = z.object({
    username: z.string().min(4, { message: 'Username is required' }).trim(),
    email: z.string().email({ message: 'Invalid email address' }).trim(),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }).trim(),
});

export const LoginFormSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }).trim(),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }).trim(),
});

export type FormState = | {
    errors?: {
        username?: string[];
        email?: string[];
        password?: string[];
    }
    message?: string;
} | undefined;
