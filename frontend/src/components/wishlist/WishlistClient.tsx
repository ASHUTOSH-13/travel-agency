'use client'

import { useEffect, useState } from 'react'
import TourCard from '@/components/tours/TourCard'
import { Tour } from '@/types/tour'

const WISHLIST_KEY = 'lgb_wishlist'
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL

export default function WishlistClient() {
  const [wishlistIds, setWishlistIds] = useState<number[]>([])
  const [tours, setTours] = useState<Tour[]>([])
  const [loading, setLoading] = useState(true)

  // 🔁 Load wishlist IDs (ALWAYS as numbers)
  const loadWishlist = () => {
    const stored = JSON.parse(
      localStorage.getItem(WISHLIST_KEY) || '[]'
    ).map(Number)

    setWishlistIds(stored)
  }

  // 🧠 Init + cross-tab sync
  useEffect(() => {
    loadWishlist()

    const onStorage = (e: StorageEvent) => {
      if (e.key === WISHLIST_KEY) {
        loadWishlist()
      }
    }

    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  // 📡 Fetch ALL tours, then filter by wishlist IDs
  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true)

      // No wishlist → no fetch needed
      if (wishlistIds.length === 0) {
        setTours([])
        setLoading(false)
        return
      }

      const res = await fetch(
        `${API_BASE}/api/tours`,
        { cache: 'no-store' }
      )

      const allTours: Tour[] = await res.json()

      // ✅ FILTER HERE (this was missing)
      const wishlistedTours = allTours.filter(tour =>
        wishlistIds.includes(tour.id)
      )

      setTours(wishlistedTours)
      setLoading(false)
    }

    fetchTours()
  }, [wishlistIds])

  // ---------- UI STATES ----------
  if (loading) {
    return <p className="text-gray-600">Loading wishlist…</p>
  }

  if (wishlistIds.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">💔</div>
        <h3 className="text-2xl font-bold mb-2">
          Your wishlist is empty
        </h3>
        <p className="text-gray-600">
          Start exploring tours and tap ❤️ to save them
        </p>
      </div>
    )
  }

  if (tours.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">😕</div>
        <h3 className="text-2xl font-bold mb-2">
          Saved tours not found
        </h3>
        <p className="text-gray-600">
          Some saved tours may no longer be available.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {tours.map(tour => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  )
}
