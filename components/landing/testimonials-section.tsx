"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { Card } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "Webx transformed our online presence with a design that perfectly captures our brand's futuristic vision. The attention to detail is remarkable.",
    author: "Alex Chen",
    position: "CEO, NeoTech Industries",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Working with Webx was a game-changer for our digital strategy. Their innovative approach and technical expertise delivered beyond our expectations.",
    author: "Sarah Johnson",
    position: "Marketing Director, Quantum Solutions",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The team at Webx doesn't just create websites – they craft digital experiences that engage and convert. Our conversion rate increased by 45% after launch.",
    author: "Michael Rodriguez",
    position: "Product Lead, Cyberwave",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 relative bg-gradient-to-b from-blue-950/30 to-black">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto text-center mb-16"
        >
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-400 text-sm">
            Client Feedback
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-lg text-blue-100/70">
            Hear from the brands who have transformed their digital presence with Webx.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-blue-950/20 border-blue-900/50 backdrop-blur-sm p-8 h-full">
                <div className="mb-6 text-blue-400">
                  <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.5 18H9C9 12.477 13.477 8 19 8V12C15.686 12 13 14.686 13 18H13.5C15.433 18 17 19.567 17 21.5V30.5C17 32.433 15.433 34 13.5 34H4.5C2.567 34 1 32.433 1 30.5V21.5C1 19.567 2.567 18 4.5 18H13.5ZM40.5 18H36C36 12.477 40.477 8 46 8V12C42.686 12 40 14.686 40 18H40.5C42.433 18 44 19.567 44 21.5V30.5C44 32.433 42.433 34 40.5 34H31.5C29.567 34 28 32.433 28 30.5V21.5C28 19.567 29.567 18 31.5 18H40.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p className="text-blue-100/90 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-sm text-blue-400">{testimonial.position}</div>
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
