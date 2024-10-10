"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"

const navlink = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgotpassword" },
]

export default function AuthLayout({ children }: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    return (
        <div>
            <div className="flex text-start gap-x-5 text-blue-600 underline">
                {navlink.map((link) => {
                    const isActive = pathname.startsWith(link.href)
                    return (
                        <Link href={link.href} key={link.name} className={isActive ? "font-bold text-black" : undefined}>
                            {link.name}
                        </Link>
                    )
                })}
            </div>
            {children}
        </div >
    )
}