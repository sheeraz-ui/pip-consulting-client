import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Building2, 
  Heart, 
  Cpu, 
  Factory, 
  Shirt, 
  Leaf,
  Plane,
  Globe,
  Landmark,
  Shield,
  Wallet,
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  Award,
  CheckCircle2,
  Sparkles,
  Zap,
  BarChart3,
  LineChart,
  PieChart
} from 'lucide-react'

const industries = [
  { 
    name: 'Banking', 
    icon: Landmark, 
    color: 'from-blue-500 to-blue-600',
    description: 'Digital banking transformation, regulatory compliance, and customer experience optimization.',
    stats: '50+ Banking clients'
  },
  { 
    name: 'Financial Services', 
    icon: Wallet, 
    color: 'from-emerald-500 to-emerald-600',
    description: 'Fintech integration, risk management, and operational excellence strategies.',
    stats: 'Global reach'
  },
  { 
    name: 'Wealth Management', 
    icon: Building2, 
    color: 'from-amber-500 to-amber-600',
    description: 'Portfolio optimization, client engagement, and digital advisory platforms.',
    stats: '$100B+ AUM clients'
  },
  { 
    name: 'Insurance', 
    icon: Shield, 
    color: 'from-indigo-500 to-indigo-600',
    description: 'Claims automation, underwriting transformation, and insurtech solutions.',
    stats: 'Top 10 insurers'
  },
  { 
    name: 'Aerospace', 
    icon: Plane, 
    color: 'from-sky-500 to-sky-600',
    description: 'Supply chain optimization, MRO digitization, and safety compliance systems.',
    stats: 'Defense & Commercial'
  },
  { 
    name: 'Green Energy', 
    icon: Leaf, 
    color: 'from-green-500 to-green-600',
    description: 'Sustainable operations, renewable integration, and ESG strategy development.',
    stats: 'Net-zero pathways'
  },
  { 
    name: 'Global Supply Chains', 
    icon: Globe, 
    color: 'from-purple-500 to-purple-600',
    description: 'End-to-end visibility, resilience planning, and logistics optimization.',
    stats: '6 continents'
  },
  { 
    name: 'Healthcare', 
    icon: Heart, 
    color: 'from-rose-500 to-rose-600',
    description: 'Patient experience, telehealth integration, and clinical workflow automation.',
    stats: 'Hospital systems'
  },
  { 
    name: 'Technology', 
    icon: Cpu, 
    color: 'from-cyan-500 to-cyan-600',
    description: 'Product strategy, engineering excellence, and go-to-market acceleration.',
    stats: 'Fortune 500 tech'
  },
  { 
    name: 'Manufacturing', 
    icon: Factory, 
    color: 'from-orange-500 to-orange-600',
    description: 'Industry 4.0, predictive maintenance, and lean operations transformation.',
    stats: 'Smart factories'
  },
  { 
    name: 'Fashion', 
    icon: Shirt, 
    color: 'from-pink-500 to-pink-600',
    description: 'Omnichannel retail, supply chain sustainability, and brand experience.',
    stats: 'Global brands'
  },
  { 
    name: 'Government', 
    icon: Landmark, 
    color: 'from-slate-500 to-slate-600',
    description: 'Digital services, citizen engagement, and public sector modernization.',
    stats: 'Federal & State'
  }
]

const impactStats = [
  { number: '500+', label: 'Leaders Coached', icon: Users },
  { number: '100+', label: 'Enterprise Clients', icon: Building2 },
  { number: '12', label: 'Industries Served', icon: Target },
  { number: '95%', label: 'Client Satisfaction', icon: Award }
]

const whyChoosePoints = [
  {
    title: 'Deep Domain Expertise',
    description: 'Our consultants bring 20+ years of hands-on experience in their respective industries.',
    icon: Award
  },
  {
    title: 'Regulatory Knowledge',
    description: 'Deep understanding of industry-specific compliance, regulations, and governance requirements.',
    icon: Shield
  },
  {
    title: 'Digital Transformation',
    description: 'Proven methodologies for industry-specific digital transformation and innovation.',
    icon: Zap
  },
  {
    title: 'Global Network',
    description: 'Access to a network of industry leaders, innovators, and thought leaders worldwide.',
    icon: Globe
  },
  {
    title: 'Data-Driven Insights',
    description: 'Leverage analytics and AI to uncover opportunities and drive measurable outcomes.',
    icon: BarChart3
  },
  {
    title: 'Tailored Solutions',
    description: 'Customized strategies adapted to your unique challenges, culture, and goals.',
    icon: Target
  }
]

const approachSteps = [
  { step: '01', title: 'Industry Assessment', desc: 'Deep dive into your sector\'s landscape, challenges, and opportunities' },
  { step: '02', title: 'Competitive Analysis', desc: 'Benchmark against industry leaders and identify differentiation opportunities' },
  { step: '03', title: 'Strategy Development', desc: 'Create tailored roadmaps aligned with industry best practices' },
  { step: '04', title: 'Execution & Scale', desc: 'Implement with precision and scale for sustainable competitive advantage' }
]

