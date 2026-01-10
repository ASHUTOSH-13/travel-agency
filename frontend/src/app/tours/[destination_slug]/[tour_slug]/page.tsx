import Image from 'next/image'
import { notFound } from 'next/navigation'
import EnquiryForm from './EnquiryForm'
import { MapPin, Clock, Star, Heart, Share2, Check, X, Users, Calendar, Phone, Mail, Shield, Award, TrendingUp, ChevronRight } from 'lucide-react'

interface ItineraryDay {
  day_number: number
  title: string
  description: string
}

interface TourDetail {
  id: number
  slug: string
  title: string
  base_price: number
  destination_slug: string
  destination_name: string
  category_slug: string
  category_name: string
  gallery_images: string[]
  itinerary: ItineraryDay[]
  inclusions: string[]
  exclusions: string[]
}

async function getTour(
  destinationSlug: string,
  tourSlug: string
): Promise<TourDetail | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tours/${destinationSlug}/${tourSlug}`,
    { cache: 'no-store' }
  )

  if (!res.ok) return null
  return res.json()
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ destination_slug: string; tour_slug: string }>
}) {
  const { destination_slug, tour_slug } = await params
  const tour = await getTour(destination_slug, tour_slug)

  if (!tour) notFound()

  const [hero, ...restImages] = tour.gallery_images
  
  // Calculate mock discount (you can add this field to your database later)
  const originalPrice = Math.round(tour.base_price * 1.4)
  const discount = Math.round(((originalPrice - tour.base_price) / originalPrice) * 100)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <span>Home</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>{tour.destination_name}</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">{tour.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Title Bar */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {discount}% OFF
                </span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                  BESTSELLER
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {tour.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{tour.destination_name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">•</span>
                  <span>{tour.category_name}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-3 rounded-full border-2 border-gray-300 hover:border-red-500 hover:text-red-500 transition-all group">
                <Heart className="w-5 h-5 group-hover:fill-current" />
              </button>
              <button className="p-3 rounded-full border-2 border-gray-300 hover:border-blue-500 hover:text-blue-500 transition-all">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-4 gap-2 rounded-xl overflow-hidden">
            <div className="col-span-4 md:col-span-2 md:row-span-2 relative h-96 group">
              <Image 
                src={hero} 
                alt={tour.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
            </div>
            {restImages.slice(0, 4).map((img, idx) => (
              <div key={idx} className="relative h-48 group">
                <Image 
                  src={img} 
                  alt={`${tour.title} - Image ${idx + 2}`}
                  fill
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
                {idx === 3 && restImages.length > 4 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">+{restImages.length - 4} Photos</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 text-center border border-gray-200 shadow-sm">
                <Shield className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <p className="text-xs font-semibold text-gray-900">100% Safe</p>
                <p className="text-xs text-gray-600">Verified Tours</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-gray-200 shadow-sm">
                <Award className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-xs font-semibold text-gray-900">Best Price</p>
                <p className="text-xs text-gray-600">Guaranteed</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-gray-200 shadow-sm">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                <p className="text-xs font-semibold text-gray-900">Popular</p>
                <p className="text-xs text-gray-600">Choice</p>
              </div>
            </div>

            {/* Overview Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
              <h3 className="text-2xl font-bold mb-4">About This Tour</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Discover the beauty of {tour.destination_name} with our carefully curated {tour.category_name.toLowerCase()} experience. 
                This tour offers an unforgettable journey through stunning landscapes, rich culture, and memorable experiences 
                that will stay with you forever.
              </p>
            </div>

            {/* Itinerary Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
              <h3 className="text-2xl font-bold mb-6">Day-wise Itinerary</h3>
              <div className="space-y-6">
                {tour.itinerary.map((day, idx) => (
                  <div key={day.day_number} className="relative pl-8 pb-8 border-l-2 border-blue-200 last:border-0 last:pb-0">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {day.day_number}
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">
                        Day {day.day_number}: {day.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions/Exclusions */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-bold mb-4 text-green-700 flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {tour.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-bold mb-4 text-red-700 flex items-center gap-2">
                  <X className="w-5 h-5" />
                  What's Excluded
                </h3>
                <ul className="space-y-3">
                  {tour.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <FAQ
                  q="What is the best time to take this tour?"
                  a="The best time depends on the destination, but most travelers prefer March–June and September–December for comfortable weather."
                />
                <FAQ
                  q="Are meals included in the package?"
                  a="Please check the inclusions section above for detailed information about meals and other amenities included in this tour."
                />
                <FAQ
                  q="Is this tour suitable for families?"
                  a="Absolutely. Our itineraries are designed for couples, families, and senior travelers."
                />
                <FAQ
                  q="Can I customize this tour?"
                  a="Yes, customization is possible. You can mention your requirements in the enquiry form."
                />
                <FAQ
                  q="How do I confirm my booking?"
                  a="After enquiry, our team will contact you with payment and confirmation details."
                />
              </div>
            </div>
          </div>

          {/* Right Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-bold">₹{tour.base_price.toLocaleString()}</span>
                    <span className="text-sm opacity-75">per person</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="line-through text-white/70">₹{originalPrice.toLocaleString()}</span>
                    <span className="bg-yellow-400 text-gray-900 px-2 py-0.5 rounded text-xs font-bold">
                      SAVE ₹{(originalPrice - tour.base_price).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <EnquiryForm tourId={tour.id} tourTitle={tour.title} />
                </div>
              </div>

              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                <p className="text-sm text-blue-900 font-semibold">🔥 Popular tour - Book before it's full!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ================= FAQ ITEM ================= */
function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md transition-all">
      <summary className="flex justify-between items-center font-semibold text-base">
        {q}
        <span className="text-blue-600 group-open:rotate-45 transition-transform text-2xl font-light">
          +
        </span>
      </summary>
      <p className="mt-4 text-gray-700 leading-relaxed text-sm">{a}</p>
    </details>
  )
}