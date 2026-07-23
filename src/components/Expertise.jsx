import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiReact, SiNodedotjs, SiExpress, SiDjango, SiFlask,
  SiJavascript, SiPython, SiMysql, SiSqlite,
  SiHtml5, SiGit, SiPostman, SiGithub,
} from 'react-icons/si'
import { Monitor, Server, Cpu, Database, Network, Wrench } from 'lucide-react'
import SectionHeading from './common/SectionHeading'

const categories = [
  {
    icon: Monitor,
    title: 'Frontend',
    desc: 'Responsive, accessible user interfaces',
    gradient: 'from-blue-500/[0.12] to-transparent',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    borderDefault: 'border-white/[0.07]',
    borderHover: 'hover:border-blue-500/30',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: null, color: '#2965F1', letter: 'CS' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ],
  },
  {
    icon: Server,
    title: 'Backend',
    desc: 'Server-side logic and API design',
    gradient: 'from-purple-500/[0.12] to-transparent',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
    borderDefault: 'border-white/[0.07]',
    borderHover: 'hover:border-purple-500/30',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#3C873A' },
      { name: 'Express.js', icon: SiExpress, color: '#eeeeee' },
      { name: 'Django', icon: SiDjango, color: '#44B78B' },
      { name: 'Flask', icon: SiFlask, color: '#eeeeee' },
    ],
  },
  {
    icon: Cpu,
    title: 'Programming',
    desc: 'Multi-paradigm problem solving',
    gradient: 'from-blue-500/[0.10] to-purple-500/[0.05]',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    borderDefault: 'border-white/[0.07]',
    borderHover: 'hover:border-blue-500/30',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Java', icon: null, color: '#f89820', letter: 'Jv' },
      { name: 'C', icon: null, color: '#a8b9cc', letter: 'C' },
    ],
  },
  {
    icon: Database,
    title: 'Databases',
    desc: 'Relational schema design and queries',
    gradient: 'from-purple-500/[0.12] to-transparent',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
    borderDefault: 'border-white/[0.07]',
    borderHover: 'hover:border-purple-500/30',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#00758F' },
      { name: 'SQLite', icon: SiSqlite, color: '#64ACDB' },
    ],
  },
  {
    icon: Network,
    title: 'API Development',
    desc: 'Secure API design and auth flows',
    gradient: 'from-blue-500/[0.10] to-transparent',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    borderDefault: 'border-white/[0.07]',
    borderHover: 'hover:border-blue-500/30',
    skills: [
      { name: 'REST APIs', icon: null, color: '#60a5fa', letter: 'R' },
      { name: 'JWT Auth', icon: null, color: '#a78bfa', letter: 'J' },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools & Workflow',
    desc: 'Developer tooling and productivity',
    gradient: 'from-purple-500/[0.10] to-transparent',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
    borderDefault: 'border-white/[0.07]',
    borderHover: 'hover:border-purple-500/30',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'VS Code', icon: null, color: '#007ACC', letter: 'V' },
      { name: 'GitHub', icon: SiGithub, color: '#e2e8f0' },
      { name: 'Copilot', icon: null, color: '#a78bfa', letter: 'AI' },
    ],
  },
]

export default function Expertise() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="expertise" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8" ref={ref}>
        <SectionHeading
          label="Skills"
          title="Core Expertise"
          subtitle="Technologies applied in professional, production environments"
          isInView={isInView}
        />

        <div className="mt-10 lg:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-2xl p-6 border ${cat.borderDefault} ${cat.borderHover} transition-all duration-300 group overflow-hidden card-shadow card-shadow-hover`}
              style={{ background: 'rgba(255,255,255,0.025)' }}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl pointer-events-none`} />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 ${cat.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                    <cat.icon size={15} className={cat.iconColor} strokeWidth={2} />
                  </div>
                  <h3 className="text-sm font-bold text-white">{cat.title}</h3>
                </div>

                <p className="text-xs text-slate-600 mb-5 leading-relaxed">{cat.desc}</p>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200 cursor-default group/skill"
                      style={{ background: 'rgba(255,255,255,0.03)' }}
                    >
                      {skill.icon ? (
                        <skill.icon size={11} style={{ color: skill.color }} />
                      ) : (
                        <span className="text-[9px] font-bold leading-none" style={{ color: skill.color }}>
                          {skill.letter}
                        </span>
                      )}
                      <span className="text-[11px] text-slate-500 group-hover/skill:text-slate-200 transition-colors font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
