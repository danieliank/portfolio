import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"

const projects = {
  "sovereign-heart": {
    name: "Sovereign Heart",
    category: "Health & Fitness Games",
    description:
      "Sovereign Heart leverages HealthKit to monitor the user's real-time heart rate, turning physical activity into a thrilling survival experience where users must keep their heart rate elevated to evade virtual zombies with MVVM structure. Built with SwiftUI, HealthKit, WatchKit, and Haptics, the app engages users with haptic feedback and an interactive wrist-based interface.",
    technologies: ["SwiftUI", "HealthKit", "WatchKit", "Haptics", "MVVM"],
    features: [
      "Real-time heart rate monitoring using HealthKit",
      "Zombie survival gameplay mechanics",
      "WatchOS native interface",
      "Haptic feedback integration",
      "MVVM architecture pattern",
    ],
    challenges: [
      "Integrating HealthKit with real-time gameplay",
      "Optimizing performance for Apple Watch",
      "Creating engaging haptic feedback patterns",
    ],
    link: "",
    image: "/placeholder.svg?height=400&width=600",
  },
  ark: {
    name: "Ark - Find Animals",
    category: "Games Entertainment",
    description:
      "Ark is an AR-based game where players discover and interact with various virtual animals in real-world locations. It uses augmented reality to overlay animal visuals onto the player's environment, creating an immersive and educational experience that encourages exploration and engagement with wildlife digitally.",
    technologies: ["ARKit", "SwiftUI", "Core Location", "SceneKit", "RealityKit"],
    features: [
      "Augmented reality animal discovery",
      "Location-based gameplay",
      "Interactive 3D animal models",
      "Educational wildlife content",
      "Real-world environment integration",
    ],
    challenges: [
      "Accurate AR object placement",
      "Location tracking and optimization",
      "3D model performance on mobile devices",
    ],
    link: "https://testflight.apple.com/join/xkwYdtA2",
    image: "/placeholder.svg?height=400&width=600",
  },
  terapilah: {
    name: "Terapilah",
    category: "Health & Fitness Reference",
    description:
      "Terapilah is a specialized app designed to support the recovery journey of stroke survivors by focusing on targeted motor exercises. By combining physical therapy with motor imagery techniques, Terapilah creates a comprehensive approach that helps patients regain strength and functionality in affected body parts. The app tailors exercises based on each user's unique muscle grade and areas impacted by stroke, ensuring a personalized therapy experience.",
    technologies: ["SwiftUI", "HealthKit", "Core ML", "AVFoundation", "Core Data"],
    features: [
      "Personalized motor exercises",
      "Motor imagery techniques",
      "Muscle grade assessment",
      "Progress tracking",
      "Stroke-specific rehabilitation programs",
    ],
    challenges: [
      "Creating accessible UI for stroke survivors",
      "Developing personalized exercise algorithms",
      "Integrating medical best practices",
    ],
    link: "https://testflight.apple.com/join/Z583J8km",
    image: "/placeholder.svg?height=400&width=600",
  },
  physiquest: {
    name: "PhysiQuest",
    category: "Education Games",
    description:
      "PhysiQuest, an application that turns complex physics concepts into enjoyable, hands-on experiences. With PhysiQuest, students explore physics through interactive experiments, conceptual material, and exercises that make learning physics exciting and intuitive. The app offers a structured yet flexible learning path with Playground for experiments, Material for concepts, and Exercise for reinforcement.",
    technologies: ["SwiftUI", "SpriteKit", "Core Animation", "Metal", "Core Graphics"],
    features: [
      "Interactive physics playground",
      "Conceptual learning materials",
      "Hands-on experiments",
      "Progress tracking exercises",
      "Visual physics simulations",
    ],
    challenges: [
      "Accurate physics simulations",
      "Creating intuitive learning interfaces",
      "Balancing education with engagement",
    ],
    link: "https://testflight.apple.com/join/At4PVBYc",
    image: "/placeholder.svg?height=400&width=600",
  },
  motorq: {
    name: "MotorQ: Your Go To Motorbike Care Cue",
    category: "Utilities Lifestyle",
    description:
      "MotorQ empowers motorbike owners to take care of their vehicles by tracking service intervals and reminding users when maintenance is due. Designed for those who may not be familiar with motorbike upkeep, MotorQ helps prevent costly repairs by ensuring regular maintenance, ultimately saving money and keeping bikes in optimal condition.",
    technologies: ["SwiftUI", "Core Data", "UserNotifications", "CloudKit", "WidgetKit"],
    features: [
      "Service interval tracking",
      "Maintenance reminders",
      "Cost tracking",
      "Service history",
      "Widget support",
    ],
    challenges: [
      "Creating intuitive maintenance scheduling",
      "Implementing reliable notification system",
      "Designing for non-technical users",
    ],
    link: "",
    image: "/placeholder.svg?height=400&width=600",
  },
  tinytales: {
    name: "TinyTales",
    category: "Education Kids",
    description:
      "Discover TinyTales! Storytelling app that turns daily routines into magical moments! With fun, personalized stories tailored to each child's world, helping them learn and grow with ease. The app features friendly AI that offers gentle wording suggestions, and includes quizzes at the end of each story to boost comprehension and make learning routines a breeze.",
    technologies: ["SwiftUI", "Core ML", "Natural Language", "Speech", "AVFoundation"],
    features: [
      "Personalized storytelling",
      "Daily routine integration",
      "AI-powered story suggestions",
      "Interactive quizzes",
      "Social Story approach for ASD",
    ],
    challenges: [
      "Creating age-appropriate AI content",
      "Designing for children with ASD",
      "Implementing natural language processing",
    ],
    link: "https://testflight.apple.com/join/3sskSmpp",
    image: "/placeholder.svg?height=400&width=600",
  },
  iam: {
    name: "iAm: an anxiety-managing notes app",
    category: "Health & Fitness Utilities",
    description:
      "iAm is a notes app to help people with frequent anxiety attacks by encouraging emotion dumping. The app allows users to capture emotions and reflections using various media formats, providing a safe space for emotional expression and anxiety management through structured note-taking and reflection.",
    technologies: ["SwiftUI", "Core Data", "AVFoundation", "CloudKit", "CryptoKit"],
    features: [
      "Multi-media emotion capture",
      "Secure note encryption",
      "Anxiety tracking",
      "Reflection prompts",
      "Privacy-focused design",
    ],
    challenges: [
      "Ensuring user privacy and security",
      "Creating supportive UX for anxiety",
      "Implementing secure data storage",
    ],
    link: "https://testflight.apple.com/join/6E212fbe",
    image: "/placeholder.svg?height=400&width=600",
  },
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition duration-300 mb-8"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative h-64 md:h-96 bg-gray-100">
            <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
            <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {project.category}
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">{project.name}</h1>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center gap-2"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  Try on TestFlight
                </a>
              )}
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">{project.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Technical Challenges</h2>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
