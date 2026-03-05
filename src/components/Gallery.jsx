import { useState, useEffect, useRef } from 'react'
import { X, ZoomIn } from 'lucide-react'

const tabs = ['All', 'Interior', 'Exterior']

const galleryItems = [
  { id: 1, tab: 'Interior', src: '/images/New_interior.png', alt: 'Modern interior painting project' },
  { id: 2, tab: 'Interior', src: '/images/New_interior2.png', alt: 'Professional interior finish' },
  { id: 3, tab: 'Interior', src: '/images/New_interior3.png', alt: 'Clean residential interior' },
  { id: 4, tab: 'Interior', src: '/images/New_interior4.png', alt: 'Detailed interior work' },
  { id: 5, tab: 'Exterior', src: '/images/New_exterior.png', alt: 'Exterior painting project' },
  { id: 6, tab: 'Exterior', src: '/images/New_exterior2.png', alt: 'Professional exterior finish' },
  { id: 7, tab: 'Exterior', src: '/images/New_exterior3.png', alt: 'Residential exterior work' },
  { id: 8, tab: 'Exterior', src: '/images/New_exterior4.png', alt: 'Exterior detail painting' },
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
    <section id="gallery" className="py-28 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-orange-brand font-semibold text-sm uppercase tracking-[0.2em] mb-4">Our Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mb-5 tracking-tight">
            Project Gallery
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Browse our portfolio of completed projects and see the NextCoat difference for yourself.
          </p>
          <div className="w-16 h-0.5 bg-orange-brand mx-auto mt-6" />
        </div>

        {/* Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-navy text-white shadow-sm'
                  : 'bg-white text-navy hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ${
                visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
              onClick={() => setLightbox(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-52 md:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3">
                  <ZoomIn size={20} className="text-navy" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-14 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 bg-orange-brand hover:bg-orange-light text-white font-semibold px-10 py-4 rounded-lg text-base transition-all duration-200 shadow-lg hover:-translate-y-0.5"
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
              src={lightbox.src}
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
