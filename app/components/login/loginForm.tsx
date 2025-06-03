'use client';

import { signInAction } from "@/lib/actions/AuthActions";
import { Button, Input } from "@heroui/react";
import Link from "next/link";
import { useActionState } from "react";

export function LoginForm() {
    const [state, action, pending] = useActionState(signInAction, undefined);

    return (
        <form action={action}>
            <div className="flex flex-col w-2/5 mx-auto mx-auto space-y-4">
                <h1 className="font-bold text-2xl mx-auto">Sign in!</h1>
                <Input name="email" type="email" label="email" />
                <Input name="password" type="password" label="password" />
                <Button type="submit" disabled={pending} color="primary">Login</Button>
                <Link href="/signup" className="text-blue-500 hover:underline">Sign up here!</Link>
            </div>
        </form>
    )
}