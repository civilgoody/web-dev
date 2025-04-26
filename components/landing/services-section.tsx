"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Code, Cpu, Globe } from "lucide-react"

import { Card } from "@/components/ui/card"

const services = [
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Immersive Web Design",
    description:
      "Crafting captivating digital experiences that engage users through stunning visuals and fluid interactions.",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Advanced Development",
    description:
      "Building robust, scalable, and performant web applications using the latest cutting-edge technologies.",
  },
  {
    icon: <Cpu className="h-10 w-10 text-primary" />,
    title: "AI Integration",
    description:
      "Enhancing digital products with intelligent features, powered by sophisticated AI and machine learning models.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 relative bg-background">
      <div className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:36px_36px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto text-center mb-16"
        >
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm shadow-[0_0_10px_rgba(59,130,246,0.1)]">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-primary/90 to-primary/70 text-transparent bg-clip-text dark:text-glow">Cutting-Edge Digital Services</h2>
          <p className="text-lg text-muted-foreground">
            Blending innovative technology with creative design to deliver exceptional digital outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/60 border-2 relative overflow-hidden border-primary/30 backdrop-blur-md p-8 h-full group transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-feature-gradient"></div>
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 inline-block border border-primary/20 shadow-inner group-hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] group-hover:scale-105 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground tracking-tight group-hover:text-glow">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-[15px] leading-relaxed">{service.description}</p>
                <Link
                  href="#"
                  className="text-primary font-medium text-sm flex items-center group-hover:text-primary transition-all duration-300 relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px before:bg-primary/70 group-hover:before:w-full before:transition-all before:duration-300"
                >
                  Learn more
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
