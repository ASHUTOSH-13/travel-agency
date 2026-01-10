'use client'

import { useEffect, useState } from 'react'
import { Heart, Share2 } from 'lucide-react'

const WISHLIST_KEY = 'lgb_wishlist'

function Toast({ message }: { message: string }) {
  return (
    <div className="fixed bottom-6 right-6 bg-black text-white px-4 py-2 rounded-lg shadow-lg text-sm z-[9999]">
      {message}
    </div>
  )
}

export default function TourActions({
  tourId,
  tourTitle,
  tourUrl,
}: {
  tourId: number
  tourTitle: string
  tourUrl: string
}) {
  const [isLiked, setIsLiked] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  // Init wishlist state
  useEffect(() => {
    const stored: number[] = JSON.parse(
      localStorage.getItem(WISHLIST_KEY) || '[]'
    )
    setIsLiked(stored.includes(tourId))
  }, [tourId])

  const showToast = (msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(null), 2000)
  }

  // ❤️ Wishlist toggle
  const toggleWishlist = () => {
    const stored: number[] = JSON.parse(
      localStorage.getItem(WISHLIST_KEY) || '[]'
    )

    let updated: number[]
    if (stored.includes(tourId)) {
      updated = stored.filter(id => id !== tourId)
      showToast('Removed from wishlist')
    } else {
      updated = [...stored, tourId]
      showToast('Added to wishlist ❤️')
    }

    localStorage.setItem(WISHLIST_KEY, JSON.stringify(updated))
    setIsLiked(!isLiked)
  }

  // 🔗 Share
  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: tourTitle,
        text: 'Check out this tour on LetsGoBuddy',
        url: tourUrl,
      })
    } else {
      await navigator.clipboard.writeText(tourUrl)
      showToast('Link copied to clipboard 🔗')
    }
  }

  return (
    <>
      {toast && <Toast message={toast} />}

      <div className="flex items-center gap-3">
        <button
          onClick={toggleWishlist}
          className={`p-3 rounded-full border-2 transition-all
            ${
              isLiked
                ? 'border-red-500 text-red-500'
                : 'border-gray-300 hover:border-red-500 hover:text-red-500'
            }`}
          aria-label="Add to wishlist"
        >
          <Heart
            className="w-5 h-5"
            fill={isLiked ? 'currentColor' : 'none'}
          />
        </button>

        <button
          onClick={handleShare}
          className="p-3 rounded-full border-2 border-gray-300 hover:border-blue-500 hover:text-blue-500 transition-all"
          aria-label="Share tour"
        >
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </>
  )
}
