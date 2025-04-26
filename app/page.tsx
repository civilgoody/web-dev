"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import { AboutSection } from "@/components/landing/about-section"
import { CtaSection } from "@/components/landing/cta-section"
import { FeaturedProjectsSection } from "@/components/landing/featured-projects-section"
import { FooterSection } from "@/components/landing/footer-section"
import { HeroSection } from "@/components/landing/hero-section"
import { NavigationSection } from "@/components/landing/navigation-section"
import { ServicesSection } from "@/components/landing/services-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Parallax effect for hero section
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Handle mouse movement for interactive background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <NavigationSection isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <HeroSection heroRef={heroRef} mousePosition={mousePosition} y={y} opacity={opacity} />

      <ServicesSection />

      <FeaturedProjectsSection />

      <AboutSection />

      <TestimonialsSection />

      <CtaSection />

      <FooterSection />
    </div>
  )
}
