"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Refined Grid background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:36px_36px]"></div>
      </div>

      {/* Glowing orb - Adjusted position */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[-10%] w-80 h-80 bg-blue-700 rounded-full opacity-15 blur-[130px] z-0 animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative group">
              {/* Removed decorative borders for cleaner look */}
              <div className="relative overflow-hidden rounded-xl shadow-2xl shadow-blue-900/20">
                <Image
                  src="https://images.unsplash.com/photo-1554475901-4538ddfbccc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" // Updated image
                  alt="Webx Team - Digital Architects"
                  width={800}
                  height={600}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                {/* Subtle inner glow on hover */}
                 <div className="absolute inset-0 rounded-xl border-2 border-transparent transition-colors duration-300 group-hover:border-blue-500/40 pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1 mb-2 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-300 text-sm shadow-md">
              Digital Architects
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Pioneering Tomorrow's Web Today</h2>
            <p className="text-lg text-blue-100/70 leading-relaxed">
              Established in the digital dawn of 2023, Webx arose from a vision to reshape brand interaction in the
              virtual sphere. We are architects of the future digital landscape, not merely designers and developers.
            </p>
            <p className="text-lg text-blue-100/70 leading-relaxed">
              Our collective of futurists, technologists, and creatives operates at the confluence of art and algorithm,
              relentlessly innovating to forge immersive online experiences that mesmerize and mobilize.
            </p>

            {/* Stats - Enhanced styling */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 pt-4">
              {[ // Array for easier mapping/styling
                { value: "45+", label: "Projects Launched" },
                { value: "12", label: "Design Accolades" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "24/7", label: "Support Matrix" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-bold text-blue-400 tracking-tight">{stat.value}</div>
                  <div className="text-sm text-blue-200/60 mt-1 tracking-wide uppercase font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white mt-6 px-8 py-3 rounded-full text-lg group shadow-lg hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105">
              Explore Our Genesis
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
