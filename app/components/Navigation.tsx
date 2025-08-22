'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Music Lab', href: '/music-lab' },
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">FrankX</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/quiz"
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Free Quiz
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/quiz"
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Free Quiz
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}