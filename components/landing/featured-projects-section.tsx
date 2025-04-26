"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Neomorph",
    category: "E-commerce Platform",
    image: "/placeholder.svg?height=600&width=800",
    description: "A futuristic e-commerce experience with immersive product visualization.",
  },
  {
    title: "Synthwave",
    category: "Digital Marketing",
    image: "/placeholder.svg?height=600&width=800",
    description: "An award-winning marketing site with interactive data visualization.",
  },
  {
    title: "Cybernetic",
    category: "Web Application",
    image: "/placeholder.svg?height=600&width=800",
    description: "A cutting-edge SaaS dashboard with real-time analytics and AI insights.",
  },
  {
    title: "Quantum",
    category: "Brand Identity",
    image: "/placeholder.svg?height=600&width=800",
    description: "Complete digital rebrand with interactive brand guidelines.",
  },
]

export function FeaturedProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 relative bg-gradient-to-b from-black to-blue-950/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto text-center mb-16"
        >
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-400 text-sm">
            Our Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-blue-100/70">
            Explore our most innovative work that pushes the boundaries of digital design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="text-blue-400 text-sm mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-blue-100/70 mb-4">{project.description}</p>
                  <Button variant="outline" className="border-blue-700 text-blue-100 hover:bg-blue-900/20">
                    View Project
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-blue-700 text-blue-100 hover:bg-blue-900/20">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
} 
