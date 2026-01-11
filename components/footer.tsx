import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary dark:bg-slate-900 text-primary-foreground dark:text-slate-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="w-8 h-8 bg-primary-foreground dark:bg-slate-800 rounded-full flex items-center justify-center text-primary dark:text-blue-400 font-bold mb-3">
              MS
            </div>
            <h3 className="text-base font-bold mb-2">M S Unique Enterprises</h3>
            <p className="opacity-90 text-sm">Premium water purification solutions for healthy living</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-3">Products</h4>
            <ul className="space-y-2 opacity-90 text-sm">
              <li>
                <Link href="/equipment" className="hover:opacity-100 transition">
                  RO Purifiers
                </Link>
              </li>
              <li>
                <Link href="/equipment?type=uv" className="hover:opacity-100 transition">
                  UV Filters
                </Link>
              </li>
              <li>
                <Link href="/equipment?type=tds" className="hover:opacity-100 transition">
                  TDS Controllers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm mb-3">Services</h4>
            <ul className="space-y-2 opacity-90 text-sm">
              <li>
                <Link href="/repair" className="hover:opacity-100 transition">
                  Repair Service
                </Link>
              </li>
              <li>
                <Link href="/subscription" className="hover:opacity-100 transition">
                  Water Cans Subscription
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-100 transition">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-3">Contact</h4>
            <ul className="space-y-2 opacity-90 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 7659034234
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                yalamarthisudhakar4@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Visakhapatnam, AP
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground dark:border-slate-700 border-opacity-20 pt-6 md:pt-8 text-center opacity-75 text-xs md:text-sm">
          <p>© 2026 Unique Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
