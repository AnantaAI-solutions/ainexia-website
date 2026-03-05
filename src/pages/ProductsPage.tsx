import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Eye, Shield, Bot, Building2, Heart, Factory, ArrowRight,
  Lightbulb, Layers, CheckCircle, Scale, Badge, Rocket, FlaskConical
} from "lucide-react";

const productAreas = [
  {
    icon: Eye,
    title: "Computer Vision Platforms",
    description: "End-to-end visual perception systems for diverse applications — from surveillance to quality control.",
    status: "Available",
    statusColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    number: "01"
  },
  {
    icon: Shield,
    title: "AI for Surveillance & Security",
    description: "Intelligent monitoring and threat detection solutions for enterprise and public safety.",
    status: "Available",
    statusColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    number: "02"
  },
  {
    icon: Bot,
    title: "Robotics Autonomy Modules",
    description: "Perception and decision-making components for autonomous systems and drones.",
    status: "Available",
    statusColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    number: "03"
  },
  {
    icon: Building2,
    title: "Enterprise AI Tools",
    description: "Business process automation and intelligent workflow solutions for large organizations.",
    status: "In Development",
    statusColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    number: "04"
  },
  {
    icon: Heart,
    title: "Healthcare AI",
    description: "AI-powered solutions for healthcare diagnostics, imaging analysis, and operations.",
    status: "In Development",
    statusColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    number: "05"
  },
  {
    icon: Factory,
    title: "Industrial AI",
    description: "Predictive maintenance and quality control systems for Industry 4.0 environments.",
    status: "Research",
    statusColor: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    number: "06"
  }
];

const philosophy = [
  {
    icon: Lightbulb,
    title: "Problem-first design",
    description: "We start with real problems and measurable outcomes, not technology showcases."
  },
  {
    icon: Layers,
    title: "Modular architecture",
    description: "Components designed for maximum flexibility, re-usability, and easy integration."
  },
  {
    icon: CheckCircle,
    title: "Production readiness",
    description: "Built for reliability, monitoring, and real-world deployment from day one."
  },
  {
    icon: Scale,
    title: "Responsible AI",
    description: "Ethical considerations and explainability integrated into every solution we build."
  }
];

export default function ProductsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="orb w-[500px] h-[500px] bg-violet-500/8 -top-20 -right-20 opacity-50" />

        <div className="section-container relative">
          <div className="max-w-3xl">
            <span className="section-label mb-5 block">What We're Building</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 animate-fade-in">
              AI <span className="gradient-text">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-1 max-w-2xl">
              We build AI products across diverse domains, focusing on solutions that address
              real operational challenges and create measurable business value.
            </p>

            {/* Status legend */}
            <div className="flex flex-wrap gap-3 mt-8 animate-fade-in-delay-2">
              <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> Available
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-amber-500">
                <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" /> In Development
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-blue-500">
                <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" /> Research
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Focus Areas */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-card/40" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="section-container relative">
          <div className="text-center mb-14">
            <span className="section-label mb-4 block">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Focus Areas</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Where we develop and deploy production-ready AI solutions across industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {productAreas.map((area, index) => (
              <div key={index} className="group premium-card gradient-border">
                <div className="flex items-start justify-between mb-5">
                  <div className="icon-box-lg">
                    <area.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${area.statusColor}`}>
                      {area.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-bold mb-2">{area.title}</h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  <span className="text-4xl font-black text-primary/10 group-hover:text-primary/20 transition-colors font-display">
                    {area.number}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="section-padding relative overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-primary/6 top-0 right-0 opacity-50" />
        <div className="section-container relative">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label mb-4 block">How We Think</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">Product Philosophy</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Every product we build follows core principles that ensure real-world success.
                We create AI that works reliably in production environments — not just demos.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {philosophy.map((item, index) => (
                <div key={index} className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="icon-box mb-4">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 cta-gradient" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label mb-5 block">Let's Build Together</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-balance">
              Have a product idea? Let's discuss.
            </h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Whether it's a new AI product or enhancing an existing system — we'd love to hear your vision.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="group">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}