import { useEffect, useRef, useState } from 'react'
import { CheckCircle, Award, Users, Clock } from 'lucide-react'

const stats = [
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: CheckCircle, value: '100%', label: 'Satisfaction Rate' },
  { icon: Clock, value: '5★', label: 'Rated Service' },
]

export default function About() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <div
            className={`relative transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            {/* Paint stroke background decoration */}
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-skyblue-light rounded-full opacity-30 blur-3xl pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/interior/man-in-a-working-overall-2026-01-08-02-42-03-utc.webp"
                alt="NextCoat Painting team"
                className="w-full h-[420px] object-cover"
              />
            </div>

          </div>

          {/* Text column */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-10 bg-orange-brand rounded-full" />
              <span className="text-orange-brand font-semibold text-sm uppercase tracking-widest">Who We Are</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy leading-tight mb-6">
              Two Passionate<br />
              People, <span className="text-orange-brand">One Shared</span><br />
              <span className="text-orange-brand">Vision</span>
            </h2>

            <p className="text-gray-brand text-lg leading-relaxed mb-6">
              NextCoat Painting was founded with a simple belief: every home deserves a flawless finish. Led by <strong className="text-navy">Jarred M. Ricks</strong> and a team of dedicated professionals, we bring precision, care, and craftsmanship to every project — big or small.
            </p>

            <p className="text-gray-brand text-base leading-relaxed mb-8">
              Based in Fulton, MD, we serve homeowners throughout the greater Maryland area. Our commitment is simple — show up on time, do the job right, and leave your home looking better than you imagined.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Licensed & fully insured',
                'Free detailed estimates',
                'Premium paints & materials',
                'Clean, respectful job sites',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-navy font-medium">
                  <CheckCircle size={18} className="text-orange-brand flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              Book a Consultation
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-skyblue-light rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon size={22} className="text-navy" />
              </div>
              <p className="text-3xl font-black text-navy mb-1">{value}</p>
              <p className="text-sm text-gray-brand font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
