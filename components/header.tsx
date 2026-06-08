'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const services = [
    { name: 'GPS & Laser Landforming', href: '#gps-laser' },
    { name: 'Hay Contracting Services', href: '#hay-contracting' },
    { name: 'Hay & Silage', href: '#hay-silage' },
    { name: 'Hay Steamer', href: '#hay-steamer' },
    { name: 'Drone Spraying & Spreading', href: '#drone-spraying' },
    { name: 'Tillage & Seeding', href: '#tillage' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-3">
            <Image
              src="/images/LKF_logo-sm.webp"
              alt="LKF Contracting"
              width={110}
              height={110}
            />
            <div className="hidden sm:block">
              <div className="text-xs text-gray-600">Agricultural & Civil Contracting</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="#about"
              className="text-gray-700 hover:text-charcoal transition-colors font-medium"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-charcoal transition-colors font-medium">
                Services
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-golden hover:text-charcoal transition-colors first:pt-4 last:pb-4"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="#contact"
              className="text-gray-700 hover:text-charcoal transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Phone and CTA - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0403767542"
              className="text-charcoal font-semibold hover:text-pumpkin transition-colors"
            >
              0403 767 542
            </a>
            <a
              href="#contact"
              className="bg-golden text-charcoal px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors shadow-md"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-charcoal"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-200 space-y-2">
            <Link
              href="#about"
              className="block py-2 px-2 text-gray-700 hover:text-charcoal hover:bg-gray-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <div className="py-2">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left flex items-center justify-between px-2 text-gray-700 hover:text-charcoal"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block py-1 text-sm text-gray-600 hover:text-charcoal"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="#contact"
              className="block py-2 px-2 text-gray-700 hover:text-charcoal hover:bg-gray-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-4 space-y-3 border-t border-gray-200 mt-4">
              <a
                href="tel:0403767542"
                className="block text-charcoal font-semibold px-2"
              >
                0403 767 542
              </a>
              <a
                href="#contact"
                className="block bg-golden text-charcoal px-4 py-2 rounded-lg font-semibold text-center hover:bg-yellow-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
