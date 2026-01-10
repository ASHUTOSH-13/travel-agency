import {
  ShieldCheck,
  User,
  Database,
  Lock,
  Share2,
  RefreshCcw,
  Mail
} from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy | LetsGoBuddy',
  description:
    'Privacy Policy for LetsGoBuddy – Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="w-4 h-4" />
            Privacy & Data Protection
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Privacy Policy
          </h1>

          <p className="text-lg opacity-95 max-w-2xl mx-auto">
            Your trust matters to us. This policy explains how LetsGoBuddy
            collects, uses, and safeguards your information.
          </p>

          <p className="mt-4 text-sm opacity-80">
            Last updated: <span className="font-semibold">January 2026</span>
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="space-y-8">

          {/* Intro */}
          <Card icon={User} title="Introduction">
            At <strong>LetsGoBuddy</strong> (“we”, “our”, “us”), protecting your
            personal information is a top priority. This Privacy Policy
            describes how your data is collected, used, and protected when you
            interact with our website or enquire about our travel services.
          </Card>

          {/* Information Collected */}
          <Card icon={Database} title="Information We Collect">
            <ul className="list-disc list-inside space-y-2">
              <li>Name, phone number, and email address</li>
              <li>Travel preferences shared via enquiry forms</li>
              <li>Basic usage data such as pages visited and interactions</li>
            </ul>
          </Card>

          {/* Usage */}
          <Card icon={Share2} title="How We Use Your Information">
            <ul className="list-disc list-inside space-y-2">
              <li>To respond to enquiries and provide travel-related services</li>
              <li>To communicate booking details, updates, or offers</li>
              <li>To improve our website and customer experience</li>
            </ul>
          </Card>

          {/* Security */}
          <Card icon={Lock} title="Data Protection & Security">
            We follow industry-standard security practices to protect your data
            from unauthorized access, misuse, or disclosure. However, please
            note that no online platform can guarantee absolute security.
          </Card>

          {/* Third Party */}
          <Card icon={ShieldCheck} title="Third-Party Sharing">
            We do not sell or rent your personal data. Information is shared only
            with trusted partners when required to deliver services or comply
            with legal obligations.
          </Card>

          {/* User Rights */}
          <Card icon={User} title="Your Rights">
            You have the right to access, update, or request deletion of your
            personal data. You may contact us anytime regarding privacy-related
            concerns.
          </Card>

          {/* Updates */}
          <Card icon={RefreshCcw} title="Policy Updates">
            This Privacy Policy may be updated periodically. Any changes will be
            reflected on this page along with an updated revision date.
          </Card>

          {/* Contact */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 flex items-start gap-4">
            <Mail className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Contact Us
              </h3>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy or how your
                data is handled, feel free to reach out to us. We’re always happy
                to help.
              </p>
            </div>
          </div>

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
