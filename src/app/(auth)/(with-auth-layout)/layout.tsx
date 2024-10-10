export default function AuthLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div>
            <h1 className="text-3xl bg-purple-200 text-red-700">
                Inner Layout
            </h1>
            {children}
        </div>
    )
}