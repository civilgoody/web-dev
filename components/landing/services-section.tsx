"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Code, Cpu, Globe } from "lucide-react"

import { Card } from "@/components/ui/card"

const services = [
  {
    icon: <Globe className="h-10 w-10 text-blue-300" />,
    title: "Immersive Web Design",
    description:
      "Crafting captivating digital experiences that engage users through stunning visuals and fluid interactions.",
  },
  {
    icon: <Code className="h-10 w-10 text-blue-300" />,
    title: "Advanced Development",
    description:
      "Building robust, scalable, and performant web applications using the latest cutting-edge technologies.",
  },
  {
    icon: <Cpu className="h-10 w-10 text-blue-300" />,
    title: "AI Integration",
    description:
      "Enhancing digital products with intelligent features, powered by sophisticated AI and machine learning models.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:36px_36px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto text-center mb-16"
        >
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-300 text-sm shadow-md">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Cutting-Edge Digital Services</h2>
          <p className="text-lg text-blue-100/60">
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
              <Card className="bg-gradient-to-br from-black/40 to-blue-950/20 border border-blue-800/30 backdrop-blur-md p-8 h-full group transition-all duration-300 hover:border-blue-600/50 hover:bg-blue-950/30 hover:shadow-xl hover:shadow-blue-600/10">
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-blue-900/40 to-blue-800/30 inline-block border border-blue-700/50 shadow-inner shadow-black/20 group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white tracking-tight">{service.title}</h3>
                <p className="text-blue-100/70 mb-6 text-[15px] leading-relaxed">{service.description}</p>
                <Link
                  href="#"
                  className="text-blue-300 font-medium text-sm flex items-center group-hover:text-blue-200 transition-colors duration-300"
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
