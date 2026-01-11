'use client'

import { useEffect } from 'react'
import CustomPackageForm from './CustomPackageForm'

interface Props {
  open: boolean
  onClose: () => void
  destination?: string
}

export default function CustomPackageModal({ open, onClose, destination }: Props) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open, onClose])

  if (!open) return null

  return (
    <div 
      className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-md z-[9999] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[95vh] overflow-hidden shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Header with Gradient */}
        <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-8 text-white overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24 blur-3xl"></div>
          
          <div className="relative">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold mb-3">
                  ✨ Custom Package
                </div>
                <h2 className="text-3xl font-bold mb-2">Plan Your Dream Trip</h2>
                <p className="text-blue-100 text-sm">
                  Tell us what you're looking for and we'll create a perfect package
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all hover:scale-110 flex-shrink-0 ml-4"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Form Content with scroll */}
        <div className="overflow-y-auto max-h-[calc(95vh-140px)] px-8 py-8 bg-gradient-to-b from-gray-50 to-white">
          <CustomPackageForm
            defaultDestination={destination}
            onSuccess={() => {
              onClose()
              window.dispatchEvent(new CustomEvent('toast', { detail: 'Request sent successfully! We\'ll contact you soon.' }))
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>
  )
}