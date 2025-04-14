import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6">Web Design Agency</h1>
      <p className="mb-6">Professional web design services for your business</p>
      <div className="flex gap-4">
        <Link 
          href="/services" 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Our Services
        </Link>
        <Link 
          href="/contact" 
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
        >
          Contact Us
        </Link>
      </div>
    </main>
  )
}