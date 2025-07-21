"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TrophyIcon, AcademicCapIcon } from "@heroicons/react/24/outline"

export default function Awards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const awards = [
    {
      title: "Winner of the Swift Student Challenge 2025",
      type: "Competition",
      icon: TrophyIcon,
      color: "from-yellow-400 to-orange-500",
      description: "Recognized by Apple for outstanding Swift programming skills and innovative app development.",
    },
  ]

  const certifications = [
    {
      title: "SanberCode ReactJS Web Frontend Bootcamp 2022",
      type: "Web Development",
      icon: AcademicCapIcon,
      color: "from-blue-500 to-cyan-500",
      description: "Comprehensive training in React.js, modern JavaScript, and frontend development best practices.",
    },
    {
      title: "SanberCode Flutter Mobile App Development Bootcamp 2022",
      type: "Mobile Development",
      icon: AcademicCapIcon,
      color: "from-purple-500 to-pink-500",
      description:
        "Intensive course covering Flutter framework, Dart programming, and cross-platform mobile development.",
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
      id="awards"
      className="mb-20"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2 className="text-4xl font-bold mb-12 text-center" variants={itemVariants}>
        Awards &{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Certifications
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Awards Section */}
        <motion.div
          variants={itemVariants}
          className="bg-white/60 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-white/20"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <motion.h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3" layoutId="awards-title">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <TrophyIcon className="w-8 h-8 text-yellow-500" />
            </motion.div>
            Awards
          </motion.h3>

          <div className="space-y-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200/50"
                whileHover={{ scale: 1.03, x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`p-3 bg-gradient-to-br ${award.color} rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <award.icon className="h-6 w-6" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 mb-2 group-hover:text-yellow-700 transition-colors duration-300">
                      {award.title}
                    </h4>
                    <p className="text-sm text-yellow-700 font-medium mb-2">{award.type}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{award.description}</p>
                  </div>
                </div>

                {/* Animated background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          variants={itemVariants}
          className="bg-white/60 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-white/20"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <motion.h3
            className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3"
            layoutId="certifications-title"
          >
            <motion.div
              animate={{ rotateY: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <AcademicCapIcon className="w-8 h-8 text-blue-500" />
            </motion.div>
            Certifications
          </motion.h3>

          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200/50"
                whileHover={{ scale: 1.03, x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.2 + 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`p-3 bg-gradient-to-br ${cert.color} rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <cert.icon className="h-6 w-6" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-blue-700 font-medium mb-2">{cert.type}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{cert.description}</p>
                  </div>
                </div>

                {/* Animated background effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  initial={false}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
