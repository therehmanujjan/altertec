"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MockTable, MockProgressBars } from "@/components/ui/mock-dashboard"
import { SectionWrapper } from "@/components/site/section-wrapper"
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react"
import { slideInFromLeft, slideInFromRight } from "@/lib/animations"

export function FeatureSplitSections() {
  return (
    <>
      {/* Feature 1: Intelligence at Scale */}
      <SectionWrapper className="bg-background">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="h-3 w-3 mr-1" />
              Intelligent Systems
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Intelligence That Scales With Your Business
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our AI solutions adapt and grow with your needs, from pilot projects to enterprise-wide deployments.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Real-time data processing and analytics",
                "Automated decision-making workflows",
                "Predictive insights and forecasting",
                "Seamless integration with existing systems",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="bg-primary hover:bg-primary/90 group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <MockTable />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Feature 2: Data-Driven Results */}
      <SectionWrapper className="bg-background/50">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <MockProgressBars />
          </motion.div>

          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Performance Metrics
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Measurable Impact on Your Bottom Line
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We don't just build AI—we build solutions that deliver quantifiable ROI and drive sustainable growth.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Average 127% ROI within first year",
                "85% reduction in manual processing time",
                "94% improvement in accuracy and precision",
                "24/7 monitoring and optimization",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" variant="outline" className="font-semibold">
              View Case Studies
            </Button>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  )
}
