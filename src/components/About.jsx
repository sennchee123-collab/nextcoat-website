import { useEffect, useRef, useState } from 'react'
import { ShieldCheck, Building2 } from 'lucide-react'

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
            At <strong className="text-navy">NextCoat Painting</strong>, we believe a premium paint job is about more than just the color on the wall. We've redefined the painting experience for Howard and Montgomery County homeowners by focusing on the integrity of the process, the transparency of the partnership, and the professional standards held by the team you invite into your home.
          </p>
          <div className="w-16 h-0.5 bg-orange-brand mx-auto mt-6" />
        </div>

        {/* Section A — Protecting Your Greatest Investment */}
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
                <ShieldCheck size={20} className="text-orange-brand" />
              </div>
              <h3 className="text-2xl font-bold text-navy tracking-tight">Protecting Your Greatest Investment</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-5">
              We understand that your home is more than just four walls — it's your largest financial asset. Our story began with a realization: Maryland homeowners were looking for more than just a fresh coat of paint; they were looking for stewardship.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Having managed high-stakes real estate refreshes for years, we saw that the <em className="text-navy font-medium">"how"</em> of painting (the brushstrokes) is only half the battle. The <em className="text-navy font-medium">"why"</em> — protecting your property value and ensuring a stress-free process — is what truly matters to you.
            </p>
          </div>
        </div>

        {/* Section B — Corporate Precision, Residential Care */}
        <div className={`grid md:grid-cols-2 gap-16 items-center mb-24 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-orange-brand/10 rounded-lg flex items-center justify-center">
                <Building2 size={20} className="text-orange-brand" />
              </div>
              <h3 className="text-2xl font-bold text-navy tracking-tight">Corporate Precision, Residential Care</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-5">
              With over 30 years of experience in the DMV financial sector, we've spent decades helping small businesses thrive through transparency and meticulous planning. We founded NextCoat because we believe you should receive that same "white-glove" professional touch when renovating your home.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You shouldn't have to wonder about your budget, your timeline, or who is in your house. We bring a consultant's eye for detail and sophisticated project management to every room we service.
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

        {/* Section C — Your Project Advocate */}
        <div className={`bg-gray-50 rounded-2xl p-10 md:p-14 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-md">
                <img src="/images/PROFILE_IMAGE_ANNA.png" alt="Ana G. Ricks" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-orange-brand font-semibold text-sm uppercase tracking-[0.15em] mb-2">Your Project Advocate</p>
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-1 tracking-tight">Ana G. Ricks</h3>
              <p className="text-gray-500 text-sm font-medium mb-5">Principal & Director of Operations</p>
              <p className="text-gray-600 leading-relaxed mb-5">
                As Principal and Director of Operations, Ana's role is to ensure your experience is seamless from the first consultation to the final walkthrough. By applying her background in community banking — where trust and communication are everything — she manages your project with surgical precision.
              </p>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <p className="text-orange-brand font-semibold text-sm uppercase tracking-[0.15em] mb-3">Her Promise to You</p>
                <blockquote className="italic text-navy font-medium leading-relaxed">
                  "I'm here to take the logistics off your plate. We honor the trust you place in us by treating your home with the same financial and physical care we would our own."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
