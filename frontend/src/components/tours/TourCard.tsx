'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Tour } from '@/types/tour'

interface Props {
  tour: Tour
}

const PLACEHOLDER = '/placeholder-tour.jpg'

export default function TourCard({ tour }: Props) {
  /**
   * ✅ Normalize gallery images
   * - Prefer backend gallery_images
   * - Fallback to hero image
   */
  const images =
    tour.gallery_images && tour.gallery_images.length > 0
      ? tour.gallery_images.map(img =>
          img.startsWith('http') ? img.split('?')[0] : PLACEHOLDER
        )
      : tour.hero_image_url
      ? [tour.hero_image_url.split('?')[0]]
      : [PLACEHOLDER]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [hovered, setHovered] = useState(false)

  /**
   * ✅ Start slideshow on hover
   */
  useEffect(() => {
    if (!hovered || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length)
    }, 1400)

    return () => clearInterval(interval)
  }, [hovered, images.length])

  /**
   * ✅ Reset cleanly on mouse leave
   */
  const handleLeave = () => {
    setHovered(false)
    setCurrentIndex(0)
  }

  return (
    <div
      className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
    >
      {/* ================= IMAGE SLIDESHOW ================= */}
      <div className="relative h-64 overflow-hidden">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={tour.title}
            fill
            className={`object-cover absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            priority={index === 0}
            onError={(e) => {
              e.currentTarget.src = PLACEHOLDER
            }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

        {/* Price Badge */}
        <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-bold text-lg shadow-lg">
          ₹{tour.base_price.toLocaleString()}
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-8">
        <div className="flex items-center gap-2 mb-2 text-sm text-blue-600 font-semibold">
          <span className="w-2 h-2 bg-blue-600 rounded-full" />
          {tour.category_name}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {tour.title}
        </h3>

        <p className="text-gray-600 mb-6 line-clamp-2">
          {tour.short_description}
        </p>

        <div className="flex gap-3">
          <Link
            href={`/tours/${tour.destination_slug}/${tour.slug}`}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 text-white py-4 px-6 rounded-2xl font-bold text-center transition-all"
          >
            View Details
          </Link>

          <a
            href={`https://wa.me/917017714708?text=Interested in ${tour.title}`}
            target="_blank"
            className="p-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl transition-all"
          >
            💬
          </a>
        </div>
      </div>
    </div>
  )
}
