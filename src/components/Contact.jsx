import { useState, useRef, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)

    const subject = encodeURIComponent(`NextCoat Quote Request from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:Info@gonextcoat.com?subject=${subject}&body=${body}`

    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-10 bg-orange-brand rounded-full" />
            <span className="text-orange-brand font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
            <div className="h-1 w-10 bg-orange-brand rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-navy mb-4">
            Request a <span className="text-orange-brand">Free Quote</span>
          </h2>
          <p className="text-gray-brand text-lg max-w-xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours with a detailed estimate.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Contact info */}
          <div
            className={`md:col-span-2 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="bg-navy rounded-2xl p-8 text-white h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <a href="tel:2403426095" className="flex items-start gap-4 group">
                  <div className="w-11 h-11 bg-orange-brand rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-skyblue-brand text-xs font-medium uppercase tracking-wide mb-0.5">Phone</p>
                    <p className="text-white font-semibold">240.342.6095</p>
                  </div>
                </a>


                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-orange-brand rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-skyblue-brand text-xs font-medium uppercase tracking-wide mb-0.5">Location</p>
                    <p className="text-white font-semibold">Fulton, MD</p>
                    <p className="text-white/60 text-sm">Serving Greater Maryland Area</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-white/60 text-sm mb-1">Website</p>
                <a href="https://gonextcoat.com" className="text-skyblue-brand hover:text-white transition-colors font-medium">
                  gonextcoat.com
                </a>
              </div>

              {/* Decorative paint stroke */}
              <div className="mt-8 opacity-20 pointer-events-none select-none">
                <svg viewBox="0 0 200 60" className="w-full">
                  <ellipse cx="100" cy="30" rx="95" ry="22" fill="#A8D8E8" transform="rotate(-3 100 30)" />
                </svg>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className={`md:col-span-3 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-black text-navy mb-2">Message Sent!</h3>
                <p className="text-gray-brand mb-6">Your email client should have opened. We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-orange-brand text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-light transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy font-semibold text-sm mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-orange-brand focus:ring-2 focus:ring-orange-brand/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-navy font-semibold text-sm mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-orange-brand focus:ring-2 focus:ring-orange-brand/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy font-semibold text-sm mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(240) 000-0000"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-orange-brand focus:ring-2 focus:ring-orange-brand/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-navy font-semibold text-sm mb-1.5">Service Needed</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-orange-brand focus:ring-2 focus:ring-orange-brand/20 transition-all bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option>Interior Painting</option>
                      <option>Exterior Painting</option>
                      <option>Interior & Exterior (Full Home)</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-navy font-semibold text-sm mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project — size, timeline, any special requirements..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-orange-brand focus:ring-2 focus:ring-orange-brand/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 bg-orange-brand hover:bg-orange-light disabled:opacity-70 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-lg hover:-translate-y-0.5"
                >
                  {sending ? (
                    <span>Opening Email...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
