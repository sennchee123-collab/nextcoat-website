import { useEffect, useRef, useState } from 'react'
import { TrendingUp, Briefcase } from 'lucide-react'

export default function About() {
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
    <section id="about" className="py-28 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-orange-brand font-semibold text-sm uppercase tracking-[0.2em] mb-4">About NextCoat</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-6 tracking-tight">
            A New Standard of Professionalism<br className="hidden md:block" /> in the Painting Industry
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            At <strong className="text-navy">NextCoat Painting</strong>, we believe a premium paint job is about more than just the color on the wall. It's about the integrity of the process, the transparency of the partnership, and the professional standards held by the team you invite into your home.
          </p>
          <div className="w-16 h-0.5 bg-orange-brand mx-auto mt-6" />
        </div>

        {/* Section A — Story */}
        <div className={`grid md:grid-cols-2 gap-16 items-center mb-24 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/New_interior2.png"
              alt="NextCoat interior project"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-orange-brand/10 rounded-lg flex items-center justify-center">
                <TrendingUp size={20} className="text-orange-brand" />
              </div>
              <h3 className="text-2xl font-bold text-navy tracking-tight">From Investment to Artistry</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-5">
              Our story began at the intersection of professional discipline and a personal passion for transformation. Before launching NextCoat, we spent years managing our own real estate projects and leading interior refreshes for close friends and family. We learned early on that a quality paint job is the single most impactful way to protect and enhance a property's value.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Those early projects taught us the <em className="text-navy font-medium">"how,"</em> but our professional background taught us the <em className="text-navy font-medium">"why."</em>
            </p>
          </div>
        </div>

        {/* Section B — Professionalism */}
        <div className={`grid md:grid-cols-2 gap-16 items-center mb-24 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-orange-brand/10 rounded-lg flex items-center justify-center">
                <Briefcase size={20} className="text-orange-brand" />
              </div>
              <h3 className="text-2xl font-bold text-navy tracking-tight">A Foundation of Professionalism</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-5">
              With over 30 years of combined experience in the <strong className="text-navy">DC, Maryland, and Virginia</strong> financial sectors, we've spent our careers helping small businesses throughout <strong className="text-navy">Howard County</strong> and the greater DMV grow and thrive.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We recognized a gap in the home improvement industry — a need for the same "white-glove" professional touch and financial transparency found in the corporate world. We founded NextCoat Painting to bridge that gap, bringing sophisticated project management and a consultant's eye for detail to every home we service.
            </p>
          </div>
          <div className="order-1 md:order-2 relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/New_exterior3.png"
              alt="NextCoat professional standards"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Section C — The Founder */}
        <div className={`bg-gray-50 rounded-2xl p-10 md:p-14 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-md">
                <img src="/images/PROFILE_IMAGE_ANNA.png" alt="Ana G. Ricks" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-orange-brand font-semibold text-sm uppercase tracking-[0.15em] mb-2">Meet the Face of NextCoat</p>
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-1 tracking-tight">Ana G. Ricks</h3>
              <p className="text-gray-500 text-sm font-medium mb-5">Principal & Director of Operations</p>
              <p className="text-gray-600 leading-relaxed mb-5">
                As the lead at NextCoat, Ana oversees the client experience from the initial consultation to the final walkthrough. Drawing on her extensive background in community banking and her hands-on experience managing real estate refreshes, she ensures that every project is managed with surgical precision and clear communication.
              </p>
              <blockquote className="border-l-4 border-orange-brand pl-5 italic text-navy font-medium leading-relaxed">
                "My goal is to take the stress out of home improvement. We aren't just painting walls; we are protecting your family's biggest investment and honoring the trust you place in us." — Ana G. Ricks
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
