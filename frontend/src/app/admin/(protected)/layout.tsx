import { ReactNode } from 'react'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import LogoutButton from '@/app/admin/LogoutButton'


export default async function AdminProtectedLayout({
  children,
}: {
  children: ReactNode
}) {
  const cookieStore = await cookies()
  console.log('SERVER COOKIES:', cookieStore.getAll())
  const isAuthenticated = cookieStore.get('admin_auth')

  if (!isAuthenticated) {
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl p-6">
        <h2 className="text-2xl font-bold mb-10 text-blue-600">
          Admin Panel
        </h2>

        <nav className="space-y-4">
  <Link
    href="/admin/enquiries"
    className="block px-4 py-3 rounded-xl bg-blue-50 text-blue-700 font-semibold"
  >
    Enquiries
  </Link>

  <LogoutButton />
</nav>
      </aside>

      <main className="flex-1 p-10">{children}</main>
    </div>
  )
}
