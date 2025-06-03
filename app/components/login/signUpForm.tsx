'use client';

import { signUpAction } from "@/lib/actions/AuthActions";
import { Button, Input } from "@heroui/react";
import Link from "next/link";
import { useActionState } from 'react'

export default function SignUpForm() {
    const [state, action, pending] = useActionState(signUpAction, undefined);
    return (
        <form action={ action}>
            <div className="flex flex-col w-2/5 mx-auto mx-auto space-y-4">
                <h1 className="font-bold text-2xl mx-auto">Sign Up!</h1>
                <Input name="username" type="username" label="username" />
                {state?.errors?.username && <p>{state.errors.username}</p>}
                <Input name="email" type="email" label="email" />
                {state?.errors?.email && <p>{state.errors.email}</p>}
                <Input name="password" type="password" label="password" />
                {state?.errors?.password && (
                    <div>
                        <p>Password must:</p>
                        <ul>
                            {state.errors.password.map((error) => (
                                <li key={error}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <Button type="submit" disabled={pending} color="primary">Sign up</Button>
                <Link href="/login" className="text-blue-500 hover:underline">Sign up here!</Link>
            </div>
        </form>
    );
}