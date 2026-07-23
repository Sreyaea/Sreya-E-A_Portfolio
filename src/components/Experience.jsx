import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, ChevronDown } from 'lucide-react'
import SectionHeading from './common/SectionHeading'

const experiences = [
  {
    company: 'Accenture',
    logo: 'AC',
    role: 'Packaged App Development Associate',
    period: 'Jul 2024 — Feb 2026',
    location: 'Bangalore, India',
    type: 'Full-time',
    logoColor: 'text-purple-400',
    logoBg: 'bg-purple-500/10',
    logoBorder: 'border-purple-500/20',
    lineColor: 'bg-purple-500',
    responsibilities: [
      'Developed enterprise web applications using React.js and Node.js.',
      'Built REST APIs, dashboard components, and reporting modules.',
      'Worked on enterprise integration workflows, deployment validation, and secure system connectivity.',
      'Performed debugging, impact analysis, and application enhancements.',
      'Collaborated with clients, end users, and cross-functional teams to deliver technical solutions.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST APIs', 'SAP PI/PO', 'SAP CPI', 'SSL/TLS', 'Git'],
  },
  {
    company: 'Innovature',
    logo: 'IN',
    role: 'Software Intern',
    period: 'May 2023',
    location: 'Kochi, Kerala',
    type: 'Internship',
    project: 'Customizable AI Chatbot',
    logoColor: 'text-blue-400',
    logoBg: 'bg-blue-500/10',
    logoBorder: 'border-blue-500/20',
    lineColor: 'bg-blue-500',
    responsibilities: [
      'Built Django REST APIs with JWT authentication to enable secure and stateless user access.',
      'Developed a responsive React.js frontend with real-time messaging and persistent chat history.',
      'Integrated OpenAI APIs to generate context-aware responses from custom knowledge sources.',
      'Designed MySQL data models for user sessions, chat history, and knowledge base management.',
      'Delivered the solution end-to-end across the SDLC including system design, API development, frontend implementation, testing, debugging, and documentation.',
    ],
    technologies: ['React.js', 'Django', 'Python', 'OpenAI API', 'JWT Auth', 'MySQL', 'REST APIs'],
  },
]

function ExperienceCard({ exp, index, isInView }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.18 }}
      className="relative rounded-2xl border border-white/[0.08] overflow-hidden transition-all duration-300 hover:border-white/[0.15] card-shadow card-shadow-hover"
      style={{ background: 'rgba(255,255,255,0.025)' }}
    >
      {/* Left accent stripe */}
      <div className={`absolute left-0 top-0 bottom-0 w-[3px] ${exp.lineColor}`} />

      <div className="p-6 sm:p-8 pl-8 sm:pl-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5 mb-6">
          <div className="flex items-start gap-4">
            <div
              className={`w-12 h-12 ${exp.logoBg} border ${exp.logoBorder} rounded-xl flex items-center justify-center flex-shrink-0`}
            >
              <span className={`text-sm font-black ${exp.logoColor} tracking-tight`}>{exp.logo}</span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">{exp.company}</h3>
              <p className="text-sm sm:text-base font-medium text-slate-300">{exp.role}</p>
              {exp.project && (
                <p className="text-xs text-blue-400 mt-1 font-mono">
                  Project: {exp.project}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-row sm:flex-col sm:items-end gap-2 sm:gap-1.5 flex-wrap">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Calendar size={11} />
              {exp.period}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <MapPin size={11} />
              {exp.location}
            </div>
            <span className="text-[10px] px-2 py-1 rounded-md border border-white/[0.07] text-slate-600"
              style={{ background: 'rgba(255,255,255,0.025)' }}>
              {exp.type}
            </span>
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-medium text-slate-500 rounded-md border border-white/[0.07]"
              style={{ background: 'rgba(255,255,255,0.025)' }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Responsibilities (always visible: first 2) */}
        <div className="space-y-2.5 mb-4">
          {exp.responsibilities.slice(0, 2).map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{ background: 'rgba(96,165,250,0.5)' }} />
              <p className="text-sm text-slate-400 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        {/* Expandable details */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.32, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="space-y-5 pb-2 pt-1">
                {/* Remaining responsibilities */}
                <div className="space-y-2.5">
                  {exp.responsibilities.slice(2).map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ background: 'rgba(96,165,250,0.5)' }} />
                      <p className="text-sm text-slate-400 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-300 transition-colors duration-200 group"
        >
          <span>{expanded ? 'Show less' : 'Show details'}</span>
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.22 }}>
            <ChevronDown size={13} />
          </motion.span>
        </button>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(168,85,247,0.025) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8" ref={ref}>
        <SectionHeading
          label="Career"
          title="Professional Experience"
          subtitle="Accenture (Full-time) · Innovature (Intern)"
          isInView={isInView}
        />

        <div className="mt-10 lg:mt-14 space-y-5">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
