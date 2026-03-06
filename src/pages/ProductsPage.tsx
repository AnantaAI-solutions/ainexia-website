import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Eye, Shield, Bot, Building2, Heart, Factory, ArrowRight,
  Lightbulb, Layers, CheckCircle, Scale, Badge, Rocket, FlaskConical,
  Plane, Landmark, CheckCircle2
} from "lucide-react";

import { useTheme } from "@/components/ThemeProvider";
import productsHero from "@/assets/graphics/products_hero.png";
import productsHeroLight from "@/assets/graphics/products_hero_light.png";
import cvImage from "@/assets/graphics/computer_vision.png";
import cvImageLight from "@/assets/graphics/computer_vision_light.png";
import surveillanceImage from "@/assets/graphics/surveillance_security.png";
import surveillanceImageLight from "@/assets/graphics/surveillance_security_light.png";
import roboticsImage from "@/assets/graphics/robotics.png";
import roboticsImageLight from "@/assets/graphics/robotics_light.png";
import nlpImage from "@/assets/graphics/nlp_language.png";
import nlpImageLight from "@/assets/graphics/nlp_language_light.png";
import healthcareImage from "@/assets/graphics/healthcare_ai.png";
import healthcareImageLight from "@/assets/graphics/healthcare_ai_light.png";
import industrialImage from "@/assets/graphics/industrial_ai.png";
import industrialImageLight from "@/assets/graphics/industrial_ai_light.png";

const productAreas = [
  {
    icon: Eye,
    title: "Computer Vision Platforms",
    description: "End-to-end visual perception systems for diverse applications — from surveillance to quality control.",
    status: "Available",
    statusColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    number: "01",
    image: cvImage,
    imageLight: cvImageLight,
    color: "from-blue-500/20 to-cyan-500/10"
  },
  {
    icon: Shield,
    title: "AI for Surveillance & Security",
    description: "Intelligent monitoring and threat detection solutions for enterprise and public safety.",
    status: "Available",
    statusColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    number: "02",
    image: surveillanceImage,
    imageLight: surveillanceImageLight,
    color: "from-red-500/20 to-orange-500/10"
  },
  {
    icon: Bot,
    title: "Robotics Autonomy Modules",
    description: "Perception and decision-making components for autonomous systems and drones.",
    status: "Available",
    statusColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    number: "03",
    image: roboticsImage,
    imageLight: roboticsImageLight,
    color: "from-orange-500/20 to-amber-500/10"
  },
  {
    icon: Building2,
    title: "Enterprise AI Tools",
    description: "Business process automation and intelligent workflow solutions for large organizations.",
    status: "In Development",
    statusColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    number: "04",
    image: nlpImage,
    imageLight: nlpImageLight,
    color: "from-violet-500/20 to-purple-500/10"
  },
  {
    icon: Heart,
    title: "Healthcare AI",
    description: "AI-powered solutions for healthcare diagnostics, imaging analysis, and operations.",
    status: "In Development",
    statusColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    number: "05",
    image: healthcareImage,
    imageLight: healthcareImageLight,
    color: "from-emerald-500/20 to-teal-500/10"
  },
  {
    icon: Factory,
    title: "Industrial AI",
    description: "Predictive maintenance and quality control systems for Industry 4.0 environments.",
    status: "Research",
    statusColor: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    number: "06",
    image: industrialImage,
    imageLight: industrialImageLight,
    color: "from-indigo-500/20 to-blue-500/10"
  }
];


const industries = [
  {
    icon: Plane,
    title: "Drones & Robotics",
    description: "Enabling autonomous operations with intelligent perception systems for aerospace and robotics applications.",
    useCases: [
      "Visual navigation and obstacle avoidance",
      "Object detection and tracking",
      "Autonomous flight path planning",
    ],
    color: "from-blue-500/15 to-cyan-500/5"
  },
  {
    icon: Shield,
    title: "Surveillance & Security",
    description: "AI-powered monitoring for enhanced safety, threat detection, and proactive incident response.",
    useCases: [
      "Real-time anomaly detection",
      "Facial recognition systems",
      "Perimeter intrusion detection",
    ],
    color: "from-red-500/15 to-orange-500/5"
  },
  {
    icon: Building2,
    title: "Enterprise Automation",
    description: "Streamlining business processes through intelligent automation and document AI.",
    useCases: [
      "Document processing and extraction",
      "Workflow automation",
      "Intelligent data classification",
    ],
    color: "from-violet-500/15 to-purple-500/5"
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "AI solutions for improved diagnostics, patient care, and operational efficiency in healthcare.",
    useCases: [
      "Medical image analysis",
      "Diagnostic assistance systems",
      "Patient monitoring solutions",
    ],
    color: "from-emerald-500/15 to-teal-500/5"
  },
  {
    icon: Factory,
    title: "Industrial Systems",
    description: "Smart manufacturing and predictive maintenance solutions for Industry 4.0 operations.",
    useCases: [
      "Quality inspection automation",
      "Predictive maintenance systems",
      "Process optimization",
    ],
    color: "from-amber-500/15 to-yellow-500/5"
  },
  {
    icon: Landmark,
    title: "Finance & Banking",
    description: "AI-driven security and fraud prevention for financial services and banking institutions.",
    useCases: [
      "Fraud detection systems",
      "Identity verification",
      "Risk assessment automation",
    ],
    color: "from-indigo-500/15 to-blue-500/5"
  },
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
  const { theme } = useTheme();
  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">

        {/* Animated Background Graphic */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none z-0">
          <img
            src={theme === "dark" ? productsHero : productsHeroLight}
            alt="AI products abstract"
            className="w-full max-w-[1200px] object-cover animate-float-slow filter brightness-90 contrast-125 image-blend-aware opacity-60 dark:opacity-90"
          />
        </div>

        <div className="section-container relative z-10">
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
              <div key={index} className="group premium-card gradient-border flex flex-col">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Visual Area */}
                <div className="h-40 w-full relative mb-5 rounded-xl overflow-hidden bg-background border border-border/30 group-hover:border-primary/20 transition-colors duration-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={theme === "dark" ? area.image : area.imageLight}
                      alt={area.title}
                      className="w-full h-full object-cover filter brightness-90 contrast-125 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 image-blend-aware"
                    />
                  </div>
                </div>

                <div className="relative flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="icon-box">
                      <area.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${area.statusColor}`}>
                        {area.status}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                </div>

                <div className="mt-4 flex items-end justify-between">
                  {/* Remove Explore Area links to reduce noise */}
                  <div className="flex-1" />
                  <span className="text-3xl font-black text-primary/10 group-hover:text-primary/20 transition-colors font-display">
                    {area.number}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="section-container relative">
          <div className="text-center mb-14">
            <span className="section-label mb-4 block">Sectors We Transform</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries & Use Cases</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              We apply AI expertise across diverse industries, solving unique challenges with tailored solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-border hover:border-primary/40 bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-start gap-4">
                      <div className="icon-box-lg flex-shrink-0">
                        <industry.icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{industry.title}</h3>
                        <p className="text-sm text-muted-foreground">{industry.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Use cases */}
                  <div className="pt-2">
                    <h4 className="text-sm font-semibold mb-3">Key Applications</h4>
                    <ul className="grid gap-2">
                      {industry.useCases.map((useCase, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="section-padding relative overflow-hidden">
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