import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Send
} from 'lucide-react'
import toast from 'react-hot-toast'

const footerLinks = {
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Founder', path: '/about#team' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' }
  ],
  services: [
    { name: 'Digital Transformation', path: '/services' },
    { name: 'AI & Data Strategy', path: '/services' },
    { name: 'Executive Education', path: '/services' },
    { name: 'Leadership Coaching', path: '/services' }
  ],
  resources: [
    { name: 'Capabilities', path: '/services' },
    { name: 'Industries We Love', path: '/industries' },
    { name: 'Get in Touch', path: '/contact' },
    { name: 'Newsletter', path: '#newsletter' }
  ]
}

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' }
]

function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribing(true)
    // Simulate subscription (no backend needed)
    setTimeout(() => {
      toast.success('Thank you for subscribing!')
      setEmail('')
      setIsSubscribing(false)
    }, 500)
  }

  return (
    <footer className="bg-primary-950 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-primary-800">
        <div className="container-custom py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-display font-bold mb-2">
                Stay Ahead with Our Insights
              </h3>
              <p className="text-primary-300">
                Get the latest business strategies and industry insights delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-primary-900 border border-primary-700 rounded-l-lg 
                           focus:outline-none focus:border-accent-500 text-white placeholder-primary-400"
                required
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="px-6 py-3 bg-accent-500 hover:bg-accent-600 rounded-r-lg 
                           transition-colors flex items-center gap-2 font-medium"
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="https://pipconsultinggroup.com/wp-content/uploads/2021/11/PIP-Consulting-logo-080321_final-blue-Group-tag-copy.png"
                alt="PIP Consulting Group"
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-primary-300 mb-6 max-w-sm">
              Digital Transformation with a Human Touch. Uniting cutting-edge technology 
              with the psychology of human performance to guide Fortune 500 leaders.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-800 flex items-center justify-center
                             hover:bg-accent-500 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-300 hover:text-accent-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-300 hover:text-accent-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-300 hover:text-accent-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-primary-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-primary-300">
              <MapPin className="w-5 h-5 text-accent-500" />
              <span>World Headquarters, Trumbull, Connecticut, USA</span>
            </div>
            <div className="flex items-center gap-3 text-primary-300">
              <Phone className="w-5 h-5 text-accent-500" />
              <a href="tel:+12032581746" className="hover:text-accent-400 transition-colors">
                +1 (203) 258-1746
              </a>
            </div>
            <div className="flex items-center gap-3 text-primary-300">
              <Mail className="w-5 h-5 text-accent-500" />
              <a href="mailto:info@pipconsultinggroup.com" className="hover:text-accent-400 transition-colors">
                info@pipconsultinggroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-400">
            <p>© {new Date().getFullYear()} PIP Consulting Group. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-accent-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

