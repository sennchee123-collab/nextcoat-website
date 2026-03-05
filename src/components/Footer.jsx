import { Phone, MapPin, ExternalLink } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Interior Painting',
  'Exterior Painting',
  'Surface Preparation',
  'Color Consultation',
]

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <img src="/Next coat_bijeli1.svg" alt="NextCoat Painting" className="h-12 w-auto mb-5" />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              A consulting-grade painting firm serving Fulton, MD and the greater Maryland area. The Banking Standard in every brushstroke.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.15em] mb-5">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.15em] mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleNav('#services') }}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.15em] mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:2403426095" className="flex items-center gap-3 group">
                  <Phone size={14} className="text-orange-brand" strokeWidth={1.5} />
                  <span className="text-white/50 text-sm group-hover:text-white transition-colors">240.342.6095</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-orange-brand" strokeWidth={1.5} />
                  <span className="text-white/50 text-sm">Fulton, MD</span>
                </div>
              </li>
              <li>
                <a href="https://gonextcoat.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <ExternalLink size={14} className="text-orange-brand" strokeWidth={1.5} />
                  <span className="text-white/50 text-sm group-hover:text-white transition-colors">gonextcoat.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} NextCoat Painting. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Licensed & Insured · Howard County, MD
          </p>
        </div>
      </div>
    </footer>
  )
}
