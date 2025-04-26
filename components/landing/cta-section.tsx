"use client"

import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-600 rounded-full opacity-10 blur-[80px] z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-indigo-600 rounded-full opacity-10 blur-[60px] z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/30 to-blue-800/20 rounded-2xl p-8 md:p-12 border border-blue-700/30 backdrop-blur-sm"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
              Let's collaborate to create a cutting-edge digital experience that sets your brand apart. The future of
              web design starts here.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">Start Your Project</Button>
            <Button
              variant="outline"
              className="border-blue-700 text-blue-100 hover:bg-blue-900/20 px-8 py-6 text-lg"
            >
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
