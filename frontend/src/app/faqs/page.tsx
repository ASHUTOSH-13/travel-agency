import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQs | LetsGoBuddy',
  description:
    'Frequently asked questions about tour bookings, payments, cancellations, hotels, transport and travel support.',
}

const FAQS = [
  {
    category: 'Booking & Payments',
    items: [
      {
        q: 'How do I book a tour?',
        a: 'You can submit an enquiry from the tour page. Our travel expert will contact you to confirm availability, customize the itinerary if needed, and guide you through the booking process.',
      },
      {
        q: 'Do I need to pay the full amount at once?',
        a: 'No. A partial advance payment is usually required to confirm the booking. The remaining amount can be paid before or during the trip as per discussion.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept UPI, bank transfers, and other commonly used digital payment methods in India.',
      },
    ],
  },
  {
    category: 'Customization & Flexibility',
    items: [
      {
        q: 'Can I customize the itinerary?',
        a: 'Yes, absolutely. All our tours can be customized based on your travel dates, hotel preferences, budget, and activities.',
      },
      {
        q: 'Do you organize private tours?',
        a: 'Yes. We arrange private tours for couples, families, and groups with a dedicated vehicle and personalized services.',
      },
    ],
  },
  {
    category: 'Cancellations & Refunds',
    items: [
      {
        q: 'What is the cancellation policy?',
        a: 'Cancellation charges depend on how close the cancellation is to the travel date. Detailed cancellation terms are shared before booking confirmation.',
      },
      {
        q: 'Will I get a refund if I cancel?',
        a: 'Refunds are processed after deducting applicable cancellation charges. Any non-refundable hotel or transport bookings are excluded.',
      },
    ],
  },
  {
    category: 'Hotels & Transport',
    items: [
      {
        q: 'What type of hotels do you provide?',
        a: 'We provide clean, comfortable, and well-reviewed hotels. Premium or luxury hotels can be arranged on request.',
      },
      {
        q: 'Is transport included in the package?',
        a: 'Yes. Transport for sightseeing and intercity travel is included as per the itinerary using safe and reliable vehicles.',
      },
    ],
  },
  {
    category: 'Safety & Support',
    items: [
      {
        q: 'Is it safe to travel with LetsGoBuddy?',
        a: 'Yes. Safety is our top priority. We work with verified drivers, hotels, and local partners.',
      },
      {
        q: 'Will there be support during the trip?',
        a: 'Yes. You will have a dedicated contact person available throughout your journey for any assistance.',
      },
    ],
  },
  {
    category: 'General Travel Queries',
    items: [
      {
        q: 'What documents do I need to carry?',
        a: 'A valid government ID proof is required. Additional documents may be needed for specific destinations.',
      },
      {
        q: 'Are meals included in the tour?',
        a: 'Most packages include breakfast and dinner. Exact meal inclusions are mentioned in each tour itinerary.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Everything you need to know before planning your journey with
          LetsGoBuddy.
        </p>
      </section>

      {/* FAQ CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        {FAQS.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              {section.category}
            </h2>

            <div className="space-y-4">
              {section.items.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-2xl shadow-md p-6"
                >
                  <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-gray-800">
                    {faq.q}
                    <span className="ml-4 text-blue-600 group-open:rotate-45 transition-transform text-2xl">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
