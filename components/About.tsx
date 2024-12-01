export default function About() {
  return (
    <section id="about" className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-gray-200 pb-2">About Me</h2>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <p className="text-gray-700 mb-6 leading-relaxed">
          As a detail-oriented and passionate iOS Developer, I bring a unique blend of skills in mobile development 
          and artificial intelligence. My strong knowledge in iOS development best practices, coupled with an 
          understanding of AI applications, back-end integration, and product-solution fit, allows me to create 
          innovative and user-centric applications. Driven by curiosity, I constantly explore creative solutions, 
          stay updated with emerging technologies, and continuously improve through hands-on experimentation.
        </p>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Experience</h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-medium text-gray-800">iOS Developer Intern</h4>
            <p className="text-gray-600 mb-2">Apple Developer Academy @BINUS | Mar 2024 – Present</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Contributed as a Product Researcher, iOS Developer, and Product Manager across various application projects.</li>
              <li>Focused on understanding user needs through user research and product design.</li>
              <li>Developed apps leveraging cutting-edge technologies such as SwiftUI, HealthKit, and ARKit.</li>
              <li>Designed and implemented innovative and practical solutions for users across multiple projects.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

