import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-[#050505] flex flex-col items-center justify-center z-[100]"
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex flex-col items-center gap-10 relative z-10"
      >
        {/* Logo mark */}
        <div className="relative">
          <motion.div
            className="w-16 h-16 rounded-2xl border border-white/[0.08] flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.03)' }}
            animate={{ borderColor: ['rgba(255,255,255,0.08)', 'rgba(59,130,246,0.4)', 'rgba(168,85,247,0.4)', 'rgba(255,255,255,0.08)'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-2xl font-black gradient-text tracking-tight">S</span>
          </motion.div>
          {/* Rotating ring */}
          <motion.div
            className="absolute -inset-1.5 rounded-[18px] border border-transparent"
            style={{
              background: 'linear-gradient(#050505, #050505) padding-box, linear-gradient(135deg, rgba(59,130,246,0.4), rgba(168,85,247,0.4)) border-box',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Wordmark */}
        <div className="text-center space-y-2">
          <motion.div
            className="flex items-center justify-center"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-4xl font-black tracking-[0.15em] text-white">SREYA </span>
            <span className="text-4xl font-black tracking-[0.15em] gradient-text">E A</span>
          </motion.div>
          <p className="text-xs text-slate-600 tracking-[0.3em] uppercase font-mono">
            Portfolio
          </p>
        </div>

        {/* Progress bar */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-40 h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #3b82f6, #a855f7)' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>
          <motion.p
            className="text-[11px] text-slate-700 tracking-widest uppercase font-mono"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  )
}
