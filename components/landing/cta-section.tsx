"use client"

import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { BRAND_NAME } from "@/lib/constants"

export function CtaSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Refined Grid background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:36px_36px]"></div>
      </div>

      {/* Glowing orbs - Adjusted */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[-5%] w-80 h-80 bg-purple-600 rounded-full opacity-15 blur-[120px] z-0 animate-pulse"></div>
      <div className="absolute bottom-[-20%] left-[10%] w-72 h-72 bg-blue-600 rounded-full opacity-15 blur-[100px] z-0 animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-blue-950/30 via-black/40 to-blue-950/20 rounded-2xl p-8 md:p-12 border border-blue-800/30 backdrop-blur-lg shadow-2xl shadow-blue-900/10"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Ready to Transcend the Digital Norm?</h2>
            <p className="text-lg md:text-xl text-blue-100/70 max-w-2xl mx-auto leading-relaxed">
              Collaborate with {BRAND_NAME} to architect a groundbreaking digital experience. Your brand's future evolution
              starts now.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg group shadow-lg hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105">
              Initiate Project Genesis
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-100 hover:bg-blue-900/20 hover:border-blue-400 px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
            >
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
