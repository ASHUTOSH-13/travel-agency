import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0b0f19] text-gray-300">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo_lets_go_buddy.png"
              alt="LetsGoBuddy Logo"
              width={48}
              height={48}
              className="object-contain"
            />
            <span className="text-2xl font-bold text-white">
              LetsGoBuddy
            </span>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Trusted Indian travel experiences with hand-crafted tour packages
            across mountains, deserts, spirituality and culture.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/letsgo_buddy.in?igsh=MWtqYXB5Nmxra2R5Nw=="
              target="_blank"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-pink-600 transition-all"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-white"
                fill="currentColor"
              >
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.8-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              aria-label="YouTube"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-600 transition-all"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-white"
                fill="currentColor"
              >
                <path d="M23.5 6.2a2.9 2.9 0 00-2-2C19.8 4 12 4 12 4s-7.8 0-9.5.2a2.9 2.9 0 00-2 2A30 30 0 000 12a30 30 0 00.5 5.8 2.9 2.9 0 002 2C4.2 20 12 20 12 20s7.8 0 9.5-.2a2.9 2.9 0 002-2A30 30 0 0024 12a30 30 0 00-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
<div>
  <h4 className="text-white font-semibold mb-4">Quick Links</h4>
  <ul className="space-y-3 text-sm">
    <li>
      <Link href="/" className="hover:text-white transition">
        Home
      </Link>
    </li>
    <li>
      <Link href="/tours" className="hover:text-white transition">
        All Tours
      </Link>
    </li>
    <li>
      <Link href="/faqs" className="hover:text-white transition">
        FAQs
      </Link>
    </li>
    <li>
      <Link href="/admin/login" className="hover:text-white transition">
        Admin
      </Link>
    </li>
  </ul>
</div>

        
        {/* DESTINATIONS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Popular Destinations</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/tours?category=himachal" className="hover:text-white">Himachal</Link></li>
            <li><Link href="/tours?category=uttarakhand" className="hover:text-white">Uttarakhand</Link></li>
            <li><Link href="/tours?category=rajasthan" className="hover:text-white">Rajasthan</Link></li>
            <li><Link href="/tours?category=pilgrimage" className="hover:text-white">Pilgrimage</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <p className="text-sm mb-3">
            WhatsApp us for instant support
          </p>

          <a
            href="https://wa.me/917017714708"
            target="_blank"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-sm font-bold transition"
          >
            Chat on WhatsApp
          </a>

          <p className="mt-4 text-sm text-gray-400">
            letsgobuddytravels@gmail.com
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} LetsGoBuddy Travels. All rights reserved.
      </div>
    </footer>
  )
}
