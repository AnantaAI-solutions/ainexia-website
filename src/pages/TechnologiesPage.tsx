import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Eye, MessageSquare, Bot, Cloud, Database, GitBranch, ArrowRight, Info } from "lucide-react";
import { useState } from "react";

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

export default function TechnologiesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? techCategories
    : techCategories.filter(c => c.filter === activeFilter);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="orb w-[500px] h-[500px] bg-primary/8 -top-20 -right-20 opacity-50" />

        <div className="section-container relative">
          <div className="max-w-3xl">
            <span className="section-label mb-5 block">Our Tech Stack</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 animate-fade-in">
              <span className="gradient-text">Technologies</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-1 max-w-2xl">
              We leverage modern AI frameworks and tools to build robust, production-ready systems.
              Our technology choices are driven by project needs — not fixed stacks.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs + Tech Grid */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-card/50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="section-container relative">
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
            {filtered.map((category, index) => (
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

      {/* Philosophy callout */}
      <section className="section-padding relative overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-primary/6 top-0 left-0 opacity-40" />
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl gradient-border border border-primary/20 bg-card">
              <div className="flex items-start gap-4">
                <div className="icon-box-lg flex-shrink-0">
                  <Info className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 text-primary">Technology Agnostic Philosophy</h3>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    Technology choices are driven by project requirements, scalability needs, and
                    deployment constraints. We select the right tools for each unique challenge —
                    never adhering to a fixed stack when a better option exists.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact" className="group">
                  Discuss Your Tech Requirements
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