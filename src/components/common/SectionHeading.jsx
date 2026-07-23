import { motion } from 'framer-motion'

export default function SectionHeading({ label, title, subtitle, isInView }) {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] mb-5"
        style={{ background: 'rgba(255,255,255,0.03)' }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: 'linear-gradient(135deg, #60a5fa, #a855f7)' }}
        />
        <span className="text-[11px] font-semibold text-slate-500 tracking-[0.2em] uppercase">{label}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-7 h-px w-20 mx-auto rounded-full"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.5), rgba(168,85,247,0.5), transparent)' }}
      />
    </div>
  )
}
