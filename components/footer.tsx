import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">LKF Contracting</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Professional agricultural and civil contracting services across Victoria with 20+ years of expertise.
            </p>
            <a
              href="tel:0403767542"
              className="inline-flex items-center gap-2 text-golden font-semibold hover:text-yellow-300 transition-colors"
            >
              <Phone size={18} />
              0403 767 542
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-6 text-lg">Services</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <Link href="#gps-laser" className="hover:text-golden transition-colors">
                  GPS & Laser Landforming
                </Link>
              </li>
              <li>
                <Link href="#hay-contracting" className="hover:text-golden transition-colors">
                  Hay Contracting
                </Link>
              </li>
              <li>
                <Link href="#hay-steamer" className="hover:text-golden transition-colors">
                  Hay Steamer
                </Link>
              </li>
              <li>
                <Link href="#drone-spraying" className="hover:text-golden transition-colors">
                  Drone Spraying
                </Link>
              </li>
              <li>
                <Link href="#tillage" className="hover:text-golden transition-colors">
                  Tillage & Seeding
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold mb-6 text-lg">Company</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <Link href="#about" className="hover:text-golden transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#trust" className="hover:text-golden transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-golden transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="https://webf5.au" className="hover:text-golden transition-colors">
                  Web Design by Web F5
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-6 text-lg">Contact</h3>
            <div className="space-y-4 text-gray-300 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={18} className="flex-shrink-0 mt-0.5 text-golden" />
                <a href="tel:0403767542" className="hover:text-golden transition-colors">
                  0403 767 542
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="flex-shrink-0 mt-0.5 text-golden" />
                <a href="mailto:admin@lkfcontracting.com.au" className="hover:text-golden transition-colors">
                  admin@lkfcontracting.com.au
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-golden" />
                <div>
                  <p>567 Marungi Road</p>
                  <p>Invergordon, VIC 3971</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2026 LKF Contracting. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-golden transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-golden transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
