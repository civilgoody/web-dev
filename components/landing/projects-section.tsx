"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  // ... (project data remains the same)
  {
    title: "QuantumLeap AI Platform",
    description: "An advanced AI research platform enabling breakthroughs in quantum computing simulations.",
    imageUrl: "https://images.unsplash.com/photo-1614036119311-c436a81b4b8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["AI/ML", "Quantum Computing", "Data Visualization"],
    link: "#",
  },
  {
    title: "Project Chimera VR",
    description: "A hyper-realistic VR training simulation for complex surgical procedures.",
    imageUrl: "https://images.unsplash.com/photo-1593349480500-6f94084c154a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Virtual Reality", "Medical Tech", "Simulation"],
    link: "#",
  },
  {
    title: "CyberGuard Security Suite",
    description: "Next-gen cybersecurity solution leveraging blockchain for immutable threat detection.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Cybersecurity", "Blockchain", "SaaS"],
    link: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 relative bg-background">
      {/* Lighter gradient overlay for light mode */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-secondary/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          // ... animation props ...
          className="max-w-xl mx-auto text-center mb-16"
        >
          {/* Badge with better light mode contrast */}
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm shadow-sm">
            Featured Creations
          </div>
          {/* Heading - Adjusted */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">Our Digital Showcase</h2>
           {/* Paragraph - Adjusted */}
          <p className="text-lg text-muted-foreground dark:text-blue-100/60">
            Explore a selection of projects that redefine digital boundaries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
               // ... animation props ...
            >
              <Card className="group bg-card/50 border border-border hover:border-primary/20 rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Lighter overlay for light mode */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent dark:from-black/60 dark:via-black/20 dark:to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2 tracking-tight text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="glow"
                        className="mr-2 mb-2"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center group mt-auto"
                  >
                    Explore Project
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
