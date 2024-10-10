"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react";

const navlink = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgotpassword" },
]

export default function AuthLayout({ children }: {
    children: React.ReactNode
}) {
    const pathname = usePathname();

    const [input, setInput] = useState("");

    return (
        <div>
            <div>
                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            </div>
            <div className="flex text-start gap-x-5">
                {navlink.map((link) => {
                    const isActive = pathname.startsWith(link.href)
                    return (
                        <Link href={link.href} key={link.name} className={isActive ? "font-bold text-black" : " text-blue-600 underline"}>
                            {link.name}
                        </Link>
                    )
                })}
            </div>
            {children}
        </div >
    )
}