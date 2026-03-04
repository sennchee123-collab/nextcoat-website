import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Interior Painting',
  'Exterior Painting',
  'Cabinet Refinishing',
  'Deck & Fence Staining',
  'Color Consultation',
  'Drywall Repair',
]

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <img src="/Next coat_bijeli1.svg" alt="NextCoat Painting" className="h-14 w-auto mb-5" />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Professional painting services for homeowners in Fulton, MD and the greater Maryland area. Quality you can see, service you can trust.
            </p>
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-8 bg-orange-brand" />
              <span className="text-skyblue-brand text-xs font-semibold uppercase tracking-widest">Est. 2015</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                    className="text-white/60 hover:text-orange-brand text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleNav('#services') }}
                    className="text-white/60 hover:text-orange-brand text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:2403426095" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-orange-brand rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    <Phone size={14} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Phone</p>
                    <p className="text-white text-sm font-medium group-hover:text-orange-brand transition-colors">240.342.6095</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:Info@gonextcoat.com" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-orange-brand rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    <Mail size={14} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Email</p>
                    <p className="text-white text-sm font-medium group-hover:text-orange-brand transition-colors">Info@gonextcoat.com</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-brand rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={14} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Location</p>
                    <p className="text-white text-sm font-medium">Fulton, MD</p>
                  </div>
                </div>
              </li>
              <li>
                <a href="https://gonextcoat.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-orange-brand rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    <ExternalLink size={14} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Website</p>
                    <p className="text-white text-sm font-medium group-hover:text-orange-brand transition-colors">gonextcoat.com</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} NextCoat Painting. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Fulton, MD · Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  )
}
