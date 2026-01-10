import WishlistClient from '@/components/wishlist/WishlistClient'

export const metadata = {
  title: 'My Wishlist | LetsGoBuddy',
  description: 'Tours you have saved on LetsGoBuddy',
}

export default function WishlistPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-2">My Wishlist ❤️</h1>
        <p className="text-gray-600 mb-8">
          Tours you’ve saved to plan later
        </p>

        <WishlistClient />
      </div>
    </main>
  )
}
