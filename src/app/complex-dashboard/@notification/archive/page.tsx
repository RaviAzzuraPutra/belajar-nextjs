import Card from '@/components/card'
import Link from 'next/link'

export default function ArchiveNotification() {
    return (
        <Card>
            <div>
                Archive Notification
            </div>
            <Link href="/complex-dashboard" className='ml-4 text-blue-600 underline'>Default</Link>
        </Card>
    )
}