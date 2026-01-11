'use client'

import { useState } from 'react'
import { BUDGET_OPTIONS } from './budgetOptions'

interface Props {
  defaultDestination?: string
  onSuccess: () => void
}

export default function CustomPackageForm({ defaultDestination, onSuccess }: Props) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    destination: defaultDestination || '',
    budget: '',
    travel_dates: '',
    travelers: 2,
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!form.full_name.trim()) newErrors.full_name = 'Required'
    if (!form.email.trim()) newErrors.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email'
    if (!form.phone.trim()) newErrors.phone = 'Required'
    if (!form.destination.trim()) newErrors.destination = 'Required'
    if (!form.budget) newErrors.budget = 'Required'
    if (!form.travel_dates.trim()) newErrors.travel_dates = 'Required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const submit = async () => {
    if (!validate()) return
    setLoading(true)

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/custom-package-enquiries`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      )

      setLoading(false)
      if (res.ok) {
        setSuccess(true)
        // Close modal after 3 seconds
        setTimeout(() => {
          onSuccess()
        }, 7000)
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      setLoading(false)
      alert('Network error. Please check your connection.')
    }
  }

  // Success Screen
  if (success) {
    return (
      <div className="text-center py-12 animate-scale-in">
        {/* Success Icon with Animation */}
        <div className="relative inline-flex items-center justify-center mb-6">
          {/* Animated rings */}
          <div className="absolute w-32 h-32 bg-green-100 rounded-full animate-ping-slow opacity-75"></div>
          <div className="absolute w-24 h-24 bg-green-200 rounded-full animate-ping-slower opacity-50"></div>
          
          {/* Checkmark */}
          <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl animate-bounce-in">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h3 className="text-3xl font-bold text-gray-900 mb-3 animate-slide-up">
          Request Sent Successfully! 🎉
        </h3>
        <p className="text-gray-600 mb-6 text-lg animate-slide-up-delay">
          Thank you, <span className="font-semibold text-gray-900">{form.full_name}</span>!
        </p>

        {/* Details */}
        <div className="max-w-md mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6 border border-blue-100 animate-slide-up-delay-2">
          <p className="text-sm text-gray-700 leading-relaxed">
            We've received your custom package request for <strong className="text-blue-600">{form.destination}</strong>. 
            Our travel experts will review it and contact you within <strong>24 hours</strong> at:
          </p>
          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold text-gray-900">
              📧 {form.email}
            </p>
            <p className="text-sm font-semibold text-gray-900">
              📱 {form.phone}
            </p>
          </div>
        </div>

        {/* Confetti Emojis */}
        <div className="text-4xl space-x-2 mb-4 animate-bounce-delayed">
          <span className="inline-block animate-wiggle">🎊</span>
          <span className="inline-block animate-wiggle-delay-1">✨</span>
          <span className="inline-block animate-wiggle-delay-2">🎉</span>
          <span className="inline-block animate-wiggle-delay-3">🌟</span>
          <span className="inline-block animate-wiggle-delay-4">🎊</span>
        </div>

        <p className="text-xs text-gray-500">
          This window will close automatically...
        </p>

        <style jsx>{`
          @keyframes scale-in {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes bounce-in {
            0% {
              transform: scale(0);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }

          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes ping-slow {
            0% {
              transform: scale(1);
              opacity: 0.75;
            }
            100% {
              transform: scale(1.5);
              opacity: 0;
            }
          }

          @keyframes ping-slower {
            0% {
              transform: scale(1);
              opacity: 0.5;
            }
            100% {
              transform: scale(2);
              opacity: 0;
            }
          }

          @keyframes wiggle {
            0%, 100% {
              transform: rotate(0deg) translateY(0);
            }
            25% {
              transform: rotate(-10deg) translateY(-5px);
            }
            75% {
              transform: rotate(10deg) translateY(-5px);
            }
          }

          .animate-scale-in {
            animation: scale-in 0.5s ease-out;
          }

          .animate-bounce-in {
            animation: bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .animate-slide-up {
            animation: slide-up 0.5s ease-out 0.2s both;
          }

          .animate-slide-up-delay {
            animation: slide-up 0.5s ease-out 0.4s both;
          }

          .animate-slide-up-delay-2 {
            animation: slide-up 0.5s ease-out 0.6s both;
          }

          .animate-ping-slow {
            animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          }

          .animate-ping-slower {
            animation: ping-slower 2s cubic-bezier(0, 0, 0.2, 1) infinite 0.5s;
          }

          .animate-wiggle {
            animation: wiggle 1s ease-in-out infinite;
          }

          .animate-wiggle-delay-1 {
            animation: wiggle 1s ease-in-out infinite 0.1s;
          }

          .animate-wiggle-delay-2 {
            animation: wiggle 1s ease-in-out infinite 0.2s;
          }

          .animate-wiggle-delay-3 {
            animation: wiggle 1s ease-in-out infinite 0.3s;
          }

          .animate-wiggle-delay-4 {
            animation: wiggle 1s ease-in-out infinite 0.4s;
          }

          .animate-bounce-delayed {
            animation: bounce 2s infinite;
          }
        `}</style>
      </div>
    )
  }

  const inputClass = (fieldName: string) => `
    w-full px-4 py-3.5 bg-white border-2 rounded-xl transition-all text-gray-900 placeholder:text-gray-400
    ${errors[fieldName] 
      ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' 
      : 'border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
    }
    focus:outline-none shadow-sm hover:shadow
  `

  return (
    <div className="space-y-7">
      {/* Contact Information */}
      <div className="space-y-5">
        <div className="flex items-center gap-2 pb-2">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Contact Information</h4>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            name="full_name"
            placeholder="Enter your full name"
            value={form.full_name}
            onChange={handleChange}
            className={inputClass('full_name')}
          />
          {errors.full_name && (
            <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.full_name}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email *
            </label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className={inputClass('email')}
            />
            {errors.email && (
              <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone *
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={handleChange}
              className={inputClass('phone')}
            />
            {errors.phone && (
              <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.phone}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Trip Details */}
      <div className="space-y-5 pt-2">
        <div className="flex items-center gap-2 pb-2">
          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Trip Details</h4>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Where do you want to go? *
          </label>
          <input
            name="destination"
            placeholder="e.g., Manali, Kashmir, Bali"
            value={form.destination}
            onChange={handleChange}
            className={inputClass('destination')}
          />
          {errors.destination && (
            <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.destination}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Budget per person *
            </label>
            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className={inputClass('budget')}
            >
              <option value="">Select budget</option>
              {BUDGET_OPTIONS.map(b => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
            {errors.budget && (
              <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.budget}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Number of travelers *
            </label>
            <input
              name="travelers"
              type="number"
              min={1}
              max={50}
              value={form.travelers}
              onChange={handleChange}
              className={inputClass('travelers')}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            When are you planning to travel? *
          </label>
          <input
            name="travel_dates"
            placeholder="e.g., 15-20 June or Flexible"
            value={form.travel_dates}
            onChange={handleChange}
            className={inputClass('travel_dates')}
          />
          {errors.travel_dates && (
            <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.travel_dates}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Additional preferences (optional)
          </label>
          <textarea
            name="message"
            placeholder="Any special requests or preferences?"
            rows={3}
            value={form.message}
            onChange={handleChange}
            className={`${inputClass('message')} resize-none`}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          disabled={loading}
          onClick={submit}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 rounded-xl font-bold transition-all disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Get Custom Quote</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </>
          )}
        </button>

        <p className="text-center text-xs text-gray-500 mt-4">
          🔒 Your information is secure. We'll respond within 24 hours.
        </p>
      </div>
    </div>
  )
}