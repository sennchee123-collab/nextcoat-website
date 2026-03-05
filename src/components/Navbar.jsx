import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav('#home') }}
          className="flex items-center gap-2"
        >
          <img
            src={scrolled ? '/Logo_original.svg' : '/Next coat_bijeli1.svg'}
            alt="NextCoat Painting"
            className="h-12 w-auto transition-all duration-300"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                className={`font-medium text-sm tracking-wide transition-colors duration-200 ${
                  scrolled ? 'text-gray-600 hover:text-navy' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="tel:2403426095"
          className="hidden md:flex items-center gap-2 bg-orange-brand hover:bg-orange-light text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200"
        >
          <Phone size={14} strokeWidth={1.5} />
          240.342.6095
        </a>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden ${scrolled ? 'text-navy' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                  className="block px-6 py-3 text-gray-700 font-medium hover:text-navy hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="px-6 pt-3 pb-2">
              <a
                href="tel:2403426095"
                className="flex items-center gap-2 bg-orange-brand text-white font-semibold px-5 py-2.5 rounded-lg text-sm w-fit"
              >
                <Phone size={14} strokeWidth={1.5} />
                240.342.6095
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
