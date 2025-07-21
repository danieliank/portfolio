"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowTopRightOnSquareIcon, EyeIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: "sovereign-heart",
    name: "Sovereign Heart",
    category: "Health & Fitness Games",
    description:
      "Leverages HealthKit to monitor the user's real-time heart rate, turning physical activity into a thrilling survival experience where users must keep their heart rate elevated to evade virtual zombies with MVVM structure.",
    technologies: ["SwiftUI", "HealthKit", "WatchKit", "Haptics"],
    link: "",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-red-500 to-pink-600",
  },
  {
    id: "ark",
    name: "Ark - Find Animals",
    category: "Games Entertainment",
    description:
      "An AR-based game where players discover and interact with various virtual animals in real-world locations. Uses augmented reality to overlay animal visuals onto the player's environment.",
    technologies: ["ARKit", "SwiftUI", "Core Location"],
    link: "https://testflight.apple.com/join/xkwYdtA2",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "terapilah",
    name: "Terapilah",
    category: "Health & Fitness Reference",
    description:
      "Specialized app designed to support the recovery journey of stroke survivors by focusing on targeted motor exercises, combining physical therapy with motor imagery techniques.",
    technologies: ["SwiftUI", "HealthKit", "Core ML"],
    link: "https://testflight.apple.com/join/Z583J8km",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "physiquest",
    name: "PhysiQuest",
    category: "Education Games",
    description:
      "An application that turns complex physics concepts into enjoyable, hands-on experiences with interactive experiments, conceptual material, and exercises.",
    technologies: ["SwiftUI", "SpriteKit", "Core Animation"],
    link: "https://testflight.apple.com/join/At4PVBYc",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "motorq",
    name: "MotorQ",
    category: "Utilities Lifestyle",
    description:
      "Empowers motorbike owners to take care of their vehicles by tracking service intervals and reminding users when maintenance is due.",
    technologies: ["SwiftUI", "Core Data", "UserNotifications"],
    link: "",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-orange-500 to-red-600",
  },
  {
    id: "tinytales",
    name: "TinyTales",
    category: "Education Kids",
    description:
      "Storytelling app that turns daily routines into magical moments with fun, personalized stories and AI-powered suggestions for children with ASD.",
    technologies: ["SwiftUI", "Core ML", "Natural Language"],
    link: "https://testflight.apple.com/join/3sskSmpp",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-yellow-500 to-orange-600",
  },
  {
    id: "iam",
    name: "iAm",
    category: "Health & Fitness Utilities",
    description:
      "A notes app to help people with frequent anxiety attacks by encouraging emotion dumping and reflection using various media formats.",
    technologies: ["SwiftUI", "Core Data", "AVFoundation"],
    link: "https://testflight.apple.com/join/6E212fbe",
    image: "/placeholder.svg?height=200&width=300",
    color: "from-teal-500 to-blue-600",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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
      id="projects"
      className="mb-20"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2 className="text-4xl font-bold mb-12 text-center" variants={itemVariants}>
        Featured{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
      </motion.h2>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative"
            onHoverStart={() => setHoveredProject(project.id)}
            onHoverEnd={() => setHoveredProject(null)}
          >
            <motion.div
              className="bg-white/60 backdrop-blur-sm shadow-lg rounded-2xl overflow-hidden border border-white/20 hover:shadow-2xl transition-all duration-500"
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateY: 5,
                rotateX: 5,
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
                  animate={{
                    opacity: hoveredProject === project.id ? 0.4 : 0.2,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium border border-white/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {project.category}
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300"
                  layoutId={`title-${project.id}`}
                >
                  {project.name}
                </motion.h3>

                <motion.p
                  className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3"
                  animate={{
                    opacity: hoveredProject === project.id ? 0.8 : 1,
                  }}
                >
                  {project.description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="bg-gray-100/80 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium border border-gray-200/50"
                      whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href={`/projects/${project.id}`}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <EyeIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                      View Details
                    </Link>
                  </motion.div>

                  {project.link && (
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100/80 text-gray-700 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-200/80 transition-all duration-300 flex items-center gap-2 border border-gray-200/50 group"
                      >
                        <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                        TestFlight
                      </a>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
