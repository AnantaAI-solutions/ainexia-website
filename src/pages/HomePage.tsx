import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import {
  Eye, MessageSquare, AudioLines, Bot, ArrowRight,
  CheckCircle2, Cpu, Zap, Shield, TrendingUp,
  Brain, Layers, Globe, Sparkles, ChevronDown,
  Search, Lightbulb, Package, Rocket
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const solutions = [
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Object detection, visual inspection, surveillance & autonomous perception systems.",
    tag: "Vision AI",
    color: "from-blue-500/20 to-cyan-500/10"
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Intelligent chatbots, document understanding, semantic search & text analytics.",
    tag: "Language AI",
    color: "from-violet-500/20 to-purple-500/10"
  },
  {
    icon: AudioLines,
    title: "Speech & Audio Intelligence",
    description: "Voice recognition, real-time transcription, audio classification & sound analytics.",
    tag: "Audio AI",
    color: "from-emerald-500/20 to-teal-500/10"
  },
  {
    icon: Bot,
    title: "Robotics & Automation",
    description: "Sensor fusion, autonomous navigation, intelligent control & edge AI systems.",
    tag: "Robotics AI",
    color: "from-orange-500/20 to-amber-500/10"
  },
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "Demand forecasting, anomaly detection, risk modeling & data-driven decisions.",
    tag: "Analytics AI",
    color: "from-pink-500/20 to-rose-500/10"
  },
  {
    icon: Layers,
    title: "Custom AI Products",
    description: "End-to-end AI product development from concept to deployment at scale.",
    tag: "Product AI",
    color: "from-indigo-500/20 to-blue-500/10"
  }
];

const stats = [
  { value: 9, suffix: "+", label: "Years AI Expertise" },
  { value: 5, suffix: "+", label: "AI Domains" },
  { value: 100, suffix: "%", label: "Custom Built" },
  { value: 24, suffix: "/7", label: "Support Ready" },
];

const whyUs = [
  {
    icon: Cpu,
    title: "Full-Stack AI Expertise",
    description: "From data pipelines to model deployment — we handle the entire AI lifecycle."
  },
  {
    icon: TrendingUp,
    title: "Production-Grade Systems",
    description: "Battle-tested systems engineered for reliability and enterprise-scale deployment."
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "Go from idea to working AI prototype in weeks. Validate fast, scale faster."
  },
  {
    icon: Shield,
    title: "Responsible & Secure AI",
    description: "Privacy-first architecture with bias monitoring, explainability, and compliance."
  }
];

const industries = [
  "Healthcare & Life Sciences",
  "Manufacturing & Industry 4.0",
  "Education & EdTech",
  "Finance & Insurance",
  "Retail & E-Commerce",
  "Logistics & Supply Chain"
];

const processSteps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Strategy",
    description: "Deep-dive into your business problem, data landscape, and success metrics to craft a winning AI strategy."
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Architecture & Design",
    description: "Design the optimal AI architecture — choosing the right models, infrastructure, and integration points."
  },
  {
    icon: Package,
    step: "03",
    title: "Build & Validate",
    description: "Iterative development with continuous validation — PoC, MVP, and production-grade refinement."
  },
  {
    icon: Rocket,
    step: "04",
    title: "Deploy & Scale",
    description: "Production deployment, MLOps setup, monitoring dashboards, and ongoing model performance optimization."
  }
];

const techLogos = [
  "PyTorch", "TensorFlow", "OpenCV", "Hugging Face", "YOLO", "LangChain",
  "ROS2", "Docker", "Kubernetes", "Apache Kafka", "MLflow", "ONNX",
  "TensorRT", "CUDA", "Scikit-learn", "JAX"
];

// Animated counter component
function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-black gradient-text tabular-nums">
      {count}{suffix}
    </div>
  );
}

