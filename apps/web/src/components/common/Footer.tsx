export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold">WebDesignAgency</h3>
            <p className="mt-2 text-gray-300">
              Professional web design and development services
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-20">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Web Design</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Development</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">SEO</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} WebDesignAgency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}