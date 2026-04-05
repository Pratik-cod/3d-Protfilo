import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants/index.js'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a className="text-xl font-bold text-white" href="#hero">
          Pratik | Rane
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-white">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group relative">
                <a href={link} className="hover:text-blue-400 transition-colors">
                  <span>{name}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <a
          href="#contact"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Contact Me
        </a>
      </div>
    </header>
  )
}

export default Navbar