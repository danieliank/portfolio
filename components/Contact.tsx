import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <section id="contact" className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-gray-200 pb-2">Contact</h2>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <EnvelopeIcon className="h-6 w-6 text-gray-600" />
              <a href="mailto:dikur1007@gmail.com" className="text-blue-600 hover:text-blue-800 transition duration-300">dikur1007@gmail.com</a>
            </div>
            <div className="flex items-center space-x-3">
              <PhoneIcon className="h-6 w-6 text-gray-600" />
              <a href="tel:+6285779625514" className="text-blue-600 hover:text-blue-800 transition duration-300">+62 857-7962-5514</a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPinIcon className="h-6 w-6 text-gray-600" />
              <span className="text-gray-700">Jakarta, Indonesia</span>
            </div>
          </div>
          <div className="space-y-4">
            <a href="https://www.linkedin.com/in/danieliank/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 transition duration-300">LinkedIn Profile</a>
            <a href="https://github.com/danieliank" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 transition duration-300">GitHub Profile</a>
          </div>
        </div>
      </div>
    </section>
  )
}

