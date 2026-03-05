import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Eye, MessageSquare, Bot, Lightbulb, ArrowRight, CheckCircle2,
  Package, Cloud, Cpu, Server, Search, Code, Rocket, HeadphonesIcon,
  DollarSign, Users, Clock
} from "lucide-react";

const coreServices = [
  {
    icon: Package,
    title: "Custom AI Product Development",
    description: "End-to-end development from concept to production-ready systems. We take full ownership of the AI lifecycle — strategy, architecture, build, and deployment.",
    deliverables: [
      { icon: CheckCircle2, label: "Proof of Concept (PoC)" },
      { icon: CheckCircle2, label: "Minimum Viable Product (MVP)" },
      { icon: Server, label: "Production Systems" },
      { icon: Server, label: "SDKs & APIs" },
      { icon: Cpu, label: "On-device / Edge AI" },
      { icon: Cloud, label: "Cloud AI Platforms" },
    ]
  }
];

const capabilities = [
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Visual intelligence for automated perception and analysis.",
    useCases: ["Surveillance & monitoring", "Quality inspection", "Robotics perception", "Object detection & tracking"],
    color: "from-blue-500/15 to-cyan-500/5"
  },
  {
    icon: MessageSquare,
    title: "Text & NLP",
    description: "Understanding and processing human language at scale.",
    useCases: ["Document processing", "Intelligent assistants", "Search & summarization", "Sentiment analysis"],
    color: "from-violet-500/15 to-purple-500/5"
  },
  {
    icon: Bot,
    title: "Robotics & Autonomous Systems",
    description: "Intelligent systems for autonomous decision-making.",
    useCases: ["Perception systems", "Navigation & path planning", "Sensor fusion", "Control systems"],
    color: "from-orange-500/15 to-amber-500/5"
  },
  {
    icon: Lightbulb,
    title: "AI Consulting & Advisory",
    description: "Strategic guidance to accelerate your AI initiatives.",
    useCases: ["Feasibility studies", "Architecture design", "Data & model evaluation", "Deployment strategy"],
    color: "from-emerald-500/15 to-teal-500/5"
  }
];

const processSteps = [
  { icon: Search, step: "01", title: "Discovery", description: "Deep-dive into your business problem and AI opportunities." },
  { icon: Code, step: "02", title: "Architecture", description: "Design the optimal AI stack and integration approach." },
  { icon: Package, step: "03", title: "Build & Test", description: "Iterative development with continuous validation." },
  { icon: Rocket, step: "04", title: "Deploy & Monitor", description: "Production launch with MLOps and ongoing support." },
];

const engagementModels = [
  {
    icon: DollarSign,
    title: "Fixed-Price PoC",
    description: "Validate your AI idea with a defined scope, timeline, and budget. Perfect for exploring feasibility.",
    highlight: "Best for: New AI initiatives"
  },
  {
    icon: Users,
    title: "Dedicated AI Team",
    description: "A dedicated team of AI engineers embedded with your organization for long-term product development.",
    highlight: "Best for: Ongoing AI products"
  },
  {
    icon: Clock,
    title: "Advisory & Consulting",
    description: "Strategic AI guidance from expert engineers — architecture reviews, technology selection, and roadmap planning.",
    highlight: "Best for: Strategy & direction"
  },
];

const industries = [
  "Drones & Robotics",
  "Surveillance & Security",
  "Enterprise Automation",
  "Healthcare & Industrial",
  "Finance & Banking Security"
];

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="orb w-[500px] h-[500px] bg-violet-500/8 -top-20 -right-20 opacity-50" />

        <div className="section-container relative">
          <div className="max-w-3xl">
            <span className="section-label mb-5 block">What We Offer</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 animate-fade-in">
              AI <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-1 max-w-2xl">
              End-to-end AI services from consulting to full-scale product development.
              We build AI systems that solve real business problems — fast.
            </p>
          </div>
        </div>
      </section>

      {/* Custom AI Product Development */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-card/50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="section-container relative">
          {coreServices.map((service, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="icon-box-lg mb-6">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <span className="section-label mb-4 block">Flagship Service</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-5">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-background hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                  >
                    <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Development Process */}
      <section className="section-padding relative overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-primary/6 top-0 right-0 opacity-50" />
        <div className="section-container relative">
          <div className="text-center mb-14">
            <span className="section-label mb-4 block">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Development Process</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              A battle-tested process that delivers results, every time.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative p-6 rounded-2xl border border-border hover:border-primary/40 bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start justify-between mb-5">
                  <div className="icon-box">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-4xl font-black text-primary/12 group-hover:text-primary/22 transition-colors font-display">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-card/50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="section-container relative">
          <div className="text-center mb-14">
            <span className="section-label mb-4 block">Specializations</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Deep expertise across the AI landscape to address your specific challenges.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-border hover:border-primary/40 bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="icon-box-lg flex-shrink-0">
                      <cap.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{cap.title}</h3>
                      <p className="text-muted-foreground text-sm">{cap.description}</p>
                    </div>
                  </div>
                  <ul className="grid grid-cols-2 gap-2">
                    {cap.useCases.map((useCase, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section-padding relative overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-violet-500/6 bottom-0 -right-20 opacity-50" />
        <div className="section-container relative">
          <div className="text-center mb-14">
            <span className="section-label mb-4 block">Working Together</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Engagement Models</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Work with us in the way that fits your needs and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {engagementModels.map((model, index) => (
              <div key={index} className="group premium-card text-center">
                <div className="icon-box-lg mx-auto mb-5">
                  <model.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{model.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{model.description}</p>
                <span className="tag-badge">{model.highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-card/50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="section-container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label mb-4 block">Sectors We Serve</span>
              <h2 className="text-3xl font-bold mb-4">Industries Served</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                We work across diverse industries where AI creates meaningful, measurable impact.
              </p>
              <Button variant="heroOutline" asChild>
                <Link to="/industries" className="group">
                  Explore Industry Solutions
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 rounded-full bg-card text-sm text-foreground border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 cursor-default"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 cta-gradient" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="orb w-[400px] h-[400px] bg-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />

        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label mb-5 block">Take the First Step</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-balance">
              Ready to build your AI solution?
            </h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Let's discuss your requirements and create something extraordinary together.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="group">
                Start Your AI Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}