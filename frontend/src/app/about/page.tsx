import { Sparkles, MapPin, Award, TrendingUp, Phone, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'About Us | LetsGoBuddy',
  description:
    'Learn more about LetsGoBuddy – You Dream, We Deliver. Trusted travel experiences across India.',
}

export default function AboutPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>About LetsGoBuddy</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            You Dream,
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              We Deliver
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95 leading-relaxed">
            At LetsGoBuddy, we craft meaningful travel experiences across India —
            blending comfort, adventure, and trust into every journey.
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>LetsGoBuddy</strong> is a travel brand built on passion,
              reliability, and real on-ground experience. With over <strong>3+ years</strong>{' '}
              of expertise, we specialize in creating well-planned, affordable,
              and memorable tours across India.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From serene mountains to spiritual destinations and cultural
              landmarks, our goal is simple — to help you explore India without
              stress, confusion, or hidden surprises.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <p className="text-3xl font-bold text-gray-900">3+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <p className="text-3xl font-bold text-gray-900">All India</p>
              <p className="text-sm text-gray-600">Destinations Covered</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center">
              <Award className="w-8 h-8 mx-auto mb-2 text-orange-600" />
              <p className="text-3xl font-bold text-gray-900">Trusted</p>
              <p className="text-sm text-gray-600">Travel Partner</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center">
              <ShieldCheck className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <p className="text-3xl font-bold text-gray-900">100%</p>
              <p className="text-sm text-gray-600">Safe & Verified Tours</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose LetsGoBuddy?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Curated Experiences',
                desc: 'Each tour is thoughtfully designed with real traveler needs in mind.',
              },
              {
                title: 'Transparent Pricing',
                desc: 'No hidden costs. What you see is what you pay.',
              },
              {
                title: 'Dedicated Support',
                desc: 'From enquiry to return, we’re always just a call or message away.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-gradient-to-r from-orange-500 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Plan Your Next Trip?
          </h2>
          <p className="text-lg opacity-95 mb-8">
            Tell us your dream destination — we’ll take care of the rest.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              Explore Tours
            </Link>
            <a
              href="https://wa.me/917017714708"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-black/20 border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-black/30 transition-all"
            >
              <Phone className="w-5 h-5" />
              Talk to Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
