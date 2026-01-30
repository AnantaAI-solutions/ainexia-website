import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Plane,
  Shield,
  Building2,
  Heart,
  Factory,
  Landmark,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    icon: Plane,
    title: "Drones & Robotics",
    description: "Enabling autonomous operations with intelligent perception systems.",
    useCases: [
      "Visual navigation and obstacle avoidance",
      "Object detection and tracking",
      "Autonomous flight path planning",
    ],
  },
  {
    icon: Shield,
    title: "Surveillance & Security",
    description: "AI-powered monitoring for enhanced safety and threat detection.",
    useCases: [
      "Real-time anomaly detection",
      "Facial recognition systems",
      "Perimeter intrusion detection",
    ],
  },
  {
    icon: Building2,
    title: "Enterprise Automation",
    description: "Streamlining business processes through intelligent automation.",
    useCases: [
      "Document processing and extraction",
      "Workflow automation",
      "Intelligent data classification",
    ],
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "AI solutions for improved diagnostics and patient care.",
    useCases: [
      "Medical image analysis",
      "Diagnostic assistance systems",
      "Patient monitoring solutions",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Systems",
    description: "Smart manufacturing and predictive maintenance solutions.",
    useCases: [
      "Quality inspection automation",
      "Predictive maintenance systems",
      "Process optimization",
    ],
  },
  {
    icon: Landmark,
    title: "Finance & Banking Security",
    description: "AI-driven security and fraud prevention for financial services.",
    useCases: [
      "Fraud detection systems",
      "Identity verification",
      "Risk assessment automation",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        
        <div className="section-container relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              <span className="gradient-text">Industries</span> & Use Cases
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-1">
              We apply AI expertise across diverse industries, solving unique 
              challenges with tailored solutions that create measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-card/50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="section-container relative">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl bg-secondary/20 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_-10px_hsl(199_89%_48%/0.3)]"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <industry.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                    <p className="text-muted-foreground">{industry.description}</p>
                  </div>
                </div>
                <div className="border-t border-border/50 pt-4">
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">
                    Example Use Cases
                  </h4>
                  <ul className="space-y-2">
                    {industry.useCases.map((useCase, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
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

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5" />
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Have a specific industry challenge?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's discuss how AI can address your unique operational needs.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Discuss Your Use Case
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}