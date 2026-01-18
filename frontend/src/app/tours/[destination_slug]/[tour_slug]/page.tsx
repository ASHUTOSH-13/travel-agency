import Image from 'next/image'
import { notFound } from 'next/navigation'
import EnquiryForm from './EnquiryForm'
import {
  MapPin,
  Clock,
  Star,
  Heart,
  Share2,
  Check,
  X,
  Users,
  Calendar,
  Phone,
  Mail,
  Shield,
  Award,
  TrendingUp,
  ChevronRight,
} from 'lucide-react'
import TourActions from './TourActions'

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
  const originalPrice = Math.round(tour.base_price * 1.4)
  const discount = Math.round(
    ((originalPrice - tour.base_price) / originalPrice) * 100
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <span>Home</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>{tour.destination_name}</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 dark:text-gray-100 font-medium">
              {tour.title}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                  {discount}% OFF
                </span>
                <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                  BESTSELLER
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                {tour.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300">
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

            <TourActions
              tourId={tour.id}
              tourTitle={tour.title}
              tourUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/tours/${tour.destination_slug}/${tour.slug}`}
            />
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
                <Image src={img} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left */}
          <div className="lg:col-span-2">
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[Shield, Award, TrendingUp].map((Icon, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-white/10 shadow-sm"
                >
                  <Icon className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                  <p className="text-xs font-semibold text-gray-900 dark:text-gray-100">
                    Trusted
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Verified
                  </p>
                </div>
              ))}
            </div>

            {/* Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-white/10 p-6 mb-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                About This Tour
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Discover the beauty of {tour.destination_name} with our curated
                experience.
              </p>
            </div>

            {/* Itinerary */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-white/10 p-6 mb-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Day-wise Itinerary
              </h3>
              <div className="space-y-6">
                {tour.itinerary.map((day) => (
                  <div
                    key={day.day_number}
                    className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-700 last:border-0 last:pb-0"
                  >
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {day.day_number}
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-5 border border-blue-100 dark:border-white/10">
                      <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2">
                        Day {day.day_number}: {day.title}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {day.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-white/10 p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <FAQ
                  q="What is the best time to take this tour?"
                  a="March–June and September–December are ideal."
                />
                <FAQ
                  q="Are meals included in the package?"
                  a="Check inclusions section above."
                />
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-white/10 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                  <span className="text-4xl font-bold">
                    ₹{tour.base_price.toLocaleString()}
                  </span>
                </div>
                <div className="p-6">
                  <EnquiryForm tourId={tour.id} tourTitle={tour.title} />
                </div>
              </div>

              <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 text-center">
                <p className="text-sm text-blue-900 dark:text-blue-300 font-semibold">
                  🔥 Popular tour - Book before it's full!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* FAQ ITEM */
function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="group bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-white/10 p-5">
      <summary className="flex justify-between items-center font-semibold text-gray-900 dark:text-gray-100 cursor-pointer">
        {q}
        <span className="text-blue-600 dark:text-blue-400 text-2xl">+</span>
      </summary>
      <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm">{a}</p>
    </details>
  )
}
