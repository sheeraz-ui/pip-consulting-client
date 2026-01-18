import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { 
  ArrowRight, 
  TrendingUp, 
  Cpu, 
  Users,
  Shield,
  Star,
  Quote,
  Building,
  Zap,
  Brain,
  Heart,
  Target,
  Lightbulb,
  BarChart3,
  GraduationCap,
  BookOpen,
  Video,
  Calendar,
  UserCheck,
  Award,
  Presentation,
  Network,
  Layers,
  Workflow
} from 'lucide-react'
import { testimonialAPI } from '../utils/api'
import { universityLogos, clientLogos } from '../assets/logos'

const stats = [
  { value: '500+', label: 'Leaders Coached', icon: Users },
  { value: '100+', label: 'Enterprise Clients', icon: Building },
  { value: '8+', label: 'U.S. Patents', icon: Lightbulb },
  { value: '20+', label: 'Years Experience', icon: Star }
]

const programFormats = [
  { title: 'Executive Roundtables', icon: Users },
  { title: 'Executive Education', icon: GraduationCap },
  { title: 'Speaker Series', icon: Presentation },
  { title: 'Workshops', icon: BookOpen },
  { title: 'Virtual Events', icon: Video },
  { title: 'Formal 10-15 Week Classes', icon: Calendar },
  { title: '1:1 Executive Advising', icon: UserCheck },
  { title: '1:1 Manager/Director Advising', icon: UserCheck }
]

