"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Code, Cpu, Globe } from "lucide-react"

import { Card } from "@/components/ui/card"

const services = [
  {
    icon: <Globe className="h-10 w-10 text-blue-400" />,
    title: "Immersive Web Design",
    description:
      "We create captivating websites that engage users with interactive elements and stunning visuals.",
  },
  {
    icon: <Code className="h-10 w-10 text-blue-400" />,
    title: "Advanced Development",
    description:
      "Our development team builds robust, scalable applications using cutting-edge technologies.",
  },
  {
    icon: <Cpu className="h-10 w-10 text-blue-400" />,
    title: "AI Integration",
    description:
      "Enhance your digital products with intelligent features powered by advanced AI technologies.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto text-center mb-16"
        >
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-400 text-sm">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Cutting-Edge Digital Services</h2>
          <p className="text-lg text-blue-100/70">
            We combine innovative technology with creative design to deliver exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-blue-950/20 border-blue-900/50 backdrop-blur-sm p-8 h-full hover:bg-blue-900/30 transition-colors group">
                <div className="mb-6 p-4 rounded-2xl bg-blue-900/30 inline-block">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-blue-100/70 mb-6">{service.description}</p>
                <Link
                  href="#"
                  className="text-blue-400 flex items-center group-hover:text-blue-300 transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