export default function HomePage() {
  return (
    <Layout>
      {/* ─── Hero ─── */}
      <section className="relative min-h-[90vh] flex items-center py-32 lg:py-40 overflow-hidden">
        {/* Layered backgrounds */}
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 mesh-gradient" />
        {/* Orbs */}
        <div className="orb w-[600px] h-[600px] bg-primary/8 top-0 -left-40 opacity-60" style={{ animationDuration: "10s" }} />
        <div className="orb w-[500px] h-[500px] bg-violet-500/6 -bottom-20 -right-40 opacity-60" style={{ animationDuration: "14s", animationDelay: "2s" }} />
        <div className="orb w-[300px] h-[300px] bg-cyan-400/8 top-1/3 right-1/4 opacity-40" style={{ animationDuration: "8s", animationDelay: "1s" }} />

        <div className="section-container relative">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 mb-8 animate-fade-in">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">All AI Solutions — One Expert Partner</span>
            </div>

            {/* Headline */}
            <h1 className="responsive-hero-text font-black leading-[1.05] mb-8 animate-fade-in-up text-balance">
              Every AI Solution{" "}
              <span className="gradient-text">Your Business Needs</span>
              <br />
              <span className="text-muted-foreground text-3xl sm:text-4xl md:text-5xl font-medium">
                Built, Deployed & Scaled
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-1">
              Vision, Language, Audio, Robotics, LLMs — backed by{" "}
              <span className="text-foreground/80 font-medium">9+ years of hands-on AI expertise</span>.
              We design, build, and deploy AI systems that create measurable business impact —{" "}
              currently building in-house, ready for your next project.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="group">
                  Get a Free AI Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">See All Solutions</Link>
              </Button>
            </div>

            {/* Scroll hint */}
            <div className="mt-16 flex flex-col items-center gap-2 text-muted-foreground animate-fade-in-delay-3">
              <span className="text-xs font-medium uppercase tracking-widest">Scroll to explore</span>
              <ChevronDown className="h-5 w-5 animate-bounce" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="relative -mt-4 z-10">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 glass-card rounded-2xl p-8 shadow-xl">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <div className="text-sm text-muted-foreground font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── One-Stop Positioning ─── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe className="h-5 w-5 text-primary" />
              <span className="section-label">Why One Partner for All AI</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Stop juggling multiple AI vendors
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most companies work with 3–5 different vendors for their AI needs — leading to{" "}
              fragmented systems, integration headaches, and wasted budgets. AINEXIA brings{" "}
              every AI capability under one roof with unified architecture, seamless integration,{" "}
              and a single point of accountability.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Solutions Grid ─── */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-card/40" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

        <div className="section-container relative">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">What We Build</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete AI Solutions Suite
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From computer vision to predictive analytics — every AI capability your business needs,
              expertly built and production-ready.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="group premium-card gradient-border cursor-default"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div className="icon-box-lg">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <span className="tag-badge">{item.tag}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  <div className="mt-5 flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services" className="group">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── How We Work (Process) ─── */}
      <section className="section-padding relative overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-primary/6 top-0 right-0 opacity-50" />
        <div className="orb w-[300px] h-[300px] bg-violet-500/5 bottom-0 left-10 opacity-40" />

        <div className="section-container relative">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              From Idea to Impact — Our Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A proven 4-step framework that takes your AI vision from concept to production.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative p-6 rounded-2xl border border-border hover:border-primary/40 bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start justify-between mb-5">
                  <div className="icon-box">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-3xl font-black text-primary/15 group-hover:text-primary/25 transition-colors font-display">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-bold mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tech Logos Marquee ─── */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-card/40" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="section-container relative mb-6">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest">
            Powered by cutting-edge AI technologies
          </p>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...techLogos, ...techLogos].map((tech, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-5 py-2.5 rounded-xl border border-border bg-background text-sm font-mono font-medium text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Industries + Why Us ─── */}
      <section className="section-padding relative overflow-hidden">
        <div className="section-container relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label mb-4 block">Industries We Serve</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-balance">
                AI Solutions for Every Industry
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                We understand the unique challenges of your industry and deliver AI solutions
                tailored to your specific workflows, compliance needs, and growth objectives.
              </p>
              <ul className="space-y-3 mb-8">
                {industries.map((item, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="heroOutline" asChild>
                <Link to="/industries" className="group">
                  See Industry Solutions
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Why Us Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="icon-box mb-5">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 cta-gradient" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="orb w-[400px] h-[400px] bg-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />

        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label mb-4 block">Get Started Today</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-balance">
              Ready to consolidate your AI strategy?
            </h2>
            <p className="text-muted-foreground mb-4 text-lg">
              Get a free consultation to discover how AINEXIA can replace multiple vendors
              with one integrated, powerful AI platform.
            </p>
            <p className="text-sm text-muted-foreground mb-10">
              No commitment required · Response within 24 hours
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="group">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="tel:+918128569967">Call Us Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
