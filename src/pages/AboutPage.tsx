import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, Star, Code2, Target, Eye, Heart, Users, ArrowRight } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import aboutAbstract from "@/assets/graphics/about_mission.png";
import aboutAbstractLight from "@/assets/graphics/about_mission_light.png";

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "Continuously exploring new approaches to solve complex AI challenges with creative engineering.",
    number: "01"
  },
  {
    icon: Eye,
    title: "Engineering Excellence",
    description: "Building robust, scalable systems with meticulous attention to detail and quality.",
    number: "02"
  },
  {
    icon: Heart,
    title: "Practical AI Over Hype",
    description: "Focusing on real-world applicability and measurable impact rather than buzzwords.",
    number: "03"
  }
];

const milestones = [
  { year: "Feb 2026", event: "AINEXIA Intelligence Founded", detail: "Born from 9+ years of hands-on AI experience — a company built to make enterprise AI accessible and practical." },
  { year: "2026", event: "In-House AI Projects Underway", detail: "Actively building internal AI products across Computer Vision, LLMs, Robotics, and Speech AI." },
  { year: "2026", event: "Building the Foundation", detail: "Establishing core AI capabilities, infrastructure, and product roadmap for client-ready delivery." },
  { year: "Next", event: "First Client Deployments", detail: "Preparing to deliver production-grade AI solutions to external clients across diverse industries." },
];

export default function AboutPage() {
  const { theme } = useTheme();
  const currentImage = theme === "dark" ? aboutAbstract : aboutAbstractLight;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">

        {/* Animated Background Graphic */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none z-0">
          <img
            src={currentImage}
            alt="AI mission abstract"
            className={`w-full max-w-[1200px] object-cover animate-float-slow filter brightness-90 contrast-125 ${theme === "dark" ? "mix-blend-screen" : "mix-blend-multiply opacity-70"}`}
          />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-4xl">
            <span className="section-label mb-5 block">Who We Are</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 animate-fade-in leading-tight">
              About{" "}
              <span className="gradient-text">AINEXIA Intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-1 max-w-2xl">
              Founded to build next-generation AI systems that reduce manual effort and create
              meaningful impact through technology — practical, deployable, and production-ready.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="section-container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Built on experience, driven by purpose
              </h2>
              <div className="flex gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-black gradient-text">9+</div>
                  <div className="text-xs text-muted-foreground font-medium mt-1">Years Domain Expertise</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black gradient-text">5+</div>
                  <div className="text-xs text-muted-foreground font-medium mt-1">AI Capabilities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black gradient-text">Feb</div>
                  <div className="text-xs text-muted-foreground font-medium mt-1">Founded 2026</div>
                </div>
              </div>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                Founded in February 2026 by an AI engineer with <span className="text-foreground/90 font-medium">9+ years of hands-on domain expertise</span>,
                AINEXIA Intelligence was built on a simple belief — that enterprise-grade AI
                should be practical, deployable, and built for real-world impact.
              </p>
              <p>
                We are currently building in-house AI projects spanning Computer Vision,
                Large Language Models (LLMs), Robotics, Speech AI, and Predictive Analytics —
                developing the systems and expertise that will power client solutions.
              </p>
              <p>
                Our focus has always been on <span className="text-foreground/90 font-medium">production-ready AI over hype</span>.
                We build systems that work reliably in real environments — not just demos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding relative overflow-hidden">
        <div className="section-container relative">
          <div className="text-center mb-14">
            <span className="section-label mb-4 block">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold">Milestones That Define Us</h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -translate-x-1/2 hidden md:block" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className={`relative flex gap-6 md:gap-0 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="hidden md:flex absolute left-1/2 top-4 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background z-10" />

                  <div className={`w-full md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
                    <div className="group p-5 rounded-2xl border border-border hover:border-primary/40 bg-card transition-all duration-300 hover:shadow-lg">
                      <div className="tag-badge w-fit mb-3">{m.year}</div>
                      <h3 className="font-bold text-foreground mb-1">{m.event}</h3>
                      <p className="text-sm text-muted-foreground">{m.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="section-container relative">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group gradient-border p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="icon-box-lg mb-5">
                <Rocket className="h-7 w-7 text-primary" />
              </div>
              <span className="section-label mb-3 block">Mission</span>
              <p className="text-xl leading-relaxed text-foreground font-medium">
                To design and deliver custom AI products that combine innovation,
                engineering excellence, and real-world practicality.
              </p>
            </div>
            <div className="group gradient-border p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="icon-box-lg mb-5">
                <Star className="h-7 w-7 text-primary" />
              </div>
              <span className="section-label mb-3 block">Vision</span>
              <p className="text-xl leading-relaxed text-foreground font-medium">
                To contribute to a world where AI responsibly enhances human
                capability and operational efficiency at every scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding relative overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-primary/6 bottom-0 right-0 opacity-50" />
        <div className="section-container relative">
          <div className="text-center mb-14">
            <span className="section-label mb-4 block">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              The principles that guide every decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="group text-center premium-card">
                <div className="flex items-center justify-between mb-5">
                  <div className="icon-box-lg mx-0">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="text-5xl font-black text-primary/10 group-hover:text-primary/20 transition-colors font-display">
                    {value.number}
                  </span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="section-container relative">
          <div className="max-w-2xl mx-auto">
            <div className="p-10 rounded-2xl gradient-border border border-border bg-card text-center hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <span className="section-label mb-4 block">The Team</span>
              <h2 className="text-2xl font-bold mb-4">Founder-Led. Mission-Driven.</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                AINEXIA Intelligence is currently a founder-led organization, with plans
                to build a strong engineering team. We're committed to bringing together
                talented individuals who share our vision for next-generation, impactful AI.
              </p>
              <Button variant="hero" asChild>
                <Link to="/careers" className="group">
                  See Future Roles
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}