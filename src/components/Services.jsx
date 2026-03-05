import { useEffect, useRef, useState } from 'react'
import { Home, Building2, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Interior Painting',
    image: '/images/New_interior.png',
    highlights: [
      { label: 'Precision Wall & Ceiling Coating', detail: 'Flawless coverage and sharp lines that define your living space.' },
      { label: 'Architectural Detailing', detail: 'High-durability finishes for crown molding, wainscoting, and baseboards that create a high-end, custom look.' },
      { label: 'Substrate Preparation', detail: 'We believe a great paint job is 70% preparation. We meticulously fill, sand, and caulk to ensure a gallery-smooth finish.' },
    ],
  },
  {
    icon: Building2,
    title: 'Exterior Painting',
    image: '/images/New_exterior.png',
    highlights: [
      { label: 'High-Performance Siding Systems', detail: 'We use premium, weather-resistant coatings designed to withstand Maryland\'s seasons while restoring your home\'s curb appeal.' },
      { label: 'The Grand Entrance', detail: 'Professional refinishing for front doors — the single most impactful way to elevate your home\'s first impression.' },
      { label: 'Moisture & Decay Defense', detail: 'Beyond aesthetics, we scrape, prime, and seal to lock out moisture and prevent costly long-term damage.' },
    ],
  },
]

const checklist = [
  'Licensed: MHIC License #: Pending',
  'Liability & Workers Comp Insurance',
  'Daily Site Clean-up & Organization',
  'Final Walkthrough with Principal',
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
            Whether it's a focused interior refresh or a full exterior restoration, we apply the same professional-grade project management and meticulous attention to detail to every square inch of your property.
          </p>
          <div className="w-16 h-0.5 bg-orange-brand mx-auto mt-6" />
        </div>

        {/* Service cards */}
        <div className="space-y-10">
          {services.map(({ icon: Icon, title, image, highlights }, i) => (
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
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-orange-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-orange-brand" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-navy tracking-tight">{title}</h3>
                  </div>

                  <ul className="space-y-4 mb-8">
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
                    Request your precision quote →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The NextCoat Standard Checklist */}
        <div className={`mt-14 bg-gray-50 rounded-xl p-8 md:p-10 border border-gray-100 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h4 className="text-lg font-bold text-navy mb-5">The NextCoat Standard</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {checklist.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle size={16} className="text-orange-brand flex-shrink-0" />
                <span className="text-gray-600 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
