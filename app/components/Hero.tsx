"use client";

import { motion } from "framer-motion";
import { ArrowDownIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

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
  };

  return (
    <motion.section
      className="relative text-center py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl mb-20 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        <motion.div variants={itemVariants} className="mb-6">
          <motion.div
            className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SparklesIcon className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">
              Available for opportunities
            </span>
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          variants={itemVariants}
        >
          Daniel Ian{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Kurniawan
          </span>
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl text-gray-700 mb-8 h-16"
          variants={itemVariants}
        >
          <TypeAnimation
            sequence={[
              "iOS Developer",
              2000,
              "Product Manager",
              2000,
              "AI Enthusiast",
              2000,
              "Mobile App Creator",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
            className="font-medium"
          />
        </motion.div>

        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Passionate about creating innovative mobile experiences with{" "}
          <span className="font-semibold text-blue-600">
            1+ years of experience
          </span>{" "}
          in iOS development, artificial intelligence, and user-centered design
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#projects"
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#contact"
              className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/60"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="animate-bounce"
          variants={itemVariants}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ArrowDownIcon className="h-6 w-6 mx-auto text-gray-500" />
        </motion.div>
      </div>
    </motion.section>
  );
}
