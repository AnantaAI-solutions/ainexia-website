import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Lightbulb, Globe, BookOpen, ArrowRight, Mail,
  Heart, Zap, Users, Coffee, TrendingUp, Clock
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import careersAbstract from "@/assets/graphics/careers_growth.png";
import careersAbstractLight from "@/assets/graphics/careers_growth_light.png";

const culture = [
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    description: "We encourage experimentation, creative problem-solving, and thinking beyond conventional approaches."
  },
  {
    icon: Globe,
    title: "Flexible & Remote-Friendly",
    description: "Work from anywhere with a focus on outcomes, not hours. We trust our people to deliver."
  },
  {
    icon: BookOpen,
    title: "Learning-Focused",
    description: "Continuous growth through challenging projects, access to resources, and active mentorship."
  }
];

const perks = [
  { icon: Heart, label: "Work on meaningful AI" },
  { icon: Zap, label: "Cutting-edge tech stack" },
  { icon: Users, label: "Small, high-impact team" },
  { icon: Coffee, label: "Async-first culture" },
  { icon: TrendingUp, label: "Fast career growth" },
  { icon: Clock, label: "Flexible hours" },
];

const futureRoles = [
  {
    title: "AI / ML Engineers",
    description: "Deep expertise in PyTorch, model training, fine-tuning, and deployment."
  },
  {
    title: "Computer Vision Engineers",
    description: "Object detection, image segmentation, and real-time video processing."
  },
  {
    title: "Robotics Engineers",
    description: "ROS2, SLAM, sensor fusion, and autonomous navigation systems."
  },
  {
    title: "Software Engineers",
    description: "Backend APIs, cloud infrastructure, and ML pipeline development."
  }
];

export default function CareersPage() {
  const { theme } = useTheme();
  const currentImage = theme === "dark" ? careersAbstract : careersAbstractLight;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">

        {/* Animated Background Graphic */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none z-0">
          <img
            src={currentImage}
            alt="AI careers growth abstract"
            className={`w-full max-w-[1200px] object-cover animate-float-slow filter brightness-90 contrast-125 ${theme === "dark" ? "mix-blend-screen" : "mix-blend-multiply opacity-70"}`}
          />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <span className="section-label mb-5 block">Join Our Mission</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 animate-fade-in">
              <span className="gradient-text">Careers</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-1 max-w-2xl">
              We're not actively hiring at the moment, but we always welcome connections
              with talented individuals who share our passion for practical, impactful AI.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 animate-fade-in-delay-2">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse-slow" />
              <span className="text-sm font-medium text-amber-600 dark:text-amber-400">Hiring soon — stay connected</span>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="section-container relative">
          <div className="text-center mb-14">
            <span className="section-label mb-4 block">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Culture</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              The environment we're building for our future team.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {culture.map((item, index) => (
              <div key={index} className="group text-center premium-card">
                <div className="icon-box-lg mx-auto mb-5">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Perks Grid */}
          <div>
            <h3 className="text-center font-semibold text-muted-foreground mb-6 uppercase tracking-widest text-sm">Why AINEXIA?</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {perks.map((perk, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 text-center">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <perk.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-foreground/80">{perk.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Roles */}
      <section className="section-padding relative overflow-hidden">
        <div className="section-container relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label mb-4 block">What We'll Need</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Future Roles</h2>
              <p className="text-muted-foreground text-lg">
                Areas where we'll be building our team as we grow.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {futureRoles.map((role, index) => (
                <div
                  key={index}
                  className="group premium-card gradient-border"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-black text-primary/15 group-hover:text-primary/30 transition-colors font-display leading-none">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{role.title}</h3>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="orb w-[400px] h-[400px] bg-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />

        <div className="section-container relative">
          <div className="max-w-2xl mx-auto text-center">
            <div className="icon-box-lg mx-auto mb-6">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <span className="section-label mb-4 block">Stay Connected</span>
            <h2 className="text-3xl font-bold mb-4">Interested in Joining?</h2>
            <p className="text-muted-foreground mb-10 text-lg">
              While we're not actively hiring, we'd love to hear from you.
              Reach out and let's stay connected for when we do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="group">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="mailto:contact@ainexia.in" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  contact@ainexia.in
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}