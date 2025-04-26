"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { Card } from "@/components/ui/card"
import { BRAND_NAME } from "@/lib/constants"

const testimonials = [
  {
    quote:
      `${BRAND_NAME} didn't just build a website; they architected a digital dimension for our brand. Their foresight and execution are unparalleled.`,
    author: "Alex Thompson",
    position: "CEO, NeoTech Dynamics",
    image: "https://avatar.iran.liara.run/public/boy?username=Alex+Chen",
  },
  {
    quote:
      `Collaborating with ${BRAND_NAME} felt like stepping into the future. Their blend of artistry and technology propelled our strategy lightyears ahead.`,
    author: "Samantha Reed",
    position: "Chief Innovation Officer, Quantum Solutions",
    image: "https://avatar.iran.liara.run/public/girl?username=Sarah+Johnson",
  },
  {
    quote:
      `The digital experience ${BRAND_NAME} crafted isn't just engaging—it's transformative. We saw a 45% uplift in core metric conversions post-launch.`,
    author: "Jordan Maxwell",
    position: "Product Architect, Cyberwave Systems",
    image: "https://i.pravatar.cc/150?u=Michael+Rodriguez",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 relative bg-gradient-to-b from-blue-950/40 to-black border-y border-blue-800/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto text-center mb-16"
        >
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-300 text-sm shadow-md">
            Voices from the Grid
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Client Testimonials</h2>
          <p className="text-lg text-blue-100/60">
            Hear from partners who've navigated the digital frontier with {BRAND_NAME}.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-black/40 to-blue-950/20 border border-blue-800/30 backdrop-blur-md p-8 h-full flex flex-col transition-all duration-300 hover:border-blue-600/50 hover:bg-blue-950/30 hover:shadow-xl hover:shadow-blue-600/10">
                <div className="mb-5 text-blue-500 flex-shrink-0">
                  <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.7857 14H7.71429C7.71429 9.61905 11.0893 6.19048 15.4286 6.19048V9.61905C12.7893 9.61905 10.7143 11.7143 10.7143 14H11.7857C13.35 14 14.5714 15.2381 14.5714 16.8095V24.619C14.5714 26.1905 13.35 27.4286 11.7857 27.4286H3.85714C2.29286 27.4286 1 26.1905 1 24.619V16.8095C1 15.2381 2.29286 14 3.85714 14H11.7857ZM32.1429 14H28.0714C28.0714 9.61905 31.4464 6.19048 35.7857 6.19048V9.61905C33.1464 9.61905 31.0714 11.7143 31.0714 14H32.1429C33.7071 14 34.9286 15.2381 34.9286 16.8095V24.619C34.9286 26.1905 33.7071 27.4286 32.1429 27.4286H24.2143C22.65 27.4286 21.3571 26.1905 21.3571 24.619V16.8095C21.3571 15.2381 22.65 14 24.2143 14H32.1429Z"
                      fill="currentColor"
                      fillOpacity="0.6"
                    />
                  </svg>
                </div>
                <p className="text-blue-100/80 mb-6 text-base leading-relaxed flex-grow italic">
                  " {testimonial.quote} "
                </p>
                <div className="flex items-center mt-auto pt-4 border-t border-blue-800/20">
                  <Image
                    src={testimonial.image || "/placeholder-futuristic.svg"}
                    alt={testimonial.author}
                    width={44}
                    height={44}
                    className="rounded-full mr-4 border-2 border-blue-800/30"
                  />
                  <div>
                    <div className="font-semibold text-white tracking-tight">{testimonial.author}</div>
                    <div className="text-sm text-blue-300/70 tracking-wide">{testimonial.position}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
