import Card from '@/components/card'
import Link from 'next/link'

export default function Notification() {
    return (
        <Card>
            <div>
                Notification
            </div>
            <Link href="/complex-dashboard/archive" className='ml-4 text-blue-600 underline'>Archived</Link>
        </Card>
    )
}