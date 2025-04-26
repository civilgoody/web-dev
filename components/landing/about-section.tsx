"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Glowing orb */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-600 rounded-full opacity-10 blur-[80px] z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-blue-500 opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-blue-500 opacity-70"></div>
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="About Webx"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent mix-blend-overlay"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1 mb-2 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-400 text-sm">
              About Webx
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Pioneering The Future Of Digital Design</h2>
            <p className="text-blue-100/70">
              Founded in 2023, Webx emerged from a vision to transform how brands connect with their audiences in the
              digital realm. We're not just designers and developers – we're digital architects crafting the future.
            </p>
            <p className="text-blue-100/70">
              Our team of visionaries, technologists, and creatives work at the intersection of design and technology,
              constantly pushing boundaries to create immersive digital experiences that captivate and convert.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <div className="text-3xl font-bold text-blue-400">45+</div>
                <div className="text-blue-100/70">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">12</div>
                <div className="text-blue-100/70">Design Awards</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">98%</div>
                <div className="text-blue-100/70">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">24/7</div>
                <div className="text-blue-100/70">Support Available</div>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white mt-4">Learn More About Us</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
