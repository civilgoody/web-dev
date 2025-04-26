"use client"

import React from "react"
import { motion, MotionValue } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  heroRef: React.RefObject<HTMLDivElement | null>
  mousePosition: { x: number; y: number }
  y: MotionValue<number>
  opacity: MotionValue<number>
}

export function HeroSection({ heroRef, mousePosition, y, opacity }: HeroSectionProps) {
  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Enhanced Interactive background */}
      <motion.div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
          transition: "background-image 0.2s ease-out", // Smooth transition for mouse follow
        }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }} // Subtle pulse
      />

      {/* Refined Grid background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-[15%] w-72 h-72 bg-blue-600 rounded-full opacity-20 blur-[120px] z-0 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-[15%] w-64 h-64 bg-purple-600 rounded-full opacity-15 blur-[100px] z-0 animate-pulse delay-1000"></div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 z-10 pt-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-300 text-sm shadow-md"
          >
            Redefining Digital Experiences
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-white to-blue-200 tracking-tight"
          >
            Step Into The Future Of Web Design
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto"
          >
            We craft immersive digital experiences that blend cutting-edge technology with visionary design. Your
            digital presence, reimagined.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg group shadow-lg hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-100 hover:bg-blue-900/20 hover:border-blue-400 px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
            >
              View Our Work
            </Button>
          </motion.div>
        </div>

        {/* Floating elements with continuous animation */}
        <div className="relative h-[200px] md:h-[250px] mt-16 opacity-80">
          <motion.div
            initial={{ y: 100, opacity: 0, rotate: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="absolute left-[10%] top-[20%] w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-blue-600/70 to-blue-400/70 rounded-2xl rotate-12 backdrop-blur-md shadow-xl"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="w-full h-full"
            />
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            className="absolute left-[35%] top-[50%] w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-600/70 to-purple-500/70 rounded-full backdrop-blur-md shadow-lg"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full"
            />
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0, rotate: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            whileHover={{ scale: 1.1 }}
            className="absolute right-[30%] top-[30%] w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500/70 to-indigo-600/70 rounded-3xl -rotate-12 backdrop-blur-md shadow-xl"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-full h-full"
            />
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            whileHover={{ scale: 1.1 }}
            className="absolute right-[15%] top-[60%] w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-blue-400/70 to-purple-600/70 rounded-lg rotate-45 backdrop-blur-md shadow-lg"
          >
             <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-sm text-blue-300/70 mb-2">Scroll to explore</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
          <ChevronRight size={24} className="text-blue-300/70 rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  )
} 
