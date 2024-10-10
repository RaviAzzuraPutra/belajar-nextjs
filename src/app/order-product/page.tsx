"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing Your Order");
        router.push("/");
    }
    return (
        <div>
            <h1>
                Order Product
            </h1>
            <button onClick={handleClick} className="bg-blue-200 text-green-700 rounded-sm p-2 mt-4">Place Order</button>
        </div>
    )
}