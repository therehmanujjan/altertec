"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PROCESS_STEPS } from "@/lib/constants"
import { SectionWrapper, SectionHeader } from "@/components/site/section-wrapper"
import { CheckCircle2 } from "lucide-react"
import { staggerContainer, fadeInUp } from "@/lib/animations"

export function ProcessSection() {
  return (
    <SectionWrapper className="bg-background/50 relative section-glow">
      <SectionHeader
        eyebrow="How We Work"
        title="Our Proven Process"
        description="A systematic approach that delivers results, from discovery to deployment and beyond."
      />

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {PROCESS_STEPS.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="glass-card h-full relative overflow-hidden group">
              {/* Step number background */}
              <div className="absolute top-0 right-0 text-9xl font-bold text-primary/5 leading-none pr-4 pt-2 select-none">
                {step.number}
              </div>

              <CardHeader className="relative">
                <Badge className="w-fit mb-4 bg-primary/10 text-primary border-primary/20">
                  Step {step.number}
                </Badge>
                <CardTitle className="text-2xl">{step.title}</CardTitle>
              </CardHeader>

              <CardContent className="relative">
                <p className="text-muted-foreground mb-6">{step.description}</p>
                
                <div className="space-y-2">
                  {step.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Connecting line */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
