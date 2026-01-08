'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/70 backdrop-blur shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo_lets_go_buddy.png"   // replace later with transparent logo
            alt="LetsGoBuddy"
            width={56}
            height={56}
            className="object-contain mix-blend-lighten"
            priority
          />
          <span className="text-white text-2xl font-extrabold tracking-wide">
            LetsGoBuddy
          </span>
        </Link>
      </div>
    </header>
  )
}
