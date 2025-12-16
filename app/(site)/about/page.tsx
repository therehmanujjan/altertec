"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionWrapper, SectionHeader } from "@/components/site/section-wrapper"
import { Target, Lightbulb, Users, TrendingUp, Award, Globe } from "lucide-react"
import { staggerContainer, cardHover, fadeInUp } from "@/lib/animations"
import { MockProgressBars } from "@/components/ui/mock-dashboard"

export default function AboutPage() {
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
              About Us
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              We're Building The Future
              <br />
              <span className="text-primary">With AI Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              A team of AI experts, engineers, and strategists dedicated to transforming businesses through intelligent automation and data-driven solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <SectionWrapper className="bg-background">
        <SectionHeader
          eyebrow="Our Mission"
          title="Driving Innovation, Delivering Results"
          description="We believe AI should be accessible, practical, and transformative for businesses of all sizes."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Target,
              title: "Purpose-Driven",
              description: "Every solution we build is designed to solve real business problems and deliver measurable ROI.",
            },
            {
              icon: Lightbulb,
              title: "Innovation First",
              description: "We stay at the cutting edge of AI technology to bring you the most advanced solutions available.",
            },
            {
              icon: Users,
              title: "Client Partnership",
              description: "Your success is our success. We work alongside you as a true strategic partner, not just a vendor.",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={cardHover}
            >
              <Card className="glass-card h-full">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper className="bg-background/50">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experience Meets Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              With over 15 years of combined experience and 150+ successful projects, we've built a reputation for delivering AI solutions that actually work.
            </p>
            <div className="space-y-4">
              {[
                { icon: Award, text: "Award-winning team of AI specialists" },
                { icon: TrendingUp, text: "Proven track record of 127% average ROI" },
                { icon: Globe, text: "Trusted by enterprises across 20+ industries" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MockProgressBars />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Stats Section */}
      <SectionWrapper className="bg-background">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {[
            { value: "150+", label: "Projects Completed" },
            { value: "94%", label: "Client Satisfaction" },
            { value: "15+", label: "Years Experience" },
            { value: "50+", label: "Industry Awards" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>
    </>
  )
}
