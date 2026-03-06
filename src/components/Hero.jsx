import { useState, useEffect, useCallback } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    bg: '/images/New_interior.png',
  },
  {
    id: 2,
    bg: '/images/New_exterior.png',
  },
  {
    id: 3,
    bg: '/images/New_exterior2.png',
  },
]

const heroHeadline = 'Howard County\'s Choice for Professional Interior & Exterior Painting.'

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  const goTo = useCallback((index) => {
    setFading(true)
    setTimeout(() => {
      setCurrent(index)
      setFading(false)
    }, 400)
  }, [])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const scrollDown = () => {
    const el = document.querySelector('#about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative h-screen min-h-[650px] overflow-hidden">
      {/* Slide background */}
      <img
        key={slides[current].id}
        src={slides[current].bg}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${fading ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Overlay — dark, elegant gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <h1 className="text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-extrabold text-white leading-tight mb-5 max-w-4xl tracking-tight">
          {heroHeadline}
        </h1>
        <p className="text-lg md:text-xl text-white/80 font-light mb-10 max-w-2xl leading-relaxed">
          Professional painters serving Central MD & DC Suburbs. Interior & Exterior House Painters in Howard County.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}
            className="bg-orange-brand hover:bg-orange-light text-white font-semibold px-10 py-4 rounded-lg text-base transition-all duration-200 shadow-xl hover:shadow-orange-brand/30 hover:-translate-y-0.5"
          >
            Get A Free Estimate
          </a>
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); document.querySelector('#about').scrollIntoView({ behavior: 'smooth' }) }}
            className="border border-white/40 text-white hover:bg-white hover:text-navy font-semibold px-10 py-4 rounded-lg text-base transition-all duration-200 backdrop-blur-sm"
          >
            Learn More
          </a>
        </div>

        {/* Slide indicators — minimal */}
        <div className="flex gap-3 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${i === current ? 'w-10 h-1.5 bg-orange-brand' : 'w-6 h-1.5 bg-white/30 hover:bg-white/50'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll down */}
      <button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-white flex flex-col items-center gap-1.5 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase">Discover</span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>
    </section>
  )
}
