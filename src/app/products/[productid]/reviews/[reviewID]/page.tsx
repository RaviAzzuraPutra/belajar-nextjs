export default function ReviewProductDetail({ params }: {
    params: {
        reviewID: string,
        productid: string
    }
}) {
    return (
        <div>
            <h1>
                Review {params.reviewID} for products {params.productid}
            </h1>
        </div>
    )
}