import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Download, Mail, ChevronDown, Eye, Zap, Layers, Code2, CheckCircle } from 'lucide-react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

// --- Typing Animation Hook ---
function useTypingAnimation(texts, speed = 70, deleteSpeed = 40, pause = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const current = texts[textIndex]
    const tick = () => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1))
        } else {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pause)
          return
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setTextIndex((i) => (i + 1) % texts.length)
        }
      }
    }
    timeoutRef.current = setTimeout(tick, isDeleting ? deleteSpeed : speed)
    return () => clearTimeout(timeoutRef.current)
  }, [displayText, isDeleting, textIndex, texts, speed, deleteSpeed, pause])

  return displayText
}

const stats = [
  { value: '1.5+', label: 'Years Experience', icon: Zap, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  { value: '3', label: 'Enterprise Projects', icon: Layers, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  { value: 'Full', label: 'Stack Development', icon: Code2, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  { value: 'Open', label: 'to Work', icon: CheckCircle, color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
]

const socials = [
  { icon: FiGithub, href: 'https://github.com/Sreyaea', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sreya-e-a-9172a7269/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:sreyaea.mec@gmail.com', label: 'Email' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 })

  // Must call useTransform at component level, not inside JSX
  const blob2X = useTransform(springX, (x) => -x * 0.6)
  const blob2Y = useTransform(springY, (y) => -y * 0.6)
  const blob3X = useTransform(springX, (x) => x * 0.3)
  const blob3Y = useTransform(springY, (y) => y * 0.3)

  const typedText = useTypingAnimation(
    ['React.js  •  Node.js  •  Express.js', 'Full Stack Engineer'],
    75, 40, 2200
  )

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    mouseX.set(((e.clientX - cx) / rect.width) * 40)
    mouseY.set(((e.clientY - cy) / rect.height) * 40)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[60px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Background layer ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />
        {/* Noise overlay */}
        <div className="absolute inset-0 noise-texture opacity-40" />

        {/* Ambient blobs */}
        <motion.div
          className="absolute -top-20 left-1/4 w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 65%)',
            x: springX,
            y: springY,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/5 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 65%)',
            x: blob2X,
            y: blob2Y,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 65%)',
            x: blob3X,
            y: blob3Y,
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full py-20 lg:py-28">
        <div className="flex flex-col items-center text-center">

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-9 border border-emerald-500/20"
            style={{ background: 'rgba(16,185,129,0.06)' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-sm text-emerald-400 font-medium">Available for new opportunities</span>
          </motion.div>

          {/* Main heading — full name on ONE line */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <h1
              className="font-black tracking-tight leading-none mb-6 text-center"
              style={{ fontSize: 'clamp(50px, 10.5vw, 108px)' }}
            >
              <span className="text-white">SREYA </span>
              <span className="gradient-text text-glow-blue">E A</span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-4"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 tracking-tight">
              Full Stack Software Engineer
            </h2>
          </motion.div>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="h-7 mb-8 flex items-center"
          >
            <span className="text-sm sm:text-base font-mono text-blue-400/80 tracking-wide">
              {typedText}
              <span className="ml-0.5 inline-block w-[2px] h-[1em] bg-blue-400 align-middle animate-pulse" />
            </span>
          </motion.div>

          {/* Professional tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-lg text-base sm:text-lg text-slate-500 leading-relaxed mb-10"
          >
            Full Stack Software Engineer with 1.5+ years building modern web applications using React.js, Node.js, Express.js, and Django — with enterprise exposure and effective client collaboration experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.72 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            <motion.button
              onClick={() => scrollTo('projects')}
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', boxShadow: '0 0 30px rgba(59,130,246,0.2)' }}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Eye size={15} strokeWidth={2} />
              View Projects
              <ArrowRight size={13} strokeWidth={2.5} />
            </motion.button>

            <motion.a
              href="/resume.pdf"
              download="Sreya_EA_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 rounded-xl border border-white/[0.1] transition-all duration-200 hover:border-white/25 hover:text-white"
              style={{ background: 'rgba(255,255,255,0.04)' }}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={14} strokeWidth={2} />
              Download Resume
            </motion.a>

            <motion.button
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-500 rounded-xl border border-white/[0.06] hover:text-slate-300 hover:border-white/15 transition-all duration-200"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={14} />
              Contact
            </motion.button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.84 }}
            className="flex items-center gap-3 mb-16 sm:mb-20"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/[0.08] text-slate-500 hover:text-white hover:border-white/20 transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.03)' }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.93 }}
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 + i * 0.08, duration: 0.4 }}
                className={`relative rounded-2xl p-4 sm:p-5 text-center border ${stat.border} transition-all duration-300 hover:scale-[1.03] cursor-default group`}
                style={{ background: 'rgba(255,255,255,0.025)' }}
              >
                <div className={`w-8 h-8 ${stat.bg} ${stat.border} border rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <stat.icon size={14} className={stat.color} strokeWidth={2} />
                </div>
                <div className={`text-xl sm:text-2xl font-black ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-[11px] text-slate-600 font-medium leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('profile')}
        aria-label="Scroll to profile"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-700 hover:text-slate-500 transition-colors duration-200"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-mono">Scroll</span>
        <ChevronDown size={15} />
      </motion.button>
    </section>
  )
}
