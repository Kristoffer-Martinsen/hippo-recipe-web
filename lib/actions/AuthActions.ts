'use server';
import { env } from "process";
import { SignupFormSchema, FormState, LoginFormSchema } from "../validation";

export async function signInAction(state: FormState, formData:FormData) {
    const url = `${env.RECIPE_API_LOCAL}/Auth/login`;
    
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });

    if(!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { email, password } = validatedFields.data;
    try {
        const res = await fetch(url, {
            method: 'POST',
            redirect: 'follow',
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: {
                'content-type': 'application/json',
            },
        });
        if (!res.ok) {
            return { message: "Something went wrong during sign in." };
        }
        
        const data = await res.json();

        if (data.token) {
            localStorage.setItem('token', data.token);
            return { token: data.token };
        } 
    } catch (error) {
        console.error(error);
        return { message: 'An error occurred during sign in.' };
    }
}


export async function signUpAction(state: FormState, formData: FormData) {
    const url = `${env.RECIPE_API_LOCAL}/Auth/register`;
    const validatedFields = SignupFormSchema.safeParse({
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
    });

    if(!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { username, email, password } = validatedFields.data;
    
    try {
        const res = await fetch(url, {
            method: 'POST',
            redirect: 'follow',
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
            headers: {
                'content-type': 'application/json',
            },
        });

        if (!res.ok) {
            throw new Error('Could not sign up');
        }
    } catch (error) {
        console.error(error);
        return { message: 'An error occurred during sign up.' };
    }
}