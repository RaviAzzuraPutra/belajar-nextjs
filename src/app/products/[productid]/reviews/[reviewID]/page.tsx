import { notFound } from 'next/navigation'

export default function ReviewProductDetail({ params }: {
    params: {
        reviewID: string,
        productid: string
    }
}) {
    if (parseInt(params.reviewID) > 1000) {
        return notFound();
    }
    return (
        <div>
            <h1>
                Review {params.reviewID} for products {params.productid}
            </h1>
        </div>
    )
}