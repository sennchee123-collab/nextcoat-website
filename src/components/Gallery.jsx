import { useState, useEffect, useRef } from 'react'
import { X, ZoomIn } from 'lucide-react'

const tabs = ['All', 'Interior', 'Exterior']

const galleryItems = [
  { id: 1, tab: 'Interior', src: '/images/interior/unrecognizable-man-painting-room-wall-in-daylight-2026-01-08-22-11-11-utc.webp', alt: 'Painter rolling interior wall' },
  { id: 2, tab: 'Interior', src: '/images/interior/man-in-a-working-overall-2026-01-08-02-42-03-utc.webp', alt: 'Professional painter at work' },
  { id: 3, tab: 'Interior', src: '/images/interior/modern-living-room-interior-with-comfortable-gray-2026-02-27-22-06-09-utc.webp', alt: 'Modern living room after paint' },
  { id: 4, tab: 'Interior', src: '/images/interior/3d-mockup-photo-frame-in-modern-interior-of-living-2026-01-07-00-54-42-utc.webp', alt: 'Clean modern interior finish' },
  { id: 5, tab: 'Exterior', src: '/images/exterior/red-house-with-balcony-2026-01-05-04-34-25-utc.webp', alt: 'House exterior with balcony painted' },
  { id: 6, tab: 'Exterior', src: '/images/exterior/man-painting-wooden-poles-selective-focus-2026-01-08-08-08-39-utc.webp', alt: 'Painter applying exterior paint' },
  { id: 7, tab: 'Exterior', src: '/images/exterior/close-up-man-hand-painting-wooden-wall-renovating-house-outdoor-painting-wall-green-color.webp', alt: 'Close-up exterior wall painting' },
  { id: 8, tab: 'Exterior', src: '/images/exterior/the-top-of-the-house-or-apartment-building-with-ni-2026-01-11-10-20-24-utc.webp', alt: 'Roofline and fascia painted' },
  { id: 9, tab: 'Exterior', src: '/images/exterior/windows-building.webp', alt: 'Building windows and trim painted' },
]

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const filtered = activeTab === 'All' ? galleryItems : galleryItems.filter(g => g.tab === activeTab)

  return (
    <section id="gallery" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-10 bg-orange-brand rounded-full" />
            <span className="text-orange-brand font-semibold text-sm uppercase tracking-widest">Our Work</span>
            <div className="h-1 w-10 bg-orange-brand rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-navy mb-4">
            Project <span className="text-orange-brand">Gallery</span>
          </h2>
          <p className="text-gray-brand text-lg max-w-xl mx-auto">
            Browse our portfolio of completed projects and see the NextCoat difference for yourself.
          </p>
        </div>

        {/* Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-navy text-white shadow-md'
                  : 'bg-gray-100 text-navy hover:bg-skyblue-light'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ${
                visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
              onClick={() => setLightbox(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-52 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3">
                  <ZoomIn size={22} className="text-navy" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 bg-orange-brand text-white text-xs font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.tab}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gray-brand mb-4 text-base">Want to see more? Check out our full portfolio.</p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 bg-orange-brand hover:bg-orange-light text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            Start Your Project
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-white hover:text-orange-brand transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={32} />
            </button>
            <img
              src={lightbox.src.replace('w=800', 'w=1200')}
              alt={lightbox.alt}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <p className="text-center text-white/70 mt-4 text-sm">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </section>
  )
}
