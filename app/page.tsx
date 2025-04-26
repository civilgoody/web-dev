"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronRight, Code, Cpu, Globe, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Parallax effect for hero section
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Handle mouse movement for interactive background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-blue-900/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-sm opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold">W</span>
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight">Webx</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#projects" className="text-sm hover:text-blue-400 transition-colors">
              Projects
            </Link>
            <Link href="#services" className="text-sm hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="#testimonials" className="text-sm hover:text-blue-400 transition-colors">
              Testimonials
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get in Touch</Button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-blue-900/30"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <Link
                href="#projects"
                className="text-lg py-2 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#services"
                className="text-lg py-2 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className="text-lg py-2 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#testimonials"
                className="text-lg py-2 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20">
        {/* Interactive background */}
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3) 0%, transparent 60%)`,
          }}
        />

        {/* Grid background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        {/* Glowing orb */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-[100px] z-0"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-600 rounded-full opacity-10 blur-[80px] z-0"></div>

        <motion.div style={{ y, opacity }} className="container mx-auto px-4 z-10 pt-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-400 text-sm"
            >
              Redefining Digital Experiences
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200"
            >
              Step Into The Future Of Web Design
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-blue-100/80 mb-8 max-w-2xl mx-auto"
            >
              We craft immersive digital experiences that blend cutting-edge technology with visionary design. Your
              digital presence, reimagined.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="border-blue-700 text-blue-100 hover:bg-blue-900/20 px-8 py-6 text-lg"
              >
                View Our Work
              </Button>
            </motion.div>
          </div>

          {/* Floating elements */}
          <div className="relative h-[300px] md:h-[400px] mt-12">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute left-[10%] top-[20%] w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl rotate-12 opacity-80 backdrop-blur-md"
            />
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute left-[30%] top-[50%] w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-indigo-600 to-blue-400 rounded-full opacity-70 backdrop-blur-md"
            />
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute right-[30%] top-[30%] w-24 h-24 md:w-40 md:h-40 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl -rotate-12 opacity-80 backdrop-blur-md"
            />
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="absolute right-[15%] top-[60%] w-16 h-16 md:w-28 md:h-28 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg rotate-45 opacity-70 backdrop-blur-md"
            />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-blue-400 mb-2">Scroll to explore</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
            <ChevronRight size={24} className="text-blue-400 rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
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
            {[
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
            ].map((service, index) => (
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

      {/* Featured Projects */}
      <section id="projects" className="py-20 md:py-32 relative bg-gradient-to-b from-black to-blue-950/30">
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
              Our Portfolio
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-lg text-blue-100/70">
              Explore our most innovative work that pushes the boundaries of digital design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "Neomorph",
                category: "E-commerce Platform",
                image: "/placeholder.svg?height=600&width=800",
                description: "A futuristic e-commerce experience with immersive product visualization.",
              },
              {
                title: "Synthwave",
                category: "Digital Marketing",
                image: "/placeholder.svg?height=600&width=800",
                description: "An award-winning marketing site with interactive data visualization.",
              },
              {
                title: "Cybernetic",
                category: "Web Application",
                image: "/placeholder.svg?height=600&width=800",
                description: "A cutting-edge SaaS dashboard with real-time analytics and AI insights.",
              },
              {
                title: "Quantum",
                category: "Brand Identity",
                image: "/placeholder.svg?height=600&width=800",
                description: "Complete digital rebrand with interactive brand guidelines.",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <div className="text-blue-400 text-sm mb-2">{project.category}</div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-blue-100/70 mb-4">{project.description}</p>
                    <Button variant="outline" className="border-blue-700 text-blue-100 hover:bg-blue-900/20">
                      View Project
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-blue-700 text-blue-100 hover:bg-blue-900/20">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Testimonials */}
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
            {[
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
            ].map((testimonial, index) => (
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

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="py-12 md:py-20 border-t border-blue-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-sm opacity-70"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold">W</span>
                  </div>
                </div>
                <span className="text-xl font-bold tracking-tight">Webx</span>
              </Link>
              <p className="text-blue-100/70 mb-6">
                Pioneering the future of digital design with immersive web experiences that captivate and convert.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-blue-400 hover:text-blue-300">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link href="#" className="text-blue-400 hover:text-blue-300">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link href="#" className="text-blue-400 hover:text-blue-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
                <Link href="#" className="text-blue-400 hover:text-blue-300">
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-blue-100/70 hover:text-blue-400 transition-colors">
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100/70 hover:text-blue-400 transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100/70 hover:text-blue-400 transition-colors">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100/70 hover:text-blue-400 transition-colors">
                    Brand Identity
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100/70 hover:text-blue-400 transition-colors">
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-blue-100/70 hover:text-blue-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100/70 hover:text-blue-400 transition-colors">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100/70 hover:text-blue-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100/70 hover:text-blue-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100/70 hover:text-blue-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="text-blue-100/70">hello@webx.design</li>
                <li className="text-blue-100/70">+1 (555) 123-4567</li>
                <li className="text-blue-100/70">
                  123 Innovation Way
                  <br />
                  Tech District, CA 94103
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-900/30 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100/50 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Webx. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-blue-100/50 text-sm hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-blue-100/50 text-sm hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-blue-100/50 text-sm hover:text-blue-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
