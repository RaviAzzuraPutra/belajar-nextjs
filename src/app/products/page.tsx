import Link from "next/link"

export default function ProductList() {
    const productid = 100;
    return (
        <div className="text-4xl">
            <h1>Product List</h1>
            <ul>
                <li>
                    <Link href="products/3">三 (さん, san)</Link>
                </li>
                <li>
                    <Link href="products/4">四 (し, shi / よん, yon)</Link>
                </li>
                <li>
                    <Link href="products/5">五 (ご, go)</Link>
                </li>
                <li>
                    <Link href={`products/${productid}`}>{productid}</Link>
                </li>
            </ul>
            <Link href="/" className="text-blue-700 underline">Home</Link>
        </div>

    )
}