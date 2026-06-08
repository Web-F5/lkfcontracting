import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-start justify-center overflow-hidden bg-vanillacream">
      <Image
        src="/images/tractor-in-field.jpg"
        alt="LKF Contracting Agricultural Services"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4 pt-30 md:pt-38">
        <div className="mb-8">
          <Image
            src="/images/LKF_logo.webp"
            alt="LKF Contracting Logo"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Agricultural & Civil Contractors 
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100 text-balance">
          20+ Years of Excellence
        </p>
        <Link
          href="#contact"
          className="inline-block bg-golden text-charcoal px-8 py-2 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg"
        >
          Get in Touch Today
        </Link>
      </div>
      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-px">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L1440 80L1440 20C1440 20 1200 0 720 40C240 80 0 20 0 20L0 80Z"
            fill="var(--color-vanillacream)"
          />
        </svg>
      </div>
    </section>
  )
}
