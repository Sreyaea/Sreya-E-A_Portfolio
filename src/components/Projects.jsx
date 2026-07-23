import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown, BarChart3, Globe, Bot, Upload, Briefcase } from 'lucide-react'
import SectionHeading from './common/SectionHeading'

const projects = [
  {
    id: 1,
    Icon: BarChart3,
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    iconBorder: 'border-blue-500/20',
    accentBorder: 'hover:border-blue-500/25',
    tagBg: 'bg-blue-500/10',
    tagColor: 'text-blue-400',
    dotColor: 'bg-blue-400',
    tag: 'Internal Product · Accenture',
    name: 'Operations & Incident Monitoring Platform',
    overview:
      'Full-Stack internal web application for monitoring ticket status, SLA compliance, incident trends, and operational performance metrics — built to provide centralized visibility and real-time analytics for operational teams.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST APIs'],
    role: 'Full Stack Developer · Accenture',
    contributions: [
      'Developed React.js dashboard components and Node.js REST APIs for ticket tracking, reporting, and operational analytics.',
      'Designed MySQL-based reporting modules for trend analysis, performance monitoring, and data-driven insights.',
      'Implemented advanced search, filtering, prioritization, and automated reporting features to improve operational visibility.',
      'Built an automated SLA escalation module using Node.js, MySQL, Node Cron, and Nodemailer to identify SLA-breached tickets and notify managers via scheduled email alerts.',
      'Collaborated with end users to gather requirements and enhance application usability across multiple releases.',
    ],
    businessImpact:
      'Enhanced operational efficiency by automating SLA breach detection and manager notifications, centralizing ticket monitoring and reporting, reducing manual intervention, and improving response times for critical incidents.',
  },
  {
    id: 2,
    Icon: Globe,
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
    iconBorder: 'border-purple-500/20',
    accentBorder: 'hover:border-purple-500/25',
    tagBg: 'bg-purple-500/10',
    tagColor: 'text-purple-400',
    dotColor: 'bg-purple-400',
    tag: 'Enterprise Integration · Client: Google',
    name: 'Enterprise Integration Platform',
    overview:
      'Large-scale enterprise integration platform responsible for secure communication and data exchange between interconnected business systems and partner applications — delivered as part of a Google engagement at Accenture.',
    technologies: ['SAP PI/PO', 'SAP CPI', 'REST APIs', 'SSL/TLS', 'XML'],
    role: 'Integration Engineer · Accenture (Google Client)',
    contributions: [
      'Developed, analyzed, and debugged integration workflows and interfaces to support reliable communication across interconnected systems.',
      'Performed impact analysis on mappings, configurations, and code changes to ensure system integrity and seamless data flow.',
      'Managed SSL/TLS certificate implementation, deployment validation, and secure connectivity across integration environments.',
      'Collaborated with client and cross-functional teams to gather requirements, troubleshoot integration scenarios, and deliver technical solutions.',
    ],
    businessImpact:
      'Enhanced deployment reliability and secured cross-system communication for enterprise workflows, supporting a large-scale Google integration programme with rigorous impact analysis and SSL/TLS-enforced security.',
  },
  {
    id: 3,
    Icon: Bot,
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    iconBorder: 'border-blue-500/20',
    accentBorder: 'hover:border-blue-500/25',
    tagBg: 'bg-white/[0.05]',
    tagColor: 'text-slate-400',
    dotColor: 'bg-blue-400',
    tag: 'AI Product · Innovature Internship',
    name: 'Customizable AI Chatbot',
    overview:
      'Customizable OpenAI-powered chatbot enabling intelligent query answering from user-ingested data sources. Delivered end-to-end across the full SDLC — from system design through testing and documentation.',
    technologies: ['React.js', 'Django', 'Python', 'OpenAI API', 'JWT Auth', 'MySQL'],
    role: 'Full Stack Developer · Innovature Intern',
    contributions: [
      'Built Django REST APIs with JWT authentication to enable secure and stateless user access.',
      'Developed a responsive React.js frontend with real-time messaging and persistent chat history.',
      'Integrated OpenAI APIs to generate context-aware responses from custom knowledge sources.',
      'Designed MySQL data models for user sessions, chat history, and knowledge base management.',
      'Delivered the solution end-to-end across the SDLC: system design, API development, frontend implementation, testing, debugging, and documentation.',
    ],
    businessImpact:
      'Delivered a production-ready AI chatbot product enabling users to query their own knowledge sources via a secure, JWT-authenticated, real-time conversational interface.',
  },
  {
    id: 4,
    Icon: Upload,
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
    iconBorder: 'border-purple-500/20',
    accentBorder: 'hover:border-purple-500/25',
    tagBg: 'bg-purple-500/10',
    tagColor: 'text-purple-400',
    dotColor: 'bg-purple-400',
    tag: 'Personal Project',
    name: 'Vendor Bulk Upload System',
    overview:
      'A comprehensive bulk data import system enabling users to upload vendor information via Excel files instead of manual entry. Features include file validation, error reporting, upload history tracking, and intelligent data reconciliation.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'XLSX', 'Multer', 'Axios'],
    role: 'Full Stack Developer',
    contributions: [
      'Built React.js frontend with file upload interface, upload history viewer, and error report downloader using Axios for API communication.',
      'Implemented Express.js backend with Multer for file handling and XLSX library for Excel parsing and processing.',
      'Designed comprehensive validation pipeline: mandatory field checks, email format validation, phone and ZIP code verification, vendor type validation, and duplicate detection.',
      'Created error handling system that collects invalid records and generates downloadable Excel error reports for user correction.',
      'Developed MySQL database schema for vendor storage and upload history tracking with detailed metadata (status, success/failure counts, timestamps).',
    ],
    businessImpact:
      'Streamlined vendor data onboarding by enabling bulk uploads instead of manual entry, reducing data entry time by 80% and allowing users to validate and correct data efficiently through automated error reporting.',
  },
  {
    id: 5,
    Icon: Briefcase,
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    iconBorder: 'border-blue-500/20',
    accentBorder: 'hover:border-blue-500/25',
    tagBg: 'bg-blue-500/10',
    tagColor: 'text-blue-400',
    dotColor: 'bg-blue-400',
    tag: 'Personal Project',
    name: 'Job Advisor Portal',
    overview:
      'A job advisory platform designed to assist users in their job search journey with intelligent recommendations and application tracking. Features include resume building with PDF export, NLP-based job recommendations, and multi-role authentication.',
    technologies: ['React.js', 'Flask', 'SQLite', 'NLP'],
    role: 'Full Stack Developer',
    contributions: [
      'Developed React.js frontend with user-friendly interface for job search, resume builder, and application tracking.',
      'Implemented Flask backend with multi-role authentication system supporting different user types (job seekers, employers, admins).',
      'Built resume builder with PDF export functionality allowing users to create and download professional resumes.',
      'Integrated NLP-based job recommendation engine that analyzes user profiles and suggests relevant job opportunities.',
      'Designed SQLite database schema for user profiles, applications, job listings, and recommendation history.',
    ],
    businessImpact:
      'Empowered job seekers with intelligent job recommendations and end-to-end application tracking, improving job discovery efficiency and enabling data-driven career decisions through NLP-powered insights.',
  },
]

