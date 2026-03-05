import { useEffect, useRef, useState } from 'react'
import { Home, Building2 } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Interior Painting',
    image: '/images/New_interior.png',
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
    image: '/images/New_exterior.png',
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
    <section id="services" className="py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-orange-brand font-semibold text-sm uppercase tracking-[0.2em] mb-4">What We Do</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mb-5 tracking-tight">
            Our Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From a single room to a full home exterior — we handle every project with the same level of discipline and attention to detail.
          </p>
          <div className="w-16 h-0.5 bg-orange-brand mx-auto mt-6" />
        </div>

        {/* Service cards */}
        <div className="space-y-10">
          {services.map(({ icon: Icon, title, image, description, highlights }, i) => (
            <div
              key={title}
              className={`bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                {/* Image */}
                <div className="md:w-2/5 relative overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-orange-brand" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-navy tracking-tight">{title}</h3>
                  </div>

                  <p className="text-gray-500 leading-relaxed mb-6">
                    {description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {highlights.map(({ label, detail }) => (
                      <li key={label} className="flex gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-brand flex-shrink-0" />
                        <div>
                          <p className="text-navy font-semibold text-sm">{label}</p>
                          <p className="text-gray-500 text-sm leading-relaxed">{detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}
                    className="inline-flex items-center gap-2 text-orange-brand font-semibold text-sm hover:underline"
                  >
                    Request a consultation →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
