import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Shield, Award, Users, TrendingUp, Star, Clock, Phone, Mail, Facebook, Instagram, Twitter, ChevronRight, Sparkles, Mountain, Palmtree, Building2, Church } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.5),
              rgba(0,0,0,0.7)
            ),
            url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')
          `,
        }}
      >
        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-sm font-semibold animate-fade-in">
            <Award className="w-4 h-4" />
            <span>Trusted by 15,000+ Travelers</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight max-w-6xl mb-6">
            Discover India's
            <span className="block mt-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Hidden Gems
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-100 max-w-3xl leading-relaxed font-light">
            Hand-crafted tour packages across mountains, deserts, spirituality
            and culture — designed for comfort, safety and unforgettable memories.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5">
            <Link
              href="/tours"
              className="group px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg font-bold shadow-2xl transition-all hover:scale-105 flex items-center gap-2 justify-center"
            >
              Explore Tours
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://wa.me/917017714708"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full bg-white hover:bg-gray-50 text-gray-900 text-lg font-bold shadow-xl transition-all hover:scale-105 flex items-center gap-2 justify-center"
            >
              <Phone className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl w-full">
            <TrustCard 
              icon={<Clock className="w-8 h-8" />}
              title="10+ Years Experience" 
              desc="Local experts & trusted guides" 
            />
            <TrustCard 
              icon={<Shield className="w-8 h-8" />}
              title="100% Safe & Secure" 
              desc="Verified hotels & transport" 
            />
            <TrustCard 
              icon={<Award className="w-8 h-8" />}
              title="Best Prices" 
              desc="No hidden costs, honest pricing" 
            />
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUICK STATS BAR ================= */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCard number="15K+" label="Happy Travelers" color="text-blue-600" />
            <StatCard number="50+" label="Destinations" color="text-green-600" />
            <StatCard number="200+" label="Tour Packages" color="text-orange-600" />
            <StatCard number="4.8★" label="Average Rating" color="text-yellow-600" />
          </div>
        </div>
      </section>

      {/* ================= POPULAR DESTINATIONS ================= */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <MapPin className="w-4 h-4" />
              <span>Explore Destinations</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From the mighty Himalayas to royal palaces, discover India's most loved destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DestinationCard
              name="Himachal Pradesh"
              tours="45+ Tours"
              image="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80"
              icon={<Mountain className="w-5 h-5" />}
              color="from-blue-500 to-cyan-500"
            />
            <DestinationCard
              name="Uttarakhand"
              tours="38+ Tours"
              image="https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80"
              icon={<Mountain className="w-5 h-5" />}
              color="from-green-500 to-emerald-500"
            />
            <DestinationCard
              name="Rajasthan"
              tours="52+ Tours"
              image="https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80"
              icon={<Building2 className="w-5 h-5" />}
              color="from-orange-500 to-red-500"
            />
            <DestinationCard
              name="Pilgrimage"
              tours="30+ Tours"
              image="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80"
              icon={<Church className="w-5 h-5" />}
              color="from-purple-500 to-pink-500"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Travel With Confidence
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We don't just sell tours — we create experiences that stay with you long after the journey ends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MapPin className="w-12 h-12 text-blue-600" />}
              title="Handpicked Destinations" 
              desc="Every destination is personally curated by our travel experts with years of experience." 
              gradient="from-blue-50 to-cyan-50"
            />
            <FeatureCard 
              icon={<Shield className="w-12 h-12 text-green-600" />}
              title="Comfort First" 
              desc="Premium hotels, smooth transport & balanced itineraries for a stress-free journey." 
              gradient="from-green-50 to-emerald-50"
            />
            <FeatureCard 
              icon={<Users className="w-12 h-12 text-orange-600" />}
              title="Personal Support" 
              desc="One dedicated manager for your entire trip, available 24/7 for assistance." 
              gradient="from-orange-50 to-red-50"
            />
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Star className="w-4 h-4 fill-current" />
              <span>Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              What Travelers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Don't just take our word for it - hear from our happy travelers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Priya Sharma"
              location="Delhi"
              rating={5}
              text="Amazing experience! The Kashmir tour was perfectly organized. Every detail was taken care of. Highly recommended!"
            />
            <TestimonialCard
              name="Rahul Verma"
              location="Mumbai"
              rating={5}
              text="Best travel agency! The Manali trip was unforgettable. Great hotels, friendly guides, and beautiful locations."
            />
            <TestimonialCard
              name="Anita Patel"
              location="Ahmedabad"
              rating={5}
              text="Professional service from start to finish. The Rajasthan heritage tour exceeded all expectations. Thank you!"
            />
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(59, 130, 246, 0.95),
                rgba(99, 102, 241, 0.95)
              ),
              url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80')
            `,
          }}
        />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white px-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Ready for Your Next Journey?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-95 leading-relaxed">
            Explore our curated tour packages and let us handle the rest. Your dream vacation is just a click away.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/tours"
              className="group inline-flex items-center justify-center gap-2 px-12 py-5 rounded-full bg-white text-blue-700 text-lg font-bold shadow-2xl hover:bg-gray-50 hover:scale-105 transition-all"
            >
              View All Tours
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="https://wa.me/917017714708"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-12 py-5 rounded-full bg-green-500 hover:bg-green-600 text-white text-lg font-bold shadow-2xl hover:scale-105 transition-all border-2 border-white/20"
            >
              <Phone className="w-5 h-5" />
              Contact Us Now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ================= COMPONENT LIBRARY ================= */

function TrustCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white shadow-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
      <div className="mb-3 text-yellow-400">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-200 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function StatCard({ number, label, color }: { number: string; label: string; color: string }) {
  return (
    <div className="group hover:scale-110 transition-transform">
      <div className={`text-4xl md:text-5xl font-extrabold ${color} mb-2`}>
        {number}
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  )
}

function DestinationCard({ 
  name, 
  tours, 
  image, 
  icon,
  color 
}: { 
  name: string; 
  tours: string; 
  image: string;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <Link href="/tours" className="group relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${color} px-3 py-1.5 rounded-full text-xs font-bold mb-3`}>
          {icon}
          <span>{tours}</span>
        </div>
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-sm text-gray-200 flex items-center gap-1">
          Explore Now
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </p>
      </div>
    </Link>
  )
}

function FeatureCard({ 
  icon, 
  title, 
  desc,
  gradient 
}: { 
  icon: React.ReactNode; 
  title: string; 
  desc: string;
  gradient: string;
}) {
  return (
    <div className={`group bg-gradient-to-br ${gradient} rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:scale-105 border border-gray-100`}>
      <div className="mb-5 transform group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{desc}</p>
    </div>
  )
}

function TestimonialCard({ 
  name, 
  location, 
  rating, 
  text 
}: { 
  name: string; 
  location: string; 
  rating: number; 
  text: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed mb-6 italic">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
    </div>
  )
}