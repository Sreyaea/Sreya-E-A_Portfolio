import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Code2, Database, Users, GitBranch, Layers } from 'lucide-react'
import SectionHeading from './common/SectionHeading'

const highlights = [
  {
    icon: Globe,
    title: 'Enterprise Application Development',
    desc: 'Delivered production-grade internal tools and dashboards serving operational teams at Accenture.',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    iconBorder: 'border-blue-500/20',
  },
  {
    icon: Code2,
    title: 'React & Node.js Engineering',
    desc: 'Built full-stack applications using React.js for the UI and Node.js / Express.js for REST APIs.',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
    iconBorder: 'border-purple-500/20',
  },
  {
    icon: Database,
    title: 'Database & Authentication',
    desc: 'Worked with MySQL and SQLite; implemented JWT-based authentication and secure session flows.',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    iconBorder: 'border-blue-500/20',
  },
  {
    icon: Users,
    title: 'Client Collaboration',
    desc: 'Engaged in requirement gathering and cross-functional collaboration with enterprise clients.',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
    iconBorder: 'border-purple-500/20',
  },
  {
    icon: GitBranch,
    title: 'SDLC & Agile Practices',
    desc: 'Worked through complete software development lifecycle from requirements to deployment validation.',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    iconBorder: 'border-blue-500/20',
  },
  {
    icon: Layers,
    title: 'API & System Integration',
    desc: 'Developed REST APIs and contributed to enterprise SAP integration platforms for secure communication.',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
    iconBorder: 'border-purple-500/20',
  },
]

const techBadges = ['React.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'MySQL', 'SQLite', 'JWT Auth', 'REST APIs', 'Python', 'JavaScript', 'Java', 'C', 'Git', 'Postman']

export default function Profile() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="profile" className="py-20 lg:py-28 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(59,130,246,0.03) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8" ref={ref}>
        <SectionHeading
          label="Profile"
          title="Professional Profile"
          subtitle="React.js · Node.js · Django · REST APIs · Enterprise Delivery"
          isInView={isInView}
        />

        <div className="mt-10 lg:mt-14 grid lg:grid-cols-2 gap-10 items-start">

          {/* Left — Summary */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="space-y-4"
          >
            <div
              className="rounded-2xl p-7 sm:p-8 border border-white/[0.08] card-shadow"
              style={{ background: 'rgba(255,255,255,0.025)' }}
            >
              <p className="text-slate-300 text-base leading-[1.8] mb-5">
                <span className="text-white font-semibold">Full-Stack Software Engineer</span> with{' '}
                <span className="text-white font-semibold">1.5+ years</span> of experience building enterprise web applications, integration solutions, and AI-powered applications using{' '}
                <span className="text-blue-400 font-medium">React.js</span>,{' '}
                <span className="text-blue-400 font-medium">Node.js</span>,{' '}
                <span className="text-blue-400 font-medium">Express.js</span>,{' '}
                <span className="text-blue-400 font-medium">Django</span>, and{' '}
                <span className="text-blue-400 font-medium">MySQL</span>. Proficient in developing{' '}
                <span className="text-purple-400 font-medium">responsive user interfaces</span>,{' '}
                <span className="text-purple-400 font-medium">secure REST APIs</span>, and{' '}
                <span className="text-purple-400 font-medium">scalable backend services</span>.
              </p>
              <p className="text-slate-400 text-base leading-[1.8]">
                At <span className="text-white font-medium">Accenture</span>, contributed to enterprise internal products and a Google client integration platform, gaining hands-on experience in{' '}
                <span className="text-blue-400">client collaboration</span>,{' '}
                <span className="text-blue-400">requirement analysis</span>,{' '}
                <span className="text-blue-400">enterprise integrations</span>, and{' '}
                <span className="text-blue-400">cross-functional solution delivery</span>. Previously, as a{' '}
                <span className="text-white font-medium">Software Intern at Innovature</span>, developed an OpenAI-powered chatbot, delivering the solution end-to-end from system design and API development to frontend implementation, testing, and documentation.
              </p>
            </div>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium text-slate-500 rounded-lg border border-white/[0.07] hover:text-slate-300 hover:border-white/15 transition-colors cursor-default"
                  style={{ background: 'rgba(255,255,255,0.025)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.07, duration: 0.45 }}
                className="rounded-xl p-5 border border-white/[0.07] hover:border-white/[0.15] transition-all duration-300 group cursor-default"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <div className={`w-9 h-9 ${item.iconBg} border ${item.iconBorder} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}>
                  <item.icon size={15} className={item.iconColor} strokeWidth={2} />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1.5 leading-snug">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
