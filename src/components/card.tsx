const card = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="p-10 m-2 shadow-md border flex justify-items-center align-middle border-purple-500">
            {children}
        </div>
    )
}

export default card