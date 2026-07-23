import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react'
import SectionHeading from './common/SectionHeading'

const educationList = [
  {
    id: 1,
    primary: true,
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Govt. Model Engineering College, Kochi',
    university: 'APJ Abdul Kalam Technological University (KTU)',
    location: 'Thrikkakara, Kochi, Kerala',
    period: '2020 — 2024',
    grade: 'CGPA: 8.75 / 10',
    gradeColor: 'text-blue-300',
    iconColor: 'text-blue-400',
    iconGrad: 'linear-gradient(135deg, rgba(59,130,246,0.14), rgba(168,85,247,0.12))',
    iconBorder: 'border-blue-500/20',
    gradeBorder: 'border-blue-500/20',
    topBar: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.5), rgba(168,85,247,0.5), transparent)',
    highlights: [],
    coursework: [],
  },
  {
    id: 2,
    primary: false,
    degree: 'CBSE Class XII — Science',
    institution: "Bhavan's Vidya Mandir, Elamakkara",
    university: 'Central Board of Secondary Education (CBSE)',
    location: 'Elamakkara, Kochi, Kerala',
    period: '2020',
    grade: '95.4%',
    gradeColor: 'text-purple-300',
    iconColor: 'text-purple-400',
    iconGrad: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(59,130,246,0.08))',
    iconBorder: 'border-purple-500/20',
    gradeBorder: 'border-purple-500/20',
    topBar: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)',
    highlights: [],
    coursework: [],
  },
  {
    id: 3,
    primary: false,
    degree: 'CBSE Class X',
    institution: "Bhavan's Vidya Mandir, Elamakkara",
    university: 'Central Board of Secondary Education (CBSE)',
    location: 'Elamakkara, Kochi, Kerala',
    period: '2018',
    grade: '95.2%',
    gradeColor: 'text-blue-300',
    iconColor: 'text-blue-400',
    iconGrad: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(168,85,247,0.08))',
    iconBorder: 'border-blue-500/20',
    gradeBorder: 'border-blue-500/20',
    topBar: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.25), transparent)',
    highlights: [],
    coursework: [],
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(168,85,247,0.022) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8" ref={ref}>
        <SectionHeading
          label="Education"
          title="Academic Background"
          subtitle="My educational journey and academic achievements"
          isInView={isInView}
        />

        <div className="mt-10 lg:mt-14 max-w-3xl mx-auto space-y-4">
          {educationList.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 22 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.18 + i * 0.12 }}
            >
              <div
                className="rounded-2xl border border-white/[0.08] overflow-hidden transition-all duration-300 hover:border-white/[0.15] card-shadow card-shadow-hover"
                style={{ background: 'rgba(255,255,255,0.025)' }}
              >
                {/* Top accent line */}
                <div className="h-[1px]" style={{ background: edu.topBar }} />

                <div className={edu.primary ? 'p-7 sm:p-9' : 'p-5 sm:p-6'}>
                  {/* Row: icon + details + grade */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`${edu.primary ? 'w-12 h-12' : 'w-9 h-9'} rounded-xl border ${edu.iconBorder} flex items-center justify-center flex-shrink-0`}
                        style={{ background: edu.iconGrad }}
                      >
                        {edu.primary ? (
                          <GraduationCap size={20} className={edu.iconColor} strokeWidth={1.8} />
                        ) : (
                          <BookOpen size={15} className={edu.iconColor} strokeWidth={1.8} />
                        )}
                      </div>
                      <div>
                        <h3 className={`${edu.primary ? 'text-base sm:text-lg' : 'text-sm'} font-bold text-white leading-snug mb-0.5`}>
                          {edu.degree}
                        </h3>
                        <p className={`${edu.primary ? 'text-sm' : 'text-xs'} font-medium text-slate-300`}>
                          {edu.institution}
                        </p>
                        <p className="text-xs text-slate-600 mt-0.5">{edu.university}</p>
                      </div>
                    </div>

                    <div className="flex flex-row sm:flex-col sm:items-end gap-2 sm:gap-1.5 flex-wrap flex-shrink-0">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Calendar size={10} />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-600">
                        <MapPin size={10} />
                        {edu.location}
                      </div>
                      <div
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border ${edu.gradeBorder}`}
                        style={{ background: 'rgba(255,255,255,0.04)' }}
                      >
                        <Award size={10} className={edu.iconColor} />
                        <span className={`text-xs font-bold ${edu.gradeColor}`}>{edu.grade}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights — only primary */}
                  {edu.primary && edu.highlights.length > 0 && (
                    <div className="space-y-2.5 mt-6 mb-5">
                      {edu.highlights.map((item, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.38 + j * 0.07 }}
                          className="flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ background: 'rgba(96,165,250,0.5)' }} />
                          <p className="text-sm text-slate-400 leading-relaxed">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Coursework — only primary */}
                  {edu.primary && edu.coursework.length > 0 && (
                    <div>
                      <h4 className="text-[10px] font-semibold text-slate-600 uppercase tracking-[0.2em] mb-3">
                        Relevant Coursework
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-2.5 py-1 text-xs text-slate-500 rounded-lg border border-white/[0.07] hover:text-slate-300 hover:border-white/15 transition-colors cursor-default"
                            style={{ background: 'rgba(255,255,255,0.025)' }}
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
