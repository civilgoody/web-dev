"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string
  popular: PopularPlan
  price: number
  description: string
  features: string[]
  buttonText: string
}

const pricingList: PricingProps[] = [
  {
    title: "Starter",
    popular: PopularPlan.NO,
    price: 499, // Example Price
    description:
      "Ideal for individuals and small startups launching their first product.",
    features: [
      "Up to 5 Screens/Pages",
      "Standard UI/UX Design",
      "Basic Prototyping",
      "2 Rounds of Revisions",
      "Email Support",
    ],
    buttonText: "Get Started",
  },
  {
    title: "Pro",
    popular: PopularPlan.YES,
    price: 999, // Example Price
    description:
      "Perfect for growing businesses needing a professional and polished presence.",
    features: [
      "Up to 15 Screens/Pages",
      "Custom UI/UX Design",
      "Interactive Prototyping",
      "Design System Elements",
      "4 Rounds of Revisions",
      "Priority Support",
    ],
    buttonText: "Choose Pro",
  },
  {
    title: "Enterprise",
    popular: PopularPlan.NO,
    price: 1999, // Example Price - Or "Contact Us"
    description:
      "For established companies requiring comprehensive design solutions.",
    features: [
      "16+ Screens/Pages",
      "Advanced UI/UX & Interaction Design",
      "Full Design System",
      "Usability Testing",
      "Unlimited Revisions",
      "Dedicated Account Manager",
    ],
    buttonText: "Contact Us",
  },
]

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 relative bg-background">
      <div className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:36px_36px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-transparent dark:text-glow tracking-tight">
            Flexible Pricing Plans
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan to kickstart your next project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pricingList.map((pricing: PricingProps, index: number) => (
            <motion.div
              key={pricing.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card
                className={`flex flex-col justify-between border-2 rounded-lg backdrop-blur-md p-6 h-full group transition-all duration-300 ${
                  pricing.popular === PopularPlan.YES
                    ? "border-primary/50 shadow-[0_0_15px_rgba(59,130,246,0.3)] dark:shadow-[0_0_25px_rgba(59,130,246,0.5)] bg-card/70"
                    : "border-primary/30 bg-card/60 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                }`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-feature-gradient rounded-lg"></div>
                <div className="relative">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="flex items-center justify-between text-xl font-semibold mb-2">
                      {pricing.title}
                      {pricing.popular === PopularPlan.YES ? (
                        <Badge
                          variant="secondary"
                          className="text-xs font-semibold text-primary-foreground bg-gradient-to-r from-primary to-primary/70 border border-primary/50 shadow-sm px-2 py-0.5"
                        >
                          Most Popular
                        </Badge>
                      ) : null}
                    </CardTitle>
                    <div>
                      <span className="text-3xl font-bold">${pricing.price}</span>
                      <span className="text-muted-foreground text-sm"> /project</span>
                    </div>
                    <CardDescription className="pt-3 text-sm">
                      {pricing.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 mb-6 flex-grow">
                    <ul className="space-y-2">
                      {pricing.features.map((feature: string) => (
                        <li key={feature} className="flex items-center text-sm">
                          <Check className="text-primary w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="p-0">
                    <Button
                      className={`w-full transition-all duration-300 transform hover:scale-[1.03] ${
                        pricing.popular === PopularPlan.YES
                          ? "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/80 hover:to-primary text-primary-foreground shadow-md hover:shadow-lg"
                          : "bg-secondary hover:bg-secondary/80"
                      }`}
                      aria-label={`Get ${pricing.title} Plan`}
                    >
                      {pricing.buttonText}
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 
