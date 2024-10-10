"use client";
export default function ErrorBoundary({ error }: {
    error: Error;
}) {
    return (
        <h1>
            Error Woy!!! {error.message}
        </h1>
    )
}