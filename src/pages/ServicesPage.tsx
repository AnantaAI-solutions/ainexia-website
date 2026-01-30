import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Eye, MessageSquare, Bot, Lightbulb, ArrowRight, CheckCircle2, Package, Cloud, Cpu, Server } from "lucide-react";

const coreServices = [
  {
    icon: Package,
    title: "Custom AI Product Development",
    description: "End-to-end development from concept to production-ready systems.",
    deliverables: [
      "Proof of Concept (PoC)",
      "Minimum Viable Product (MVP)",
      "Production systems",
      "SDKs & APIs",
      "On-device / Edge AI",
      "Cloud AI platforms"
    ]
  }
];

const capabilities = [
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Visual intelligence for automated perception and analysis.",
    useCases: ["Surveillance & monitoring", "Quality inspection", "Robotics perception", "Object detection & tracking"]
  },
  {
    icon: MessageSquare,
    title: "Text & NLP",
    description: "Understanding and processing human language at scale.",
    useCases: ["Document processing", "Intelligent assistants", "Search & summarization", "Sentiment analysis"]
  },
  {
    icon: Bot,
    title: "Robotics & Autonomous Systems",
    description: "Intelligent systems for autonomous decision-making.",
    useCases: ["Perception systems", "Navigation & path planning", "Sensor fusion", "Control systems"]
  },
  {
    icon: Lightbulb,
    title: "AI Consulting & Advisory",
    description: "Strategic guidance for your AI initiatives.",
    useCases: ["Feasibility studies", "Architecture design", "Data & model evaluation", "Deployment strategy"]
  }
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
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        
        <div className="section-container relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              AI <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-1">
              End-to-end AI services from consulting to full-scale product development. 
              We build AI systems that solve real business problems.
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
            <div key={index} className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {service.description}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-3 p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/40 transition-all duration-300"
                  >
                    {i === 4 ? (
                      <Cpu className="h-5 w-5 text-primary flex-shrink-0" />
                    ) : i === 5 ? (
                      <Cloud className="h-5 w-5 text-primary flex-shrink-0" />
                    ) : i === 3 ? (
                      <Server className="h-5 w-5 text-primary flex-shrink-0" />
                    ) : (
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    )}
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="section-container relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Deep expertise across the AI landscape to address your specific challenges.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl bg-secondary/20 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_-10px_hsl(199_89%_48%/0.3)]"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <cap.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{cap.title}</h3>
                    <p className="text-muted-foreground">{cap.description}</p>
                  </div>
                </div>
                <ul className="grid grid-cols-2 gap-3">
                  {cap.useCases.map((useCase, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {useCase}
                    </li>
                  ))}
                </ul>
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
              <h2 className="text-3xl font-bold mb-4">Industries Served</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                We work across diverse industries where AI can create meaningful impact.
              </p>
              <Button variant="heroOutline" asChild>
                <Link to="/industries">
                  Explore Industry Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 rounded-full bg-secondary/30 text-sm text-foreground border border-border hover:border-primary/40 transition-colors"
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
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5" />
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to build your AI solution?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's discuss your requirements and create something extraordinary.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start Your AI Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}