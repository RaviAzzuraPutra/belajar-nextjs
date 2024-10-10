import Link from "next/link"

export default function home() {
  return (
    <div>
      <h1 className="text-3xl text-bold">
        こんにちはNextJS
      </h1>
      <div className="flex justify-start gap-x-4">
        <Link href="/blog" className="text-blue-700 underline">Blog</Link>
        <Link href="/products" className="text-blue-700 underline">Products</Link>
      </div>
    </div>

  )
}

