import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-[#0a0e17] via-[#0b0f19] to-[#0d1220] text-gray-300">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* BRAND SECTION */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 p-1">
                <Image
                  src="/logo_lets_go_buddy.png"
                  alt="LetsGoBuddy Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                LetsGoBuddy
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Creating unforgettable journeys across India's most beautiful destinations. 
              Your adventure starts here.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/letsgo_buddy.in?igsh=MWtqYXB5Nmxra2R5Nw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 transition-all duration-300 hover:scale-110"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.8-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="group w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-red-600 transition-all duration-300 hover:scale-110"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor">
                  <path d="M23.5 6.2a2.9 2.9 0 00-2-2C19.8 4 12 4 12 4s-7.8 0-9.5.2a2.9 2.9 0 00-2 2A30 30 0 000 12a30 30 0 00.5 5.8 2.9 2.9 0 002 2C4.2 20 12 20 12 20s7.8 0 9.5-.2a2.9 2.9 0 002-2A30 30 0 0024 12a30 30 0 00-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>

              <a
                href="https://wa.me/917017714708"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="group w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-green-500 transition-all duration-300 hover:scale-110"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  All Tours
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/admin/login" className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* POPULAR DESTINATIONS */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-green-700 rounded-full"></div>
              Top Destinations
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/tours?category=himachal" className="text-sm text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-green-400 transition-colors"></span>
                  Himachal Pradesh
                </Link>
              </li>
              <li>
                <Link href="/tours?category=uttarakhand" className="text-sm text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-green-400 transition-colors"></span>
                  Uttarakhand
                </Link>
              </li>
              <li>
                <Link href="/tours?category=rajasthan" className="text-sm text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-green-400 transition-colors"></span>
                  Rajasthan
                </Link>
              </li>
              <li>
                <Link href="/tours?category=kashmir" className="text-sm text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-green-400 transition-colors"></span>
                  Kashmir
                </Link>
              </li>
              <li>
                <Link href="/tours?category=pilgrimage" className="text-sm text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-green-400 transition-colors"></span>
                  Pilgrimage Tours
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT SECTION */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-orange-600 rounded-full"></div>
              Get In Touch
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email Us</p>
                  <a href="mailto:letsgobuddytravels@gmail.com" className="text-sm text-gray-300 hover:text-blue-400 transition-colors break-all">
                    letsgobuddytravels@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">WhatsApp</p>
                  <a href="https://wa.me/917017714708" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                    +91 70177 14708
                  </a>
                </div>
              </div>

              <a
                href="https://wa.me/917017714708"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat Now
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} <span className="text-white font-semibold">LetsGoBuddy Travels</span>. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}