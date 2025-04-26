"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

interface NavigationSectionProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export function NavigationSection({ isMenuOpen, setIsMenuOpen }: NavigationSectionProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-lg border-b border-blue-800/20 shadow-lg shadow-blue-900/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 group-hover:scale-110 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-sm opacity-70 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold text-white">W</span>
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors">Webx</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#projects" className="text-sm text-blue-100/80 hover:text-blue-300 transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full">
            Projects
          </Link>
          <Link href="#services" className="text-sm text-blue-100/80 hover:text-blue-300 transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full">
            Services
          </Link>
          <Link href="#about" className="text-sm text-blue-100/80 hover:text-blue-300 transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full">
            About
          </Link>
          <Link href="#testimonials" className="text-sm text-blue-100/80 hover:text-blue-300 transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full">
            Testimonials
          </Link>
          <Button size="sm" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full px-5 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-white hover:text-blue-300 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-b border-blue-800/20 shadow-lg"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link
              href="#projects"
              className="text-lg py-2 text-blue-100/80 hover:text-blue-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#services"
              className="text-lg py-2 text-blue-100/80 hover:text-blue-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-lg py-2 text-blue-100/80 hover:text-blue-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="text-lg py-2 text-blue-100/80 hover:text-blue-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Button
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white w-full mt-4 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  )
} 