function Industries() {
  return (
    <>
      <Helmet>
        <title>Industries We Love - PIP Consulting Group</title>
        <meta name="description" content="PIP Consulting Group serves clients across Banking, Financial Services, Healthcare, Technology, Manufacturing, Aerospace, Green Energy, and more." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-accent-500/20 to-blue-500/20 border border-accent-400/30 text-accent-300 text-sm font-medium"
              >
                <Sparkles className="w-4 h-4" />
                Specialized Expertise
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-blue-400">Love</span>
              </h1>
              <p className="text-xl text-primary-200 mb-8">
                We bring deep sector knowledge and specialized expertise to help organizations 
                navigate industry-specific challenges and seize emerging opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-accent">
                  Discuss Your Industry
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white hover:text-primary-900 transition-all duration-300"
                >
                  View Capabilities
                </Link>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {impactStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
                >
                  <stat.icon className="w-8 h-8 text-accent-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-primary-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Grid - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-100 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-6 py-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full text-primary-700 font-semibold text-sm mb-6"
            >
              🏢 Sectors We Serve
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
              Deep Expertise Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-blue-600">12 Industries</span>
            </h2>
            <p className="text-primary-600 text-lg max-w-2xl mx-auto">
              From Fortune 500 enterprises to emerging leaders, we partner with organizations across diverse industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30, rotateX: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100 
                                hover:border-accent-300 hover:shadow-xl transition-all duration-300 h-full">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} 
                                  flex items-center justify-center mb-4 shadow-lg
                                  group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-primary-600 text-sm mb-3 leading-relaxed">
                      {industry.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent-600 bg-accent-50 px-3 py-1 rounded-full">
                      <TrendingUp className="w-3 h-3" />
                      {industry.stats}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-6 py-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full text-primary-700 font-semibold text-sm mb-6"
            >
              💡 Why Choose PIP
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
              Industry-Specific <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-blue-600">Expertise</span>
            </h2>
            <p className="text-primary-600 text-lg max-w-2xl mx-auto">
              Our consultants bring decades of hands-on experience. We don't just understand the theory—we've lived the challenges and know what works.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border border-primary-100 hover:border-accent-300 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-800 to-primary-600 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                    <point.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-primary-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-primary-900 relative overflow-hidden">
        {/* Animated background glow */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-cyan-500/20 blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-6 py-2 bg-gradient-to-r from-primary-700 to-primary-600 rounded-full text-primary-200 font-semibold text-sm mb-6"
            >
              ⚡ Our Approach
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-blue-400">Engage</span>
            </h2>
            <p className="text-primary-300 text-lg max-w-2xl mx-auto">
              A proven methodology adapted to your industry's unique requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
              >
                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent-400 to-blue-400 mb-4 block">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-primary-300 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-block px-6 py-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full text-primary-700 font-semibold text-sm mb-6"
              >
                🎯 Key Differentiators
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-6">
                What Sets Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-blue-600">Apart</span>
              </h2>
              <p className="text-primary-600 text-lg mb-8">
                We combine deep industry knowledge with cutting-edge methodologies to deliver transformative results that matter.
              </p>

              <div className="space-y-4">
                {[
                  { text: 'Former C-suite executives as advisors', highlight: '20+ years average experience' },
                  { text: 'Proprietary frameworks for each industry', highlight: 'Proven methodologies' },
                  { text: 'Global perspective with local execution', highlight: '6 continents served' },
                  { text: 'Data-driven decision making', highlight: 'AI-powered insights' },
                  { text: 'Long-term partnership approach', highlight: '85% client retention' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-primary-100 hover:border-accent-300 hover:shadow-md transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-primary-900 font-medium">{item.text}</p>
                      <span className="text-accent-600 text-sm font-semibold">{item.highlight}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-200 to-primary-200 rounded-3xl blur-2xl opacity-50" />
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-primary-100">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">Industry Impact</h3>
                  <p className="text-primary-600">Measurable results across all sectors</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                    <LineChart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-blue-700">40%</div>
                    <div className="text-blue-600 text-sm">Avg. Efficiency Gain</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-green-700">3x</div>
                    <div className="text-green-600 text-sm">ROI Delivered</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                    <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-purple-700">500+</div>
                    <div className="text-purple-600 text-sm">Leaders Coached</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl">
                    <PieChart className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-amber-700">95%</div>
                    <div className="text-amber-600 text-sm">Success Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent-500 to-blue-500 flex items-center justify-center"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-blue-400">Your Industry?</span>
            </h2>
            <p className="text-primary-200 text-lg mb-10 max-w-2xl mx-auto">
              Let's discuss how our deep industry expertise can help you navigate challenges, 
              capitalize on opportunities, and achieve sustainable competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-accent text-lg">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a 
                href="tel:+12032581746" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white 
                         font-semibold rounded-lg hover:bg-white hover:text-primary-900 transition-all duration-300 text-lg"
              >
                📞 Call 203.258.1746
              </a>
            </div>

            <p className="text-primary-400 text-sm mt-8">
              Join 100+ enterprise clients who trust PIP Consulting Group
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Industries
