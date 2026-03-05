import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Users, ArrowRight, Rocket, Star, Code2 } from "lucide-react";

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
  { year: "2023", event: "AINEXIA Intelligence Founded", detail: "Born from a vision to democratize enterprise-grade AI." },
  { year: "2024", event: "First Production AI Systems", detail: "Deployed computer vision and NLP systems for early clients." },
  { year: "2025", event: "Multi-Domain Expansion", detail: "Expanded into robotics, audio AI, and predictive analytics." },
  { year: "2026", event: "Scaling for Impact", detail: "Building toward a world-class AI engineering team." },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="orb w-[500px] h-[500px] bg-primary/8 -top-20 -right-20 opacity-50" />

        <div className="section-container relative">
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
        <div className="absolute inset-0 bg-card/50" />
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
                  <div className="text-3xl font-black gradient-text">3+</div>
                  <div className="text-xs text-muted-foreground font-medium mt-1">Years Building</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black gradient-text">10+</div>
                  <div className="text-xs text-muted-foreground font-medium mt-1">AI Systems</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black gradient-text">6+</div>
                  <div className="text-xs text-muted-foreground font-medium mt-1">Verticals</div>
                </div>
              </div>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                Founded by an engineer with deep experience in artificial intelligence,
                AINEXIA Intelligence emerged from a belief that AI can be meaningfully
                applied across diverse domains — from education and autonomy to analytics
                and enterprise platforms.
              </p>
              <p>
                Our focus has always been on <span className="text-foreground/90 font-medium">practical, deployable AI</span> rather than hype.
                The true value of AI lies not in its complexity, but in its ability to solve
                real problems and create tangible business outcomes.
              </p>
              <p>
                Today, we work with organizations to design and build custom AI products
                that are engineered for production — not just proof of concepts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding relative overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-primary/6 top-0 left-0 opacity-40" />
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
        <div className="absolute inset-0 bg-card/50" />
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
        <div className="absolute inset-0 bg-card/50" />
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