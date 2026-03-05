import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import {
  Eye, MessageSquare, AudioLines, Bot, ArrowRight,
  CheckCircle2, Cpu, Zap, Shield, TrendingUp,
  Brain, Layers, Globe, Sparkles
} from "lucide-react";

const solutions = [
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Object detection, visual inspection, surveillance & autonomous perception systems.",
    tag: "Vision AI"
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Intelligent chatbots, document understanding, semantic search & text analytics.",
    tag: "Language AI"
  },
  {
    icon: AudioLines,
    title: "Speech & Audio Intelligence",
    description: "Voice recognition, real-time transcription, audio classification & sound analytics.",
    tag: "Audio AI"
  },
  {
    icon: Bot,
    title: "Robotics & Automation",
    description: "Sensor fusion, autonomous navigation, intelligent control & edge AI systems.",
    tag: "Robotics AI"
  },
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "Demand forecasting, anomaly detection, risk modeling & data-driven decision making.",
    tag: "Analytics AI"
  },
  {
    icon: Layers,
    title: "Custom AI Products",
    description: "End-to-end AI product development from concept to deployment at scale.",
    tag: "Product AI"
  }
];

const stats = [
  { value: "10+", label: "AI Solutions" },
  { value: "6+", label: "Industry Verticals" },
  { value: "100%", label: "Custom Built" },
  { value: "24/7", label: "Support Ready" },
];

const whyUs = [
  {
    icon: Cpu,
    title: "Full-Stack AI Expertise",
    description: "From data pipelines to model deployment — we handle the entire AI lifecycle under one roof."
  },
  {
    icon: TrendingUp,
    title: "Production-Grade Solutions",
    description: "Battle-tested systems engineered for reliability, performance, and enterprise-scale deployment."
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "Go from idea to working AI prototype in weeks, not months. Validate fast, scale faster."
  },
  {
    icon: Shield,
    title: "Responsible & Secure AI",
    description: "Privacy-first architecture with bias monitoring, explainability, and compliance built-in."
  }
];

const industries = [
  "Healthcare & Life Sciences",
  "Manufacturing & Industry 4.0",
  "Education & EdTech",
  "Finance & Insurance",
  "Retail & E-Commerce",
  "Logistics & Supply Chain"
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-28 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-glow-pulse pointer-events-none" />
        
        <div className="section-container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">All AI Solutions — One Partner</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-8 animate-fade-in">
              Every AI Solution{" "}
              <span className="gradient-text">Your Business Needs</span>
              <br />
              <span className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl font-medium">
                Built, Deployed & Scaled
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-1">
              Vision, Language, Audio, Robotics, Analytics — we design, build, and deploy 
              AI systems that create measurable business impact. One team. Complete AI coverage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get a Free AI Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">See All Solutions</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-8 z-10">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 glass-card rounded-2xl p-8 shadow-lg">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One-Stop Positioning */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-[0.15em]">
                Why One Partner for All AI
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stop juggling multiple AI vendors
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most companies work with 3-5 different vendors for their AI needs — leading to 
              fragmented systems, integration headaches, and wasted budgets. AINEXIA brings 
              every AI capability under one roof with unified architecture, seamless integration, 
              and a single point of accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-card/30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="section-container relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete AI Solutions Suite
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From computer vision to predictive analytics — every AI capability your business needs, 
              expertly built and production-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover-lift"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding relative overflow-hidden">
        <div className="section-container relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                AI Solutions for Every Industry
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                We understand the unique challenges of your industry and deliver AI solutions 
                tailored to your specific workflows, compliance needs, and growth objectives.
              </p>
              <ul className="space-y-4">
                {industries.map((item, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-lg text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="heroOutline" className="mt-8" asChild>
                <Link to="/industries">See Industry Solutions</Link>
              </Button>
            </div>
            
            {/* Why Us Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to consolidate your AI strategy?
            </h2>
            <p className="text-muted-foreground mb-4 text-lg">
              Get a free consultation to discover how AINEXIA can replace multiple vendors 
              with one integrated, powerful AI platform.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              No commitment required · Response within 24 hours
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
