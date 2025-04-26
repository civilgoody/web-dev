"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

import { Button } from "@/components/ui/button"
import { BRAND_NAME } from "@/lib/constants"

interface NavigationSectionProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export function NavigationSection({ isMenuOpen, setIsMenuOpen }: NavigationSectionProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border shadow-sm dark:shadow-lg dark:shadow-blue-900/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 group-hover:scale-110 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/70 rounded-full blur-sm opacity-90 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">W</span>
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">{BRAND_NAME}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
            Projects
          </Link>
          <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
            Services
          </Link>
          <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
            About
          </Link>
          <Link href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
            Testimonials
          </Link>
          <Button size="sm" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/80 hover:to-primary text-primary-foreground rounded-full px-5 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </Button>
        </nav>

        {/* Right side controls: Theme Toggle and Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Mobile menu button */}
          <button className="md:hidden text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
