     function Footer() {
     return (
        <div >
     {/* Footer */}
      <footer className="bg-[#f5f0e5] mt-8">
        {/* Navigation Menu */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Horizontal Navigation */}
            <nav className="mb-6 md:mb-0">
              <ul className="flex flex-wrap justify-center space-x-2">
                <li><a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Home</a></li>
                <li className="text-gray-400">|</li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Pre Event</a></li>
                <li className="text-gray-400">|</li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Event</a></li>
                <li className="text-gray-400">|</li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Sponsor</a></li>
                <li className="text-gray-400">|</li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Teams</a></li>
              </ul>
            </nav>

            {/* Contact Section */}
            <div className="text-center md:text-right">
              <h3 className="text-gray-800 font-semibold mb-2">Contact For Collaboration</h3>
              <div className="flex items-center justify-center md:justify-end mb-2">
                <Mail className="h-4 w-4 text-gray-600 mr-2" />
                <a href="mailto:contact@stockdash.com" className="text-gray-700 hover:text-gray-900">contact@stockdash.com</a>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <MessageCircle className="h-4 w-4 text-gray-600 mr-2" />
                <a href="#" className="text-gray-700 hover:text-gray-900">Join our WhatsApp Community</a>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mt-8 border-t border-gray-300 pt-8">
            <div className="flex justify-center space-x-8">
              <div className="flex flex-col items-center">
                <a href="#" className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300">
                  <Instagram className="h-6 w-6 text-gray-700" />
                </a>
                <span className="mt-2 text-sm text-gray-600">Instagram</span>
              </div>
              <div className="flex flex-col items-center">
                <a href="#" className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300">
                  <Youtube className="h-6 w-6 text-gray-700" />
                </a>
                <span className="mt-2 text-sm text-gray-600">YouTube</span>
              </div>
              <div className="flex flex-col items-center">
                <a href="#" className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300">
                  <Linkedin className="h-6 w-6 text-gray-700" />
                </a>
                <span className="mt-2 text-sm text-gray-600">LinkedIn</span>
              </div>
              <div className="flex flex-col items-center">
                <a href="#" className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300">
                  <Facebook className="h-6 w-6 text-gray-700" />
                </a>
                <span className="mt-2 text-sm text-gray-600">Facebook</span>
              </div>
              <div className="flex flex-col items-center">
                <a href="#" className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300">
                  <Twitter className="h-6 w-6 text-gray-700" />
                </a>
                <span className="mt-2 text-sm text-gray-600">Twitter</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>© 2025 StockDash. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;