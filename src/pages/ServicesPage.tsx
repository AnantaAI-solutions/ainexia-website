import { Link } from "react-router-dom";
import { useState } from "react";
import cvImage from "@/assets/graphics/computer_vision.png";
import nlpImage from "@/assets/graphics/nlp_language.png";
import roboticsImage from "@/assets/graphics/robotics.png";
import advisoryImage from "@/assets/graphics/consulting_advisory.png";
import advisoryImageLight from "@/assets/graphics/consulting_advisory_light.png";
import servicesHero from "@/assets/graphics/services_hero.png";
import servicesHeroLight from "@/assets/graphics/services_hero_light.png";
import { useTheme } from "@/components/ThemeProvider";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Eye, MessageSquare, Bot, Lightbulb, ArrowRight,
  Brain, Cloud, Database, GitBranch, Package, CheckCircle2,
  Server, Cpu, DollarSign, Users, Clock
} from "lucide-react";

const techCategories = [
  {
    id: "all",
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Core frameworks and libraries for building intelligent systems.",
    technologies: ["PyTorch", "TensorFlow", "Scikit-learn", "ONNX", "JAX"],
    filter: "all"
  },
  {
    id: "vision",
    icon: Eye,
    title: "Computer Vision",
    description: "Tools for visual perception and image processing.",
    technologies: ["OpenCV", "CUDA", "YOLO", "Detectron2", "TensorRT"],
    filter: "vision"
  },
  {
    id: "nlp",
    icon: MessageSquare,
    title: "NLP & Language Models",
    description: "Technologies for natural language understanding and generation.",
    technologies: ["Transformers", "Hugging Face", "LangChain", "Vector DBs", "SpaCy"],
    filter: "nlp"
  },
  {
    id: "robotics",
    icon: Bot,
    title: "Robotics",
    description: "Frameworks for autonomous system development.",
    technologies: ["ROS / ROS2", "Sensor Fusion", "SLAM", "Motion Planning", "Gazebo"],
    filter: "robotics"
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Deployment & Infrastructure",
    description: "Cloud and containerization technologies for scalable AI.",
    technologies: ["Docker", "Kubernetes", "AWS", "Azure", "GCP"],
    filter: "cloud"
  },
  {
    id: "data",
    icon: Database,
    title: "Data & Streaming",
    description: "Data processing and storage solutions for AI pipelines.",
    technologies: ["Apache Kafka", "MongoDB", "PostgreSQL", "Redis", "Apache Spark"],
    filter: "data"
  },
  {
    id: "mlops",
    icon: GitBranch,
    title: "MLOps",
    description: "Tools for ML lifecycle management and monitoring.",
    technologies: ["MLflow", "DVC", "CI/CD Pipelines", "Model Monitoring", "A/B Testing"],
    filter: "mlops"
  }
];

const filterTabs = [
  { id: "all", label: "All" },
  { id: "vision", label: "Vision" },
  { id: "nlp", label: "NLP" },
  { id: "robotics", label: "Robotics" },
  { id: "cloud", label: "Cloud" },
  { id: "data", label: "Data" },
  { id: "mlops", label: "MLOps" },
];

const coreServices = [
  {
    icon: Package,
    title: "Custom AI Product Development",
    description: "End-to-end development from concept to production-ready systems. We take full ownership of the AI lifecycle — strategy, architecture, build, and deployment.",
    deliverables: [
      { icon: CheckCircle2, label: "Proof of Concept (PoC)" },
      { icon: CheckCircle2, label: "Minimum Viable Product (MVP)" },
      { icon: Server, label: "Production Systems" },
      { icon: Server, label: "SDKs & APIs" },
      { icon: Cpu, label: "On-device / Edge AI" },
      { icon: Cloud, label: "Cloud AI Platforms" },
    ]
  }
];

const engagementModels = [
  {
    icon: DollarSign,
    title: "Fixed-Price PoC",
    description: "Validate your AI idea with a defined scope, timeline, and budget. Perfect for exploring feasibility.",
    highlight: "Best for: New AI initiatives"
  },
  {
    icon: Users,
    title: "Dedicated AI Team",
    description: "A dedicated team of AI engineers embedded with your organization for long-term product development.",
    highlight: "Best for: Ongoing AI products"
  },
  {
    icon: Clock,
    title: "Advisory & Consulting",
    description: "Strategic AI guidance from expert engineers — architecture reviews, technology selection, and roadmap planning.",
    highlight: "Best for: Strategy & direction"
  },
];

const industries = [
  "Drones & Robotics",
  "Surveillance & Security",
  "Enterprise Automation",
  "Healthcare & Industrial",
  "Finance & Banking Security"
];

export default function ServicesPage() {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredTech = activeFilter === "all"
    ? techCategories
    : techCategories.filter(c => c.filter === activeFilter);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">

        {/* Animated Background Graphic */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none z-0">
          <img
            src={theme === "dark" ? servicesHero : servicesHeroLight}
            alt="AI services abstract"
            className="w-full max-w-[1200px] object-cover animate-float-slow filter brightness-90 contrast-125 image-blend-aware opacity-60 dark:opacity-90"
          />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <span className="section-label mb-5 block">What We Offer</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 animate-fade-in">
              AI <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-1 max-w-2xl">
              End-to-end AI services from consulting to full-scale product development.
              We build AI systems that solve real business problems — fast.
            </p>
          </div>
        </div>
      </section>

      {/* Custom AI Product Development */}
      <section className="section-padding relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="section-container relative">
          {coreServices.map((service, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-14 items-center">
              <div className="relative">
                <div className="icon-box-lg mb-6">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <span className="section-label mb-4 block">Flagship Service</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-5">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {service.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-background hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                    >
                      <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative glass-card rounded-2xl p-4 border-primary/10 overflow-hidden">
                  <img
                    src={theme === "dark" ? advisoryImage : advisoryImageLight}
                    alt="AI Strategy and advisory"
                    className="w-full h-auto object-cover rounded-xl animate-float-slow filter brightness-90 contrast-125 image-blend-aware"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section-padding relative overflow-hidden">
        <div className="section-container relative">
          <div className="text-center mb-14">
            <span className="section-label mb-4 block">Working Together</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Engagement Models</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Work with us in the way that fits your needs and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {engagementModels.map((model, index) => (
              <div key={index} className="group premium-card text-center">
                <div className="icon-box-lg mx-auto mb-5">
                  <model.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{model.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{model.description}</p>
                <span className="tag-badge">{model.highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="section-container relative">
          <div className="text-center mb-14">
            <span className="section-label mb-4 block">Tech Stack</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Technologies</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              We leverage modern AI frameworks and tools to build robust, production-ready systems.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${activeFilter === tab.id
                  ? "text-primary-foreground shadow-sm"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                  }`}
                style={activeFilter === tab.id ? { background: "var(--gradient-primary)" } : undefined}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTech.map((category, index) => (
              <div
                key={category.id}
                className="group premium-card gradient-border"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="icon-box-lg flex-shrink-0">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label mb-5 block">Take the First Step</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-balance">
              Ready to build your AI solution?
            </h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Let's discuss your requirements and create something extraordinary together.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="group">
                Start Your AI Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}