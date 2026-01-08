'use client'

export default function WhatsAppFloating() {
  return (
    <a
      href="https://wa.me/917017714708"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-[999]
        w-16 h-16
        flex items-center justify-center
        rounded-full
        bg-green-500 hover:bg-green-600
        shadow-2xl
        transition-all duration-300
        hover:scale-110
      "
    >
      {/* WhatsApp Icon (SVG – no library needed) */}
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-9 h-9 text-white"
      >
        <path d="M19.11 17.44c-.29-.14-1.72-.85-1.99-.94-.27-.1-.47-.14-.66.14-.19.29-.76.94-.93 1.13-.17.19-.34.21-.63.07-.29-.14-1.21-.45-2.3-1.43-.85-.76-1.42-1.69-1.59-1.97-.17-.29-.02-.44.13-.59.14-.14.29-.34.43-.51.14-.17.19-.29.29-.49.1-.19.05-.36-.02-.5-.07-.14-.66-1.59-.9-2.18-.24-.58-.48-.5-.66-.51l-.56-.01c-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.44.01 1.44 1.04 2.83 1.18 3.03.14.19 2.04 3.12 4.95 4.37.69.3 1.22.48 1.64.61.69.22 1.32.19 1.82.12.56-.08 1.72-.7 1.96-1.37.24-.66.24-1.23.17-1.35-.07-.12-.26-.19-.55-.33zM16 3C8.82 3 3 8.82 3 16c0 2.83.74 5.49 2.03 7.8L3 29l5.35-1.98A12.9 12.9 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.6c-2.21 0-4.26-.65-6.01-1.77l-.43-.27-3.17 1.17 1.16-3.09-.28-.45A10.57 10.57 0 015.4 16C5.4 10.15 10.15 5.4 16 5.4S26.6 10.15 26.6 16 21.85 26.6 16 26.6z" />
      </svg>

      {/* Pulse Effect */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-30 animate-ping" />
    </a>
  )
}
