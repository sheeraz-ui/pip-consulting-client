import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Target, 
  Eye, 
  Heart, 
  Lightbulb,
  Users,
  Award,
  Globe,
  TrendingUp,
  ArrowRight,
  BookOpen,
  FileText,
  Shield,
  GraduationCap,
  Star,
  Quote,
  Brain,
  Cpu,
  Phone
} from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We combine cutting-edge technology with human psychology to solve complex challenges.'
  },
  {
    icon: Heart,
    title: 'Human-Centered',
    description: 'Data tells us what is happening; humans tell us why. We focus on both.'
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We work as true partners, invested in your long-term success and growth.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Rigorous academic approach combined with real-world executive experience.'
  }
]

const milestones = [
  { year: '2009', title: 'Phone Interview Pro', description: 'Founded to master human communication in a digital medium' },
  { year: '2012', title: 'Executive Coaching', description: 'Expanded to comprehensive executive career coaching' },
  { year: '2016', title: 'Global Clients', description: 'Serving Fortune 500 executives worldwide' },
  { year: '2019', title: 'Digital Transformation', description: 'Launched enterprise digital transformation practice' },
  { year: '2022', title: 'Executive Education', description: 'Full-service executive education programs launched' },
  { year: '2024', title: 'AI & Leadership', description: 'Pioneering AI-driven leadership development' }
]

// LinkedIn Profile Data
const certifications = [
  { title: 'Artificial Intelligence Strategy', org: 'Cornell University', date: 'Jul 2025', icon: Brain },
  { title: 'Preparing for Digital Transformation', org: 'Cornell University', date: 'Jan 2024', icon: Cpu },
  { title: 'Black Belt Certification', org: 'GE Capital', date: 'May 2001', icon: Award },
  { title: '6 Sigma - Lean 6 Sigma', org: 'GE Capital', date: 'May 2000', icon: Target },
  { title: 'Leadership - Dale Carnegie Institute', org: 'Dale Carnegie Training', date: 'Sep 1999', icon: Users },
  { title: 'Executive Digital Education', org: 'CUNY School of Professional Studies', date: '', icon: GraduationCap }
]

const publications = [
  { outlet: 'CBS Money Watch', title: 'Ace Your Phone Interview: 21 Quick & Simple Tips' },
  { outlet: 'CNBC', title: 'Digital Communication' },
  { outlet: 'CNN Money', title: "Don't wear pajamas for a phone interview" },
  { outlet: 'Forbes', title: "100 Founders Share Their Top 'Aha' Moments" },
  { outlet: 'Wall Street Journal', title: 'Key Tips To Nail a Phone Interview' },
  { outlet: 'US News & World Reports', title: '10 Secrets - Communication' },
  { outlet: 'USA Today', title: 'Make A Good Impression' },
  { outlet: 'WSJ Market Watch', title: 'Work at these 10 companies if you want to be happy' }
]

const patents = [
  { title: 'Method and System for Campaign Management', company: 'American Express', date: 'Apr 2012' },
  { title: 'Communication Evaluation Method and System', company: 'Phone Interview Pro', date: 'Apr 2011' },
  { title: 'Method for Facilitating Payment of Billing Statement', company: 'American Express', date: 'Aug 2007' },
  { title: 'Method and Apparatus for Facilitating Payment', company: 'GE Money', date: 'Jun 2004' },
  { title: 'Methods and Apparatus for Security for Resources', company: 'GE Money', date: 'Sep 2003' },
  { title: 'Automatous Mobile Concierge System', company: 'MasterCard', date: 'Nov 2014' },
  { title: 'Systems for Identifying Transaction Markers', company: 'MasterCard', date: 'Oct 2014' },
  { title: 'Automatous Payment System', company: 'MasterCard', date: 'Sep 2014' }
]

