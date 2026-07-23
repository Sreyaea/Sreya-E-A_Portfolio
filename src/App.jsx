import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen key="loading" />
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative min-h-screen bg-[#050505]"
        >
          <Navbar />
          <main>
            <Hero />
            <Profile />
            <Expertise />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
