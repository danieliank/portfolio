export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Daniel Ian Kurniawan. All rights reserved.</p>
        <p className="text-gray-400">iOS Developer | Mobile Development | Artificial Intelligence</p>
      </div>
    </footer>
  )
}

