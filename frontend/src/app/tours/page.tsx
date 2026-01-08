'use client'

import { useState, useEffect } from 'react'
import TourCard from '@/components/tours/TourCard'
import { Tour } from '@/types/tour'

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL

export default function ToursPage() {
  const [tours, setTours] = useState<Tour[]>([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true)
      setError(null)

      try {
        const url =
          filter === 'all'
            ? `${API_BASE}/api/tours`
            : `${API_BASE}/api/tours?category_slug=${encodeURIComponent(filter)}`

        const res = await fetch(url, { cache: 'no-store' })

        if (!res.ok) {
          throw new Error(`Failed to fetch tours (${res.status})`)
        }

        const data = await res.json()
        setTours(data)
      } catch (err) {
        console.error(err)
        setError('Unable to load tours. Please try again.')
        setTours([])
      } finally {
        setLoading(false)
      }
    }

    fetchTours()
  }, [filter])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg text-gray-600">
        Loading tours…
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-lg">
        {error}
      </div>
    )
  }

  return (
    <main className="bg-gray-50">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-28 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Explore Our Tours
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Hand-crafted travel experiences across India’s most loved destinations
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['all', 'himachal', 'uttarakhand', 'rajasthan', 'pilgrimage'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 shadow hover:bg-gray-100'
              }`}
            >
              {cat === 'all'
                ? 'All'
                : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Tours Grid */}
        {tours.length === 0 ? (
          <div className="text-center text-gray-500 text-lg py-20">
            No tours available for this category.
          </div>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
