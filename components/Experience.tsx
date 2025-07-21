"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/24/outline"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "iOS Developer",
      company: "Apple Developer Academy @BINUS",
      period: "Mar 2024 – Feb 2025",
      type: "Full-time",
      icon: BriefcaseIcon,
      responsibilities: [
        "Developed 5 cross-platform apps for iOS, iPadOS, and watchOS across domains including daily habits, games, health, and education using Agile methodology and integrating Artificial Intelligence.",
        "Leveraged cutting-edge technologies such as SwiftUI, HealthKit, ARKit, and WatchKit to create innovative user experiences.",
        "Implemented MVVM architecture patterns and followed iOS development best practices.",
      ],
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Product Manager",
      company: "Apple Developer Academy @BINUS",
      period: "Mar 2024 – Feb 2025",
      type: "Full-time",
      icon: BriefcaseIcon,
      responsibilities: [
        "Managed 3 iOS and iPadOS apps by leading product research, defining user personas, identifying unique selling points, and creating detailed Product Requirement Documents.",
        "Conducted user research and applied user-centered design approach to ensure product-solution fit.",
        "Collaborated with cross-functional teams using Agile methodologies to deliver products to market.",
      ],
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Scholarship Mentor & English Tutor",
      company: "BINUS University",
      period: "Aug 2022 – Jul 2023",
      type: "Part-time",
      icon: AcademicCapIcon,
      responsibilities: [
        "Mentored 10+ students in topics in Artificial Intelligence, receiving an 'Excellent' Scholarship Mentor Award.",
        "Tutored 50+ students in job interview preparation and communication skills in English.",
        "Developed leadership and communication skills through mentoring and teaching activities.",
      ],
      color: "from-green-500 to-teal-600",
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
      id="experience"
      className="mb-20"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2 className="text-4xl font-bold mb-12 text-center" variants={itemVariants}>
        Work{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
      </motion.h2>

      <div className="relative">
        {/* Timeline Line */}
        <motion.div
          className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"
          initial={{ height: 0 }}
          animate={isInView ? { height: "100%" } : { height: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="relative flex items-start gap-8">
              {/* Timeline Node */}
              <motion.div
                className={`relative z-10 p-3 bg-gradient-to-br ${exp.color} rounded-full text-white shadow-lg`}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <exp.icon className="h-6 w-6" />
              </motion.div>

              {/* Content Card */}
              <motion.div
                className="flex-1 bg-white/60 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-white/20"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <motion.h3 className="text-2xl font-bold text-gray-800 mb-1" layoutId={`exp-title-${index}`}>
                      {exp.title}
                    </motion.h3>
                    <motion.p className="text-blue-600 font-semibold text-lg mb-2" layoutId={`exp-company-${index}`}>
                      {exp.company}
                    </motion.p>
                  </div>
                  <div className="text-right">
                    <motion.span
                      className="text-gray-500 font-medium block"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      {exp.period}
                    </motion.span>
                    <motion.span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${exp.color} text-white mt-2`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                    >
                      {exp.type}
                    </motion.span>
                  </div>
                </div>

                <motion.ul className="space-y-3" variants={containerVariants}>
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <motion.li
                      key={respIndex}
                      className="flex items-start gap-3 text-gray-700 leading-relaxed"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <motion.div
                        className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 flex-shrink-0`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: respIndex * 0.2 }}
                      />
                      <span>{responsibility}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
