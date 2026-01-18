import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Eye, MessageSquare, Bot, Lightbulb, ArrowRight, CheckCircle2, Package, Cloud, Cpu, Server } from "lucide-react";
const coreServices = [{
  icon: Package,
  title: "Custom AI Product Development",
  description: "End-to-end development from concept to production-ready systems.",
  deliverables: ["Proof of Concept (PoC)", "Minimum Viable Product (MVP)", "Production systems", "SDKs & APIs", "On-device / Edge AI", "Cloud AI platforms"]
}];
const capabilities = [{
  icon: Eye,
  title: "Computer Vision",
  description: "Visual intelligence for automated perception and analysis.",
  useCases: ["Surveillance & monitoring", "Quality inspection", "Robotics perception", "Object detection & tracking"]
}, {
  icon: MessageSquare,
  title: "Text & NLP",
  description: "Understanding and processing human language at scale.",
  useCases: ["Document processing", "Intelligent assistants", "Search & summarization", "Sentiment analysis"]
}, {
  icon: Bot,
  title: "Robotics & Autonomous Systems",
  description: "Intelligent systems for autonomous decision-making.",
  useCases: ["Perception systems", "Navigation & path planning", "Sensor fusion", "Control systems"]
}, {
  icon: Lightbulb,
  title: "AI Consulting & Advisory",
  description: "Strategic guidance for your AI initiatives.",
  useCases: ["Feasibility studies", "Architecture design", "Data & model evaluation", "Deployment strategy"]
}];
const industries = ["Drones & Robotics", "Surveillance & Security", "Enterprise Automation", "Healthcare & Industrial", "Finance & Banking Security"];
export default function ServicesPage() {
  return <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
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
      <section className="section-padding bg-card border-y border-border">
        <div className="section-container">
          {coreServices.map((service, index) => <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {service.description}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.deliverables.map((item, i) => <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
                    {i === 4 ? <Cpu className="h-5 w-5 text-primary flex-shrink-0" /> : i === 5 ? <Cloud className="h-5 w-5 text-primary flex-shrink-0" /> : i === 3 ? <Server className="h-5 w-5 text-primary flex-shrink-0" /> : <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />}
                    <span>{item}</span>
                  </div>)}
              </div>
            </div>)}
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Deep expertise across the AI landscape to address your specific challenges.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => <div key={index} className="p-8 rounded-xl card-gradient border border-border hover:border-primary/30 transition-colors text-primary">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <cap.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{cap.title}</h3>
                    <p className="text-muted-foreground">{cap.description}</p>
                  </div>
                </div>
                <ul className="grid grid-cols-2 gap-2">
                  {cap.useCases.map((useCase, i) => <li key={i} className="flex items-center gap-2 text-sm text-primary-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {useCase}
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-card border-y border-border">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Industries Served</h2>
              <p className="text-muted-foreground mb-8">
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
              {industries.map((industry, index) => <span key={index} className="px-4 py-2 rounded-full bg-secondary text-sm border border-border">
                  {industry}
                </span>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to build your AI solution?
            </h2>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start Your AI Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
}