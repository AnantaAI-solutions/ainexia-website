import { Layout } from "@/components/layout";
import { Target, Eye, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "Continuously exploring new approaches to solve complex AI challenges."
  },
  {
    icon: Eye,
    title: "Engineering Excellence",
    description: "Building robust, scalable systems with attention to detail."
  },
  {
    icon: Heart,
    title: "Practical AI Over Hype",
    description: "Focusing on real-world applicability rather than buzzwords."
  }
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        
        <div className="section-container relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              About <span className="gradient-text">AINEXIA Intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-1">
              AINEXIA Intelligence was founded to build next-generation AI systems 
              that reduce manual effort and create meaningful impact through technology.
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
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-sm font-semibold text-primary uppercase tracking-[0.15em] mb-4">
                Our Story
              </h2>
              <h3 className="text-3xl font-bold mb-6">
                Built on experience, driven by purpose
              </h3>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                Founded by an engineer with deep experience in artificial intelligence, 
                AINEXIA Intelligence emerged from a belief that AI can be meaningfully 
                applied across diverse domains—from education and autonomy to analytics 
                and enterprise platforms.
              </p>
              <p>
                Our focus has always been on practical, deployable AI rather than hype. 
                We believe that the true value of AI lies not in its complexity, but in 
                its ability to solve real problems and create tangible business outcomes.
              </p>
              <p>
                Today, we work with organizations to design and build custom AI products 
                that are engineered for production, not just proof of concepts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        
        <div className="section-container relative">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 rounded-xl bg-secondary/20 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_-10px_hsl(199_89%_48%/0.3)]">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-[0.15em] mb-4">
                Mission
              </h3>
              <p className="text-xl leading-relaxed text-foreground">
                To design and deliver custom AI products that combine innovation, 
                engineering excellence, and real-world practicality.
              </p>
            </div>
            <div className="group p-8 rounded-xl bg-secondary/20 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_-10px_hsl(199_89%_48%/0.3)]">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-[0.15em] mb-4">
                Vision
              </h3>
              <p className="text-xl leading-relaxed text-foreground">
                To contribute to a world where AI responsibly enhances human 
                capability and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-card/50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="section-container relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The principles that guide every decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors group-hover:shadow-[0_0_30px_-5px_hsl(199_89%_48%/0.4)]">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              AINEXIA Intelligence is currently a founder-led organization, with plans 
              to build a strong engineering team in the near future. We are committed 
              to bringing together talented individuals who share our vision for 
              next-generation, impactful AI.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}