function ProjectCard({ project, index, isInView }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative rounded-2xl border border-white/[0.08] ${project.accentBorder} overflow-hidden transition-all duration-300 card-shadow card-shadow-hover flex flex-col min-h-[460px]`}
      style={{ background: 'rgba(255,255,255,0.025)' }}
    >
      {/* Top accent line */}
      <div
        className="h-[1px] w-full flex-shrink-0"
        style={{ background: `linear-gradient(90deg, transparent, ${project.dotColor === 'bg-purple-400' ? 'rgba(192,132,252,0.4)' : 'rgba(96,165,250,0.4)'}, transparent)` }}
      />

      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-11 h-11 ${project.iconBg} border ${project.iconBorder} rounded-xl flex items-center justify-center flex-shrink-0`}>
            <project.Icon size={18} className={project.iconColor} strokeWidth={1.8} />
          </div>
          <div className="flex-1 min-w-0">
            <span className={`inline-block text-[10px] font-semibold ${project.tagColor} ${project.tagBg} px-2 py-0.5 rounded-md mb-2 tracking-wide`}>
              {project.tag}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white leading-snug">{project.name}</h3>
          </div>
        </div>

        {/* Overview */}
        <p className="text-sm text-slate-400 leading-relaxed mb-5">{project.overview}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 text-[11px] font-medium ${project.iconColor} rounded-md border ${project.iconBorder}`}
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Role */}
        <div className="flex items-center gap-2 mb-5 text-xs text-slate-500">
          <span className="text-slate-700">Role:</span>
          <span className="text-slate-400 font-medium">{project.role}</span>
        </div>

        {/* Expandable */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.32, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="space-y-5 pt-1 pb-2">
                {/* Contributions */}
                <div>
                  <h4 className="text-[10px] font-semibold text-slate-600 uppercase tracking-[0.18em] mb-3">
                    Key Contributions
                  </h4>
                  <div className="space-y-2">
                    {project.contributions.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className={`w-1.5 h-1.5 ${project.dotColor} opacity-60 rounded-full mt-1.5 flex-shrink-0`} />
                        <p className="text-sm text-slate-400 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Impact */}
                <div
                  className="p-4 rounded-xl border border-white/[0.06]"
                  style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.05), rgba(168,85,247,0.04))' }}
                >
                  <h4 className="text-[10px] font-semibold text-slate-600 uppercase tracking-[0.15em] mb-2">
                    Business Impact
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{project.businessImpact}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand button */}
        <div className="mt-auto pt-3">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`flex items-center gap-1.5 text-xs font-medium ${project.iconColor} opacity-70 hover:opacity-100 transition-opacity duration-200`}
          >
            <span>{isExpanded ? 'Collapse details' : 'Expand details'}</span>
            <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.22 }}>
              <ChevronDown size={13} />
            </motion.span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.028) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8" ref={ref}>
        <SectionHeading
          label="Work"
          title="Featured Projects"
          subtitle="Selected works from professional and personal projects"
          isInView={isInView}
        />

        <div className="mt-10 lg:mt-14 grid lg:grid-cols-3 gap-4 lg:gap-5 items-start">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
