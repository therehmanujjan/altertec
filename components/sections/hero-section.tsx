"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { MockDashboard } from "@/components/ui/mock-dashboard"
import { buttonHover } from "@/lib/animations"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden hero-gradient">
      {/* Background glow */}
      <div className="absolute inset-0 aurora-gradient pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                <Sparkles className="h-3 w-3 mr-1" />
                AI-Powered Business Solutions
              </Badge>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Build The Future
              <br />
              <span className="text-primary">With AI</span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-xl text-balance"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We transform businesses with intelligent AI solutions that drive measurable results. From strategy to deployment, we're your innovation partner.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group">
                  <Link href="/contact">
                    Let's Talk Business
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
                <Button asChild size="lg" variant="outline" className="font-semibold">
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div>
                <div className="text-3xl font-bold text-foreground">150+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">94%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Mock Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <MockDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
