import { Layout } from "@/components/layout";
import { Target, Eye, Heart, Users } from "lucide-react";
const values = [{
  icon: Target,
  title: "Innovation",
  description: "Continuously exploring new approaches to solve complex AI challenges."
}, {
  icon: Eye,
  title: "Engineering Excellence",
  description: "Building robust, scalable systems with attention to detail."
}, {
  icon: Heart,
  title: "Practical AI Over Hype",
  description: "Focusing on real-world applicability rather than buzzwords."
}];
export default function AboutPage() {
  return <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About <span className="gradient-text">AnantaAI Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-1">
              AnantaAI Solutions was founded to build high-quality AI-driven solutions 
              that reduce manual effort and create meaningful impact through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-card border-y border-border">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Our Story
              </h2>
              <h3 className="text-3xl font-bold mb-6">
                Built on experience, driven by purpose
              </h3>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded by an engineer with deep experience in artificial intelligence, 
                AnantaAI Solutions emerged from a belief that AI can be meaningfully 
                applied across diverse domains—from finance and robotics to mobile 
                applications and digital systems.
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
      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl card-gradient border border-border">
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4 text-primary-foreground">
                Mission
              </h3>
              <p className="text-xl leading-relaxed">
                To design and deliver custom AI products that combine innovation, 
                engineering excellence, and real-world practicality.
              </p>
            </div>
            <div className="p-8 rounded-xl card-gradient border border-border">
              <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Vision
              </h3>
              <p className="text-xl leading-relaxed">
                To contribute to a world where AI responsibly enhances human 
                capability and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card border-y border-border">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => <div key={index} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              AnantaAI Solutions is currently a founder-led organization, with plans 
              to build a strong engineering team in the near future. We are committed 
              to bringing together talented individuals who share our vision for 
              practical, impactful AI.
            </p>
          </div>
        </div>
      </section>
    </Layout>;
}