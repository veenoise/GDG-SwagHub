import { Facebook, Github, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side - Logo & Name */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold">GDG Swag Hub</h2>
            <p className="text-sm text-gray-400">Exclusive swag for developers</p>
          </div>

          {/* Center - Navigation Links */}
          <nav className="mb-4 md:mb-0">
            <ul className="flex gap-6 text-sm">
              <li><a href="/shop" className="hover:text-blue-400">Shop</a></li>
              <li><a href="/about" className="hover:text-blue-400">About</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </nav>

          {/* Right Side - Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400"><Facebook size={20} /></a>
            <a href="#" className="hover:text-blue-400"><Twitter size={20} /></a>
            <a href="#" className="hover:text-pink-400"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gray-400"><Github size={20} /></a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} GDG Swag Hub. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer