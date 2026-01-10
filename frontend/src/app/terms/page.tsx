import {
  FileText,
  ShieldCheck,
  UserCheck,
  AlertTriangle,
  RefreshCcw,
  Gavel,
} from 'lucide-react'

export const metadata = {
  title: 'Terms of Service | LetsGoBuddy',
  description:
    'Terms of Service for LetsGoBuddy – Please read these terms carefully before using our travel services.',
}

export default function TermsOfServicePage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FileText className="w-4 h-4" />
            Terms & Conditions
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Terms of Service
          </h1>

          <p className="text-lg opacity-95 max-w-2xl mx-auto">
            These terms govern your use of LetsGoBuddy and our travel-related
            services. Please read them carefully.
          </p>

          <p className="mt-4 text-sm opacity-80">
            Last updated: <span className="font-semibold">January 2026</span>
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="space-y-8">

          <Card icon={UserCheck} title="Acceptance of Terms">
            By accessing or using the LetsGoBuddy website and services, you
            agree to be bound by these Terms of Service. If you do not agree,
            please refrain from using our services.
          </Card>

          <Card icon={ShieldCheck} title="Our Services">
            LetsGoBuddy provides travel-related information, tour packages, and
            enquiry-based booking assistance across India. All services are
            subject to availability and confirmation.
          </Card>

          <Card icon={AlertTriangle} title="User Responsibilities">
            <ul className="list-disc list-inside space-y-2">
              <li>Provide accurate and complete information during enquiries</li>
              <li>Use the website for lawful purposes only</li>
              <li>Do not misuse, copy, or disrupt the website or its content</li>
            </ul>
          </Card>

          <Card icon={Gavel} title="Pricing & Payments">
            Prices displayed on the website are indicative and may change based
            on availability, season, or customization. Final pricing will be
            shared during booking confirmation.
          </Card>

          <Card icon={AlertTriangle} title="Cancellations & Changes">
            Cancellation and modification policies vary by tour. Specific
            details will be communicated at the time of booking. LetsGoBuddy
            reserves the right to modify itineraries due to unforeseen
            circumstances.
          </Card>

          <Card icon={ShieldCheck} title="Limitation of Liability">
            LetsGoBuddy shall not be liable for any indirect, incidental, or
            consequential damages arising from the use of our services,
            including delays, cancellations, or third-party failures.
          </Card>

          <Card icon={RefreshCcw} title="Changes to Terms">
            We may update these Terms of Service from time to time. Continued
            use of our services after changes implies acceptance of the updated
            terms.
          </Card>

        </div>
      </section>
    </main>
  )
}

/* ================= REUSABLE CARD ================= */
function Card({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex gap-4">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <div className="text-gray-700 leading-relaxed text-sm">
          {children}
        </div>
      </div>
    </div>
  )
}
