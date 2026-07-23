import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, href: 'https://github.com/Sreyaea', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sreya-e-a-9172a7269/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:sreyaea.mec@gmail.com', label: 'Email' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Logo + tagline */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => scrollTo('home')}
              className="text-sm font-black tracking-[0.12em] hover:opacity-80 transition-opacity"
            >
              <span className="text-white">SREYA </span>
              <span className="gradient-text">E A</span>
            </button>
            <span className="text-slate-800 hidden sm:block">·</span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-700 hover:text-slate-400 hover:bg-white/[0.04] transition-all duration-200"
                whileHover={{ scale: 1.1 }}
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
