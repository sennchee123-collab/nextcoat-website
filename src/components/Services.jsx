import { useEffect, useRef, useState } from 'react'
import { Home, Building2 } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Interior Painting',
    image: '/images/interior/unrecognizable-man-painting-room-wall-in-daylight-2026-01-08-22-11-11-utc.webp',
    badge: 'Most Popular',
    description: 'Inside the home, the focus is on protection and precision. We deliver clean, lasting results on every interior surface.',
    highlights: [
      { label: 'Walls & Ceilings', detail: 'Standard color changes and refreshing "ceiling white" — the bread and butter of any interior job.' },
      { label: 'Trim, Baseboards & Crown Molding', detail: 'Detailed brushwork with the right finishes (semi-gloss) that define and elevate each room.' },
      { label: 'Doors & Window Frames', detail: 'Refreshing entry points to match and complete your new interior aesthetic.' },
      { label: 'Minor Surface Prep', detail: 'Filling nail holes, light sanding, and caulking gaps in trim before the first coat — always included.' },
    ],
  },
  {
    icon: Building2,
    title: 'Exterior Painting',
    image: '/images/exterior/red-house-with-balcony-2026-01-05-04-34-25-utc.webp',
    badge: 'Curb Appeal',
    description: 'Outside, the focus shifts to durability and weatherproofing. We protect your home while making it look its very best.',
    highlights: [
      { label: 'Siding Painting', detail: 'Wood, hardie plank, or aluminum siding painted with premium exterior-grade coatings built to last.' },
      { label: 'Trim & Fascia', detail: 'Painting the "outline" of your house — including soffits and eaves — for a polished, finished look.' },
      { label: 'Front Door Refinishing', detail: 'A high-value service that dramatically boosts curb appeal with minimal material cost.' },
      { label: 'Standard Surface Prep', detail: 'Scraping loose/peeling paint and caulking around windows and doors to lock out moisture.' },
    ],
  },
]

export default function Services() {
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

  return (
    <section id="services" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-10 bg-orange-brand rounded-full" />
            <span className="text-orange-brand font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <div className="h-1 w-10 bg-orange-brand rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-navy mb-4">
            Our <span className="text-orange-brand">Services</span>
          </h2>
          <p className="text-gray-brand text-lg max-w-2xl mx-auto">
            From a single room to a full home exterior — we handle every painting project with the same level of professionalism and attention to detail.
          </p>
        </div>

        {/* Service cards — full-width image + detail layout */}
        <div className="space-y-8">
          {services.map(({ icon: Icon, title, image, badge, description, highlights }, i) => (
            <div
              key={title}
              className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 group ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                {/* Image */}
                <div className="md:w-2/5 relative overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-navy/60 to-transparent" />
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-orange-brand text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                    {badge}
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-8 md:p-10">
                  {/* Title row */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 bg-skyblue-light rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-navy" />
                    </div>
                    <div>
                      <p className="text-orange-brand text-xs font-semibold uppercase tracking-widest">Residential Service</p>
                      <h3 className="text-2xl font-black text-navy leading-tight">{title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-brand text-sm leading-relaxed mb-6 border-l-4 border-skyblue-brand pl-4 italic">
                    {description}
                  </p>

                  <ul className="space-y-4">
                    {highlights.map(({ label, detail }) => (
                      <li key={label} className="flex gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-brand flex-shrink-0" />
                        <div>
                          <p className="text-navy font-semibold text-sm">{label}</p>
                          <p className="text-gray-brand text-sm leading-relaxed">{detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}
                    className="inline-flex items-center gap-2 mt-7 text-orange-brand font-bold text-sm hover:underline"
                  >
                    Request a quote →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div
          className={`mt-14 bg-navy rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Paint brush accent */}
          <div className="absolute opacity-10 pointer-events-none select-none hidden md:block right-32 top-0">
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
              Ready to Start Your Project?
            </h3>
            <p className="text-skyblue-brand text-base">
              Get a free, no-obligation estimate from our team today.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}
            className="flex-shrink-0 bg-orange-brand hover:bg-orange-light text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
          >
            Get Free Estimate
          </a>
        </div>
      </div>
    </section>
  )
}
