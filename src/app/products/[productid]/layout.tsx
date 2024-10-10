export default function ProductDetailsLayouts({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className="text-2xl">
            {children}
            <h2>
                Products
            </h2>
        </div>
    )
}