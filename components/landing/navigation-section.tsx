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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-blue-900/30">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-sm opacity-70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold">W</span>
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight">Webx</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#projects" className="text-sm hover:text-blue-400 transition-colors">
            Projects
          </Link>
          <Link href="#services" className="text-sm hover:text-blue-400 transition-colors">
            Services
          </Link>
          <Link href="#about" className="text-sm hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="#testimonials" className="text-sm hover:text-blue-400 transition-colors">
            Testimonials
          </Link>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get in Touch</Button>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-blue-900/30"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link
              href="#projects"
              className="text-lg py-2 hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#services"
              className="text-lg py-2 hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-lg py-2 hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="text-lg py-2 hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-2"
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
