"use client";
import { notFound } from 'next/navigation';

const randomINT = (count: number) => {
    return Math.floor(Math.random() * count);
}

export default function ReviewProductDetail({ params }: {
    params: {
        reviewID: string,
        productid: string
    }
}) {
    const random = randomINT(2);

    if (random === 1) {
        throw new Error("Error Loading Review")
    }

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