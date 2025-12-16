"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SERVICES } from "@/lib/constants"
import { SectionWrapper, SectionHeader } from "@/components/site/section-wrapper"
import { Lightbulb, Code, Zap, BarChart3, Cloud, GraduationCap, ArrowRight } from "lucide-react"
import { staggerContainer, cardHover } from "@/lib/animations"

const iconMap = {
  Lightbulb,
  Code,
  Zap,
  BarChart3,
  Cloud,
  GraduationCap,
}

export function ServicesPreviewSection() {
  return (
    <SectionWrapper className="bg-background">
      <SectionHeader
        eyebrow="What We Do"
        title="AI Solutions for Every Business Challenge"
        description="From strategy to implementation, we deliver end-to-end AI solutions that drive real business impact."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {SERVICES.map((service, index) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap]
          return (
            <motion.div
              key={service.id}
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={cardHover}
            >
              <Card className="glass-card h-full group">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button asChild size="lg" variant="outline" className="font-semibold group">
          <Link href="/services">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>
    </SectionWrapper>
  )
}