const speakingEngagements = [
  { event: 'Cornell University & AT&T Executive Education', topic: 'Innovation with 5G', type: 'Executive Education' },
  { event: 'Amazon Pay Private Equity Conference', topic: 'Digital Payments', type: 'Executive Panel' },
  { event: 'Westpac Executives Australia', topic: 'Digital Transformation & Innovation', type: 'Keynote' },
  { event: 'World Forum Disruption', topic: 'Strategy & Innovation', type: 'Keynote & MC' },
  { event: 'ANZ Bank Australia', topic: 'Banking on the Future', type: 'Executive Presentation' },
  { event: 'Beijing China - Central University', topic: 'Digital, Data, Innovation & Your Life', type: 'Keynote' },
  { event: 'Google Strategic Retreat', topic: 'Executive Strategy', type: 'Executive Speaker' },
  { event: 'Harvard University - MakeIt', topic: 'Innovation', type: 'Closing Address' }
]

const honorsAwards = [
  { title: 'Best of 2020 - Digital Leader', org: 'Interface Magazine', year: '2020' },
  { title: 'Executive Adviser - Nigeria Cabinet', org: 'NDIC Nigeria', year: '2020' },
  { title: 'Infosys Digital Award', org: 'Infosys', year: '2016' },
  { title: 'Patent Inventor Award', org: 'MasterCard', year: '2015' },
  { title: 'Sales Blazer Award', org: 'MasterCard', year: '2015' }
]

const boardPositions = [
  'Bnkability - Board Member',
  'Texas Military Department Innovation Task Force',
  'Mercy College School of Business - Board of Directors',
  'Contract For Cloud - Board Member',
  'Baseballs 4 A Better Community - Board of Directors',
  'Xen.ai - Board of Director & CEO Advisor (AI/ML)'
]

