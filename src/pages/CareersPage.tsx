import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Lightbulb, Globe, BookOpen, ArrowRight, Mail } from "lucide-react";

const culture = [
  {
    icon: Lightbulb,
    title: "Innovation-driven",
    description: "We encourage experimentation and creative problem-solving."
  },
  {
    icon: Globe,
    title: "Flexible & Remote-friendly",
    description: "Work from anywhere with a focus on outcomes, not hours."
  },
  {
    icon: BookOpen,
    title: "Learning-focused",
    description: "Continuous growth through challenging projects and mentorship."
  }
];

const futureRoles = [
  "AI / ML Engineers",
  "Computer Vision Engineers",
  "Robotics Engineers",
  "Software Engineers"
];

export default function CareersPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        
        <div className="section-container relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              <span className="gradient-text">Careers</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-1">
              We are not actively hiring at the moment, but we always welcome 
              connections with talented individuals who share our passion for 
              practical AI.
            </p>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-card/50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="section-container relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Culture</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The environment we're building for our future team.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {culture.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors group-hover:shadow-[0_0_30px_-5px_hsl(199_89%_48%/0.4)]">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Roles */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Future Roles</h2>
              <p className="text-muted-foreground text-lg">
                Areas where we'll be building our team as we grow.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {futureRoles.map((role, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsl(199_89%_48%/0.3)]"
                >
                  <span className="font-medium text-foreground">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Interested in Joining?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              While we're not actively hiring, we'd love to hear from you. 
              Reach out and let's stay connected.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}