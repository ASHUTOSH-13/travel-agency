import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQs | LetsGoBuddy',
  description:
    'Frequently asked questions about tour bookings, payments, cancellations, hotels, transport and travel support.',
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
