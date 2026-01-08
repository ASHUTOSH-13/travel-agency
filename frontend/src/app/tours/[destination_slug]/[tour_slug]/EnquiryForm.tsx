'use client'

import { useState } from 'react'

interface Props {
  tourId: number
  tourTitle: string
}

interface Errors {
  full_name?: string
  phone?: string
  email?: string
  travelers?: string
  preferred_dates?: string
}

export default function EnquiryForm({ tourId, tourTitle }: Props) {
  const [form, setForm] = useState({
    full_name: '',
    phone: '',
    email: '',
    travelers: '',
    preferred_dates: '',
  })

  const [errors, setErrors] = useState<Errors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [globalError, setGlobalError] = useState('')

  /* ================= VALIDATION ================= */
  const validate = (): Errors => {
    const e: Errors = {}

    if (!form.full_name.trim()) {
      e.full_name = 'Full name is required'
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      e.phone = 'Enter a valid 10-digit mobile number'
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      e.email = 'Enter a valid email address'
    }

    if (!form.travelers || Number(form.travelers) < 1) {
      e.travelers = 'At least 1 traveller is required'
    }

    if (!form.preferred_dates) {
      e.preferred_dates = 'Please select preferred dates'
    }

    return e
  }

  /* ================= SUBMIT ================= */
  const submit = async () => {
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setGlobalError('')
    setLoading(true)

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/enquiries`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...form,
            travelers: Number(form.travelers),
            tour_id: tourId,
          }),
        }
      )

      if (!res.ok) {
        throw new Error('Failed')
      }

      setSuccess(true)
      setForm({
        full_name: '',
        phone: '',
        email: '',
        travelers: '',
        preferred_dates: '',
      })
    } catch {
      setGlobalError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const whatsappUrl = `https://wa.me/917017714708?text=Hi, I am interested in the ${tourTitle} tour.`

  /* ================= UI ================= */
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl">
      <h3 className="text-2xl font-bold mb-2">Enquire Now</h3>
      <p className="text-sm text-gray-600 mb-6">
        Get best price & details for <b>{tourTitle}</b>
      </p>

      {success ? (
        <div className="p-4 rounded-xl bg-green-50 text-green-700 font-semibold">
          ✅ Enquiry submitted successfully!  
          <br />
          Our team will contact you shortly.
        </div>
      ) : (
        <>
          <Field
            placeholder="Full Name"
            value={form.full_name}
            error={errors.full_name}
            onChange={v => setForm({ ...form, full_name: v })}
          />

          <Field
            placeholder="Mobile Number"
            value={form.phone}
            error={errors.phone}
            onChange={v => setForm({ ...form, phone: v })}
          />

          <Field
            placeholder="Email Address"
            value={form.email}
            error={errors.email}
            onChange={v => setForm({ ...form, email: v })}
          />

          <Field
            placeholder="Number of Travellers"
            value={form.travelers}
            error={errors.travelers}
            onChange={v => setForm({ ...form, travelers: v })}
          />

          <div className="mb-4">
            <select
              value={form.preferred_dates}
              onChange={e =>
                setForm({ ...form, preferred_dates: e.target.value })
              }
              className={`w-full p-3 rounded-xl border ${
                errors.preferred_dates
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
            >
              <option value="">Preferred Travel Dates</option>
              <option>7–10 Jan</option>
              <option>14–20 Jan</option>
              <option>25–30 Jan</option>
            </select>
            {errors.preferred_dates && (
              <p className="text-red-600 text-xs mt-1">
                {errors.preferred_dates}
              </p>
            )}
          </div>

          {globalError && (
            <p className="text-red-600 text-sm mb-3">{globalError}</p>
          )}

          <button
            onClick={submit}
            disabled={loading}
            className={`w-full py-4 rounded-xl font-bold text-white transition-all ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'
            }`}
          >
            {loading ? 'Submitting...' : 'Submit Enquiry'}
          </button>
        </>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        className="block mt-6 text-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all"
      >
        💬 Chat on WhatsApp
      </a>
    </div>
  )
}

/* ================= FIELD COMPONENT ================= */

function Field({
  placeholder,
  value,
  onChange,
  error,
}: {
  placeholder: string
  value: string
  onChange: (v: string) => void
  error?: string
}) {
  return (
    <div className="mb-3">
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 ${
          error
            ? 'border-red-500 focus:ring-red-300'
            : 'border-gray-300 focus:ring-blue-300'
        }`}
      />
      {error && (
        <p className="text-red-600 text-xs mt-1 font-medium">{error}</p>
      )}
    </div>
  )
}
