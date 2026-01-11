'use client'

import { useState, useEffect, useRef } from 'react'
import TourCard from '@/components/tours/TourCard'
import CustomPackageModal from '@/components/custom-package/CustomPackageModal'
import { Tour } from '@/types/tour'
import { Search, SlidersHorizontal, MapPin, Sparkles, TrendingUp, Award, Grid3x3, List } from 'lucide-react'
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL

const categories = [
  { slug: 'all', name: 'All Tours', icon: '🌍' },
  { slug: 'himachal', name: 'Himachal', icon: '🏔️' },
  { slug: 'uttarakhand', name: 'Uttarakhand', icon: '⛰️' },
  { slug: 'rajasthan', name: 'Rajasthan', icon: '🏰' },
  { slug: 'pilgrimage', name: 'Pilgrimage', icon: '🕉️' },
]

export default function ToursPage() {
  const [tours, setTours] = useState<Tour[]>([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const resultsRef = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)

const scrollToResults = () => {
  setTimeout(() => {
    resultsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, 100)
}


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

  // Filter tours based on search query
  const normalizedQuery = searchQuery.toLowerCase().trim()

const filteredTours = tours.filter((tour) => {
  if (!normalizedQuery) return true

  return (
    tour.title.toLowerCase().includes(normalizedQuery) ||
    tour.destination_name?.toLowerCase().includes(normalizedQuery) ||
    tour.category_name?.toLowerCase().includes(normalizedQuery) ||
    tour.category_slug?.toLowerCase().includes(normalizedQuery) ||
    tour.short_description?.toLowerCase().includes(normalizedQuery)
  )
})

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Skeleton */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-32">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-12 bg-white/20 rounded-lg w-96 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-white/20 rounded-lg w-64 mx-auto animate-pulse"></div>
          </div>
        </div>
        
        {/* Content Skeleton */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😞</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
          <p className="text-red-600 text-lg mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-24 md:py-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center text-white mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Explore Amazing Destinations</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Discover Your Next
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Adventure
              </span>
            </h1>
            
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95 leading-relaxed">
              Hand-crafted travel experiences across India's most breathtaking destinations. 
              From mountains to heritage, find your perfect getaway.
            </p>
          </div>

          {/* Search Bar */}
          {/* Search Bar */}
<div className="max-w-3xl mx-auto">
  <div className="bg-white rounded-2xl shadow-2xl p-3 flex gap-3">
    <div className="flex-1 flex items-center gap-3 bg-gray-50 rounded-xl px-4">
      <Search className="w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search tours, destinations..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            scrollToResults()
          }
        }}
        className="flex-1 bg-transparent py-3 outline-none text-gray-900 placeholder-gray-500"
      />
    </div>

    <button
      onClick={scrollToResults}
      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
    >
      Search
    </button>
  </div>
</div>

        </div>
      </section>

      {/* ================= STATS BAR ================= */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-blue-600 mb-2">
                <Award className="w-5 h-5" />
                <span className="text-3xl font-bold">{tours.length}+</span>
              </div>
              <p className="text-gray-600 text-sm">Curated Tours</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-green-600 mb-2">
                <TrendingUp className="w-5 h-5" />
                <span className="text-3xl font-bold">15K+</span>
              </div>
              <p className="text-gray-600 text-sm">Happy Travelers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-orange-600 mb-2">
                <MapPin className="w-5 h-5" />
                <span className="text-3xl font-bold">50+</span>
              </div>
              <p className="text-gray-600 text-sm">Destinations</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-purple-600 mb-2">
                <Sparkles className="w-5 h-5" />
                <span className="text-3xl font-bold">4.8★</span>
              </div>
              <p className="text-gray-600 text-sm">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section
  ref={resultsRef}
  className="max-w-7xl mx-auto px-4 py-12"
>
        {/* Filters & Controls */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setFilter(cat.slug)}
                  className={`group flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                    filter === cat.slug
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 shadow-sm hover:shadow-md hover:scale-105 border border-gray-200'
                  }`}
                >
                  <span className="text-lg">{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm border border-gray-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-all ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-all ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">{filteredTours.length}</span> tours found
              {searchQuery && ` for "${searchQuery}"`}
            </p>
            {filter !== 'all' && (
              <button
                onClick={() => setFilter('all')}
                className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Tours Grid/List */}
        {filteredTours.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No tours found</h3>
            <p className="text-gray-600 mb-6">
              {searchQuery
                ? `No results for "${searchQuery}". Try different keywords.`
                : 'No tours available for this category.'}
            </p>
            {(searchQuery || filter !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('')
                  setFilter('all')
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all"
              >
                Show All Tours
              </button>
            )}
          </div>
        ) : (
          <div
            className={
              viewMode === 'grid'
                ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'space-y-6'
            }
          >
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} viewMode={viewMode} />
            ))}
          </div>
        )}
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-gradient-to-r from-orange-500 to-pink-600 py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg opacity-95 mb-8">
            Let us create a custom tour package just for you. Our travel experts are here to help!
          </p>
          <button
        onClick={() => setOpen(true)}
        className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
      >
        Request Custom Package
      </button>
      <CustomPackageModal open={open} onClose={() => setOpen(false)} />
        </div>
      </section>
    </main>
  )
}