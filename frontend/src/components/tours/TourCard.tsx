'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Tour } from '@/types/tour'

interface Props {
  tour: Tour
  viewMode?: 'grid' | 'list'
}

const PLACEHOLDER = '/placeholder-tour.jpg'

// Custom SVG Icons
const Icons = {
  MapPin: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Clock: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Users: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Star: ({ filled }: { filled?: boolean }) => (
    <svg className="w-4 h-4" fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  Heart: ({ filled }: { filled?: boolean }) => (
    <svg className="w-4 h-4" fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  Share: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  ),
  WhatsApp: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function TourCard({ tour }: Props) {
  // ================= IMAGE SANITIZATION =================
  const images = (() => {
    const rawImages = tour.gallery_images ?? []

    // 1. Clean URLs (remove params, filter invalid)
    const cleaned = rawImages
      .filter((img): img is string => Boolean(img && img.startsWith('http')))
      .map(img => img.split('?')[0])

    // 2. Remove duplicates while preserving order (hero stays first)
    const unique = Array.from(new Set(cleaned))

    // 3. Fallback handling
    if (unique.length > 0) return unique
    if (tour.hero_image_url) return [tour.hero_image_url.split('?')[0]]
    return [PLACEHOLDER]
  })()

  const [currentIndex, setCurrentIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  // ================= SLIDESHOW LOGIC =================
  useEffect(() => {
    if (!hovered || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [hovered, images])

  const handleLeave = () => {
    setHovered(false)
    setCurrentIndex(0)
  }


  // Mock data for demo (remove in production)
  const mockData = {
  // Duration: derived from backend fields
  duration:
    tour.duration_days
      ? `${tour.duration_days} Days`
      : undefined,

  // Location: keep existing fallback
  location:  tour.destination_name || tour.category_name,

  // Rating: backend first, fallback later
  rating: tour.rating ?? 4.8,

  // Group size: derived from backend fields
  group_size:
    tour.min_group_size && tour.max_group_size
      ? `${tour.min_group_size}-${tour.max_group_size} people`
      : undefined,

  // Highlights (optional, future-ready)
  highlights: tour.highlights ?? []
}


  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
    >
      {/* ================= IMAGE SECTION ================= */}
      <div className="relative h-72 overflow-hidden">
        {/* Image Slideshow */}
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={tour.title}
            fill
            className={`object-cover absolute inset-0 transition-all duration-700 ${
              index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            priority={index === 0}
            onError={(e) => {
              e.currentTarget.src = PLACEHOLDER
            }}
          />
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Top Bar - Category and Actions */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
          {/* Left Side - Category Badge */}
          <span className="bg-white/95 backdrop-blur-sm text-blue-600 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide shadow-lg">
            {tour.category_name}
          </span>

          {/* Right Side - Action Buttons Only */}
          <div className="flex items-start gap-2">
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className="w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              aria-label="Add to favorites"
            >
              <Icons.Heart filled={isLiked} />
            </button>
            <button 
              className="w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              aria-label="Share tour"
            >
              <Icons.Share />
            </button>
          </div>
        </div>

        {/* Rating Badge - Bottom Right */}
        {mockData.rating && (
          <div className="absolute bottom-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1.5 rounded-lg font-bold text-sm shadow-lg flex items-center gap-1 z-10">
            <Icons.Star filled />
            {mockData.rating}
          </div>
        )}

        {/* Image Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-white' 
                    : 'w-1.5 bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ================= CONTENT SECTION ================= */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
          {tour.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-600 mb-3">
          <Icons.MapPin />
          <span className="text-sm font-medium">{mockData.location}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {tour.short_description}
        </p>

        {/* Quick Info Grid */}
        {(mockData.duration || mockData.group_size) && (
          <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-gray-100">
            {mockData.duration && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-600">
                  <Icons.Clock />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500">Duration</p>
                  <p className="text-sm font-semibold text-gray-900 truncate">{mockData.duration}</p>
                </div>
              </div>
            )}
            {mockData.group_size && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 text-green-600">
                  <Icons.Users />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500">Group Size</p>
                  <p className="text-sm font-semibold text-gray-900 truncate">{mockData.group_size}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Highlights */}
        {mockData.highlights.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {mockData.highlights.slice(0, 3).map((highlight, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-md"
              >
                {highlight}
              </span>
            ))}
          </div>
        )}

        {/* Spacer to push buttons to bottom */}
        <div className="flex-grow" />

        {/* Price Section */}
        <div className="mb-3">
          <p className="text-xs text-gray-500 mb-1">Starting from</p>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-gray-900">
              ₹{tour.base_price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500">/ person</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-2">
          <Link
            href={`/tours/${tour.destination_slug}/${tour.slug}`}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center"
          >
            View Details
          </Link>

          <a
            href={`https://wa.me/917017714708?text=Interested in ${tour.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg"
          >
            <Icons.WhatsApp />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}