"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Technical Skills",
      skills: [
        { name: "React", level: 85 },
        { name: "Javascript", level: 80 },
        { name: "Swift", level: 90 },
        { name: "SwiftUI", level: 95 },
        { name: "Python", level: 75 },
        { name: "FastAPI", level: 70 },
        { name: "SQL", level: 80 },
        { name: "Machine Learning", level: 75 },
        { name: "MVVM", level: 90 },
        { name: "MVC", level: 85 },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Development Tools",
      skills: [
        { name: "Git", level: 85 },
        { name: "Github", level: 90 },
        { name: "GitFlow", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "Supabase", level: 75 },
        { name: "Postman", level: 80 },
        { name: "Xcode", level: 95 },
        { name: "TestFlight", level: 90 },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Design & Management",
      skills: [
        { name: "Notion", level: 90 },
        { name: "Jira", level: 80 },
        { name: "Confluence", level: 75 },
        { name: "Figma", level: 85 },
        { name: "Miro", level: 80 },
        { name: "Product Management", level: 85 },
        { name: "Agile Methodology", level: 90 },
      ],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Leadership", level: 85 },
        { name: "Teamwork", level: 90 },
        { name: "Pitching", level: 80 },
        { name: "Communication", level: 90 },
        { name: "Public Speaking", level: 85 },
      ],
      color: "from-orange-500 to-red-500",
    },
  ]

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

  return (
    <motion.section
      id="skills"
      className="mb-20"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2 className="text-4xl font-bold mb-12 text-center" variants={itemVariants}>
        Technical{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
      </motion.h2>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white/60 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-500"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <motion.h3
              className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3"
              layoutId={`skill-title-${index}`}
            >
              <motion.div
                className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color}`}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              {category.title}
            </motion.h3>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{
                        duration: 1,
                        delay: index * 0.1 + skillIndex * 0.05,
                        ease: "easeOut",
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/30 rounded-full"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                          delay: index * 0.1 + skillIndex * 0.05 + 1,
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
