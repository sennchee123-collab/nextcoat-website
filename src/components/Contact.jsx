import { useState, useRef, useEffect } from 'react'
import { Phone, MapPin, Send, CheckCircle, ExternalLink } from 'lucide-react'

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    const data = {
      access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
      subject: `NextCoat Precision Quote Request from ${form.name}`,
      from_name: 'NextCoat Website',
      name: form.name,
      email: form.email,
      phone: form.phone,
      service: form.service,
      message: form.message,
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.success) {
        setSubmitted(true)
        setForm({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        alert('Something went wrong. Please try again or call us directly.')
      }
    } catch {
      alert('Network error. Please try again or call us directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-orange-brand font-semibold text-sm uppercase tracking-[0.2em] mb-4">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mb-5 tracking-tight">
            Request Your Precision Quote
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Complete the form below to schedule your consultation. We'll walk your property, discuss your vision, and provide a detailed, line-item estimate before we leave your driveway.
          </p>
          <div className="w-16 h-0.5 bg-orange-brand mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Contact info */}
          <div
            className={`md:col-span-2 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="bg-navy rounded-xl p-8 md:p-10 text-white">
              <h3 className="text-lg font-bold mb-8">Contact Information</h3>

              <div className="space-y-7">
                <a href="tel:2403426095" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-orange-brand/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-orange-brand" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-medium uppercase tracking-wide mb-0.5">Phone</p>
                    <p className="text-white font-semibold">240.342.6095</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-brand/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-orange-brand" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-medium uppercase tracking-wide mb-0.5">Location</p>
                    <p className="text-white font-semibold">Fulton, MD</p>
                    <p className="text-white/50 text-sm">Serving Greater Maryland Area</p>
                  </div>
                </div>

                <a href="https://gonextcoat.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-orange-brand/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ExternalLink size={16} className="text-orange-brand" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-medium uppercase tracking-wide mb-0.5">Website</p>
                    <p className="text-white font-semibold group-hover:text-orange-brand transition-colors">gonextcoat.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className={`md:col-span-3 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            {submitted ? (
              <div className="bg-gray-50 rounded-xl p-10 border border-gray-100 text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={28} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">Message Sent!</h3>
                <p className="text-gray-500 mb-6">We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-orange-brand text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-light transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 md:p-10 border border-gray-100 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy font-medium text-sm mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-navy text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-all bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-navy font-medium text-sm mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-navy text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-all bg-white"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy font-medium text-sm mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(240) 000-0000"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-navy text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-all bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-navy font-medium text-sm mb-1.5">Service Needed</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-navy text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-all bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option>Interior Painting</option>
                      <option>Exterior Painting</option>
                      <option>Interior & Exterior (Full Home)</option>
                      <option>Consultation Only</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-navy font-medium text-sm mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project — size, timeline, any special requirements..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-navy text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-all resize-none bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 bg-orange-brand hover:bg-orange-light disabled:opacity-70 text-white font-semibold px-8 py-4 rounded-lg text-base transition-all duration-200 hover:-translate-y-0.5"
                >
                  {sending ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={16} strokeWidth={1.5} />
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
