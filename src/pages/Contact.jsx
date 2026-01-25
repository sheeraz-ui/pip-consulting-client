import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  Clock,
  Send,
  Loader2,
  CheckCircle2
} from 'lucide-react'
import toast from 'react-hot-toast'
import { contactAPI } from '../utils/api'

const officeLocations = [
  {
    city: 'World Headquarters',
    phone: '+1 (203) 258-1746',
    email: 'info@pipconsultinggroup.com'
  }
]

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    service_interest: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await contactAPI.submit(formData)
      setIsSubmitted(true)
      toast.success('Message sent successfully!')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        service_interest: '',
        message: ''
      })
    } catch (error) {
      toast.error(error.response?.data?.error || 'Failed to send message')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - PIP Consulting Group</title>
        <meta name="description" content="Contact PIP Consulting Group to discuss your digital strategy or schedule an executive coaching session. Located in Trumbull, Connecticut." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-900 to-primary-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-accent-400 font-medium mb-4 block">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Ready to Transform?
            </h1>
            <p className="text-xl text-primary-200">
              Contact us today to discuss your digital strategy or schedule an executive coaching session.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3"
            >
              {isSubmitted ? (
                <div className="bg-green-50 rounded-2xl p-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-primary-900 mb-2">Thank You!</h2>
                  <p className="text-primary-600 mb-6">
                    Your message has been received. We'll get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="bg-primary-50 rounded-2xl p-8 md:p-10">
                  <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-primary-900 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-primary-900 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary-900 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="Your Company Name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-primary-900 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="How can we help?"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary-900 mb-2">
                          How can we help?
                        </label>
                        <select
                          name="service_interest"
                          value={formData.service_interest}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="">Select an option</option>
                          <option value="Corporate Consulting">Corporate Consulting</option>
                          <option value="Executive Coaching">Executive Coaching</option>
                          <option value="Media Inquiry">Media Inquiry</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary-900 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="textarea-field"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-accent w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-primary-600 mb-8">
                  Have a question or want to learn more? We're here to help. Reach out 
                  through any of the channels below.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-lg">
                  <Phone className="w-6 h-6 text-accent-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-900">Phone</h4>
                    <a href="tel:+12032581746" className="text-primary-600 hover:text-accent-500">
                      +1 (203) 258-1746
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-lg">
                  <Mail className="w-6 h-6 text-accent-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-900">Email</h4>
                    <a href="mailto:info@pipconsultinggroup.com" className="text-primary-600 hover:text-accent-500">
                      info@pipconsultinggroup.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-lg">
                  <Clock className="w-6 h-6 text-accent-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-900">Business Hours</h4>
                    <p className="text-primary-600">
                      Mon - Fri: 9:00 AM - 6:00 PM EST
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-primary-900 rounded-xl p-6 text-white">
                <h4 className="font-semibold mb-2">Quick Response Guaranteed</h4>
                <p className="text-primary-200 text-sm">
                  We respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Location with Integrated Map */}
      <section className="relative py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-accent-400 font-semibold text-sm mb-6"
            >
              📍 Visit Us
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-orange-400">Location</span>
            </h2>
            <p className="text-primary-200 text-lg max-w-2xl mx-auto">
              World Headquarters in the heart of Connecticut, serving clients globally
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Location Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl"
            >
              {/* Header with icon */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Contact Us</h3>
                  <p className="text-primary-300">PIP Consulting Group</p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Phone */}
                <motion.a 
                  href="tel:+12032581746"
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer block"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-primary-300 text-sm font-medium mb-1">Phone</p>
                    <p className="text-white text-lg font-semibold">+1 (203) 258-1746</p>
                    <p className="text-primary-200">Mon - Fri, 9:00 AM - 6:00 PM EST</p>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a 
                  href="mailto:info@pipconsultinggroup.com"
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer block"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-primary-300 text-sm font-medium mb-1">Email</p>
                    <p className="text-white text-lg font-semibold">info@pipconsultinggroup.com</p>
                    <p className="text-primary-200">We respond within 24 hours</p>
                  </div>
                </motion.a>

                {/* Business Hours */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <p className="text-primary-300 text-sm font-medium mb-1">Business Hours</p>
                    <p className="text-white text-lg font-semibold">Monday - Friday</p>
                    <p className="text-primary-200">9:00 AM - 6:00 PM EST</p>
                  </div>
                </motion.div>
              </div>

              {/* Global reach indicator */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-primary-300 text-sm text-center">
                  🌍 Serving clients across <span className="text-accent-400 font-semibold">6 continents</span> with a global network of experts
                </p>
              </div>
            </motion.div>

            {/* Map Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 min-h-[500px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47823.45075396621!2d-73.24339!3d41.24291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e80e6d83c2f9ad%3A0x6bb6e4ecbe9b0e64!2sTrumbull%2C%20CT%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PIP Consulting Group - Trumbull, Connecticut"
                className="absolute inset-0"
              />
              
              {/* Overlay badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                <p className="text-primary-900 font-semibold text-sm flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent-500" />
                  PIP Consulting Group
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

