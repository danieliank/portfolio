"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: "Email",
      value: "dikur1007@gmail.com",
      href: "mailto:dikur1007@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: PhoneIcon,
      label: "Phone",
      value: "+62 851-5612-0502",
      href: "tel:+6285156120502",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPinIcon,
      label: "Location",
      value: "Jakarta, Indonesia",
      href: null,
      color: "from-purple-500 to-pink-500",
    },
  ]

  const socialLinks = [
    {
      name: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/danieliank/",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "GitHub Profile",
      href: "https://github.com/danieliank",
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "Portfolio Website",
      href: "https://danieliank.vercel.app",
      color: "from-purple-600 to-indigo-600",
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
      id="contact"
      className="mb-20"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2 className="text-4xl font-bold mb-12 text-center" variants={itemVariants}>
        Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
      </motion.h2>

      <motion.div
        variants={itemVariants}
        className="bg-white/60 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-white/20"
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <motion.h3 className="text-xl font-bold text-gray-800 mb-6" layoutId="contact-info-title">
              Contact Information
            </motion.h3>

            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/80 transition-all duration-300"
                whileHover={{ scale: 1.03, x: 10 }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className={`p-3 bg-gradient-to-br ${info.color} rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <info.icon className="h-6 w-6" />
                </motion.div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                  {info.href ? (
                    <motion.a
                      href={info.href}
                      className="text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {info.value}
                    </motion.a>
                  ) : (
                    <span className="text-gray-800 font-semibold">{info.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <motion.h3 className="text-xl font-bold text-gray-800 mb-6" layoutId="social-links-title">
              Connect With Me
            </motion.h3>

            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, x: 10 }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block p-4 rounded-xl bg-gradient-to-r ${link.color} text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <motion.span className="flex items-center justify-between" whileHover={{ x: 5 }}>
                    {link.name}
                    <motion.svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </motion.svg>
                  </motion.span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <motion.p
            className="text-gray-600 text-lg mb-6"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            Let's collaborate and create something amazing together!
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="mailto:dikur1007@gmail.com"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Send Me an Email
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
