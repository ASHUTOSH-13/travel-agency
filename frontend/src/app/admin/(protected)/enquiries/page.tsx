import { headers, cookies } from 'next/headers'
import { notFound } from 'next/navigation'

interface Enquiry {
  id: number
  full_name: string
  phone: string
  email: string
  travelers: number
  preferred_dates: string
  tour_title: string
  created_at: string
}

async function getEnquiries(): Promise<Enquiry[]> {
  const headersList = await headers()
  const cookieStore = await cookies()

  const host = headersList.get('host')
  if (!host) return []

  const protocol =
    process.env.NODE_ENV === 'development' ? 'http' : 'https'

  // 🔑 MANUALLY FORWARD COOKIE
  const cookieHeader = cookieStore
    .getAll()
    .map(c => `${c.name}=${c.value}`)
    .join('; ')

  const res = await fetch(
    `${protocol}://${host}/api/admin/enquiries`,
    {
      cache: 'no-store',
      headers: {
        cookie: cookieHeader,
      },
    }
  )

  if (!res.ok) return []
  return res.json()
}

export default async function AdminEnquiriesPage() {
  const enquiries = await getEnquiries()

  if (!enquiries) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      {/* UI unchanged */}
    </main>
  )
}
