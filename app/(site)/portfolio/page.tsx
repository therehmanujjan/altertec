"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PORTFOLIO_CATEGORIES, TESTIMONIALS } from "@/lib/constants";
import {
  SectionWrapper,
  SectionHeader,
} from "@/components/site/section-wrapper";
import { ExternalLink, Quote, Plus, Edit, Trash2 } from "lucide-react";
import { staggerContainer } from "@/lib/animations";

interface Portfolio {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  metrics: Record<string, string>;
  createdAt: string;
  updatedAt: string;
}

interface PortfolioFormData {
  title: string;
  category: string;
  tags: string;
  description: string;
  metric1Key: string;
  metric1Value: string;
  metric2Key: string;
  metric2Value: string;
  metric3Key: string;
  metric3Value: string;
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Portfolio | null>(
    null
  );
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<PortfolioFormData>({
    title: "",
    category: "AI",
    tags: "",
    description: "",
    metric1Key: "",
    metric1Value: "",
    metric2Key: "",
    metric2Value: "",
    metric3Key: "",
    metric3Value: "",
  });

  useEffect(() => {
    checkAuth();
    fetchPortfolios();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/session");
      const data = await response.json();
      setIsAuthenticated(data.authenticated);
    } catch (error) {
      console.error("Error checking auth:", error);
      setIsAuthenticated(false);
    }
  };

  const fetchPortfolios = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/portfolio");
      if (response.ok) {
        const data = await response.json();
        setPortfolios(data);
      }
    } catch (error) {
      console.error("Error fetching portfolios:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingId(null);
    setFormData({
      title: "",
      category: "AI",
      tags: "",
      description: "",
      metric1Key: "",
      metric1Value: "",
      metric2Key: "",
      metric2Value: "",
      metric3Key: "",
      metric3Value: "",
    });
    setIsFormOpen(true);
  };

  const handleEdit = (portfolio: Portfolio) => {
    setEditingId(portfolio.id);
    const metricsEntries = Object.entries(portfolio.metrics);
    setFormData({
      title: portfolio.title,
      category: portfolio.category,
      tags: portfolio.tags.join(", "),
      description: portfolio.description,
      metric1Key: metricsEntries[0]?.[0] || "",
      metric1Value: metricsEntries[0]?.[1] || "",
      metric2Key: metricsEntries[1]?.[0] || "",
      metric2Value: metricsEntries[1]?.[1] || "",
      metric3Key: metricsEntries[2]?.[0] || "",
      metric3Value: metricsEntries[2]?.[1] || "",
    });
    setIsFormOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this portfolio item?"))
      return;

    try {
      const response = await fetch(`/api/portfolio/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchPortfolios();
      } else {
        alert("Failed to delete portfolio");
      }
    } catch (error) {
      console.error("Error deleting portfolio:", error);
      alert("Error deleting portfolio");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const metrics: Record<string, string> = {};
    if (formData.metric1Key && formData.metric1Value) {
      metrics[formData.metric1Key] = formData.metric1Value;
    }
    if (formData.metric2Key && formData.metric2Value) {
      metrics[formData.metric2Key] = formData.metric2Value;
    }
    if (formData.metric3Key && formData.metric3Value) {
      metrics[formData.metric3Key] = formData.metric3Value;
    }

    const payload = {
      title: formData.title,
      category: formData.category,
      tags: formData.tags
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t),
      description: formData.description,
      metrics,
    };

    try {
      const url = editingId ? `/api/portfolio/${editingId}` : "/api/portfolio";
      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsFormOpen(false);
        fetchPortfolios();
      } else {
        const error = await response.json();
        alert(error.error || "Failed to save portfolio");
      }
    } catch (error) {
      console.error("Error saving portfolio:", error);
      alert("Error saving portfolio");
    }
  };

  const filteredProjects =
    selectedCategory === "All"
      ? portfolios
      : portfolios.filter((p) => p.category === selectedCategory);

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
              Explore real-world AI implementations that drove measurable
              business impact across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <SectionWrapper className="bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="flex-1" />
            {isAuthenticated && (
              <Button
                onClick={handleCreate}
                className="bg-primary hover:bg-primary/90"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Portfolio
              </Button>
            )}
          </div>

          <Tabs
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="w-full"
          >
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
                {loading ? (
                  <div className="text-center py-12">Loading...</div>
                ) : filteredProjects.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    No portfolio items found.
                  </div>
                ) : (
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {filteredProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        whileHover={{ scale: 1.02, y: -4 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card className="glass-card h-full group relative">
                          {isAuthenticated && (
                            <div className="absolute top-4 right-4 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button
                                size="sm"
                                variant="secondary"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleEdit(project);
                                }}
                              >
                                <Edit className="h-3 w-3" />
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDelete(project.id);
                                }}
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          )}
                          <div
                            onClick={() => setSelectedProject(project)}
                            className="cursor-pointer"
                          >
                            <CardHeader>
                              <div className="flex items-start justify-between mb-2">
                                <Badge
                                  variant="secondary"
                                  className="bg-primary/10 text-primary border-primary/20"
                                >
                                  {project.category}
                                </Badge>
                                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                {project.title}
                              </CardTitle>
                              <CardDescription>
                                {project.description}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, i) => (
                                  <Badge
                                    key={i}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border/50">
                                {Object.entries(project.metrics).map(
                                  ([key, value], i) => (
                                    <div key={i}>
                                      <div className="text-sm font-semibold text-foreground">
                                        {value}
                                      </div>
                                      <div className="text-xs text-muted-foreground capitalize">
                                        {key}
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </CardContent>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
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
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-primary">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Project Detail Dialog */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {selectedProject.category}
                  </Badge>
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <DialogTitle className="text-2xl">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-foreground mb-4">
                  Key Metrics
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(selectedProject.metrics).map(
                    ([key, value], i) => (
                      <div
                        key={i}
                        className="text-center p-4 rounded-lg bg-muted/20"
                      >
                        <div className="text-2xl font-bold text-primary">
                          {value}
                        </div>
                        <div className="text-xs text-muted-foreground capitalize mt-1">
                          {key}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Create/Edit Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingId ? "Edit" : "Add"} Portfolio Item
            </DialogTitle>
            <DialogDescription>
              Fill in the details for the portfolio item.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {PORTFOLIO_CATEGORIES.filter((c) => c !== "All").map(
                      (cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) =>
                    setFormData({ ...formData, tags: e.target.value })
                  }
                  placeholder="e.g., Healthcare, AI, NLP"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                  rows={4}
                />
              </div>

              <div className="grid gap-4">
                <Label>Metrics (3 key-value pairs)</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Key (e.g., accuracy)"
                    value={formData.metric1Key}
                    onChange={(e) =>
                      setFormData({ ...formData, metric1Key: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Value (e.g., 94%)"
                    value={formData.metric1Value}
                    onChange={(e) =>
                      setFormData({ ...formData, metric1Value: e.target.value })
                    }
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Key (e.g., time)"
                    value={formData.metric2Key}
                    onChange={(e) =>
                      setFormData({ ...formData, metric2Key: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Value (e.g., 40% faster)"
                    value={formData.metric2Value}
                    onChange={(e) =>
                      setFormData({ ...formData, metric2Value: e.target.value })
                    }
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Key (e.g., satisfaction)"
                    value={formData.metric3Key}
                    onChange={(e) =>
                      setFormData({ ...formData, metric3Key: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Value (e.g., 4.8/5)"
                    value={formData.metric3Value}
                    onChange={(e) =>
                      setFormData({ ...formData, metric3Value: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsFormOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                {editingId ? "Update" : "Create"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
