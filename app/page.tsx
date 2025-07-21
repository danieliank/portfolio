"use client"

import { motion } from "framer-motion"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Awards from "./components/Awards"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
}

export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <Header />
      <main className="container mx-auto px-4 py-12">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  )
}
