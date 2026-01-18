import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Eye, Shield, Bot, Building2, Heart, Factory, ArrowRight, Lightbulb, Layers, CheckCircle, Scale } from "lucide-react";
const productAreas = [{
  icon: Eye,
  title: "Computer Vision Platforms",
  description: "End-to-end visual perception systems for diverse applications."
}, {
  icon: Shield,
  title: "AI for Surveillance & Security",
  description: "Intelligent monitoring and threat detection solutions."
}, {
  icon: Bot,
  title: "Robotics Autonomy Modules",
  description: "Perception and decision-making components for autonomous systems."
}, {
  icon: Building2,
  title: "Enterprise AI Tools",
  description: "Business process automation and intelligent workflow solutions."
}, {
  icon: Heart,
  title: "Healthcare AI",
  description: "AI-powered solutions for healthcare diagnostics and operations."
}, {
  icon: Factory,
  title: "Industrial AI",
  description: "Predictive maintenance and quality control systems."
}];
const philosophy = [{
  icon: Lightbulb,
  title: "Problem-first design",
  description: "We start with real problems, not technology showcases."
}, {
  icon: Layers,
  title: "Modular architecture",
  description: "Components designed for flexibility and integration."
}, {
  icon: CheckCircle,
  title: "Production readiness",
  description: "Built for reliability and real-world deployment."
}, {
  icon: Scale,
  title: "Responsible AI",
  description: "Ethical considerations integrated into every solution."
}];
export default function ProductsPage() {
  return <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              <span className="gradient-text">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-1">
              We build AI products across diverse domains, focusing on solutions 
              that address real operational challenges and create measurable value.
            </p>
          </div>
        </div>
      </section>

      {/* Product Focus Areas */}
      <section className="section-padding bg-card border-y border-border">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Product Focus Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Areas where we develop and deploy production-ready AI solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productAreas.map((area, index) => <div key={index} className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <area.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Product Philosophy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Every product we build follows core principles that ensure 
                real-world success. We believe in creating AI that works 
                reliably in production environments.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {philosophy.map((item, index) => <div key={index} className="p-5 rounded-xl card-gradient border border-border">
                  <item.icon className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-semibold mb-1 text-primary">{item.title}</h3>
                  <p className="text-sm text-primary-foreground">{item.description}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary/5 border-t border-border">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Have a product idea? Let's discuss.
            </h2>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
}