export default function ProductDetails({ params }: {
    params: {
        productid: string
    }
}) {
    return (
        <div>
            <h1>Detail Product {params.productid}</h1>
        </div>
    )
}
