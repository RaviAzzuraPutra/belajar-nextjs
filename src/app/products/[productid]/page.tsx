import { Metadata } from "next"
import Link from "next/link"

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`Keyboard ${params.productid}`)
        }, 100)
    })
    return {
        title: `Detail Products ${title}`,
    }
}

type Props = {
    params: {
        productid: string
    }
}

export default function ProductDetails({ params }: Props) {
    return (
        <div>
            <h1>Detail Product {params.productid}</h1>

            <Link href="/products" className="text-blue-700 underline">Back</Link>
        </div>
    )
}
