import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Daniel Ian Kurniawan</h1>
        <div className="space-x-6">
          <Link href="#about" className="text-gray-600 hover:text-gray-800 transition duration-300">About</Link>
          <Link href="#projects" className="text-gray-600 hover:text-gray-800 transition duration-300">Projects</Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-800 transition duration-300">Contact</Link>
        </div>
      </nav>
    </header>
  )
}

