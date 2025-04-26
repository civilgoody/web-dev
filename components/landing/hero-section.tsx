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
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-20">
      {/* Interactive background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3) 0%, transparent 60%)`,
        }}
      />

      {/* Grid background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Glowing orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-[100px] z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-600 rounded-full opacity-10 blur-[80px] z-0"></div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 z-10 pt-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-400 text-sm"
          >
            Redefining Digital Experiences
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200"
          >
            Step Into The Future Of Web Design
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-blue-100/80 mb-8 max-w-2xl mx-auto"
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
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg group">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="border-blue-700 text-blue-100 hover:bg-blue-900/20 px-8 py-6 text-lg"
            >
              View Our Work
            </Button>
          </motion.div>
        </div>

        {/* Floating elements */}
        <div className="relative h-[300px] md:h-[400px] mt-12">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute left-[10%] top-[20%] w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl rotate-12 opacity-80 backdrop-blur-md"
          />
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute left-[30%] top-[50%] w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-indigo-600 to-blue-400 rounded-full opacity-70 backdrop-blur-md"
          />
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute right-[30%] top-[30%] w-24 h-24 md:w-40 md:h-40 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl -rotate-12 opacity-80 backdrop-blur-md"
          />
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="absolute right-[15%] top-[60%] w-16 h-16 md:w-28 md:h-28 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg rotate-45 opacity-70 backdrop-blur-md"
          />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-blue-400 mb-2">Scroll to explore</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
          <ChevronRight size={24} className="text-blue-400 rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  )
} 
