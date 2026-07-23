import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, AlertCircle, Clock } from 'lucide-react'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import SectionHeading from './common/SectionHeading'

const contactLinks = [
  {
    icon: FiMail,
    label: 'Email',
    display: 'sreyaea.mec@gmail.com',
    href: 'mailto:sreyaea.mec@gmail.com',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    iconBorder: 'border-blue-500/20',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    display: '+91 94970 28264',
    href: 'tel:+919497028264',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
    iconBorder: 'border-purple-500/20',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    display: 'github.com/Sreyaea',
    href: 'https://github.com/Sreyaea',
    iconColor: 'text-slate-400',
    iconBg: 'bg-white/[0.06]',
    iconBorder: 'border-white/[0.1]',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    display: 'sreya-e-a-9172a7269',
    href: 'https://www.linkedin.com/in/sreya-e-a-9172a7269/',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    iconBorder: 'border-blue-500/20',
  },
]

const inputClass =
  'w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-700 border border-white/[0.08] focus:outline-none focus:border-blue-500/40 focus:bg-white/[0.04] transition-all duration-200'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')

    try {
      // Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY with actual EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_name: 'Sreya',
        },
        'YOUR_PUBLIC_KEY'
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(59,130,246,0.03) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8" ref={ref}>
        <SectionHeading
          label="Contact"
          title="Get In Touch"
          subtitle="Open to full-time opportunities, collaborations, and conversations"
          isInView={isInView}
        />

        <div className="mt-10 lg:mt-14 grid lg:grid-cols-2 gap-10">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="space-y-5"
          >
            {/* Availability */}
            <div
              className="rounded-2xl p-6 border border-emerald-500/20"
              style={{ background: 'rgba(16,185,129,0.04)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-sm font-semibold text-emerald-400">Currently Available</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Actively exploring full-time Software Engineer roles — product companies, startups, and enterprise tech teams.
                Open to React, Node.js, or full-stack positions.
              </p>
            </div>

            {/* Contact cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.08] hover:border-white/20 transition-all duration-200 group"
                  style={{ background: 'rgba(255,255,255,0.025)' }}
                  whileHover={{ y: -2 }}
                >
                  <div className={`w-9 h-9 ${link.iconBg} border ${link.iconBorder} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <link.icon size={14} className={link.iconColor} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-slate-600 mb-0.5 uppercase tracking-wide">{link.label}</p>
                    <p className="text-sm text-slate-400 font-medium truncate group-hover:text-white transition-colors">
                      {link.display}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Response note */}
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.06]"
              style={{ background: 'rgba(255,255,255,0.015)' }}
            >
              <Clock size={13} className="text-slate-600 flex-shrink-0" />
              <p className="text-xs text-slate-600">Typically responds within 24 hours</p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/[0.08] p-7 sm:p-8 space-y-5 card-shadow"
              style={{ background: 'rgba(255,255,255,0.025)' }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-semibold text-slate-600 uppercase tracking-[0.15em] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={inputClass}
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-600 uppercase tracking-[0.15em] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={inputClass}
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-semibold text-slate-600 uppercase tracking-[0.15em] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className={inputClass}
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold text-slate-600 uppercase tracking-[0.15em] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Describe the opportunity or ask your question..."
                  className={`${inputClass} resize-none`}
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-emerald-500/20"
                  style={{ background: 'rgba(16,185,129,0.06)' }}
                >
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <p className="text-sm text-emerald-400">Message sent successfully!</p>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-red-500/20"
                  style={{ background: 'rgba(239,68,68,0.06)' }}
                >
                  <AlertCircle size={14} className="text-red-400" />
                  <p className="text-sm text-red-400">Failed to send. Please email directly.</p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', boxShadow: '0 0 40px rgba(59,130,246,0.15)' }}
                whileHover={status !== 'sending' ? { scale: 1.01, opacity: 0.92 } : {}}
                whileTap={status !== 'sending' ? { scale: 0.99 } : {}}
              >
                {status === 'sending' ? (
                  <>
                    <motion.span
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.75, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={14} strokeWidth={2} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
