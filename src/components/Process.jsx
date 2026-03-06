import { useEffect, useRef, useState } from 'react'
import { MessageSquare, ClipboardCheck, Palette, PaintBucket, CheckCircle } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Precision Quoting',
    badge: 'No-Surprise Guarantee',
    description: 'We provide a detailed, line-item digital quote before we leave your driveway. Our "No-Surprise" guarantee means the price we quote is the price you pay.',
    image: '/images/Anna_firststep.jpg',
  },
  {
    num: '02',
    icon: ClipboardCheck,
    title: 'The Protection Phase',
    badge: null,
    description: 'We treat your home like a sanctuary. This phase is about more than sanding; it\'s about dust containment, heavy-duty floor shielding, and meticulous masking.',
    image: '/images/Step_3.png',
  },
  {
    num: '03',
    icon: Palette,
    title: 'Curated Specifications',
    badge: null,
    description: 'A great finish is only as good as the chemistry behind it. We partner with Sherwin Williams to create exceptional depth of color and "scrubbability" in high-traffic areas.',
    image: '/images/Step_2.png',
  },
  {
    num: '04',
    icon: PaintBucket,
    title: 'Active Project Management',
    badge: null,
    description: 'Precision execution meets modern communication. You\'ll receive daily progress updates so you\'re never in the dark about the status of your home.',
    image: '/images/Step_4.png',
  },
  {
    num: '05',
    icon: CheckCircle,
    title: 'White-Glove Walkthrough',
    badge: null,
    description: 'We don\'t just "finish" — we close the books. We conduct a final meticulous walkthrough with you to ensure every line is sharp and every expectation is exceeded.',
    image: '/images/Step_5.png',
  },
]

export default function Process() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" className="py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-orange-brand font-semibold text-sm uppercase tracking-[0.2em] mb-4">How We Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-6 tracking-tight">
            Our 5-Step Process
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            A structured, transparent approach from first consultation to final walkthrough.
          </p>
          <div className="w-16 h-0.5 bg-orange-brand mx-auto mt-6" />
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map(({ num, icon: Icon, title, badge, description, image }, i) => (
            <div
              key={num}
              className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              {/* Image — alternating sides */}
              <div className={`relative rounded-xl overflow-hidden shadow-md ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  src={image}
                  alt={title}
                  className="w-full h-[280px] object-cover"
                />
                {/* Step number overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-navy font-extrabold text-sm px-3 py-1.5 rounded-lg shadow-sm">
                  Step {num}
                </div>
              </div>

              {/* Content */}
              <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-brand/10 rounded-xl flex items-center justify-center">
                    <Icon size={24} className="text-orange-brand" strokeWidth={1.5} />
                  </div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-navy tracking-tight">{title}</h3>
                    {badge && (
                      <span className="bg-orange-brand text-white text-xs font-semibold px-3 py-1 rounded-full">{badge}</span>
                    )}
                  </div>
                </div>
                <p className="text-gray-500 leading-relaxed text-[15px]">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-20 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 bg-orange-brand hover:bg-orange-light text-white font-semibold px-10 py-4 rounded-lg text-base transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            Start With Step 01 — It's Free
          </a>
        </div>
      </div>
    </section>
  )
}
