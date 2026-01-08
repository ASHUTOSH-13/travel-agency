import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.65),
              rgba(0,0,0,0.75)
            ),
            url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4')
          `,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24">
          <span className="inline-block mb-6 px-6 py-2 rounded-full bg-white/10 backdrop-blur text-white text-sm font-semibold tracking-wide">
            Trusted Indian Travel Experiences
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-5xl">
            Discover India’s
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Hidden Gems
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
            Hand-crafted tour packages across mountains, deserts, spirituality
            and culture — designed for comfort, safety and unforgettable memories.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <Link
              href="/tours"
              className="px-12 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 text-white text-lg font-bold shadow-2xl transition-all hover:scale-105"
            >
              Explore Tours
            </Link>

            <a
              href="https://wa.me/917017714708"
              target="_blank"
              className="px-12 py-4 rounded-full bg-white/90 hover:bg-white text-gray-900 text-lg font-bold shadow-xl transition-all hover:scale-105"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl w-full">
            <TrustCard title="10+ Years Experience" desc="Local experts & trusted guides" />
            <TrustCard title="Safe & Secure" desc="Verified hotels & transport" />
            <TrustCard title="Best Prices" desc="No hidden costs, honest pricing" />
          </div>
        </div>
      </section>

      {/* ================= FEATURE STRIP ================= */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">Why Travel With Us?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
            We don’t just sell tours — we create experiences that stay with you long after the journey ends.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard title="Handpicked Destinations" desc="Every destination is personally curated by our travel experts." />
            <FeatureCard title="Comfort First" desc="Premium hotels, smooth transport & balanced itineraries." />
            <FeatureCard title="Personal Support" desc="One dedicated manager for your entire trip." />
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
          Ready for Your Next Journey?
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90">
          Explore our curated tour packages and let us handle the rest.
        </p>

        <Link
          href="/tours"
          className="inline-block px-14 py-5 rounded-full bg-white text-blue-700 text-lg font-bold shadow-2xl hover:scale-105 transition-all"
        >
          View All Tours
        </Link>
      </section>
    </main>
  )
}

/* ================= SMALL COMPONENTS ================= */

function TrustCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white/10 backdrop-blur rounded-3xl p-6 text-white shadow-xl">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-200 text-sm">{desc}</p>
    </div>
  )
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  )
}
