import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    name: "MotorQ",
    description: "Empowers motorbike owners to take care of their vehicles by tracking service intervals and reminding users when maintenance is due.",
    link: ""
  },
  {
    name: "ArK",
    description: "An augmented reality app for locating nearby animals, designed to teach religious history through engaging AR experiences.",
    link: "https://testflight.apple.com/join/xkwYdtA2"
  },
  {
    name: "Sovereign Heart",
    description: "A heart rate-based zombie survival game for WatchOS, turning physical activity into an exciting survival game.",
    link: ""
  },
  {
    name: "PhysiQuest",
    description: "An application that turns complex physics concepts into enjoyable, hands-on experiences.",
    link: "https://testflight.apple.com/join/At4PVBYc"
  },
  {
    name: "iAm",
    description: "A notes app that allows users to capture emotions and reflections using various media formats.",
    link: "https://testflight.apple.com/join/6E212fbe"
  },
  {
    name: "Terapilah",
    description: "An app designed for productive-age stroke survivors to regain their productivity through structured rehabilitation exercises and motivational tools.",
    link: "https://testflight.apple.com/join/Z583J8km"
  },
  {
    name: "TinyTales",
    description: "An app for parents of children with ASD to conduct self-therapy at home using the Social Story approach.",
    link: "https://testflight.apple.com/join/3sskSmpp"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-gray-200 pb-2">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 hover:shadow-xl">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 inline-flex items-center transition duration-300"
                >
                  TestFlight Link
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

