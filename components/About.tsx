"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CodeBracketIcon, LightBulbIcon, UserGroupIcon } from "@heroicons/react/24/outline"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  }

  const highlights = [
    {
      icon: CodeBracketIcon,
      title: "Technical Excellence",
      description: "1+ years of iOS development with Swift, SwiftUI, and cutting-edge technologies",
    },
    {
      icon: LightBulbIcon,
      title: "Innovation Focus",
      description: "Passionate about AI integration and creating solutions that solve real-world problems",
    },
    {
      icon: UserGroupIcon,
      title: "Leadership Experience",
      description: "Mentored 10+ students and managed multiple product development cycles",
    },
  ]

  return (
    <motion.section
      id="about"
      className="mb-20"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2 className="text-4xl font-bold mb-12 text-center" variants={itemVariants}>
        About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.div
            className="bg-white/60 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-white/20"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Developer with <span className="font-semibold text-blue-600">1+ years of experience</span> in iOS
              development. Strong foundation in product management, agile development methodologies, and artificial
              intelligence. Skilled in building mobile apps, websites, and applying a user-centered design approach.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Experienced in mentoring and bringing digital products to market with international exposure. Driven by
              curiosity, I constantly explore creative solutions and stay updated with emerging technologies.
            </p>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="group bg-white/60 backdrop-blur-sm shadow-lg rounded-xl p-6 border border-white/20 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.03, x: 10 }}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <highlight.icon className="h-6 w-6" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
