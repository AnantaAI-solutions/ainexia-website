import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import {
  Eye,
  MessageSquare,
  AudioLines,
  Bot,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Zap,
  Shield,
  TrendingUp,
  Code2,
  Cloud,
  Database,
} from "lucide-react";

const whatWeDo = [
  "Custom AI Product Development",
  "AI System Design & Architecture",
  "Model Development, Optimization & Deployment",
  "End-to-End AI Engineering Support",
];

const implementationShowcase = [
  {
    icon: Eye,
    title: "Computer Vision Systems",
    description:
      "Object detection, visual inspection, and intelligent monitoring pipelines for production environments.",
    image: "/illustrations/computer-vision.svg",
  },
  {
    icon: MessageSquare,
    title: "Language Intelligence",
    description:
      "Conversational AI, semantic search, and document understanding workflows powered by modern LLM architectures.",
    image: "/illustrations/language-intelligence.svg",
  },
  {
    icon: AudioLines,
    title: "Audio AI",
    description:
      "Speech-to-intent analytics, acoustic event detection, and real-time audio signal intelligence.",
    image: "/illustrations/audio-ai.svg",
  },
  {
    icon: Bot,
    title: "Autonomous Robotics",
    description:
      "Sensor fusion, spatial awareness, and decision loops for autonomous and semi-autonomous systems.",
    image: "/illustrations/robotics.svg",
  },
];

const whyUs = [
  {
    icon: Cpu,
    title: "Advanced AI & System Design",
    description:
      "Cutting-edge intelligent systems built on deep research and practical engineering.",
  },
  {
    icon: TrendingUp,
    title: "Scalable, Real-World Solutions",
    description:
      "Systems engineered for reliability, performance, and seamless deployment at scale.",
  },
  {
    icon: Zap,
    title: "Applied Intelligence",
    description:
      "AI solutions for education, autonomy, analytics, and enterprise platforms.",
  },
  {
    icon: Shield,
    title: "Responsible AI",
    description:
      "Long-term vision with ethical considerations integrated into every solution.",
  },
];

const technologyStack = [
  {
    icon: Code2,
    title: "Application Layer",
    items: ["React + TypeScript", "Vite + SWC", "Tailwind + shadcn/ui"],
  },
  {
    icon: Cloud,
    title: "AI Delivery",
    items: ["Model APIs", "Inference services", "Automation workflows"],
  },
  {
    icon: Database,
    title: "Data & Platform",
    items: ["Supabase", "Event logging", "Analytics pipelines"],
  },
];

const implementationKeywords = [
  "Computer Vision",
  "LLM & NLP",
  "Audio Intelligence",
  "Predictive Analytics",
  "MLOps Automation",
  "Edge AI",
  "Real-time Monitoring",
  "Robotics Intelligence",
];

export default function HomePage() {
  return (
    <Layout>
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-glow-pulse" />

        <div className="section-container relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-6 animate-fade-in">
              AINEXIA Intelligence
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 animate-fade-in">
              The Next Era of <span className="gradient-text">Intelligent Systems</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-1">
              We design and build next-generation AI-powered systems that transform data,
              intelligence, and automation into real-world impact.
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

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-[0.15em] mb-6">Who We Are</h2>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
              AINEXIA Intelligence is focused on creating intelligent systems that learn,
              adapt, and scale—bridging cutting-edge AI research with practical, deployable
              solutions for enterprises, institutions, and future-focused platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="absolute inset-0 bg-card/50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="section-container relative">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Implementation Highlights</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              A concise look at where we build and deploy AI systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">What We Do</h3>
              <ul className="space-y-4">
                {whatWeDo.map((item, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-lg text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {implementationShowcase.map((item, index) => (
                <article
                  key={item.title}
                  className="group rounded-xl border border-border/80 bg-card/60 overflow-hidden hover-lift hover-glow"
                >
                  <div className="aspect-[16/10] overflow-hidden border-b border-border/60">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${index % 2 === 0 ? "animate-float" : "animate-float-delayed"}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className="h-4 w-4 text-primary" />
                      <h4 className="font-semibold">{item.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="section-container relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why AINEXIA Intelligence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We combine advanced AI expertise with practical engineering to deliver
              next-generation solutions that work in the real world.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-secondary/20 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsl(199_89%_48%/0.3)]"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="absolute inset-0 bg-card/40" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,hsl(199_89%_48%/0.12),transparent_45%),radial-gradient(circle_at_80%_80%,hsl(187_72%_50%/0.1),transparent_40%)]" />
        <div className="section-container relative">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology We Use</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Product engineering, AI infrastructure, and data platforms integrated as one stack.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {technologyStack.map((stack, index) => (
              <div
                key={stack.title}
                className={`rounded-xl border border-border/70 bg-secondary/25 p-6 hover-glow shimmer ${index === 1 ? "animate-float-delayed" : "animate-float"}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <stack.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{stack.title}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="text-muted-foreground text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {implementationKeywords.map((keyword) => (
              <span
                key={keyword}
                className="px-4 py-2 rounded-full text-sm bg-secondary/40 border border-border/70 text-foreground/90"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute inset-0 mesh-gradient opacity-50" />

        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to build intelligent systems that create real impact?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let&apos;s discuss how AI can transform your operations and unlock new possibilities.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start Your AI Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
