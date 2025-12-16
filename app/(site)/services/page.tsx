"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SERVICES } from "@/lib/constants"
import { SectionWrapper, SectionHeader } from "@/components/site/section-wrapper"
import { Lightbulb, Code, Zap, BarChart3, Cloud, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react"
import { staggerContainer, cardHover } from "@/lib/animations"

const iconMap = {
  Lightbulb,
  Code,
  Zap,
  BarChart3,
  Cloud,
  GraduationCap,
}

export default function ServicesPage() {
  const packages = [
    {
      name: "Starter",
      price: "Custom",
      description: "Perfect for businesses exploring AI for the first time",
      features: [
        "AI readiness assessment",
        "Strategic roadmap development",
        "Proof of concept (1 use case)",
        "Team training workshop",
        "30-day support",
      ],
    },
    {
      name: "Growth",
      price: "Custom",
      description: "Ideal for scaling AI across your organization",
      features: [
        "Everything in Starter",
        "Full implementation (3-5 use cases)",
        "Custom model development",
        "System integration",
        "90-day support & optimization",
        "Dedicated project manager",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Comprehensive AI transformation for large organizations",
      features: [
        "Everything in Growth",
        "Unlimited use cases",
        "Enterprise architecture design",
        "Multi-team deployment",
        "Advanced security & compliance",
        "12-month support & training",
        "Executive advisory services",
      ],
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden hero-gradient">
        <div className="absolute inset-0 aurora-gradient pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              AI Solutions For
              <br />
              <span className="text-primary">Every Business Need</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              From strategy to implementation, we deliver comprehensive AI services that transform how you work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper className="bg-background">
        <SectionHeader
          eyebrow="What We Offer"
          title="Comprehensive AI Services"
          description="End-to-end solutions tailored to your business goals and technical requirements."
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
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Deliverables:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
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
      </SectionWrapper>

      {/* Packages */}
      <SectionWrapper className="bg-background/50">
        <SectionHeader
          eyebrow="Packages"
          title="Flexible Engagement Models"
          description="Choose the package that fits your needs, timeline, and budget."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`glass-card h-full ${pkg.featured ? 'border-primary/50 shadow-lg shadow-primary/10' : ''}`}>
                <CardHeader>
                  {pkg.featured && (
                    <Badge className="w-fit mb-2 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-foreground mt-2">{pkg.price}</div>
                  <CardDescription className="mt-2">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={pkg.featured ? "w-full bg-primary hover:bg-primary/90" : "w-full"}
                    variant={pkg.featured ? "default" : "outline"}
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-background">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a free consultation and we'll help you identify the right solution for your business.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 font-semibold group">
            <Link href="/contact">
              Let's Talk Business
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </SectionWrapper>
    </>
  )
}
