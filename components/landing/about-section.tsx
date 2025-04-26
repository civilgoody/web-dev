"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { BRAND_NAME } from "@/lib/constants"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-background">
      {/* Refined Grid background - Adjusted color */}
      <div className="absolute inset-0 z-0 opacity-5 dark:opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--foreground)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.1)_1px,transparent_1px)] bg-[size:36px_36px]"></div>
      </div>

      {/* Glowing orb - Adjusted opacity */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[-10%] w-80 h-80 bg-primary/50 rounded-full opacity-5 dark:opacity-15 blur-[130px] z-0 animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="relative group">
              {/* Use card for background/border consistency */}
              <div className="relative overflow-hidden rounded-xl shadow-lg dark:shadow-2xl dark:shadow-blue-900/20 bg-card border border-border">
                <Image
                  src="https://images.unsplash.com/photo-1554475901-4538ddfbccc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" // Updated image
                  alt={`${BRAND_NAME} Team - Digital Architects`}
                  width={800}
                  height={600}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay gradient - Adjusted */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 dark:from-black/50 via-black/10 dark:via-black/20 to-transparent"></div>
                {/* Subtle inner glow on hover - Adjusted color */}
                 <div className="absolute inset-0 rounded-xl border-2 border-transparent transition-colors duration-300 group-hover:border-primary/40 pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Badge - Adjusted colors */}
            <div className="inline-block px-4 py-1 mb-2 rounded-full bg-primary/10 dark:bg-blue-900/30 border border-primary/20 dark:border-blue-700/50 text-primary dark:text-blue-300 text-sm shadow-sm dark:shadow-md">
              Digital Architects
            </div>
            {/* Heading - Use foreground */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">Pioneering Tomorrow's Web Today</h2>
            {/* Paragraphs - Use muted-foreground */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              Established in the digital dawn of 2023, {BRAND_NAME} arose from a vision to reshape brand interaction in the
              virtual sphere. We are architects of the future digital landscape, not merely designers and developers.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our collective of futurists, technologists, and creatives operates at the confluence of art and algorithm,
              relentlessly innovating to forge immersive online experiences that mesmerize and mobilize.
            </p>

            {/* Stats - Adjusted colors */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 pt-4">
              {[ // Array for easier mapping/styling
                { value: "45+", label: "Projects Launched" },
                { value: "12", label: "Design Accolades" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "24/7", label: "Support Matrix" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-bold text-primary dark:text-blue-400 tracking-tight">{stat.value}</div>
                  <div className="text-sm text-muted-foreground/80 dark:text-blue-200/60 mt-1 tracking-wide uppercase font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Button - Use primary */}
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/80 hover:to-primary text-primary-foreground mt-6 px-8 py-3 rounded-full text-lg group shadow-md hover:shadow-lg dark:shadow-lg dark:hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105">
              Explore Our Genesis
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
