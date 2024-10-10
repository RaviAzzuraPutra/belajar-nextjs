const randomINT = (count: number) => {
    return Math.floor(Math.random() * count);
}


export default function ProductDetailsLayouts({ children }: {
    children: React.ReactNode
}) {
    const random = randomINT(2);

    if (random === 1) {
        throw new Error("Error Loading Products")
    }

    return (
        <div className="text-2xl">
            {children}
            <h2>
                Products
            </h2>
        </div>
    )
}