const programHighlights = [
  { title: 'World-Class Faculty', desc: 'Learn from industry experts and thought leaders', icon: Award, gradient: 'from-amber-500 to-orange-600', bg: 'bg-amber-50' },
  { title: 'Customized Curriculum', desc: 'Tailored to suit your specific needs', icon: Target, gradient: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-50' },
  { title: 'Networking', desc: 'Build valuable connections with peers', icon: Users, gradient: 'from-blue-500 to-indigo-600', bg: 'bg-blue-50' },
  { title: 'Practical Insights', desc: 'Gain real-world knowledge you can apply immediately', icon: Lightbulb, gradient: 'from-purple-500 to-violet-600', bg: 'bg-purple-50' },
  { title: 'Flexibility', desc: 'Choose from a range of programs to fit your schedule', icon: Calendar, gradient: 'from-rose-500 to-pink-600', bg: 'bg-rose-50' }
]

const upcomingPrograms = [
  { title: 'Digital Transformation', icon: Zap, gradient: 'from-blue-500 to-cyan-500', desc: 'Lead change in the digital era' },
  { title: 'Artificial Intelligence', icon: Brain, gradient: 'from-violet-500 to-purple-600', desc: 'Master AI-driven strategies' },
  { title: 'Cyber Security', icon: Shield, gradient: 'from-emerald-500 to-green-600', desc: 'Protect digital assets' },
  { title: 'Executive Leadership', icon: Users, gradient: 'from-amber-500 to-orange-600', desc: 'Develop leadership excellence' },
  { title: 'Executive Transformation', icon: TrendingUp, gradient: 'from-rose-500 to-pink-600', desc: 'Transform your organization' },
  { title: 'Executive Database Analytics', icon: BarChart3, gradient: 'from-indigo-500 to-blue-600', desc: 'Data-driven decision making' }
]

// University names for fallback (logos imported from assets)

// Client logos imported from assets (clientLogos from '../assets/logos')

// AI Orb with pulsing glow
const AIOrb = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full ${className}`}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ 
      scale: [1, 1.2, 1],
      opacity: [0.4, 0.8, 0.4]
    }}
    transition={{ 
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
)

// Floating AI Node
const AINode = ({ x, y, delay, size = 12 }) => (
  <motion.div
    className="absolute"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: delay * 0.1, duration: 0.5 }}
  >
    <motion.div
      className="relative"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3 + delay * 0.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div 
        className="rounded-full bg-gradient-to-br from-cyan-400 to-blue-500"
        style={{ width: size, height: size }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-cyan-400"
        animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: delay * 0.2 }}
      />
    </motion.div>
  </motion.div>
)

// Neural Connection Line
const NeuralConnection = ({ x1, y1, x2, y2, delay }) => (
  <motion.line
    x1={`${x1}%`}
    y1={`${y1}%`}
    x2={`${x2}%`}
    y2={`${y2}%`}
    stroke="url(#lineGradient)"
    strokeWidth="1.5"
    strokeLinecap="round"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ 
      pathLength: [0, 1, 1, 0],
      opacity: [0, 0.6, 0.6, 0]
    }}
    transition={{ 
      duration: 4,
      delay,
      repeat: Infinity,
      times: [0, 0.3, 0.7, 1]
    }}
  />
)

// Data Particle flowing along path
const DataParticle = ({ delay }) => (
  <motion.circle
    r="3"
    fill="url(#particleGradient)"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 1, 0] }}
    transition={{ duration: 2, delay, repeat: Infinity }}
  >
    <motion.animate
      attributeName="cx"
      values="10%;30%;50%;70%;90%"
      dur="3s"
      begin={`${delay}s`}
      repeatCount="indefinite"
    />
    <motion.animate
      attributeName="cy"
      values="50%;30%;50%;70%;50%"
      dur="3s"
      begin={`${delay}s`}
      repeatCount="indefinite"
    />
  </motion.circle>
)

// Hexagon Grid Pattern
const HexGrid = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="hexPattern" width="50" height="43.4" patternUnits="userSpaceOnUse">
        <polygon
          points="25,0 50,14.4 50,43.4 25,57.8 0,43.4 0,14.4"
          fill="none"
          stroke="rgba(6, 182, 212, 0.3)"
          strokeWidth="0.5"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hexPattern)" />
  </svg>
)

// Animated Counter
const AnimatedCounter = ({ value, suffix = '' }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const numValue = parseInt(value.replace(/\D/g, ''))
    const controls = animate(count, numValue, { duration: 2 })
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v))
    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [value])

  return <span>{displayValue}{suffix}</span>
}

function Home() {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [testimonialsRes] = await Promise.all([
        testimonialAPI.getFeatured()
      ])
      setTestimonials(testimonialsRes.data.data || [])
    } catch (error) {
      console.error('Failed to fetch data')
    }
  }

  return (
    <>
      <Helmet>
        <title>PIP Consulting Group - Executive Education & Digital Transformation</title>
        <meta name="description" content="Premier executive education company transforming accomplished professionals into visionary leaders. Digital Transformation, AI, Cyber Security, Executive Leadership programs." />
      </Helmet>

      {/* Hero Section - Futuristic AI Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f1a]">
        {/* Deep space gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0d1525] to-[#0f1a2e]" />
        
        {/* Hexagon Grid Pattern */}
        <HexGrid />
        
        {/* Animated AI Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large glowing orbs */}
          <AIOrb className="w-[600px] h-[600px] bg-cyan-500/10 blur-[100px] -top-48 -left-48" delay={0} />
          <AIOrb className="w-[800px] h-[800px] bg-violet-600/10 blur-[120px] -bottom-48 -right-48" delay={1} />
          <AIOrb className="w-[400px] h-[400px] bg-blue-500/15 blur-[80px] top-1/4 right-1/4" delay={2} />
          
          {/* Rotating gradient ring */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 rounded-full border border-cyan-500/10" />
            <div className="absolute inset-8 rounded-full border border-violet-500/10" />
            <div className="absolute inset-16 rounded-full border border-blue-500/10" />
          </motion.div>

          {/* Neural Network Visualization */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="particleGradient">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Neural connections */}
            <g filter="url(#glow)">
              <NeuralConnection x1={5} y1={30} x2={25} y2={45} delay={0} />
              <NeuralConnection x1={25} y1={45} x2={45} y2={35} delay={0.5} />
              <NeuralConnection x1={45} y1={35} x2={65} y2={50} delay={1} />
              <NeuralConnection x1={65} y1={50} x2={85} y2={40} delay={1.5} />
              <NeuralConnection x1={10} y1={60} x2={30} y2={75} delay={2} />
              <NeuralConnection x1={30} y1={75} x2={50} y2={65} delay={2.5} />
              <NeuralConnection x1={50} y1={65} x2={75} y2={80} delay={3} />
              <NeuralConnection x1={75} y1={80} x2={95} y2={70} delay={3.5} />
              <NeuralConnection x1={15} y1={20} x2={35} y2={30} delay={0.3} />
              <NeuralConnection x1={55} y1={20} x2={80} y2={25} delay={0.8} />
            </g>
          </svg>

          {/* AI Nodes */}
          <AINode x={5} y={30} delay={0} size={10} />
          <AINode x={25} y={45} delay={1} size={14} />
          <AINode x={45} y={35} delay={2} size={12} />
          <AINode x={65} y={50} delay={3} size={16} />
          <AINode x={85} y={40} delay={4} size={10} />
          <AINode x={10} y={60} delay={5} size={12} />
          <AINode x={30} y={75} delay={6} size={14} />
          <AINode x={50} y={65} delay={7} size={10} />
          <AINode x={75} y={80} delay={8} size={12} />
          <AINode x={95} y={70} delay={9} size={8} />
          <AINode x={15} y={20} delay={10} size={10} />
          <AINode x={35} y={30} delay={11} size={14} />
          <AINode x={55} y={20} delay={12} size={12} />
          <AINode x={80} y={25} delay={13} size={10} />
        </div>
        
        {/* Main Content */}
        <div className="container-custom relative z-10 pt-24 pb-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* AI Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 mb-8"
              >
                <motion.div
                  animate={{ 
                    boxShadow: ['0 0 20px rgba(6,182,212,0.3)', '0 0 40px rgba(6,182,212,0.6)', '0 0 20px rgba(6,182,212,0.3)']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 
                           border border-cyan-500/30 rounded-full backdrop-blur-sm"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Brain className="w-5 h-5 text-cyan-400" />
                  </motion.div>
                  <span className="text-cyan-300 font-medium text-sm">AI-Powered Executive Education</span>
                  <motion.span
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-cyan-400"
                  />
                </motion.div>
              </motion.div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6">
                <motion.span 
                  className="text-white block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Transform Your
                </motion.span>
                <motion.span 
                  className="relative inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
                    Leadership
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 rounded-full"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </motion.span>
                <motion.span 
                  className="text-white block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  with AI Excellence
                </motion.span>
              </h1>
              
              {/* Subheadline */}
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Where <span className="text-cyan-400 font-semibold">cutting-edge AI</span> meets 
                <span className="text-violet-400 font-semibold"> human potential</span>. 
                Empowering Fortune 500 leaders for the digital age.
              </motion.p>

              <motion.p 
                className="text-lg text-gray-400 mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                World-class faculty. Transformative curriculum. A global network of visionary peers.
              </motion.p>

              {/* CTA Button */}
              <motion.div 
                className="flex flex-wrap gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                <Link to="/services" className="group relative overflow-hidden">
                  <motion.div
                    className="relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl 
                             text-white font-bold text-xl flex items-center gap-4 shadow-2xl shadow-cyan-500/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Explore Programs</span>
                    <motion.div
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    />
                  </motion.div>
                </Link>
              </motion.div>

            </motion.div>

            {/* Right Visual - AI Brain Interface */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden lg:flex items-center justify-center relative"
            >
              {/* Central AI Visualization */}
              <div className="relative w-full max-w-lg aspect-square">
                {/* Outer rotating ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Middle ring with nodes */}
                <motion.div
                  className="absolute inset-8 rounded-full border border-violet-500/30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <motion.div
                      key={angle}
                      className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${angle}deg) translateY(-120px) translateX(-50%)`
                      }}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  ))}
                </motion.div>

                {/* Inner glow */}
                <motion.div
                  className="absolute inset-16 rounded-full bg-gradient-to-br from-cyan-500/30 to-violet-600/30 blur-xl"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Central Brain Icon */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.div
                    className="w-40 h-40 rounded-full bg-gradient-to-br from-[#0d1525] to-[#1a2744] 
                             border border-cyan-500/50 flex items-center justify-center shadow-2xl shadow-cyan-500/20"
                    animate={{ 
                      boxShadow: ['0 0 40px rgba(6,182,212,0.2)', '0 0 80px rgba(6,182,212,0.4)', '0 0 40px rgba(6,182,212,0.2)']
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      <Brain className="w-20 h-20 text-cyan-400" />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Floating Feature Cards */}
                {[
                  { icon: Cpu, label: 'AI Strategy', x: -20, y: 10, delay: 0 },
                  { icon: Network, label: 'Neural Networks', x: 80, y: 15, delay: 0.5 },
                  { icon: Layers, label: 'Deep Learning', x: 85, y: 70, delay: 1 },
                  { icon: Workflow, label: 'Automation', x: -15, y: 75, delay: 1.5 }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="absolute"
                    style={{ left: `${item.x}%`, top: `${item.y}%` }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + item.delay }}
                  >
                    <motion.div
                      className="bg-gradient-to-br from-[#1a2744]/90 to-[#0d1525]/90 backdrop-blur-xl 
                               rounded-2xl p-4 border border-cyan-500/30 shadow-xl shadow-cyan-500/10"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: item.delay }}
                      whileHover={{ scale: 1.05, borderColor: 'rgba(6,182,212,0.6)' }}
                    >
                      <item.icon className="w-8 h-8 text-cyan-400 mb-2" />
                      <p className="text-white text-sm font-medium whitespace-nowrap">{item.label}</p>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Data streams */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-cyan-400"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`
                    }}
                    animate={{
                      x: [0, (Math.random() - 0.5) * 100],
                      y: [0, (Math.random() - 0.5) * 100],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-gray-500 text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-cyan-500/30 rounded-full flex justify-center pt-2">
              <motion.div 
                className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-violet-500 rounded-full"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-900 to-transparent" />
      </section>

      {/* Stats Section - Separate Highlighted Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-900 to-primary-800 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-cyan-500/10 blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            {/* Stats Grid - Centered and Highlighted */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group"
                >
                  {/* Icon with glow */}
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 
                                    flex items-center justify-center shadow-xl">
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Number with gradient */}
                  <motion.div 
                    className="text-5xl md:text-6xl font-extrabold mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-violet-400">
                      <AnimatedCounter value={stat.value} suffix={stat.value.includes('+') ? '+' : ''} />
                    </span>
                  </motion.div>
                  
                  {/* Label */}
                  <p className="text-lg text-gray-300 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="py-24 bg-gradient-to-b from-primary-900 via-primary-800 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
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
              className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 rounded-full text-cyan-300 font-semibold text-sm mb-6"
            >
              ✨ Why Choose PIPCG
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Highlights</span>
            </h2>
            <p className="text-primary-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Proven track record in executive education with high participant satisfaction and success rates.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {programHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 40, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                
                <div className="relative bg-white rounded-3xl p-8 text-center border border-primary-100 
                              shadow-lg group-hover:shadow-2xl group-hover:border-accent-300 transition-all duration-500 h-full">
                  {/* Icon container with gradient */}
                  <motion.div 
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${highlight.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                  >
                    <highlight.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-primary-900 font-bold text-xl mb-3 group-hover:text-accent-600 transition-colors">{highlight.title}</h3>
                  <p className="text-primary-600 text-base leading-relaxed">{highlight.desc}</p>
                  
                  {/* Bottom accent line */}
                  <motion.div 
                    className={`h-1 w-0 bg-gradient-to-r ${highlight.gradient} rounded-full mt-6 mx-auto group-hover:w-16 transition-all duration-500`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Programs Section */}
      <section className="py-24 bg-gradient-to-b from-white via-primary-50/50 to-white">
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
              className="inline-block px-6 py-2 bg-gradient-to-r from-accent-100 to-violet-100 rounded-full text-accent-600 font-semibold text-sm mb-6"
            >
              🚀 What We Offer
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-900 mb-6">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-violet-600">Programs</span>
            </h2>
            <p className="text-primary-600 text-xl max-w-2xl mx-auto">
              Join us for a transformative educational journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-primary-100 
                              group-hover:shadow-2xl group-hover:border-transparent transition-all duration-500 overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon with gradient background */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <program.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-primary-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-900 group-hover:to-accent-600 transition-all">
                    {program.title}
                  </h3>
                  <p className="text-primary-500 text-base mb-4">{program.desc}</p>
                  
                  {/* Learn more link */}
                  <div className="flex items-center gap-2 text-accent-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${program.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`} />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-accent-500 to-violet-600 
                                          text-white font-bold text-lg rounded-2xl shadow-xl shadow-accent-500/30 
                                          hover:shadow-2xl hover:shadow-accent-500/40 hover:scale-105 transition-all">
              Explore Your Options
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* University Affiliations Section */}
      <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent-500 font-medium mb-4 block">Insights from Today's Top Leaders</span>
            <h2 className="section-title mb-4">University Affiliations</h2>
            <p className="section-subtitle mx-auto">
              Faculty and thought leadership from the world's leading academic institutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {universityLogos.map((uni, index) => (
              <motion.div
                key={uni.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-primary-100 hover:border-accent-300 
                         hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
              >
                <img 
                  src={uni.logo} 
                  alt={uni.name} 
                  className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent-200 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-200 rounded-full blur-3xl" />
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
              🌍 Inspired Beyond Limits
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-violet-600">Global Leaders</span>
            </h2>
            <p className="text-primary-600 text-lg max-w-xl mx-auto">
              Partnering with world-class organizations to drive digital excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100 
                              group-hover:shadow-xl group-hover:border-accent-300 transition-all duration-300 
                              flex flex-col items-center justify-center h-28">
                  {/* Client Logo from assets */}
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="h-10 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority & Trust Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent-500 font-medium mb-4 block">Meet Your Guide</span>
              <h2 className="section-title mb-6">The Mind Behind the Mission</h2>
              <p className="text-primary-600 text-lg mb-6">
                Under the guidance of <span className="font-bold text-primary-900">Dr. Paul J. Bailo</span>—Ph.D., MBA, MSW, 
                and inventor of 8+ U.S. Patents—we bring a rare combination of <span className="text-accent-600 font-semibold">academic rigor</span>, 
                <span className="text-accent-600 font-semibold"> technological innovation</span>, and <span className="text-accent-600 font-semibold">deep human understanding</span>.
              </p>
              <p className="text-primary-600 text-lg mb-8">
                As featured in <span className="font-semibold text-primary-900">Interface Magazine</span>, 
                <span className="font-semibold text-primary-900"> Wall Street Journal</span>, and major industry journals.
              </p>
              
              {/* Credential badges with animation */}
              <div className="flex flex-wrap gap-3 mb-8">
                {['Columbia University', 'NYU Professor', '8+ Patents', 'Ph.D. Psychology'].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full shadow-sm border border-primary-100 cursor-default"
                  >
                    <Star className="w-4 h-4 text-accent-500" />
                    <span className="text-sm font-medium text-primary-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-accent-50 rounded-xl p-6 border-l-4 border-accent-500 mb-8">
                <p className="text-primary-700 text-lg">
                  <strong>Contact:</strong><br />
                  📞 203.258.1746<br />
                  📧 pbailo@pipconsultinggroup.com<br />
                  💼 linkedin.com/in/paulbailo
                </p>
              </div>

              <Link to="/about" className="btn-accent">
                Read the Full Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-br from-accent-300 to-violet-300 rounded-3xl blur-2xl opacity-40"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <img
                src="https://pipconsultinggroup.com/wp-content/uploads/2021/11/9F2A9905-1-1-1-scaled.jpg"
                alt="Dr. Paul J. Bailo, Ph.D."
                className="relative rounded-2xl shadow-xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-[#0a0f1a] via-[#0d1525] to-[#0f1a2e] relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan-500/5 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500/20 to-violet-500/20 border border-accent-500/30 mb-6"
            >
              <Heart className="w-8 h-8 text-accent-400" />
            </motion.div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 rounded-full text-cyan-300 font-semibold text-sm mb-6"
            >
              💬 Real Stories, Real Impact
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Transformations <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">That Matter</span>
            </h2>
            <p className="text-primary-300 text-xl max-w-2xl mx-auto">
              Behind every engagement is a human story of growth, courage, and breakthrough.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 
                              group-hover:border-cyan-500/30 transition-all duration-500">
                  {/* Quote mark */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-violet-500/20 flex items-center justify-center">
                    <Quote className="w-6 h-6 text-accent-400" />
                  </div>
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                      >
                        <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Testimonial content */}
                  <p className="text-white/80 text-lg mb-8 italic leading-relaxed group-hover:text-white transition-colors">
                    "{testimonial.content}"
                  </p>
                  
                  {/* User info with photo */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    {/* User photo placeholder */}
                    <div className="relative">
                      <img 
                        src={`https://api.dicebear.com/7.x/personas/svg?seed=${testimonial.client_name || 'user'}&backgroundColor=b6e3f4,c0aede,d1d4f9`}
                        alt={testimonial.client_name}
                        className="w-14 h-14 rounded-full border-2 border-cyan-500/50"
                      />
                      <motion.div 
                        className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 border-2 border-[#0d1525] flex items-center justify-center"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-white text-xs">✓</span>
                      </motion.div>
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">{testimonial.client_name}</div>
                      <div className="text-sm text-cyan-300">
                        {testimonial.client_role}
                      </div>
                      <div className="text-sm text-primary-400">
                        {testimonial.client_company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-500 via-accent-600 to-violet-600 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6"
            >
              <GraduationCap className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Ready to Take the <span className="text-primary-900">Next Steps?</span>
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              Join us for a transformative educational journey. Contact us today to explore your options 
              and discuss how our programs can help you achieve your professional goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-accent-600 font-semibold 
                       rounded-lg hover:bg-primary-50 transition-all shadow-lg text-lg group hover:scale-105"
            >
              Begin Your Journey
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home
