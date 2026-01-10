import { Metadata } from 'next'
import { CreditCard, Settings, XCircle, Hotel, Shield, HelpCircle, Search, Phone, Mail, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQs | LetsGoBuddy',
  description:
    'Frequently asked questions about tour bookings, payments, cancellations, hotels, transport and travel support.',
}

const FAQS = [
  {
    category: 'Booking & Payments',
    icon: <CreditCard className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    textColor: 'text-blue-600',
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
    icon: <Settings className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    iconBg: 'bg-purple-100',
    textColor: 'text-purple-600',
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
    icon: <XCircle className="w-6 h-6" />,
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-50',
    iconBg: 'bg-red-100',
    textColor: 'text-red-600',
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
    icon: <Hotel className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    iconBg: 'bg-green-100',
    textColor: 'text-green-600',
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
    icon: <Shield className="w-6 h-6" />,
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50',
    iconBg: 'bg-indigo-100',
    textColor: 'text-indigo-600',
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
    icon: <HelpCircle className="w-6 h-6" />,
    color: 'from-orange-500 to-yellow-500',
    bgColor: 'bg-orange-50',
    iconBg: 'bg-orange-100',
    textColor: 'text-orange-600',
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
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>Help Center</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95 leading-relaxed">
            Everything you need to know before planning your journey with LetsGoBuddy.
            Can't find what you're looking for? We're here to help!
          </p>

          {/* Search Bar */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full pl-14 pr-6 py-4 rounded-full text-gray-900 placeholder-gray-500 shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-wrap justify-center gap-4">
            {FAQS.map((section, idx) => (
              <a
                key={idx}
                href={`#${section.category.toLowerCase().replace(/\s+/g, '-')}`}
                className={`flex items-center gap-2 px-5 py-3 rounded-full ${section.bgColor} ${section.textColor} font-semibold text-sm hover:scale-105 transition-all shadow-sm hover:shadow-md`}
              >
                {section.icon}
                <span>{section.category}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {FAQS.map((section, idx) => (
          <div 
            key={idx} 
            id={section.category.toLowerCase().replace(/\s+/g, '-')}
            className="scroll-mt-24"
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`p-4 rounded-2xl ${section.iconBg} ${section.textColor}`}>
                {section.icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {section.category}
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  {section.items.length} questions
                </p>
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {section.items.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100"
                >
                  <summary className="flex justify-between items-start cursor-pointer p-6">
                    <div className="flex-1 pr-4">
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                        {faq.q}
                      </h3>
                    </div>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full ${section.bgColor} ${section.textColor} flex items-center justify-center group-open:rotate-45 transition-transform font-bold text-xl`}>
                      +
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className={`border-l-4 ${section.textColor.replace('text', 'border')} pl-4 py-2`}>
                      <p className="text-gray-700 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Still Have Questions CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg opacity-95 mb-8">
            Our travel experts are here to help you plan the perfect trip
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917017714708"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-50 transition-all shadow-xl hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>

            <a
              href="https://wa.me/917017714708"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold transition-all shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Chat
            </a>

            <a
              href="mailto:info@letsgobuddy.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full font-bold transition-all border-2 border-white/30"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Popular Resources */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Popular Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <ResourceCard
              title="Terms & Conditions"
              description="Read our complete terms of service"
              icon="📋"
              href="/terms"
            />
            <ResourceCard
              title="Privacy Policy"
              description="How we protect your data"
              icon="🔒"
              href="/privacy"
            />
            <ResourceCard
              title="Travel Tips"
              description="Essential guides for your journey"
              icon="✈️"
              href="/blog"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

/* ================= COMPONENTS ================= */

function ResourceCard({ 
  title, 
  description, 
  icon, 
  href 
}: { 
  title: string
  description: string
  icon: string
  href: string
}) {
  return (
    <a
      href={href}
      className="block p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200 hover:shadow-lg hover:scale-105 transition-all group"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h4>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </a>
  )
}