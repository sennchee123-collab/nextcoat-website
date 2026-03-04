import { useState, useEffect, useCallback } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    bg: '/images/interior/man-in-a-working-overall-2026-01-08-02-42-03-utc.webp',
    headline: 'Transform Your Home',
    sub: 'Residential interior & exterior painting — protection, precision, and a flawless finish.',
  },
  {
    id: 2,
    bg: '/images/exterior/red-house-with-balcony-2026-01-05-04-34-25-utc.webp',
    headline: 'Flawless Finish, Enduring Protection.',
    sub: 'Premium exterior painting built to weather every Maryland season.',
  },
  {
    id: 3,
    bg: '/images/interior/unrecognizable-man-painting-room-wall-in-daylight-2026-01-08-22-11-11-utc.webp',
    headline: 'Precision on Every Wall',
    sub: 'From trim and baseboards to full room repaints — trusted across Fulton, MD.',
  },
]

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
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const scrollDown = () => {
    const el = document.querySelector('#about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slide background */}
      <img
        key={slides[current].id}
        src={slides[current].bg}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/80" />

      {/* Paint stroke accent */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-20 pointer-events-none">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <ellipse cx="200" cy="80" rx="160" ry="60" fill="#A8D8E8" transform="rotate(-25 200 80)" />
        </svg>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full text-center px-4 transition-all duration-500 ${fading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
      >
        <div className="mb-6">
          <img src="/Logo_original.svg" alt="NextCoat Painting" className="h-20 md:h-28 mx-auto drop-shadow-2xl" />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 text-shadow max-w-4xl">
          {slides[current].headline}
        </h1>
        <p className="text-lg md:text-xl text-skyblue-light font-light mb-8 max-w-xl text-shadow">
          {slides[current].sub}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}
            className="bg-orange-brand hover:bg-orange-light text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-xl hover:shadow-orange-brand/40 hover:-translate-y-0.5"
          >
            Get a Free Quote
          </a>
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); document.querySelector('#services').scrollIntoView({ behavior: 'smooth' }) }}
            className="border-2 border-white text-white hover:bg-white hover:text-navy font-bold px-8 py-4 rounded-full text-base transition-all duration-200"
          >
            Our Services
          </a>
        </div>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? 'w-8 h-3 bg-orange-brand' : 'w-3 h-3 bg-white/40 hover:bg-white/70'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Prev/Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 text-white rounded-full p-2.5 backdrop-blur-sm transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 text-white rounded-full p-2.5 backdrop-blur-sm transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Scroll down indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-white flex flex-col items-center gap-1 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} />
      </button>
    </section>
  )
}
