import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Settings, 
  Users,
  Briefcase,
  Target,
  ArrowRight,
  CheckCircle2,
  Zap,
  RefreshCw,
  ShieldCheck,
  GraduationCap,
  BookOpen,
  Video,
  Calendar,
  UserCheck,
  Lightbulb,
  MessageSquare,
  BarChart3,
  FileCheck,
  Network,
  BadgeCheck,
  Presentation,
  Laptop,
  Globe
} from 'lucide-react'

// 16 Customized Services from PDF
const customizedServices = [
  {
    icon: GraduationCap,
    title: 'Customized Executive Programs',
    description: 'Tailored programs designed to address specific challenges and opportunities within an organization. Customized content and delivery methods to meet the unique needs of the client.'
  },
  {
    icon: Users,
    title: 'Leadership Development Programs',
    description: 'Comprehensive leadership development programs for executives, managers, and emerging leaders. Focus on strategic thinking, decision-making, communication, and other essential leadership skills.'
  },
  {
    icon: Briefcase,
    title: 'Management Training Workshops',
    description: 'Workshops covering various management topics, such as project management, team building, conflict resolution, and time management.'
  },
  {
    icon: MessageSquare,
    title: 'Professional Skills Training',
    description: 'Training sessions to enhance specific professional skills, including communication, negotiation, presentation skills, and emotional intelligence.'
  },
  {
    icon: Laptop,
    title: 'Online Learning Platforms',
    description: 'Development and management of online learning platforms, providing flexibility for busy executives to access educational content remotely.'
  },
  {
    icon: Target,
    title: 'Strategic Planning and Execution',
    description: 'Programs to assist executives in developing and implementing strategic plans for organizational growth and success.'
  },
  {
    icon: Zap,
    title: 'Digital Transformation Training',
    description: 'Education on emerging technologies and strategies for navigating digital transformations within the business environment.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation and Creativity Programs',
    description: 'Workshops focused on fostering innovation, creativity, and a culture of continuous improvement within the organization.'
  },
  {
    icon: Globe,
    title: 'Global Business Education',
    description: 'Training programs addressing the challenges and opportunities associated with global business operations. Cross-cultural communication and international business strategies.'
  },
  {
    icon: UserCheck,
    title: 'Executive Coaching',
    description: 'One-on-one coaching sessions for executives to enhance leadership skills, address specific challenges, and achieve professional goals.'
  },
  {
    icon: Settings,
    title: 'Industry-Specific Training',
    description: 'Tailored programs catering to the unique needs of specific industries, such as finance, healthcare, technology, and more.'
  },
  {
    icon: BarChart3,
    title: 'Assessment and Evaluation Services',
    description: 'Assessment tools to evaluate leadership and management capabilities. Feedback mechanisms to measure the effectiveness of training programs.'
  },
  {
    icon: Network,
    title: 'Networking and Peer Learning Events',
    description: 'Facilitation of networking events and peer learning opportunities for executives to share experiences and insights.'
  },
  {
    icon: BadgeCheck,
    title: 'Certification Programs',
    description: 'Specialized certification programs to recognize and validate the skills and knowledge acquired through executive education.'
  },
  {
    icon: RefreshCw,
    title: 'Continuous Learning Initiatives',
    description: 'Strategies to promote a culture of continuous learning within the organization. Regular updates and refresher courses to keep executives abreast of industry trends.'
  },
  {
    icon: FileCheck,
    title: 'TIAA Educational Management',
    description: 'Comprehensive management of all TIAA educational needs, ensuring compliance and maximizing educational benefits for your organization.'
  }
]

