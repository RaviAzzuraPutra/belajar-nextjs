"use client";
export default function ErrorBoundary({ error, reset }: {
    error: Error,
    reset: () => void
}) {
    return (
        <div>
            <h1>
                Error Woy!!! {error.message}
            </h1>
            <button onClick={reset} className="text-blue-600 underline">Try again!!!!</button>
        </div>
    )
}