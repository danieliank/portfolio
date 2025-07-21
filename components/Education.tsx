"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { AcademicCapIcon, TrophyIcon } from "@heroicons/react/24/outline"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
      id="education"
      className="mb-20"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2 className="text-4xl font-bold mb-12 text-center" variants={itemVariants}>
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
      </motion.h2>

      <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
        <motion.div
          className="bg-white/60 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-white/20 relative overflow-hidden"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600" />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <AcademicCapIcon className="h-8 w-8" />
                </motion.div>
                <div>
                  <motion.h3 className="text-2xl font-bold text-gray-800 mb-2" layoutId="education-title">
                    Bachelor of Computer Science
                  </motion.h3>
                  <motion.p className="text-blue-600 font-semibold text-lg mb-1" layoutId="education-university">
                    BINUS University
                  </motion.p>
                  <p className="text-gray-600 font-medium">Intelligent Systems / Artificial Intelligence</p>
                </div>
              </div>
              <motion.span
                className="text-gray-500 font-medium mt-4 md:mt-0"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 0.3 }}
              >
                2021 – 2025
              </motion.span>
            </div>

            <motion.div
              className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 p-6 rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <TrophyIcon className="h-6 w-6 text-green-600" />
                </motion.div>
                <h4 className="text-lg font-bold text-green-800">Academic Excellence</h4>
              </div>
              <motion.p
                className="text-green-800 font-semibold text-xl mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                GPA: 3.81 / 4.00
              </motion.p>
              <p className="text-green-700 font-medium">Received an "Excellent" Scholarship Mentor Award</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