// Program Formats
const programFormats = [
  { title: 'Executive Roundtables', icon: Users, desc: 'Peer-to-peer learning sessions' },
  { title: 'Executive Education', icon: GraduationCap, desc: 'Structured learning programs' },
  { title: 'Speaker Series', icon: Presentation, desc: 'Thought leadership events' },
  { title: 'Workshops', icon: BookOpen, desc: 'Hands-on skill building' },
  { title: 'Virtual Events', icon: Video, desc: 'Remote learning experiences' },
  { title: 'Formal 10-15 Week Classes', icon: Calendar, desc: 'In-depth curriculum programs' },
  { title: '1:1 Executive Advising', icon: UserCheck, desc: 'Personalized executive coaching' },
  { title: '1:1 Manager/Director Advising', icon: UserCheck, desc: 'Middle management coaching' }
]


function Services() {
  return (
    <>
      <Helmet>
        <title>Capabilities & Solutions - PIP Consulting Group</title>
        <meta name="description" content="Comprehensive executive education and consulting services. From digital transformation training to 1:1 executive coaching. 16 customized programs for organizational excellence." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 to-primary-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-accent-400 font-medium mb-4 block">Capabilities</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Helping You Unlock Your Leadership Potential with Excellence
            </h1>
            <p className="text-xl text-primary-200">
              When selecting an executive education provider, organizations look for a partner that can tailor 
              its offerings to align with the company's specific goals, industry challenges, and the developmental 
              needs of its executives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Formats - Enhanced UI */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-200 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-violet-200 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-6 py-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full text-primary-700 font-semibold text-sm mb-6"
            >
              🎯 Flexible Delivery Options
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
              Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-violet-600">Formats</span>
            </h2>
            <p className="text-primary-600 text-lg max-w-2xl mx-auto">
              Choose the learning format that best fits your schedule and organizational needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programFormats.map((format, index) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 30, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100 
                              hover:border-accent-300 hover:shadow-xl transition-all duration-300 h-full">
                  {/* Icon with gradient background */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-800 to-primary-600 
                                flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                    <format.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors">
                    {format.title}
                  </h3>
                  <p className="text-primary-600 text-base">{format.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 16 Customized Services - Enhanced Section (Similar to Program Formats) */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
        {/* Background decorations - similar to Program Formats */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-violet-200 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-200 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-6 py-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full text-primary-700 font-semibold text-sm mb-6"
            >
              ✨ Customized Solutions
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-violet-600">Comprehensive</span> Services
            </h2>
            <p className="text-primary-600 text-lg max-w-2xl mx-auto">
              16 customized services tailored to your organization's unique needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customizedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100 
                              hover:border-accent-300 hover:shadow-xl transition-all duration-300 h-full">
                  {/* Icon with gradient background - matching Program Formats style */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-800 to-primary-600 
                                flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-primary-600 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Transformation Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold text-primary-900">
                  Transformation
                </h2>
              </div>
              <p className="text-primary-600 text-lg mb-6">
                Consulting services which identify weaknesses are not problem-solvers. They are part of the problem. Identifying issues is not even the midpoint. It's the start. Creating efficiency in your business pipeline that results in the free flow of long-term results is the true finish line. Few consulting firms take this marathon approach.
              </p>
              <p className="text-primary-600 text-lg">
                No wonder that the vast majority – more than 70% – of these transformational business overhauls fail. We offer comprehensive consulting that does more than assess. We map an implementation strategy at every level of your organization that streamlines efficiency, integrates technology and humanity, and turns your entire business into a hive of collaboration and productivity.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-violet-200 to-purple-200 rounded-3xl blur-2xl opacity-50" />
              <div className="relative bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-10 shadow-xl">
                <div className="text-center text-white">
                  <div className="text-6xl font-display font-bold mb-2">70%</div>
                  <p className="text-violet-100 text-lg">of transformations fail</p>
                  <div className="w-16 h-1 bg-white/30 mx-auto my-4" />
                  <p className="text-white font-medium">We ensure you're in the 30%</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-3xl blur-2xl opacity-50" />
              <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-10 shadow-xl">
                <div className="grid grid-cols-2 gap-6 text-white">
                  <div className="text-center">
                    <RefreshCw className="w-10 h-10 mx-auto mb-3" />
                    <p className="font-semibold">Continuous Monitoring</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-10 h-10 mx-auto mb-3" />
                    <p className="font-semibold">Analytics Tracking</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-10 h-10 mx-auto mb-3" />
                    <p className="font-semibold">Team Mentorship</p>
                  </div>
                  <div className="text-center">
                    <Target className="w-10 h-10 mx-auto mb-3" />
                    <p className="font-semibold">Goal Alignment</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <RefreshCw className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold text-primary-900">
                  Sustainability
                </h2>
              </div>
              <p className="text-primary-600 text-lg mb-6">
                Transformed companies still face the unexpected. They are just better equipped to handle strategic crises than their competitors. For transformation to work it can't remain static. Analytics must be implemented to track effectiveness and continue to drive an organization to increase bottom-line appreciation. Leadership must rise to the challenge to continually raise the bar and exceed the standard.
              </p>
              <p className="text-primary-600 text-lg">
                Business strategies must be willing to shift and fine-tune to maintain an industry advantage. People-centric companies must work to reduce attrition and elevate satisfaction. This requires ongoing monitoring, measuring and mentorship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Due Diligence Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold text-primary-900">
                  Due Diligence
                </h2>
              </div>
              <p className="text-primary-600 text-lg mb-6">
                Audits, regulatory requirements, data security, valuation, evaluation of the competitive landscape – the potential downsides of the unforeseen to any company are vast. More importantly, they're ongoing. Consulting should not just focus on organizational rewards but risks as well. Risk management is as important as revenue management.
              </p>
              <p className="text-primary-600 text-lg">
                Digital tools that help you do more than assess, but also anticipate, minimize your company's exposure. Our extensive experience in crisis management and our digital knowledge give us an advantage we can put to work for you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl blur-2xl opacity-50" />
              <div className="relative bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 shadow-xl">
                <ul className="space-y-4 text-white">
                  {[
                    'Comprehensive Audits',
                    'Regulatory Compliance',
                    'Data Security Assessment',
                    'Competitive Landscape Analysis',
                    'Risk Management Strategy',
                    'Crisis Management Planning'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Process Section - Enhanced UI */}
      <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-accent-500/10 via-violet-500/10 to-accent-500/10 blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
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
              className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-accent-300 font-semibold text-sm mb-6 border border-white/20"
            >
              ⚡ Our Approach
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-violet-400">Work</span>
            </h2>
            <p className="text-primary-200 text-lg max-w-2xl mx-auto">
              A proven methodology that delivers measurable results and lasting impact.
            </p>
          </motion.div>

          {/* Process Steps with connecting line */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500/30 to-transparent -translate-y-1/2" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discover', desc: 'Deep dive into your challenges, goals, and organizational culture', icon: Target, gradient: 'from-cyan-500 to-blue-600' },
                { step: '02', title: 'Strategize', desc: 'Develop tailored solutions and actionable roadmaps', icon: Lightbulb, gradient: 'from-violet-500 to-purple-600' },
                { step: '03', title: 'Execute', desc: 'Implement with precision, agility, and continuous feedback', icon: Zap, gradient: 'from-amber-500 to-orange-600' },
                { step: '04', title: 'Sustain', desc: 'Ensure lasting impact through ongoing support and measurement', icon: TrendingUp, gradient: 'from-emerald-500 to-teal-600' }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  {/* Card */}
                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 
                                hover:border-accent-400/50 hover:bg-white/10 transition-all duration-300 h-full">
                    {/* Step number badge */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} 
                                  flex items-center justify-center mb-6 shadow-lg shadow-${item.gradient.split('-')[1]}-500/25
                                  group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Step indicator */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}>
                        STEP {item.step}
                      </span>
                      <div className={`h-px flex-1 bg-gradient-to-r ${item.gradient} opacity-30`} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-primary-300 text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Take the Next Steps?
            </h2>
            <p className="text-primary-200 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to explore your options and discuss how our programs can help you achieve your professional goals.
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
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services
