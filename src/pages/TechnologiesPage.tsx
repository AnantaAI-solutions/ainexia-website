import { Layout } from "@/components/layout";
import {
  Brain,
  Eye,
  MessageSquare,
  Bot,
  Cloud,
  Database,
  GitBranch,
} from "lucide-react";

const techCategories = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Core frameworks and libraries for building intelligent systems.",
    technologies: ["PyTorch", "TensorFlow", "Scikit-learn", "ONNX", "JAX"],
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Tools for visual perception and image processing.",
    technologies: ["OpenCV", "CUDA", "YOLO", "Detectron2", "TensorRT"],
  },
  {
    icon: MessageSquare,
    title: "NLP & Language Models",
    description: "Technologies for natural language understanding.",
    technologies: ["Transformers", "Hugging Face", "LangChain", "Vector Databases", "SpaCy"],
  },
  {
    icon: Bot,
    title: "Robotics",
    description: "Frameworks for autonomous system development.",
    technologies: ["ROS / ROS2", "Sensor Fusion", "SLAM", "Motion Planning", "Gazebo"],
  },
  {
    icon: Cloud,
    title: "Deployment & Infrastructure",
    description: "Cloud and containerization technologies.",
    technologies: ["Docker", "Kubernetes", "AWS", "Azure", "GCP"],
  },
  {
    icon: Database,
    title: "Data & Streaming",
    description: "Data processing and storage solutions.",
    technologies: ["Apache Kafka", "MongoDB", "PostgreSQL", "Redis", "Apache Spark"],
  },
  {
    icon: GitBranch,
    title: "MLOps",
    description: "Tools for ML lifecycle management.",
    technologies: ["MLflow", "DVC", "CI/CD Pipelines", "Model Monitoring", "A/B Testing"],
  },
];

export default function TechnologiesPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              <span className="gradient-text">Technologies</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-1">
              We leverage modern AI frameworks and tools to build robust, 
              production-ready systems. Our technology choices are driven by 
              project needs, not fixed stacks.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Grid */}
      <section className="section-padding bg-card border-y border-border">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-secondary text-xs border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-8 rounded-xl card-gradient border border-border">
              <p className="text-lg text-muted-foreground">
                <span className="text-foreground font-medium">Note:</span>{" "}
                Technology choices are driven by project requirements, scalability needs, 
                and deployment constraints. We select the right tools for each unique challenge, 
                rather than adhering to a fixed technology stack.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
