"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SectionWrapper } from "@/components/site/section-wrapper"
import { COMPANY_INFO } from "@/lib/constants"
import { Mail, MapPin, Clock, Send } from "lucide-react"
import { toast } from "sonner"
import { fadeInUp, cardHover } from "@/lib/animations"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submission
    toast.success("Thanks for reaching out! We'll get back to you within 24 hours.")
    setFormData({ name: "", email: "", company: "", budget: "", message: "" })
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

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
              Contact Us
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Let's Talk
              <br />
              <span className="text-primary">Business</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              Ready to transform your business with AI? Get in touch for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <SectionWrapper className="bg-background">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="Your Company Inc."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                        <SelectTrigger id="budget">
                          <SelectValue placeholder="Select a range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10k-50k">$10K - $50K</SelectItem>
                          <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                          <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                          <SelectItem value="250k+">$250K+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us about your project..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 font-semibold group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            className="space-y-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={cardHover}
            >
              <Card className="glass-card">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-2">
                    <Mail className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={cardHover}
            >
              <Card className="glass-card">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-2">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{COMPANY_INFO.location}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={cardHover}
            >
              <Card className="glass-card">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-2">
                    <Clock className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{COMPANY_INFO.responseTime}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    We typically respond to all inquiries within one business day.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Additional CTA */}
      <SectionWrapper className="bg-background/50">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prefer to Schedule a Call?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a 30-minute consultation to discuss your AI needs with our team.
          </p>
          <Button asChild size="lg" variant="outline" className="font-semibold">
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Schedule a Call
            </a>
          </Button>
        </motion.div>
      </SectionWrapper>
    </>
  )
}
