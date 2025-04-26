"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const projects = [
  {
    title: "Neomorph E-commerce",
    category: "E-commerce Platform",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "A futuristic e-commerce experience with immersive product visualization and AI-driven recommendations.",
  },
  {
    title: "Synthwave Analytics",
    category: "Data Visualization Dashboard",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    description: "An award-winning marketing site with interactive data visualization and real-time insights.",
  },
  {
    title: "Cybernetic Systems",
    category: "SaaS Platform",
    image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description: "A cutting-edge SaaS dashboard integrating complex data streams with AI-powered predictive analysis.",
  },
  {
    title: "Quantum Branding",
    category: "Brand Identity & Web Presence",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Complete digital rebrand including an interactive style guide and dynamic web experience.",
  },
]

export function FeaturedProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 relative bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-sm">
            Our Portfolio
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            Exploring the frontiers of digital innovation through our client collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-primary/30">
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80"></div>
                  <Image
                    src={project.image || "/placeholder-futuristic.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 z-20 relative bg-card">
                  <div className="text-primary text-sm mb-1 font-medium tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-card-foreground tracking-tight">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-[15px] leading-relaxed transition-opacity duration-300 group-hover:opacity-80">
                    {project.description}
                  </p>
                  <Button
                    variant="default"
                    size="sm"
                    className="rounded-full px-4 py-1.5 transition-opacity duration-300"
                  >
                    View Project <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
} 
