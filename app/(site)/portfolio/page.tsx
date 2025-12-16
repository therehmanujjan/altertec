"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES, TESTIMONIALS } from "@/lib/constants"
import { SectionWrapper, SectionHeader } from "@/components/site/section-wrapper"
import { ExternalLink, Quote } from "lucide-react"
import { staggerContainer, cardHover } from "@/lib/animations"

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<typeof PORTFOLIO_ITEMS[0] | null>(null)

  const filteredProjects = selectedCategory === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(p => p.category === selectedCategory)

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
              Portfolio
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Success Stories
              <br />
              <span className="text-primary">From Our Clients</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              Explore real-world AI implementations that drove measurable business impact across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <SectionWrapper className="bg-background">
        <div className="max-w-6xl mx-auto">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="w-full justify-start mb-12 flex-wrap h-auto gap-2 bg-transparent">
              {PORTFOLIO_CATEGORIES.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {PORTFOLIO_CATEGORIES.map((category) => (
              <TabsContent key={category} value={category}>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      variants={cardHover}
                      onClick={() => setSelectedProject(project)}
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
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="bg-background/50">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="Real feedback from real clients who achieved real results."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-card h-full">
                <CardHeader>
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <CardDescription className="text-base text-foreground italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-t border-border/50 pt-4">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {selectedProject.category}
                  </Badge>
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-base">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-foreground mb-4">Key Metrics</h4>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(selectedProject.metrics).map(([key, value], i) => (
                    <div key={i} className="text-center p-4 rounded-lg bg-muted/20">
                      <div className="text-2xl font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize mt-1">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
              <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                View Full Case Study
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
