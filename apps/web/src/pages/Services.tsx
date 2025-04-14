export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Web Design</h2>
          <p>Custom website designs tailored to your brand and business goals.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Development</h2>
          <p>Full-stack web development using modern technologies.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">SEO</h2>
          <p>Search engine optimization to improve your website&apos;s visibility.</p>
        </div>
      </div>
    </main>
  )
}