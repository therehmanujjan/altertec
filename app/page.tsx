import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Users, Zap, Target, TrendingUp, Clock, DollarSign } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import AltertecHero from "@/components/hero1"
import FeaturedAgent from "@/components/feature-section/featuredagent"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section 
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 animate-fade-in">
              AI Transformation for SMEs
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance animate-fade-in-up">
              AI Transformation for SMEs
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance animate-fade-in-up animation-delay-200">
              Strategy. Automation. Results.
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty animate-fade-in-up animation-delay-400">
              Altertec AI helps small and medium-sized businesses move beyond the hype of AI into real, measurable
              transformation. From workflow automation to custom AI products, we design solutions that save time, cut
              costs, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Book Your Free AI Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/process">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

*/}

      <AltertecHero />

      {/* Value Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Altertec?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>ROI-driven implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every solution is designed to deliver measurable returns on your investment.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Simple adoption process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We make AI implementation straightforward and accessible for your team.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Long-term strategic partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're committed to your ongoing success with continuous support and optimization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* About Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Your AI Transformation Partner
            </h2>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Altertec AI bridges the gap between AI's potential and SMEs' real needs. We combine consulting,
                implementation, and training into one partnership. Our mission: make AI adoption simple, profitable, and
                scalable for growing businesses worldwide.
              </p>
              <div className="flex justify-center">
                <Button variant="outline" asChild>
                  <Link href="/about">Meet Our Process</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Feature Section */}

      <FeaturedAgent />

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              At Altertec AI, we provide end-to-end services that empower SMEs to adopt and scale AI. From automation to
              custom SaaS solutions, our team ensures every implementation is ROI-driven and strategy-first.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  AI Audits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Identify inefficiencies & high-ROI opportunities</CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Workflow Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Streamline operations with AI-powered workflows</CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  AI Agents & Chatbots
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Enhance customer experience</CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  AI SaaS Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Build scalable, AI-powered software</CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Consulting & Training
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Educate teams & build AI roadmaps</CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Ongoing Partnerships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Long-term optimization & support</CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/case-studies">Explore Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our 4-Step Process to AI Success</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery Call</h3>
              <p className="text-muted-foreground">Understand your goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Audit & Mapping</h3>
              <p className="text-muted-foreground">Identify automation opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation Roadmap</h3>
              <p className="text-muted-foreground">Design a prioritized ROI-first plan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Build, Deploy, Optimize</h3>
              <p className="text-muted-foreground">Deliver solutions and improve continuously</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/process">Learn More About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why AI Now Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Why Now Is the Time to Adopt AI</h2>
            <p className="text-lg text-muted-foreground mb-12 text-pretty">
              AI adoption among SMEs is growing at 40% year over year. Early adopters gain a clear competitive
              advantage: reduced costs, smarter operations, and scalability with fewer resources.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Cut costs & increase efficiency</h3>
              </div>
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Scale faster with fewer resources</h3>
              </div>
              <div className="text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Stay ahead of competitors</h3>
              </div>
              <div className="text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Build smarter systems, not just more tools</h3>
              </div>
            </div>
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/why-ai-now">Discover Why AI Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Proven Results. Real Impact.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Logistics SME</CardTitle>
                <Badge variant="secondary">250+ Hours Saved</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Saved 250+ hours per quarter via automated onboarding</p>
                <div className="text-sm text-primary font-medium">ROI: 340% in first year</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Healthcare SME</CardTitle>
                <Badge variant="secondary">$60K Savings Found</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Discovered $60K in hidden savings with AI audit</p>
                <div className="text-sm text-primary font-medium">ROI: 280% in first year</div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/contact">Book Your Audit to Find Similar Opportunities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Partners in Transformation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We collaborate with industry-leading AI platforms and tool providers to deliver scalable solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="h-12 bg-muted rounded flex items-center justify-center">
                <span className="text-sm font-medium">OpenAI</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 bg-muted rounded flex items-center justify-center">
                <span className="text-sm font-medium">Microsoft</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 bg-muted rounded flex items-center justify-center">
                <span className="text-sm font-medium">Google Cloud</span>
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 bg-muted rounded flex items-center justify-center">
                <span className="text-sm font-medium">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Find Your First AI Win</h2>
            <p className="text-lg text-muted-foreground mb-12 text-pretty">
              Ready to explore AI transformation for your business? Contact us today to book your free audit.
            </p>
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Tell us about your business and AI goals..."
                    ></textarea>
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Book Free AI Audit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <div className="mt-8 pt-8 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground mb-2">Contact us directly:</p>
                  <p className="text-sm text-foreground">team@altertec.ai</p>
                  <div className="flex justify-center space-x-4 mt-4">
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      LinkedIn
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Website
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity mb-4">
              <img src="/logo1.png" alt="Altertec AI" className="h-8 w-auto mx-auto" />
            </Link>
            <p className="text-muted-foreground mb-4">AI Transformation for SMEs</p>
            <p className="text-sm text-muted-foreground">© 2024 Altertec AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
