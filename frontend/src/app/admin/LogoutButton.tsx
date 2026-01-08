'use client'

import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/admin/logout', {
      method: 'POST',
      credentials: 'include',
    })

    router.replace('/admin/login')
  }

  return (
    <button
      onClick={handleLogout}
      className="block w-full text-left px-4 py-3 rounded-xl text-red-600 font-semibold hover:bg-red-50"
    >
      Logout
    </button>
  )
}
