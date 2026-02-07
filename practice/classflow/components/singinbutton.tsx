"use client"
import { authClient } from "@/lib/auth-client";

const signin = async () => await authClient.signIn.social({
    provider: "google",
    callbackURL: "/dashboard",
    errorCallbackURL: "/error",
    newUserCallbackURL: "/welcome",
    disableRedirect: false,
});

export default function SigninButton({ className }: {
    className: string
}) {
    return <button className={className} onClick={() => signin()}>
        <div>
            Sign In
        </div>
    </button>
}