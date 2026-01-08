import Image from 'next/image'
import { notFound } from 'next/navigation'
import EnquiryForm from './EnquiryForm'

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

  return (
    <main className="bg-gray-50">
      {/* ================= HERO ================= */}
      <section className="relative">
        <div className="relative h-[60vh] w-full">
          <Image
            src={hero}
            alt={tour.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="absolute bottom-8 left-8 text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              {tour.title}
            </h1>
            <p className="text-lg opacity-90 mb-4">
              {tour.destination_name} · {tour.category_name}
            </p>
            <div className="text-3xl font-extrabold text-yellow-400">
              ₹{tour.base_price.toLocaleString()}
            </div>
          </div>
        </div>

        {restImages.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            {restImages.slice(0, 4).map((img, idx) => (
              <div key={idx} className="relative h-32 rounded-xl overflow-hidden">
                <Image src={img} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT */}
        <div className="lg:col-span-2">
          {/* ITINERARY */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Day-wise Itinerary</h2>

            <div className="relative border-l-2 border-blue-200 pl-8 space-y-10">
              {tour.itinerary.map(day => (
                <div key={day.day_number} className="relative">
                  <span className="absolute -left-[11px] top-1 w-5 h-5 bg-blue-600 rounded-full" />

                  <div className="bg-white rounded-2xl shadow p-6">
                    <h3 className="font-bold text-blue-600 mb-1">
                      Day {day.day_number}
                    </h3>
                    <h4 className="text-lg font-semibold mb-2">
                      {day.title}
                    </h4>
                    <p className="text-gray-600">{day.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* INCLUSIONS / EXCLUSIONS */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-bold mb-4 text-green-600">
                What’s Included
              </h3>
              <ul className="space-y-3">
                {tour.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-bold mb-4 text-red-600">
                What’s Excluded
              </h3>
              <ul className="space-y-3">
                {tour.exclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✖</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ================= FAQs ================= */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <FAQ
                q="What is the best time to take this tour?"
                a="The best time depends on the destination, but most travelers prefer March–June and September–December for comfortable weather."
              />
              <FAQ
                q="Are meals included in the package?"
                a="Yes, daily breakfast and dinner are included unless mentioned otherwise in exclusions."
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
          </section>
        </div>

        {/* RIGHT */}
        <aside className="sticky top-28">
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <EnquiryForm tourId={tour.id} tourTitle={tour.title} />
          </div>
        </aside>
      </div>
    </main>
  )
}

/* ================= FAQ ITEM ================= */

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="group bg-white rounded-2xl shadow p-6 cursor-pointer">
      <summary className="flex justify-between items-center font-semibold text-lg">
        {q}
        <span className="text-blue-600 group-open:rotate-45 transition-transform">
          +
        </span>
      </summary>
      <p className="mt-4 text-gray-600 leading-relaxed">{a}</p>
    </details>
  )
}
