import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Eye, Shield, Bot, Building2, Heart, Factory, ArrowRight,
  Plane, Landmark, CheckCircle2
} from "lucide-react";

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
    stat: "60%",
    statLabel: "Reduction in manual operations",
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
    stat: "10×",
    statLabel: "Faster threat identification",
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
    stat: "80%",
    statLabel: "Reduction in processing time",
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
    stat: "40%",
    statLabel: "Improvement in diagnostic accuracy",
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
    stat: "35%",
    statLabel: "Reduction in downtime",
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
    stat: "95%",
    statLabel: "Fraud detection rate",
    color: "from-indigo-500/15 to-blue-500/5"
  },
];

export default function IndustriesPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="orb w-[500px] h-[500px] bg-primary/8 -top-20 -right-20 opacity-50" />

        <div className="section-container relative">
          <div className="max-w-3xl">
            <span className="section-label mb-5 block">Sectors We Transform</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 animate-fade-in">
              <span className="gradient-text">Industries</span> & Use Cases
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-1 max-w-2xl">
              We apply AI expertise across diverse industries, solving unique challenges
              with tailored solutions that create measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-card/40" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="section-container relative">
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

                  {/* Impact stat */}
                  <div className="flex items-center gap-4 mb-5 p-3 rounded-xl bg-primary/8 border border-primary/15">
                    <div className="text-2xl font-black gradient-text">{industry.stat}</div>
                    <div className="text-xs text-muted-foreground font-medium">{industry.statLabel}</div>
                  </div>

                  {/* Use cases */}
                  <div className="border-t border-border/50 pt-5">
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
                      Example Use Cases
                    </h4>
                    <ul className="space-y-2">
                      {industry.useCases.map((useCase, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
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

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 cta-gradient" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="orb w-[400px] h-[400px] bg-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />

        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label mb-5 block">Your Industry, Our AI</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-balance">
              Have a specific industry challenge?
            </h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Let's discuss how AI can address your unique operational needs and drive measurable results.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="group">
                Discuss Your Use Case
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}