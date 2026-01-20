import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { Eye, MessageSquare, AudioLines, Bot, ArrowRight, CheckCircle2 } from "lucide-react";
const capabilities = [{
  icon: Eye,
  title: "Computer Vision",
  description: "Visual perception systems for surveillance, inspection, and robotics applications."
}, {
  icon: MessageSquare,
  title: "Text & Language Processing",
  description: "Document processing, intelligent assistants, and semantic search solutions."
}, {
  icon: AudioLines,
  title: "Audio & Sound Analytics",
  description: "Speech recognition, audio classification, and sound event detection."
}, {
  icon: Bot,
  title: "Robotics & Intelligent Systems",
  description: "Perception, navigation, and sensor fusion for autonomous systems."
}];
const whatWeDo = ["Custom AI Product Development", "AI System Design & Architecture", "Model Development, Optimization & Deployment", "End-to-End AI Engineering Support"];
const whyUs = [{
  title: "Business-driven AI solutions",
  description: "We focus on solving real business problems, not chasing technology trends."
}, {
  title: "Custom-built systems",
  description: "Every solution is tailored to your specific needs and operational context."
}, {
  title: "Production-ready engineering",
  description: "Our systems are built for reliability, scalability, and real-world deployment."
}, {
  title: "Flexible engagement models",
  description: "From consulting to full product development, we adapt to your needs."
}];
export default function HomePage() {
  return <Layout>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="section-container relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 animate-fade-in">
              Infinite Intelligence.{" "}
              <span className="gradient-text">Practical Solutions.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-1">
              AnantaAI Solutions builds custom AI products that help organizations 
              turn complex data into reliable, scalable, and real-world intelligent systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start Your AI Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">Explore Our Capabilities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding border-t border-border">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Who We Are
            </h2>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              AnantaAI Solutions is an AI engineering company focused on custom 
              artificial intelligence product development. We help businesses design 
              and deploy AI systems that are practical, scalable, and aligned with 
              real operational needs.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-card border-y border-border">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We provide end-to-end AI services from consulting to full-scale 
                product development, ensuring every solution is built for real-world impact.
              </p>
              <ul className="space-y-4">
                {whatWeDo.map((item, index) => <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>)}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((cap, index) => <div key={index} className="p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors">
                  <cap.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground">{cap.description}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Why AnantaAI */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why AnantaAI Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine deep AI expertise with practical engineering to deliver 
              solutions that work in the real world.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => <div key={index} className="p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary/5 border-t border-border">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Looking to build reliable AI solutions that create real impact?
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