function About() {
  return (
    <>
      <Helmet>
        <title>About Us - PIP Consulting Group</title>
        <meta name="description" content="Learn about PIP Consulting Group's evolution from Phone Interview Pro to a full-service management consulting firm. Meet Dr. Paul J. Bailo, Ph.D., our founder." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 to-primary-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-accent-400 font-medium mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              The Evolution of Excellence
            </h1>
            <p className="text-xl text-primary-200">
              PIP Consulting Group began with a singular focus: mastering human communication 
              in a digital medium. Originally founded as Phone Interview Pro, we revolutionized 
              how executives presented themselves remotely.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Expanded */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-primary-700 text-xl leading-relaxed mb-6">
                As the digital landscape evolved, so did we. Today, we have expanded into a full-service 
                management consulting firm. We realized that the same psychology required to ace a digital 
                interview is required to lead a digital company.
              </p>
              <p className="text-primary-900 text-xl font-semibold">
                We don't just fix your IT; we fix the mindset behind it.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary-50 rounded-2xl p-8 md:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-900 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">Our Mission</h2>
              <p className="text-primary-700 text-lg">
                To empower organizations and leaders with transformative digital strategies 
                that combine cutting-edge technology with human psychology, driving sustainable 
                growth and competitive advantage in the digital age.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-accent-50 rounded-2xl p-8 md:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-accent-500 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">Our Vision</h2>
              <p className="text-primary-700 text-lg">
                To be the premier consulting partner that bridges the gap between data and people, 
                recognized for transforming organizations through the unique combination of 
                digital expertise and human performance psychology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent-500 font-medium mb-4 block">Our Foundation</span>
            <h2 className="section-title mb-4">Core Values</h2>
            <p className="section-subtitle mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 
                              flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-primary-900" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">{value.title}</h3>
                <p className="text-primary-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent-500 font-medium mb-4 block">Our Journey</span>
            <h2 className="section-title mb-4">Key Milestones</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 text-center md:text-left">
                    <div className={`${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <span className="text-accent-500 font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-semibold text-primary-900 mt-1">{milestone.title}</h3>
                      <p className="text-primary-600 mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-accent-500 rounded-full ring-4 ring-accent-100 hidden md:block" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile - Enhanced with LinkedIn Data */}
      <section id="team" className="section-padding bg-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent-500 font-medium mb-4 block">Founder & Visionary</span>
            <h2 className="section-title mb-4">Meet Dr. Paul J. Bailo</h2>
            <p className="section-subtitle mx-auto">
              A dynamic executive and global digital transformation / AI expert
            </p>
          </motion.div>

          {/* Main Profile Card */}
          <div className="grid lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto mb-16">
            {/* Photo & Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent-300 to-primary-300 rounded-3xl blur-2xl opacity-40" />
                <img
                  src="https://pipconsultinggroup.com/wp-content/uploads/2021/11/9F2A9905-1-1-1-scaled.jpg"
                  alt="Dr. Paul J. Bailo, Ph.D."
                  className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Bio & Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-3xl font-display font-bold text-primary-900">
                    Dr. Paul J. Bailo, Ph.D.
                  </h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-medium rounded-full">
                    Ph.D., MBA, MSW
                  </span>
                </div>
                <p className="text-accent-600 font-medium text-lg">Founder & Chief Digital Strategist • PIP CONSULTING GROUP</p>
              </div>

              <div className="prose prose-lg text-primary-700">
                <p>
                  A dynamic executive and global digital transformation / AI expert with a Ph.D., Dr. Paul J. Bailo 
                  serves as a globally recognized digital executive, entrepreneur, and academic. With a unique 
                  background spanning <strong>Digital Transformation, Data Analytics, and Social Psychology</strong>, 
                  Dr. Bailo holds professorships at top-tier universities including Columbia University and NYU.
                </p>
                <p>
                  He is the author of the best-selling <em>The Essential Digital Interview Handbook</em> and 
                  holds <strong>8+ U.S. patents</strong> in digital user experience and payment systems. His work 
                  spans Fortune 500 companies including American Express, MasterCard, and GE Capital.
                </p>
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border-l-4 border-accent-500">
                <Quote className="w-8 h-8 text-accent-400 mb-3" />
                <p className="text-xl font-display text-primary-900  mb-2">
                  "Data tells us what is happening; humans tell us why."
                </p>
                <p className="text-primary-600">— Dr. Paul J. Bailo</p>
              </div>
            </motion.div>
          </div>

          {/* Patents Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-display font-bold text-primary-900 mb-8 text-center flex items-center justify-center gap-3">
              <FileText className="w-6 h-6 text-accent-500" />
              8+ U.S. Patents
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {patents.map((patent, index) => (
                <motion.div
                  key={patent.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-xl p-5 text-white hover:from-primary-800 hover:to-primary-700 transition-colors"
                >
                  <div className="text-accent-400 text-xs font-medium mb-2">{patent.company}</div>
                  <h4 className="font-semibold text-sm mb-2 line-clamp-2">{patent.title}</h4>
                  <div className="text-primary-300 text-xs">{patent.date}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Media & Publications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-display font-bold text-primary-900 mb-8 text-center flex items-center justify-center gap-3">
              <BookOpen className="w-6 h-6 text-accent-500" />
              Featured In
            </h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.outlet}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all border border-primary-100 hover:border-accent-300 cursor-pointer"
                >
                  <div className="font-bold text-primary-900 text-sm group-hover:text-accent-600 transition-colors">{pub.outlet}</div>
                  <div className="text-primary-500 text-xs mt-1 line-clamp-1">{pub.title}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>



          {/* Honors & Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-display font-bold text-primary-900 mb-8 text-center flex items-center justify-center gap-3">
              <Award className="w-6 h-6 text-accent-500" />
              Honors & Awards
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {honorsAwards.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all border border-primary-100 hover:border-accent-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-accent-600 bg-accent-50 px-2 py-1 rounded">{award.year}</span>
                  </div>
                  <h4 className="font-semibold text-primary-900 text-sm mb-1 group-hover:text-accent-600 transition-colors">
                    {award.title}
                  </h4>
                  <p className="text-primary-500 text-xs">{award.org}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-accent-400 font-medium mb-4 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Your Trusted Partner in Excellence
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent-500/20 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Proven Track Record</h3>
              <p className="text-primary-300 text-sm">Decades of success in executive education and consulting</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent-500/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">High Success Rates</h3>
              <p className="text-primary-300 text-sm">Exceptional participant satisfaction and outcomes</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent-500/20 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-accent-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Global Network</h3>
              <p className="text-primary-300 text-sm">Alumni community across Fortune 500 companies</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent-500/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Ongoing Support</h3>
              <p className="text-primary-300 text-sm">Continuous resources and mentorship beyond programs</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-accent-500 to-accent-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Partner with Dr. Paul J. Bailo and the PIP Consulting Group team to unlock 
              your leadership potential and drive digital excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-accent-600 font-semibold 
                         rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+12032581746"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold 
                         rounded-xl hover:bg-white/10 transition-colors"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call 203.258.1746
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default About

