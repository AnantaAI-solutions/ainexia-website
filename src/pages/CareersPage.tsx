import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Lightbulb, Globe, BookOpen, ArrowRight, Mail } from "lucide-react";
const culture = [{
  icon: Lightbulb,
  title: "Innovation-driven",
  description: "We encourage experimentation and creative problem-solving."
}, {
  icon: Globe,
  title: "Flexible & Remote-friendly",
  description: "Work from anywhere with a focus on outcomes, not hours."
}, {
  icon: BookOpen,
  title: "Learning-focused",
  description: "Continuous growth through challenging projects and mentorship."
}];
const futureRoles = ["AI / ML Engineers", "Computer Vision Engineers", "Robotics Engineers", "Software Engineers"];
export default function CareersPage() {
  return <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
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
      <section className="section-padding bg-card border-y border-border">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The environment we're building for our future team.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {culture.map((item, index) => <div key={index} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Future Roles */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Future Roles</h2>
              <p className="text-muted-foreground">
                Areas where we'll be building our team as we grow.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {futureRoles.map((role, index) => <div key={index} className="p-5 rounded-xl card-gradient border border-border text-center">
                  <span className="font-medium text-primary-foreground">{role}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-primary/5 border-t border-border">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <Mail className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Interested in Joining?</h2>
            <p className="text-muted-foreground mb-8">
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
    </Layout>;
}