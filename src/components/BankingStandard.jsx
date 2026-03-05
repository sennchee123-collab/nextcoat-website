import { useEffect, useRef, useState } from 'react'
import { ShieldCheck, ClipboardList, MapPin } from 'lucide-react'

const values = [
  {
    icon: ShieldCheck,
    title: 'Financial Integrity',
    description: 'We value precision over "guesstimates." We provide line-item digital quotes that are guaranteed. With NextCoat, the price we shake hands on is the price you pay — no hidden fees, no mid-project surprises, and no "contractor math."',
  },
  {
    icon: ClipboardList,
    title: 'Process-Driven Excellence',
    description: 'We replace chaos with corporate-grade project management. Using professional-grade scheduling and communication tools, we ensure your project hits every milestone on time. You\'ll always know exactly who is in your home and what the day\'s goals are.',
  },
  {
    icon: MapPin,
    title: 'A Local Legacy',
    description: 'We aren\'t a revolving-door franchise; we are your neighbors in Fulton. Our reputation is built one home at a time in Maple Lawn, Clarksville, and Bethesda. We treat your property\'s long-term value as a personal investment in our own community.',
  },
]

export default function BankingStandard() {
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
    <section className="py-28 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-orange-brand font-semibold text-sm uppercase tracking-[0.2em] mb-4">Our Values</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-6 tracking-tight">
            The NextCoat Difference
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Rooted in three decades of financial leadership, we bring a level of analytical discipline and community accountability to the painting industry that simply didn't exist before.
          </p>
          <div className="w-16 h-0.5 bg-orange-brand mx-auto mt-6" />
        </div>

        {/* 3-column grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={`bg-white rounded-xl p-10 border border-gray-100 hover:border-orange-brand/20 hover:shadow-lg transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="w-14 h-14 bg-orange-brand/10 rounded-xl flex items-center justify-center mb-6">
                <Icon size={26} className="text-orange-brand" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3 tracking-tight">{title}</h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
