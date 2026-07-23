import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'Profile', id: 'profile' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Education', id: 'education' },
  { name: 'Contact', id: 'contact' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      const sectionIds = ['home', 'profile', 'expertise', 'experience', 'projects', 'education', 'contact']
      let current = 'home'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (id) => {
    if (id === 'profile') return activeSection === 'profile' || activeSection === 'expertise'
    return activeSection === id
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[70] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #3b82f6, #a855f7)',
        }}
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-nav border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-[60px]">

            {/* Logo */}
            <motion.button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-2.5 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-8 h-8 rounded-lg border border-white/[0.1] flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.04)' }}>
                <span className="text-sm font-black gradient-text">S</span>
              </div>
              <span className="text-base font-black tracking-[0.12em] text-white">
                SREYA <span className="gradient-text">E A</span>
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(link.id)
                      ? 'text-white'
                      : 'text-slate-500 hover:text-slate-200'
                  }`}
                >
                  {isActive(link.id) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-white/[0.08]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              ))}
            </nav>

            {/* Resume Button */}
            <div className="hidden md:flex items-center">
              <motion.a
                href="/resume.pdf"
                download="Sreya_EA_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-xl transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
                whileHover={{ scale: 1.03, opacity: 0.9 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={13} strokeWidth={2.5} />
                Resume
              </motion.a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X size={18} />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden border-t border-white/[0.06]"
              style={{ background: 'rgba(5,5,5,0.95)', backdropFilter: 'blur(20px)' }}
            >
              <div className="px-5 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => { scrollTo(link.id); setMenuOpen(false) }}
                    className={`text-left px-3 py-2.5 text-sm rounded-lg transition-all ${
                      isActive(link.id)
                        ? 'text-white bg-white/[0.06]'
                        : 'text-slate-500 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
                <a
                  href="/resume.pdf"
                  download="Sreya_EA_Resume.pdf"
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 flex items-center gap-2 px-4 py-3 text-sm font-semibold text-white rounded-xl"
                  style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
                >
                  <Download size={13} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
