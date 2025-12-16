"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PORTFOLIO_ITEMS } from "@/lib/constants"
import { SectionWrapper, SectionHeader } from "@/components/site/section-wrapper"
import { ArrowRight, ExternalLink } from "lucide-react"
import { staggerContainer, cardHover } from "@/lib/animations"

export function PortfolioTeaserSection() {
  const featuredProjects = PORTFOLIO_ITEMS.slice(0, 6)

  return (
    <SectionWrapper className="bg-background relative section-glow">
      <SectionHeader
        eyebrow="Our Work"
        title="Real Solutions, Real Results"
        description="Explore how we've helped businesses transform with AI-powered solutions."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={cardHover}
          >
            <Card className="glass-card h-full group cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {project.category}
                  </Badge>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border/50">
                  {Object.entries(project.metrics).map(([key, value], i) => (
                    <div key={i}>
                      <div className="text-sm font-semibold text-foreground">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 font-semibold group">
          <Link href="/portfolio">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>
    </SectionWrapper>
  )
}
