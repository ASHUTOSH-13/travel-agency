'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Heart } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Tours', href: '/tours' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'About', href: '/about' },
]

const WISHLIST_KEY = 'lgb_wishlist'

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [wishlistCount, setWishlistCount] = useState(0)

  // ---------------- SCROLL EFFECT ----------------
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ---------------- WISHLIST COUNT ----------------
  const loadWishlistCount = () => {
    const stored = JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]')
    setWishlistCount(stored.length)
  }

  useEffect(() => {
    loadWishlistCount()

    const onStorage = (e: StorageEvent) => {
      if (e.key === WISHLIST_KEY) loadWishlistCount()
    }

    const onWishlistUpdate = () => loadWishlistCount()

    window.addEventListener('storage', onStorage)
    window.addEventListener('lgb:wishlist-updated', onWishlistUpdate)

    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('lgb:wishlist-updated', onWishlistUpdate)
    }
  }, [])

  // ---------------- HEADER BACKGROUND ----------------
  const headerBg =
    scrolled || !isHome || menuOpen
      ? 'bg-black/80 backdrop-blur shadow-lg'
      : 'bg-black/30 backdrop-blur-sm'

  const brandTextColor =
    scrolled || !isHome || menuOpen
      ? 'text-white'
      : 'text-white'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo_lets_go_buddy.png"
            alt="LetsGoBuddy"
            width={65}
            height={65}
            priority
            className="object-contain -translate-y-0.5"
          />
          <span
            className={`text-xl font-extrabold tracking-wide ${brandTextColor}`}
          >
            LetsGoBuddy
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const active = pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-semibold transition-colors ${
                  active
                    ? 'text-yellow-400'
                    : 'text-white/90 hover:text-yellow-300'
                }`}
              >
                {item.label}
              </Link>
            )
          })}

          {/* ❤️ Wishlist */}
          <Link
            href="/wishlist"
            className="relative text-white/90 hover:text-red-400 transition-colors"
            aria-label="Wishlist"
          >
            <Heart className="w-6 h-6" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {NAV_ITEMS.map((item) => {
              const active = pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg font-semibold transition-colors ${
                    active
                      ? 'text-yellow-400'
                      : 'text-white/90 hover:text-yellow-300'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}

            {/* ❤️ Wishlist (Mobile) */}
            <Link
              href="/wishlist"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-lg font-semibold text-white/90 hover:text-red-400 transition-colors"
            >
              <Heart className="w-6 h-6" />
              <span>Wishlist</span>
              {wishlistCount > 0 && (
                <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
