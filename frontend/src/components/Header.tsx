'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Tours', href: '/tours' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'About', href: '/about' },
]

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Header background logic
  const headerBg =
    scrolled || !isHome || menuOpen
      ? 'bg-black/80 backdrop-blur shadow-lg'
      : 'bg-transparent'

  // Logo logic
  const logoSrc =
    scrolled || !isHome || menuOpen
      ? '/logo_lets_go_buddy.png'
      : '/logo_lets_go_buddy.png'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logoSrc}
            alt="LetsGoBuddy"
            width={48}
            height={48}
            priority
            className="object-contain"
          />
          <span className="text-white text-xl font-extrabold tracking-wide">
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
          </nav>
        </div>
      )}
    </header>
  )
}
